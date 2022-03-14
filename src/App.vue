<template>
  <router-view />
</template>
<script>
import { useRouter } from "vue-router";
import { mapMutations, mapState } from "vuex";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, onSnapshot, query, where } from "firebase/firestore";
import categories from "./data/categories";
import { getUserData, getUserDetailsDoc } from "./database/getData";
import { getProfileBackgroundUrl, getProfileImageUrl } from "./firebase-storage/getFiles";
import { updateNameAndSurname } from "./firebase-functions/functions";
export default {
  name: "App",
  data() {
    return {};
  },
  async created() {
    const store = this.$store;
    const user = getAuth().currentUser;
    const router = useRouter();
    if (user) {
      if (user.emailVerified) {
        await this.getUser(user);
        await this.getUserDetails(user, store);
        router.push(document.location.pathname);
      } else {
        router.push("/login");
        alert("Aby korzystać z serwisu, musisz zweryfikować adres e-mail");
      }
    } else {
      this.setGotUserInfo(true);
      console.log("Not logged in");
      router.push("/login");
    }
    console.log("created done");
  },
  computed: {
    ...mapState(["unreadNotificationsList"]),
  },
  methods: {
    ...mapMutations("user", ["setUserInfo"]),
    ...mapMutations("userDetails", ["setUserDetails"]),
    ...mapMutations("userPeopleInfo", ["setPeopleInfo"]),
    ...mapMutations("userGroupsInfo", ["setGroupsInfo"]),
    ...mapMutations("userPagesInfo", ["setPagesInfo"]),
    ...mapMutations(["setUnreadNotificationsList", "setPostsRated", "setGotUserInfo", "setCommentsRated"]),

    async getUser(user) {
      console.log("Logged in");
      let userData = await getUserData(user.uid);
      if (userData) {
        let profileImageStorageUrl = await getProfileImageUrl(user.uid);
        let profileImageUrl = null;
        if (profileImageStorageUrl != null) {
          let blob = await fetch(profileImageStorageUrl).then((r) => r.blob());
          profileImageUrl = URL.createObjectURL(blob);
        } else {
          profileImageUrl = "/img/avatar.png";
        }

        this.setUserInfo({
          uid: user.uid,
          username: userData.username,
          name: userData.name,
          surname: userData.surname,
          profileImage: profileImageUrl,
          description: userData.description,
        });
      } else {
        console.log("error");
      }
    },
    async getUserDetails(user, store) {
      this.listenToDataChanges(user);
      this.listenToPostsRatedChanges(user);
      this.listenToCommentsRatedChanges(user);
      this.listenToNotifications(user);
      this.setUserDetails(await getUserDetailsDoc(user.uid, "info"));

      this.loadAllCategories(store);
      this.setGotUserInfo(true);
      console.log("getting data2 done");
    },
    loadAllCategories(store) {
      let allCategories = [];
      let allCategoriesNames = {};
      for (let cat in categories) {
        allCategories.push(categories[cat].id);
        allCategoriesNames[categories[cat].id] = categories[cat].name;
        if (categories[cat].subcategories) {
          for (let subcat in categories[cat].subcategories) {
            allCategories.push(categories[cat].subcategories[subcat].id);
            allCategoriesNames[categories[cat].subcategories[subcat].id] = categories[cat].subcategories[subcat].name;
          }
        }
      }

      store.commit("setAllCategories", allCategories);
      store.commit("setAllCategoriesNames", allCategoriesNames);
      store.commit("setCategoriesObserved", allCategories);
    },
    listenToNotifications(user) {
      const q = query(collection(getFirestore(), "users", user.uid, "notifications"), where("read", "==", false));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          let notifiList = [];
          querySnapshot.forEach((doc) => {
            let singleNotifi = doc.data();
            singleNotifi["id"] = doc.id;
            notifiList.push(singleNotifi);
          });
          console.log("done getting notifications");
          this.setUnreadNotificationsList([...notifiList]);
          console.log("unreadNotifi: ", this.unreadNotificationsList);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    listenToDataChanges(user) {
      const userDataUnsub = onSnapshot(doc(getFirestore(), "users", user.uid, "details", "data"), (doc) => {
        this.setPeopleInfo({
          blocked: doc.data().people_blocked,
          friends: doc.data().people_friends,
          observed: doc.data().people_observed,
          friendsRequests: doc.data().people_friends_requests,
          userFriendsRequests: doc.data().people_user_friends_requests,
          blockedBy: doc.data().people_blocked_by,
        });
        this.setPagesInfo({
          blocked: doc.data().pages_blocked,
          liked: doc.data().pages_liked,
          observed: doc.data().pages_observed,
          administered: doc.data().pages_administered,
          moderated: doc.data().pages_moderated,
          requestAdmin: doc.data().pages_request_admin,
          requestMod: doc.data().pages_request_mod,
        });
        this.setGroupsInfo({
          blockedBy: doc.data().groups_blocked_by,
          joined: doc.data().groups_joined,
          observed: doc.data().groups_observed,
          administered: doc.data().groups_administered,
          moderated: doc.data().groups_moderated,
          requestAdmin: doc.data().groups_request_admin,
          requestMod: doc.data().groups_request_mod,
          requestMember: doc.data().groups_request_member,
        });
        console.log("done getting people");
      });
    },

    listenToPostsRatedChanges(user) {
      const postsRatedUnsub = onSnapshot(doc(getFirestore(), "users", user.uid, "details", "posts"), (doc) => {
        this.setPostsRated(doc.data().rated);
        console.log("done getting posts rated");
      });
    },

    listenToCommentsRatedChanges(user) {
      const commentsRatedUnsub = onSnapshot(doc(getFirestore(), "users", user.uid, "details", "comments"), (doc) => {
        this.setCommentsRated(doc.data().rated);
        console.log("done getting comments rated");
      });
    },
  },
};
</script>

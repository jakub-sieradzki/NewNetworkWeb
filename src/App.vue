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
      await this.getUser(user);
      await this.getUserDetails(user, store);
      router.push(document.location.pathname);
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
      this.listenToPeopleChanges(user);
      this.listenToGroupsChanges(user);
      this.listenToPagesChanges(user);
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
    listenToPeopleChanges(user) {
      const peopleDetailsUnsub = onSnapshot(doc(getFirestore(), "users", user.uid, "details", "people"), (doc) => {
        this.setPeopleInfo({
          blocked: doc.data().blocked,
          friends: doc.data().friends,
          observed: doc.data().observed,
          friendsRequests: doc.data().friends_requests,
          userFriendsRequests: doc.data().user_friends_requests,
          blockedBy: doc.data().blocked_by,
        });
        console.log("done getting people");
      });
    },

    listenToGroupsChanges(user) {
      const groupsDetailsUnsub = onSnapshot(doc(getFirestore(), "users", user.uid, "details", "groups"), (doc) => {
        this.setGroupsInfo(doc.data());
        console.log("done getting groups");
      });
    },

    listenToPagesChanges(user) {
      const pagesDetailsUnsub = onSnapshot(doc(getFirestore(), "users", user.uid, "details", "pages"), (doc) => {
        this.setPagesInfo(doc.data());
        console.log("done getting pages");
        console.log("pages info: ", doc.data())
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

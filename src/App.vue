<template>
  <router-view />
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, collection, onSnapshot, query, where } from "firebase/firestore";
import categories from "./data/categories";
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
      const db = getFirestore();
      await this.getUser(user, db, store);
      await this.getUserDetails(user, db, store);
      //this.getUnreadNotifications(user, db, store);
      this.listenToNotifications(user, db, store);
      router.push(document.location.pathname);
    } else {
      store.commit("setGotUserInfo", true);
      console.log("Not logged in");
      router.push("/login");
    }
    console.log("created done");
  },
  methods: {
    async getUser(user, db, store) {
      console.log("Logged in");
      store.commit("setUid", user.uid);
      const docRef = doc(db, "users", user.uid);

      await getDoc(docRef)
        .then((doc) => {
          const data = doc.data();
          store.commit("setName", data.name);
          store.commit("setSurname", data.surname);
          store.commit("setUsername", data.username);
          store.commit("setProfileImage", data.profileImageUrl);
          store.commit("setUserAuthenticated", true);
          console.log("getting data1 done");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getUserDetails(user, db, store) {
      const querySnapshot = await getDocs(collection(db, "users", user.uid, "details"));
      querySnapshot.forEach((doc) => {
        if (doc.id == "groups") {
          store.commit("setGroupsBlocked", doc.data().blocked);
          store.commit("setGroupsJoined", doc.data().joined);
          store.commit("setGroupsObserved", doc.data().observed);
        } else if (doc.id == "info") {
          store.commit("setBirthyear", doc.data().birthyear);
          store.commit("setDescription", doc.data().description);
          store.commit("setGender", doc.data().gender);
        } else if (doc.id == "pages") {
          store.commit("setPagesBlocked", doc.data().blocked);
          store.commit("setPagesLiked", doc.data().liked);
          store.commit("setPagesObserved", doc.data().observed);
        } else if (doc.id == "people") {
          store.commit("setPeopleBlocked", doc.data().blocked);
          store.commit("setPeopleFriends", doc.data().friends);
          store.commit("setPeopleObserved", doc.data().observed);
        } else if (doc.id == "posts") {
          store.commit("setPostsRated", doc.data().rated);
        }
      });
      this.loadAllCategories(store);
      store.commit("setGotUserInfo", true);
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
    async getUnreadNotifications(user, db, store) {
      let allNotifications = [];
      const querySnapshot = await getDocs(collection(db, "users", user.uid, "notifications"));
      querySnapshot.forEach((doc) => {
        allNotifications.push(doc.data());
      });

      store.commit("setUnreadNotificationsList", allNotifications);
    },
    listenToNotifications(user, db, store) {
      const q = query(collection(getFirestore(), "users", user.uid, "notifications"), where("read", "==", false));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          let notifiList = [];
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              console.log("added notification!: ", change.doc.data());
              let singleNotifi = change.doc.data();
              singleNotifi["id"] = change.doc.id;
              notifiList.push(singleNotifi);
              console.log("notifiList: ", notifiList);
            }
          });
          let newNotifi;
          if (store.getters.getUnreadNotificationsList != null) {
            console.log("this if");
            newNotifi = [...store.getters.getUnreadNotificationsList, ...notifiList];
            console.log("newNotifi: ", newNotifi);
          } else {
            newNotifi = notifiList;
          }
          store.commit("setUnreadNotificationsList", new Array(...newNotifi));
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

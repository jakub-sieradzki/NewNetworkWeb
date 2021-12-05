<template>
  <router-view />
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const router = useRouter();

    const getUser = () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        console.log("Logged in");
        store.commit("setUid", user.uid);

        const db = getFirestore();
        const docRef = doc(db, "users", user.uid);

        getDoc(docRef)
          .then((doc) => {
            const data = doc.data();
            store.commit("setName", data.name);
            store.commit("setSurname", data.surname);
            store.commit("setUsername", data.username);
            store.commit("setProfileImage", data.profileImageUrl);
            store.commit("setUserAuthenticated", true);
            //router.push("/home");
            router.push(router.currentRoute);
          })
          .catch((err) => {
            console.log(err);
          });

      } else {
        console.log("Not logged in");
        router.push("/login");
      }
    };

    return { getUser };
  },
  beforeCreate() {
    this.getUser();
  },
  methods() {
    function loadData(uid) {
        
    }
  }
};
</script>
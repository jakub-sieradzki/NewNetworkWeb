<template>
  <div v-if="postsLoaded" class="m-auto flex flex-col gap-6 w-full" style="">
    <PostsList :postsData="posts" />
  </div>
</template>
<script>
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";
import PostsList from "../Post/PostsList.vue";

export default {
  components: { PostsList },
  data() {
    return {
      postsLoaded: false,
      posts: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    const db = getFirestore();
    console.log(to.params.username);
    const q = query(collection(db, "posts"), where("username", "==", to.params.username, orderBy("createdTimestamp", "desc")));
    getDocs(q).then((docs) => {
      let docsPosts = [];
      docs.forEach((doc) => {
        let docData = doc.data();
        docData.id = doc.id;
        docsPosts.push(docData);
      });

      next((vm) => {
        vm.posts = docsPosts;
        vm.postsLoaded = true;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    const db = getFirestore();
    console.log(to.params.username);
    const q = query(collection(db, "posts"), where("username", "==", to.params.username, orderBy("createdTimestamp", "desc")));
    getDocs(q).then((docs) => {
      let docsPosts = [];
      docs.forEach((doc) => {
        let docData = doc.data();
        docData.id = doc.id;
        docsPosts.push(docData);
      });

      this.posts = docsPosts;
      this.postsLoaded = true;
      
      next();
    });
  },
  mounted() {},
};
</script>

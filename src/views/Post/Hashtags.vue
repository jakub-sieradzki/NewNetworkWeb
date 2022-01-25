<template>
  <div class="flex flex-col w-full items-center overflow-y-auto gap-5">
      <p class="text-4xl p-5">{{ "#" + hashtag }}</p>
      <PostsList :postsData="postsData"/>
  </div>
</template>
<script>
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";
import PostsList from "./PostsList.vue";
export default {
  components: {
    PostsList,
  },
  data() {
    return {
      hashtag: "",
      postsData: [],
    };
  },
  async beforeRouteEnter(to, from, next) {
    const hashtag = to.params.id.toLowerCase();
    let postsData = [];
    const db = getFirestore();
    const q = query(collection(db, "posts"), where("hashtags", "array-contains", hashtag), orderBy("createdTimestamp", "desc"));
    await getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        let docData = doc.data();
        docData.id = doc.id;
        postsData.push(docData);
      });
    });
    next((vm) => {
      vm.hashtag = hashtag;
      vm.postsData = postsData;
    });
  },
};
</script>

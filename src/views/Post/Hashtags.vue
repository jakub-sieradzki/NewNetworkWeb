<template>
  <div class="flex flex-col w-full items-center overflow-y-auto gap-5">
      <p class="text-4xl p-5">{{ "#" + hashtag }}</p>
      <PostsList :postsData="postsData"/>
  </div>
</template>
<script>
import PostsList from "./PostsList.vue";
import { getPostsByHashtag } from "../../database/getData";
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
    let postsData = await getPostsByHashtag(hashtag);

    next((vm) => {
      vm.hashtag = hashtag;
      vm.postsData = postsData;
    });
  },
};
</script>

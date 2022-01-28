<template>
  <div v-if="postsLoaded" class="m-auto flex flex-col gap-6 w-full" style="">
    <PostsList :postsData="posts" />
  </div>
</template>
<script>
import PostsList from "../Post/PostsList.vue";
import { getPostsByUsername } from "../../database/getData";

export default {
  components: { PostsList },
  data() {
    return {
      postsLoaded: false,
      posts: [],
    };
  },
  async beforeRouteEnter(to, from, next) {
    console.log(to.params.username);
    let docsPosts = await getPostsByUsername(to.params.username);
    next((vm) => {
      vm.posts = docsPosts;
      vm.postsLoaded = true;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    console.log(to.params.username);
    this.posts = await getPostsByUsername(to.params.username);
    this.postsLoaded = true;

    next();
  },
};
</script>

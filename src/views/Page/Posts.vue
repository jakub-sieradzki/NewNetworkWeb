<template>
  <div v-if="postsLoaded" class="m-auto flex flex-col gap-6 w-full items-center" style="">
    <PostsList :postsData="posts" />
  </div>
</template>
<script>
import PostsList from "../Post/PostsList.vue";
import { getAllPersonalPostsByUids, getPagePosts, getPublicPostsByUids } from "../../database/getData";
import { mapState } from "vuex";

export default {
  components: { PostsList },
  props: ["pid"],
  data() {
    return {
      postsLoaded: false,
      posts: [],
      lastUid: "",
    };
  },
  computed: {},
  methods: {
    async getPosts() {
      let docsPosts;
      docsPosts = await getPagePosts(this.pid);
      console.log("docsPosts: ", docsPosts);
      docsPosts.sort((a, b) => b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      // this.lastUid = this.uid;
      this.posts = docsPosts;
      this.postsLoaded = true;
    },
  },
  async mounted() {
    this.getPosts();
    console.log("pid: ", this.pid);
    console.log("mounted");
  },
  async updated() {
    console.log("updated");
    // if (this.lastUid != this.uid) {
    //   this.getPosts();
    // }
  },
};
</script>

<template>
  <div v-if="postsLoaded" class="m-auto flex flex-col gap-6 w-full" style="">
    <PostsList :postsData="posts" />
  </div>
</template>
<script>
import PostsList from "../Post/PostsList.vue";
import { getAllPostsByUids, getPostsByUsername, getPublicPostsByUids } from "../../database/getData";
import { mapState } from "vuex";

export default {
  components: { PostsList },
  props: ["uid"],
  data() {
    return {
      postsLoaded: false,
      posts: [],
      lastUid: "",
    };
  },
  computed: {
    ...mapState("userPeopleInfo", ["friends"]),
  },
  methods: {
    async getPosts() {
      let docsPosts;
      if (this.friends.includes(this.uid)) {
        docsPosts = await getAllPostsByUids([this.uid]);
      } else {
        docsPosts = await getPublicPostsByUids([this.uid]);
      }

      docsPosts.sort((a, b) => b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      this.lastUid = this.uid;
      this.posts = docsPosts;
      this.postsLoaded = true;
    },
  },
  async mounted() {
    this.getPosts();
    console.log("mounted");
    console.log(this.friends);
  },
  async updated() {
    console.log("updated");
    if (this.lastUid != this.uid) {
      this.getPosts();
    }
  },
};
</script>

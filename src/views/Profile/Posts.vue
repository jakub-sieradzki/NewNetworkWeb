<template>
  <div v-if="postsLoaded" class="m-auto flex flex-col gap-6 w-full items-center" style="">
    <PostsList :postsData="posts" />
  </div>
</template>
<script>
import PostsList from "../Post/PostsList.vue";
import { getAllPersonalPostsByUids, getPublicPostsByUids } from "../../database/getData";
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
        docsPosts = await getAllPersonalPostsByUids([this.uid]);
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
    console.log("post uid: ", this.uid);
    console.log("mounted");
    this.getPosts();
  },
  async updated() {
    console.log("updated");
    if (this.lastUid != this.uid) {
      this.getPosts();
    }
  },
};
</script>

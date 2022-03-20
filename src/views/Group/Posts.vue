<template>
  <div v-if="postsLoaded && showPosts" class="m-auto flex flex-col gap-6 w-full items-center" style="">
    <PostsList :postsData="posts" :groupView="true" />
  </div>
  <div v-else-if="!showPosts" class="flex w-full h-full items-center justify-center">
    <p>Aby zobaczyć posty musisz dołączyć do grupy</p>
  </div>
</template>
<script>
import PostsList from "../Post/PostsList.vue";
import { getAllPersonalPostsByUids, getGroupPosts, getPagePosts, getPublicPostsByUids } from "../../database/getData";
import { mapState } from "vuex";

export default {
  components: { PostsList },
  props: ["gid", "groupData"],
  data() {
    return {
      postsLoaded: false,
      posts: [],
      lastUid: "",
      showPosts: true,
    };
  },
  computed: {
    ...mapState("userGroupsInfo", ["joined"]),
  },
  methods: {
    async getPosts() {
      let docsPosts;

      docsPosts = await getGroupPosts(this.gid);
      console.log("docsPosts: ", docsPosts);
      docsPosts.sort((a, b) => b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      // this.lastUid = this.uid;
      this.posts = docsPosts;
      this.postsLoaded = true;
    },
  },
  async mounted() {
    if ((this.groupData.groupType == "private" && this.joined.includes(this.gid)) || this.groupData.groupType == "public") {
      this.getPosts();
    } else {
      this.showPosts = false;
    }
  },
  async updated() {},
};
</script>

<template>
  <div class="h-full w-full flex items-start justify-center pb-14 px-2 overflow-y-auto pt-24" v-if="post.length != 0">
    <Post v-if="!post.gid" :postData="post" />
    <post-from-group v-else :postData="post" />
  </div>
</template>
<script>
import Post from "./Post.vue";
import PostFromGroup from "./PostFromGroup.vue";
import { getPost } from "../../database/getData";
import { mapState } from 'vuex';
export default {
  components: { Post, PostFromGroup },
  data() {
    return {
      post: [],
    };
  },
  computed: {
    ...mapState("userPeopleInfo", ["friends"]),
    ...mapState("userGroupsInfo", ["joined"]),
  },
  async mounted() {
    console.log("postID: ", this.$route.params.postId);
    let postData = await getPost(this.$route.params.postId);

    if (postData) {
      if((postData.visibility == "friends" && !this.friends.includes(postData.uid)) || postData.visibility == "group_private" && !this.joined.includes(postData.gid)) {
        return;
      }
      this.post = postData;
    } else {
      console.log("No such document!");
    }
  },
};
</script>

<template>
  <div class="h-full w-full flex items-start justify-center pt-5 pb-14 px-2 xl:pr-48 overflow-y-auto custom-scrollbar" v-if="post.length != 0">
    <Post :postData="post" />
  </div>
</template>
<script>
import Post from "./Post.vue";
import { getPost } from "../../database/getData";
import { mapState } from 'vuex';
export default {
  components: { Post },
  data() {
    return {
      post: [],
    };
  },
  computed: {
    ...mapState("userPeopleInfo", ["friends"]),
  },
  async mounted() {
    console.log("postID: ", this.$route.params.postId);
    let postData = await getPost(this.$route.params.postId);

    if (postData) {
      if(postData.visibility == "friends" && !this.friends.includes(postData.uid)) {
        return;
      }
      this.post = postData;
    } else {
      console.log("No such document!");
    }
  },
};
</script>

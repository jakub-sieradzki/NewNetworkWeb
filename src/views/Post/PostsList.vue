<template>
  <div class="flex flex-col w-full flex-grow gap-5" style="max-width: 600px;">
    <div v-for="post in postsData" :key="post.id">
      <PostFromGroup v-if="post.gid && !groupView" :postData="post" />
      <Post v-else-if="!post.shareId || (post.shareId && (post.content || post.files.length > 0))" :postData="post" />
      <SharedPostNoContent v-else :postData="post" />
      <!-- <p v-else>Error loading post</p> -->
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import SharedPost from "./Shared/SharedPost.vue";
import SharedPostNoContent from "./Shared/SharedPostNoContent.vue";
import PostFromGroup from "./PostFromGroup.vue";
export default {
  props: ["postsData", "groupView"],
  components: {
    Post,
    SharedPost,
    SharedPostNoContent,
    PostFromGroup,
  },
  data() {
    return {};
  },
};
</script>

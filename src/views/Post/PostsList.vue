<template>
  <div class="m-auto flex flex-col gap-6 w-full max-w-xl h-full">
    <div v-for="post in postsData" :key="post.id">
      <Post v-if="!post.shareId || (post.shareId && (post.content || post.files.length > 0))" :postData="post"/>
      <SharedPostNoContent v-else :postData="post"/>
      <!-- <p v-else>Error loading post</p> -->
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import SharedPost from "./Shared/SharedPost.vue";
import SharedPostNoContent from "./Shared/SharedPostNoContent.vue";
export default {
  props: ["postsData"],
  components: {
    Post,
    SharedPost,
    SharedPostNoContent
  },
  data() {
    return {};
  },
};
</script>

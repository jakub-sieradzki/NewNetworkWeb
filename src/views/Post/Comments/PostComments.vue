<template>
  <!--Comments-->
  <div class="flex flex-col mt-5 mb-3">
    <SendComment :postId="postId" :commentId="null"/>
    <div class="flex flex-col gap-2 mt-6">
      <Comment v-for="com in comments" :key="com.id" :com="com" :postId="postId" :originalComId="com.id"/>
    </div>
  </div>
  <!-- End comments -->
</template>
<script>
import SendComment from "./SendComment.vue";
import Comment from "./Comment.vue";
import { getPostComments } from "@/database/getData"
export default {
  props: ["postId"],
  components: {
    SendComment,
    Comment
  },
  data() {
    return {
      comments: [],
    };
  },
  methods: {

  },
  async mounted() {
    this.comments = await getPostComments(this.postId);
  },
};
</script>

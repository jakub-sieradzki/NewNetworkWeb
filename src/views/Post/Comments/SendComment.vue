<template>
  <div class="flex items-center">
    <img :src="profileImage" class="w-9 h-9 mr-3 rounded-full" alt="avatar" />
    <span ref="commentSpan" onfocus="" class="mr-2 h-full max-h-32 py-2 px-4 text-sm bg-gray-100 dark:bg-gray-800 shadow-inner focus:outline-0 rounded-md flex-grow flex-shrink overflow-y-auto customCommentSpan" role="textbox" contenteditable></span>
    <div class="cursor-pointer h-6 w-6 ml-1 mr-2 flex-shrink-0">
      <svg @click="sendComment()" xmlns="http://www.w3.org/2000/svg" class="h-full w-full stroke-current rotate-45 lg:hover:rotate-0 transition duration-300 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="14" x2="21" y2="3" />
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { sendComment, sendSubcomment } from "@/database/setData";
export default {
  props: ["postId", "commentId", "usernameToRespond"],
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["uid", "username", "profileImage"]),
  },
  methods: {
    async sendComment() {
      let commentContent = this.$refs.commentSpan.innerHTML;
      if (commentContent != "") {
        if (this.commentId != null) {
          let sent = await sendSubcomment(this.postId, this.commentId, {
            content: commentContent,
            username: this.username,
            uid: this.uid,
          });
          if (sent) {
            this.$refs.commentSpan.innerHTML = "";
          }
        } else {
          let sent = await sendComment(this.postId, {
            content: commentContent,
            username: this.username,
            uid: this.uid,
          });

          if (sent) {
            this.$refs.commentSpan.innerHTML = "";
          }
        }
      }
    },
  },
  mounted() {
    // if (this.commentId != null) {
    //   this.$refs.commentSpan.innerHTML = "@" + this.usernameToRespond + "&nbsp;";
    // }
  },
};
</script>

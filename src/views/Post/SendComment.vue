<template>
  <div class="flex items-center">
    <img src="/img/avatar.png" class="w-8 h-8 mr-3" alt="avatar" />
    <span ref="commentSpan" onfocus="" class="mr-2 h-full max-h-32 py-2 px-4 text-sm bg-gray-100 dark:bg-gray-800 shadow-inner focus:outline-0 rounded-md flex-grow flex-shrink overflow-y-auto customCommentSpan" role="textbox" contenteditable></span>
    <div class="cursor-pointer h-6 w-6 ml-1 mr-2 flex-shrink-0">
      <svg @click="sendComment()" xmlns="http://www.w3.org/2000/svg" class="h-full w-full stroke-current rotate-45 hover:rotate-0 transition duration-300 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="14" x2="21" y2="3" />
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
      </svg>
    </div>
  </div>
</template>
<script>
import { getFirestore, collection, serverTimestamp, addDoc } from "firebase/firestore";
export default {
  props: ["postId", "commentId", "usernameToRespond"],
  data() {
    return {};
  },
  methods: {
    async sendComment() {
      let comment = this.$refs.commentSpan.innerHTML;
      if (comment != "") {
        const db = getFirestore();
        let colRef = null;
        if (this.commentId != null) {
          colRef = collection(db, "posts", this.postId, "comments", this.commentId, "subcomments");
        } else {
          colRef = collection(db, "posts", this.postId, "comments");
        }
        await addDoc(colRef, {
          content: comment,
          username: this.$store.getters.getUsername,
          uid: this.$store.getters.getUid,
          createdTimestamp: serverTimestamp(),
        }).then((snapshot) => {
          console.log("snapshot", snapshot);
          this.$refs.commentSpan.innerHTML = "";
          console.log("comment sent");
        });
      }
    },
  },
  mounted() {
    this.$refs.commentSpan.focus();

    // if (this.commentId != null) {
    //   this.$refs.commentSpan.innerHTML = "@" + this.usernameToRespond + "&nbsp;";
    // }
  },
};
</script>

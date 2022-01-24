<template>
  <div class="flex flex-col">
    <div class="flex flex-col border dark:border-gray-700 px-5 pt-3 pb-4 rounded-lg">
      <div class="flex justify-between items-center">
        <div @click="this.$router.push('/user/' + com.username + '/posts')" class="flex cursor-pointer hover:underline gap-1 h-7 items-center">
          <img class="h-5 w-5" src="/img/avatar.png" alt="avatar" />
          <p class="text-sm">@{{ com.username }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      </div>
      <p class="my-1">{{ com.content }}</p>
      <div class="flex justify-between mt-1" :class="{ 'mb-4': showRespondField }">
        <p @click="toggleRespondField" class="text-xs hover:underline cursor-pointer">Odpowiedz</p>
        <p class="text-xs">{{ com.createdTimestamp }}</p>
      </div>
      <SendComment v-if="showRespondField" :postId="postId" :commentId="originalComId" :usernameToRespond="com.username" />
    </div>
    <div v-if="showMoreCommentsOption" class="flex justify-end flex-grow-0 mt-1" :class="{ 'mb-2' : showMoreCommentsBoolean}">
      <div @click="showMoreComments" class="flex gap-1 justify-end items-center px-2 py-1 cursor-pointer">
        <p v-if="showMoreCommentsBoolean" class="text-xs">Ukryj odpowiedzi</p>
        <p v-else class="text-xs">Pokaż odpowiedzi</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-3 h-3 transition duration-300" :class="{'rotate-180' : showMoreCommentsBoolean}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
    <div class="flex flex-col gap-2 ml-10 lg:ml-14 mb-5" v-if="showMoreCommentsBoolean">
      <Comment v-for="subcom in subcomments" :key="subcom.id" :postId="postId" :com="subcom" :originalComId="originalComId" />
    </div>
  </div>
</template>
<script>
import { getFirestore, collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import SendComment from "./SendComment.vue";
import Comment from "./Comment.vue";
export default {
  props: ["postId", "com", "originalComId"],
  components: {
    SendComment,
    Comment,
  },
  data() {
    return {
      showRespondField: false,
      showMoreCommentsOption: false,
      showMoreCommentsBoolean: false,
      subcomments: [],
    };
  },
  methods: {
    toggleRespondField() {
      this.showRespondField = !this.showRespondField;
    },
    async showMoreComments() {
      if (!this.showMoreCommentsBoolean) {
        const db = getFirestore();
        const colRef = collection(db, "posts", this.postId, "comments", this.originalComId, "subcomments");
        const q = query(colRef, orderBy("createdTimestamp", "asc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let singleDoc = doc.data();
          singleDoc.id = doc.id;
          singleDoc.createdTimestamp = singleDoc.createdTimestamp.toDate().toLocaleString();
          this.subcomments.push(singleDoc);
        });
        this.showMoreCommentsBoolean = true;
      } else {
        this.subcomments = [];
        this.showMoreCommentsBoolean = false;
      }
    },
  },
  async mounted() {
    const db = getFirestore();
    const colRef = collection(db, "posts", this.postId, "comments", this.com.id, "subcomments");
    const q = query(colRef, limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length == 1) {
      this.showMoreCommentsOption = true;
    }
  },
};
</script>

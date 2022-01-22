<template>
  <!--Comments-->
  <div class="flex flex-col my-3">
    <div class="flex gap-3 h-9 items-center">
      <img src="/img/avatar.png" class="w-8 h-8" alt="avatar" />
      <input type="text" v-model="comment" placeholder="Twój komentarz..." class="input input-ghost border border-gray-500 h-9 flex-grow" />
      <button @click="sendComment()" class="">Wyślij</button>
    </div>
    <div class="flex flex-col gap-2 mt-5">
      <div v-for="com in comments" :key="com.id" class="flex flex-col bg-gray-200 bg-opacity-60 dark:bg-gray-800 px-5 pt-3 pb-4 rounded-lg">
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
        <div class="flex justify-between mt-1">
          <p class="text-xs">{{ com.createdTimestamp }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End comments -->
</template>
<script>
import { getFirestore, collection, getDocs, query, serverTimestamp, orderBy, addDoc } from "firebase/firestore";
export default {
  props: ["postId"],
  data() {
    return {
      comment: "",
      comments: [],
    };
  },
  methods: {
    async sendComment() {
      if (this.comment != "") {
        const db = getFirestore();
        console.log(this.id);
        const colRef = collection(db, "posts", this.postId, "comments");
        await addDoc(colRef, {
          content: this.comment,
          username: this.$store.getters.getUsername,
          uid: this.$store.getters.getUid,
          createdTimestamp: serverTimestamp(),
        }).then((snapshot) => {
          console.log("snapshot", snapshot);
          this.comment = "";
          console.log("comment sent");
        });
      }
    },
  },
  async mounted() {
    const db = getFirestore();
    const colRef = collection(db, "posts", this.postId, "comments");
    const q = query(colRef, orderBy("createdTimestamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let singleDoc = doc.data();
      singleDoc.id = doc.id;
      singleDoc.createdTimestamp = singleDoc.createdTimestamp.toDate().toLocaleString();
      this.comments.push(singleDoc);
    });
  },
};
</script>

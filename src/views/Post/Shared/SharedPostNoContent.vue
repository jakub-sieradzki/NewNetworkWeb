<template>
  <div class="flex flex-col dark:border-gray-800 rounded-lg shadow-inner bg-shite dark:bg-gray-900">
    <div class="flex justify-between px-4 py-3">
      <div class="flex items-center pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
          <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
        </svg>
        <p class="pl-5 text-sm">
          <span class="cursor-pointer hover:underline" @click="this.$router.push('/user/' + postData.username + '/posts')">@{{ postData.username }}</span> udostępnił post
        </p>
      </div>
      <div class="dropdown dropdown-end">
        <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="post__header__actions-button" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
        <ul class="dropdown-content dark:bg-gray-800 border dark:border-gray-700 shadow mt-3 rounded-lg w-52 h-14" tabindex="0">
          <li @click="deletePost()" class="flex items-center p-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
            <p class="text-sm pl-3">Usuń post</p>
          </li>
        </ul>
      </div>
    </div>
    <Post v-if="mainPostData" :postData="mainPostData" />
  </div>
</template>
<script>
import Post from "../Post.vue";
import { getAuth } from "firebase/auth";
import { deletePost } from "../../../database/setData";
import { getPost } from "../../../database/getData";
export default {
  props: ["postData"],
  components: { Post },
  data() {
    return {
      mainPostData: null,
    };
  },
  methods: {
    async deletePost() {
      const user = getAuth().currentUser;
      if (user.uid == this.postData.uid) {
        let deleted = await deletePost(this.postData.id);
        if (deleted) {
          alert("Usunięto post. Odśwież stronę aby zobaczyć zmiany");
        } else {
          alert("Wystąpił błąd");
        }
      } else {
        alert("To nie jest Twój post, więc nie możesz go usunąć :)");
      }
    },
  },
  async mounted() {
    this.mainPostData = await getPost(this.postData.shareId);
  },
};
</script>

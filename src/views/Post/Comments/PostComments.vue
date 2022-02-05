<template>
  <!--Comments-->
  <div class="flex flex-col mt-5 mb-3 gap-3">
    <SendComment :postId="postId" :commentId="null" />
    <div class="flex justify-end">
      <div class="dropdown dropdown-end">
        <div @click="toggleShowSortMenu" tabindex="0" class="flex text-sm gap-1.5 rounded-md px-3 py-2 lg:hover:bg-gray-100/70 dark:lg:hover:bg-gray-800/50 cursor-pointer transition" onclick="this.parentElement.classList.toggle('dropdown-open');document.activeElement.blur()">
          <p v-if="sort == 'latest'">Najnowsze</p>
          <p v-else-if="sort == 'best'">Najlepsze</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5 transition duration-300" :class="{ 'rotate-180': showSortMenu }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div tabindex="0" class="dropdownStyle">
          <p @click="changeSorting('latest')" class="dropdownItemStyle">Najnowsze</p>
          <p @click="changeSorting('best')" class="dropdownItemStyle">Najlepsze</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <Comment v-for="com in comments" :key="com.id" :com="com" :postId="postId" :originalComId="com.id" />
    </div>
  </div>
  <!-- End comments -->
</template>
<script>
import SendComment from "./SendComment.vue";
import Comment from "./Comment.vue";
import { getPostComments } from "@/database/getData";
export default {
  props: ["postId"],
  components: {
    SendComment,
    Comment,
  },
  data() {
    return {
      comments: [],
      showSortMenu: false,
      sort: "latest",
    };
  },
  methods: {
    toggleShowSortMenu() {
      this.showSortMenu = !this.showSortMenu;
    },
    async changeSorting(value) {
      this.sort = value;
      await this.getComments();
    },
    async getComments() {
      let coms = await getPostComments(this.postId);
      if (this.sort == "latest") {
        coms.sort((a, b) => b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      } else if (this.sort == "best") {
        coms.sort((a, b) => b.ratings["sum"] - a.ratings["sum"] || b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      }

      this.comments = coms;
    },
  },
  async mounted() {
    await this.getComments();
  },
};
</script>

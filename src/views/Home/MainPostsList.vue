<template>
  <div class="max-w-xl ml-4 mr-4 flex-shrink flex-grow" style="height: max-content">
    <div class="m-auto w-full flex flex-col items-center">
      <div class="dropdown w-52 mb-2">
        <div @click="toggleSort" tabindex="0" class="flex w-52 h-9 items-center m-auto justify-between pl-4 pr-4 mb-1.5 border rounded-md dark:border-gray-800 cursor-pointer lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800 transition text-sm bg-white dark:bg-gray-800 dark:bg-opacity-40" onclick="this.parentElement.classList.toggle('dropdown-open');document.activeElement.blur()">
          <p v-if="sort == 'latest'">Najnowsze</p>
          <p v-else-if="sort == 'best'">Najlepsze</p>
          <p v-else-if="sort == 'popular'">Najpopularniejsze</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5 transition duration-300" :class="{ 'rotate-180': showSortMenu }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div tabindex="0" class="dropdownStyle !mt-0">
          <p @click="changeSorting('latest')" class="px-2.5 py-2 lg:hover:bg-gray-200/60 lg:hover:dark:bg-gray-800/60 rounded-md cursor-pointer transition">Najnowsze</p>
          <p @click="changeSorting('best')" class="px-2.5 py-2 lg:hover:bg-gray-200/60 lg:hover:dark:bg-gray-800/60 rounded-md cursor-pointer transition">Najlepsze</p>
          <p @click="changeSorting('popular')" class="px-2.5 py-2 lg:hover:bg-gray-200/60 lg:hover:dark:bg-gray-800/60 rounded-md cursor-pointer transition">Najpopularniejsze</p>
        </div>
      </div>
      <PostsList :postsData="posts" />
    </div>

    <div class="h-10"></div>
  </div>
</template>
<script>
import Post from "../Post/Post.vue";
import PostsList from "../Post/PostsList.vue";
import { getAllPostsByUids, getPublicPostsByUids } from "../../database/getData";
import { mapState } from "vuex";
import { getPostAverageRating } from "@/helpers/postRating";
export default {
  components: { Post, PostsList },
  data() {
    return {
      postsData: [],
      posts: [],
      showSortMenu: false,
      sort: "latest",
    };
  },
  computed: {
    ...mapState("userPeopleInfo", ["observed", "friends"]),
    ...mapState(["currentType", "categoriesObserved"]),
  },
  watch: {
    currentType(newValue, oldValue) {
      this.loadPosts();
    },
    categoriesObserved(newValue, oldValue) {
      this.loadPosts();
    },
  },
  async mounted() {
    if (this.observed.length != 0) {
      let friendsPosts = await getAllPostsByUids(this.getAllObservedFriends());
      let otherPosts = await getPublicPostsByUids(this.getOnlyObservedUsers());
      this.postsData.push(...friendsPosts);
      this.postsData.push(...otherPosts);
    }
    this.loadPosts();
  },
  methods: {
    changeSorting(value) {
      this.sort = value;
      this.loadPosts();
    },
    toggleSort() {
      this.showSortMenu = !this.showSortMenu;
    },
    getAllObservedFriends() {
      let observedFriends = [];
      for (let i = 0; i < this.observed.length; i++) {
        if (this.friends.includes(this.observed[i])) {
          observedFriends.push(this.observed[i]);
        }
      }
      return observedFriends;
    },
    getOnlyObservedUsers() {
      let onlyObserved = this.observed.filter((el) => !this.friends.includes(el));
      return onlyObserved;
    },
    loadPosts() {
      //flitr posts by categories
      let filteredPosts = [];
      for (let postNumber in this.postsData) {
        if (this.postsData[postNumber].categories) {
          if (this.postsData[postNumber].categories.some((r) => this.categoriesObserved.includes(r))) {
            if (this.currentType == "all" || this.postsData[postNumber].type == this.currentType) {
              filteredPosts.push(this.postsData[postNumber]);
            }
          }
        }
      }
      if (this.sort == "latest") {
        filteredPosts.sort((a, b) => b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      } else if (this.sort == "best") {
        filteredPosts.sort((a, b) => getPostAverageRating(b.ratings) - getPostAverageRating(a.ratings) || b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      } else if (this.sort == "popular") {
        filteredPosts.sort((a, b) => b.ratings["count"] - a.ratings["count"] || b.createdTimestamp.toDate().getTime() - a.createdTimestamp.toDate().getTime());
      }

      this.posts = filteredPosts;
    },
  },
};
</script>

<template>
  <div class="max-w-xl ml-4 mr-4 flex flex-shrink flex-grow w-full" style="height: max-content">
    <CreatePost v-if="createPost" />
    <div class="m-auto w-full flex flex-col flex-grow items-center">
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
      <div class="h-10"></div>
    </div>
    <!-- Navbar for Mobile -->
    <div class="lg:hidden fixed bottom-0 left-0 px-2 md:px-5 w-full">
      <div v-if="showCategories" class="flex w-full justify-center">
        <div class="flex w-full md:w-96 justify-center mb-3 dark:bg-gray-800/40 bg-white/80 border dark:border-none backdrop-blur dark:backdrop-blur-xl rounded-2xl p-7">
          <div class="w-72">
            <filter-categories />
          </div>
        </div>
      </div>
      <div class="w-full h-14 dark:bg-gray-800/40 bg-white/80 border dark:border-none backdrop-blur dark:backdrop-blur-xl shadow-xl rounded-2xl mb-3 overflow-hidden">
        <div class="flex w-full h-full items-center justify-between gap-2">
          <div @click="toggleShowCategories" class="flex items-center justify-center gap-2 flex-grow h-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12l3 3l3 -3l-3 -3z" />
              <path d="M15 12l3 3l3 -3l-3 -3z" />
              <path d="M9 6l3 3l3 -3l-3 -3z" />
              <path d="M9 18l3 3l3 -3l-3 -3z" />
            </svg>
            <p class="text-xs">Kategorie</p>
          </div>
          <div @click="showCreatePost" class="shadow-md w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-900">
            <img src="/img/add.svg" alt="add" class="p-2" />
          </div>
          <div class="flex items-center justify-center gap-2 flex-grow h-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="14 7 21 7 21 14" />
            </svg>
            <p class="text-xs">Popularne</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "../Post/Post.vue";
import PostsList from "../Post/PostsList.vue";
import { getAllGroupsPostsByGids, getAllPagesPostsByPids, getAllPersonalPostsByUids, getPublicPostsByUids } from "../../database/getData";
import { mapState } from "vuex";
import { getPostAverageRating } from "@/helpers/postRating";
import CreatePost from "@/views/Post/CreatePost.vue";
export default {
  components: { Post, PostsList, CreatePost },
  data() {
    return {
      postsData: [],
      posts: [],
      showSortMenu: false,
      sort: "latest",
      createPost: false,
      showCategories: false,
    };
  },
  computed: {
    ...mapState("userPeopleInfo", ["observed", "friends"]),
    ...mapState("userPagesInfo", {
      pagesObserved: "observed",
    }),
    ...mapState("userGroupsInfo", {
      groupsObserved: "observed",
    }),
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
      let friendsPosts = await getAllPersonalPostsByUids(this.getAllObservedFriends());
      let otherPosts = await getPublicPostsByUids(this.getOnlyObservedUsers());
      let pagesPosts = await getAllPagesPostsByPids(this.pagesObserved);
      let groupsPosts = await getAllGroupsPostsByGids(this.groupsObserved);
      this.postsData.push(...friendsPosts);
      this.postsData.push(...otherPosts);
      this.postsData.push(...pagesPosts);
      this.postsData.push(...groupsPosts);
    }
    this.loadPosts();
  },
  methods: {
    showCreatePost() {
      this.createPost = true;
    },
    toggleShowCategories() {
      this.showCategories = !this.showCategories;
    },
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

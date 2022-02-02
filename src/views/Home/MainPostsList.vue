<template>
  <div class="max-w-xl ml-4 mr-4 flex-shrink flex-grow" style="height: max-content">
    <div class="m-auto w-full">
      <div class="flex w-52 h-9 items-center m-auto justify-between pl-4 pr-4 mb-3 border rounded-md dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm bg-gray-200 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-40">
        <p>Najnowsze</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
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
export default {
  components: { Post, PostsList },
  data() {
    return {
      postsData: [],
      posts: [],
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
      console.log(this.postsData);
    }
    this.loadPosts();
  },
  methods: {
    getAllObservedFriends() {
      let observedFriends = [];
      for (let i = 0; i < this.observed.length; i++) {
        if (this.friends.includes(this.observed[i])) {
          observedFriends.push(this.observed[i]);
        }
      }
      console.log("observed friends: ", observedFriends);
      return observedFriends;
    },
    getOnlyObservedUsers() {
      console.log("observed: ", this.observed);
      console.log("friends: ", this.friends);
      let onlyObserved = this.observed.filter((el) => !this.friends.includes(el));
      console.log("only observed: ", onlyObserved);
      return onlyObserved;
    },
    loadPosts() {
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

      this.posts = filteredPosts;
    },
  },
};
</script>

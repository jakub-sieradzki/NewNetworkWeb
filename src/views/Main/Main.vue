<template>
  <div class="dark:bg-slate-900/80 h-screen w-screen bg-gray-100 dark:text-white">
    <Navbar />
    <div class="absolute p-0 h-screen w-screen top-0">
      <div class="justify-center w-screen h-screen overflow-y-auto flex overflow-x-hidden">
        <router-view name="mainContent" v-slot="{ Component }">
          <keep-alive include="Search">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
    <!-- <div class="w-full h-full flex flex-col overflow-hidden z-0">
      <div class="overflow-hidden flex h-full"></div>
    </div> -->
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Navpanel from "./Navpanel.vue";
import CreatePost from "../Post/CreatePost.vue";
import FilterCategories from "../Categories/FilterCategories.vue";

export default {
  components: {
    Navbar,
    Navpanel,
    CreatePost,
    FilterCategories,
  },
  data() {
    return {
      createPost: false,
      showCategories: false,
    };
  },
  methods: {
    showCreatePost() {
      this.createPost = true;
    },
    toggleShowCategories() {
      this.showCategories = !this.showCategories;
    },
  },
};
</script>

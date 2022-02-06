<template>
  <CreatePost v-if="createPost" />
  <div class="sticky top-0 flex-shrink-0 ml-5 mt-12 w-64">
    <div class="flex-shrink w-full" style="height: 600px">
      <filter-categories />
      <div @click="showCreatePost" class="hidden w-full lg:flex items-center pt-8 pb-8 pl-4 pr-4 mt-12 justify-center rounded-lg transition duration-500 cursor-pointer transform lg:hover:scale-110 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl">
        <img src="/img/add.svg" alt="add" class="w-8 h-8 mr-1" />
        <p class="text-xl text-white text-center">Nowy post</p>
      </div>
    </div>
  </div>
</template>
<script>
import CreatePost from "../Post/CreatePost.vue";


import CategoriesList from "../Categories/CategoriesList.vue";
import FilterCategories from "../Categories/FilterCategories.vue"

export default {
  components: {
    CreatePost,
    CategoriesList,
    FilterCategories
  },
  data() {
    return {
      categories: {},
      createPost: false,
      allCategories: [],
      selectedCategories: [],
      showCategories: true,
    };
  },
  methods: {

    showCreatePost() {
      this.createPost = true;
    },

    loadAllCategories() {

    },
    loadSelectedCategories(value) {
      this.selectedCategories = value;
      //console.log("emitted cat: ", value);
    },
  },
  mounted() {
    this.loadAllCategories();
  },
};
</script>

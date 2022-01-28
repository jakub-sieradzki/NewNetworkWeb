<template>
  <CreatePost v-if="createPost" />
  <div class="justify-center 2xl:gap-10 w-full h-full overflow-y-scroll pt-3 custom-scrollbar flex 3xl:pr-32">
    <!--Categories-->
    <div class="" :class="[showMobileCategories ? ['absolute w-full dark:bg-gray-900 z-10'] : ['hidden lg:flex lg:sticky lg:top-0 lg:z-10']]">
      <Categories />
    </div>

    <!--End Categories-->
    <!--Posts Section-->
    <MainPostsList v-if="allLoaded" />
    <!--End Post Section-->
    <!--Popular-->
    <Popular />
    <!--End popular-->
    <!-- NavBar bottom for mobile -->
    <div class="lg:hidden lg:left-60 absolute w-full bottom-0 h-14 bg-gray-100 bg-opacity-95 dark:bg-gray-900 flex justify-between">
      <div @click="showMobileCategoriesClick()" class="w-full flex justify-center items-center cursor-pointer">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 mr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12l3 3l3 -3l-3 -3z" />
            <path d="M15 12l3 3l3 -3l-3 -3z" />
            <path d="M9 6l3 3l3 -3l-3 -3z" />
            <path d="M9 18l3 3l3 -3l-3 -3z" />
          </svg>
          <p class="hidden sm:block">Kategorie</p>
        </div>
      </div>
      <div class="w-1/6 flex justify-center">
        <div @click="showCreatePost" class="absolute shadow-md bottom-6 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-900">
          <img src="/img/add.svg" alt="add" class="p-3" />
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 mr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </svg>
          <p class="hidden sm:block">Popularne</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Categories from "./Categories.vue";
import MainPostsList from "./MainPostsList.vue";
import Popular from "./Popular.vue";
import CreatePost from "../Post/CreatePost.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Popular,
    Categories,
    MainPostsList,
    CreatePost,
  },

  name: "App",

  data() {
    return {
      createPost: false,
      showMobileCategories: false,
      allLoaded: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("before");
    next((vm) => {
      if (to.params.id == "text") {
        vm.setCurrentType("txt");
      } else if (to.params.id == "images") {
        vm.setCurrentType("img");
      } else {
        vm.setCurrentType("all");
      }
      vm.allLoaded = true;
    });
  },
  beforeRouteUpdate(to, from, next) {
      if (to.params.id == "text") {
        this.setCurrentType("txt");
      } else if (to.params.id == "images") {
        this.setCurrentType("img");
      } else {
        this.setCurrentType("all");
      }
    this.allLoaded = true;

    next();
  },
  methods: {
    ...mapMutations(["setCurrentType"]),
    showCreatePost() {
      this.createPost = true;
    },
    showMobileCategoriesClick() {
      this.showMobileCategories = !this.showMobileCategories;
    },
  },
};
</script>

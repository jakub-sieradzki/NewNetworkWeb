<template>
  <div class="dark:bg-gray-900 dark:text-white h-screen w-screen">
    <CreatePost v-if="createPost"/>
    <div class="w-full h-full flex flex-col overflow-y-hidden z-0">
        <Navbar />
        <div class="overflow-y-hidden flex h-full">
            <Navpanel />
            <div class="justify-center 2xl:gap-10 w-full h-full overflow-y-scroll pt-3 custom-scrollbar flex 3xl:pr-32">
                    <!--Categories-->
                        <Categories />
                    <!--End Categories-->
                    <!--Posts Section-->
                        <Main />
                    <!--End Post Section-->
                    <!--Popular-->
                        <Popular />
                    <!--End popular-->
            </div>
            <!-- <div class="flex items-center absolute -right-11 top-40 mt-2 bg-white border shadow-md rounded-t-md pr-4 pl-3 transform -rotate-90">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-8 h-8 pr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="6 15 12 9 18 15" />
              </svg>
              <p class="">Popularne</p>
            </div> -->
        </div>
    </div>
    <!-- NavBar bottom for mobile -->
  <div class="lg:hidden lg:left-60 absolute w-full bottom-0 h-14 bg-gray-100 bg-opacity-95 dark:bg-gray-900 flex justify-between">
          <div class="w-full  flex justify-center items-center">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 mr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                  <line x1="17" y1="17" x2="17" y2="17.01" />
                </svg>
              <p class="hidden sm:block">Kategorie</p>
            </div>
          </div>
          <div class="w-1/6 flex justify-center">
            <div @click="showCreatePost" class="absolute shadow-md bottom-6 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-900">
                <img src="images/add.svg" alt="add" class="p-3">
            </div>
          </div>
          <div class="w-full flex justify-center items-center">
            <div class="flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 mr-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
import Categories from './Categories.vue';
import Main from './Main.vue';
import Navbar from './Navbar.vue';
import Navpanel from './Navpanel.vue';
import Popular from './Popular.vue';
import CreatePost from './CreatePost.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  components: {
    Popular,
    Navbar,
    Navpanel,
    Categories,
    Main,
    CreatePost,
    },

  name: "App",

  setup() {
    const store = useStore()

    const showCreatePost = () => {
        store.commit('switchCreatePost')
    }

    return {
      // access a state in computed function
      createPost: computed(() => store.state.createPost),
      showCreatePost
    }
  },
}
</script>
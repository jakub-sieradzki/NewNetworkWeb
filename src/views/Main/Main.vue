<template>
  <div class="dark:bg-slate-900 h-screen w-screen bg-gray-100 dark:text-white">
    <Navbar />
    <div class="absolute p-0 h-screen w-screen top-0">
      <div class="justify-center w-screen h-screen overflow-y-scroll flex overflow-x-hidden">
        <router-view name="mainContent"></router-view>
      </div>
    </div>
    <!-- Navbar for Mobile -->
    <div class="lg:hidden fixed bottom-0 px-2 w-full">
      <div class="w-full h-14 dark:bg-gray-800/40 bg-white/80 border dark:border-none backdrop-blur dark:backdrop-blur-xl shadow-xl rounded-2xl mb-3 overflow-hidden">
        <div class="flex w-full h-full items-center justify-between gap-2">
          <div class="flex items-center justify-center gap-2 flex-grow h-full">
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

    <!-- <div class="w-full h-full flex flex-col overflow-hidden z-0">
      <div class="overflow-hidden flex h-full"></div>
    </div> -->
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Navpanel from "./Navpanel.vue";

export default {
  components: {
    Navbar,
    Navpanel,
  },
};
</script>

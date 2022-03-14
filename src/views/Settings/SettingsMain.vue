<template>
  <div class="w-full h-full pt-28 pb-10 px-5">
    <div class="w-full h-full flex justify-center items-center">
      <div class="bg-white dark:bg-gray-900 max-w-7xl w-full h-full rounded-xl border dark:border-gray-800 flex flex-col p-8 gap-8">
        <div class="flex justify-between items-center">
          <p class="text-4xl font-semibold">Ustawienia</p>
          <p v-if="currentPage == 'profile'" class="text-2xl font-semibold">Profil</p>
          <p v-else-if="currentPage == 'account'" class="text-2xl font-semibold">Konto i zabezpieczenia</p>
        </div>
        <div class="flex justify-between gap-10">
          <div class="flex flex-col w-3/12 gap-1.5">
            <div @click="this.$router.push('/settings/profile')" class="flex text-sm items-center gap-3 p-3 w-full rounded-lg cursor-pointer" :class="[this.currentPage == 'profile' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800/50' ]">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <p>Profil</p>
            </div>
            <div @click="this.$router.push('/settings/account')" class="flex text-sm items-center gap-3 p-3 w-full bg-gray-100 dark:bg-gray-800/40 rounded-lg cursor-pointer" :class="[this.currentPage == 'account' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800/50' ]">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <circle cx="12" cy="11" r="1" />
                <line x1="12" y1="12" x2="12" y2="14.5" />
              </svg>
              <p>Konto i zabezpieczenia</p>
            </div>
            <div class="flex text-sm items-center gap-3 p-3 w-full bg-gray-100 dark:bg-gray-800/40 rounded-lg cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
              </svg>
              <p>Twoje dane</p>
            </div>
            <div class="flex text-sm items-center gap-3 p-3 w-full bg-gray-100 dark:bg-gray-800/40 rounded-lg cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
              </svg>
              <p>Personalizacja</p>
            </div>
          </div>
          <div class="w-9/12 h-full">
            <router-view name="settingsContent"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: "",
      currentPage: "",
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.currentPage = to.path.slice(to.path.lastIndexOf("/") + 1);
    next();
  },
  mounted() {
    this.currentPage = this.$route.path.slice(this.$route.path.lastIndexOf("/") + 1);
    console.log(this.currentPage);
  },
};
</script>

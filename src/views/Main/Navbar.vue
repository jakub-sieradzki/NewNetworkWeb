<template>
  <header class="flex flex-col w-full h-auto flex-shrink-0 z-10 sticky top-4">
    <div class="flex mx-2 md:mx-5 dark:bg-gray-800/40 bg-white/80 backdrop-blur dark:backdrop-blur-xl shadow-xl rounded-2xl px-3">
      <div class="w-3/12 flex items-center gap-2 md:gap-1">
        <div class="flex h-full">
          <div @click="changeShowMenu('postTypes')" @blur="changeShowMenu(null)" class="flex items-center my-2 py-3 pr-1 pl-2 sm:px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer text-xs transition">
            <div v-if="currentType == 'all'" class="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <p class="hidden sm:block">Główna</p>
            </div>
            <div v-else-if="currentType == 'txt'" class="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <p class="hidden sm:block">Tekst</p>
            </div>
            <div v-else-if="currentType == 'img'" class="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="15" y1="8" x2="15.01" y2="8" />
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
              </svg>
              <p class="hidden sm:block">Zdjęcia</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 stroke-current w-4 h-4 transition duration-300" :class="{ 'rotate-180' : showMenu == 'postTypes'}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div class="flex h-full">
          <div class="flex items-center my-2 p-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl gap-1.5 cursor-pointer text-xs transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <p class="hidden sm:block">Szukaj</p>
          </div>
        </div>
      </div>
      <div class="w-6/12 flex items-center justify-center">
        <p><span class="inline-block sm:hidden">NN </span><span class="hidden sm:inline-block">New Network </span> <span class="text-xs">v.0.13.0</span></p>
      </div>
      <div class="w-3/12 flex items-center justify-end gap-3">
        <div class="flex h-full">
          <div @click="changeShowMenu('notifications')" class="flex items-center my-2 p-2 px-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </div>
        </div>
        <div class="flex h-full flex-shrink-0">
          <div @click="changeShowMenu('profile')" class="flex items-center my-2 sm:pr-5 gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full cursor-pointer transition">
            <img :src="profileImage" class="w-10 h-10 rounded-full" alt="profile image" />
            <p class="hidden sm:block">{{ name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mx-2 md:mx-5">
      <div class="flex w-full flex-shrink-0">
        <div v-if="showMenu == 'postTypes'" class="navbarDropdownStyle flex-shrink-0 !w-44 h-fit mt-1.5 p-2 flex flex-col gap-1">
          <div class="dropdownItemStyle flex items-center gap-2.5 !text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <p>Główna</p>
          </div>
          <div class="dropdownItemStyle flex items-center gap-2.5 !text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
            <p>Tekst</p>
          </div>
          <div class="dropdownItemStyle flex items-center gap-2.5 !text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="15" y1="8" x2="15.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" rx="3" />
              <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
              <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
            </svg>
            <p>Zdjęcia</p>
          </div>
        </div>
        <div class="flex w-full justify-end">
          <div v-if="showMenu == 'profile'" class="navbarDropdownStyle p-3 flex flex-col">
            <div @click="pushToProfile(this.username)" class="flex flex-col rounded-lg w-full px-7 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              <div class="flex items-center gap-4">
                <img :src="profileImage" class="rounded-full w-12 h-12" alt="profile image" />
                <div class="flex flex-col">
                  <p class="text font-semibold">{{ name }} {{ surname }}</p>
                  <p class="text-sm">@{{ username }}</p>
                </div>
              </div>
            </div>
            <div class="mt-3 flex flex-col gap-0.5">
              <div class="dropdownItemStyle flex gap-2 h-10 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <p>Ustawienia</p>
              </div>
              <div class="dropdownItemStyle flex gap-2 h-10 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
                <p>Wyloguj się</p>
              </div>
            </div>
          </div>
          <div v-if="showMenu == 'notifications'" class="navbarDropdownStyle w-72" style="height: 450px">
            <notifications-list />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { getAuth, signOut } from "firebase/auth";
import NotificationsList from "../Notifications/NotificationsList.vue";
import { searchUsername } from "@/database/getData";

export default {
  components: {
    NotificationsList,
  },
  data() {
    return {
      searchQuery: "",
      searchResult: [],
      showMenu: null,
    };
  },
  computed: {
    ...mapState("user", ["name", "surname", "username", "profileImage"]),
    ...mapState(["unreadNotificationsList", "currentType"]),
  },
  watch: {
    searchQuery: function (newQuery, oldQuery) {
      this.resultQuery(newQuery);
    },
  },
  methods: {
    ...mapMutations(["switchShowMenu"]),
    async logout() {
      await signOut(getAuth())
        .then(() => {
          //router.push('login').catch( e => {console.log(e)});
          window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "home";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeShowMenu(value) {
      if (this.showMenu == value) {
        this.showMenu = null;
      } else {
        this.showMenu = value;
      }
    },
    async resultQuery(s) {
      if (s.length > 2) {
        this.searchResult = await searchUsername(s);
      } else {
        this.searchResult = [];
      }
    },
    pushToProfile(username) {
      this.$router.push("/user/" + username + "/posts");
    },
  },
  async mounted() {
    console.log("unread notifi navbar: ", this.unreadNotificationsList);
    // const img = this.$refs.profileImg;
    // const imgDetails = this.$refs.profileImgDetails;
    // if (this.profileImage) {
    //   let url = await getProfileImageUrl(getAuth().currentUser.uid);
    //   img.setAttribute("src", url);
    //   imgDetails.setAttribute("src", url);
    // } else {
    //   img.setAttribute("src", "/img/avatar.png");
    //   imgDetails.setAttribute("src", "/img/avatar.png");
    // }
  },
};
</script>

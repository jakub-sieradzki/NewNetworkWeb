<template>
  <header class="flex w-full h-14 shadow-md dark:bg-slate-800 flex-shrink-0 bg-gray-100">
    <div class="w-full h-10 self-center relative ml-3 mr-3 lg:ml-4 lg:mr-4">
      <div @click="toggleShowMenu" class="xl:hidden cursor-pointer absolute top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current justify-center self-center w-8 h-8" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
      <p class="font-main text-xl absolute top-1/2 left-11 xl:left-0 transform -translate-y-1/2">New Network<span class="text-xs text-gray-400 ml-1">v.0.7.0</span></p>
      <div class="dropdown hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <input tabindex="0" placeholder="Szukaj" v-model="searchQuery" class="md:w-80 lg:w-96 h-10 focus:outline-none p-4 rounded-full border border-gray-300 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 focus:border-blue-500" />
        <ul tabindex="0" class="z-10 p-2 shadow menu dropdown-content bg-base-100 rounded-box md:w-80 lg:w-96">
          <li class="py-2 px-2 cursor-pointer hover:underline" @click="pushToProfile(result.username)" v-for="result in searchResult" :key="result.username">
            <p class="font-bold">{{ result.name }} {{ result.surname }}</p>
            <p>@{{ result.username }}</p>
          </li>
        </ul>
      </div>
      <div class="flex h-10 self-center absolute top-0 right-0">
        <div class="indicator mr-2">
          <div :class="{ 'indicator-item badge w-3 h-3 p-0 m-1.5 bg-red-600 border-red-600': unreadNotifications }"></div>
          <div class="dropdown dropdown-end p-0">
            <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="p-2 w-10 h-10 stroke-current rounded-full cursor-pointer border bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-900" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
            <div tabindex="0" class="overflow-y-auto dropdown-content z-0 mt-4 w-72 shadow-xl bg-gray-100 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-60 rounded-lg backdrop-blur-md border dark:border-gray-800" style="height: 500px">
              <NotificationsList />
            </div>
          </div>
        </div>

        <div class="dropdown dropdown-end">
          <div tabindex="0" class="flex items-center cursor-pointer w-auto bg-gray-200 border dark:bg-gray-700 dark:border-gray-900 border-gray-300 rounded-full overflow-hidden">
            <img ref="profileImg" class="w-10 h-10 rounded-full" alt="profile" />
            <p class="pl-3 pr-5 hidden md:block">{{ name }}</p>
          </div>
          <div tabindex="0" class="mt-3 p-4 pb-3 shadow-xl menu dropdown-content bg-gray-100 dark:bg-gray-800 rounded-lg w-64 flex flex-col border dark:border-gray-900">
            <div class="flex items-center gap-4 mb-4">
              <img ref="profileImgDetails" class="w-14 h-14 rounded-full" alt="profile" />
              <div class="leading-5 overflow-x-hidden">
                <p class="">{{ name }} {{ surname }}</p>
                <p class="text-gray-500 text-sm truncate">@{{ username }}</p>
              </div>
            </div>
            <div class="w-full h-px bg-gray-300 dark:bg-gray-700"></div>
            <div @click="editProfile" class="flex items-center mt-2 pt-2 pb-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-40 rounded-lg transition select-none cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-6 h-6 ml-4 mr-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <p>Edytuj profil</p>
            </div>
            <div @click="logout" class="flex items-center mt-1 pt-2 pb-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-40 rounded-lg transition select-none cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 stroke-current w-6 h-6 ml-4 mr-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
              <p>Wyloguj się</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { useRouter } from "vue-router";
import { mapState, useStore } from "vuex";
import { computed } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, query, where, getDocs, collection } from "firebase/firestore";
import NotificationsList from "../Notifications/NotificationsList.vue";

export default {
  components: {
    NotificationsList,
  },
  data() {
    return {
      searchQuery: "",
      searchResult: [],
      unreadNotifications: false,
    };
  },
  setup() {
    const store = useStore();

    const toggleShowMenu = () => {
      store.commit("switchShowMenu");
    };

    const logout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          //router.push('login').catch( e => {console.log(e)});
          window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "home";
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return { toggleShowMenu, logout };
  },
  computed: {
    ...mapState("user", ["name", "surname", "username", "profileImage"]),
    ...mapState(["unreadNotificationsList"])
  },
  watch: {
    searchQuery: function (newQuery, oldQuery) {
      this.resultQuery(newQuery);
    },
    unreadNotificationsList(newList, oldList) {
      if(newList != null) {
      if (newList.length > 0) {
        this.unreadNotifications = true;
      } else {
        this.unreadNotifications = false;
      }
      }

    },
  },
  methods: {
    editProfile() {
      this.$router.push("/user/" + this.username + "/posts");
    },
    async resultQuery(s) {
      let queryArray = [];
      if (s.length > 2) {
        const db = getFirestore();
        console.log(s);
        const q = query(collection(db, "users"), where("username", ">=", s), where("username", "<=", s + "\uf8ff"));
        await getDocs(q).then((docs) => {
          docs.forEach((doc) => {
            queryArray.push(doc.data());
          });
          this.searchResult = queryArray;
        });
      } else {
        this.searchResult = [];
      }
    },
    pushToProfile(username) {
      this.$router.push("/user/" + username + "/posts");
    },
  },
  mounted() {
    const storage = getStorage();
    console.log("profileImage from navbar: " + this.profileImage);
    const img = this.$refs.profileImg;
    const imgDetails = this.$refs.profileImgDetails;
    if (this.profileImage) {
      getDownloadURL(ref(storage, this.profileImage))
        .then((url) => {
          // Or inserted into an <img> element
          img.setAttribute("src", url);
          imgDetails.setAttribute("src", url);
        })
        .catch((error) => {
          // Handle any errors
        });
    } else {
      img.setAttribute("src", "/img/avatar.png");
      imgDetails.setAttribute("src", "/img/avatar.png");
    }
  },
};
</script>

<template>
  <div class="pt-24 w-full flex justify-center">
    <div class="w-full md:w-3/4 lg:w-2/3 2xl:w-1/2 px-5 flex flex-col gap-10 items-center">
      <p class="text-5xl font-semibold py-5">Szukaj</p>
      <input type="text" v-model="searchQuery" placeholder="Szukaj użytkowników, stron i grup..." class="w-full p-3 px-7 bg-white dark:bg-gray-800 rounded-xl caret-sky-600 outline-none focus:shadow-xl transition duration-300" />
      <div class="flex flex-col w-full gap-4">
        <div v-if="searchStatus == 'not started'" class="searchPlaceholder">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-16 h-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          <p>Wpisz co najmniej 3 znaki aby rozpocząć wyszukiwanie</p>
        </div>
        <div v-else-if="searchStatus == 'searching'" class="searchPlaceholder">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-16 h-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="15" cy="15" r="4" />
            <path d="M18.5 18.5l2.5 2.5" />
            <path d="M4 6h16" />
            <path d="M4 12h4" />
            <path d="M4 18h4" />
          </svg>
          <p>Trwa wyszukiwanie...</p>
        </div>
        <div class="flex flex-col gap-1">
          <p v-if="searchStatus == 'done'" class="text-sm font-semibold self-start">Użytkownicy</p>
          <div class="flex gap-3 py-3 overflow-y-auto" ref="userList" @mousewheel="scrollX">
            <div v-if="searchStatus == 'done'" class="w-full">
              <div v-if="usernameSearchResult.length <= 0" class="searchPlaceholder">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-16 h-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                </svg>
                <p>Nic nie znaleziono</p>
              </div>
              <div v-else class="flex w-full gap-3">
                <div v-for="result in usernameSearchResult" :key="result.id">
                  <single-user-list-item :user="result" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <p v-if="searchStatus == 'done'" class="text-sm font-semibold self-start">Strony</p>
          <div class="flex gap-3 py-3 overflow-y-auto" ref="userList" @mousewheel="scrollX">
            <div v-if="searchStatus == 'done'" class="w-full">
              <div v-if="pagenameSearchResult.length <= 0" class="searchPlaceholder">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-16 h-16" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                </svg>
                <p>Nic nie znaleziono</p>
              </div>
              <div v-else class="flex w-full gap-3">
                <div v-for="result in pagenameSearchResult" :key="result.id">
                  <single-page-list-item :page="result" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchPagename, searchUsername } from "@/database/getData";
import SingleUserListItem from "@/components/SingleUserListItem.vue";
import SinglePageListItem from "@/components/SinglePageListItem.vue";
export default {
  name: "Search",
  components: {
    SingleUserListItem,
    SinglePageListItem,
  },
  data() {
    return {
      searchQuery: "",
      usernameSearchResult: [],
      pagenameSearchResult: [],
      searchStatus: "not started",
      searchTimeout: null,
    };
  },
  watch: {
    searchQuery: function (newQuery, oldQuery) {
      if (newQuery.length > 2) {
        this.searchStatus = "searching";
        if (this.searchTimeout != null) {
          console.log("replace timeout");
          clearTimeout(this.searchTimeout);
          this.searchTimeout = null;
        }

        this.searchTimeout = setTimeout(async () => {
          this.usernameSearchResult = await searchUsername(newQuery);
          this.pagenameSearchResult = await searchPagename(newQuery);
          this.searchStatus = "done";
        }, 1000);
      } else if (newQuery.length == 0) {
        this.searchStatus = "not started";
      }
    },
  },
  methods: {
    async resultQuery(s) {
      console.log("searchquery");
    },
    scrollX(e) {
      this.$refs.userList.scrollLeft += e.deltaY;
    },
  },
  mounted() {},
};
</script>

<template>
  <create-new-page v-if="showCreateNewPage" />
  <div class="flex w-full h-fit pt-24 px-5 justify-center">
    <div class="flex flex-col w-full sm:w-5/6 md:w-2/3 items-center">
      <p class="text-5xl font-semibold py-5">Twoje strony</p>
      <div class="flex flex-col w-full gap-8 mt-10">
        <div class="flex flex-col gap-3">
          <p class="text-sm font-semibold">Strony, które obserwujesz</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <div v-for="page in observedInfoList" :key="page.id">
              <single-page-list-item :page="page" />
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full gap-3">
          <p class="text-sm font-semibold">Strony, którymi administrujesz lub które moderujesz</p>
          <div class="flex flex-col sm:flex-row gap-4 flex-wrap">
            <div @click="toggleShowCreateNewPage" class="flex px-6 py-7 w-full sm:w-56 h-24 border-4 border-dashed dark:border-gray-800 hover:dark:border-gray-700 rounded-lg items-center gap-3 cursor-pointer hover:border-gray-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <p class="text-sm">Utwórz nową stronę</p>
            </div>
            <div v-for="page in administeredInfoList" :key="page.id">
              <single-page-list-item :page="page" />
            </div>
          </div>
        </div>
      </div>
      <div class="h-24 w-full">
      </div>
    </div> 
  </div>
</template>
<script>
import CreateNewPage from "@/components/CreateNewPage.vue";
import SinglePageListItem from "@/components/SinglePageListItem.vue";
import { mapState } from "vuex";
import { getPagesInfo } from "@/database/getData";
export default {
  components: {
    CreateNewPage,
    SinglePageListItem,
  },
  data() {
    return {
      showCreateNewPage: false,
      administeredInfoList: [],
      observedInfoList: [],
    };
  },
  computed: {
    ...mapState("userPagesInfo", ["observed", "administered"]),
  },
  methods: {
    toggleShowCreateNewPage() {
      this.showCreateNewPage = !this.showCreateNewPage;
    },
  },
  async mounted() {
    this.observedInfoList = await getPagesInfo(this.observed);
    this.administeredInfoList = await getPagesInfo(this.administered);
  },
};
</script>

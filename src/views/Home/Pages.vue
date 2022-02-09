<template>
  <create-new-page v-if="showCreateNewPage" />
  <div class="flex w-full pt-24 px-5">
    <div class="flex flex-col w-full gap-5">
      <div class="flex flex-col">
        <p class="text-sm font-semibold">Strony, które obserwujesz</p>
        <div>//TODO</div>
      </div>
      <div class="flex flex-col w-full gap-2">
        <p class="text-sm font-semibold">Strony, którymi administrujesz lub które moderujesz</p>
        <div class="flex w-64">
          <div @click="toggleShowCreateNewPage" class="flex px-6 py-7 bg-gray-200 dark:bg-gray-800 rounded-lg items-center gap-3 cursor-pointer hover:shadow-xl hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <p class="text-sm">Utwórz nową stronę</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CreateNewPage from "@/components/CreateNewPage.vue";
export default {
  components: {
    CreateNewPage,
  },
  data() {
    return {
      showCreateNewPage: false,
    };
  },
  methods: {
    toggleShowCreateNewPage() {
      this.showCreateNewPage = !this.showCreateNewPage;
    },
  },
};
</script>

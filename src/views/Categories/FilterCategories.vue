<template>
  <div class="rounded-md overflow-hidden border border-gray-300 dark:border-gray-800 shadow-lg bg-gray-100 dark:bg-gray-900">
    <div @click="switchShowCategories()" class="flex h-12 items-center pl-4 pr-4 lg:hover:bg-gray-100 dark:lg:hover:bg-gray-700 overflow-y cursor-pointer transition flex-shrink-0 justify-between">
      <p class="text-center">Kategorie</p>
      <svg xmlns="http://www.w3.org/2000/svg" :class="[showCategories ? 'rotate-180' : '']" class="stroke-current w-5 h-5 transition duration-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
    <div v-if="showCategories" class="flex flex-col flex-shrink-0">
      <div class="overflow-y-scroll custom-scrollbar scrollbar-none max-h-80 md:max-h-96">
        <CategoriesList :allSelected="true" @selected="loadSelectedCategories" />
      </div>
      <div @click="applyCategories()" class="flex items-center justify-center gap-1 h-14 text-white cursor-pointer bg-slate-700 dark:bg-slate-800 dark:lg:hover:bg-slate-700 transition lg:hover:bg-slate-900 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
        </svg>
        <p class="text-sm">Filtruj</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import CategoriesList from "./CategoriesList.vue";
export default {
  components: {
    CategoriesList,
  },
  data() {
    return {
      showCategories: true,
      selectedCategories: [],
      categories: [],
    };
  },
  methods: {
    ...mapMutations(["setCategoriesObserved"]),

    switchShowCategories() {
      this.showCategories = !this.showCategories;
    },
    applyCategories() {
      let iterator = this.selectedCategories.values();
      let selected = [];
      for (let category of iterator) {
        selected.push(category);
      }
      this.setCategoriesObserved(selected);
    },
    loadSelectedCategories(value) {
      this.selectedCategories = value;
    },
  },
  mounted() {
  },
};
</script>

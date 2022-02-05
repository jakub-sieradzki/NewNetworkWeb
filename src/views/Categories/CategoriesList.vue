<template>
  <div @click="switchSelectAllCategories()" class="flex justify-center items-center rounded-xl gap-2 mt-2 mb-4 p-3 mx-4 shadow-inner bg-slate-100 dark:bg-slate-800 lg:hover:bg-slate-200 dark:lg:hover:bg-slate-700 cursor-pointer transition">
    <svg v-if="selectAllCategories" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="9 11 12 14 20 6" />
      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
    <p v-if="selectAllCategories" class="text-sm">Zaznacz wszystko</p>
    <p v-else class="text-sm">Odznacz wszystko</p>
  </div>
  <div class="relative h-full">
    <div class="mx-4">
      <Category v-for="(value, key) in categories" :key="key" :value="value" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import categories from "../../data/categories";
import Category from "../Categories/Category.vue";
export default {
  props: ["categories", "allSelected"],
  components: {
    Category,
  },
  data() {
    return {
      selectedCategories: [],
      selectAllCategories: false,
    };
  },
  computed: {
    ...mapState(["allCategories"])
  },
  methods: {
    // switching categories logic
    switchCategoryVisibility(catId) {
      if (this.selectedCategories.includes(catId)) {
        if (catId.includes("-")) {
          // remove only one subcategory
          this.selectedCategories.splice(this.selectedCategories.indexOf(catId), 1);
        } else {
          // remove category with all of its subcategories
          this.selectedCategories.splice(this.selectedCategories.indexOf(catId), 1);
          const matches = this.selectedCategories.filter((s) => s.includes(catId + "-"));
          while (matches.length) {
            this.selectedCategories.splice(this.selectedCategories.indexOf(matches.pop()), 1);
          }
        }
      } else {
        // add category to array
        this.selectedCategories.push(catId);
        const matches = this.allCategories.filter((s) => s.includes(catId + "-"));
        this.selectedCategories = this.selectedCategories.concat(matches);
        this.selectedCategories.sort();
      }

      this.$emit("selected", this.selectedCategories);
    },
    switchSelectAllCategories() {
      this.selectAllCategories = !this.selectAllCategories;
      if (this.selectAllCategories) {
        this.selectedCategories = [];
      } else {
        this.loadAllCategories();
      }
      this.$emit("selected", this.selectedCategories);
    },
    loadAllCategories() {
      this.selectedCategories = [];
      for (let cat in categories) {
        this.selectedCategories.push(categories[cat].id);
        if (categories[cat].subcategories) {
          for (let subcat in categories[cat].subcategories) {
            this.selectedCategories.push(categories[cat].subcategories[subcat].id);
          }
        }
      }
    },
  },
  mounted() {
    if (this.allSelected) {
      this.loadAllCategories();
    } else {
      this.selectAllCategories = true;
    }
    this.$emit("selected", this.selectedCategories);
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div @click="categoryClick(value.id)" class="mb-2 px-4 py-3 cursor-pointer rounded-2xl shadow-md flex items-center justify-between transition hover:bg-opacity-95 text-white dark:text-white border" :class="[[this.$parent.selectedCategories.includes(value.id) ? value.background : ['bg-transparent', 'text-black']], value.border]">
      <p class="truncate">{{ value.name }}</p>
      <svg @click="switchSubcategoriesClick()" @click.stop="" v-if="value.subcategories" xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-90': this.showSubcategories }" class="stroke-current w-6 h-6 flex-shrink-0 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-1 transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </div>
    <div v-if="showSubcategories">
      <div class="flex justify-end" v-for="value2 in value.subcategories" :key="value2.id">
        <div @click="subcategoryClick(value2.id)" class="w-5/6 mb-2 px-4 py-3 cursor-pointer rounded-2xl shadow-md flex items-center transition hover:bg-opacity-95 text-white dark:text-white border" :class="[[this.$parent.selectedCategories.includes(value2.id) ? value2.background : ['bg-transparent', 'text-black']], value2.border]">
          <p class="truncate">{{ value2.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value", "key"],
  data() {
    return {
      showSubcategories: false,
      subcategoriesActive: [],
    };
  },
  methods: {
    switchSubcategoriesClick() {
      this.showSubcategories = !this.showSubcategories;
    },
    categoryClick(id) {
      this.$parent.switchCategoryVisibility(id);
    },
    subcategoryClick(id) {
      this.$parent.switchCategoryVisibility(id);
    },
  },
  mounted() {
  },
};
</script>

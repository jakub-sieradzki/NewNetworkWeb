<template>
  <div>
    <div @click="selectCategory" class="flex items-end h-52 w-40 rounded-lg bg-center bg-cover overflow-hidden cursor-pointer hoverAnimation hover:saturate-200" :class="{ 'border-4 border-sky-600': selected }" :style="{ backgroundImage: `url(${imgSrc})` }">
      <div class="flex items-center h-12 p-3 w-full bg-white/80 dark:bg-gray-900/60 rounded-b-lg backdrop-blur overflow-hidden">
        <p class="text-sm font-semibold">{{ txt }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "img", "txt"],
  data() {
    return {
      imgSrc: "",
      selected: false,
    };
  },
  mounted() {
    this.imgSrc = "/img/" + this.img + ".jpg";
  },
  methods: {
    selectCategory() {
      if (this.selected) {
        this.$parent.selectedCategories.splice(this.$parent.selectedCategories.indexOf(this.id), 1);
        this.selected = false;
      } else {
        this.$parent.selectedCategories.push(this.id);
        this.selected = true;
      }

      console.log(this.$parent.selectedCategories);
    },
  },
};
</script>

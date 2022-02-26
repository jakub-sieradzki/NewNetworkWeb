<template>
  <div>
    <p class="text-4xl font-semibold flex-shrink-0">Wybierz kategorie</p>
    <div class="flex flex-shrink-0 mt-8 gap-3 flex-wrap">
      <div v-for="(item, key) in categories" :key="key">
        <category :img="item.img" :txt="item.txt" />
      </div>
    </div>
  </div>
</template>
<script>
import Category from "./Category.vue";
export default {
  components: {
    Category,
  },
  data() {
    return {
      categories: {
        0: {
          img: "category_moto",
          txt: "Motoryzacja",
        },
        1: {
          img: "category_tech",
          txt: "Technologia",
        },
        2: {
          img: "category_info",
          txt: "Informacje",
        },
        3: {
          img: "category_food",
          txt: "Jedzenie",
        },
        4: {
          img: "category_sport",
          txt: "Sport",
        },
        5: {
          img: "category_gaming",
          txt: "Gry",
        },
        6: {
          img: "category_funny",
          txt: "Śmieszne",
        },
        7: {
          img: "category_music",
          txt: "Muzyka",
        },
        8: {
          img: "category_nature",
          txt: "Natura",
        },
        9: {
          img: "category_culture",
          txt: "Kultura",
        },
        10: {
          img: "category_animals",
          txt: "Zwierzęta",
        },
        11: {
          img: "category_books",
          txt: "Książki",
        },
        12: {
          img: "category_fashion_men",
          txt: "Moda męska",
        },
        13: {
          img: "category_fashion_women",
          txt: "Moda damska",
        },
      },
    };
  },
};
</script>

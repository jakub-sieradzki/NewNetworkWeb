<template>
  <div>
    <div class="flex flex-wrap">
      <div v-for="(value, key) in imgUrls" :key="key" class="w-1/2 md:w-1/4 pr-1 pb-1">
        <img :src="value" @click="openImage(value)" alt="photo" class="h-36 w-full object-cover rounded-md cursor-pointer" />
      </div>
    </div>
  </div>
</template>
<script>
import { getAllPagesPostsByPids, getAllPersonalPostsByUids } from "@/database/getData";
import { getPostImagesUrls } from "@/firebase-storage/getFiles";
export default {
  props: ["pid"],
  data() {
    return {
      imgUrls: [],
    };
  },
  methods: {
    openImage(value) {
      window.open(value, "_blank");
    },
  },
  async mounted() {
    let posts = await getAllPagesPostsByPids([this.pid]);
    let imgNames = [];
    posts.forEach((post) => {
      if (post.files.length > 0) {
        for (let i = 0; i < post.files.length; i++) {
          imgNames.push(post.files[i]);
        }
      }
    });
    this.imgUrls = await getPostImagesUrls(this.pid, imgNames);
  },
};  
</script>

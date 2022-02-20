<template>
  <div>
    <div v-if="showImages" class="flex flex-wrap">
      <div v-for="(value, key) in imgUrls" :key="key" class="w-1/2 md:w-1/4 pr-1 pb-1">
        <img :src="value" @click="openImage(value)" alt="photo" class="h-36 w-full object-cover rounded-md cursor-pointer" />
      </div>
    </div>
    <div v-else class="flex w-full h-full items-center justify-center">
    <p>Aby zobaczyć zdjęcia musisz dołączyć do grupy</p>
    </div>
  </div>
</template>
<script>
import { getAllGroupsPostsByGids } from "@/database/getData";
import { getPostImagesUrls } from "@/firebase-storage/getFiles";
import { mapState } from "vuex";
export default {
  props: ["gid", "groupData"],
  data() {
    return {
      imgUrls: [],
      showImages: true,
    };
  },
  computed: {
    ...mapState("userGroupsInfo", ["joined"]),
  },
  methods: {
    openImage(value) {
      window.open(value, "_blank");
    },
    async getImages() {
      let posts = await getAllGroupsPostsByGids([this.gid]);
      let imgNames = [];
      posts.forEach((post) => {
        if (post.files.length > 0) {
          for (let i = 0; i < post.files.length; i++) {
            imgNames.push(post.files[i]);
          }
        }
      });
      this.imgUrls = await getPostImagesUrls(this.gid, imgNames);
    },
  },
  async mounted() {
    if ((this.groupData.groupType == "private" && this.joined.includes(this.gid)) || this.groupData.groupType == "public") {
      this.getImages();
    } else {
      this.showImages = false;
    }
  },
};
</script>

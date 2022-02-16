<template>
  <div class="flex bg-white flex-col border border-collapse dark:border-gray-800 rounded-lg dark:bg-gray-900">
    <div class="flex justify-between px-4 py-3">
      <div class="flex items-center pl-2">
        <img :src="profileImage" alt="profile image" class="w-7 h-7 rounded-full" />
        <p class="pl-5 text-sm">
          Z grupy
          <span class="cursor-pointer lg:hover:underline font-semibold" @click="this.$router.push('/group/' + postData.groupUniqueName + '/posts')">{{ postData.groupDisplayName }}</span>
        </p>
      </div>
    </div>
    <Post :postData="postData" />
  </div>
</template>
<script>
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
import Post from "./Post.vue";
export default {
  props: ["postData"],
  components: { Post },
  data() {
    return {
      profileImage: null,
    };
  },
  methods: {},
  async mounted() {
    // Get profile image
    this.profileImage = await getProfileImageUrl(this.postData.gid);
  },
};
</script>

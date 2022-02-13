<template>
  <div @click="this.$router.push('/user/' + user.username + '/posts')" class="flex flex-col min-w-[10rem] h-48 p-3 px-5 break-words bg-gray-200 dark:bg-gray-800/50 rounded-lg items-center gap-4 justify-center cursor-pointer hoverAmimation">
    <img :src="profileImage" class="w-24 h-24 rounded-full" alt="profile image" />
    <div class="flex flex-col w-full text-center">
      <p class="font-semibold">{{ user.name }} {{ user.surname }}</p>
      <p class="text-sm">@{{ user.username }}</p>
    </div>
  </div>
</template>
<script>
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
export default {
  props: ["user"],
  data() {
    return {
      profileImage: "",
    };
  },
  async mounted() {
    let profileImg = await getProfileImageUrl(this.user.id);
    if (profileImg == null) {
      this.profileImage = "/img/avatar.png";
    } else {
      this.profileImage = profileImg;
    }
  },
};
</script>

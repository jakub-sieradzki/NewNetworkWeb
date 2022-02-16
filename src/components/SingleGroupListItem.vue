<template>
  <div @click="this.$router.push('/group/' + group.groupname + '/posts')" class="flex min-w-[15rem] h-24 py-3 px-5 bg-gray-200 dark:bg-gray-800/50 rounded-lg items-center gap-4 justify-center cursor-pointer hover:-translate-y-1 hover:shadow-lg transition duration-300">
    <img :src="profileImage" class=" w-16 h-16 rounded-full" alt="profile image" />
    <div class="flex flex-col">
      <p class="font-semibold">{{ group.name }}</p>
      <p class="text-sm">{{ group.groupname }}</p>
    </div>
  </div>
</template>
<script>
import { getProfileImageUrl } from '@/firebase-storage/getFiles';
export default {
  props: ["group"],
  data() {
    return {
      profileImage: "",
    };
  },
  async mounted() {
    let profileImg = await getProfileImageUrl(this.group.id);
    if (profileImg == null) {
      this.profileImage = "/img/avatar.png";
    } else {
      this.profileImage = profileImg;
    }
  },
};
</script>

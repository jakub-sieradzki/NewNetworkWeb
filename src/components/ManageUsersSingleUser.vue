<template>
  <div class="flex h-20 py-3 px-5 bg-gray-100 dark:bg-gray-800/50 border dark:border-gray-700 rounded-lg items-center justify-between">
    <div class="flex items-center gap-4 w-5/6 mr-2">
      <img :src="profilePicture" class="w-12 h-12 rounded-full" alt="profile image" />
      <div class="flex flex-col w-2/3">
        <p class="font-semibold truncate">{{ userInfo.name }} {{ userInfo.surname }}</p>
        <p class="text-sm truncate">@{{ userInfo.username }}</p>
      </div>
    </div>
    <div @click="removeUser" v-if="mode == 'manage'" class="flex flex-shrink-0 justify-center items-center py-0.5 pl-1 pr-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-current w-10 h-10 p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M7 12h14l-3 -3m0 6l3 -3" />
      </svg>
      <p class="text-sm">Usuń i zablokuj</p>
    </div>
    <div v-else-if="mode == 'requests'" class="flex gap-2">
      <svg @click="acceptRequest" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-current w-10 h-10 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
      <svg @click="denyRequest" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-current w-10 h-10 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
    <div @click="unblockUser" v-else-if="mode == 'blocked'" class="flex flex-shrink-0 justify-center items-center py-0.5 pl-1 pr-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-current w-10 h-10 p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="1" />
        <path d="M8 11v-5a4 4 0 0 1 8 0" />
      </svg>
      <p class="text-sm">Odblokuj</p>
    </div>
  </div>
</template>
<script>
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
export default {
  props: ["userInfo", "mode"],
  data() {
    return {
      profilePicture: "",
    };
  },
  methods: {
    removeUser() {
      if (this.mode == "admin") {
        this.$parent.removeAdmin(this.userInfo.uid);
      } else if (this.mode == "mod") {
        this.$parent.removeMod(this.userInfo.uid);
      }
    },
    async getProfilePicture() {
      let profileImage = await getProfileImageUrl(this.userInfo.uid);
      if (profileImage == null) {
        this.profilePicture = "/img/avatar.png";
      } else {
        this.profilePicture = profileImage;
      }
    },
    removeUser() {
      this.$parent.removeUser(this.userInfo.uid);
    },
    acceptRequest() {
      this.$parent.acceptRequest(this.userInfo.uid);
    },
    denyRequest() {
      this.$parent.denyRequest(this.userInfo.uid);
    },
    unblockUser() {
      this.$parent.unblockUser(this.userInfo.uid);
    },
  },
  async mounted() {
    await this.getProfilePicture();
  },
};
</script>

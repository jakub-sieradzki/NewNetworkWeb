<template>
  <div class="flex h-20 py-3 px-5 bg-gray-100 dark:bg-gray-800/50 border dark:border-gray-700 rounded-lg items-center justify-between">
    <div class="flex items-center gap-4 w-5/6">
      <img :src="userInfo.profileImage" class="w-12 h-12 rounded-full" alt="profile image" />
      <div class="flex flex-col w-2/3">
        <p class="font-semibold truncate">{{ userInfo.name }} {{ userInfo.surname }}</p>
        <p class="text-sm truncate">@{{ userInfo.username }}</p>
      </div>
    </div>
    <svg @click="removeUser" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-current w-10 h-10 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  </div>
</template>
<script>
export default {
  props: ["userInfo", "mode"],
  data() {
    return {};
  },
  methods: {
    removeUser() {
      if (this.mode == "admin") {
        this.$parent.removeAdmin(this.userInfo.uid);
      } else if(this.mode == "mod") {
          this.$parent.removeMod(this.userInfo.uid);
      }
    },
  },
  async mounted() {},
};
</script>

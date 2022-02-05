<template>
  <div>
    <div class="flex flex-wrap px-2">
      <div @click="this.$router.push('/user/' + friend.username + '/posts')" v-for="friend in friendsInfo" :key="friend.uid" class="w-full md:w-1/2 h-24 md:odd:pr-3">
        <div class="flex items-center bg-gray-100 border dark:border-gray-800 dark:bg-gray-800/50 rounded-md p-5 hover:shadow-lg cursor-pointer hover:-translate-y-1 transition duration-500">
          <div class="flex flex-grow-0 flex-shrink-0 w-full h-full justify-between items-center">
            <div class="flex items-center gap-4 truncate">
              <img :src="friend.profileImageUrl" alt="photo" class="rounded-full w-10 h-10" />
              <div class="flex flex-col">
                <p class="">{{ friend.name }} {{ friend.surname }}</p>
                <p class="text-sm text-gray-500">@{{ friend.username }}</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserData, getUserDetailsDoc } from "@/database/getData";
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
export default {
  props: ["uid"],
  data() {
    return {
      friendsInfo: [],
    };
  },
  methods: {
    async getFriendsInfo() {
      let friendsList = await getUserDetailsDoc(this.uid, "people");
      friendsList = friendsList.friends;

      for (let i = 0; i < friendsList.length; i++) {
        let userInfo = await getUserData(friendsList[i]);
        let profileImageUrl = await getProfileImageUrl(userInfo.uid);
        this.friendsInfo.push({
          name: userInfo.name,
          surname: userInfo.surname,
          username: userInfo.username,
          profileImageUrl: profileImageUrl,
        });
      }
    },
  },
  async mounted() {
      this.getFriendsInfo();
  },
};
</script>

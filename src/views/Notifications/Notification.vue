<template>
  <div class="flex p-3 mb-2 bg-gray-100 border border-gray-400 rounded-md dark:bg-gray-900 dark:border-gray-700">
    <img :src="profileImage" class="w-8 h-8 rounded-full mr-3 shadow-md" alt="icon" />
    <div class="flex flex-col gap-2">
      <p class="text-sm font-semibold">{{ notification.title }}</p>
      <p class="text-xs" v-html="content"></p>
      <div class="flex font-semibold text-xs gap-1">
        <p v-if="notification.type == 'friend_request'" @click="acceptClick()" class="hover:bg-gray-200 dark:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer text-blue-500">Akceptuj</p>
        <p @click="markAsRead()" class="hover:bg-gray-200 dark:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer">Odrzuć</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth } from "@firebase/auth";
import { markNotificationAsRead } from "@/database/setData";
import { acceptFriend } from "@/firebase-functions/functions";
import { getLinkifyText } from "@/helpers/textHelpers";
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
export default {
  props: ["notification", "index"],
  data() {
    return {
      content: "",
      profileImage: "",
    };
  },
  methods: {
    async markAsRead() {
      console.log("notification: ", this.notification);
      await markNotificationAsRead(getAuth().currentUser.uid, this.notification.id);
    },
    acceptClick() {
      this.markAsRead();
      this.accept();
    },
    accept() {
      acceptFriend(this.notification.userWhoRequestedUid);
    },
  },
  async mounted() {
    this.content = getLinkifyText(this.notification.content);
    if (this.notification.image) {
      const uid = this.notification.image.slice(this.notification.image.indexOf("-") + 1);
      let img = await getProfileImageUrl(uid);
      if (img != null) {
        this.profileImage = img;
      } else {
        this.profileImage = "/img/avatar.png";
      }
    } else {
      this.profileImage = "/img/avatar.png";
    }
  },
};
</script>

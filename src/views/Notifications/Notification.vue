<template>
  <div class="flex p-3 mb-2 bg-gray-100 border border-gray-400 rounded-md dark:bg-gray-900 dark:border-gray-700">
    <img :src="profileImage" class="w-8 h-8 rounded-full mr-3 shadow-md" alt="icon" />
    <div class="flex flex-col gap-2">
      <p class="text-sm font-semibold">{{ title }}</p>
      <p class="text-xs" v-html="content"></p>
      <div class="flex font-semibold text-xs gap-1">
        <p v-if="notification.type == 'friend_request'" @click="acceptClick()" class="lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer text-blue-500">Akceptuj</p>
        <p v-if="notification.type == 'page_request_admin' || notification.type == 'page_request_mod'" @click="showPageClick()" class="lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer text-blue-500">Zobacz</p>
        <p v-if="notification.type == 'group_request_admin' || notification.type == 'group_request_mod' || notification.type == 'group_accept'" @click="showGroupClick()" class="lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer text-blue-500">Zobacz</p>
        <p @click="markAsRead()" class="lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer">Odrzuć</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth } from "@firebase/auth";
import { markNotificationAsRead } from "@/database/setData";
import { acceptFriend } from "@/firebase-functions/functions";
import { getLinkifyText } from "@/helpers/textHelpers";
import { getPageProfileImageUrl, getProfileImageUrl } from "@/firebase-storage/getFiles";
export default {
  props: ["notification", "index"],
  data() {
    return {
      title: "",
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
    showPageClick() {
      this.$router.push("/page/" + this.notification.pagename + "/posts");
    },
    showGroupClick() {
      this.$router.push("/group/" + this.notification.groupname + "/posts");
    },
  },
  async mounted() {
    //legacy support
    if (this.notification.type == "friend_request" || this.notification.type == "friend_accepted") {
      this.title = this.notification.title;
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

      return;
    }

    if (this.notification.type == "page_request_admin") {
      this.title = "Zostań administratorem strony";
      this.content = "Strona " + this.notification.name + " chce, żebyś został jej administratorem";
      this.profileImage = await getProfileImageUrl(this.notification.pid);
    } else if (this.notification.type == "page_request_mod") {
      this.title = "Zostań moderatorem strony";
      this.content = "Strona " + this.notification.name + " chce, żebyś został jej moderatorem";
      this.profileImage = await getProfileImageUrl(this.notification.pid);
    } else if (this.notification.type == "group_request_admin") {
      this.title = "Zostań administratorem grupy";
      this.content = "Grupa " + this.notification.name + " chce, żebyś został jej administratorem";
      this.profileImage = await getProfileImageUrl(this.notification.gid);
    } else if (this.notification.type == "group_request_mod") {
      this.title = "Zostań moderatorem grupy";
      this.content = "Grupa " + this.notification.name + " chce, żebyś został jej moderatorem";
      this.profileImage = await getProfileImageUrl(this.notification.gid);
    } else if(this.notification.type == "group_accept") {
      this.title = "Dołączasz do grupy";
      this.content = "Grupa " + this.notification.name + " zaakceptowała Twoją prośbę o dołączenie";
      this.profileImage = await getProfileImageUrl(this.notification.gid);
    } else if(this.notification.type == "group_deny") {
      this.title = "Odrzucono prośbę";
      this.content = "Grupa " + this.notification.name + " odrzuciła Twoją prośbę o dołączenie";
      this.profileImage = await getProfileImageUrl(this.notification.gid);
    }
  },
};
</script>

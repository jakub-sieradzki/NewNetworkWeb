<template>
  <div class="flex p-3 mb-2 bg-gray-100 border border-gray-400 rounded-md dark:bg-gray-900 dark:border-gray-700">
    <img src="/img/user-add.svg" class="bg-sky-500 w-7 h-7 p-1.5 rounded-full mr-3 shadow-md" alt="icon" />
    <div class="flex flex-col gap-2">
      <p class="text-sm font-semibold">{{ notification.title }}</p>
      <p class="text-xs">{{ notification.content }}</p>
      <div class="flex font-semibold text-xs gap-1">
        <p @click="markAsRead()" class="hover:bg-gray-200 dark:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer text-blue-500">Akceptuj</p>
        <p @click="markAsRead()" class="hover:bg-gray-200 dark:hover:bg-gray-800 px-1.5 py-1.5 rounded-md transition cursor-pointer">Odrzuć</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getFirestore, doc, updateDoc } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
export default {
  props: ["notification", "index"],
  data() {
    return {};
  },
  methods: {
    markAsRead() {
      const db = getFirestore();
      const notifiRef = doc(db, "users", getAuth().currentUser.uid, "notifications", this.notification.id);
      updateDoc(notifiRef, {
        read: true,
      }).then(() => {
        let notifiList = [...this.$store.getters.getUnreadNotificationsList];
        notifiList.splice(this.index, 1);
        this.$store.commit("setUnreadNotificationsList", notifiList);
      });
    },
  },
  mounted() {},
};
</script>

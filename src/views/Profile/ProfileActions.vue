<template>
  <div class="flex flex-col rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800/40 shadow-xl cursor-pointer">
    <div class="flex">
      <div v-if="friends.includes(uid)" @click="removeFriend()" class="flex p-3 gap-2 bg-gray-100/20 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/40 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M17 9l4 4m0 -4l-4 4" />
        </svg>
        <p class="text-sm">Usuń ze znajomych</p>
      </div>
      <div v-else-if="userFriendsRequests.includes(uid)" class="flex p-3 gap-2 bg-gray-100/20 dark:bg-gray-800/50 cursor-default">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
        <p class="text-sm">Wysłano zaproszenie</p>
      </div>
      <div v-else-if="friendsRequests.includes(uid)" @click="acceptFriend()" class="flex p-3 gap-2 bg-sky-500 text-white hover:bg-sky-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11l2 2l4 -4" />
        </svg>
        <p class="text-sm">Zaakceptuj zaproszenie</p>
      </div>
      <div v-else-if="blocked.includes(uid)" @click="unblock()" class="flex p-3 gap-2 bg-red-500 text-white hover:bg-red-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
        <p class="text-sm">Odblokuj użytkownika</p>
      </div>
      <div v-else @click="addFriend()" class="flex p-3 gap-2 bg-emerald-500 text-white hover:bg-emerald-600 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11h6m-3 -3v6" />
        </svg>
        <p class="text-sm">Dodaj do znajomych</p>
      </div>
      <div v-if="!blocked.includes(uid)" @click="toggleShowProfileOptions()" class="flex dark:bg-gray-800 bg-gray-300/60 p-3 self-start hover:bg-gray-300/30 hover:dark:bg-gray-700 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5 transition duration-300" :class="{ 'rotate-180': showProfileOptions }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
    <div v-if="showProfileOptions && !blocked.includes(uid)" class="flex flex-col">
      <div v-if="observed.includes(uid)" @click="removeObserve()" class="flex p-3 gap-2 hover:bg-gray-200/70 hover:dark:bg-gray-800/90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="3" y1="3" x2="21" y2="21" />
          <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
          <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
        </svg>
        <p class="text-sm">Przestań obserwować</p>
      </div>
      <div v-else @click="observe()" class="flex p-3 gap-2 hover:bg-gray-200/70 hover:dark:bg-gray-800/90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="2" />
          <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
        </svg>
        <p class="text-sm">Obserwuj</p>
      </div>
      <div @click="block()" class="flex p-3 gap-2 hover:bg-gray-200/70 hover:dark:bg-gray-800/90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14.274 10.291a4 4 0 1 0 -5.554 -5.58m-.548 3.453a4.01 4.01 0 0 0 2.62 2.65" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 1.147 .167m2.685 2.681a4 4 0 0 1 .168 1.152v2" />
          <line x1="3" y1="3" x2="21" y2="21" />
        </svg>
        <p class="text-sm">Zablokuj</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getFunctions, httpsCallable } from "firebase/functions";
import { getApp } from "@firebase/app";
import { mapGetters, mapState } from "vuex";
export default {
  props: ["uid"],
  data() {
    return {
      showProfileOptions: false,
    };
  },
  methods: {
    toggleShowProfileOptions() {
      this.showProfileOptions = !this.showProfileOptions;
    },
    addFriend() {
      const functions = getFunctions(getApp(), "europe-west1");
      const requestFriend = httpsCallable(functions, "requestFriend");
      requestFriend({
        requestedUid: this.uid,
      }).then(() => {
        console.log("send invitation successfully");
      });
    },
    acceptFriend() {
      const functions = getFunctions(getApp(), "europe-west1");
      const acceptFriend = httpsCallable(functions, "acceptFriend");
      acceptFriend({
        acceptedUid: this.uid,
      }).then(() => {
        console.log("accepted successfully");
      });
    },
    removeFriend() {
      const functions = getFunctions(getApp(), "europe-west1");
      const requestFriend = httpsCallable(functions, "removeFriend");
      requestFriend({
        friendToRemoveUid: this.uid,
      }).then(() => {
        console.log("removed friend successfully");
      });
    },
    observe() {
      const functions = getFunctions(getApp(), "europe-west1");
      const requestFriend = httpsCallable(functions, "observePerson");
      requestFriend({
        observeUid: this.uid,
      }).then(() => {
        console.log("observed person successfully");
      });
    },

    removeObserve() {
      const functions = getFunctions(getApp(), "europe-west1");
      const requestFriend = httpsCallable(functions, "removeObservedPerson");
      requestFriend({
        observeUid: this.uid,
      }).then(() => {
        console.log("observed person removed successfully");
      });
    },
    block() {
      const functions = getFunctions(getApp(), "europe-west1");
      const requestFriend = httpsCallable(functions, "blockPerson");
      requestFriend({
        requestedUid: this.uid,
      }).then(() => {
        console.log("blocked person successfully");
      });
    },

    unblock() {
      const functions = getFunctions(getApp(), "europe-west1");
      const requestFriend = httpsCallable(functions, "unblockPerson");
      requestFriend({
        requestedUid: this.uid,
      }).then(() => {
        console.log("blocked person successfully");
      });
    },
  },
  computed: {
    ...mapState("userPeopleInfo",[
      "blocked",
      "friends",
      "observed",
      "friendsRequests",
      "userFriendsRequests",
      "blockedBy"
    ]),
  },
};
</script>

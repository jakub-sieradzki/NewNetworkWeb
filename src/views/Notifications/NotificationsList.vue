<template>
  <div class="p-4 flex flex-col gap-3 h-full">
    <div class="flex justify-between items-center mb-1.5">
      <p class="text-lg">Powiadomienia</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 lg:hover:bg-gray-200 dark:lg:hover:bg-gray-700 rounded-lg transition cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="12 8 12 12 14 14" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
      </svg>
    </div>

    <div v-if="allNotifications.length > 0" class="flex flex-col">
      <Notification v-for="(value, key) in allNotifications" :key="key" :notification="value" :index="key" />
    </div>
    <div v-else class="flex flex-col text-gray-500 text-center items-center h-full justify-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-28 h-28" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <path d="M9 14l2 2l4 -4" />
      </svg>
      <p>Brak nowych<br />powiadomień</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Notification from "./Notification.vue";
export default {
  components: {
    Notification,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState({
      allNotifications: "unreadNotificationsList",
    }),
  },
  mounted() {},
};
</script>

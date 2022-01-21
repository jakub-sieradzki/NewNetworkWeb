<template>
  <div class="dark:bg-slate-900 dark:text-white h-screen w-screen">
    <div class="w-full h-full flex flex-col overflow-y-hidden z-0">
      <Navbar />
      <div class="overflow-y-hidden flex h-full">
        <Navpanel />
        <router-view name="mainContent"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Navpanel from "./Navpanel.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Navbar,
    Navpanel,
  },

  name: "Main",

  setup() {
    return {};
  },
};
</script>

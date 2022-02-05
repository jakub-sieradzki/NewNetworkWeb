<template>
  <div class="dark:bg-slate-900 dark:text-white h-screen w-screen overflow-hidden">
    <div class="w-full h-full flex flex-col overflow-hidden z-0">
      <Navbar />
      <div class="overflow-hidden flex h-full">
        <Navpanel />
        <router-view name="mainContent"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Navpanel from "./Navpanel.vue";

export default {
  components: {
    Navbar,
    Navpanel,
  },
};
</script>

<template>
<div class="flex-flex-col dark:bg-gray-900 flex flex-col w-screen h-screen p-8 ">
    <div class="flex justify-between text-xl">
        <p>New Network</p>
        <p>Witaj, Jakub!</p>
    </div>
    <div class="h-full w-full max-w-7xl self-center flex-shrink overflow-y-auto">
        <router-view name="oobeContent" ref="oobeRouterView"></router-view>
    </div>
    <div class="flex items-end justify-end gap-3 text-sm flex-shrink-0">
        <p class="p-2 w-20 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md text-gray-500 text-center cursor-pointer transition">POMIŃ</p>
        <p @onclick="nextView" class="p-2 w-20 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-center cursor-pointer transition">DALEJ</p>
    </div>
</div>
</template>
<script>
export default {
  data() {
      return {}
  },
  methods: {
      nextView() {
          this.$refs.oobeRouterView.saveProfileChanges();
      }
  }
};
</script>

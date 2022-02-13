<template>
  <div>
    <div class="flex flex-wrap px-2">
      <div class="w-full md:w-1/2 h-24 md:odd:pr-3">
        <div class="flex items-center bg-gray-100 border dark:border-gray-800 dark:bg-gray-800/50 rounded-md p-5">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <line x1="9.7" y1="17" x2="14.3" y2="17" />
            </svg>
            <p class="">Utworzono <span class="font-semibold">{{createdDate}}</span></p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-24 md:odd:pr-3">
      </div>
    </div>
  </div>
</template>
<script>
import { getUserDetailsDoc } from "@/database/getData";
export default {
  props: ["pid", "pageData"],
  data() {
    return {
      createdDate: "",
    };
  },
  async mounted() {
    this.createdDate = this.pageData.created.toDate().toLocaleDateString();
  },
};
</script>

<template>
  <div>
    <div class="flex flex-wrap px-2">
      <div class="w-full md:w-1/2 h-24 md:odd:pr-3">
        <div class="flex items-center bg-gray-100 border dark:border-gray-800 dark:bg-gray-800/50 rounded-md p-5">
          <div class="flex items-center gap-4 truncate">
            <svg v-if="gender == 0" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="9" r="5" />
              <line x1="12" y1="14" x2="12" y2="21" />
              <line x1="9" y1="18" x2="15" y2="18" />
            </svg>
            <svg v-else-if="gender == 1" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="14" r="5" />
              <line x1="19" y1="5" x2="13.6" y2="10.4" />
              <line x1="19" y1="5" x2="14" y2="5" />
              <line x1="19" y1="5" x2="19" y2="10" />
            </svg>
            <p v-if="gender == 0" class="">Kobieta</p>
            <p v-else-if="gender == 1" class="">Mężczyzna</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-24 md:odd:pr-3">
        <div class="flex items-center bg-gray-100 border dark:border-gray-800 dark:bg-gray-800/50 rounded-md p-5">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5h2" />
              <path d="M5 4v2" />
              <path d="M11.5 4l-.5 2" />
              <path d="M18 5h2" />
              <path d="M19 4v2" />
              <path d="M15 9l-1 1" />
              <path d="M18 13l2 -.5" />
              <path d="M18 19h2" />
              <path d="M19 18v2" />
              <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z" />
            </svg>
            <p class="">Urodzony w <span class="font-semibold">{{birthyear}}</span> roku</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserDetailsDoc } from "@/database/getData";
export default {
  props: ["uid"],
  data() {
    return {
      gender: -1,
      birthyear: -1,
    };
  },
  async mounted() {
    let info = await getUserDetailsDoc(this.uid, "info");
    this.gender = info.gender;
    this.birthyear = info.birthyear;

    console.log(this.gender);
  },
};
</script>

<template>
<edit-rules v-if="editRules" :gid="gid" :rules="rules"/>
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
            <p class="">
              Utworzono <span class="font-semibold">{{ createdDate }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col gap-3 items-start bg-gray-100 border dark:border-gray-800 dark:bg-gray-800/50 rounded-md p-5 pt-3">
          <div class="flex w-full justify-between items-center truncate">
            <p class="text-sm font-semibold">Regulamin grupy</p>
            <svg @click="toggleEditRules" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-8 h-8 p-1.5 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
          </div>
          <p class="whitespace-pre-line">{{ rules }}</p>
          <p class="text-xs text-gray-400 mt-2">
            Edytowano: <span>{{ lastEdit }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getGroupDocs } from "@/database/getData";
import { DateTime } from "luxon";
import EditRules from "./EditRules.vue";
export default {
  props: ["gid", "groupData"],
  components: {
      EditRules,
  },
  data() {
    return {
      createdDate: "",
      rules: "",
      lastEdit: "",
      editRules: false,
    };
  },
  methods: {
    toggleEditRules() {
        this.editRules = !this.editRules;
    },
  },
  async mounted() {
    this.createdDate = this.groupData.created.toDate().toLocaleDateString();
    let groupDocs = await getGroupDocs(this.gid);
    this.rules = groupDocs.rules;

    let lastEditDate = groupDocs.rules_last_edit_timestamp.toDate();
    this.lastEdit = DateTime.fromJSDate(lastEditDate).toLocaleString(DateTime.DATETIME_SHORT);
  },
};
</script>

<template>
  <div class="createEditWindowBackgroundStyle">
    <div class="createEditWindowHelperDivStyle" style="max-width: 1000px">
      <div class="createEditWindowMainDivStyle min-h-full md:max-h-[700px]">
        <div class="flex justify-between mb-3">
          <p>Edytuj regulamin</p>
          <svg @click="closeEditRules" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div class="flex flex-col flex-grow w-full overflow-y-auto gap-2">
          <textarea v-model="editedRules" class="py-4 px-6 mb-2 bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-lg relative w-full resize-none custom-scrollbar focus:outline-none flex-grow" placeholder="Napisz tutaj regulamin grupy..."></textarea>
        </div>
        <div class="flex gap-3 justify-end">
          <div @click="closeEditRules" class="flex items-center px-3.5 py-2.5 mt-2 justify-center bg-gray-200 lg:hover:bg-gray-300 dark:bg-gray-800 lg:dark:hover:bg-gray-700 rounded-lg cursor-pointer transition">
            <p class="text-sm">Anuluj</p>
          </div>
          <div @click="saveChanges" class="flex items-center px-3.5 py-2.5 mt-2 justify-center bg-sky-600 lg:hover:bg-sky-500 rounded-lg cursor-pointer transition" :class="{ 'cursor-not-allowed': isSaving }">
            <p v-if="!isSaving" class="text-sm text-white">Zapisz zmiany</p>
            <p v-else class="text-sm text-white">Zapisywanie...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getGroupUsersBlocked, getUsersInfo } from "@/database/getData";
import ManageUsersSingleUser from "@/components/ManageUsersSingleUser.vue";
import { updateGroupMembers } from "@/firebase-functions/functions";
import { updateGroupRules } from "@/database/setData";
export default {
  props: ["gid", "rules"],
  components: {
    ManageUsersSingleUser,
  },
  data() {
    return {
      isSaving: false,
      editedRules: "",
    };
  },
  methods: {
    closeEditRules() {
      this.$parent.toggleEditRules();
    },
    async saveChanges() {
      this.isSaving = true;
      if (this.rules != this.editedRules) {
        await updateGroupRules(this.gid, this.editedRules);
      }
      alert("Zaktualizowano regulamin grupy");
      this.$parent.toggleEditRules();
    },
  },
  async mounted() {
    this.editedRules = this.rules;
  },
};
</script>

<template>
  <manage-permissions v-if="editPermissions" :groupData="{ gid: groupData.gid, name: groupData.name, groupname: groupData.groupname }" />
  <edit-group v-if="editGroup" :groupData="groupData" />
  <manage-users v-if="editUsers" :groupData="groupData" :gid="groupData.gid" />
  <manage-requests v-if="editRequests" :groupData="groupData" :gid="groupData.gid" />
  <manage-blocked v-if="editBlocked" :groupData="groupData" :gid="groupData.gid" />
  <div v-if="adminMode">
    <div class="flex flex-wrap px-2">
      <div class="w-full md:w-1/2 h-20 md:odd:pr-3">
        <div @click="toggleEditGroup" class="flex items-center bg-sky-600 text-white rounded-md p-5 cursor-pointer hoverAnimation">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
            <p class="">Edytuj grupę</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-20 md:odd:pr-3">
        <div @click="toggleEditPermissions" class="flex items-center bg-sky-600 text-white rounded-md p-5 cursor-pointer hoverAnimation">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              <circle cx="12" cy="11" r="1" />
              <line x1="12" y1="12" x2="12" y2="14.5" />
            </svg>
            <p class="">Zarządzaj uprawnieniami</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-20 md:odd:pr-3">
        <div @click="toggleEditUsers" class="flex items-center bg-sky-600 text-white rounded-md p-5 cursor-pointer hoverAnimation">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p class="">Zarządzaj użytkownikami</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-20 md:odd:pr-3">
        <div @click="toggleEditRequests" class="flex items-center bg-sky-600 text-white rounded-md p-5 cursor-pointer hoverAnimation">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 11h6m-3 -3v6" />
            </svg>
            <p class="">Prośby o przyjęcie do grupy</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-20 md:odd:pr-3">
        <div @click="toggleEditBlocked" class="flex items-center bg-sky-600 text-white rounded-md p-5 cursor-pointer hoverAnimation">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M17 9l4 4m0 -4l-4 4" />
            </svg>
            <p class="">Zarządzaj zablokowanymi użytkownikami</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-20 md:odd:pr-3">
        <div @click="deletePageClick" class="flex items-center bg-red-600 text-white rounded-md p-5 cursor-pointer hoverAnimation">
          <div class="flex items-center gap-4 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
            <p class="">Usuń grupę</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EditGroup from "@/views/Group/EditGroup.vue";
import ManagePermissions from "@/components/ManagePermissions.vue";
import ManageUsers from "@/views/Group/ManageUsers.vue";
import ManageBlocked from "@/views/Group/ManageBlocked.vue";
import ManageRequests from "@/views/Group/ManageRequests.vue";
import { mapState } from "vuex";
import { deletePage } from "@/firebase-functions/functions";
export default {
  props: ["groupData"],
  components: {
    ManagePermissions,
    ManageUsers,
    ManageRequests,
    ManageBlocked,
    EditGroup,
  },
  data() {
    return {
      editGroup: false,
      editPermissions: false,
      editUsers: false,
      editRequests: false,
      editBlocked: false,
      adminMode: false,
    };
  },
  methods: {
    toggleEditUsers() {
      this.editUsers = !this.editUsers;
    },
    toggleEditRequests() {
      this.editRequests = !this.editRequests;
    },
    toggleEditBlocked() {
      this.editBlocked = !this.editBlocked;
    },
    toggleEditPermissions() {
      this.editPermissions = !this.editPermissions;
    },
    toggleEditGroup() {
      this.editGroup = !this.editGroup;
    },
    async deletePageClick() {
      alert("Usuwanie grupy... proszę czekać");
      let result = await deletePage(this.pageData.pid);
      if (result) {
        alert("Pomyślnie usunięto grupy");
        this.$router.push("/pages");
      } else {
        alert("Wystąpił problem z usuwaniem grupy");
      }
    },
  },
  computed: {
    ...mapState("userGroupsInfo", ["administered"]),
  },
  mounted() {
    if (this.administered.includes(this.groupData.gid)) {
      this.adminMode = true;
    }
  },
};
</script>

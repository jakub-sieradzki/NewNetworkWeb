<template>
  <div class="createEditWindowBackgroundStyle">
    <div class="createEditWindowHelperDivStyle" style="max-width: 1200px">
      <div class="createEditWindowMainDivStyle min-h-full md:max-h-[700px]">
        <div class="flex justify-between mb-3">
          <p>Zarządzaj uprawnieniami</p>
          <svg @click="closeManagePermissions" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div class="flex flex-col flex-grow w-full overflow-y-auto">
          <div class="flex flex-col md:flex-row w-full h-full gap-14">
            <div class="w-full flex flex-col gap-3">
              <p class="text-sm font-semibold">Administratorzy</p>
              <div class="flex flex-col w-full">
                <div class="flex flex-col w-full">
                  <div class="flex flex-col p-3 border rounded-lg gap-2 dark:border-gray-700">
                    <p class="text-sm ml-0.5">Dodaj administratora</p>
                    <div class="flex border rounded-lg overflow-hidden dark:border-gray-700">
                      <input v-model="newAdmin" type="text" class="px-4 py-2 dark:bg-black/20 outline-none flex-grow text-sm flex-shrink" placeholder="@nazwa_uzytkownika" />
                      <svg @click="addAdmin" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-white h-10 w-10 p-2 bg-gray-800 hover:bg-gray-700 cursor-pointer transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div v-if="!loading" class="flex flex-col w-full mt-5 gap-2">
                  <div v-for="(value, key) in latestAdminsList" :key="key">
                    <permissions-single-user :userInfo="value" :mode="'admin'" />
                  </div>
                  <div v-if="latestSentInvitationsAdmins.length > 0" class="flex flex-col gap-3 mt-5">
                    <p class="text-sm font-semibold">Wysłane zaproszenia do administrowania</p>
                    <div v-for="(value, key) in latestSentInvitationsAdmins" :key="key">
                      <permissions-single-user :userInfo="value" :mode="'admin'" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col gap-3">
              <p class="text-sm font-semibold">Moderatorzy</p>
              <div class="flex flex-col w-full">
                <div class="flex flex-col w-full">
                  <div class="flex flex-col p-3 border rounded-lg gap-2 dark:border-gray-700">
                    <p class="text-sm ml-0.5">Dodaj moderatora</p>
                    <div class="flex border rounded-lg overflow-hidden dark:border-gray-700">
                      <input v-model="newMod" type="text" class="px-4 py-2 dark:bg-black/20 outline-none flex-grow text-sm flex-shrink" placeholder="@nazwa_uzytkownika" />
                      <svg @click="addMod" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 stroke-white h-10 w-10 p-2 bg-gray-800 hover:bg-gray-700 cursor-pointer transition" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div v-if="!loading" class="flex flex-col w-full mt-5 gap-2">
                  <div v-for="(value, key) in latestModsList" :key="key">
                    <permissions-single-user :userInfo="value" :mode="'mod'" />
                  </div>

                  <div v-if="latestSentInvitationsMods.length > 0" class="flex flex-col gap-3 mt-5">
                    <p class="text-sm font-semibold">Wysłane zaproszenia do moderowania</p>
                    <div v-for="(value, key) in latestSentInvitationsMods" :key="key">
                      <permissions-single-user :userInfo="value" :mode="'mod'" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-3 justify-end">
          <div @click="closeManagePermissions" class="flex items-center px-3.5 py-2.5 mt-2 justify-center bg-gray-200 lg:hover:bg-gray-300 dark:bg-gray-800 lg:dark:hover:bg-gray-700 rounded-lg cursor-pointer transition">
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
import { getGroupPermissions, getPagePermissions, getUserData, getUserDataOnUsername } from "@/database/getData";
import PermissionsSingleUser from "@/components/PermissionsSingleUser.vue";
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
import { updateGroupPermissions, updatePagePermissions } from "@/firebase-functions/functions";
export default {
  props: ["pageData", "groupData"],
  components: {
    PermissionsSingleUser,
  },
  data() {
    return {
      originalAdminsList: [],
      originalModsList: [],

      latestAdminsList: [],
      latestModsList: [],

      adminsToRemove: [],
      modsToRemove: [],

      adminsToAdd: [],
      modsToAdd: [],

      loading: true,

      newAdmin: "",
      newMod: "",

      originalSentInvitationsAdmins: [],
      originalSentInvitationsMods: [],

      latestSentInvitationsAdmins: [],
      latestSentInvitationsMods: [],

      adminsInvitationsToRemove: [],
      modsInvitationsToRemove: [],

      isSaving: false,
    };
  },
  methods: {
    closeManagePermissions() {
      this.$parent.toggleEditPermissions();
    },
    async loadSingleUserInfo(uid) {
      let userInfo = await getUserData(uid);
      let profileImage = await getProfileImageUrl(uid);
      if (profileImage == null) {
        userInfo.profileImage = "/img/avatar.png";
      } else {
        userInfo.profileImage = profileImage;
      }
      return userInfo;
    },
    async loadAllUsersInfo() {
      for (let i = 0; i < this.originalAdminsList.length; i++) {
        let userInfo = await this.loadSingleUserInfo(this.originalAdminsList[i]);
        this.latestAdminsList.push(userInfo);
      }

      for (let i = 0; i < this.originalModsList.length; i++) {
        let userInfo = await this.loadSingleUserInfo(this.originalModsList[i]);
        this.latestModsList.push(userInfo);
      }
    },
    async loadAllSentInvitations() {
      for (let i = 0; i < this.originalSentInvitationsAdmins.length; i++) {
        let userInfo = await this.loadSingleUserInfo(this.originalSentInvitationsAdmins[i]);
        this.latestSentInvitationsAdmins.push(userInfo);
      }

      for (let i = 0; i < this.originalSentInvitationsMods.length; i++) {
        let userInfo = await this.loadSingleUserInfo(this.originalSentInvitationsMods[i]);
        this.latestSentInvitationsMods.push(userInfo);
      }
    },
    async loadSingleUserInfoOnUsername(username, mode) {
      let userInfo = await getUserDataOnUsername(username);
      if (userInfo == null) {
        alert("Nie znaleziono użytkownika");
        return;
      }
      let profileImage = await getProfileImageUrl(userInfo.uid);
      if (profileImage == null) {
        userInfo.profileImage = "/img/avatar.png";
      } else {
        userInfo.profileImage = profileImage;
      }

      if (mode == "admin") {
        this.latestAdminsList.push(userInfo);
      } else if (mode == "mod") {
        this.latestModsList.push(userInfo);
      }

      return userInfo.uid;
    },
    async addAdmin() {
      if (this.newAdmin.substring(0, 1) != "@" || this.newAdmin.length < 2) {
        alert("Wpisz prawidłową nazwę użytkownika");
        return;
      }

      let newAdminUid = await this.loadSingleUserInfoOnUsername(this.newAdmin.slice(1), "admin");
      if (newAdminUid == null) {
        return;
      }
      this.adminsToAdd.push(newAdminUid);
      this.newAdmin = "";
    },
    removeAdmin(uid) {
      if (this.originalSentInvitationsAdmins.includes(uid)) {
        this.adminsInvitationsToRemove.push(uid);

        const elementToRemove = this.latestSentInvitationsAdmins.findIndex((item) => item.uid == uid);
        this.latestSentInvitationsAdmins.splice(elementToRemove, 1);
      } else {
        if (this.adminsToAdd.includes(uid)) {
          this.adminsToAdd.splice(this.adminsToAdd.indexOf(uid), 1);
        } else {
          this.adminsToRemove.push(uid);
        }

        const elementToRemove = this.latestAdminsList.findIndex((item) => item.uid == uid);
        this.latestAdminsList.splice(elementToRemove, 1);
      }
    },
    async addMod() {
      if (this.newMod.substring(0, 1) != "@" || this.newMod.length < 2) {
        alert("Wpisz prawidłową nazwę użytkownika");
        return;
      }

      let newModUid = await this.loadSingleUserInfoOnUsername(this.newMod.slice(1), "mod");
      if (newModUid == null) {
        return;
      }
      this.modsToAdd.push(newModUid);
      this.newMod = "";
    },
    removeMod(uid) {
      if (this.originalSentInvitationsMods.includes(uid)) {
        this.modsInvitationsToRemove.push(uid);

        const elementToRemove = this.latestSentInvitationsMods.findIndex((item) => item.uid == uid);
        this.latestSentInvitationsMods.splice(elementToRemove, 1);
      } else {
        if (this.modsToAdd.includes(uid)) {
          this.modsToAdd.splice(this.modsToAdd.indexOf(uid), 1);
        } else {
          this.modsToRemove.push(uid);
        }

        const elementToRemove = this.latestModsList.findIndex((item) => item.uid == uid);
        this.latestModsList.splice(elementToRemove, 1);
      }
    },
    async saveChanges() {
      this.isSaving = true;
      console.log("admins to add: ", this.adminsToAdd);
      console.log("admins to remove: ", this.adminsToRemove);
      console.log("mods to add: ", this.modsToAdd);
      console.log("mods to remove: ", this.modsToRemove);

      if (this.pageData) {
        await updatePagePermissions({
          pName: this.pageData.name,
          pid: this.pageData.pid,
          pagename: this.pageData.pagename,
          adminsToAdd: this.adminsToAdd,
          modsToAdd: this.modsToAdd,
          adminsToRemove: this.adminsToRemove,
          modsToRemove: this.modsToRemove,
          adminsInvitationsToRemove: this.adminsInvitationsToRemove,
          modsInvitationsToRemove: this.modsInvitationsToRemove,
        });
      } else {
        await updateGroupPermissions({
          gName: this.groupData.name,
          gid: this.groupData.gid,
          groupname: this.groupData.groupname,
          adminsToAdd: this.adminsToAdd,
          modsToAdd: this.modsToAdd,
          adminsToRemove: this.adminsToRemove,
          modsToRemove: this.modsToRemove,
          adminsInvitationsToRemove: this.adminsInvitationsToRemove,
          modsInvitationsToRemove: this.modsInvitationsToRemove,
        });
      }

      alert("Pomyślnie zapisano zmiany");
      this.$parent.toggleEditPermissions();
    },
  },
  async mounted() {
    let originalPermissions;
    if (this.pageData) {
      originalPermissions = await getPagePermissions(this.pageData.pid);
    } else {
      originalPermissions = await getGroupPermissions(this.groupData.gid);
    }

    this.originalAdminsList = originalPermissions.admins;
    this.originalModsList = originalPermissions.mods;

    this.originalSentInvitationsAdmins = originalPermissions.requested_admins;
    this.originalSentInvitationsMods = originalPermissions.requested_mods;

    this.loadAllUsersInfo();
    this.loadAllSentInvitations();

    this.loading = false;
  },
};
</script>

<template>
  <CreatePost v-if="createPost" :fromGroup="{ gid: gid, groupname: groupname, name: name, groupType: groupType }" />
  <div class="md:pt-16 flex flex-col flex-grow overflow-y-scroll md:overflow-y-hidden">
    <div class="profileMainStyle md:!flex-row-reverse">
      <div class="profileInfoDivStyle md:overflow-y-auto">
        <img ref="profileBackgroundImg" :src="groupProfileBackground" class="h-40 w-full object-cover shadow-md" alt="ProfileBackground" />
        <img ref="profileImg" class="m-auto -mt-20 h-40 w-40 rounded-full shadow-xl" :src="groupProfileImage" alt="ProfilePhoto" />
        <div class="flex flex-col px-3 break-words items-center">
          <p class="text-center text-2xl font-bold mt-5">{{ name }}</p>
          <div class="flex flex-shrink-0 items-center mt-2 gap-1">
            <p class="text-center text-lg">{{ groupname }}</p>
            <svg v-if="groupType == 'private'" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
            </svg>
            <svg v-else-if="groupType == 'public'" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M8 11v-5a4 4 0 0 1 8 0" />
            </svg>
          </div>
          <p class="text-center text-sm my-5 px-5 text-gray-500 dark:text-gray-400">{{ description }}</p>
          <div class="flex gap-2 p-3 border dark:border-gray-700 rounded-lg mb-5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>{{ membersCount }}</p>
          </div>
          <div class="flex flex-col rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800/40 shadow-xl cursor-pointer self-center">
            <div class="flex">
              <div v-if="blockedBy.includes(gid)" class="flex p-3 gap-2 bg-red-700 text-white cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <line x1="19" y1="7" x2="19" y2="10" />
                  <line x1="19" y1="14" x2="19" y2="14.01" />
                </svg>
                <p class="text-sm">Zostałeś zablokowany przez tę grupę</p>
              </div>
              <div v-else-if="joined.includes(gid)" @click="leaveGroupClick()" class="flex p-3 gap-2 bg-gray-100/20 dark:bg-gray-800/50 lg:hover:bg-gray-200/50 dark:lg:hover:bg-gray-700/40 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <line x1="16" y1="11" x2="22" y2="11" />
                </svg>
                <p class="text-sm">Opuść grupę</p>
              </div>
              <div v-else-if="requestMember.includes(gid)" class="flex p-3 gap-2 bg-gray-100/20 dark:bg-gray-800/50 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <p class="text-sm">Wysłano prośbę o przyjęcie do grupy</p>
              </div>
              <div v-else @click="joinGroupClick()" class="flex p-3 gap-2 bg-emerald-500 w-44 text-white lg:hover:bg-emerald-600 items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 11h6m-3 -3v6" />
                </svg>
                <p class="text-sm">Dołącz do grupy</p>
              </div>
              <div v-if="joined.includes(gid)" @click="toggleShowMoreOptions" class="flex dark:bg-gray-800 bg-gray-300/60 p-3 self-start lg:hover:bg-gray-300/30 lg:hover:dark:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5 transition duration-300" :class="{ 'rotate-180': showMoreOptions }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div v-if="showMoreOptions && joined.includes(gid)" class="flex flex-col">
              <div v-if="observed.includes(gid)" @click="removeObservedGroupClick" class="flex p-3 gap-2 lg:hover:bg-gray-200/70 lg:hover:dark:bg-gray-800/90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="3" y1="3" x2="21" y2="21" />
                  <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                  <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                </svg>
                <p class="text-sm">Przestań obserwować</p>
              </div>
              <div v-else @click="observeGroupClick" class="flex p-3 gap-2 lg:hover:bg-gray-200/70 lg:hover:dark:bg-gray-800/90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                </svg>
                <p class="text-sm">Obserwuj</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center my-7 gap-3">
            <div v-if="joined.includes(gid)" class="w-full flex justify-center px-5 mt-6">
              <div @click="showCreatePost" class="flex items-center px-4 py-4 w-44 justify-center rounded-lg transition duration-500 cursor-pointer transform lg:hover:scale-110 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl">
                <img src="/img/add.svg" alt="add" class="w-6 h-6 mr-1" />
                <p class="text-md text-white text-center">Nowy post</p>
              </div>
            </div>
            <div v-if="joined.includes(gid)">
              <div v-if="requestAdmin.includes(gid)" @click="acceptAdminClick" class="p-3 bg-emerald-600 rounded-lg hover:bg-emerald-700 text-white cursor-pointer transition">
                <p>Zostań administatorem grupy</p>
              </div>
              <div v-if="requestMod.includes(gid)" @click="acceptModClick" class="p-3 bg-emerald-600 rounded-lg hover:bg-emerald-700 text-white cursor-pointer transition">
                <p>Zostań moderatorem grupy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profileContentDivStyle">
        <div v-if="!blockedBy.includes(gid)" class="profileTabsContentStyle">
          <div class="profileTabMenu">
            <router-link @click="changeViewMode('posts')" to="posts" class="profileTab" :class="{ profileTabActive: viewMode == 'posts' }">Posty</router-link>
            <router-link @click="changeViewMode('gallery')" to="gallery" class="profileTab" :class="{ profileTabActive: viewMode == 'gallery' }">Galeria</router-link>
            <router-link @click="changeViewMode('info')" to="info" class="profileTab" :class="{ profileTabActive: viewMode == 'info' }">Informacje</router-link>
            <router-link @click="changeViewMode('settings')" to="settings" class="profileTab" :class="{ profileTabActive: viewMode == 'settings', '!hidden': !(adminMode || modMode) }">Ustawienia</router-link>
          </div>
          <div v-if="this.gid" class="overflow-y-auto w-full h-full py-4 mt-1 mb-2 p-2">
            <router-view :gid="this.gid" :groupData="{ gid, name, groupname, description, categories, groupProfileImage, groupProfileBackground, membersCount, created, groupType }" name="groupContent" class="h-full w-full"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProfileBackgroundUrl, getProfileImageUrl } from "@/firebase-storage/getFiles";
import { getBlobFromURL } from "@/helpers/blobFunctions";
import CreatePost from "@/views/Post/CreatePost.vue";
import { mapState } from "vuex";
import { acceptGroupAdminInvitation, acceptGroupModInvitation, joinGroup, leaveGroup, observeGroup, removeObservedGroup } from "@/firebase-functions/functions";
import { getGroupDataOnGroupname } from "@/database/getData";
export default {
  components: {
    CreatePost,
  },
  data() {
    return {
      gid: null,
      name: null,
      groupname: null,
      description: null,
      categories: null,
      groupProfileImage: null,
      groupProfileBackground: null,
      groupType: null,
      createPost: false,
      viewMode: "posts",
      showMoreOptions: false,
      adminMode: false,
      modMode: false,
      membersCount: null,
      created: null,
    };
  },
  computed: {
    ...mapState("userGroupsInfo", ["joined", "observed", "blockedBy", "administered", "moderated", "requestAdmin", "requestMod", "requestMember"]),
  },
  watch: {
    administered(newValue, oldValue) {
      if (newValue.includes(this.gid)) {
        this.adminMode = true;
      } else {
        this.adminMode = false;
      }
    },
    moderated(newValue, oldValue) {
      if (newValue.includes(this.gid)) {
        this.modMode = true;
      } else {
        this.modMode = false;
      }
    },
  },
  methods: {
    toggleShowMoreOptions() {
      this.showMoreOptions = !this.showMoreOptions;
    },
    changeViewMode(value) {
      this.viewMode = value;
    },
    showCreatePost() {
      this.createPost = true;
    },
    async getGroupInfo() {
      const groupInfo = await getGroupDataOnGroupname(this.$route.params.groupname);
      console.log("groupData.id: ", groupInfo.id);
      this.gid = groupInfo.id;
      this.name = groupInfo.name;
      this.groupname = groupInfo.groupname;
      this.description = groupInfo.description;
      this.categories = groupInfo.categories;
      this.created = groupInfo.createdTimestamp;
      this.membersCount = groupInfo.membersCount;
      this.groupType = groupInfo.type;
    },
    async getGroupImages() {
      let profileImgUrl = await getProfileImageUrl(this.gid);

      if (profileImgUrl != null) {
        let blob = await getBlobFromURL(profileImgUrl);
        this.groupProfileImage = URL.createObjectURL(blob);
      } else {
        this.groupProfileImage = "/img/avatar.png";
      }

      let backgroundImgUrl = await getProfileBackgroundUrl(this.gid);
      if (backgroundImgUrl != null) {
        let blob = await getBlobFromURL(backgroundImgUrl);
        this.groupProfileBackground = URL.createObjectURL(blob);
      } else {
        this.groupProfileBackground = "/img/wallpaper.jpg";
      }
    },
    async joinGroupClick() {
      await joinGroup(this.gid);
    },
    async leaveGroupClick() {
      await leaveGroup(this.gid);
    },
    async acceptAdminClick() {
      await acceptGroupAdminInvitation(this.gid);
    },
    async acceptModClick() {
      console.log("gid: ", this.gid);
      await acceptGroupModInvitation(this.gid);
    },
    async observeGroupClick() {
      await observeGroup(this.gid);
    },
    async removeObservedGroupClick() {
      await removeObservedGroup(this.gid);
    },
  },

  async mounted() {
    let module = this.$route.path.slice(this.$route.path.lastIndexOf("/") + 1);
    this.changeViewMode(module);

    await this.getGroupInfo();

    if (this.administered.includes(this.gid)) {
      this.adminMode = true;
    }

    if (this.moderated.includes(this.gid)) {
      this.modMode = true;
    }

    await this.getGroupImages();
  },
};
</script>

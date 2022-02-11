<template>
  <CreatePost v-if="createPost" :fromPage="{ pid: pid, pagename: pagename, name: name }" />
  <edit-page v-if="editPage" :pageData="{ pid: pid, name: name, description: description, categories: categories, profileImage: pageProfileImage, profileBackground: pageProfileBackground }" />
  <div class="md:pt-16 flex flex-col flex-grow overflow-y-scroll md:overflow-y-hidden">
    <div class="profileMainStyle md:!flex-row-reverse">
      <div class="profileInfoDivStyle md:overflow-y-auto">
        <img ref="profileBackgroundImg" :src="pageProfileBackground" class="h-40 w-full object-cover shadow-md" alt="ProfileBackground" />
        <img ref="profileImg" class="m-auto -mt-20 h-40 w-40 rounded-full shadow-xl" :src="pageProfileImage" alt="ProfilePhoto" />
        <div class="flex flex-col px-3 break-words">
          <p class="text-center text-2xl font-bold mt-5">{{ name }}</p>
          <p class="text-center text-lg mt-2">{{ pagename }}</p>
          <p class="text-center text-sm my-5 px-5 text-gray-500 dark:text-gray-400">{{ description }}</p>
          <div class="flex flex-col rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800/40 shadow-xl cursor-pointer self-center">
            <div class="flex">
              <div v-if="observed.includes(pid)" @click="removePageObservedClick()" class="flex p-3 gap-2 bg-gray-100/20 dark:bg-gray-800/50 lg:hover:bg-gray-200/50 dark:lg:hover:bg-gray-700/40 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="3" y1="3" x2="21" y2="21" />
                  <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                  <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                </svg>
                <p class="text-sm">Przestań obserwować</p>
              </div>
              <div v-else @click="observePageClick()" class="flex p-3 gap-2 bg-sky-500 w-44 text-white lg:hover:bg-sky-600 items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                </svg>
                <p class="text-sm">Obserwuj</p>
              </div>
              <div @click="toggleShowMoreOptions" class="flex dark:bg-gray-800 bg-gray-300/60 p-3 self-start lg:hover:bg-gray-300/30 lg:hover:dark:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5 transition duration-300" :class="{ 'rotate-180': showMoreOptions }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div v-if="showMoreOptions" class="flex flex-col cursor-not-allowed">
              <div class="flex p-3 gap-2 lg:hover:bg-gray-200/70 lg:hover:dark:bg-gray-800/90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14.274 10.291a4 4 0 1 0 -5.554 -5.58m-.548 3.453a4.01 4.01 0 0 0 2.62 2.65" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 1.147 .167m2.685 2.681a4 4 0 0 1 .168 1.152v2" />
                  <line x1="3" y1="3" x2="21" y2="21" />
                </svg>
                <p class="text-sm">Zablokuj (wkrótce)</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center my-6 gap-3">
            <div v-if="adminMode" @click="toggleEditPage" class="w-44 flex items-center justify-center gap-2 p-3 rounded-lg overflow-hidden text-white bg-sky-600 lg:hover:bg-sky-700 shadow-xl cursor-pointer transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <p class="text-sm">Edytuj stronę</p>
            </div>
            <div v-if="adminMode" class="w-44 flex items-center justify-center gap-2 p-3 rounded-lg overflow-hidden text-white bg-sky-600 lg:hover:bg-sky-700 shadow-xl cursor-pointer transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5 flex-shrink-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <circle cx="12" cy="11" r="1" />
                <line x1="12" y1="12" x2="12" y2="14.5" />
              </svg>
              <p class="text-sm">Zarządzaj uprawnieniami</p>
            </div>
            <div class="w-full px-10">
              <div @click="showCreatePost" class="w-full flex items-center pt-8 pb-8 pl-4 pr-4 mt-12 justify-center rounded-lg transition duration-500 cursor-pointer transform lg:hover:scale-110 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl">
                <img src="/img/add.svg" alt="add" class="w-8 h-8 mr-1" />
                <p class="text-xl text-white text-center">Nowy post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profileContentDivStyle">
        <div class="profileTabsContentStyle">
          <div class="profileTabMenu">
            <router-link @click="changeViewMode('posts')" to="posts" class="profileTab" :class="{ profileTabActive: viewMode == 'posts' }">Posty</router-link>
            <router-link @click="changeViewMode('gallery')" to="gallery" class="profileTab" :class="{ profileTabActive: viewMode == 'gallery' }">Galeria</router-link>
            <router-link @click="changeViewMode('info')" to="info" class="profileTab" :class="{ profileTabActive: viewMode == 'info' }">Informacje</router-link>
          </div>
          <div v-if="this.pid" class="overflow-y-auto w-full h-full py-4 mt-1 mb-2 p-2">
            <router-view :pid="this.pid" name="pageContent" class="h-full w-full"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPageDataOnPagename } from "@/database/getData";
import { getPageProfileBackgroundUrl, getPageProfileImageUrl } from "@/firebase-storage/getFiles";
import { getBlobFromURL } from "@/helpers/blobFunctions";
import CreatePost from "@/views/Post/CreatePost.vue";
import { mapState } from "vuex";
import { observePage, removeObservedPage } from "@/firebase-functions/functions";
import EditPage from "@/views/Page/EditPage.vue";
export default {
  components: {
    CreatePost,
    EditPage,
  },
  data() {
    return {
      pid: null,
      name: null,
      pagename: null,
      description: null,
      categories: null,
      pageProfileImage: null,
      pageProfileBackground: null,
      createPost: false,
      viewMode: "posts",
      showMoreOptions: false,
      adminMode: false,
      modMode: false,
      editPage: false,
    };
  },
  computed: {
    ...mapState("userPagesInfo", ["observed", "blocked", "administered", "moderated"]),
  },
  methods: {
    toggleEditPage() {
      this.editPage = !this.editPage;
    },
    toggleShowMoreOptions() {
      this.showMoreOptions = !this.showMoreOptions;
    },
    changeViewMode(value) {
      this.viewMode = value;
    },
    showCreatePost() {
      this.createPost = true;
    },
    async getPageInfo() {
      const pageData = await getPageDataOnPagename(this.$route.params.pagename);
      console.log("pageData.id: ", pageData.id);
      this.pid = pageData.id;
      this.name = pageData.name;
      this.pagename = pageData.pagename;
      this.description = pageData.description;
      this.categories = pageData.categories;
    },
    async getPageImages() {
      let profileImgUrl = await getPageProfileImageUrl(this.pid);

      if (profileImgUrl != null) {
        let blob = await getBlobFromURL(profileImgUrl);
        this.pageProfileImage = URL.createObjectURL(blob);
      } else {
        this.pageProfileImage = "/img/avatar.png";
      }

      let backgroundImgUrl = await getPageProfileBackgroundUrl(this.pid);
      if (backgroundImgUrl != null) {
        let blob = await getBlobFromURL(backgroundImgUrl);
        this.pageProfileBackground = URL.createObjectURL(blob);
      } else {
        this.pageProfileBackground = "/img/wallpaper.jpg";
      }
    },
    async observePageClick() {
      await observePage(this.pid);
    },
    async removePageObservedClick() {
      await removeObservedPage(this.pid);
    },
  },

  async mounted() {
    let module = this.$route.path.slice(this.$route.path.lastIndexOf("/") + 1);
    this.changeViewMode(module);

    await this.getPageInfo();

    if (this.administered.includes(this.pid)) {
      this.adminMode = true;
    }

    if (this.moderated.includes(this.pid)) {
      this.modMode = true;
    }

    await this.getPageImages();
  },
};
</script>

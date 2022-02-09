<template>
  <CreatePost v-if="createPost" :fromPage="{ pid: pid, pagename: pagename, name: name }" />
  <div class="md:pt-16 flex flex-col flex-grow overflow-y-scroll md:overflow-y-hidden">
    <div class="profileMainStyle !flex-row-reverse">
      <div class="profileInfoDivStyle">
        <img ref="profileBackgroundImg" :src="pageProfileBackground" class="h-40 w-full object-cover shadow-md" alt="ProfileBackground" />
        <img ref="profileImg" class="m-auto -mt-20 h-40 w-40 rounded-full shadow-xl" :src="pageProfileImage" alt="ProfilePhoto" />
        <div class="flex flex-col px-3 break-words">
          <p class="text-center text-2xl font-bold mt-5">{{ name }}</p>
          <p class="text-center text-lg mt-2">{{ pagename }}</p>
          <p class="text-center text-sm my-5 px-5 text-gray-500 dark:text-gray-400">{{ description }}</p>
          <div class="flex justify-center my-6">
            <div @click="toggleEditProfileMode" v-if="selfProfile" class="flex gap-2 p-3 rounded-md overflow-hidden text-white bg-cyan-600 lg:hover:bg-cyan-700 shadow-xl cursor-pointer transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <p class="text-sm">Edytuj stronę</p>
            </div>
            <div>
              <div @click="showCreatePost" class="hidden w-full lg:flex items-center pt-8 pb-8 pl-4 pr-4 mt-12 justify-center rounded-lg transition duration-500 cursor-pointer transform lg:hover:scale-110 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl">
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
export default {
  components: {
    CreatePost,
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
    };
  },
  methods: {
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
  },

  async mounted() {
    let module = this.$route.path.slice(this.$route.path.lastIndexOf("/") + 1);
    this.changeViewMode(module);
    
    await this.getPageInfo();
    await this.getPageImages();
  },
};
</script>

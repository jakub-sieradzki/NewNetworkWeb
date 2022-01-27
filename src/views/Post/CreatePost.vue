<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-gray-500 dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-70 z-20 sm:backdrop-filter sm:backdrop-blur-sm">
    <div class="bg-gray-100 dark:bg-gray-900 h-full sm:h-96 sm:rounded-xl m-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:shadow-2xl w-full px-6 py-5 flex flex-col" style="max-width: 750px">
      <div class="flex justify-between items-center">
        <p>Nowy post</p>
        <svg @click="closeCreatePost" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div class="flex justify-between items-center mt-4 flex-wrap gap-2">
        <div class="flex gap-1 flex-wrap">
          <div class="dropdown">
            <div tabindex="0" class="px-3 py-1 border dark:border-gray-600 rounded-lg cursor-pointer text-sm">
              <p>Moja tablica</p>
            </div>
            <div class="w-64 dropdown-content mt-2 pr-4 p-2 bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-md shadow-xl max-h-64 overflow-y-scroll custom-scrollbar">
              <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mb-1 cursor-pointer">Moja tablica</p>
              <div class="w-full h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
              <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa0</p>
              <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa1</p>
            </div>
          </div>
          <div class="dropdown">
            <div tabindex="0" class="px-3 py-1 border dark:border-gray-600 rounded-lg cursor-pointer text-sm">
              <p>Publiczne</p>
            </div>
            <div class="w-32 dropdown-content mt-2 p-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border rounded-md shadow-xl">
              <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mb-1 cursor-pointer">Publiczne</p>
              <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Znajomi</p>
            </div>
          </div>
          <div class="dropdown">
            <div tabindex="0" class="px-3 py-1 border dark:border-gray-600 rounded-lg cursor-pointer text-sm">
              <p>Kategorie</p>
            </div>
            <div tabindex="0" @click.stop="" class="h-64 w-64 overflow-y-scroll dropdown-content mt-2 p-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border rounded-md shadow-xl">
              <CategoriesList @selected="emittedCategories" :categories="this.categories" :allSelected="false" />
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-1 px-2 py-1 rounded-lg border border-dashed border-gray-400" v-if="postType == 'txt'">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
            <p class="text-sm">Tekst</p>
          </div>
          <div class="flex items-center gap-1 px-2 py-1 rounded-lg border border-dashed border-gray-400" v-else-if="postType == 'img'">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="15" y1="8" x2="15.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" rx="3" />
              <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
              <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
            </svg>
            <p class="text-sm">Zdjęcia</p>
          </div>
        </div>
      </div>

      <div class="mt-3 flex flex-col" v-if="share">
        <p class="text-xs pb-3">Udostępniasz post:</p>
        <div class="flex flex-col bg-gray-200 dark:bg-gray-800 shadow-inner px-5 py-3 rounded-lg">
          <p class="text-sm">@{{ this.shareUsername }}</p>
          <p class="truncate">{{ this.shareContent }}</p>
        </div>
      </div>
      <textarea v-model="postContent.content" class="mt-5 mb-5 bg-transparent relative w-full resize-none custom-scrollbar text-xl focus:outline-none flex-grow" placeholder="Napisz, o czym myślisz..." autofocus></textarea>
      <div v-if="imagesURLs.length != 0" class="flex gap-3 overflow-x-auto custom-scrollbar pb-5">
        <div class="w-14 h-14 bg-cover bg-center rounded-md flex-nowrap flex-shrink-0 flex justify-end shadow-lg" v-for="url in imagesURLs" :key="url" :style="{ backgroundImage: 'url(' + url + ')' }">
          <div class="bg-gray-300 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-50 w-4 h-4 text-center rounded-full cursor-pointer m-1 text-xs" @click="removeImage(url)">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-4 h-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                    </svg>
                    <div class="h-11 w-px bg-gray-300 dark:bg-gray-700 ml-1 mr-1"></div> -->
          <input type="file" id="addImageInput" ref="addImageInput" accept="image/*" style="display: none" onclick="this.value=null;" multiple />
          <svg onclick="document.getElementById('addImageInput').click();" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="15" y1="8" x2="15.01" y2="8" />
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
            <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="5" cy="8" r="2" />
                        <circle cx="12" cy="4" r="2" />
                        <circle cx="19" cy="8" r="2" />
                        <circle cx="5" cy="16" r="2" />
                        <circle cx="19" cy="16" r="2" />
                        <path d="M8 22l4 -10l4 10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="3" />
                        <circle cx="12" cy="12" r="8" />
                        <line x1="12" y1="2" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="22" />
                        <line x1="20" y1="12" x2="22" y2="12" />
                        <line x1="2" y1="12" x2="4" y2="12" />
                    </svg> -->
        </div>
        <div>
          <button @click="send" class="btn btn-sm normal-case font-normal dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">Opublikuj</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, useStore } from "vuex";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import CategoriesList from "../Categories/CategoriesList.vue";
import categories from "../../data/categories";
import { sendPost } from "../../database/setData";

export default {
  props: ["shareId", "shareUid", "shareUsername", "shareContent"],
  components: {
    CategoriesList,
  },
  data() {
    return {
      postContent: {
        content: "",
      },
      imagesURLs: [],
      share: false,
      categories: {},
      selectedCategories: [],
      postType: "txt",
    };
  },
  computed: {
    ...mapState("user", ["uid", "username", "name", "surname", "profileImage"]),
  },
  mounted() {
    this.categories = categories;
    const addImageInput = this.$refs.addImageInput;
    addImageInput.addEventListener("change", this.selectedImages, false);

    if (this.shareId) {
      this.share = true;
    }
  },
  methods: {
    selectedImages(e) {
      const files = e.srcElement.files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          this.imagesURLs.push(URL.createObjectURL(files[i]));
        }
        if (this.imagesURLs.length > 0) {
          this.postType = "img";
        }
      }
      console.log(this.postType);
      console.log("imagesURLs after add: ", this.imagesURLs);
    },
    closeCreatePost() {
      this.$parent.createPost = false;
      // this.$store.commit('switchCreatePost')
    },
    async send() {
      if (this.selectedCategories.length <= 0) {
        alert("Wybierz co najmniej jedną kategorię");
        return;
      }

      // search for hashtags and lowercase it
      const hashtagsRegex = /[#][a-zA-Z0-9]{3,}/g;
      let array1;
      let hashtagsArray = [];
      while ((array1 = hashtagsRegex.exec(this.postContent.content)) !== null) {
        let hashtag = array1[0];
        hashtag = hashtag.substring(1);
        hashtag = hashtag.toLowerCase();

        hashtagsArray.push(hashtag);
      }

      console.log(hashtagsArray);
      const storage = getStorage();

      let storageFilesNames = [];

      for (let i = 0; i < this.imagesURLs.length; i++) {
        let url = this.imagesURLs[i];
        let fileName = url.slice(url.lastIndexOf("/") + 1);
        let blob = await fetch(this.imagesURLs[i]).then((r) => r.blob());
        let fileType = blob.type.slice(blob.type.indexOf("/") + 1);
        let storageFileName = fileName + "." + fileType;
        let storageRef = ref(storage, getAuth().currentUser.uid + "/" + storageFileName);
        await uploadBytes(storageRef, blob).then((snapshot) => {
          console.log(i, ": ", snapshot);
          storageFilesNames.push(storageFileName);
        });
      }

      let sId = "";
      if (this.shareId) {
        sId = this.shareId;
      }

      const send = await sendPost({
        uid: this.uid,
        username: this.username,
        name: this.name,
        surname: this.surname,
        profileImage: this.profileImage,
        content: this.postContent.content,
        files: storageFilesNames,
        shareId: sId,
        categories: this.selectedCategories,
        type: this.postType,
        hashtags: hashtagsArray,
      });

      if (send) {
        alert("Wysłano post");
        this.$parent.createPost = false;
      } else {
        alert("Wystąpił błąd podczas wysyłania postu");
      }
    },
    removeImage(u) {
      this.imagesURLs.splice(this.imagesURLs.indexOf(u), 1);
      console.log("imagesURLs after remove: ", this.imagesURLs);
      if (this.imagesURLs.length <= 0) {
        this.postType = "txt";
      }
    },
    emittedCategories(value) {
      this.selectedCategories = value;
    },
  },
};
</script>

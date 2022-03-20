<template>
  <change-profile-image v-if="showEditImage" :imageToChangeUrl="imageToChangeUrl" />
  <div class="createEditWindowBackgroundStyle">
    <div class="createEditWindowHelperDivStyle" style="max-width: 1200px">
      <div class="createEditWindowMainDivStyle md:max-h-[700px]">
        <div class="flex justify-between mb-3">
          <p>Utwórz stronę</p>
          <svg @click="closeCreateNewPage" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div class="flex flex-col md:flex-row gap-8 items-center md:gap-16 md:mx-10 md:my-5 overflow-y-auto scrollbar-none">
          <div class="flex md:w-1/2 w-full items-center justify-center">
            <div class="flex flex-col justify-center items-center w-full max-w-sm gap-6">
              <input type="file" id="inputProfileImage" @change="changeProfileImage" accept="image/*" onclick="this.value=null;" style="display: none" />
              <div onclick="document.getElementById('inputProfileImage').click();" class="flex flex-col items-center gap-3 cursor-pointer rounded-xl p-3 group">
                <img class="w-48 h-48 self-center rounded-full lg:group-hover:brightness-75 transition" :src="readyProfileImageUrl" alt="profile photo" />
                <div class="flex items-center gap-2 dark:bg-gray-800/50 backdrop-blur-sm py-1.5 px-4 rounded-2xl border dark:border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="10" x2="9.01" y2="10" />
                    <line x1="15" y1="10" x2="15.01" y2="10" />
                    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                  </svg>
                  <p class="text-sm">Dodaj zdjęcie profilowe</p>
                </div>
              </div>
              <div class="group relative h-40 w-full cursor-pointer text-white">
                <input type="file" id="inputBackgroundImage" accept="image/*" @change="changeBackgroundImage" onclick="this.value=null;" style="display: none" />
                <img onclick="document.getElementById('inputBackgroundImage').click();" class="h-40 w-full object-cover rounded-md lg:group-hover:brightness-75 transition" :src="readyBackgroundImageUrl" alt="profile background" />
                <div class="absolute bottom-0 flex items-center gap-2 dark:bg-gray-800/50 backdrop-blur-sm py-1.5 px-4 rounded-2xl m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="15" y1="8" x2="15.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                  </svg>
                  <p class="text-sm">Dodaj zdjęcie w tle</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 h-full flex justify-end items-center md:overflow-y-auto pr-2">
            <div class="flex flex-col justify-between h-full w-full">
              <div class="flex flex-col gap-7 w-full">
                <div class="flex flex-col w-full gap-2">
                  <p class="ml-1 text-sm dark:text-gray-200">Nazwa strony</p>
                  <input v-model="pName" class="inputStyle" type="text" placeholder="Nazwa strony" />
                  <p class="helpTextCreatePage">Podstawowa nazwa strony. Możesz ją zmieniać nie częściej niż co 90 dni</p>
                </div>
                <div class="flex flex-col w-full gap-2">
                  <p class="ml-1 text-sm dark:text-gray-200">Unikalna nazwa strony</p>
                  <input v-model="pUniqueName" class="inputStyle" type="text" placeholder="Unikalna nazwa strony" />
                  <p class="helpTextCreatePage">Unikalną nazwę strony można nadać tylko podczas tworzenia strony, później nie ma możliwości jej zmiany</p>
                </div>
                <div class="flex flex-col w-full gap-2">
                  <p class="ml-1 text-sm dark:text-gray-200">Opis</p>
                  <input v-model="pDescription" class="inputStyle" type="text" placeholder="Opis" />
                </div>
                <div class="flex flex-col w-full gap-2">
                  <div class="flex w-full gap-4 items-center">
                    <p class="ml-1 text-sm dark:text-gray-200">Wybierz kategorie strony:</p>
                    <div>
                      <div class="dropdown dropdown-top">
                        <div tabindex="0" class="p-1 px-4 text-sm dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md border dark:border-none cursor-pointer transition">
                          <p>Kategorie</p>
                        </div>
                        <div tabindex="0" @click.stop="" class="h-64 w-64 overflow-y-scroll dropdown-content mt-2 p-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border rounded-md shadow-xl">
                          <CategoriesList @selected="emittedCategories" :allSelected="false" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="helpTextCreatePage">Wybierz co najmniej jedną kategorię. Będziesz mógł publikować posty, które nie zaliczają się do wybranych teraz kategorii, jednak miej na uwadzę, że takie postępowanie może zniechęcić Twoich odbiorców do obserwowania strony</p>
                </div>
              </div>
              <div @click="createNewPage" class="w-full mt-7 bg-sky-600 lg:hover:bg-sky-700 text-white p-2 rounded-md cursor-pointer transition" :class="{ 'cursor-not-allowed bg-sky-900 lg:hover:bg-sky-900': isSaving }">
                <p v-if="!isSaving" class="text-center">Utwórz stronę</p>
                <p v-else class="text-center">Tworzenie...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChangeProfileImage from "@/components/ChangeProfileImage.vue";
import CategoriesList from "@/views/Categories/CategoriesList.vue";
import { checkIfPagenameExists, createPage } from "@/firebase-functions/functions";
import { getBlobFromURL, getBlobFullName } from "@/helpers/blobFunctions";
import { uploadPageBackground, uploadPageProfileImage, uploadProfileBackground, uploadProfileImage } from "@/firebase-storage/modifyFiles";
export default {
  components: {
    ChangeProfileImage,
    CategoriesList,
  },
  data() {
    return {
      readyProfileImageUrl: "/img/avatar.png",
      readyBackgroundImageUrl: "/img/wallpaper.jpg",
      imageToChangeUrl: "",
      showEditImage: false,
      isSaving: false,
      pName: "",
      pUniqueName: "",
      pDescription: "",
      pCategories: [],
    };
  },
  methods: {
    closeCreateNewPage() {
      this.$parent.toggleShowCreateNewPage();
    },
    changeProfileImage(e) {
      if (e.target.files) {
        const newImage = e.target.files[0];
        if (newImage) {
          this.imageToChangeUrl = URL.createObjectURL(newImage);
          this.showEditImage = true;
        }
      }
    },
    changeBackgroundImage(e) {
      if (e.target.files) {
        const newImage = e.target.files[0];
        if (newImage) {
          this.readyBackgroundImageUrl = URL.createObjectURL(newImage);
          this.isProfileBackgroundEdited = true;
        }
      }
    },
    emittedCategories(value) {
      this.pCategories = value;
    },
    async createNewPage() {
      if (this.pName == "" || this.pUniqueName == "" || this.pDescription == "" || this.pCategories.length <= 0) {
        alert("Uzupełnij wszystkie pola");
        return;
      }

      if (this.readyProfileImageUrl == "/img/avatar.png" || this.readyBackgroundImageUrl == "/img/wallpaper.jpg") {
        alert("Prześlij zdjęcie profilowe i zdjęcie w tle");
        return;
      }

      let pagenameExists = await checkIfPagenameExists(this.pUniqueName);
      if (pagenameExists) {
        if (pagenameExists.data.exists) {
          alert("Podana unikalna nazwa strony została już wykorzystana");
          return;
        }
      }

      this.isSaving = true;
      let pageData = await createPage({
        name: this.pName,
        pagename: this.pUniqueName,
        description: this.pDescription,
        categories: this.pCategories,
      });
      console.log("pageData: ", pageData.data.pageId);

      if (pageData) {
        const pageId = pageData.data.pageId;

        let blobProfileImage = await getBlobFromURL(this.readyProfileImageUrl);
        let profileImageName = await getBlobFullName(this.readyProfileImageUrl);
        await uploadProfileImage(pageId, blobProfileImage, profileImageName);

        let blobProfileBackground = await getBlobFromURL(this.readyBackgroundImageUrl);
        let profileBackgroundName = await getBlobFullName(this.readyBackgroundImageUrl);
        await uploadProfileBackground(pageId, blobProfileBackground, profileBackgroundName);
      }

      alert("Pomyślnie utworzono stronę");
      this.$parent.toggleShowCreateNewPage();
      this.$router.push("/page/" + this.pUniqueName + "/posts");
    },
  },
};
</script>

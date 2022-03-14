<template>
<change-profile-image v-if="showEditImage" :imageToChangeUrl="imageToChangeUrl" />

  <div class="fixed top-0 h-screen w-screen md:bg-gray-200/60 dark:md:bg-gray-800/80 md:backdrop-blur-sm z-10">
    <div class="w-full h-full md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:py-16 md:px-12 md:h-lg-editProfile" style="max-width: 1100px">
      <div class="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-900 md:shadow-2xl md:rounded-xl px-6 py-5">
        <div class="flex justify-between mb-3 md:mb-0">
          <p>Edytuj profil</p>
          <svg @click="closeEditProfile" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                  <p class="text-sm">Zmień zdjęcie profilowe</p>
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
                  <p class="text-sm">Zmień zdjęcie w tle</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 h-full flex justify-end items-center">
            <div class="flex flex-col justify-between max-w-sm h-full w-full">
              <div class="flex flex-col gap-7 w-full">
                <div class="flex flex-col w-full gap-2">
                  <p class="ml-1 text-sm dark:text-gray-200">Imię</p>
                  <input v-model="uName" class="dark:bg-black/20 py-3 px-5 outline-none rounded-md text-sm border dark:border-gray-700" type="text" placeholder="Imię" />
                </div>
                <div class="flex flex-col w-full gap-2">
                  <p class="ml-1 text-sm dark:text-gray-200">Nazwisko</p>
                  <input v-model="uSurname" class="dark:bg-black/20 py-3 px-5 outline-none rounded-md text-sm border dark:border-gray-700" type="text" placeholder="Nazwisko" />
                </div>
                <div class="flex flex-col w-full gap-2">
                  <p class="ml-1 text-sm dark:text-gray-200">Opis</p>
                  <input v-model="uDescription" class="dark:bg-black/20 py-3 px-5 outline-none rounded-md text-sm border dark:border-gray-700" type="text" placeholder="Opis" />
                </div>
              </div>
              <p class="text-sm text-gray-400 py-7 md:py-0">Pamiętaj, że imię i nazwisko możesz zmienić raz na 90 dni.<br />Zdjęcie profilowe, zdjęcie w tle i opis możesz zmieniać nieskończoną ilość razy.</p>
              <div @click="saveProfileChanges" class="w-full bg-emerald-600 lg:hover:bg-emerald-700 text-white p-2 rounded-md cursor-pointer transition" :class="{ 'cursor-not-allowed bg-emerald-900 lg:hover:bg-emerald-900': isSaving }">
                <p v-if="!isSaving" class="text-center">Zapisz zmiany</p>
                <p v-else class="text-center">Zapisywanie...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import "cropperjs/dist/cropper.css";
import { getBlobFromURL, getBlobFullName } from "@/helpers/blobFunctions";
import { removeAllProfileBackgrounds, removeAllProfileImages, uploadProfileImage, uploadProfileBackground } from "@/firebase-storage/modifyFiles";
import { getAuth } from "@firebase/auth";
import { updateUserDescription } from "@/database/setData";
import { updateNameAndSurname } from "@/firebase-functions/functions";
import ChangeProfileImage from "@/components/ChangeProfileImage.vue"
export default {
  components: {
    ChangeProfileImage,
  },
  data() {
    return {
      uName: "",
      uSurname: "",
      uDescription: "",
      imageToChangeUrl: null,
      readyProfileImageUrl: null,
      readyBackgroundImageUrl: null,
      showEditImage: false,
      isProfileImageEdited: false,
      isProfileBackgroundEdited: false,
      isSaving: false,
    };
  },
  computed: {
    ...mapState("user", ["name", "surname", "profileImage", "description"]),
  },
  methods: {
    ...mapMutations("user", ["setName", "setSurname", "setDescription", "setProfileImage"]),
    closeEditProfile() {
      this.$parent.editProfileMode = false;
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
    async saveProfileChanges() {
      if (this.isSaving) {
        return;
      }

      this.isSaving = true;
      if (this.isProfileImageEdited) {
        console.log("profile image edited");
        let blobProfileImage = await getBlobFromURL(this.readyProfileImageUrl);
        let profileImageName = await getBlobFullName(this.readyProfileImageUrl);

        await removeAllProfileImages(getAuth().currentUser.uid);
        await uploadProfileImage(getAuth().currentUser.uid, blobProfileImage, profileImageName);

        this.setProfileImage(this.readyProfileImageUrl);
      }

      if (this.isProfileBackgroundEdited) {
        console.log("profile background edited");
        let blobProfileBackground = await getBlobFromURL(this.readyBackgroundImageUrl);
        let profileBackgroundName = await getBlobFullName(this.readyBackgroundImageUrl);

        await removeAllProfileBackgrounds(getAuth().currentUser.uid);
        await uploadProfileBackground(getAuth().currentUser.uid, blobProfileBackground, profileBackgroundName);

        this.$parent.profileBackground = this.readyBackgroundImageUrl;
      }

      if (this.uDescription != this.description) {
        console.log("description edited");
        await updateUserDescription(getAuth().currentUser.uid, this.uDescription);
        this.setDescription(this.uDescription);
      }

      if (this.uName != this.name || this.uSurname != this.surname) {
        console.log("name or surname edited");
        await updateNameAndSurname(this.uName, this.uSurname);
        this.setName(this.uName);
        this.setSurname(this.uSurname);
      }
      alert("Zaktualizowano profil");
      this.$parent.editProfileMode = false;
    },
  },
  mounted() {
    this.uName = this.name;
    this.uSurname = this.surname;
    this.uDescription = this.description;

    this.readyProfileImageUrl = this.profileImage;
    this.readyBackgroundImageUrl = this.$parent.profileBackground;
  },
};
</script>

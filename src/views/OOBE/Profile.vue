<template>
  <change-profile-image v-if="showEditImage" :imageToChangeUrl="imageToChangeUrl" />
  <div>
    <p class="text-4xl font-semibold flex-shrink-0">Twój profil</p>
    <div class="flex flex-col items-center justify-center flex-shrink-0 mt-8">
      <div class="flex flex-col justify-center items-center w-full max-w-sm">
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
        <div class="group relative h-40 w-full cursor-pointer text-white mt-9">
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
        <div class="flex flex-col w-full gap-2 mt-14">
          <p class="ml-1 text-sm dark:text-gray-200">Opis profilu</p>
          <input v-model="uDescription" class="dark:bg-black/20 py-3 px-5 outline-none rounded-md text-sm border dark:border-gray-700" type="text" placeholder="Opis" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChangeProfileImage from "@/components/ChangeProfileImage.vue";
import { getBlobFromURL, getBlobFullName } from "@/helpers/blobFunctions";
import { removeAllProfileBackgrounds, removeAllProfileImages, uploadProfileBackground, uploadProfileImage } from "@/firebase-storage/modifyFiles";
import { updateUserDescription } from "@/database/setData";
import { mapMutations } from "vuex";
import { getAuth } from "@firebase/auth";
export default {
  components: {
    ChangeProfileImage,
  },
  data() {
    return {
      imageToChangeUrl: "",
      readyProfileImageUrl: "/img/avatar.png",
      readyBackgroundImageUrl: "/img/wallpaper.jpg",
      uDescription: "",
      isProfileImageEdited: false,
      isProfileBackgroundEdited: false,
      showEditImage: false,
      isSaving: false,
    };
  },
  methods: {
    ...mapMutations("user", ["setDescription", "setProfileImage"]),
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
      console.log("save");
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
      }

      if (this.uDescription != this.description) {
        console.log("description edited");
        await updateUserDescription(getAuth().currentUser.uid, this.uDescription);
        this.setDescription(this.uDescription);
      }

      alert("Zaktualizowano profil");
    },
  },
  async beforeUnmount() {
    await this.saveProfileChanges();
  },
};
</script>

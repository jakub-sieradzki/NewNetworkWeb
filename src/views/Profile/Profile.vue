<template>
  <div class="flex flex-col flex-grow overflow-y-scroll md:overflow-y-hidden">
    <div class="md:border dark:border-gray-700 md:shadow-lg md:overflow-hidden h-full md:my-10 md:mx-5 lg:mx-20 xl:mx-30 3xl:mx-40 flex flex-col md:dark:bg-gray-900 md:rounded-lg md:flex-row gap-0">
      <div class="md:dark:bg-gray-800/40 md:bg-gray-50 md:w-2/6">
        <img class="h-40 w-full object-cover shadow-md" src="/img/wallpaper.jpg" alt="ProfileBackground" />
        <input type="file" id="imageFile" ref="imageFile" accept="image/*" style="display: none" />
        <img onclick="document.getElementById('imageFile').click();" ref="profileImg" class="cursor-pointer m-auto -mt-20 h-40 w-40 rounded-full shadow-xl" src="images/profile.png" alt="ProfilePhoto" />
        <div class="flex flex-col">
          <p class="text-center text-2xl font-bold mt-5">{{ name }} {{ surname }}</p>
          <p class="text-center text-sm mt-4 px-5 text-gray-500 dark:text-gray-400"></p>
          <div class="flex justify-center my-3">
            <ProfileActions v-if="!blocked" :uid="uid" />
            <p v-else class="text-lg p-5 font-semibold text-center">Zostałeś zablokowany przez tego użytkownika</p>
          </div>
        </div>
      </div>
      <div class="md:overflow-y-hidden md:w-4/6">
        <div class="overflow-hidden h-full md:mt-10 2xl:px-32 md:px-5">
          <div class="tabs border-white flex-grow flex-nowrap w-full pb-5 overflow-x-auto">
            <router-link to="posts" class="tab tab-bordered flex-grow tab-active">Posty</router-link>
            <router-link to="gallery" class="tab tab-bordered flex-grow">Galeria</router-link>
            <router-link to="friends" class="tab tab-bordered flex-grow">Znajomi</router-link>
            <router-link to="info" class="tab tab-bordered flex-grow">Informacje</router-link>
          </div>
          <div v-if="!blocked && !blockedBySelf" class="md:overflow-y-scroll custom-scrollbar h-5/6 px-5">
            <router-view name="profileContent" class="h-full w-full"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useStore } from "vuex";
import { getFirestore, collection, setDoc, doc, getDocs, updateDoc, addDoc, document, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import { useRouter } from "vue-router";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getApp } from "@firebase/app";
import ProfileActions from "./ProfileActions.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ProfileActions,
  },
  data() {
    return {
      name: null,
      surname: null,
      description: null,
      profileImageUrl: null,
      username: null,
      uid: null,
      blocked: true,
      blockedBySelf: true,
    };
  },

  methods: {
    loadProfilePhoto() {
      const storage = getStorage();
      const img = this.$refs.profileImg;
      if (!this.blocked) {
        if (this.profileImageUrl) {
          getDownloadURL(ref(storage, this.profileImageUrl))
            .then((url) => {
              // Or inserted into an <img> element
              img.setAttribute("src", url);
            })
            .catch((error) => {
              // Handle any errors
            });
        } else {
          img.setAttribute("src", "/img/avatar.png");
        }
      } else {
        img.setAttribute("src", "");
      }
    },
    async getUserInfo() {
      const db = getFirestore();
      const q = query(collection(db, "users"), where("username", "==", this.$route.params.username));
      await getDocs(q).then((docs) => {
        docs.forEach((doc) => {
          let userDoc = doc.data();
          this.uid = doc.id;
          this.name = userDoc.name;
          this.surname = userDoc.surname;
          this.username = userDoc.username;
          this.description = userDoc.description;
          this.profileImageUrl = userDoc.profileImageUrl;
        });
      });
    },
  },
  computed: {
    ...mapGetters({
      peopleBlocked: "getPeopleBlocked",
      blockedBy: "getBlockedBy",
    }),
  },
  async updated() {
    if (this.username != this.$route.params.username) {
      await this.getUserInfo();
      this.blocked = this.blockedBy.includes(this.uid);
      this.blockedBySelf = this.peopleBlocked.includes(this.uid);
      console.log("isBlockedBySelf? ", this.blockedBySelf);
      console.log("isBlocked? ", this.blocked);
      console.log("updated");
      
      this.loadProfilePhoto();
      if (this.blocked) {
        console.log("user blocked");
        return;
      }
    }
  },
  async mounted() {
    console.log("mounted started");
    await this.getUserInfo();
    this.blocked = this.blockedBy.includes(this.uid);
    this.blockedBySelf = this.peopleBlocked.includes(this.uid);

    if (this.blocked) {
      console.log("user blocked");
      return;
    }

    this.loadProfilePhoto();

    const fileInput = this.$refs.imageFile;
    fileInput.onchange = () => {
      const selectedFile = fileInput.files[0];
      const storage = getStorage();
      const storageRef = ref(storage, getAuth().currentUser.uid + "/profileImage" + selectedFile.name.substring(selectedFile.name.lastIndexOf(".")));
      uploadBytes(storageRef, selectedFile).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        console.log(snapshot.metadata.fullPath);
        console.log(getAuth().currentUser.uid);
        const db = getFirestore();
        const docRef = doc(db, "users", getAuth().currentUser.uid);
        setDoc(
          docRef,
          {
            profileImageUrl: snapshot.metadata.fullPath,
          },
          { merge: true }
        ).then(() => {
          console.log("success");
        });
      });

      console.log(selectedFile);
    };
  },
};
</script>

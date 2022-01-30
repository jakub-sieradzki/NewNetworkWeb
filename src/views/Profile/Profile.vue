<template>
  <EditProfile v-if="editProfileMode" />
  <div class="flex flex-col flex-grow overflow-y-scroll md:overflow-y-hidden">
    <div class="md:border dark:border-gray-700 md:shadow-lg md:overflow-hidden h-full md:my-10 md:mx-5 lg:mx-20 xl:mx-30 3xl:mx-40 flex flex-col md:dark:bg-gray-900 md:rounded-lg md:flex-row gap-0">
      <div class="md:dark:bg-gray-800/40 md:bg-gray-50 md:w-5/12">
        <img ref="profileBackgroundImg" class="h-40 w-full object-cover shadow-md" src="/img/wallpaper.jpg" alt="ProfileBackground" />
        <img ref="profileImg" class="m-auto -mt-20 h-40 w-40 rounded-full shadow-xl" src="images/profile.png" alt="ProfilePhoto" />
        <div class="flex flex-col">
          <p class="text-center text-2xl font-bold mt-5">{{ name }} {{ surname }}</p>
          <p class="text-center text-sm my-3 px-5 text-gray-500 dark:text-gray-400">{{ description }}</p>
          <div class="flex justify-center my-6">
            <div @click="toggleEditProfileMode" v-if="selfProfile" class="flex gap-2 p-3 rounded-md overflow-hidden text-white bg-cyan-600 hover:bg-cyan-700 shadow-xl cursor-pointer transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <p class="text-sm">Edytuj profil</p>
            </div>
            <ProfileActions v-else-if="!ifBlockedByUser" :uid="uid" />
            <p v-else class="text-lg p-5 font-semibold text-center">Zostałeś zablokowany przez tego użytkownika</p>
          </div>
        </div>
      </div>
      <div class="md:overflow-y-hidden w-full">
        <div class="overflow-hidden h-full md:mt-10 2xl:px-32 md:px-5">
          <div class="tabs border-white flex-grow flex-nowrap w-full pb-5 overflow-x-auto">
            <router-link to="posts" class="tab tab-bordered flex-grow tab-active">Posty</router-link>
            <router-link to="gallery" class="tab tab-bordered flex-grow">Galeria</router-link>
            <router-link to="friends" class="tab tab-bordered flex-grow">Znajomi</router-link>
            <router-link to="info" class="tab tab-bordered flex-grow">Informacje</router-link>
          </div>
          <div v-if="!ifBlockedByUser && !ifBlockedBySelf" class="md:overflow-y-scroll custom-scrollbar h-5/6 px-5">
            <router-view name="profileContent" class="h-full w-full"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth } from "firebase/auth";
import { mapState } from "vuex";
import ProfileActions from "./ProfileActions.vue";
import EditProfile from "./EditProfile.vue";
import { getUserDataOnUsername } from "@/database/getData";
import { getProfileImageUrl, getProfileBackgroundUrl } from "@/firebase-storage/getFiles";
export default {
  components: {
    ProfileActions,
    EditProfile,
  },
  data() {
    return {
      name: null,
      surname: null,
      description: null,
      username: null,
      uid: null,
      selfProfile: false,
      ifBlockedByUser: true,
      ifBlockedBySelf: true,
      editProfileMode: false,
    };
  },

  methods: {
    toggleEditProfileMode() {
      this.editProfileMode = !this.editProfileMode;
    },
    async loadProfilePhoto() {
      const img = this.$refs.profileImg;
      if (this.selfProfile) {
        img.setAttribute("src", this.currentUserProfileImage);
      } else {
        if (!this.blockedByUser) {
          let url = await getProfileImageUrl(this.uid);
          if (url != null) {
            img.setAttribute("src", url);
          } else {
            img.setAttribute("src", "/img/avatar.png");
          }
        } else {
          img.setAttribute("src", "");
        }
      }
    },
    async loadProfileBackground() {
      const img = this.$refs.profileBackgroundImg;
      if (this.selfProfile) {
        img.setAttribute("src", this.currentUserProfileBackground);
      } else {
        if (!this.blockedByUser) {
          let url = await getProfileBackgroundUrl(this.uid);
          if (url != null) {
            img.setAttribute("src", url);
          } else {
            img.setAttribute("src", "/img/wallpaper.jpg");
          }
        } else {
          img.setAttribute("src", "");
        }
      }
    },
    async getUserInfo() {
      const userData = await getUserDataOnUsername(this.$route.params.username);
      this.uid = userData.id;
      this.name = userData.name;
      this.surname = userData.surname;
      this.username = userData.username;
      this.description = userData.description;
    },
  },
  computed: {
    ...mapState("user", {
      currentUserName: "name",
      currentUserSurname: "surname",
      currentUserDescription: "description",
      currentUserProfileImage: "profileImage",
      currentUserProfileBackground: "profileBackground",
    }),
    ...mapState("userPeopleInfo", ["blocked", "blockedBy"]),
  },
  watch: {
    currentUserName(newName, oldName) {
      this.name = newName;
    },
    currentUserSurname(newSurname, oldSurname) {
      this.surname = newSurname;
    },
    currentUserDescription(newDescription, oldDescription) {
      this.description = newDescription;
    },
    currentUserProfileImage(newUrl, oldUrl) {
      this.loadProfilePhoto();
    },
    currentUserProfileBackground(newUrl, oldUrl) {
      this.loadProfileBackground();
    },
  },
  async updated() {
    if (this.username != this.$route.params.username) {
      console.log("update");
      await this.getUserInfo();
      this.ifBlockedByUser = this.blockedBy.includes(this.uid);
      this.ifBlockedBySelf = this.blocked.includes(this.uid);

      if (this.uid == getAuth().currentUser.uid) {
        this.selfProfile = true;
      } else {
        this.selfProfile = false;
      }

      this.loadProfilePhoto();
      this.loadProfileBackground();
    }
  },
  async mounted() {
    console.log("mounted started");
    await this.getUserInfo();
    if (this.uid == getAuth().currentUser.uid) {
      this.selfProfile = true;
    }

    this.ifBlockedByUser = this.blockedBy.includes(this.uid);
    this.ifBlockedBySelf = this.blocked.includes(this.uid);

    if (this.ifBlockedByUser) {
      console.log("user blocked");
      return;
    }

    this.loadProfilePhoto();
    this.loadProfileBackground();
  },
};
</script>

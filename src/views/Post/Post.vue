<template>
  <!-- Post -->
  <CreatePost v-if="createPost" :shareId="postData.id" :shareUid="postData.uid" :shareUsername="postData.username" :shareContent="postData.content" />
  <div class="post flex-grow" style="max-width: 650px">
    <!-- Header -->
    <div class="post__header">
      <div @click="showProfile()" class="mr-10 w-auto min-w-0 max-w-full flex cursor-pointer hover:underline overflow-hidden">
        <img ref="profileImg" class="post__header__user-info__profile-picture rounded-full" alt="photo" />
        <div class="overflow-hidden">
          <p class="post__header__user-info__user-name">{{ postData.name }} {{ postData.surname }}</p>
          <p class="post__header__user-info__user-id">@{{ postData.username }}</p>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="post__header__actions-button" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
        <ul class="dropdown-content dark:bg-gray-800 border dark:border-gray-700 shadow mt-3 rounded-lg w-52 h-14" tabindex="0">
          <li @click="deletePost()" class="flex items-center p-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
            <p class="text-sm pl-3">Usuń post</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- End Header -->
    <!-- Content -->
    <div>
      <div @click="this.$router.push('/post/' + postData.id)" class="post__content cursor-pointer select-ghost">
        <p class="">{{ postData.content }}</p>
      </div>
      <div v-if="imagesUrls.length != 0" class="flex flex-shrink-0 overflow-x-auto custom-scrollbar rounded-lg mb-4">
        <img class="w-full" v-for="url in imagesUrls" :key="url" :src="url" alt="img" />
      </div>
    </div>
    <!-- End Content -->
    <SharedPost v-if="postData.shareId" :postId="postData.shareId" />
    <!-- Info -->
    <div class="h-auto w-full flex mt-4 justify-between">
      <!--Categories list-->
      <div class="pt-1 pr-3 pl-2 pb-1 flex-shrink text-sm whitespace-nowrap cursor-pointer flex gap-1 items-center text-gray-500 dark:text-gray-400 bg-slate-200 bg-opacity-60 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 hover:dark:bg-opacity-50 rounded-lg transition" @click="toggleShowCategories">
        <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-45': showCategories }" class="stroke-current w-5 h-5 transition duration-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12l3 3l3 -3l-3 -3z" />
          <path d="M15 12l3 3l3 -3l-3 -3z" />
          <path d="M9 6l3 3l3 -3l-3 -3z" />
          <path d="M9 18l3 3l3 -3l-3 -3z" />
        </svg>
        <p>Kategorie</p>
      </div>
      <p class="self-center text-gray-400 text-sm flex-shrink truncate justify-center">{{ localDate }}</p>
    </div>
    <div v-if="showCategories" class="flex flex-wrap gap-2 mt-4">
      <div v-for="cat in categoriesList" :key="cat.id" :class="cat.background" class="px-4 py-2 rounded-2xl">
        <p class="text-xs text-white whitespace-nowrap">{{ cat.name }}</p>
      </div>
    </div>
    <!-- End Info -->
    <!--Actions-->
    <div class="post__actions">
      <div class="post__actions__action">
        <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" />
          <path d="M15 19l2 2l4 -4" />
        </svg>
      </div>
      <div @click="toggleComments()" class="post__actions__action">
        <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="14" y2="13" />
        </svg>
        <p class="post__actions__action__text">
          <span class="hidden sm:inline-block">Komentarze</span>
          <!-- <span class="sm:text-xs"><span class="hidden sm:inline-block">(</span>{{ com_count }}<span class="hidden sm:inline-block">)</span></span> -->
        </p>
      </div>
      <div @click="shareClick" class="post__actions__action">
        <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
          <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
        </svg>
        <p class="hidden sm:block post__actions__action__text">Udostępnij</p>
      </div>
    </div>
    <!--End Actions-->
    <PostCategories v-if="showComments" :postId="this.postData.id" />
  </div>
  <!-- End Post -->
</template>
<script>
import CreatePost from "./CreatePost.vue";
import Post from "./Post.vue";
import PostCategories from "./PostCategories.vue";
import SharedPost from "./SharedPost.vue";

import { ref as storageRef, getStorage, getDownloadURL, deleteObject } from "firebase/storage";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import categoriesData from "../../data/categories";
export default {
  components: {
    CreatePost,
    Post,
    SharedPost,
    PostCategories,
  },
  props: ["postData"],
  data() {
    return {
      showCategories: false,
      showComments: false,
      localDate: "",
      imagesUrls: [],
      createPost: false,
      categoriesList: {},
    };
  },
  methods: {
    showProfile() {
      this.$router.push("/user/" + this.postData.username + "/posts");
    },
    toggleComments() {
      this.showComments = !this.showComments;
    },
    toggleShowCategories() {
      this.showCategories = !this.showCategories;
    },
    shareClick() {
      this.createPost = true;
    },
    async deletePost() {
      const user = getAuth().currentUser;
      if (user.uid == this.postData.uid) {
        const storage = getStorage();
        for (var i = 0; i < this.postData.files.length; i++) {
          const fileRef = storageRef(storage, user.uid + "/" + this.postData.files[i]);
          await deleteObject(fileRef)
            .then(() => {
              console.log("Photo: " + this.postData.files[i] + " removed successfully");
            })
            .catch((error) => {
              console.log("Error removing photo: " + this.postData.files[i] + ": ", error);
            });
        }

        const db = getFirestore();
        await deleteDoc(doc(db, "posts", this.postData.id)).then(() => {
          alert("Usunięto post. Odśwież stronę aby zobaczyć zmiany");
        });
      } else {
        alert("To nie jest Twój post, więc nie możesz go usunąć :)");
      }
    },
  },
  async mounted() {
    const storage = getStorage();

    // Convert date
    const date = this.postData.createdTimestamp.toDate();
    this.localDate = date.toLocaleString();

    // Get profile image
    const img = this.$refs.profileImg;
    if (this.postData.profileImage) {
      getDownloadURL(storageRef(storage, this.postData.profileImage))
        .then((url) => {
          img.setAttribute("src", url);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      img.setAttribute("src", "/img/avatar.png");
    }

    // Get post images
    if (this.postData.files) {
      for (let i = 0; i < this.postData.files.length; i++) {
        getDownloadURL(storageRef(storage, this.postData.uid + "/" + this.postData.files[i])).then((url) => {
          this.imagesUrls.push(url);
        });
      }
    }

    //Get post categories and its' names
    if (this.postData.categories) {
      for (let catIndex in categoriesData) {
        if (this.postData.categories.includes(categoriesData[catIndex].id)) {
          this.categoriesList[categoriesData[catIndex].id] = categoriesData[catIndex];
        }

        if (categoriesData[catIndex].subcategories) {
          for (let subCatIndex in categoriesData[catIndex].subcategories) {
            if (this.postData.categories.includes(categoriesData[catIndex].subcategories[subCatIndex].id)) {
              this.categoriesList[categoriesData[catIndex].subcategories[subCatIndex].id] = categoriesData[catIndex].subcategories[subCatIndex];
            }
          }
        }
      }
    }
  },
};
</script>

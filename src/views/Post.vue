<template>
  <!-- Post -->
  <CreatePost v-if="createPost" :shareId="this.id" :shareUid="this.uid" :shareUsername="this.username" :shareContent="this.content" />
  <div v-if="this.shareId && !this.content">
    <div class="flex flex-col dark:border-gray-800 rounded-lg shadow-inner bg-gray-200 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-40">
      <div class="flex justify-between px-4 py-3">
        <div class="flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
            <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
          </svg>
          <p class="pl-5 text-sm">
            <span class="cursor-pointer hover:underline" @click="this.$router.push('/user/' + this.username + '/posts')">@{{ this.username }}</span> udostępnił post
          </p>
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
      <Post v-if="sharedPost.length != 0" :isShareView="false" :id="sharedPost.id" :uid="sharedPost.uid" :name="sharedPost.name" :surname="sharedPost.surname" :username="sharedPost.username" :profileImageUrl="sharedPost.profileImage" :content="sharedPost.content" :shareId="sharedPost.shareId" :files="sharedPost.files" :date_created="sharedPost.createdTimestamp" :views="sharedPost.views" :com_count="sharedPost.comments_count" />
    </div>
  </div>
  <div v-else :class="{ 'cursor-pointer': this.isShareView }" @click="navToPost()" class="post flex-grow" style="max-width: 650px">
    <!-- Header -->
    <div class="post__header">
      <div @click="showProfile()" class="mr-10 w-auto min-w-0 max-w-full flex cursor-pointer overflow-hidden" :class="{ 'hover:underline': !this.isShareView }">
        <img ref="profileImg" class="post__header__user-info__profile-picture rounded-full" alt="photo" />
        <div class="overflow-hidden">
          <p class="post__header__user-info__user-name">{{ name }} {{ surname }}</p>
          <p class="post__header__user-info__user-id">@{{ username }}</p>
        </div>
      </div>
      <div class="dropdown dropdown-end" v-if="!this.isShareView">
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
      <div @click="this.$router.push('/post/' + this.id)" class="post__content cursor-pointer select-ghost">
        <p class="">{{ content }}</p>
      </div>
      <div v-if="imagesUrls.length != 0" class="flex flex-shrink-0 overflow-x-auto custom-scrollbar rounded-lg mb-4">
        <img class="w-full" v-for="url in imagesUrls" :key="url" :src="url" alt="img" />
      </div>
    </div>

    <!-- End Content -->
    <Post v-if="sharedPost.length != 0" :isShareView="true" :id="sharedPost.id" :uid="sharedPost.uid" :name="sharedPost.name" :surname="sharedPost.surname" :username="sharedPost.username" :profileImageUrl="sharedPost.profileImage" :content="sharedPost.content" :shareId="sharedPost.shareId" :files="sharedPost.files" :date_created="sharedPost.createdTimestamp" :views="sharedPost.views" :com_count="sharedPost.comments_count" />
    <!-- Info -->
    <div class="h-auto w-full flex mt-4" :class="[isShareView ? 'justify-end' : 'justify-between']">
      <!--Categories list-->
      <div v-if="!this.isShareView" class="pt-1 pr-3 pl-2 pb-1 flex-shrink text-sm whitespace-nowrap cursor-pointer flex gap-1 items-center text-gray-500 dark:text-gray-400 bg-slate-200 bg-opacity-60 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 hover:dark:bg-opacity-50 rounded-lg transition" @click="toggleShowCategories">
        <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-45': showCategories}" class="stroke-current w-5 h-5 transition duration-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12l3 3l3 -3l-3 -3z" />
          <path d="M15 12l3 3l3 -3l-3 -3z" />
          <path d="M9 6l3 3l3 -3l-3 -3z" />
          <path d="M9 18l3 3l3 -3l-3 -3z" />
        </svg>
        <p>Kategorie</p>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': showCategories}" class="stroke-current w-4 h-4 transition duration-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg> -->
      </div>
      <p class="self-center text-gray-400 text-sm flex-shrink truncate justify-center" >{{ localDate }}</p>
    </div>
    <div v-if="showCategories" class="flex flex-wrap gap-2 mt-4">
      <div v-for="cat in categoriesList" :key="cat.id" :class="cat.background" class="px-4 py-2 rounded-2xl">
        <p class="text-xs text-white whitespace-nowrap">{{ cat.name }}</p>
      </div>
    </div>
    <!-- End Info -->
    <!--Actions-->
    <div v-if="!this.isShareView" class="post__actions">
      <div class="post__actions__action">
        <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" />
          <path d="M15 19l2 2l4 -4" />
        </svg>
        <p class="post__actions__action__text">{{ views }}</p>
      </div>
      <div
        @click="
          showComments = !showComments;
          clickComments(showComments);
        "
        class="post__actions__action"
      >
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
    <!--Comments-->
    <div v-if="showComments" class="flex flex-col my-3">
      <div class="flex gap-3 h-9 items-center">
        <img src="/img/avatar.png" class="w-8 h-8" alt="avatar" />
        <input type="text" v-model="comment" placeholder="Twój komentarz..." class="input input-ghost border border-gray-500 h-9 flex-grow" />
        <button @click="sendComment()" class="">Wyślij</button>
      </div>
      <div class="flex flex-col gap-2 mt-5">
        <div class="flex flex-col bg-gray-200 bg-opacity-60 dark:bg-gray-800 px-5 pt-3 pb-4 rounded-lg" v-for="com in comments" :key="com.id">
          <div class="flex justify-between items-center">
            <div @click="navigateToProfile(com.username)" class="flex cursor-pointer hover:underline gap-1 h-7 items-center">
              <img class="h-5 w-5" src="/img/avatar.png" alt="avatar" />
              <p class="text-sm">@{{ com.username }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
              <circle cx="12" cy="5" r="1" />
            </svg>
          </div>

          <p class="my-1">{{ com.content }}</p>
          <div class="flex justify-between mt-1">
            <p class="text-xs">{{ com.createdTimestamp }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End comments -->
  </div>
  <!-- End Post -->
</template>
<script>
import CreatePost from "../views/CreatePost.vue";
import Post from "../views/Post.vue";
import { ref } from "vue";
import { ref as storageRef, getStorage, getDownloadURL, getBlob, deleteObject } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, serverTimestamp, query, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { deleteDoc, getDocs, orderBy, Timestamp } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import categoriesData from "../data/categories";
export default {
  components: {
    CreatePost,
    Post,
  },
  props: ["id", "uid", "name", "surname", "username", "profileImageUrl", "content", "shareId", "files", "date_created", "views", "com_count", "isShareView", "categories"],
  data() {
    return {
      showCategories: false,
      showComments: false,
      localDate: "",
      imagesUrls: [],
      comment: "",
      comments: [],
      createPost: false,
      sharedPost: [],
      categoriesList: {},
    };
  },
  methods: {
    showProfile() {
      if (!this.isShareView) {
        this.$router.push("/user/" + this.username + "/posts");
      }
    },
    toggleShowCategories() {
      this.showCategories = !this.showCategories;
    },
    async sendComment() {
      if (this.comment != "") {
        const db = getFirestore();
        console.log(this.id);
        const colRef = collection(db, "posts", this.id, "comments");
        await addDoc(colRef, {
          content: this.comment,
          username: this.$store.getters.getUsername,
          uid: this.$store.getters.getUid,
          createdTimestamp: serverTimestamp(),
        }).then((snapshot) => {
          console.log("snapshot", snapshot);
          this.comment = "";
          console.log("comment sent");
        });
      }
    },
    async clickComments(show) {
      if (show) {
        const db = getFirestore();
        const colRef = collection(db, "posts", this.id, "comments");
        const q = query(colRef, orderBy("createdTimestamp", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let singleDoc = doc.data();
          singleDoc.id = doc.id;
          singleDoc.createdTimestamp = singleDoc.createdTimestamp.toDate().toLocaleString();
          this.comments.push(singleDoc);
        });
      } else {
        this.comments = [];
      }
    },
    navigateToProfile(username) {
      this.$router.push("/user/" + username + "/posts");
    },
    shareClick() {
      this.createPost = true;
    },
    async deletePost() {
      const user = getAuth().currentUser;
      if (user.uid == this.uid) {
        const storage = getStorage();
        for (var i = 0; i < this.files.length; i++) {
          const fileRef = storageRef(storage, user.uid + "/" + this.files[i]);
          await deleteObject(fileRef)
            .then(() => {
              console.log("Photo: " + this.files[i] + " removed successfully");
            })
            .catch((error) => {
              console.log("Error removing photo: " + this.files[i] + ": ", error);
            });
        }

        const db = getFirestore();
        await deleteDoc(doc(db, "posts", this.id)).then(() => {
          alert("Usunięto post. Odśwież stronę aby zobaczyć zmiany");
        });
      } else {
        alert("To nie jest Twój post, więc nie możesz go usunąć :)");
      }
    },
    navToPost() {
      if (this.isShareView) {
        this.$router.push("/post/" + this.id);
      }
    },
  },
  async mounted() {
    const date = this.date_created.toDate();
    this.localDate = date.toLocaleString();
    const storage = getStorage();
    const img = this.$refs.profileImg;
    if (this.profileImageUrl) {
      getDownloadURL(storageRef(storage, this.profileImageUrl))
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

    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        getDownloadURL(storageRef(storage, this.uid + "/" + this.files[i])).then((url) => {
          this.imagesUrls.push(url);
        });
      }
    }

    if (this.shareId) {
      const db = getFirestore();
      const docRef = doc(db, "posts", this.shareId);
      await getDoc(docRef).then((doc) => {
        let docData = doc.data();
        docData.id = doc.id;
        this.sharedPost = docData;
      });
    }

    if (this.categories) {
      for (let catIndex in categoriesData) {
        if (this.categories.includes(categoriesData[catIndex].id)) {
          this.categoriesList[categoriesData[catIndex].id] = categoriesData[catIndex];
        }

        if (categoriesData[catIndex].subcategories) {
          for (let subCatIndex in categoriesData[catIndex].subcategories) {
            if (this.categories.includes(categoriesData[catIndex].subcategories[subCatIndex].id)) {
              this.categoriesList[categoriesData[catIndex].subcategories[subCatIndex].id] = categoriesData[catIndex].subcategories[subCatIndex];
            }
          }
        }
      }

      console.log("categoriesList: ", this.categoriesList);
    }
  },
};
</script>

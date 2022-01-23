<template>
  <!-- Post -->
  <CreatePost v-if="createPost" :shareId="postData.id" :shareUid="postData.uid" :shareUsername="postData.username" :shareContent="postData.content" />
  <div class="post flex-grow" style="max-width: 650px">
    <!-- Header -->
    <div class="post__header">
      <div @click="showProfile()" class="mr-5 w-auto min-w-0 max-w-full flex cursor-pointer hover:underline overflow-hidden">
        <img ref="profileImg" class="post__header__user-info__profile-picture rounded-full" alt="photo" />
        <div class="overflow-hidden">
          <p class="post__header__user-info__user-name">{{ postData.name }} {{ postData.surname }}</p>
          <p class="post__header__user-info__user-id">@{{ postData.username }}</p>
        </div>
      </div>
      <div class="flex gap-4 flex-shrink-0 items-center">
        <img class="w-12 rounded-md bg-slate-200 dark:bg-slate-800 p-2" :src="'/img/f' + averageRatingInt + '.svg'" alt="rating" />
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
    <div class="post__actions gap-1">
      <div class="post__actions__action" :class="[selectedRating > 0 ? 'border border-blue-700 ' : '']">
        <div ref="rateButton" @mouseover="reactMouseOver()" @mouseleave="reactMouseLeave()" class="rateButton w-full h-full" :class="[showReactions ? 'dropdown dropdown-open dropdown-top' : '']">
          <div @click="mainReactClick()" tabindex="0" class="flex w-full h-full gap-2">
            <div class="flex justify-center items-center gap-2 w-full">
              <img v-if="selectedRating > 0" class="h-4 w-4" :src="'/img/' + selectedRating + '.svg'" :alt="selectedRating" />
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="stroke-current h-5 w-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <p class="text-sm hidden sm:inline-block">
                <span v-if="selectedRating > 0" class="">Zareagowano</span>
                <span v-else class="">Zareaguj</span>
                <!-- <span class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:bg-opacity-50 rounded-lg">+5</span> -->
              </p>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content" :class="[showReactions ? 'dropdown-content block' : 'hidden']">
            <div class="w-64 flex gap-1 flex-grow rounded-lg bg-gray-100 dark:bg-gray-800 mb-2 border dark:border-gray-700 shadow-lg">
              <div @click="reactClick(1)" class="flex flex-col flex-shrink-0 gap-1 items-center hover:bg-gray-200 hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 1 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/1.svg" alt="0" />
                <!-- <p class="text-xs">+1</p> -->
              </div>
              <div @click="reactClick(2)" class="flex flex-col flex-shrink-0 gap-1 items-center hover:bg-gray-200 hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 2 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/2.svg" alt="0" />
                <!-- <p class="text-xs">+2</p> -->
              </div>
              <div @click="reactClick(3)" class="flex flex-col flex-shrink-0 gap-1 items-center hover:bg-gray-200 hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 3 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/3.svg" alt="0" />
                <!-- <p class="text-xs">+3</p> -->
              </div>
              <div @click="reactClick(4)" class="flex flex-col flex-shrink-0 gap-1 items-center hover:bg-gray-200 hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 4 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/4.svg" alt="0" />
                <!-- <p class="text-xs">+4</p> -->
              </div>
              <div @click="reactClick(5)" class="flex flex-col flex-shrink-0 gap-1 items-center hover:bg-gray-200 hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 5 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/5.svg" alt="4" />
                <!-- <p class="text-xs">+5</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div @click="toggleComments()" class="post__actions__action">
        <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="14" y2="13" />
        </svg>
        <p class="post__actions__action__text hidden sm:block">
          Komentarze
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
import { getFirestore, doc, deleteDoc, runTransaction, onSnapshot, updateDoc, increment, deleteField } from "firebase/firestore";
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
      showReactions: false,
      showReactionsTimeout: null,
      selectedRating: 0,
      averageRatingInt: 0,
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
    setSelectedRating(value) {
      this.selectedRating = value;
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
    reactMouseOver() {
      if (!this.showReactions && this.showReactionsTimeout == null) {
        this.showReactionsTimeout = setTimeout(() => {
          this.showReactions = true;
        }, 500);
      }
    },
    reactMouseLeave() {
      clearTimeout(this.showReactionsTimeout);
      this.showReactionsTimeout = null;
      this.showReactions = false;
    },
    async mainReactClick() {
      clearTimeout(this.showReactionsTimeout);
      this.showReactions = false;
      const db = getFirestore();
      const postRef = doc(db, "posts", this.postData.id);
      const userPostsRatedRef = doc(db, "users", getAuth().currentUser.uid, "details", "posts");
      const ratedPostFieldName = "rated." + this.postData.id;
      let postsRated = this.copyObject(this.$store.getters.getPostsRated);

      // if user already gave rating we removing rating
      if (Object.keys(postsRated).includes(this.postData.id)) {
        try {
          await runTransaction(getFirestore(), async (transaction) => {
            //removing info about rating from user's history of rated posts
            transaction.update(userPostsRatedRef, {
              [ratedPostFieldName]: deleteField(),
            });
            // decrement rating which user previously gave
            transaction.update(postRef, {
              ["ratings." + postsRated[this.postData.id]]: increment(-1),
              ["ratings.count"]: increment(-1),
            });
          });

          // removing info about rating from internal list of rated posts
          delete postsRated[this.postData.id];
          // update internal list of rated posts
          this.$store.commit("setPostsRated", postsRated);
          this.setSelectedRating(0);
        } catch (e) {
          console.log(e);
        }
        // else if user didn't give rating we are giving it
      } else {
        try {
          this.setSelectedRating(5);
          await runTransaction(getFirestore(), async (transaction) => {
            // updating users' history of rated posts
            transaction.update(userPostsRatedRef, {
              [ratedPostFieldName]: 5,
            });
            //updating rating for post: increment '5' rate and counter
            transaction.update(postRef, {
              "ratings.5": increment(1),
              ["ratings.count"]: increment(1),
            });
          });

          // adding info about rating to internal list of rated posts
          postsRated[this.postData.id] = 5;
          // update internal list of rated posts
          this.$store.commit("setPostsRated", postsRated);
        } catch (e) {
          this.setSelectedRating(0);
          console.log(e);
        }
      }
    },
    async reactClick(value) {
      const db = getFirestore();
      const postRef = doc(db, "posts", this.postData.id);
      const userPostsRatedRef = doc(db, "users", getAuth().currentUser.uid, "details", "posts");
      const ratedPostFieldName = "rated." + this.postData.id;
      let postsRated = this.copyObject(this.$store.getters.getPostsRated);

      // if user already gave rating
      if (Object.keys(postsRated).includes(this.postData.id)) {
        // if user clicked the same rate, we remove rating
        if (postsRated[this.postData.id] == value) {
          try {
            await runTransaction(getFirestore(), async (transaction) => {
              //removing info about rating from user's history of rated posts
              transaction.update(userPostsRatedRef, {
                [ratedPostFieldName]: deleteField(),
              });
              // decrement rating which user previously gave
              transaction.update(postRef, {
                ["ratings." + postsRated[this.postData.id]]: increment(-1),
                ["ratings.count"]: increment(-1),
              });
            });

            // removing info about rating from internal list of rated posts
            delete postsRated[this.postData.id];
            // update internal list of rated posts
            this.$store.commit("setPostsRated", postsRated);

            this.selectedRating = 0;
          } catch (e) {
            console.log(e);
          }
        }
        // if user clicked another rate, we have to remove old rating and save new rating
        else {
          try {
            await runTransaction(getFirestore(), async (transaction) => {
              // updating users' history of rated posts
              transaction.update(userPostsRatedRef, {
                [ratedPostFieldName]: value,
              });
              // updating rating for post: decrement old value, increment new value; count field remains the same
              transaction.update(postRef, {
                ["ratings." + postsRated[this.postData.id]]: increment(-1),
                ["ratings." + value]: increment(1),
              });
            });

            // updating info about rating in internal list of rated posts
            postsRated[this.postData.id] = value;
            // update internal list of rated posts
            this.$store.commit("setPostsRated", postsRated);

            this.selectedRating = value;
          } catch (e) {
            console.log(e);
          }
        }
        // else if user didn't give rating
      } else {
        try {
          await runTransaction(getFirestore(), async (transaction) => {
            // updating users' history of rated posts
            transaction.update(userPostsRatedRef, {
              [ratedPostFieldName]: value,
            });

            //updating rating for post: increment specific rate and counter
            transaction.update(postRef, {
              ["ratings." + value]: increment(1),
              ["ratings.count"]: increment(1),
            });
          });

          // updating info about rating in internal list of rated posts
          postsRated[this.postData.id] = value;
          // update internal list of rated posts
          this.$store.commit("setPostsRated", postsRated);

          this.selectedRating = value;
        } catch (e) {
          console.log(e);
        }
      }
      this.showReactions = false;
    },
    copyObject(mainObject) {
      let objectCopy = {};
      let key;
      for (key in mainObject) {
        objectCopy[key] = mainObject[key];
      }
      return objectCopy;
    },
    rateButtonTouchStart() {
      console.log("touch start");
      if (!this.showReactions && this.showReactionsTimeout == null) {
        this.showReactionsTimeout = setTimeout(() => {
          this.showReactions = true;
          this.showReactionsTimeout = null;
        }, 500);
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

    // Check if post is rated by user
    let userRated = this.$store.getters.getPostsRated;
    if (Object.keys(userRated).includes(this.postData.id)) {
      this.selectedRating = userRated[this.postData.id];
    }

    // Get average rating
    let ratings = this.postData.ratings;
    let rate = (1 * ratings[1] + 2 * ratings[2] + 3 * ratings[3] + 4 * ratings[4] + 5 * ratings[5]) / ratings["count"];

    if (rate >= 1.0 && rate <= 1.99) {
      this.averageRatingInt = 1;
    } else if (rate >= 2.0 && rate <= 2.99) {
      this.averageRatingInt = 2;
    } else if (rate >= 3.0 && rate <= 3.99) {
      this.averageRatingInt = 3;
    } else if (rate >= 4.0 && rate <= 4.49) {
      this.averageRatingInt = 4;
    } else if (rate >= 4.5) {
      this.averageRatingInt = 5;
    } else {
      this.averageRatingInt = 1;
    }

    // Set touch event listeners
    const rateBtn = this.$refs.rateButton;
    rateBtn.addEventListener("touchstart", this.rateButtonTouchStart, true);
  },
};
</script>

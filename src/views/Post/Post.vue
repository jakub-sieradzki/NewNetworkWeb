<template>
  <!-- Post -->
  <CreatePost v-if="createPost" :shareId="postData.id" :shareUid="postData.uid" :shareUsername="postData.username" :sharePagename="postData.pagename" :shareContent="postData.content" />
  <div class="post" style="max-width: 600px">
    <!-- Header -->
    <div class="post__header">
      <div @click="showProfile()" class="mr-5 w-auto min-w-0 max-w-full flex cursor-pointer lg:hover:underline overflow-hidden">
        <img ref="profileImg" class="post__header__user-info__profile-picture rounded-full" alt="photo" />
        <div class="overflow-hidden">
          <p class="post__header__user-info__user-name">{{ postData.name }} {{ postData.surname }}</p>
          <p v-if="postSourceType == 'user' || postSourceType == 'group'" class="post__header__user-info__user-id">@{{ postData.username }}</p>
          <p v-else-if="postSourceType == 'page'" class="post__header__user-info__user-id">{{ postData.pagename }}</p>
        </div>
      </div>
      <div class="flex gap-4 flex-shrink-0 items-center">
        <img v-if="averageRatingInt != 0" class="w-12 rounded-md bg-slate-200 dark:bg-slate-800 p-2" :src="'/img/f' + averageRatingInt + '.svg'" alt="rating" />
        <div class="dropdown dropdown-end">
          <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="post__header__actions-button" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
          </svg>
          <ul class="dropdownStyle w-52 !mt-5" tabindex="0">
            <li v-if="!selfPost && (groupsAdministered.includes(postData.gid) || groupsModerated.includes(postData.gid))" @click="blockUserFromGroup" class="dropdownItemStyle flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
              <p class="pl-3">Usuń i zablokuj uż.</p>
            </li>
            <li @click="deletePostClick()" class="dropdownItemStyle flex items-center" v-if="this.selfPost || this.pagesAdministered.includes(this.postData.pid) || this.pagesModerated.includes(this.postData.pid) || this.groupsAdministered.includes(this.postData.gid) || this.groupsModerated.includes(this.postData.gid)">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
              <p class="pl-3">Usuń post</p>
            </li>
            <li @click="this.$router.push('/post/' + postData.id)" class="dropdownItemStyle flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                <line x1="10" y1="14" x2="20" y2="4" />
                <polyline points="15 4 20 4 20 9" />
              </svg>
              <p class="pl-3">Otwórz post</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <!-- Content -->
    <div>
      <div class="post__content select-ghost">
        <p v-html="linkifyPostContent"></p>
      </div>
      <!-- Link preview -->
      <div>

      </div>
      <!-- End link preview -->
      <div v-if="imagesUrls.length != 0" class="flex flex-shrink-0 overflow-x-auto custom-scrollbar rounded-lg mb-4">
        <img class="w-full" v-for="url in imagesUrls" :key="url" :src="url" alt="img" />
      </div>
    </div>
    <!-- End Content -->
    <SharedPost v-if="postData.shareId" :postId="postData.shareId" />
    <!-- Info -->
    <div class="h-auto w-full flex mt-4 justify-between items-center">
      <!--Categories list-->
      <div class="pt-1 pr-3 pl-2 pb-1 flex-shrink text-sm whitespace-nowrap cursor-pointer flex gap-1 items-center text-gray-500 dark:text-gray-400 lg:hover:bg-slate-200 lg:hover:dark:bg-slate-700 lg:hover:dark:bg-opacity-50 rounded-lg transition" @click="toggleShowCategories">
        <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-45': showCategories }" class="stroke-current w-5 h-5 transition duration-300" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12l3 3l3 -3l-3 -3z" />
          <path d="M15 12l3 3l3 -3l-3 -3z" />
          <path d="M9 6l3 3l3 -3l-3 -3z" />
          <path d="M9 18l3 3l3 -3l-3 -3z" />
        </svg>
        <p>Kategorie</p>
      </div>
      <div class="flex text-gray-400 gap-1.5 items-center">
        <svg v-if="postData.visibility == 'public'" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="3.6" y1="9" x2="20.4" y2="9" />
          <line x1="3.6" y1="15" x2="20.4" y2="15" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
        <svg v-else-if="postData.visibility == 'friends'" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="7" cy="5" r="2" />
          <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
          <circle cx="17" cy="5" r="2" />
          <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
        </svg>
        <svg v-else-if="postData.visibility.includes('group')" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current fill-gray-400 w-2 h-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <div :data-tip="postFullDateAdded" class="tooltip">
          <p class="self-center text-sm flex-shrink truncate justify-center">{{ postTimeAdded }}</p>
        </div>
      </div>
    </div>
    <div v-if="showCategories" class="flex flex-wrap gap-2 mt-4">
      <div v-for="cat in categoriesList" :key="cat.id" :class="cat.background" class="px-4 py-2 rounded-2xl">
        <p class="text-xs text-white whitespace-nowrap">{{ cat.name }}</p>
      </div>
    </div>
    <!-- End Info -->
    <!--Actions-->
    <div v-if="!this.postData.gid || groupsJoined.includes(postData.gid)" class="post__actions gap-1">
      <div class="post__actions__action" :class="[selectedRating > 0 ? 'border border-blue-700 ' : '', postData.gid ? '!w-1/2' : '']">
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
              <div @click="reactClick(1)" class="flex flex-col flex-shrink-0 gap-1 items-center lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 1 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/1.svg" alt="0" />
                <!-- <p class="text-xs">+1</p> -->
              </div>
              <div @click="reactClick(2)" class="flex flex-col flex-shrink-0 gap-1 items-center lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 2 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/2.svg" alt="0" />
                <!-- <p class="text-xs">+2</p> -->
              </div>
              <div @click="reactClick(3)" class="flex flex-col flex-shrink-0 gap-1 items-center lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 3 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/3.svg" alt="0" />
                <!-- <p class="text-xs">+3</p> -->
              </div>
              <div @click="reactClick(4)" class="flex flex-col flex-shrink-0 gap-1 items-center lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 4 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/4.svg" alt="0" />
                <!-- <p class="text-xs">+4</p> -->
              </div>
              <div @click="reactClick(5)" class="flex flex-col flex-shrink-0 gap-1 items-center lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700 p-3 rounded-lg transition" :class="[selectedRating == 5 ? ['bg-gray-200 dark:bg-gray-700'] : '']">
                <img class="w-6" src="/img/5.svg" alt="4" />
                <!-- <p class="text-xs">+5</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div @click="toggleComments()" class="post__actions__action" :class="[postData.gid ? '!w-1/2' : '']">
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
      <div v-if="!postData.gid" @click="shareClick" class="post__actions__action">
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
    <PostComments v-if="showComments" :postId="this.postData.id" :gid="this.postData.gid" />
  </div>
  <!-- End Post -->
</template>
<script>
import CreatePost from "./CreatePost.vue";
import Post from "./Post.vue";
import PostComments from "./Comments/PostComments.vue";
import SharedPost from "./Shared/SharedPost.vue";
import PostContent from "./PostContent.vue";

import { getAuth } from "firebase/auth";

import { deletePost, addPostReaction, removePostReaction, updatePostReaction } from "../../database/setData";
import { mapState } from "vuex";

import { getPostFullCategoriesList } from "@/helpers/categories";
import { getPostAverageRating } from "@/helpers/postRating";
import { getPageProfileImageUrl, getPostImagesUrls, getProfileImageUrl } from "@/firebase-storage/getFiles";
import { removePostImages } from "@/firebase-storage/modifyFiles";
import { getLinkifyText } from "@/helpers/textHelpers";

import { DateTime } from "luxon";
import { kickUsersFromGroup } from "@/firebase-functions/functions";

export default {
  components: {
    CreatePost,
    Post,
    SharedPost,
    PostComments,
    PostContent,
  },
  props: ["postData"],
  data() {
    return {
      showCategories: false,
      showComments: false,
      postTimeAdded: "",
      postFullDateAdded: "",
      imagesUrls: [],
      createPost: false,
      categoriesList: {},
      showReactions: false,
      showReactionsTimeout: null,
      selectedRating: 0,
      averageRatingInt: 0,
      linkifyPostContent: "",
      postSourceType: "",
      postSourceId: "",
      selfPost: false,
    };
  },
  computed: {
    ...mapState(["postsRated"]),
    ...mapState("user", {
      currentUserProfileImage: "profileImage",
    }),
    ...mapState("userPagesInfo", {
      pagesAdministered: "administered",
      pagesModerated: "moderated",
    }),
    ...mapState("userGroupsInfo", {
      groupsAdministered: "administered",
      groupsModerated: "moderated",
      groupsJoined: "joined",
    }),
  },
  watch: {
    postsRated(newRated, oldRated) {
      this.updateRating(newRated);
    },
  },
  methods: {
    updateRating(userRated) {
      if (Object.keys(userRated).includes(this.postData.id)) {
        this.selectedRating = userRated[this.postData.id];
      } else {
        this.selectedRating = 0;
      }
    },
    showProfile() {
      if (this.postSourceType == "user") {
        this.$router.push("/user/" + this.postData.username + "/posts");
      } else if (this.postSourceType == "page") {
        this.$router.push("/page/" + this.postData.pagename + "/posts");
      }
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
    async deletePostClick() {
      const user = getAuth().currentUser;
      if (this.postSourceType == "group") {
        if (this.groupsAdministered.includes(this.postData.gid) || this.groupsModerated.includes(this.postData.gid)) {
          await removePostImages(this.postData.gid, this.postData.files);
          let deleted = await deletePost(this.postData.id);
          if (deleted) {
            alert("Usunięto post. Odśwież stronę aby zobaczyć zmiany");
          } else {
            alert("Wystąpił błąd");
          }
        }
      } else if (this.postSourceType == "page") {
        if (this.pagesAdministered.includes(this.postData.pid) || this.pagesModerated.includes(this.postData.pid)) {
          await removePostImages(this.postData.pid, this.postData.files);
          let deleted = await deletePost(this.postData.id);
          if (deleted) {
            alert("Usunięto post. Odśwież stronę aby zobaczyć zmiany");
          } else {
            alert("Wystąpił błąd");
          }
        }
      } else if (user.uid == this.postData.uid) {
        await removePostImages(user.uid, this.postData.files);
        let deleted = await deletePost(this.postData.id);
        if (deleted) {
          alert("Usunięto post. Odśwież stronę aby zobaczyć zmiany");
        } else {
          alert("Wystąpił błąd");
        }
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
      let postsRated = this.copyObject(this.$store.getters.getPostsRated);

      if (Object.keys(postsRated).includes(this.postData.id)) {
        // if user already gave rating we removing rating
        await removePostReaction(getAuth().currentUser.uid, this.postData.id, postsRated[this.postData.id]);
      } else {
        // else if user didn't give rating we are giving it
        await addPostReaction(getAuth().currentUser.uid, this.postData.id, 5);
      }
    },
    async reactClick(value) {
      let postsRated = this.copyObject(this.$store.getters.getPostsRated);

      if (Object.keys(postsRated).includes(this.postData.id)) {
        // if user already gave rating
        if (postsRated[this.postData.id] == value) {
          // if user clicked the same rate, we remove rating
          await removePostReaction(getAuth().currentUser.uid, this.postData.id, postsRated[this.postData.id]);
        } else {
          // if user clicked another rate, we have to remove old rating and save new rating
          await updatePostReaction(getAuth().currentUser.uid, this.postData.id, value, postsRated[this.postData.id]);
        }
      } else {
        // else if user didn't give rating
        await addPostReaction(getAuth().currentUser.uid, this.postData.id, value);
      }
      this.showReactions = false;
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
    navToHashtag() {
      console.log("Test");
    },
    copyObject(mainObject) {
      let objectCopy = {};
      let key;
      for (key in mainObject) {
        objectCopy[key] = mainObject[key];
      }
      return objectCopy;
    },
    async blockUserFromGroup() {
      await kickUsersFromGroup(this.postData.gid, [this.postData.uid]);
      await this.deletePostClick();
      alert("Pomyślnie usunięto post i zbanowano użytkownika");
    },
  },
  async mounted() {
    if (this.postData.gid) {
      this.postSourceType = "group";
    } else if (this.postData.uid) {
      this.postSourceType = "user";
      this.postSourceId = this.postData.uid;
    } else if (this.postData.pid) {
      this.postSourceType = "page";
      this.postSourceId = this.postData.pid;
    }

    if (getAuth().currentUser.uid == this.postData.uid) {
      this.selfPost = true;
    }

    // Convert date
    const date = this.postData.createdTimestamp.toDate();
    this.postFullDateAdded = date.toLocaleString();
    this.postTimeAdded = DateTime.fromJSDate(date).toRelative();

    // Get profile image
    const img = this.$refs.profileImg;

    if (this.postData.uid == getAuth().currentUser.uid) {
      img.setAttribute("src", this.currentUserProfileImage);
    } else {
      let url = null;
      if (this.postSourceType == "page") {
        url = await getProfileImageUrl(this.postData.pid);
      } else {
        url = await getProfileImageUrl(this.postData.uid);
      }
      if (url != null) {
        img.setAttribute("src", url);
      } else {
        img.setAttribute("src", "/img/avatar.png");
      }
    }

    //get linkify post content
    this.linkifyPostContent = getLinkifyText(this.postData.content);

    

    // Get post images
    if (this.postData.files) {
      if (this.postSourceType == "user") {
        this.imagesUrls = await getPostImagesUrls(this.postData.uid, this.postData.files);
      } else if (this.postSourceType == "page") {
        this.imagesUrls = await getPostImagesUrls(this.postData.pid, this.postData.files);
      } else if (this.postSourceType == "group") {
        this.imagesUrls = await getPostImagesUrls(this.postData.gid, this.postData.files);
      }
    }
    // set post rating
    this.updateRating(this.postsRated);

    //get categories
    this.categoriesList = getPostFullCategoriesList(this.postData.categories);

    // Get average rating
    this.averageRatingInt = getPostAverageRating(this.postData.ratings);

    // Set touch event listeners
    const rateBtn = this.$refs.rateButton;
    rateBtn.addEventListener("touchstart", this.rateButtonTouchStart, true);
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col border dark:border-gray-700 px-5 pt-3 pb-2 rounded-lg">
      <div class="flex justify-between items-center">
        <div @click="this.$router.push('/user/' + com.username + '/posts')" class="flex cursor-pointer hover:underline gap-2 h-7 items-center">
          <img ref="profileImage" class="h-5 w-5 rounded-full" src="/img/avatar.png" alt="avatar" />
          <p class="text-sm">@{{ com.username }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="12" cy="5" r="1" />
        </svg>
      </div>
      <p class="my-2" v-html="content"></p>
      <div class="flex justify-between items-center mt-1 gap-3" :class="{ 'mb-4': showRespondField }">
        <div class="flex gap-4 items-center">
          <div class="flex items-center gap-3 border dark:border-gray-800 rounded-full p-1 px-3">
              <svg @click="changeRating(1)" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-6 h-6 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer" :class="{ 'text-green-500': selectedRating == 1 }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="11" x2="12" y2="5" />
                <line x1="6" y1="11" x2="12" y2="5" />
              </svg>
              <p class="text-sm font-semibold" :class="{ 'text-green-500': selectedRating == 1, 'text-red-500': selectedRating == -1 }">{{ com.ratings.sum }}</p>
              <svg @click="changeRating(-1)" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-6 h-6 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer" :class="{ 'text-red-500': selectedRating == -1 }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="13" x2="12" y2="19" />
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg>
          </div>
          <p @click="toggleRespondField" class="text-xs hover:underline cursor-pointer">Odpowiedz</p>
        </div>
        <div :data-tip="commentFullDate" class="tooltip">
          <p class="text-xs">{{ commentTime }}</p>
        </div>
      </div>
      <SendComment v-if="showRespondField" :postId="postId" :commentId="originalComId" :usernameToRespond="com.username" />
    </div>
    <div v-if="showMoreCommentsOption" class="flex justify-end flex-grow-0 mt-1" :class="{ 'mb-2': showMoreCommentsBoolean }">
      <div @click="showMoreComments" class="flex gap-1 justify-end items-center px-2 py-1 cursor-pointer">
        <p v-if="showMoreCommentsBoolean" class="text-xs">Ukryj odpowiedzi</p>
        <p v-else class="text-xs">Pokaż odpowiedzi</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-3 h-3 transition duration-300" :class="{ 'rotate-180': showMoreCommentsBoolean }" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
    <div class="flex flex-col gap-2 ml-10 lg:ml-14 mb-5" v-if="showMoreCommentsBoolean">
      <Comment v-for="subcom in subcomments" :key="subcom.id" :postId="postId" :com="subcom" :originalComId="originalComId" />
    </div>
  </div>
</template>
<script>
import SendComment from "./SendComment.vue";
import Comment from "./Comment.vue";
import { getSubcomments, checkIfAnySubcomments } from "@/database/getData";
import { getAuth } from "@firebase/auth";
import { mapState } from "vuex";
import { getProfileImageUrl } from "@/firebase-storage/getFiles";
import { getLinkifyText } from "@/helpers/textHelpers";
import { DateTime } from "luxon";
import { addCommentReaction, removeCommentReaction, updateCommentReaction } from "@/database/setData";
export default {
  props: ["postId", "com", "originalComId"],
  components: {
    SendComment,
    Comment,
  },
  data() {
    return {
      showRespondField: false,
      showMoreCommentsOption: false,
      showMoreCommentsBoolean: false,
      subcomments: [],
      commentTime: "",
      commentFullDate: "",
      content: "",
      selectedRating: 0,
    };
  },
  computed: {
    ...mapState("user", {
      currentUserProfileImage: "profileImage",
    }),
    ...mapState(["commentsRated"]),
  },
  watch: {
    commentsRated(newValue, oldValue) {
      console.log("updated rating");
      this.updateRated();
    },
  },
  methods: {
    toggleRespondField() {
      this.showRespondField = !this.showRespondField;
    },
    async showMoreComments() {
      if (!this.showMoreCommentsBoolean) {
        this.subcomments = await getSubcomments(this.postId, this.originalComId);
        this.showMoreCommentsBoolean = true;
      } else {
        this.subcomments = [];
        this.showMoreCommentsBoolean = false;
      }
    },
    async changeRating(value) {
      if (this.selectedRating == value) {
        let result = await removeCommentReaction(getAuth().currentUser.uid, this.postId, this.originalComId, this.com.id, value);
        if (result) {
          this.com.ratings.sum = this.com.ratings.sum - value;
        }
      } else if (this.selectedRating == 0) {
        let result = await addCommentReaction(getAuth().currentUser.uid, this.postId, this.originalComId, this.com.id, value);
        if (result) {
          this.com.ratings.sum = this.com.ratings.sum + value;
        }
      } else if (this.selectedRating == -value) {
        let result = await updateCommentReaction(getAuth().currentUser.uid, this.postId, this.originalComId, this.com.id, value);
        if (result) {
          this.com.ratings.sum = this.com.ratings.sum + value * 2;
        }
      }
    },
    updateRated() {
      if (this.com.id == this.originalComId) {
        const fieldName = this.postId + "-" + this.com.id;
        if (Object.keys(this.commentsRated).includes(fieldName)) {
          this.selectedRating = this.commentsRated[fieldName];
        } else {
          this.selectedRating = 0;
        }
      } else {
        const fieldName = this.postId + "-" + this.originalComId + "-" + this.com.id;
        if (Object.keys(this.commentsRated).includes(fieldName)) {
          this.selectedRating = this.commentsRated[fieldName];
        } else {
          this.selectedRating = 0;
        }
      }
    },
  },
  async mounted() {
    this.content = getLinkifyText(this.com.content);
    this.updateRated();
    // Convert time
    const date = this.com.createdTimestamp.toDate();
    this.commentFullDate = date.toLocaleString();
    this.commentTime = DateTime.fromJSDate(date).toRelative();

    if (this.com.id == this.originalComId) {
      this.showMoreCommentsOption = await checkIfAnySubcomments(this.postId, this.com.id);
    }

    const img = this.$refs.profileImage;
    if (this.com.uid == getAuth().currentUser.uid) {
      img.setAttribute("src", this.currentUserProfileImage);
    } else {
      let url = await getProfileImageUrl(this.com.uid);
      if (url != null) {
        img.setAttribute("src", url);
      } else {
        img.setAttribute("src", "/img/avatar.png");
      }
    }
  },
};
</script>

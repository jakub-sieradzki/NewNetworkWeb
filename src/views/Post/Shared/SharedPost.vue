<template>
  <div class="post max-w-7xl cursor-pointer" @click="this.$router.push('/post/' + this.postId)">
    <!-- Header -->
    <div class="post__header">
      <div class="mr-10 w-auto min-w-0 max-w-full flex overflow-hidden">
        <img ref="profileImg" class="post__header__user-info__profile-picture rounded-full" alt="photo" />
        <div class="overflow-hidden">
          <p class="post__header__user-info__user-name">{{ post.name }} {{ post.surname }}</p>
          <p class="post__header__user-info__user-id">@{{ post.username }}</p>
        </div>
      </div>
    </div>
    <!-- End header -->
    <!-- Content -->
    <div>
      <div class="post__content">
        <p>{{ post.content }}</p>
      </div>
      <div v-if="imagesUrls.length != 0" class="flex flex-shrink-0 overflow-x-auto custom-scrollbar rounded-lg mb-4">
        <img class="w-full" v-for="url in imagesUrls" :key="url" :src="url" alt="img" />
      </div>
    </div>
    <!-- End content -->
    <!-- Info -->
    <div class="h-auto w-full flex mt-4 justify-end">
      <p class="self-center text-gray-400 text-sm flex-shrink truncate justify-center">{{ localDate }}</p>
    </div>
    <!-- End info -->
  </div>
</template>
<script>
import { getPost } from "@/database/getData";
import { getPostImagesUrls, getProfileImageUrl } from "@/firebase-storage/getFiles";
import { getAuth } from '@firebase/auth';
import { mapState } from 'vuex';
import { DateTime } from 'luxon';
export default {
  props: ["postId"],
  data() {
    return {
      post: {},
      imagesUrls: [],
      localDate: "",
    };
  },
  computed: {
    ...mapState("user", {
      currentUserProfileImage: "profileImage",
    }),
  },
  async mounted() {
    //Get post data
    this.post = await getPost(this.postId);

    // Get time
    this.localDate = DateTime.fromJSDate(this.post.createdTimestamp.toDate()).toRelative();

    //Get profile image
    const img = this.$refs.profileImg;
    if (this.post.uid == getAuth().currentUser.uid) {
      img.setAttribute("src", this.currentUserProfileImage);
    } else {
      let url = await getProfileImageUrl(this.post.uid);
      if (url != null) {
        img.setAttribute("src", url);
      } else {
        img.setAttribute("src", "/img/avatar.png");
      }
    }

    //Get post images
    if (this.post.files) {
      this.imagesUrls = await getPostImagesUrls(this.post.uid, this.post.files);
    }
  },
};
</script>

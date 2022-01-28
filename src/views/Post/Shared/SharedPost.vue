<template>
  <div class="post max-w-7xl cursor-pointer" @click="this.$router.push('/post/' + this.postId)">
    <!-- Header -->
    <div class="post__header">
      <div @click="showProfile()" class="mr-10 w-auto min-w-0 max-w-full flex overflow-hidden">
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
import { ref as storageRef, getStorage, getDownloadURL } from "firebase/storage";
import { getPost } from "../../../database/getData";
export default {
  props: ["postId"],
  data() {
    return {
      post: {},
      imagesUrls: [],
      localDate: "",
    };
  },
  async mounted() {
    const storage = getStorage();

    //Get post data
    this.post = await getPost(this.postId);

    const date = this.post.createdTimestamp.toDate();
    this.localDate = date.toLocaleString();

    //Get profile image
    const img = this.$refs.profileImg;
    if (this.post.profileImage) {
      getDownloadURL(storageRef(storage, this.post.profileImage))
        .then((url) => {
          img.setAttribute("src", url);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      img.setAttribute("src", "/img/avatar.png");
    }

    //Get post images
    if (this.post.files) {
      for (let i = 0; i < this.post.files.length; i++) {
        getDownloadURL(storageRef(storage, this.post.uid + "/" + this.post.files[i])).then((url) => {
          this.imagesUrls.push(url);
        });
      }
    }
  },
};
</script>

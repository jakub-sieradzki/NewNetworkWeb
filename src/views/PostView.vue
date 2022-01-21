<template>
  <div class="h-full w-full flex items-start justify-center pt-5 pb-14 px-2 xl:pr-48 overflow-y-auto custom-scrollbar" v-if="post.length != 0">
    <Post :isShareView="false" :id="post.id" :uid="post.uid" :name="post.name" :surname="post.surname" :username="post.username" :profileImageUrl="post.profileImage" :content="post.content" :shareId="post.shareId" :files="post.files" :date_created="post.createdTimestamp" :views="post.views" :com_count="post.comments_count" :categories="post.categories" />
  </div>
</template>
<script>
import { getFirestore, collection, setDoc, getDoc, doc, getDocs, updateDoc, addDoc, document, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import Post from "../views/Post.vue";
export default {
  components: { Post },
  data() {
    return {
      post: [],
    };
  },
  async mounted() {
    const db = getFirestore();
    console.log("postID: ", this.$route.params.postId);
    const docRef = doc(db, "posts", this.$route.params.postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let docData = docSnap.data();
      docData.id = docSnap.id;
      this.post = docData;
      console.log("Post array content: ", this.post);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>

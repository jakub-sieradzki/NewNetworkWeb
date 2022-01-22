<template>
  <div class="h-full w-full flex items-start justify-center pt-5 pb-14 px-2 xl:pr-48 overflow-y-auto custom-scrollbar" v-if="post.length != 0">
    <Post :postData="post" />
  </div>
</template>
<script>
import { getFirestore, collection, setDoc, getDoc, doc, getDocs, updateDoc, addDoc, document, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
import Post from "./Post.vue";
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
      let docData = docSnap.data();
      docData.id = docSnap.id;
      this.post = docData;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
};
</script>

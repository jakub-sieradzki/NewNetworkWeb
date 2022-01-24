<template>
  <!--Comments-->
  <div class="flex flex-col mt-5 mb-3">
    <SendComment :postId="postId" :commentId="null"/>
    <div class="flex flex-col gap-2 mt-6">
      <Comment v-for="com in comments" :key="com.id" :com="com" :postId="postId" :originalComId="com.id"/>
    </div>
  </div>
  <!-- End comments -->
</template>
<script>
import { getFirestore, collection, getDocs, query, orderBy} from "firebase/firestore";
import SendComment from "./SendComment.vue";
import Comment from "./Comment.vue";
export default {
  props: ["postId"],
  components: {
    SendComment,
    Comment
  },
  data() {
    return {
      comments: [],
    };
  },
  methods: {

  },
  async mounted() {
    const db = getFirestore();
    const colRef = collection(db, "posts", this.postId, "comments");
    const q = query(colRef, orderBy("createdTimestamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let singleDoc = doc.data();
      singleDoc.id = doc.id;
      singleDoc.createdTimestamp = singleDoc.createdTimestamp.toDate().toLocaleString();
      this.comments.push(singleDoc);
    });
  },
};
</script>

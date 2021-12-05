<template>
    <div v-if="postsLoaded" class="m-auto" style="">
        <div v-for="post in posts" :key="post.id">
            <Post :name="post.name" :surname="post.surname" :username="post.username" :profileImageUrl="post.profileImage" :content="post.content" :date_created="post.createdTimestamp" :views="post.views" :com_count="post.comments_count" />
        </div>

    </div>
</template>
<script>
import { getFirestore, collection, setDoc, doc, getDocs, addDoc, document, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { computed, ref } from 'vue';
import Post from '../Post.vue';

export default {
    components: { Post },
    setup() {
        let postsLoaded = ref(false);
        let posts = ref([]);
        const db = getFirestore();
        const q = query(collection(db, "posts"), where("uid", "==", getAuth().currentUser.uid));
        getDocs(q)
            .then((docs) => {

                docs.forEach(doc => {
                    posts.value.push(doc.data());
                })
                postsLoaded.value = true;
            });
        

        return { posts, postsLoaded }
    },
    mounted() {

    }
}
</script>

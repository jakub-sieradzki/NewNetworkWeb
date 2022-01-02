<template>
    <div v-if="postsLoaded" class="m-auto" style="">
        <div v-for="post in posts" :key="post.id">
            <Post :name="post.name" :surname="post.surname" :username="post.username" :profileImageUrl="post.profileImage" :content="post.content" :date_created="post.createdTimestamp" :views="post.views" :com_count="post.comments_count" />
        </div>

    </div>
</template>
<script>
import { getFirestore, collection, setDoc, doc, getDocs, addDoc, document, query, where, orderBy } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { computed, ref } from 'vue';
import Post from '../Post.vue';

export default {
    components: { Post },
    data() {
        return {
            postsLoaded: false,
            posts: []
        }
    },
    beforeRouteEnter(to, from, next) {
        const db = getFirestore();
        console.log(to.params.username);
        const q = query(collection(db, "posts"), where("username", "==", to.params.username, orderBy("createdTimestamp", "desc")));
        getDocs(q)
            .then((docs) => {
                let docsPosts = [];
                docs.forEach(doc => {
                    docsPosts.push(doc.data());
                })

                next(vm => {
                    vm.posts = docsPosts;
                    vm.postsLoaded = true;
                })

            });
    },
    mounted() {

    }
}
</script>

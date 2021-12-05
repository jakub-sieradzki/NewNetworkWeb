<template>
        <div class="max-w-xl ml-4 mr-4 flex-shrink" style="height: max-content">
                        <div class="m-auto w-full">
                            <div class="flex w-52 h-9 items-center m-auto justify-between pl-4 pr-4 mb-3 border rounded-md dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm bg-gray-200 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-40">
                                <p>Najnowsze</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44"
                                    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            <div class="m-auto" style="">
                                <div v-for="post in posts" :key="post.id">
                                    <Post :name="post.name" :surname="post.surname" :username="post.username" :content="post.content" :profileImageUrl="post.profileImage" :date_created="post.createdTimestamp" :views="post.views" :com_count="post.comments_count" />
                                </div>
                            </div>
                        </div>

                        <div class="h-10">
                        </div>
                    </div>
</template>
<script>
import Post from '../Post.vue';
import { getFirestore, collection, setDoc, doc, getDocs, addDoc, document, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from 'vue';
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
        this.loadPosts();
    },
    methods: {
        loadPosts: function() {

        }
    }
}
</script>
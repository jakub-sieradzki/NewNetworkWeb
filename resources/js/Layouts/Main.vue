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
                                    <Post :name="post.user_name" :surname="post.user_surname" :uid="post.user_id" :content="post.content" :date_created="post.created_at" :views="post.views" :com_count="post.comments_count" />
                                </div>
                            </div>
                        </div>

                        <div class="h-10">
                        </div>
                    </div>
</template>
<script>
import Post from './Post.vue';
export default {
    components: { Post },
    data: function() {
        return {
            posts: []
        }

    },
    mounted() {
        this.loadPosts();
    },

    methods: {
        loadPosts: function() {
            axios.get('/api/posts')
            .then((response) => {
                this.posts = response.data;
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    }
}
</script>
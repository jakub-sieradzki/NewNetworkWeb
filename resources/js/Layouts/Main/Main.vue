<template>
<div class="dark:bg-gray-900 dark:text-white h-screen w-screen">
    <CreatePost v-if="createPost"/>
    <div class="w-full h-full flex flex-col overflow-y-hidden z-0">
        <Navbar />
        <div class="overflow-y-hidden flex h-full">
            <Navpanel />
            <router-view name="mainContent"></router-view>
        </div>
    </div>
</div>
</template>
<script>
import { useRouter } from 'vue-router'
import Navbar from './Navbar.vue';
import Navpanel from './Navpanel.vue';
import CreatePost from '../CreatePost.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    CreatePost,
    Navbar,
    Navpanel,
    },

  name: "Main",

  setup() {
    const router = useRouter()
    const store = useStore()

    const showCreatePost = () => {
        store.commit('switchCreatePost')
    }

    return {
        showCreatePost,
        createPost: computed(() => store.state.createPost),
    }
  },
}
</script>
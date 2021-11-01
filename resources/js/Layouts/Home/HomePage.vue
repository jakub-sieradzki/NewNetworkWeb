<template>
    <CreatePost v-if="createPost"/>
            <div class="justify-center 2xl:gap-10 w-full h-full overflow-y-scroll pt-3 custom-scrollbar flex 3xl:pr-32">
                    <!--Categories-->
                        <Categories />
                    <!--End Categories-->
                    <!--Posts Section-->
                        <MainPostsList />
                    <!--End Post Section-->
                    <!--Popular-->
                        <Popular />
                    <!--End popular-->
            </div>
</template>
<script>
import Categories from './Categories.vue';
import MainPostsList from './MainPostsList.vue';
import Popular from './Popular.vue';
import CreatePost from '../CreatePost.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  components: {
    Popular,
    Categories,
    MainPostsList,
    CreatePost,
    },

  name: "App",

  setup() {
    const store = useStore()

    const showCreatePost = () => {
        store.commit('switchCreatePost')
    }

    return {
      // access a state in computed function
      createPost: computed(() => store.state.createPost),
      showCreatePost
    }
  },
}
</script>

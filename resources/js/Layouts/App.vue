<template>
  <router-view/>
</template>
<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: "App",
  setup() {
    const store = useStore()
    const router = useRouter()

    const getUser = () => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.get('/api/user').then(response => {
                store.commit('setUserAuthenticated', true)
                router.push('/')
                })
                .catch(error => {
                console.log(error);
                });
            });
    }

    return { getUser }
  },
  beforeCreate() {
    this.getUser();
  }
}

</script>
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './Layouts/App.vue'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store = createStore({
    state() {
      return {
        createPost: false
      }
    },
    mutations: {
        switchCreatePost (state) {
            state.createPost = !state.createPost
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
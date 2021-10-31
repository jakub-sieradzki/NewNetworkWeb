require('./bootstrap')

import { createApp } from 'vue'
import store from './store.js'
import router from './router.js'


import App from './Layouts/App.vue'


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
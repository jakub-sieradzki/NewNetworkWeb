import {createApp} from 'vue'
import App from './Layouts/App.vue'

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createApp(App).mount('#app')
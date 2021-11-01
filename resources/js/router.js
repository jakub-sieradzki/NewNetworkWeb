import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './Layouts/Main/Main.vue'
import Login from './Layouts/Auth/Login.vue'
import Register from './Layouts/Auth/Register.vue'
import Home from './Layouts/Home/HomePage.vue'
import store from './store.js'

const routes = [
  {
    path: '/', name: 'Main', 
    component: Main,
    children: [{
      path: 'home',
      components: {
        mainContent: Home,
      },
    }]
  },
  
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name == 'Login' || to.name == "Register") {
    if(store.getters.getUserAuthenticated) {
      next('/home');
    } else {
      next();
    }
  } else {
    if(store.getters.getUserAuthenticated) {
      next();
    } else {
      next({ name: 'Login' });
    }
  }
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Layouts/MainPage.vue'
import Login from './Auth/Login.vue'
import Register from './Auth/Register.vue'
import store from './store.js'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register }
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    if(to.name == 'Home' && !store.getters.getUserAuthenticated) next({name:'Login'})
    else next()
    
    if((to.name == 'Login' || to.name == 'Register') && store.getters.getUserAuthenticated) next({name: 'Home'})
    else next()


  })

  export default router
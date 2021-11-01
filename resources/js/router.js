import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './Layouts/Main/Main.vue'
import Login from './Layouts/Auth/Login.vue'
import Register from './Layouts/Auth/Register.vue'
import Home from './Layouts/Home/HomePage.vue'
import Profile from './Layouts/Profile/Profile.vue'
import ProfileFriends from './Layouts/Profile/Friends.vue'
import ProfileGallery from './Layouts/Profile/Gallery.vue'
import ProfileInfo from './Layouts/Profile/Info.vue'
import ProfilePosts from './Layouts/Profile/Posts.vue'
import store from './store.js'

const routes = [
  {
    path: '/', name: 'Main',
    component: Main,
    children: [
      {
        path: 'home',
        components: {
          mainContent: Home,
        },
      },
      {
        path: 'profile',
        components: {
          mainContent: Profile,
        },
        children: [
          {
            path: 'friends',
            components: {
              profileContent: ProfileFriends,
            },
          },
          {
            path: 'gallery',
            components: {
              profileContent: ProfileGallery,
            },
          },
          {
            path: 'info',
            components: {
              profileContent: ProfileInfo,
            },
          },
          {
            path: 'posts',
            components: {
              profileContent: ProfilePosts,
            },
          },
        ]
      },
    ]
  },

  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // if(to.path.includes('/profile')) {
  //   next()
  // }

  if (to.name == 'Login' || to.name == "Register") {
    if (store.getters.getUserAuthenticated) {
      next('/home');
    } else {
      next();
    }
  } else {
    if (store.getters.getUserAuthenticated) {
      next();
    } else {
      next({ name: 'Login' });
    }
  }
})

export default router
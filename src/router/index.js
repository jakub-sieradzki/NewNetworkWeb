import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main/Main.vue";
import Splash from "../views/SplashScreen.vue";
import PostView from "../views/Post/PostPage.vue";
import Hashtags from "../views/Post/Hashtags.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Home from "../views/Home/HomePage.vue";
import Profile from "../views/Profile/Profile.vue";
import ProfileFriends from "../views/Profile/Friends.vue";
import ProfileGallery from "../views/Profile/Gallery.vue";
import ProfileInfo from "../views/Profile/Info.vue";
import ProfilePosts from "../views/Profile/Posts.vue";
import Search from "../views/Home/Search.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "home/:id",
        components: {
          mainContent: Home,
        },
      },
      {
        path: "hashtag/:id",
        components: {
          mainContent: Hashtags,
        },
      },
      {
        path: "search",
        components: {
          mainContent: Search,
        },
        meta: {
          KeepAlive: true 
        }
      },
      {
        path: "user/:username",
        components: {
          mainContent: Profile,
        },
        children: [
          {
            path: "friends",
            components: {
              profileContent: ProfileFriends,
            },
          },
          {
            path: "gallery",
            components: {
              profileContent: ProfileGallery,
            },
          },
          {
            path: "info",
            components: {
              profileContent: ProfileInfo,
            },
          },
          {
            path: "posts",
            components: {
              profileContent: ProfilePosts,
            },
          },
        ],
      },
      {
        path: "/post/:postId",
        components: {
          mainContent: PostView,
        },
      },
    ],
  },

  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (store.getters.getGotUserInfo) {
    if (to.path == "/" || to.path == "/home") {
      next("/home/all");
    } else {
      if(to.fullPath == from.fullPath) {
        router.back(-2);
      }
      next();
    }
  }
});

//   next();

//   // if(to.path.includes('/profile')) {
//   //   next()
//   // }
//   // next()
//   // if (to.name == 'Login' || to.name == "Register") {
//   //   if (store.getters.getUid) {
//   //     next('/home');
//   //   } else {
//   //     next();
//   //   }
//   // } else {
//   //   if (store.getters.getUid) {
//   //     next();
//   //   } else {
//   //     next({ name: 'Login' });
//   //   }
//   // }
// })

export default router;

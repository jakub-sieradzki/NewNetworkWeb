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
import Pages from "../views/Home/Pages.vue";
import Page from "@/views/Page/Page.vue";
import PagePosts from "@/views/Page/Posts.vue";
import PageGallery from "@/views/Page/Gallery.vue";
import PageInfo from "@/views/Page/Info.vue";
import PageSettings from "@/views/Page/Settings.vue";
import store from "../store";
import Groups from "@/views/Home/Groups.vue";
import Group from "@/views/Group/Group.vue";
import GroupPosts from "@/views/Group/Posts.vue";
import GroupGallery from "@/views/Group/Gallery.vue";
import GroupInfo from "@/views/Group/Info.vue";
import GroupSettings from "@/views/Group/Settings.vue";
import OOBE from "@/views/OOBE/OOBEmain.vue";
import OOBEprofile from "@/views/OOBE/Profile.vue";
import OOBESelectCategories from "@/views/OOBE/SelectCategories.vue";
import SettingsMain from "@/views/Settings/SettingsMain.vue";
import SettingsProfile from "@/views/Settings/Profile.vue";
import AccountProfile from "@/views/Settings/Account.vue";

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
          KeepAlive: true,
        },
      },
      {
        path: "pages",
        components: {
          mainContent: Pages,
        },
      },
      {
        path: "groups",
        components: {
          mainContent: Groups,
        },
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
        path: "page/:pagename",
        components: {
          mainContent: Page,
        },
        children: [
          {
            path: "posts",
            components: {
              pageContent: PagePosts,
            },
          },
          {
            path: "gallery",
            components: {
              pageContent: PageGallery,
            },
          },
          {
            path: "info",
            components: {
              pageContent: PageInfo,
            },
          },
          {
            path: "settings",
            components: {
              pageContent: PageSettings,
            },
          },
        ],
      },
      {
        path: "group/:groupname",
        components: {
          mainContent: Group,
        },
        children: [
          {
            path: "posts",
            components: {
              groupContent: GroupPosts,
            },
          },
          {
            path: "gallery",
            components: {
              groupContent: GroupGallery,
            },
          },
          {
            path: "info",
            components: {
              groupContent: GroupInfo,
            },
          },
          {
            path: "settings",
            components: {
              groupContent: GroupSettings,
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
      {
        path: "/settings", 
        components: {
          mainContent: SettingsMain
        },
        children: [
          {
            path: "profile",
            components: {
              settingsContent: SettingsProfile,
            },
          },
          {
            path: "account",
            components: {
              settingsContent: AccountProfile,
            },
          },
        ],
      }
    ],
  },

  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/oobe",
    name: "OOBE",
    component: OOBE,
    children: [
      {
        path: "profile",
        components: {
          oobeContent: OOBEprofile,
        },
      },
      {
        path: "categories",
        components: {
          oobeContent: OOBESelectCategories,
        },
      },
    ],
  },
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
      if (to.fullPath == from.fullPath) {
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

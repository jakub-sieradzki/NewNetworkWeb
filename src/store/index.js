import { createStore } from "vuex";
import user from "./modules/user";
import userDetails from "./modules/userDetails";
import userPeopleInfo from "./modules/userPeopleInfo";
import userGroupsInfo from "./modules/userGroupsInfo";
import userPagesInfo from "./modules/userPagesInfo";

export default createStore({
  modules: {
    user,
    userDetails,
    userPeopleInfo,
    userGroupsInfo,
    userPagesInfo
  },
  state() {
    return {
      userAuthenticated: false,
      showMenu: false,
      showCategories: false,
      showPopular: false,
      gotUserInfo: false,

      allCategories: [],
      allCategoriesNames: {},
      categoriesObserved: [],

      unreadNotificationsList: [],

      postsRated: {},
      commentsRated: {},
      currentType: null,
    };
  },
  mutations: {
    switchUserAuthenticated(state) {
      state.userAuthenticated = !state.userAuthenticated;
    },
    switchShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
    switchShowCategories(state) {
      state.showCategories = !state.showCategories;
    },
    switchShowPopular(state) {
      state.showPopular = !state.showPopular;
    },
    setUserAuthenticated(state, value) {
      state.userAuthenticated = value;
    },
    setGotUserInfo(state, value) {
      state.gotUserInfo = value;
    },
    setAllCategories(state, value) {
      state.allCategories = value;
    },
    setAllCategoriesNames(state, value) {
      state.allCategoriesNames = value;
    },
    setCategoriesObserved(state, value) {
      state.categoriesObserved = value;
    },
    setPostsRated(state, value) {
      state.postsRated = value;
    },
    setCurrentType(state, value) {
      state.currentType = value;
    },
    setUnreadNotificationsList(state, value) {
      state.unreadNotificationsList = value;
    },
    setCommentsRated(state, value) {
      state.commentsRated = value;
    }
  },

  getters: {
    getUserAuthenticated(state) {
      return state.userAuthenticated;
    },
    getShowMenu(state) {
      return state.showMenu;
    },
    getGotUserInfo(state) {
      return state.gotUserInfo;
    },
    getAllCategories(state) {
      return state.allCategories;
    },
    getAllCategoriesNames(state) {
      return state.allCategoriesNames;
    },
    getCategoriesObserved(state) {
      return state.categoriesObserved;
    },
    getPostsRated(state) {
      return state.postsRated;
    },
    getCurrentType(state) {
      return state.currentType;
    },
    getUnreadNotificationsList(state) {
      return state.unreadNotificationsList;
    },
  },
});
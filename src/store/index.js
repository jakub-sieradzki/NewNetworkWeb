import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      createPost: false,
      userAuthenticated: false,
      showMenu: false,
      showCategories: false,
      showPopular: false,
      uid: '',
      name: '',
      surname: '',
      username: '',
      profileImage: '',
    }
  },
  mutations: {
      switchCreatePost (state) {
          state.createPost = !state.createPost
      },
      switchUserAuthenticated (state) {
          state.userAuthenticated = !state.userAuthenticated
      },
      switchShowMenu (state) {
          state.showMenu = !state.showMenu
      },
      switchShowCategories (state) {
          state.showCategories = !state.showCategories
      },
      switchShowPopular (state) {
          state.showPopular = !state.showPopular
      },
      setUserAuthenticated (state, value) {
          state.userAuthenticated = value
      },
      setUid (state, value) {
        state.uid = value
      },
      setName (state, value) {
        state.name = value
      },
      setSurname (state, value) {
        state.surname = value
      },
      setUsername (state, value) {
        state.username = value
      },
      setProfileImage (state, value) {
        state.profileImage = value
      }
  },

  getters: {
    getUserAuthenticated (state) {
      return state.userAuthenticated
    },
    getShowMenu (state) {
      return state.showMenu
    },
    getUid(state) {
      return state.uid
    },
    getName(state) {
      return state.name
    },
    getSurname(state) {
      return state.surname
    },
    getUsername(state) {
      return state.username
    },
    getProfileImage(state) {
      return state.profileImage
    },
  },
});

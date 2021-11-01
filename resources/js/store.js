import { createStore } from 'vuex'

const store = createStore({
    state() {
      return {
        createPost: false,
        userAuthenticated: false,
        showMenu: false,
        showCategories: false,
        showPopular: false,
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
        }
    },

    getters: {
      getUserAuthenticated (state) {
        return state.userAuthenticated
      },
      getShowMenu (state) {
        return state.showMenu
      }
    },
})

export default store
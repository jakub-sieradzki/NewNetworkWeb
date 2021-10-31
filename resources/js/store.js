import { createStore } from 'vuex'

const store = createStore({
    state() {
      return {
        createPost: false,
        userAuthenticated: false
      }
    },
    mutations: {
        switchCreatePost (state) {
            state.createPost = !state.createPost
        },
        switchUserAuthenticated (state) {
            state.userAuthenticated = !state.userAuthenticated
        },
        setUserAuthenticated (state, value) {
            state.userAuthenticated = value
        }
    },

    getters: {
      getUserAuthenticated (state) {
        return state.userAuthenticated
      }
    },
})

export default store
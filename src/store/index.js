import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      userAuthenticated: false,
      showMenu: false,
      showCategories: false,
      showPopular: false,
      gotUserInfo: false,

      uid: '',
      username: '',

      name: '',
      surname: '',
      gender: -1,
      birthyear: -1,
      description: '',

      peopleBlocked: [],
      peopleFriends: [],
      peopleObserved: [],

      groupsBlocked: [],
      groupsJoined: [],
      groupsObserved: [],

      pagesBlocked: [],
      pagesLiked: [],
      pagesObserved: [],
    }
  },
  mutations: {
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
      },
      setGotUserInfo(state, value) {
        state.gotUserInfo = value
      },
      setGender(state, value) {
        state.gender = value
      },
      setBirthyear(state, value) {
        state.birthyear = value
      },
      setDescription(state, value) {
        state.description = value
      },
      setPeopleBlocked(state, value) {
        state.peopleBlocked = value
      },
      setPeopleFriends(state, value) {
        state.peopleFriends = value
      },
      setPeopleObserved(state, value) {
        state.peopleObserved = value
      },
      setGroupsBlocked(state, value) {
        state.groupsBlocked = value
      },
      setGroupsJoined(state, value) {
        state.groupsJoined = value
      },
      setGroupsObserved(state, value) {
        state.GroupsObserved = value
      },
      setPagesBlocked(state, value) {
        state.pagesBlocked = value
      },
      setPagesLiked(state, value) {
        state.pagesLiked = value
      },
      setPagesObserved(state, value) {
        state.pagesObserved = value
      },
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
    getGotUserInfo(state) {
      return state.gotUserInfo
    },
    getGender(state) {
      return state.gender
    },
    getBirthyear(state) {
      return state.birthyear
    },
    getDescription(state) {
      return state.description
    },
    getPeopleBlocked(state) {
      return state.peopleBlocked
    },
    getPeopleFriends(state) {
      return state.peopleFriends
    },
    getPeopleObserved(state) {
      return state.peopleObserved
    },
    getGroupsBlocked(state) {
      return state.groupsBlocked
    },
    getGroupsJoined(state) {
      return state.groupsJoined
    },
    getGroupsObserved(state) {
      return state.groupsObserved
    },
    getPagesBlocked(state) {
      return state.pagesBlocked
    },
    getPagesLiked(state) {
      return state.pagesLiked
    },
    getPagesObserved(state) {
      return state.pagesObserved
    },
  },
});

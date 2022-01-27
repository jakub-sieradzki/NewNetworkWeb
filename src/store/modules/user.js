const state = () => ({
    uid: "",
    username: "",
    name: "",
    surname: "",
    profileImage: "",
})

const mutations = {
    setUid(state, value) {
        state.uid = value
    },
    setUsername(state, value) {
        state.username = value
    },
    setName(state, value) {
        state.name = value
    },
    setSurname(state, value) {
        state.surname = value
    },
    setProfileImage(state, value) {
        state.profileImage = value
    },
    setUserInfo(state, values) {
        state.uid = values.uid
        state.username = values.username
        state.name = values.name
        state.surname = values.surname
        state.profileImage = values.profileImage
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}

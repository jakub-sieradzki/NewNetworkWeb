const state = () => ({
    uid: "",
    username: "",
    name: "",
    surname: "",
    profileImage: "",
    description: "",
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
    setDescription(state, value) {
        state.description = value
    },
    setUserInfo(state, values) {
        state.uid = values.uid
        state.username = values.username
        state.name = values.name
        state.surname = values.surname
        state.profileImage = values.profileImage
        state.description = values.description
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}

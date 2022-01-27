const state = () => ({
    description: "",
    gender: -1,
    birthyear: -1,
})

const mutations = {
    setDescription(state, value) {
        state.description = value
    },
    setGender(state, value) {
        state.gender = value
    },
    setBirthyear(state, value) {
        state.birthyear = value
    },
    setUserDetails(state, values) {
        state.description = values.description
        state.gender = values.gender
        state.birthyear = values.birthyear
    }
}

export default {
    namespaced: true,
    state,
    mutations
}

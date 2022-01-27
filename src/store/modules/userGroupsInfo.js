const state = () => ({
    blocked: [],
    joined: [],
    observed: [],
})

const mutations = {
    setBlocked(state, value) {
        state.blocked = value
    },
    setJoined(state, value) {
        state.joined = value
    },
    setObserved(state, value) {
        state.observed = value
    },
    setGroupsInfo(state, values) {
        state.blocked = values.blocked
        state.joined = values.joined
        state.observed = values.observed
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
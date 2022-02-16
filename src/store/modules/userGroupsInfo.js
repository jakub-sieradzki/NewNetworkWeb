const state = () => ({
    blocked: [],
    joined: [],
    observed: [],
    administered: [],
    moderated: [],
    requestAdmin: [],
    requestMod: [],
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
    setAdministered(state, value) {
        state.administered = value
    },
    setModerated(state, value) {
        state.moderated = value
    },
    setRequestAdmin(state, value) {
        state.requestAdmin = value
    },
    setRequestMod(state, value) {
        state.requestMod = value
    },
    setGroupsInfo(state, values) {
        state.blocked = values.blocked
        state.joined = values.joined
        state.observed = values.observed
        state.administered = values.administered
        state.moderated = values.moderated
        state.requestAdmin = values.request_admin
        state.requestMod = values.request_mod
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
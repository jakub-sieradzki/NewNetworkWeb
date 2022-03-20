const state = () => ({
    blockedBy: [],
    joined: [],
    observed: [],
    administered: [],
    moderated: [],
    requestAdmin: [],
    requestMod: [],
    requestMember: [],
})

const mutations = {
    setBlockedBy(state, value) {
        state.blockedBy = value
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
    setRequestMember(state, value) {
        state.requestMember = value
    },
    setGroupsInfo(state, values) {
        state.blockedBy = values.blockedBy
        state.joined = values.joined
        state.observed = values.observed
        state.administered = values.administered
        state.moderated = values.moderated
        state.requestAdmin = values.requestAdmin
        state.requestMod = values.requestMod
        state.requestMember = values.requestMember
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
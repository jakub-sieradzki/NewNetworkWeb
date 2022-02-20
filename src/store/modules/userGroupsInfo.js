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
        state.blockedBy = values.blocked_by
        state.joined = values.joined
        state.observed = values.observed
        state.administered = values.administered
        state.moderated = values.moderated
        state.requestAdmin = values.request_admin
        state.requestMod = values.request_mod
        state.requestMember = values.request_member
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
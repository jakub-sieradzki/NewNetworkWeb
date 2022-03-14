const state = () => ({
    blocked: [],
    liked: [],
    observed: [],
    administered: [],
    moderated: [],
    requestAdmin: [],
    requestMod: [],
});

const mutations = {
    setBlocked(state, value) {
        state.blocked = value
    },
    setLiked(state, value) {
        state.liked = value
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
    setPagesInfo(state, values) {
        state.blocked = values.blocked
        state.liked = values.liked
        state.observed = values.observed
        state.administered = values.administered
        state.moderated = values.moderated
        state.requestAdmin = values.requestAdmin
        state.requestMod = values.requestMod
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
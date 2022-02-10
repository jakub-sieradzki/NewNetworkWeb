const state = () => ({
    blocked: [],
    liked: [],
    observed: [],
    administered: [],
    moderated: [],
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
    setPagesInfo(state, values) {
        state.blocked = values.blocked
        state.liked = values.liked
        state.observed = values.observed
        state.administered = values.administered
        state.moderated = values.moderated
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
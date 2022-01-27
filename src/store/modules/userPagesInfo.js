const state = () => ({
    blocked: [],
    liked: [],
    observed: [],
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
    setPagesInfo(state, values) {
        state.blocked = values.blocked
        state.liked = values.liked
        state.observed = values.observed
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
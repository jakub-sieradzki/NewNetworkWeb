const state = () => ({
  blocked: [],
  friends: [],
  observed: [],
  friendsRequests: [],
  userFriendsRequests: [],
  blockedBy: [],
});

const mutations = {
    setBlocked(state, value) {
        state.blocked = value
    },
    setFriends(state, value) {
        state.friends = value
    },
    setObserved(state, value) {
        state.observed = value
    },
    setFriendsRequests(state, value) {
        state.friendsRequests = value
    },
    setUserFriendsRequests(state, value) {
        state.userFriendsRequests = value
    },
    setBlockedBy(state, value) {
        state.blockedBy = value
    },
    setPeopleInfo(state, values) {
        state.blocked = values.blocked
        state.friends = values.friends
        state.observed = values.observed
        state.friendsRequests = values.friendsRequests
        state.userFriendsRequests = values.userFriendsRequests
        state.blockedBy = values.blockedBy
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
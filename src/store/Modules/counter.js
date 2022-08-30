const state = {
    counter: 0
};

const getters = {
    counter(state) {
        return state.counter
      },
      doubleCounter(state) {
        return state.counter * 2
      },
};

const mutations = {
    increment(state) {
        return state.counter ++
    },
    decrement(state) {
        return state.counter --
    },
};

const actions = {
    increment(context) {
        context.commit('increment');
    },
    decrement(context) {
        context.commit('decrement');
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}
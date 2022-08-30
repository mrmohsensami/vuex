import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counter(state) {
      return state.counter
    },
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    increment(state) {
      return state.counter ++
    },
    decrement(state) {
      return state.counter --
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    }
  },
  modules: {
  }
})

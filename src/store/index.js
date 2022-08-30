import Vue from 'vue'
import Vuex from 'vuex';

import counter from "./Modules/counter";
import name from "./Modules/name";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter,
    name
  }
})

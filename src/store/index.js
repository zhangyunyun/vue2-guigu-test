import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/count'
import test from './modules/test'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    test,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    
  }
})

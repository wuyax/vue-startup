import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {},
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 500)
    },
    decrementAsync(context) {
      setTimeout(() => {
        context.commit('decrement')
      }, 500)
    }
  },
  modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    remoteData: {}
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    asyncData(state, payload) {
      state.remoteData = payload
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
    },
    getData(context) {
      const url = 'https://mockapi.eolinker.com/hiI8J119bb71796932f79743acf266d7b3fd3afb393a9c2/anov/action/user'
      fetch(url)
        .then(res => res.json())
        .then(res => {
          context.commit('asyncData', res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {}
})

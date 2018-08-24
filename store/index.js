import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    menu: {}
  },
  mutations: {
    set(state, data){
      state.menu = data
    }
  }, 
  actions: {
    async nuxtServerInit ({ commit }, { app }) {
      const data = await app.$axios.get("https://jsonplaceholder.typicode.com/todos")
      commit('set', response.data)
      console.log(response.data)
    }
  }
})
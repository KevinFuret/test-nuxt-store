import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
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
        const response = await app.$axios.get("https://jsonplaceholder.typicode.com/todos")
        commit('set', response.data)
        console.log(response.data)
      }
    }
  })
}

export default createStore

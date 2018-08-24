import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    menu: {}
  },
  mutations: {
    set(state, data){
      state.menu = data.items
    }
  }, 
  actions: {
    async nuxtServerInit ({ commit }, { app }) {
      const data = await app.$axios.get("https://dev.lesdeuxvagues.com/api/wp-json/wp-api-menus/v2/menus/2")
      commit('set', response.data)
      console.log(response.data)
    }
  }
})
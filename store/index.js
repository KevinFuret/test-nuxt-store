import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menu: []
    },
    mutations: {
      set(state, data){
        state.menu = data
      }
    }, 
    actions: {
      async nuxtServerInit ({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(function (response) {
            commit('set', response.data)
            console.log(response.data);
          })
      }
    }
  })
}

export default createStore

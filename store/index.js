import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menu: null
    },
    mutations: {
      SET_DATA(state, theData){
        console.log("mutation lancée")
        console.log("data :" + theData)
        state.menu = theData.items
      }
    }, 
    actions: {
      async nuxtServerInit({ commit, dispatch }) {
        await dispatch('storeDispatchFunc')
      }, 
      async storeDispatchFunc({ commit }) {
        const { data } = await this.$axios.get('https://dev.lesdeuxvagues.com/api/wp-json/wp-api-menus/v2/menus/2', {
          headers: {
              'Content-Type': 'application/json'
          }
      })
        commit('SET_DATA', data)
      }
    }
  })
}

export default createStore
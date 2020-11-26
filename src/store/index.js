import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
 
  state : {
    message : 'Hello Vuex'
  },
  mutations: {
  
  },
  actions: {},
  modules: {
  },
  getters : {
    message(state){
      return state.message.toLocaleUpperCase();
    }
  }
});

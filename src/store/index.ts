import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    age: 0,
  },
  getters: {
    nextAge(state, getter) {
      return state.age;
    },
  },
  mutations: {
    getInfo(state, payload) {
      state.age++;
    },
  },
  actions: {
  },
  modules: {
    user,
  },
});

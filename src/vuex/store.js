import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import login from './modules/login';
import transition from './modules/transition';

const store = new Vuex.Store({
  modules:{
    login,
    transition
  }
})

export default store;
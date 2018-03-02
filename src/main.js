// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import api from '@/api'
import './assets/styles/reset.styl'
import './assets/styles/mintui_reset.styl'
import './assets/styles/base_class.styl'

import gobackNav from '@/components/goback_nav'
import searchInput from '@/components/search_input'


Vue.config.productionTip = false

import MintUI from 'mint-ui';
Vue.use(MintUI);
Vue.prototype.$api = api

Vue.component('goback-nav',gobackNav)
Vue.component('search-input',searchInput)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

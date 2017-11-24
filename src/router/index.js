import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import login from './login'
import main from './main'

import store from '@/vuex/store'
import {SET_ROUTE_TRANSITION_NAME,ADD_ROUTE_CHAIN,POP_ROUTE_CHAIN} from '@/vuex/mutations_types'


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    ...login,
    ...main
  ]
})

/**
 * 注册路由钩子设置切换动画
 */
router.beforeEach((to, from, next) => {
  let routeLength = store.state.transition.routeChain.length;
  if (routeLength === 0) {
    store.commit(SET_ROUTE_TRANSITION_NAME, 'fade');
    if (to.path === from.path && to.path === '/') {
      //当直接打开根路由的时候
      store.commit(ADD_ROUTE_CHAIN, to);
    } else {
      //直接打开非根路由的时候其实生成了两个路径，from就是根路由
      store.commit(ADD_ROUTE_CHAIN, from);
      store.commit(ADD_ROUTE_CHAIN, to);
    }
  } else if (routeLength === 1) {
    store.commit(SET_ROUTE_TRANSITION_NAME, 'slide-left');
    store.commit(ADD_ROUTE_CHAIN, to);
  } else {
    let lastBeforeRoute = store.state.transition.routeChain[routeLength-2];
    if (lastBeforeRoute.path === to.path) {
      store.commit(POP_ROUTE_CHAIN);
      store.commit(SET_ROUTE_TRANSITION_NAME, 'slide-right');
    } else {
      store.commit(ADD_ROUTE_CHAIN, to);
      store.commit(SET_ROUTE_TRANSITION_NAME, 'slide-left');
    }
  }
  next();
})

export default router
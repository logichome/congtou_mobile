import {
  SET_ROUTE_TRANSITION_NAME
} from '@/vuex/mutations_types'

const state = {
  routeTransitionName:'slide-left'
}

const mutations = {
  // 更新路由动画名称
  [SET_ROUTE_TRANSITION_NAME](state, isBack) {
    state.routeTransitionName = isBack ? 'slide-right' : 'slide-left';
  }
}

export default {
  state,
  mutations
}
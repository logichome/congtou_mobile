<template>
  <div class="app">
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  computed:{
    ...mapState({
      transitionName: state => state.transition.routeTransitionName
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html
  font-size  calc(100vw/3.75);
.app
  position absolute
  width 100%
  height 100%
.child-view {
  position absolute
  background-color #fff
  top 0
  left 0
  width 100%
  min-height 100%
  box-sizing border-box
  transition: all .3s;
}
.slide-left-enter, .slide-right-leave-active {
  // opacity: 0;
  -webkit-transform: translate(3.75rem, 0);
  transform: translate(3.75rem, 0);
}
.slide-left-leave-active, .slide-right-enter {
  // opacity: 0;
  -webkit-transform: translate(-3.75rem, 0);
  transform: translate(-3.75rem, 0);
}
</style>

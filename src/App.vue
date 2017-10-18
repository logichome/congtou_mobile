<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
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
// .child-view {
//   position: absolute;
//   transition: all .5s cubic-bezier(.55,0,.1,1);
// }
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>

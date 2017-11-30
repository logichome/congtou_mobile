<template>
  <div class="main">
    <router-view class="view"></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from './tab_bar'
export default {
  data () {
    return {
    }
  },
  components:{
    tabBar
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
  box-sizing border-box
  position relative
  height 100%
  .view 
    height 100%
    width 100%
    padding-bottom 60px
    box-sizing border-box
    overflow-y auto
</style>

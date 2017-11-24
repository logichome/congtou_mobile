<template>
  <div class="main">
    123
    <router-view></router-view>
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
</style>

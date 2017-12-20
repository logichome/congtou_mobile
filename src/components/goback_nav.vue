<template>
  <div class="goback-nav">
    <div class="goback-button" @click.stop="goback">
      <img v-show="type != 'white'" src="../assets/images/fanhui_hui.png" alt="">
      <img v-show="type == 'white'" src="../assets/images/fanhui_bai.png" alt="">
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props:['type','url'],
  methods:{
    goback(){
      if(this.url){
        return this.$router.push(this.url)
      }
      if(this.$store.state.transition.routeChain.length <=2 ) {
        this.$router.push('/')
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.goback-nav
  position absolute
  z-index 9
  top 0
  left 0
  width 100%
  height 0.4rem
  background-color #fff
  .goback-button
    position absolute
    top 0
    left 0
    padding 0.1rem 0.15rem
    img
      height 0.18rem
</style>

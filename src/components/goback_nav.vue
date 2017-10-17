<template>
  <div class="goback-nav">
    <div class="goback-button" @click="goback">
      <img src="../assets/images/fanhui_hui.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.goback-nav
  position absolute
  top 0
  left 0
  width 100%
  .goback-button
    position absolute
    top 0
    left 0
    padding 0.1rem 0.15rem
    img
      height 0.18rem
</style>

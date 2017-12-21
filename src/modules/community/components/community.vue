<template>
  <div class="community">
    <div class="header">
      <p class="header-title word7 title2">北海市中安止泊园</p>
      <div class="header-button-list">
        <span class="header-button-item">
          <img src="../static/imgs/new_5_sousuo.png" alt="">
        </span>
        <span class="header-button-item">
          <img src="../static/imgs/shequ_fenxiang.png" alt="">
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.community
  padding-top 0.44rem
  .header
    position fixed
    top 0
    z-index 10
    width 100%
    background-color #fff
    .header-title
      line-height 0.44rem
      padding-left 0.15rem
    .header-button-list
      position absolute
      top 0.05rem
      right 0.05rem
      .header-button-item
        padding 0.06rem
        float left
        img 
          width 0.22rem
          height 0.22rem
</style>

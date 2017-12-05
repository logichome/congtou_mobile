<template>
<div class="home">
  <div class="header">
    <p class="header-title word7 title2">北海市中安止泊园</p>
    <div class="header-button-list">
      <span class="header-button-item">
        <img src="../static/imgs/zhuye_xuanzeshequ.png" alt="">
      </span>
      <span class="header-button-item">
        <img src="../static/imgs/zhuye_saoyisao.png" alt="">
      </span>
    </div>
  </div>
  <div class="date-info">
    <div class="date"></div>
    <div class="air"></div>
    <div class="weather"></div>
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
.home
  .header
    position relative
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

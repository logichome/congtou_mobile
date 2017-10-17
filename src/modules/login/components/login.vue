<template>
  <div class="login">
    <div class="header">
      <h2 class="title">开启智慧社区<span class="title-version">5.0</span></h2>
      <div class="title-text">您的专属“私人管家”</div>
      <div class="logo">
        <img src="../static/denglu_logo.png" alt="">
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
  .header
    position relative
    height 2.15rem
    text-align center
    box-sizing border-box
    padding-top 0.61rem
    background-color #2594cb
    .title,
    .title-version,
    .title-text
      line-height 1
      color #fff
    .title
      font-size 0.28rem
    .title-version
      margin-left 0.07rem
      font-size 0.4rem
    .title-text
      margin-top 0.3rem
      font-size 0.18rem
    .logo
      position absolute
      height 0.78rem
      width 0.78rem
      top 1.76rem
      left 50%
      transform translateX(-50%);
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
</style>

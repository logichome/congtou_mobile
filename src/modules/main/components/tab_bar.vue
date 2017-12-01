<template>
  <div class="tab-bar bg3">
    <div class="tab-bar-left fl">
      <router-link class="fl" to="/main/home">
        <img class="deactive" src="../static/imgs/tab_home_normal.png" alt="">
        <img class="active" src="../static/imgs/tab_home_selected.png" alt="">
        <p class="word2">首页</p>
      </router-link>
      <router-link class="fl" to="/main/community">
        <img class="deactive" src="../static/imgs/tab_shequ_normal.png" alt="">
        <img class="active" src="../static/imgs/tab_shequ_selected.png" alt="">
        <p class="word2">社区</p>
      </router-link>
    </div>
    <div class="tab-bar-middle">
      <img src="../static/imgs/tabtab_fabu.png" alt="">
      <p>发布</p>
    </div>
    <div class="tab-bar-right fr">
      <router-link class="fl" to="/main/message">
        <img class="deactive" src="../static/imgs/tab_new_normal.png" alt="">
        <img class="active" src="../static/imgs/tab_new_selected.png" alt="">
        <p class="word2">消息</p>
      </router-link>
      <router-link class="fl" to="/main/me">
        <img class="deactive" src="../static/imgs/tab_me_normal.png" alt="">
        <img class="active" src="../static/imgs/tab_me_selected.png" alt="">
        <p class="word2">我的</p>
      </router-link>
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
.tab-bar
  position absolute
  box-sizing border-box
  height 0.49rem
  bottom 0
  width 100%
  a
    display block
    overflow hidden
    font-size 0.12rem
    text-align center
    width 0.76rem
    img
      height 0.3rem
      width 0.3rem
    p
      color #666
    img.active
      display none
  .router-link-active
    p
      color #2593cb
    img.active
      display inline-block
    img.deactive
      display none
  .tab-bar-middle
    position absolute
    color #666
    left 50%
    font-size 0.12rem
    margin-left -0.25rem
    margin-top -0.12rem
    width 50px
    text-align center
    img
      width 0.44rem
      height 0.44rem
</style>

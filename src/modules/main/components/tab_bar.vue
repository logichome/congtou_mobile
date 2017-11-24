<template>
  <div class="tab-bar bg3">
    <div class="tab-bar-left fl">
      <router-link to="/main/home">首页</router-link>
      <router-link to="/main/home">社区</router-link>
    </div>
    <div class="tab-bar-right fr">
      <router-link to="/main/home">消息</router-link>
      <router-link to="/main/home">我的</router-link>
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
  height 50px
  bottom 0
  width 100%
  a
    display inline-block
    width 50px
    text-align center
</style>

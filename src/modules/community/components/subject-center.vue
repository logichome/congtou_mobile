<template>
  <div class="subject-center">
    <goback-nav>
      <div class="help-button">
        <img src="../static/imgs/new_5_sousuo.png" alt="">
      </div>
    </goback-nav>
    <h1>话题中心</h1>
    <div class="subject-list"></div>
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
.subject-center
  .search-button
    position absolute
    top 0
    right 0.04rem
    padding 0.09rem
    img
      width 0.22rem
      height 0.22rem
</style>

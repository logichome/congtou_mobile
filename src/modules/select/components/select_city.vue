<template>
  <div class="select-city">
    <goback-nav>
      <div class="top-nav">
        <div class="search-button" @click="$router.push('/select_community/search_community')">
          <img src="../static/imgs/community_sousuo.png" alt="">
        </div>
      </div>
    </goback-nav>
    <h1>选择城市</h1>
    <ul class="cells">
      <li class="cell">
        <div class="cell-content">
          <span>北海市</span>
        </div>
        <div class="cell-ft">
          <img src="../static/imgs/new_3_jinru.png" alt="">
        </div>
      </li>
      <li class="cell">
        <div class="cell-content">
          <span>桂林市</span>
        </div>
        <div class="cell-ft">
          <img src="../static/imgs/new_3_jinru.png" alt="">
        </div>
      </li>
    </ul>
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
.select-city
  padding-top 40px
  .top-nav
    position absolute
    right 0
    top 0
    .search-button
      padding 9px 13px
      img
        display block
        height 22px
        width 22px
</style>

<template>
  <div class="select-community">
    <goback-nav>
      <div class="top-nav">
        <div class="search-button" @click="$router.push('/select_community/search_community')">
          <img src="../static/imgs/community_sousuo.png" alt="">
        </div>
      </div>
    </goback-nav>
    <h1>选择社区</h1>
    <p class="desc word6 title3">没有找到自己的小区或房屋？请电话联系我们</p>
    <div class="city title3 word7">
      <div class="city-name" @click="$router.push('/select_community/select_city')">
        <span>北海市</span>
        <img src="../static/imgs/community_xiala.png" alt="">
      </div>
      <div class="regps">
        <img src="../static/imgs/community_dingwei.png" alt="">
        <span>重新定位</span>
      </div>
    </div>
    <div class="cells-container">
      <ul class="cells">
        <li class="cell">
          <div class="cell-content">
            <span>北海市中安大厦</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
        <li class="cell">
          <div class="cell-content">
            <span>北海市中安大厦</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
        <li class="cell">
          <div class="cell-content">
            <span>北海市中安大厦</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
        <li class="cell">
          <div class="cell-content">
            <span>北海市中安大厦</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
        <li class="cell">
          <div class="cell-content">
            <span>北海市中安大厦</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
        <li class="cell">
          <div class="cell-content">
            <span>北海市中安大厦</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="jump-button">
      <button type="button1" @click="$router.push('/main')">跳过</button>
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
.select-community
  padding-top 40px
  box-sizing border-box
  height 100%
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
  .desc
    padding-left 15px
  .city
    margin-top 15px
    position relative
    z-index 8
    height 38px
    line-height 38px
    padding-left 15px
    background-color #f4f4f4
    .city-name
      width 1rem
    img
      margin-left 4px
      margin-top -2px
      height 19px
      width 19px
      vertical-align middle
    .regps
      position absolute
      right 0
      top 0
      padding-right 15px
  .cells-container
    position absolute
    width 100%
    top 0
    margin 0
    height 100%
    box-sizing border-box
    padding 1.6rem 0 1rem
    .cells
      width 100%
      height 100%
      overflow auto
  .jump-button
    position absolute
    background-color #fff
    width 100%
    padding 0.2rem 0
    bottom 0
    left 0
</style>

<template>
  <div class="select-community">
    <goback-nav>
      <div class="top-nav">
        <div class="search-button">
          <img src="../static/imgs/community_sousuo.png" alt="">
        </div>
      </div>
    </goback-nav>
    <h1>选择社区</h1>
    <p class="desc word6 title3">没有找到自己的小区或房屋？请电话联系我们</p>
    <div class="city title3 word7">
      <div class="city-name">
        <span>北海市</span>
        <img src="../static/imgs/community_xiala.png" alt="">
      </div>
      <div class="regps">
        <img src="../static/imgs/community_dingwei.png" alt="">
        <span>重新定位</span>
      </div>
    </div>
    <ul class="cells">
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
</template>
<script>
import gobackNav from '@/components/goback_nav'
export default {
  data () {
    return {
    }
  },
  components:{
    gobackNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.select-community
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
  .desc
    padding-left 15px
  .city
    margin-top 15px
    position relative
    height 38px
    line-height 38px
    padding-left 15px
    background-color #f4f4f4
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
</style>

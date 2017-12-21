<template>
  <div class="notice">
    <goback-nav></goback-nav>
    <h1>公告中心</h1>
    <ul class="tab-list word6 title3 clearfix">
      <li :class="{active:currentIndex === 0}" @click="changeCurrentIndex(0)">社区</li>
      <li :class="{active:currentIndex === 1}" @click="changeCurrentIndex(1)">论坛</li>
    </ul>
    <div class="tab-content">
      <ul class="cells">
        <li class="cell" @click="$router.push('/main/home/notice_detail')">
          <div class="cell-content">
            <span>北海市北海市北海市北海市北海市北海市北海市</span>
          </div>
          <div class="cell-info">
            <span>17-09-27</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
        <li class="cell" @click="$router.push('/main/home/notice_detail')">
          <div class="cell-content">
            <span>桂林市</span>
          </div>
          <div class="cell-info">
            <span>17-09-27</span>
          </div>
          <div class="cell-ft">
            <img src="../static/imgs/new_3_jinru.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentIndex:0
    }
  },
  methods:{
    changeCurrentIndex(index){
      this.currentIndex = index
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.notice
  padding-top 0.4rem
  .tab-list
    margin-top 0.1rem
    padding-left 0.15rem
    li
      float left
      margin-right 0.2rem
      line-height 0.32rem
      &.active
        color #333
        border-bottom 2px solid #333
</style>

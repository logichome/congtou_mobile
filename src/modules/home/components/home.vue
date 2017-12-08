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
  <div class="date-info clearfix">
    <div class="date word7 fl clearfix">
      <div class="date-day">
        01
      </div>
      <div class="date-detail">
        <p class="weekday">星期五</p>
        <p class="yearmounth">2017年9月</p>
      </div>
    </div>
    <div class="air fl">
      <span class="air-title word7">PM2.5</span>
      <span class="air-index bg12 word1">55</span>

    </div>
    <div class="weather fr">
      <div class="weather-img fl">
        <img src="../static/imgs/zhuye_yintian.png" alt="">
      </div>
      <div class="weather-therm fl title4 word7 bold">23-29°</div>
    </div>
  </div>
  <div class="square-list">
    <div class="square-row">
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_kaimen.png" alt="">
        </div>
        <div class="square-item-text title3 word6">手机开门</div>
      </div>
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_chongdianzhuang.png" alt="">
        </div>
        <div class="square-item-text title3 word6">充电桩</div>
      </div>
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_jiaofei.png" alt="">
        </div>
        <div class="square-item-text title3 word6">物业缴费</div>
      </div>
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_erweima.png" alt="">
        </div>
        <div class="square-item-text title3 word6">访客邀请</div>
      </div>
    </div>
    <div class="square-row">
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_baoxiu.png" alt="">
        </div>
        <div class="square-item-text title3 word6">物业报修</div>
      </div>
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_tingche.png" alt="">
        </div>
        <div class="square-item-text title3 word6">停车缴费</div>
      </div>
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_shangcheng.png" alt="">
        </div>
        <div class="square-item-text title3 word6">社区商城</div>
      </div>
      <div class="square-item">
        <div class="square-item-img">
          <img src="../static/imgs/shewqushenghuo_shenghuo.png" alt="">
        </div>
        <div class="square-item-text title3 word6">社区生活</div>
      </div>
    </div>
  </div>
  <div class="notice">
    <div class="notice-img"></div>
    <div class="notice-title"></div>
    <div class="notice-more">
      <span>更多</span>
      <img src="" alt="">
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
  .date-info
    padding 0.15rem 0
    .date
      padding-left 0.3rem
      .date-day
        float left
        font-size 0.3rem
      .date-detail
        float left
        padding-left 0.15rem
        font-size 0.12rem
        .yearmounth
          padding-top 0.05rem
    .air 
      line-height 0.3rem
      font-size 0.12rem
      padding-left 0.3rem
      .air-index
        padding 0.04rem 0.08rem
        border-radius 0.02rem
        margin-left 0.1rem
    .weather
      padding-right 0.15rem
      line-height 0.3rem
      .weather-img
        width 0.3rem
        height 0.3rem
        img 
          width 100%
          height 100%
      .weather-therm
        padding-left 0.1rem
  .square-list
    .square-row
      display flex
      flex-wrap nowrap
      .square-item
        padding 0.2rem 0
        text-align center
        flex 1
        &:active
          background-color #f4f4f4
        .square-item-img
          margin 0 auto
          height 0.26rem
          width 0.26rem
          img
            height 100%
            width 100%
        .square-item-text
          margin-top 0.08rem
        
</style>

<template>
  <div class="living">
    <goback-nav>
      <div class="help-button">
        <img src="../static/imgs/shewqushenghuo_bangzhu.png" alt="">
      </div>
    </goback-nav>
    <h1>社区生活</h1>
    <div class="square-title bg3 title3 word7">物业服务</div>
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
            <img src="../static/imgs/shewqushenghuo_wodefangwu.png" alt="">
          </div>
          <div class="square-item-text title3 word6">我的房屋</div>
        </div>
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_sirenguanjia.png" alt="">
          </div>
          <div class="square-item-text title3 word6">私人管家</div>
        </div>
      </div>
      <div class="square-row">
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_dianhua.png" alt="">
          </div>
          <div class="square-item-text title3 word6">常用电话</div>
        </div>
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_tousu.png" alt="">
          </div>
          <div class="square-item-text title3 word6">投诉建议</div>
        </div>
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_gonggao.png" alt="">
          </div>
          <div class="square-item-text title3 word6">社区公告</div>
        </div>
        <div class="square-item">
          <!-- <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_shenghuo.png" alt="">
          </div>
          <div class="square-item-text title3 word6">社区生活</div> -->
        </div>
      </div>
    </div>
    <div class="square-title bg3 title3 word7">家政服务</div>
    <div class="square-list">
      <div class="square-row">
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_baojie.png" alt="">
          </div>
          <div class="square-item-text title3 word6">家政保洁</div>
        </div>
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_jiadianqingxi.png" alt="">
          </div>
          <div class="square-item-text title3 word6">家电清洗</div>
        </div>
        <div class="square-item">

        </div>
        <div class="square-item">

        </div>
      </div>
    </div>
    <div class="square-title bg3 title3 word7">社区商业</div>

    <div class="square-list">
      <div class="square-row">
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_fangwuzhongjie.png" alt="">
          </div>
          <div class="square-item-text title3 word6">房屋中介</div>
        </div>
        <div class="square-item">
          <div class="square-item-img">
            <img src="../static/imgs/shewqushenghuo_shangcheng.png" alt="">
          </div>
          <div class="square-item-text title3 word6">社区商城</div>
        </div>
        <div class="square-item">

        </div>
        <div class="square-item">

        </div>
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
.living
  padding-top 0.4rem
  .help-button
    position absolute
    top 0
    right 0.04rem
    padding 0.09rem
    img
      width 0.22rem
      height 0.22rem
  .square-title
    margin-top 0.1rem
    line-height 0.35rem
    padding-left 0.15rem
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

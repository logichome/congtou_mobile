<template>
  <div class="community">
    <div class="header">
      <p class="header-title word7 title2">北海市中安止泊园</p>
      <div class="header-button-list">
        <span class="header-button-item">
          <img src="../static/imgs/new_5_sousuo.png" alt="">
        </span>
        <span class="header-button-item">
          <img src="../static/imgs/shequ_fenxiang.png" alt="">
        </span>
      </div>
    </div>
    <div class="community-body">
      <swipe></swipe>
      <div class="subject-banner">
        <div class="subject-info">
          <p class="subject-info-title word1">旅途中，遇见最美的风景</p>
          <p class="subject-info-count title3 word1">已有108392人参与</p>
          <button class="more-subject title3 word7">更多话题</button>
        </div>
        <div class="subject-content bg3 text1 word6">
          <p>旅行，是偷得浮生半日闲！</p>
          <p>美照，是拍的一张永流传！</p>
          <p>机票的附加值，晒了才能get！</p>
          <p>旅途的风景，分享了才更美丽！</p>
        </div>
        <div class="subject-top-user">
          <div class="subject-top-title">
            <span class="title3 word7">活跃榜</span>
            <span class="title4 word5">71</span>
          </div>
          <div class="subject-top-avatar">
            <ul class="clearfix">
              <li>
                <div class="top-avatar-image"></div>
              </li>
              <li>
                <div class="top-avatar-image"></div>
              </li>
              <li>
                <div class="top-avatar-image"></div>
              </li>
              <li>
                <div class="top-avatar-image"></div>
              </li>
              <li>
                <div class="top-avatar-image"></div>
              </li>
              <li>
                <div class="top-avatar-image"></div>
              </li>
              <li>
                <div class="top-avatar-image"></div>
              </li>
            </ul>
          </div>
          <div class="subject-top-card">
            <ul class="clearfix">
              <li class="bg3">
                <div class="card-avatar"></div>
                <div class="user-name title3 word7 bold">
                  床前明月光
                </div>
                <div class="card-ft clearfix word6 title4">
                  <div class="like fl">
                    <i></i>
                    <span>162</span>
                  </div>
                  <div class="comment fl">
                    <i></i>
                    <span>121</span>
                  </div>
                  <div class="time fr">
                    <span>5分钟前</span>
                  </div>
                </div>
              </li>
              <li class="bg3">
                <div class="card-avatar"></div>
                <div class="user-name title3 word7 bold">
                  床前明月光
                </div>
                <div class="card-ft clearfix word6 title4">
                  <div class="like fl">
                    <i></i>
                    <span>162</span>
                  </div>
                  <div class="comment fl">
                    <i></i>
                    <span>121</span>
                  </div>
                  <div class="time fr">
                    <span>5分钟前</span>
                  </div>
                </div>
              </li>
              <li class="bg3"></li>
              <li class="bg3"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import swipe from './swipe'
export default {
  data () {
    return {
    }
  },
  components:{
    swipe
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.community
  padding-top 0.44rem
  .header
    position fixed
    top 0
    z-index 10
    width 100%
    background-color #fff
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
  .community-body
    padding 0 0.15rem
    .subject-banner
      margin-top 0.15rem
      .subject-info
        position relative
        padding-top 0.55rem
        box-sizing border-box
        padding-left 0.15rem
        height 1.1rem
        background-image url('../static/imgs/shequ_huati_bj.png')
        background-size cover
        .subject-info-title
          font-size 0.2rem
          padding-bottom 0.05rem
        .more-subject
          position absolute
          right 0.1rem
          bottom 0.12rem
          line-height 0.24rem
          width 0.64rem
          text-align center
          border-radius 2px
          background-color #d2eaee
      .subject-content
        padding 0.1rem 0.15rem
        line-height 0.24rem
    .subject-top-user
      border 1px solid #f4f4f4
      padding 0.15rem
      .subject-top-avatar
        overflow-x auto
        padding 0.13rem 0
        ul
          width 3.4rem
          li
            float left
            padding 0 0.065rem
            &:first-of-type
              padding-left 0
            &:last-of-type
              padding-right 0
            .top-avatar-image
              height 0.34rem
              width 0.34rem
              background-image url('../static/imgs/shequ_zhuye_touxiang.png')
              background-size cover
      .subject-top-card
        overflow-x auto
        ul
          width 10rem
          li
            float left
            position relative
            height 0.75rem
            width 2rem
            margin-right 0.15rem
            &:last-of-type
              margin-right 0
            .card-avatar
              position absolute
              left 0.08rem
              top 0.08rem
              height 0.3rem
              width 0.3rem
              background-size cover
              background-image url('../static/imgs/shequ_zhuye_liebiao_touxiang.png')
            .user-name
              position absolute
              top 0.08rem
              left 0.44rem
              line-height 0.3rem
            .card-ft
              position absolute
              line-height 0.2rem
              width 100%
              box-sizing border-box
              bottom 0.08rem
              left 0
              padding 0 0.1 rem
              .like
                position relative
                padding-left 0.23rem
                padding-right 0.08rem
                i
                  position absolute
                  top 0
                  left 0
                  width 0.2rem
                  height 0.2rem
                  background-image url(../static/imgs/shequ_zhuye_huizan.png)
                  background-size cover
              .comment
                  position relative
                  padding-left 0.23rem
                i
                  position absolute
                  top 0
                  left 0
                  width 0.2rem
                  height 0.2rem
                  background-image url(../static/imgs/shequ_zhuye_huixiaoxi.png)
                  background-size cover
</style>

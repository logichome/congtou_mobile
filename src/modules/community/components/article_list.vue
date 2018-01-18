<template>
  <div class="artcle-list bg3">
    <div class="article-item" v-for="(item,index) in list" :key="index">
      <div class="artcle-header word7 clearfix">
        <div class="avatar fl"></div>
        <div class="name fl bold">葱头社区</div>
        <div class="subject fl title3 word2">今日话题</div>
        <div class="time title4 word5 fr">5分钟前</div>
      </div>
      <div class="artcle-content word7">智慧社区APP助力物业公司建设一站式社区服务平台，社区资讯，网上缴费，社区服务，只能停车和门禁，社区O2O，实现社区综合运营。保利物业，维科物业</div>
      <div class="artcle-imgs-box">
        <div v-if="item.type == 1" class="imgs-type1">
          <div class="img-container" :style="'background-image:url('+item.img+')'"></div>
          <div class="title title2 word7 bold">{{item.title}}</div>
          <div class="imgs-content text1 word6">{{item.summary}}的的的点点滴滴多多多多多多多多多多多的的的点点滴滴多多多多多多多多多多多的的的点点滴滴多多多多多多多多多多多</div>
        </div>
        <div v-if="item.type == 2" class="imgs-type2 clearfix">
          <div class="img-container" :style="'background-image:url('+item.img+')'"></div>
          <div class="img-container" :style="'background-image:url('+item.img+')'"></div>
          <div class="img-container" :style="'background-image:url('+item.img+')'"></div>
        </div>
        <div v-if="item.type == 3" class="imgs-type3 clearfix">
          <div class="img-container" :style="'background-image:url('+item.img+')'"></div>
        </div>
      </div>
      <div class="artcle-info clearfix word6 title4">
        <div class="like fl">
          <span class="like-button bold title4">+1</span>
          <span class="like-count title4 word5">40</span>
        </div>
        <div class="fr">
          <div class="info-comment fl">
            <img src="../static/imgs/shequ_pinglun.png" alt="">
            <span class="count">100</span>
          </div>
          <div class="info-view fl">
            <img src="../static/imgs/shequ_liulian.png" alt="">
            <span class="count">100</span>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="comment-item">
          <div class="comment-avatar"></div>
          <div class="comment-content">
            <span class="comment-username bold">葱头社区</span>
            <span class="comment-text">非常期待</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    list:{
      type:Array,
      default:[],
      require:true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.artcle-list
  .article-item
    background-color #fff
    margin-bottom 0.1rem    
    &:last-of-type
      margin-bottom 0
    .artcle-header
      position relative
      padding-left 0.55rem
      height 0.4rem
      line-height 0.4rem
      .avatar
        position absolute
        left 0.15rem
        top 0.05rem
        background-image url('../static/imgs/shequ_touxiang.png')
        height 0.3rem
        width 0.3rem
        background-position center
        background-size cover
      .name
        position relative
        padding-right 0.12rem
        &::after
          content ""
          position absolute
          top 0.14rem
          right -0.05rem
          border 6px solid transparent
          border-left-color #000
      .subject
        padding-left 0.05rem
      .time
        padding-right 0.15rem
    .artcle-content
      padding 0.1rem 0.15rem
      line-height 0.2rem
    .artcle-imgs-box
      margin-bottom 0.08rem
      .imgs-type1 
        height 0.85rem
        position relative
        padding 0.05rem 0.15rem 0.05rem 1.05rem 
        .img-container
          position absolute
          top 0
          left 0.15rem
          width 0.85rem
          height 0.85rem
          background-size cover
        .title
          padding-bottom 0.1rem
        .imgs-content
          display -webkit-box
          -webkit-box-orient vertical
          height 0.5rem
          line-height 0.16rem
          overflow hidden
          -webkit-line-clamp: 3
          word-break break-all;
          text-overflow ellipsis
      .imgs-type2
        padding 0.1rem 0.15rem 0.08rem
        .img-container
          float left
          margin-right 0.15rem
          width 1.05rem
          height 0.7rem
          background-size cover
          &:last-of-type
            margin-right 0
      .imgs-type3
        padding 0.1rem 0.15rem 0.08rem
        .img-container 
          width 3.45rem
          height 1.55rem
          background-size cover
    .artcle-info
      line-height 0.32rem
      padding 0 0.15rem 0.08rem
      .like
        .like-button
          display inline-block
          text-align center
          width 0.32rem
          height 0.32rem
          border-radius 50%
          background-color #e4e4e4
          color #333
          &.active
            background-color #c23720
            color #fff
        .like-count
          padding 0 0.05rem
      .info-comment
      .info-view
        position relative
        padding-left 0.37rem
        padding-right 0.05rem
        img
          position absolute
          left 0
          top 0
          width 0.32rem
          height 0.32rem
    .comment
      .comment-item
        position relative
        padding 0 0.15rem 0 0.42rem
        background-color #f7f7f7
        line-height 0.4rem
        .comment-avatar
          position absolute
          top 0.07rem
          left 0.13rem
          width 0.26rem
          height 0.26rem
          background-image url('../static/imgs/shequ_touxiang.png')
          background-size cover
          background-position center
        .comment-content
          .comment-text
            padding-left 0.05rem
</style>

<template>
  <div class="artcle-list bg4">
    <div class="article-item" v-for="(item,index) in list" :key="index">
      <div class="artcle-header word7 clearfix">
        <div class="avatar fl"></div>
        <div class="name fl">葱头社区</div>
        <div class="subject fl">今日话题</div>
      </div>
      <div class="artcle-content word7">智慧社区APP助力物业公司建设一站式社区服务平台，社区资讯，网上缴费，社区服务，只能停车和门禁，社区O2O，实现社区综合运营。保利物业，维科物业</div>
      <div class="artcle-imgs-box"></div>
      <div class="artcle-info word6 title4"></div>
      <div class="comment">
        <div class="comment-item bg3">和期待</div>
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
    .artcle-content
      padding 0 0.15rem
    .comment
      .comment-item
        padding 0 0.15rem
        line-height 0.4rem
</style>

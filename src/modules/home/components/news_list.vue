<template>
  <div class="news-list">
    <div class="news-item line3-b" v-for="(item,index) in list" :key="index">
      <h3 class="news-title word7">{{item.title}}</h3>
      <div class="imgs-box">
        <div v-for="(img,imgIndex) in item.img" :style="{height:item.img.length == 1 ? '1.55rem': '0.7rem'}" :key="imgIndex" class="imgs-item">
          <img :style="{width:(3.45/item.img.length - 0.08 * (item.img.length == 1 ? 0 : 1) + 'rem')}" :src="img" alt="">
        </div>
      </div>
      <div class="news-info word6 title4">
        <span class="news-tag" v-if="item.tag" :style="{color:item.tag.color,'border-color':item.tag.color}">{{item.tag.text}}</span>
        <span>{{item.author}}</span>
        <span>{{item.time}}</span>
        <span class="comment">{{item.comment}} 评论</span>
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
.news-list
  .news-item
    padding 0.05rem 0.15rem 0    
    &:active
      background-color #f4f4f4
    .news-title
      line-height 0.34rem
    .imgs-box
      display flex
      justify-content space-between
      .imgs-item
        position relative
        overflow hidden
        text-align center
        flex 1
        font-size 0
        &:first-of-type
          text-align left
        &:last-of-type
          text-align right
        img
          width 100%
    .news-info
      position relative
      line-height 0.34rem
      .news-tag
        border 1px solid #fff
        border-radius 2px
        padding 0 0.04rem
        margin-right 0.05rem
      .comment
        position absolute
        right 0
        top 0
</style>

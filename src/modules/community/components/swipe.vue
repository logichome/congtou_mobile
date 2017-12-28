<template>
  <div class="swipe">
    <ul>
      <li>
        <div class="subject-img" :style="{'background-image':'url(https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=834281519,698021359&fm=58)'}"></div>
        <div class="subject-info bg3">
          <p class="subject-info-title title3 word7 bold">今日话题</p>
          <p class="subject-info-count title4 word6">300000个主题</p>
          <p class="subject-info-enter title4 word2">进入</p>
        </div>
        <i class="subject-avatar"></i>        
      </li>
      <li>
        <div class="subject-img" :style="{'background-image':'url(https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=834281519,698021359&fm=58)'}"></div>
        <div class="subject-info bg3">
          <p class="subject-info-title title3 word7 bold">今日话题</p>
          <p class="subject-info-count title4 word6">300000个主题</p>
          <p class="subject-info-enter title4 word2">进入</p>
        </div>
        <i class="subject-avatar"></i>        
      </li>
      <li>
        <div class="subject-img" :style="{'background-image':'url(https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=834281519,698021359&fm=58)'}"></div>
        <div class="subject-info bg3">
          <p class="subject-info-title title3 word7 bold">今日话题</p>
          <p class="subject-info-count title4 word6">300000个主题</p>
          <p class="subject-info-enter title4 word2">进入</p>
        </div>
        <i class="subject-avatar"></i>        
      </li>
      <li>
        <div class="subject-img" :style="{'background-image':'url(https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=834281519,698021359&fm=58)'}"></div>
        <div class="subject-info bg3">
          <p class="subject-info-title title3 word7 bold">今日话题</p>
          <p class="subject-info-count title4 word6">300000个主题</p>
          <p class="subject-info-enter title4 word2">进入</p>
        </div>
        <i class="subject-avatar"></i>        
      </li>
      <li>
        <div class="subject-img" :style="{'background-image':'url(https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=834281519,698021359&fm=58)'}"></div>
        <div class="subject-info bg3">
          <p class="subject-info-title title3 word7 bold">今日话题</p>
          <p class="subject-info-count title4 word6">300000个主题</p>
          <p class="subject-info-enter title4 word2">进入</p>
        </div>
        <i class="subject-avatar"></i>        
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
.swipe
  margin-top 0.05rem
  width 100%
  overflow-x auto
  ul
    width 6.88rem
    li 
      float left
      position relative
      height 1.8rem
      width 1.2rem
      margin-right 0.22rem
      &:last-of-type
        margin-right 0
      .subject-img
        height 1rem
        background-size cover
        background-position center
      .subject-info
        height 0.8rem
        padding-left 0.1rem
        .subject-info-title
          padding-top 0.22rem
          padding-bottom 0.05rem
        .subject-info-count
          padding-bottom 0.1rem
      .subject-avatar
        position absolute
        height 0.38rem
        width 0.38rem
        left 0.08rem
        top 0.81rem
        background-image url('../static/imgs/shequ_huati_touxiang.png')
        background-size cover

</style>

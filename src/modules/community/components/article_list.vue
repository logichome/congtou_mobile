<template>
  <div class="artcle-list">
    <div class="article-item" v-for="(item,index) in list" :key="index">
      <h3 class="news-title word7">{{item.title}}</h3>
      <div class="imgs-box"></div>
      <div class="news-info word6 title4"></div>
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
</style>

<template>
  <div class="notice">
    <goback-nav></goback-nav>
    <h1>公告中心</h1>
    <ul class="tab-list word6 title3">
      <li :class="{word7:currentIndex === 0}">社区</li>
      <li :class="{word7:currentIndex === 1}">论坛</li>
    </ul>
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
</style>

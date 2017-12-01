<template>
  <div class="search-input">
    <img class="icon" :class="{focus:!modalShow}" src="../assets/images/community_sousuo.png" alt="">
    <form @submit="inputSubmit">
      <input type="search" v-model="searchContent" :placeholder="modalShow ? '' : '请输入搜索社区'" ref="input" @focus="modalShow = false" @blur="handleInputBlur">
    </form>
    <div class="modal" v-show="modalShow" @click="handleModalClick">
      请输入搜索社区
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchContent:'',
      modalShow:true
    }
  },
  methods:{
    handleModalClick(){
      this.$refs.input.focus()
    },
    handleInputBlur(){
      if(!this.searchContent){
        this.modalShow = true
      }
    },
    inputSubmit(){
      this.$emit('submit',this.searchContent)
    },
    inputChange(){
      this.$emit('change',this.searchContent)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.search-input
  position absolute
  top 0.06rem
  right 0.15rem
  height 0.28rem
  width 3.2rem
  background-color #f4f4f4
  border-radius 2px
  font-size 14px
  color #999
  form
    height 100%
    width 100%
  input
    background-color #f4f4f4
    border-radius 2px
    font-size 14px
    height 100%
    width 100%
    box-sizing border-box
    padding-left 0.3rem
  .modal
    position absolute
    top 0
    left 0
    text-align center
    height 100%
    width 100%
    line-height 0.28rem
  .icon
    position absolute
    transition left 0.2s
    top 0.02rem
    left 0.86rem
    width 0.22rem
    height 0.22rem
    &.focus
      left 0.03rem
</style>

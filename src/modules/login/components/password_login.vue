<template>
  <div class="password-login">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>用户登陆</h2>
    </div>
    <div class="input-box">
      <input type="tel" maxlength="11" placeholder="请输入手机号">
    </div>
    <div class="input-box">
      <input class="password-input"  onchange="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'')" :type="showPassword?'text':'password'" placeholder="请输入密码">
      <div class="show-password" @click="ChangeShowPassword">
        <img v-show="showPassword" src="../static/zhaohuimima_xianshi.png" alt="">
        <img v-show="!showPassword" src="../static/zhaohuimima_yincang.png" alt="">
      </div>
    </div>
    <div class="submit-box">
      <mt-button class="form-button" type="primary" size="large">下一步</mt-button>
    </div>
    <div class="reset-password-box">
      <div class="reset-password">忘记密码</div>
    </div>
  </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
export default {
  data () {
    return {
      showPassword:false
    }
  },
  methods:{
    ChangeShowPassword(){
      this.showPassword = !this.showPassword
    }
  },
  components:{
    gobackNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.password-login
  padding 0.5rem 0.15rem 0
  .title
    font-size 0.22rem
    margin-bottom 0.2rem
  .input-box
    position relative
    height 0.38rem
    background-color #F4F4F4
    margin-bottom 0.15rem
    input
      position absolute
      box-sizing border-box
      top 0
      left 0
      height 100%
      width 100%
      padding-left 0.09rem
      padding-right 0.09rem
      font-size 0.14rem
      background-color #F4F4F4
    .show-password
      position absolute
      top 0
      height 100%
      right 0.15rem
      width 0.25rem
      img
        position absolute
        top 50%
        transform translateY(-50%)
        width 100%
  .reset-password-box
    position relative
    line-height 0.44rem
    height 0.44rem
    font-size 0.14rem
    .reset-password
      position absolute
      top 0
      right 0
</style>

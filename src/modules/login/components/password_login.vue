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
      <input class="password-input" v-show="!showPassword" @input="handlePassword" v-model="form.password"  type="password" placeholder="请输入密码">
      <input class="password-input" v-show="showPassword" @input="handlePassword" v-model="form.password"  type="url" placeholder="请输入密码">
      <div class="show-password" @click="ChangeShowPassword">
        <img v-show="showPassword" src="../static/imgs/zhaohuimima_xianshi.png" alt="">
        <img v-show="!showPassword" src="../static/imgs/zhaohuimima_yincang.png" alt="">
      </div>
    </div>
    <div class="submit-box">
      <mt-button class="form-button" type="primary" size="large">下一步</mt-button>
    </div>
    <div class="reset-password-box">
      <router-link to="/login/reset_password" class="reset-password">忘记密码</router-link>
    </div>
  </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
export default {
  data () {
    return {
      showPassword:false,
      form:{
        phone:'',
        password:''
      }
    }
  },
  methods:{
    ChangeShowPassword(){
      this.showPassword = !this.showPassword
    },
    handlePassword(e){
      this.form.password=this.form.password.replace(/([\u4E00-\u9FA5]|\s)/g,'')
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
    margin-bottom 0.2rem
    h2
      font-size 0.22rem
      font-weight bold
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

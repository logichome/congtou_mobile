<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header">
      <h2 class="title">开启智慧社区
        <span class="title-version">5.0</span>
      </h2>
      <div class="title-text">您的专属“私人管家”</div>
      <div class="logo">
        <img src="../static/imgs/denglu_logo.png" alt="">
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 手机输入框 -->
      <div class="input-box">
        <input class="phone-input" v-model="form.phone" type="tel" maxlength="11" placeholder="请输入手机号">
        <mt-button @click="getCode" class="getcode-button" type="primary" size="normal">获取验证码</mt-button>
      </div>
      <!-- 验证码输入框 -->
      <div class="input-box">
        <input type="tel" maxlength="4" v-model="form.code" class="code-input" placeholder="请输入验证码">
      </div>
      <!-- 其他登陆按钮 -->
      <div class="other-type">
        <router-link to="/login/password_login" class="password-login">密码登陆</router-link>
        <router-link to="/login/invite_register" class="invite-register">邀请注册</router-link>
      </div>
      <!-- 提交按钮 -->
      <div class="form-button-box">
        <mt-button class="form-button" type="primary" size="large" @click="submit">登陆</mt-button>
        <router-link to="/login/register">
          <mt-button class="form-button" type="primary" size="large" plain>注册</mt-button>
        </router-link>
      </div>
      <!-- 服务协议 -->
      <div class="agreement">《葱头社区服务协议》</div>
      <!-- 三方登陆 -->
      <div class="third-login">
        <div class="third-login-title">OR</div>
        <div class="third-login-button-box">
          <div class="third-login-button"></div>
          <div class="third-login-button"></div>
          <div class="third-login-button"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Indicator,Toast  } from 'mint-ui';
import { verifyPhone,verifyCode } from '../static/js/form_verification'
export default {
  data() {
    return {
      form:{
        phone:'',
        code:''
      },
      gettingCode:false,
      submitLoading:false
    }
  },
  methods:{
    /**
     * 获取验证码
     */
    getCode(){
      if(!verifyPhone(this.form.phone)) return
      this.gettingCode = true
      Indicator.open({spinnerType:'fading-circle'});
      setTimeout(()=>{
        Toast({
          message: '已发送验证码',
          duration:2000
        });
        Indicator.close();
      },1000)
    },
    /**
     * 提交登陆表单
     */
    submit(){
      if (verifyPhone(this.form.phone) && verifyCode(this.form.code)){
        this.submitLoading = true
        this.$router.push('/select_community')
      }
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header 
  position: relative;
  height: 2.15rem;
  text-align: center;
  box-sizing: border-box;
  padding-top: 0.61rem;
  background-color: #2594cb;

  .title, .title-version, .title-text 
    line-height: 1;
    color: #fff;

  .title 
    font-size: 0.28rem;
  
  .title-version 
    margin-left: 0.07rem;
    font-size: 0.4rem;
  
  .title-text 
    margin-top: 0.3rem;
    font-size: 0.18rem;
  
  .logo 
    position: absolute;
    z-index 0
    height: 0.78rem;
    width: 0.78rem;
    top: 1.76rem;
    left: 50%;
    transform: translateX(-50%);

    img 
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

.content 
  padding: 0.59rem 0.15rem 0;
  .other-type
    position relative
    line-height 0.14rem
    height 0.14rem
    font-size 0.14rem
    .password-login
      position absolute
      top 0
      left 0
    .invite-register
      position absolute
      top 0
      right 0

  .form-button-box
    .form-button
      margin-top 0.2rem

  .agreement
    line-height 0.14rem
    height 0.14rem
    font-size 0.14rem
    margin-top 0.12rem
    text-align center
  
  .third-login
    margin-top 0.4rem
    padding-top 0.4rem
    border-top 1px solid #999
    position relative
    .third-login-title
      position absolute
      width 0.75rem
      background-color #fff
      top -0.07rem
      left 50%
      transform translateX(-50%)
      line-height 0.14rem
      height 0.14rem
      font-size 0.14rem
      text-align center
    .third-login-button-box
      position relative
      height 0.45rem
      .third-login-button
        position absolute
        top 0
        height 0.35rem
        width 0.35rem
        background-size contain
        &:nth-of-type(1)
          background-image url('../static/imgs/weixin.png')
          left 0.3rem
        &:nth-of-type(2)
          background-image url('../static/imgs/qq.png')
          left 1.55rem
        &:nth-of-type(3)
          background-image url('../static/imgs/weibo.png')
          right 0.3rem
</style>

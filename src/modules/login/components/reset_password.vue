<template>
  <div class="reset-password">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>找回密码</h2>
      <p class="desc">密码至少6位，且包含数字和字母</p>
    </div>
    <!-- 手机/邮箱输入框 -->
    <div class="input-box">
      <input type="tel" maxlength="11" v-show="resetType === 'phone'" placeholder="请输入手机号">
      <input type="url" maxlength="11" v-show="resetType === 'email'" placeholder="请输入邮箱地址">
      <mt-button @click="getCode" class="getcode-button" type="primary" size="normal">获取验证码</mt-button>
    </div>
    <!-- 验证码输入框 -->
    <div class="input-box">
      <input type="tel" maxlength="11" placeholder="请输入验证码">
    </div>
    <!-- 密码输入框 -->
    <div class="input-box">
      <input class="password-input" v-show="!showPassword" @input="handlePassword" v-model="form.password"  type="password" placeholder="请输入密码">
      <input class="password-input" v-show="showPassword" @input="handlePassword" v-model="form.password"  type="url" placeholder="请输入密码">
      <div class="show-password" @click="ChangeShowPassword">
        <img v-show="showPassword" src="../static/imgs/zhaohuimima_xianshi.png" alt="">
        <img v-show="!showPassword" src="../static/imgs/zhaohuimima_yincang.png" alt="">
      </div>
    </div>
    <!-- 提交按钮 -->
    <div class="submit-box">
      <mt-button class="form-button" type="primary" size="large">下一步</mt-button>
    </div>
    <!-- 其他找回方式 -->
    <div class="reset-type-box">
      <div class="reset-type" v-show="resetType === 'phone'" @click="resetType='email'">邮箱找回密码</div>
      <div class="reset-type" v-show="resetType === 'email'" @click="resetType='phone'">手机号找回密码</div>
    </div>
  </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
import { Indicator,Toast  } from 'mint-ui';
import { verifyPhone,verifyCode,verifyPassword } from '../static/js/form_verification'
export default {
  data () {
    return {
      showPassword:false,
      resetType:'phone',
      form:{
        phone:'',
        code:'',
        password:''
      }
    }
  },
  methods:{
    /**
     * 更改密码显示方式
     */
    ChangeShowPassword(){
      this.showPassword = !this.showPassword
    },
    /**
     * 处理密码框中文
     */
    handlePassword(e){
      this.form.password=this.form.password.replace(/([\u4E00-\u9FA5]|\s)/g,'')
    },
    /**
     * 获取验证码
     */
    getCode(){
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
     * 提交表单
     */
    submit(){

    }
  },
  components:{
    gobackNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reset-password
  padding 0.5rem 0.15rem 0
  .title
    margin-bottom 0.15rem
    h2
      font-size 0.22rem
      font-weight bold
    .desc
      font-size 0.14rem
      line-height 0.14rem
      color #666
      margin-top 0.07rem
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
    .getcode-button
      position absolute
      top 0.05rem
      right 0.05rem
      width auto
      height 0.28rem
      border-radius 0
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
  .reset-type-box
    position relative
    line-height 0.44rem
    height 0.44rem
    font-size 0.14rem
    .reset-type
      position absolute
      top 0
      right 0
</style>

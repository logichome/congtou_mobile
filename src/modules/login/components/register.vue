<template>
  <div class="register">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>用户注册</h2>
    </div>
    <div class="input-box">
      <input type="tel" maxlength="11" placeholder="请输入手机号">
      <mt-button @click="getCode" class="getcode-button" type="primary" size="normal">获取验证码</mt-button>
    </div>
    <div class="input-box">
      <input type="tel" maxlength="11" placeholder="请输入验证码">
    </div>
    <div class="input-box">
      <!-- <input class="password-input" onchange="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'')"  :type="showPassword?'text':'password'" placeholder="请输入设置密码"> -->
      <input class="password-input" v-show="!showPassword" v-model="form.password"  type="password" placeholder="请输入密码">
      <input class="password-input" v-show="showPassword" @input="handlePassword" v-model="form.password"  type="url" placeholder="请输入密码">
      <div class="show-password" @click="ChangeShowPassword">
        <img v-show="showPassword" src="../static/imgs/zhaohuimima_xianshi.png" alt="">
        <img v-show="!showPassword" src="../static/imgs/zhaohuimima_yincang.png" alt="">
      </div>
    </div>
    <div class="submit-box">
      <mt-button class="form-button" @click="$router.push('/login/complete_info')" type="primary" size="large">下一步</mt-button>
    </div>
    <div class="agreement">《葱头社区服务协议》</div>
  </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
import { Indicator,Toast  } from 'mint-ui';
export default {
  data () {
    return {
      showPassword:false,
      form:{
        phone:'',
        code:'',
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
    },
    getCode(){
      Indicator.open({spinnerType:'fading-circle'});
      setTimeout(()=>{
        Toast({
          message: '已发送验证码',
          duration:2000
        });
        Indicator.close();
      },1000)
    }
  },
  components:{
    gobackNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.register
  padding 0.5rem 0.15rem 0
  .title
    margin-bottom 0.2rem
    h2
      font-size 0.22rem
      font-weight bold
  .agreement
    line-height 0.14rem
    height 0.14rem
    font-size 0.14rem
    margin-top 0.12rem
    text-align center
</style>

<template>
 <div class="bind-phone">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>绑定手机号</h2>
    </div>
    <!-- 手机号输入框 -->
    <div class="input-box">
      <input type="tel" v-model="form.phone" maxlength="11" placeholder="请输入手机号">
      <mt-button @click="getCode" class="getcode-button" type="primary" size="normal">获取验证码</mt-button>
    </div>
    <!-- 验证码输入框 -->
    <div class="input-box">
      <input type="tel" v-model="form.code" maxlength="11" placeholder="请输入验证码">
    </div>
    <!-- 提交按钮 -->
    <div class="submit-box">
      <mt-button class="form-button" @click="$router.push('/login/complete_info')" type="primary" size="large">下一步</mt-button>
    </div>
 </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
import { Indicator,Toast  } from 'mint-ui';
import { verifyPhone,verifyCode } from '../static/js/form_verification'
export default {
  data () {
    return {
      form:{
        phone:'',
        code:''
      }
    }
  },
  methods:{
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
      verifyPhone(this.form.phone)
      verifyCode(this.form.code)
    }
  },
  components:{
    gobackNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bind-phone
  padding 0.5rem 0.15rem 0
  .title
    font-size 0.22rem
    margin-bottom 0.2rem
    h2
      font-weight bold
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
</style>

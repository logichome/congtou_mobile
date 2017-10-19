<template>
  <div class="invite-register">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>邀请注册</h2>
    </div>
    <div class="input-box">
      <input v-model="inviteCode" type="tel" maxlength="11" placeholder="请输入邀请码">
    </div>
    <div class="submit-box">
      <mt-button class="form-button" @click="$router.push('/login/register_bind_phone')" type="primary" size="large">下一步</mt-button>
    </div>
    <div class="chose-qrcodde-box">
      <div class="chose-qrcodde">
        <span>选择二维码图片</span>
        <input type="file" accept="image/*" @change="getQrcode" />
      </div>
    </div>
  </div>
</template>
<script>
import { Toast,Indicator } from 'mint-ui';
import gobackNav from '@/components/goback_nav'
import QrCode from 'qrcode-reader'
export default {
  data () {
    return {
      inviteCode:''
    }
  },
  methods:{
    getQrcode(e){
      Indicator.open({spinnerType:'fading-circle'});
      let qr = new QrCode();
      qr.callback = (error, result) => {
        Indicator.close();
        if(error) {
          Toast('请选择清晰的二维码图片');
          return;
        }
        this.inviteCode = result.result
      }
      let file = e.target.files[0] || e.dataTransfer.files[0];
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        qr.decode(e.target.result);
      }
    }
  },
  components:{
    gobackNav,
    
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.invite-register
  padding 0.5rem 0.15rem 0
  .title
    margin-bottom 0.2rem
    h2
      font-size 0.22rem
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
  .chose-qrcodde-box
    position relative
    line-height 0.44rem
    height 0.44rem
    font-size 0.14rem
    .chose-qrcodde
      position absolute
      top 0
      right 0
    input
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      opacity: 0
</style>

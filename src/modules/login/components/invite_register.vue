<template>
  <div class="invite-register">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>邀请注册</h2>
    </div>
    <div class="input-box">
      <input type="tel" maxlength="11" placeholder="请输入邀请码">
    </div>
    <div class="submit-box">
      <mt-button class="form-button" type="primary" size="large">下一步</mt-button>
    </div>
    <div class="chose-qrcodde-box">
      <div class="chose-qrcodde">
        <span>选择二维码图片</span>
        <input type="file" accept="image/*" @change="getQrcode" />
      </div>
    </div>
    {{result}}
  </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
import QrCode from 'qrcode-reader'
export default {
  data () {
    return {
      result:'000'
    }
  },
  methods:{
    getQrcode(e){
      let qr = new QrCode();
      qr.callback = (error, result) => {
        if(error) {
          console.log(123,error)
          return;
        }
        this.result = result.result
        console.log(result)
      }
      let file = e.target.files[0] || e.dataTransfer.files[0];
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = e => {
        qr.decode(e.target.result);

        console.log(e.target.result)
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

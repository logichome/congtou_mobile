<template>
  <div class="complete-info">
    <goback-nav></goback-nav>
    <div class="title">
      <h2>完善个人信息</h2>
    </div>
    <div class="avatar-box">
      <div class="avatar" :style="avatarUrl ? {'background-image':'url('+avatarUrl+')'} : ''">
        <input type="file" accept="image/*" @change="getAvatar"/>
      </div>
    </div>
    <div class="sex-box">
      <div class="sex-item" @click="form.sex = 'male'" :class="{'sex-active':form.sex === 'male'}">先生</div>
      <div class="sex-item" @click="form.sex = 'female'" :class="{'sex-active':form.sex === 'female'}">女士</div>
    </div>
    <div class="input-box">
      <input type="text" maxlength="10" placeholder="请输入真实姓名">
    </div>
    <div class="input-box">
      <input type="text" maxlength="10" placeholder="请输入昵称">
    </div>
    <div class="submit-box">
      <mt-button class="form-button" type="primary" size="large">完成</mt-button>
    </div>
  </div>
</template>
<script>
import gobackNav from '@/components/goback_nav'
export default {
  data () {
    return {
      avatarUrl:'',
      form:{
        sex:'male'
      }
    }
  },
  methods:{
    /**
     * 获取并上传头像
     */
    getAvatar(e){
      let file = e.target.files[0] || e.dataTransfer.files[0];
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = readerEvent => {
        this.avatarUrl = readerEvent.target.result;
      }
      let formData = new FormData();
      formData.append('file',file);
      this.$api.login.uploadAvatar(formData,progressEvent => {
        console.log(progressEvent)
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components:{
    gobackNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.complete-info
  padding 0.5rem 0.15rem 0
  .title
    margin-bottom 0.2rem
    h2
      font-size 0.22rem
      font-weight bold
  .avatar-box
    position relative
    height 0.75rem
    margin-bottom 0.1rem
    .avatar
      position absolute
      top 0
      left 50%
      transform translateX(-50%)
      height 0.75rem
      width 0.75rem
      border-radius 50%
      overflow hidden
      background-size cover
      background-image url('../static/imgs/wanshanxinxi_touxiang.png')
      input
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: 0
  .sex-box
    text-align center
    margin-bottom 0.15rem
    .sex-item
      display inline-block
      height 0.24rem
      color #2594cb
      line-height 0.26rem
      width 0.5rem
      border-radius 3px
      border 0.01rem solid #2594cb
      &:nth-of-type(2)
        margin-left 0.15rem
    .sex-active
      color #fff
      background-color #2992cb
      border 0.01rem solid #2992cb
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
</style>

<template>
  <h2>welcome</h2>
</template>
<script>
import api from '@/api'
export default {
  data () {
    return {
    }
  },
  methods:{
    getInfo(){
      api.login.getUserInfo({id:1})
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created(){
    this.$router.push('/login')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>

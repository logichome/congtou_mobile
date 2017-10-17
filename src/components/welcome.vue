<template>
  <h2>welcome</h2>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  methods:{
    getInfo(){
      this.$api.login.getUserInfo({id:1})
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created(){
    this.getInfo()
    this.$router.push('/login')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>

<template lang="pug">
  .error
    div
      div.flexbox.center
        //- img(:src='errorPage')
      .text 数据加载出错，请检查您的网络状态
      //- div.flexbox.center
      //-   .reloadBtn(@click='reloadPage()') 重新加载
</template>

<script>
export default {
  name: 'Error',
  props: {
  },
  data () {
    return {
      reload: false
      // errorPage: require('~assets/img/errorPage.png')
    }
  },
  activated () {
    if (this.reload) {
      this.fetchData()
    }
  },
  watch: {
    '$route': 'isReload'
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {

  },
  methods: {
    fetchData () {

    },
    reloadPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
  .error
    overflow-y auto
    overflow-x hidden
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background-color #f5f5f5
    >div
      width 100%
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img
        width 15rem
        height 14rem
      .text
        margin-top 1rem
        color #999
        font-size 1.3rem
        text-align center
      .reloadBtn
        margin-top 0.5rem
        width 8rem
        padding 0.7rem 0
        text-align center
        color #fff
        background-color #526EDC
        border-radius 6px

</style>

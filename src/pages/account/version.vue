<template lang="pug">
  main.main.main-version
    c-title
    .header(v-show='showLoginUrl')
      .versionInfo
        img(:src="logo")
        p.versionNum 版本编号 {{versionNum}}
        p.updateTime 更新时间 {{updateTime}}
    .versionCon(v-for="list of lists")
      h3.title
        span.titIcon
        span {{list.title}}
      ul.list
        li(v-for="item of list.listCon") {{item}}
</template>
<style lang="stylus">
.main-version
  font-size 1.3rem
  .header
    height 7.5rem
    color #333
    background #fff
    padding 1.9rem 0 2rem
    margin-bottom 1rem
    text-align center
    .versionInfo
      display inline-block
      position relative
      width 19.5rem
      height 7.5rem
      margin-left: -1rem;
      img
        width 19.5rem
        height 7.5rem
      p
        text-align left
        font-size 1.1rem
        color #666
        width 11rem
        height 1.8rem
        left 8.66rem
        overflow hidden
      .versionNum
        position absolute
        bottom 1.6rem
        letter-spacing 0.21rem
      .updateTime
        position absolute
        bottom 0.1rem
  .versionCon
    padding 1.1rem 1.5rem 2rem 1.5rem
    background #fff
    .title
      height 26px
      margin-bottom 10px
      line-height 26px
      color #333
      font-size 1.25rem
      span
        float left
      .titIcon
        width 0.4rem
        height 1.2rem
        background #333
        border-radius 0.2rem
        margin 0.5rem 0.65rem 0 0
    .list
      border-top 1px solid #eee
      padding-top 10px
      li
        font-size 1.3rem
        color #999
        line-height 1.8rem
      li:not(:last-child)
        margin-bottom 1.35rem
  .versionCon:not(:last-child)
    margin-bottom 1rem

</style>
  
<script>
  export default {
    name: 'Version',
    data() {
      return {
        // logo: require('~assets/img/version.png'),
        versionNum: 'V 1.1.2',
        updateTime: '2018-5-10',
        showLoginUrl: true,
        lists: [
          {
            title: '功能升级',
            listCon: [
              "a. 完善货币基金的持仓和赎回，让货币基金的交易流程更流畅。"
            ]
          },
          {
            title: '体验优化',
            listCon: [
              "a. 多处繁冗文案进行了优化，更直白易懂；",
              "b. 名称样式进行了统一，增强了可读性。"
            ]
          }
        ]
      };
    }
  };
</script>

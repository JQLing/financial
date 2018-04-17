<template lang="pug">
.page.account_page
  .header(v-show='showLoginUrl')
    .img
      img.head(:src='xiaotai')
    .tel {{mobile}}
  .body
    ul
      li(@click='goMyCard')
        .title 我的银行卡
        i.icon.icon-more
      //- li(v-show='showLoginUrl',@click='goAccount')
      //-   .title 密码管理
      //-   i.icon.icon-more
    ul
      li(@click='goQa')
        .title 常见问题
        i.icon.icon-more
      li(@click='goVersion')
        .title 版本信息
        i.icon.icon-more
  .exit(v-show='showLoginUrl',@click='logout()')
    span 退出登录
</template>

<style src="./account.styl" lang="stylus" scoped></style>
<script>
export default {
  name: 'Fund',
  data () {
    return {
      showLoginUrl: '',
      mobile: '',
      xiaotai: ''
    }
  },
  beforeMount() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    fetchData () {
      // var fundId = this.$route.query.id;
      // // let fundId = this.$route.params;
      // let param = {
      //   fundId: fundId
      // };
      // // ---------------------- vuex未写
      // this.$store.dispatch('ajax', {
      //   getFund: param
      // }).then(r => {
      //   this.commonName = r.showapi_res_body.data.commonName;
      //   this.buyRate = r.showapi_res_body.data.buyRate
      // })
    },
    goMyCard() {},
    goQa() {},
    goVersion()
  }
}
</script>

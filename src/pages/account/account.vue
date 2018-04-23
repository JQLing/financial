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
      li(@click='goAccount')
        .title 密码管理
        i.icon.icon-more
    ul
      li(@click='goQa')
        .title 常见问题
        i.icon.icon-more
      li(@click='goVersion')
        .title 版本信息
        i.icon.icon-more
  .exit(@click='logout')
    span 退出登录
</template>

<style src="./account.styl" lang="stylus" scoped></style>
<script>
export default {
  name: 'Account',
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
    fetchData () {},
    goMyCard () {
      this.$router.push({
        name: 'Mycard'
      })
    },
    goQa () {
      this.$router.push({
        name: 'FAQ'
      })
    },
    goVersion () {
      this.$router.push({
        name: 'Version'
      })
    },
    logout () {}
  }
}
</script>

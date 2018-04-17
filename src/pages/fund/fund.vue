<template lang="pug">
.page.fund_page
  .header
    h3 {{commonName}}

</template>

<style src="./fund.styl" lang="stylus" scoped></style>
<script>
export default {
  name: 'Fund',
  data () {
    return {
      commonName: '',
      buyRate: ''
    }
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {
      var fundId = this.$route.query.id
      // let fundId = this.$route.params;
      this.$store.dispatch('ajax', {
        getFund: {
          fundId: fundId
        }
      }).then(r => {
        this.commonName = r.showapi_res_body.data.commonName
        this.buyRate = r.showapi_res_body.data.buyRate
      })
    }
  }
}
</script>

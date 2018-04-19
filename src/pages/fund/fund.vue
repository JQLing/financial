<template lang="pug">
.page.fund_page
  .header
    p.fundTitle {{commonName}}
    p.fundInfo ({{fundCode}})货币型 | 较低风险
    .data.clearfix |
      .rate.fl
        p.impNum.bold.red {{buyRate}}
        p.fundInfo 近7日年化收益率
      .centerline.fl
      .val.fr
        p.impNum.bold {{newVal}}
        p.fundInfo 万份收益
  .chart
    .fundChart
      p 图表暂未实现....
    ul.tab.clearfix
      li.active 7天
      li 1个月
      li 2个月
  .expand
    .classTitle
      span.titleLine
      span 基金小课堂
    .classroom.clearfix
      img.classPic.fl(src = '')
      .roomTitle.fl
        p.titleText {{expand.title}}
        p.contText {{expand.cont}}
    p.opp
      span {{opp}}
      i.icon
  .manager
    .classTitle
      span.titleLine
      span 基金经理
    ul.tab.clearfix
      li.active 陈东
      li 董元星
    .intro
      img.fl(src='')
      .personIntro
        .name {{}}
        .date 任职日期： {{}}
        .repay 任职回报： {{}}
</template>

<style src="./fund.styl" lang="stylus" scoped></style>
<script>
export default {
  name: 'Fund',
  data () {
    return {
      fundCode: '',
      commonName: '华夏基金财富宝',
      buyRate: '4.6580%',
      newVal: '1.3178',
      expand: {
        title: '基金涨了很多之后还能涨吗？',
        cont: `这个是典型的“股票思维”，买基金其实跟买单只股票不一样，基金经理觉得某只股票涨了很多，超出合理价格就会把这个股票换成价格低有更大上涨空间的股票，除非市场上找不到价格偏低的股票。
涨了很多的基金，还会不会涨更多，考虑以下几点：
A.是不是处在牛市的相对高位，如果是的话，要慎重。如果不是，看基金经理能力；
B.是不是周期行业的指数基金，如果是的话，该行业是不是面临短期调整的风险。`
      },
      opp: '展开',
      person: [
        {
          img: '',
          name: '陈东',
          date: '2017-11-22 ~ 至今',
          repay: '5.76%'
        },
        {
          img: '',
          name: '董元星',
          date: '2013-10-16 ~ 至今',
          repay: '28.60%'
        }
      ]
    }
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {
      this.fundCode = this.$route.query.id
      // let fundCode = this.$route.params;
      // this.$store.dispatch('ajax', {
      //   getFund: {
      //     fundCode: this.fundCode
      //   }
      // }).then(r => {
      //   this.commonName = r.showapi_res_body.data.commonName
      //   this.buyRate = r.showapi_res_body.data.buyRate
      // })
    }
  }
}
</script>

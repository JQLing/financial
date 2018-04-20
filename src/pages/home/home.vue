<template lang="pug">
.page.home_page
  .header.clearfix.space
    //- logo
    .home_logo.fl
      span.financing 理财
      span.split_line |
      span 官方理财平台
    //- scroll_board
    .scroll_board.fr
      i.icon.icon_alert
      ul.slide_wrap
        li(v-for="(item, index) in board_msg"  :key="index") {{item}}
  //- 导航条
  ul.nav.clearfix
    li.fl(v-for="(item, index) in nav_list"  :key="index")
      //- router-link(:to="{name: '" + item.url + "'}") {{item.title}}
      router-link(:to="{name: item.url}"  :class="{'active': !index }") {{item.title}}
  //- 理财专区
  ul.fund.space
    li.title
      span.line
      span 理财专区
    li.clearfix(v-for="(val, index) in fund_class"  :key="index")
      .fund_class_title.fl
        p.suptit {{val.title}}
        p.subtit {{val.tip}}
      table.fund_class_list.fl
        thead
          tr.tab_tit
            th(v-for="(v, i) in val.list"  :key="i") {{v}}
        tbody
          tr(v-for="(v, i) in val.data"  :key="i" @click="goFund(v.id)")
            td {{v.name}}
            td.bold {{v.per}}
            td.bold {{v.val}}
            td {{v.opp}}
            //- router-link(:to="{name: 'Fund'}" tag="td") {{v.name}}
            //- router-link.per.bold(:to="{name: 'Fund'}" tag="td") {{v.per}}
            //- router-link.bold(:to="{name: 'Fund'}" tag="td") {{v.val}}
            //- router-link(:to="{name: 'Fund'}" tag="td") {{v.opp}}
        tfoot
         tr
          td
          td
          td
          td.more 查看更多 >>
  .footer
    p 理财提醒您：投资有风险，理财需谨慎！
    p.copyright 免责声明 | 京ICP证080047号 京公网安备110000000006号
</template>

<style src="./home.styl" lang="stylus" scoped></style>
<script>
// import "../../style/mixins/variables"
export default {
  name: 'Home',
  data () {
    return {
      board_msg: [
        '你想了解的银行产品都在这里哦',
        '安全贷款常识，你了解多少',
        '易通贷新手享1088元红包'
      ],
      nav_list: [
        {title: '首页', url: ''},
        {title: '基金', url: ''},
        {title: '定期', url: ''},
        {title: '帮助', url: ''},
        {title: '登录', url: 'Login'}
      ],
      fund_class: [
        {
          title: '货币基金',
          tip: '低风险，更灵活',
          list: ['基金名称', '近七日年化', '万份收益（元）', '产品期限'],
          data: [
            {id: '000343', name: '华夏基金财富宝', per: '4.6580%', val: '1.3178', opp: '随买随取'},
            {id: '000343', name: '易方达基金易理财', per: '4.4280%', val: '1.1806', opp: '随买随取'},
            {id: '000343', name: '汇添富基金全额宝', per: '4.2660%', val: '1.1479', opp: '随买随取'},
            {id: '000343', name: '南方基金现金通E', per: '4.3720%', val: '1.1816', opp: '随买随取'}
          ]
        },
        {
          title: '保险产品',
          tip: '中风险，新产品',
          list: ['产品名称', '年化收益率', '万份收益（元）', '产品期限'],
          data: [
            {id: '000343', name: '国寿嘉年天天盈', per: '4.6570%', val: '1.2221', opp: '随买随取'},
            {id: '000343', name: '太平养老颐养天天', per: '4.6520%', val: '1.3486', opp: '随买随取'},
            {id: '000343', name: '平安养老富盈5号', per: '4.1796%', val: '1.2197', opp: '随买随取'},
            {id: '000343', name: '国寿嘉年月月盈', per: '4.7990%', val: '1.2854', opp: '1个月'}
          ]
        },
        {
          title: '定期产品',
          tip: '低风险',
          list: ['基金名称', '近七日年化', '万份收益（元）', '产品期限'],
          data: [
            {id: '000343', name: '招商招利月度理财', per: '4.3990%', val: '1.1915', opp: '1个月'},
            {id: '000343', name: '民生加银理财月度', per: '4.7570%', val: '1.3145', opp: '1个月'},
            {id: '000343', name: '银华双月理财', per: '4.7950%', val: '1.2937', opp: '1个月'},
            {id: '000343', name: '南方基金现金通', per: '4.8060%', val: '1.1816', opp: '1个月'}
          ]
        },
        {
          title: '券商产品',
          tip: '投资有风险，理财需谨慎',
          list: ['产品名称', '年化收益率', '产品期限', '风险等级'],
          data: [
            {id: '000343', name: '中信证券天天利财双月盈', per: '4.5000%', val: '56天', opp: '低风险'},
            {id: '000343', name: '中信证券天天利财月月盈', per: '4.0000%', val: '28天', opp: '低风险'},
            {id: '000343', name: '中信证券天天利财双周盈', per: '3.8000%', val: '14天', opp: '低风险'},
            {id: '000343', name: '中信证券天天利财周周盈', per: '3.5000%', val: '7天', opp: '低风险'}
          ]
        }
      ]
    }
  },
  methods: {
    init () {},
    goFund (id) {
      this.$router.push({
        name: 'Fund',
        params: {id: id},
        query: {id: id}
      })
    }
  }
}
</script>

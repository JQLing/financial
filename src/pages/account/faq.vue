<template lang="pug">
  .page.fqa_page
    ul
      li(v-for="qa of list")
        .head(@click='toggleQaShow(qa)')
          .title {{qa.title}}
          i.icon(:class='[qa.show ? "icon-arrow-up" : "icon-arrow-down"]')    
        .body(v-for="qainfo of qa.quesList", :class='{"hidden": !qa.show}')
          .question(@click='toggleQaShow(qainfo)') {{qainfo.question}}
          .answer(:class='{"hidden": !qainfo.show}') {{qainfo.answer}}
            .answerNum(v-for='item of qainfo.answerNum', :class='{"hidden": !qainfo.show}') {{item}}
            .header(v-if='qainfo.on') {{qainfo.head}}
            .table(v-if='qainfo.on') {{qainfo.tab}}
            ul(v-if='qainfo.on')
              li.table(v-for='it of qainfo.its')
                div {{it.apply}}
                div {{it.sure}}
                div {{it.date}}    
            .footer(v-if='qainfo.on') {{qainfo.foot}}       
</template>
<style lang="stylus" src="./faq.styl"></style>

<script>
  export default {
    name: 'FAQ',
    data() {
      return {
        list: [
          {
            show: false,
            title: '基金入门',
            quesList: [
              {
                show: false,
                question: 'Q:基金是什么？',
                answer: '基金从广义上说，基金是指为了某种目的而设立的具有一定数量的资金。主要包括信托投资基金、公积金、保险基金、退休基金，各种基金会的基金。人们平常所说的基金主要是指证券投资基金。证券投资基金是一种利益共享、风险共担的集合证券投资方式即通过发行基金证券，集中投资者的资金，交由基金托管人托管，由基金管理人管理，主要投资于股票、债券等金融工具的投资,以获得投资收益和资本增值。是通过汇集众多投资者资金，交给银行保管，由专业的基金管理公司负责投资于股票和债券等证券，以实现保值增值目的的一种投资工具。'
              },
              {
                show: false,
                question: 'Q:基金分类有哪些？',
                answer: '开放式基金种类虽多，但按其投资目标、投资对象以及投资策略的不同大致可以分为以下四种基本类型： ',
                answerNum:[
                  "(1) 股票基金：主要投资于股票，高风险高收益。",
                  "(2) 混合基金：分散投资于股票、债券和货币市场工具，风险和收益水平都适中。",
                  "(3) 债券基金：主要投资于债券，以获取固定收益为目的。风险和收益都较股票型基金小得多。",
                  "(4) 货币市场基金：仅仅投资于货币市场工具，收益稳定，风险极低。"
                ]
              },
              {
                show: false,
                question: 'Q:基金账户是什么？',
                answer: '基金账户又称TA基金账户（Transaction Account 简称TA基金账户），是指注册登记人为投资人建立的用于管理和记录投资人交易该注册登记人所注册登记的基金种类、数量变化情况的账户。'
              },
              {
                show: false,
                question: 'Q:定投是什么？',
                answer: '基金定投申购业务是在一定的投资期间内投资人定额申购某只基金产品的业务，分为3年期和5年期。基金管理公司接受投资人的基金定投申购业务申请后，基金代销机构将根据投资人的要求在某一固定期间（以月为最小单位），从投资人指定的资金账户内扣划固定的申购款项。'
              }
            ]
          },
          {
            show: false,
            title: '基金风险',
            quesList: [
              {
                show: false,
                question: 'Q:购买基金为什么要做风险测试问卷？',
                answer: '风险测试问卷有助于您更清楚的了解您的资产和风险偏好承受能力，有助于您更好的投资证券投资基金。'
              },
              {
                show: false,
                question: 'Q:风险承受能力与哪些方面有关？',
                answer: '一般来说投资者的风险承受能力与投资者年龄、收入、负债和投资期限有关。'
              },
              {
                show: false,
                question: 'Q:投资基金有哪些风险？',
                answer: '投资证券基金有资本市场价格（股价和债券价格）下跌风险，基金经理投资失误等等风险。'
              }
            ]
          },
          {
            show: false,
            title: '交易相关问题',
            quesList: [
              {
                show: false,
                question: 'Q:支持哪些银行卡，银行卡支付限额是多少？',
                answer: '',
                path: 'selectcard',
                param: {
                  isView: 1
                }
              },
              {
                show: false,
                question: 'Q:什么是T日？',
                answer: 'T日是指基金交易业务申请的交易日。T日以沪深交易所正常交易的交易日收市时间为界，以每个交易日15:00为界限，15:00之前为T日，之后为T+1日，周末和法定节假日不属于交易日。用户T日申请，将按T日基金净值确认份额，T+1日份额确认成功，当日基金净值更新后即可查看首笔盈亏。如遇法定节假日确认时间顺延；QDII比普通基金晚一个交易日确认。'
              }
            ]
          },
          {
            show: false,
            title: '基金申购赎回相关问题',
            quesList: [
              {
                show: false,
                question: 'Q:基金交易过程有哪些费用？',
                answer: '基金交易过程向投资人收取的费用有申购费（认购费）和赎回费。其中购买基金过程一般称为申购，申购需要支付申购费。在新发基金正式成立之前的募集期内购买基金的行为称为认购，认购需要支付认购费。而将持有基金份额卖出的过程一般称为赎回，赎回将手续赎回费用。'
              },
              {
                show: false,
                question: 'Q:基金申购和赎回的净值以哪天计算?',
                answer: '如果您是交易日15:00之前申购（赎回）的基金,按当天基金净值计算,如果是交易日15:00以后申购（赎回）的基金（包括非交易日提交的申请），按下一个交易日基金净值计算。'
              },
              {
                show: false,
                question: 'Q:基金申购和赎回，多长时间能确认？',
                answer: '',
                on: true,
                head:'国内基金T+1确认，QDII基金T+2确认。T指交易日即中国股市开市交易的日子（周六日和法定节假日一般都是非交易日）。交易日15:00前算当日提交，15:00后视为下一个交易日提交。',
                tab: '下表作为参考，仅针对T+1确认的情况，T+2确认需要再延后一个交易日。',
                its: [
                  {
                    apply:'申购/赎回时间',
                    sure: '确认',
                    date: '查看收益'
                  },
                  {
                    apply:'周一15:00后－周二15:00',
                    sure: '周三17:00',
                    date: '周四'
                  },
                  {
                    apply:'周二15:00后－周三15:00',
                    sure: '周四17:00',
                    date: '周五'
                  },
                  {
                    apply:'周三15:00后－周四15:00',
                    sure: '周五17:00',
                    date: '下周一'
                  },
                  {
                    apply:'周四15:00后－周五15:00',
                    sure: '下周一17:00',
                    date: '下周二'
                  },
                  {
                    apply:'周五15:00后－下周一15:00',
                    sure: '下周二17:00',
                    date: '下周三'
                  }
                ],
                foot: '如遇法定节假日股市闭市，则确认时间顺延。'
              },
              {
                show: false,
                question: 'Q:基金赎回的到账时间？',
                answer: '基金赎回包括两个时间段：赎回确认时间+资金到账时间。一般基金赎回是T+1个工作日确认，T+2个工作日可以查询确认结果。赎回到账时间：货币基金为T+1个工作日到账，QDII基金为T+6~7个工作日到账，其他基金产品一般为T+3个工作日到账，具体以银行到账时间为准。'
              }
            ]
          },
          {
            show: false,
            title: '基金的收益与分红',
            quesList: [
              {
                show: false,
                question: 'Q:什么是基金分红？',
                answer: '基金分红是指基金将收益的一部分以现金或折算成基金份额的形式派发给投资人，这部分收益原来就是基金份额净值的一部分。'
              },
              {
                show: false,
                question: 'Q:现金分红的现金分到哪里了？',
                answer: '现金分红的资金一般会在红利发放日当天划入您购买该基金时所用的银行卡。'
              },
              {
                show: false,
                question: 'Q:分红后基金净值下降会造成损失吗？',
                answer: '基金分红是将基金投资收益分配给投资人，这部分收益是基金单位净值的一部分，所以分红后基金净值也就下降了。由于分红得到现金，所以实际上你并没有损失。'
              }
            ]
          }, 
        ]
      };
    },
    activated() {
      if (this.reload) {
        this.list.forEach(v => {
          v.show = false;
          v.quesList.forEach(it => {
            it.show = false;
          })
        });
      }
    },
    methods: {
      isReload(to, from) {
        if (to.name === 'account') {
          this.reload = true;
        } else {
          this.reload = false;
        }
      },
      toggleQaShow(qa) {
        if (qa.path) {
          this.$router.push({
            name: qa.path,
            query: qa.param
          });
        } else {
          qa.show = !qa.show;
        }
      }
    }
  };
</script>

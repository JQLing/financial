<template lang="pug">
.page.mycard_page
  ul.card
    li(v-for="(val, index) in card"  :key="index") 
      p.card_num {{val.num}}
    li.add_card(@click="goAddCard") + 添加银行卡
</template>

<style src="./mycard.styl" lang="stylus" scoped></style>
<script>
export default {
  name: 'Mycard',
  data () {
    return {
      card: [
        {num: '**** **** **** 4444'}
      ]
    }
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {},
    goAddCard () {
      this.$router.push({name: 'AddCard'});
    }
  }
}
</script>
 
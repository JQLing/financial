<template lang="pug">
.page.addCard_page
  form
    ul
      li
        .title 卡号
        input.cardno(ref='cardno', type='tel', placeholder='您名下的银行卡号', v-model='cardno', maxlength='19', @focus='handFocus(0)')
        //- div.clear(v-show='cardno!="" && cardnoFocus', @click='clear(0)')
        //-   i.icon.icon-is-close
    ul
      li
        .title 姓名
        input(type='text', placeholder='持卡人姓名', v-model='name', @focus='handFocus(1)', :readonly="isReadOnly", :class='{disabled : isReadOnly}')
        //- div.clear(v-show='name!="" && nameFocus && !isReadOnly', @click='clear(1)')
        //-   i.icon.icon-is-close
      li
        .title 身份证
        input(type='text', placeholder='持卡人身份证号', v-model='identitycode', @focus='handFocus(2)' , :readonly="isReadOnly", :class='{disabled : isReadOnly}')
        //- div.clear(v-show='identitycode!="" && identitycodeFocus && !isReadOnly', @click='clear(2)')
        //-   i.icon.icon-is-close
    .btns
      .btn.btn-primary(@click='checkCardNo("1")', :class='{"btn--disable": !canAdd}')
        span 下一步
  .submit-box(v-if='submitModel')
    .bg
    .input-box
      .title
        span {{isFirst?"设置交易密码并完成添加":"输入交易密码并完成添加"}}
        span.closepop(@click='submitCancel')
          i.icon.icon-is-close
      .password-box(v-if='!passwordFinished')
        .password-tips(v-if='pwd != ""') 请再次输入确认交易密码
        password(v-on:finish='finishPassword', ref='password')
        .forget(@click='goForgetTransPwd') 忘记密码?
</template>

<style src="./addCard.styl" lang="stylus" scoped></style>
<script>
export default {
  name: 'AddCard',
  data () {
    return {
      cardno: '',
      name: '',
      identitycode: ''

    }
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {}
  }
}
</script>
 
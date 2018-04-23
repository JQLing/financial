<template lang="pug">
.page.addCard_page
  .msglist(:class = 'getErrClass') {{msg}}
  form
    ul
      li
        .title 卡号
        input.cardno(ref='cardno', type='tel', placeholder='您名下的银行卡号', v-model='cardno', maxlength='19')
        //- div.clear(v-show='cardno!="" && cardnoFocus', @click='clear(0)')
        //-   i.icon.icon-is-close
    ul
      li
        .title 姓名
        input(type='text', placeholder='持卡人姓名', v-model='name', :readonly="isReadOnly", :class='{disabled : isReadOnly}')
        //- div.clear(v-show='name!="" && nameFocus && !isReadOnly', @click='clear(1)')
        //-   i.icon.icon-is-close
      li
        .title 身份证
        input(type='text', placeholder='持卡人身份证号', v-model='identitycode', :readonly="isReadOnly", :class='{disabled : isReadOnly}')
        //- div.clear(v-show='identitycode!="" && identitycodeFocus && !isReadOnly', @click='clear(2)')
        //-   i.icon.icon-is-close
      li
        .title 手机号
        input(type='tel', placeholder='银行预留手机号', maxlength='11', v-model='mobile')
        //- div.clear(v-show='mobile!="" && mobileFocus', @click='clear(3)')
        //-   i.icon.icon-is-close.phone
    .btns
      .btn.btn-primary(@click='checkCardNo', :class='{"btn-disable": !canAdd}')
        span 下一步
  .submit-box(v-if='submitModel')
    .bg
    .input-box
      .title
        span 设置交易密码并完成添加
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
      msg: '',
      cardno: '',
      name: '',
      identitycode: '',
      mobile: '',
      canAdd: false,
      submitModel: false,
      pwd: '',
      passwordFinished: false
    }
  },
  watch: {
    cardno: 'setCanAdd',
    identitycode: 'setCanAdd',
    name: 'setCanAdd',
    mobile: 'setCanAdd',
    errinfo: false,
    show: false
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {},
    // 下一步
    setCanAdd () {
      if (this.cardno !='' && this.name != '' && this.identitycode != '' && this.mobile != '') {
        this.canAdd = true;
      } else {
        this.canAdd = false;
      }
    },
    checkCardNo () {
      if (!this.canAdd) {
        return false;
      }
      if(!this.checkVal()) {
        return false;
      }
      this.submit();
    },
    // 输入检查
    checkVal() {
      // 卡号
      let regExp = new RegExp('1[3|4|5|7|8][0-9]{9}');
      if (this.cardno == '') {
        this.errinfo = true;
        this.msg = '卡号不能为空';
        return false;
      } else if (this.cardno.length < 16) {
        this.errinfo = true;
        this.msg = '卡号位数不正确，请重新输入';
        return false;
      }
      if (this.name == '') {
        this.errinfo = true;
        this.msg = '姓名不能为空';
        return false;
      }
      if (this.identitycode == '') {
        this.errinfo = true;
        this.msg = '身份证不能为空';
        return false;
      }
      if (!regExp.test(this.mobile)) {
        this.errinfo = true;
        this.msg = !this.mobile ? '手机号不能为空' : '手机号有误，请重新输入';
        return false;
      }
      return true;
    },
    submit () {
      // this.$store.dispatch('ajax', {
      //   getVerifyCode: {
      //     orgId: this.$route.query.orgId,
      //     customerId: this.mctcustno,        // 客户号
      //     accountName: this.name,            // 姓名
      //     identityNo: this.identitycode,     // 投资者证件号
      //     paymentType: this.selBankNo,       // 支付方式
      //     paymentNo: this.cardno,            // 银行卡号
      //     phone: this.mobile                 // 手机号
      //   }
      // }).then(r => {});
    },
    submitCancel () {},
    finishPassword() {},
    goForgetTransPwd () {},
    getErrClass() {
      if (this.errinfo) {
        this.show = true;
        return 'fadeIn';
      }
      if(this.show) {
        return 'fadeOut';
      }
    }
  }
}
</script>
 
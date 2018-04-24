<template lang="pug">
.page.addCard_page
  .msglist(:class='getErrClass()') {{msg}}
  form
    ul
      li
        .title 卡号
        input.cardno(ref='cardno', type='tel', placeholder='您名下的银行卡号', v-model='cardno', maxlength='19', @focus="hide")
        //- div.clear(v-show='cardno!="" && cardnoFocus', @click='clear(0)')
        //-   i.icon.icon-is-close
    ul
      li
        .title 姓名
        input(type='text', placeholder='持卡人姓名', v-model='name', @focus="hide")
        //- div.clear(v-show='name!="" && nameFocus && !isReadOnly', @click='clear(1)')
        //-   i.icon.icon-is-close
      li
        .title 身份证
        input(type='text', placeholder='持卡人身份证号', v-model='identitycode', @focus="hide")
        //- div.clear(v-show='identitycode!="" && identitycodeFocus && !isReadOnly', @click='clear(2)')
        //-   i.icon.icon-is-close
      li
        .title 手机号
        input(type='tel', placeholder='银行预留手机号', maxlength='11', v-model='mobile', @focus="hide")
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
          span.close X
      .password-box(v-if='!passwordFinished')
        .password-tips(v-if='pwd != ""') 请再次输入确认交易密码
        password(v-on:finish='finishPassword', ref='password')
        .forget(@click='goForgetTransPwd') 忘记密码?
</template>

<style src="./addCard.styl" lang="stylus" scoped></style>
<script>
import Password from '@/components/Password';
export default {
  name: 'AddCard',
  data () {
    return {
      msg: '',
      errinfo: false,
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
  components: {
    Password
  },
  activated () {
    this.msg = ''
    this.errinfo =  false
    this.cardno =  ''
    this.name =  ''
    this.identitycode =  ''
    this.mobile =  ''
    this.canAdd =  false
    this.submitModel =  false
    this.pwd = ''
    this.passwordFinished =  false
  },
  watch: {
    cardno: 'setCanAdd',
    identitycode: 'setCanAdd',
    name: 'setCanAdd',
    mobile: 'setCanAdd'
    
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
    // 输入正确，弹出输入密码
    checkCardNo () {
      if (!this.canAdd) {
        return false;
      }
      if(this.checkVal()) {
        return false;
      }
      this.submitModel = true;
    },
    // 输入检查
    checkVal() {
      // 卡号
      let regExp = new RegExp('1[3|4|5|7|8][0-9]{9}');   
      if (this.cardno == '') {
        this.errinfo = true;
        this.msg = '卡号不能为空';
        return false;
      } else if (this.cardno.length < 16) {       //1111111111111111
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
        this.msg = !this.mobile ? '手机号不能为空' : '手机号有误，请重新输入';     // 17839193818
        return false;
      }
      return true;
    },
    getErrClass() {
      if (this.errinfo ) {
        return 'fadeIn';
      }else {
        return 'fadeOut';
      }
    },
    hide () {
      this.errinfo = false;
    },
    // 密码输入完成
    finishPassword(pwd) {
      if (this.pwd === '') {
        this.pwd = pwd;
      } else {
        this.passwordFinished = true;
        this.submitModel = true;
        // this.confirmPwd = pwd;
        // this.submit();
      }
    },
    submit () {
      // this.$store.dispatch('ajax', {
      //   bindBankCard: {
      //     paymentNo: this.cardno,            // 银行卡号
      //     accountName: this.name,            // 姓名
      //     identityNo: this.identitycode,     // 身份证号
      //     phone: this.mobile                 // 手机号
      //     pwd: this.pwd,                     // 支付密码
      //   }
      // }).then(r => {
      //   this.$router.push({
      //     name: 'Success'
      //   }
      // });
    },
    // 取消密码输入
    submitCancel() {
      this.submitModel = false;
      this.passwordFinished = false;
      this.pwd = '';
    },
    // 忘记密码
    goForgetTransPwd () {
      this.$router.push({
        name: ''
      });
    }
    
  }
}
</script>
 
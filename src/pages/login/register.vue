<template>
  <div class="register">
		<div class="register_title">
			用户注册
		</div>
    <div class="tip red">{{tip}}</div>
		<div>
			<form name="register_form" class="register_form">
				<div class="register_username clearfix">
					<label for="username" class="username_txt fl">会员名</label>
					<input type="text" name="username" id="username" class="register_text fl" v-model="username" @blur="tipHide" placeholder="会员名/邮箱/手机号" minlength="1" maxlength="30" required>
				</div>
				
				<div class="register_pwd clearfix">
					<label for="password" class="pwd_txt fl">密码</label>
					<input type="password" name="password" id="password" class="register_text fl" v-model="pwd" @blur="tipHide" placeholder="6~20位英文数字" minlength="6" maxlength="20" required>
				</div>
				
				<div class="register_pwd clearfix">
					<label for="password" class="pwd_txt fl">确认密码</label>
					<input type="password" name="enter_password" id="enter_password" class="register_text fl" v-model="pwd_again" @blur="tipHide"  placeholder="6~20位英文数字" minlength="6" maxlength="20" required>
				</div>
				
				<div class="agreement clearfix">
					<input type="checkbox" name="agreement" checked disabled class="agreement_radio fl">
					<p class="fl">我已阅读并同意<a href="#" class="agreement_book">《 用户注册协议 》</a></p>
				</div>
				<div class="register_btn">
					<a class="register_submit" id="register_submit" @click="goLogin()">注册</a>
				</div>
			</form>
		</div>  
	</div>
</template>

<style src="./register.css" scoped></style>
<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      pwd: '',
      pwd_again: '',
      tip: ''
    }
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {
      
    },
    tipHide () {
      this.tip = '';
    },
    goLogin () {
      if(!this.pwd && !this.pwd_again) {
        this.tip = '密码不能为空';
      } else if(this.pwd && !this.pwd_again && ! (/^([a-zA-Z0-9]{6,20})$/.test(this.pwd))) {
        this.tip = '密码不能有特殊字符，长度应为6~20位';
      }else if(!this.pwd && this.pwd_again && !(/^([a-zA-Z0-9]{6,20})$/.test(this.pwd_again))) {
        this.tip = '确认密码不能有特殊字符，密码长度应为6~20位';
      }else if(this.pwd && !this.pwd_again){
        this.tip = '确认密码不能为空';
      }else if(!this.pwd && this.pwd_again) {
        this.tip = '密码不能为空';
      }else if(this.pwd && this.pwd_again && this.pwd != this.pwd_again) {
        this.tip = '两次密码不一致';
      }
      if(!this.username) {
        this.tip = '会员名不能为空';
      } else {
        if(!(this.username.length > 1 && this.username.length < 30)) {
          this.tip = '会员名长度应大于1位，小于30位'
        }
      }
      //ajax
    }
  }
}
</script>

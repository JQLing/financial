<template>
  <div class="login">
<!--		<%- message %>-->
		<h2 class="login_title"></h2>
		<form action="" method="post" name="login_form" class="login_form">
			<div class="field_username clearfix">
				<input type="text" name="username" id="username" class="login_text fl" v-model="username" placeholder="会员名/邮箱/手机号" maxlength="32">
			</div>
			<div class="field_pwd clearfix">
				<input type="password" name="password" id="password" class="login_text fl" v-model="pwd" placeholder="密码" maxlength="40">
			</div>
			<div class="login_btn">
				<a class="login_submit" id="login_btn" @click="goHome">登录</a>
			</div>
			<div class="login_link">
				<a href="#" class="forgot_passwod">忘记密码</a>
        <router-link :to="{name: 'Register'}" class="free_register">免费注册</router-link> 
			</div>
		</form>
	</div>
</template>
<style src="./login.css" scoped></style>
<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      pwd: ''
    }
  },
  beforeMount () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    fetchData () {
      
    },
    goHome () {}
  }
}
</script>

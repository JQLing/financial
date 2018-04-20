import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import Register from '@/pages/login/register'
import Login from '@/pages/login/login'
import Fund from '@/pages/fund/fund'
import Error from '@/pages/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/fund/:id?',
      name: 'Fund',
      component: Fund
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
      meta: {
        title: '请求超时'
      }
    }
  ]
})

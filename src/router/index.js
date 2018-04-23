import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import Register from '@/pages/login/register'
import Login from '@/pages/login/login'
import Fund from '@/pages/fund/fund'
import Error from '@/pages/error'
// import Buy from '@/pages/buy/buy'
// import Success from '@/pages/buy/success'
import Account from '@/pages/account/account'
import Mycard from '@/pages/account/mycard'
import AddCard from '@/pages/account/addCard'
// import Bought from '@/pages/account/bought'
import Version from '@/pages/account/version'
import FAQ from '@/pages/account/faq'

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
    },
    // {
    //   path: '/buy',
    //   name: 'Buy',
    //   component: Buy,
    //   meta: {
    //     title: ''
    //   }
    // },
    // {
    //   path: '/success',
    //   name: 'Success',
    //   component: Success,
    //   meta: {
    //     title: ''
    //   }
    // },
    // {
    //   path: '/account',
    //   children: [
    //     {
    //       path: '',
    //       name: 'Account',
    //       component: Account
    //       // meta: {
    //       //   title: '',
    //       //   auth: true
    //       // }
    //     },
    //     {
    //       path: 'version',
    //       name: 'Version',
    //       component: Version
    //     },
    //     {
    //       path: 'faq',
    //       name: 'FAQ',
    //       component: FAQ
    //     }
    //   ]
    // },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/version',
      name: 'Version',
      component: Version
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/mycard',
      name: 'Mycard',
      component: Mycard,
      meta: {
        title: ''
      }
    },
    {
      path: '/addCard',
      name: 'AddCard',
      component: AddCard,
      meta: {
        title: ''
      }
    },
    // {
    //   path: '/bought',
    //   name: 'Bought',
    //   component: Bought,
    //   meta: {
    //     title: ''
    //   }
    // }
  ]
})

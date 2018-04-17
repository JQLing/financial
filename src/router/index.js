import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import Fund from '@/pages/fund/fund'
import Error from '@/pages/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'Home',
      component: Home
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

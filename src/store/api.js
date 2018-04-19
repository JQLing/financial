import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.credentials = true
Vue.http.options.crossOrigin = true
Vue.http.options.emulateHTTP = true
Vue.http.options.timeout = 20000

// const noEmpty = params => {
//   return Object.values(params).some(v => v)
// }
// function formatterDateTime () {
//   var date = new Date()
//   var month = date.getMonth() + 1
//   var datetime = date.getFullYear() + '' + (month >= 10 ? month : '0' + month) + '' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + '' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
//   return datetime
// }
const Api = {
  // formatterDateTime() {
  //   var date = new Date()
  //   var month = date.getMonth() + 1
  //   var datetime = date.getFullYear() + '' + (month >= 10 ? month : '0' + month) + '' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + '' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  //   return datetime
  // },
  // getFund (params) {
  //   params = Object.assign({
  //     'fundCode': '',
  //     'showapi_timestamp': formatterDateTime(),
  //     'showapi_appid': '61228',
  //     'showapi_sign': '6fd922d8a23b45019b7c9f0f5a0d03a4'
  //   }, params)
  //   return Vue.http.post(`http://route.showapi.com/902-2`, {params})
  // }
  getFund (params) {
    params = Object.assign({
      'fundCode': ''
    }, params)
    return Vue.http.post(`http://fundgz.1234567.com.cn/js/${params.fundCode}.js?rt=1463558676006`)
  }
}

export default Api

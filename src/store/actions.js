import Api from './api'
import router from '@/router'
const actions = {
  // 异步单个/多个回调并匹配数据
  ajax (store, items) {
    console.debug('items', JSON.stringify(items))
    // store.commit('UPDATE_LOADING', true);

    // if (! items instanceof Object) {
    //   return false
    // }

    let iterable = []
    let noData = {
      code: -1,
      data: null,
      msg: '数据异常'
    }
    let renderData = res => {
      if (!res) {
        return noData
      }
      switch (typeof res) {
        case 'string':
          return {
            code: 200,
            data: res,
            msg: null
          }
        case 'object':
          if (!res.body) {
            return noData
          }
          res.body = Object.assign({}, noData, res.body)
          if (res.body.code !== 200 && res.body.code !== 1129) {
            res.body.data = null
          }
          return res.body
        default:
          return noData
      }
    }

    Object.entries(items).forEach(v => {
      let [func, param] = v
      if (typeof Api[func] === 'function') {
        iterable.push(Api[func](param))
      }
    })

    return window.Promise.all(iterable).then(res => {
      // store.commit('UPDATE_LOADING', false)
      if (!res.length) {
        return noData
      }
      if (res.length === 1) {
        return renderData(res[0])
      }
      return res.map(v => renderData(v))
    }).catch(err => {
      // 截取超时情况
      if (err.status === 0) {
        document.referrer === router.push({name: 'error'})
      }
      return {
        code: err.status || -2,
        data: null,
        msg: err.statusText
        // msg: err.statusText || '系统繁忙，请稍后再试'
      }
    })
  }
}

// 合并 Api，异步单个回调并匹配数据
Object.keys(Api).forEach(k => {
  if (typeof actions[k] !== 'function') {
    actions[k] = ({ dispatch }, param) => {
      return dispatch('ajax', {
        [k]: param
      })
    }
  }
})

export default actions

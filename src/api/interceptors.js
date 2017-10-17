import Axios from 'axios'

function getXtoken() {
  return null
}

Axios.interceptors.request.use(
  config => {
    var xtoken = getXtoken()
    if (xtoken != null) {
      config.headers['X-Token'] = xtoken
    }
    if (config.method == 'post') {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date()) / 1000,
      }
    } else if (config.method == 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },

  error => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(function (response) {
  // token 已过期，重定向到登录页面  
  if (response.data.code == 4) {
    localStorage.clear()
    router.replace({
      path: '/signin',
      query: { redirect: router.currentRoute.fullPath }
    })
  }
  return response
},
  error => {
    // Do something with response error  
    return Promise.reject(error)
  }
)

export default Axios
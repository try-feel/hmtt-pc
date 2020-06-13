import axios from 'axios'

//导入auth模板
import auth from '@/utils/auth'

//导入路由
import router from '@/router'

// 配置基准路径
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(config => {
  // 获取本的token
  const token = auth.getUser().token
  // 如果有token就追加到请求头
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}, err => Promise.reject(err))
//相应拦截器
axios.interceptors.response.use(res => res, err => {
  // token失效拦截
  // err.response 响应报文对象
  // err.response.status 响应状态码
  // 严谨判断：首先存在response，然后去去除status做判断
  if (err.response && err.response.status === 401) {
    // this.$router.push('/login') this是vue实例
    // $router就是路由实例，src/router/index.js 导出的就是路由实例
    // router也可以调用push函数，导入router模块即可
    router.push('/login')
  }
  return Promise.reject(err)
})

export default axios
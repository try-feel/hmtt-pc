import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入路由实例
// @ 的问题
// 1. 以前我们写相对路径，容易出错。
// 2. 使用绝对路径比较稳妥，不能写死，vue-cli提供一个@符号，是src当前的绝对路径.
// 3. 在使用@后，在src路径下拼接后面的路径即可。
// index.js可以省略
// 1. 当你导入一个文件夹的时候，默认会去找索引文件
// 2. index.js index.vue index.json vue-cli默认支持这些索引文件
// 3. 且优先级和我书写的顺序一致
import router from '@/router'

// axios的相关配置
import axios from 'axios'
// 基准路径
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 全局挂载
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载路由实例
  router
}).$mount('#app')

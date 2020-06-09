import Vue from 'vue';
import App from './App.vue'
// 引入element-ui的核心js文件
import ElementUI from 'element-ui';
// 引入element-ui的主题样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入路由实例
// @的问题
// 1. 以前我们写相对路径,容易出错
// 2. 使用绝对路径比较稳妥,不能写死,vue-cli提供一个@符号,是src的绝对路径
// 3. 在使用@后,在src路径下拼接后面的路径即可
//index.js可以省略
// 1.当你导入一个文件夹的时候,默认就会去找索引文件
// 2.index.js undex.vue index.json vue-cli默认支持这些索引文件
// 3.且优先级和我书写的一致
import router from '@/router'


// 使用element-ui这个插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

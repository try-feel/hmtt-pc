// 定义一个基于vue的插件
// 插件：扩展vue功能（全局组件，指令，过滤器，原型属性或函数）
import MyBread from '@/components/my-bread'
// 导入配置好的axios
import axios from '@/api'
export default {
  // 当使用Vue.use(插件)就会调用插件的install函数，且传入Vue构造函数
  install (Vue) {
    // 基于 Vue 构造函数，扩展功能
    Vue.component(MyBread.name, MyBread)
    Vue.prototype.$http = axios
  }
}
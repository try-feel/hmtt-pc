// 路由的相关配置,且得到路由实例
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import login from '@/views/login'

Vue.use(VueRouter)

//路由规则
const routes = [{
  path: '/login',
  component: Login
}]

// 路由实例
const router = new VueRouter({
  routes
})

// 导出实例
export default router

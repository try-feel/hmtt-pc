// 路由的相关配置,且得到路由实例
import Vue from 'vue'
import VueRouter from 'vue-router'
// 工具模块
import auth from '@/utils/auth'

// 导入组件
import Login from '@/views/login'
import Layout from '@/views/Layout'
import Welcome from '@/views/welcome'
import Article from '@/views/article'

Vue.use(VueRouter)

//路由规则
const routes = [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      //欢迎
      {
        path: '/',
        component: Welcome
      },
      //内容
      {
        path: '/article',
        component: Article
      }
    ]
  }
]

// 路由实例
const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  //结构得到获取用户信息的函数
  const {
    getUser
  } = auth
  // 除去登录外,其他的页面需要判断token是否存在,如果不存储拦截到登录
  if (to.path !== '/login' && !getUser().token) return next('/login')
  // 其他情况一律放行
  next()

})

// 导出实例
export default router

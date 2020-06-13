<template>
  <div class="container-login">
    <el-card>
      <img class="logo" src="../../assets/logo_index.png" alt />
      <!-- 绘制表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:240px;margin-right:8px" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- :value="true" 值只能选中 -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login()" type="primary" style="width:100%">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import auth from '@/utils/auth'
export default {
  // 当时路由来渲染组件，会使用name指定的组件名称，没指定默认是文件的名称
  // Vue.component() components选项注册组件，组件的名字是自己定义和name无关。
  name: 'login-page',
  data () {
    // 声明自定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 进行校验，校验逻辑：1开头 + 第二位数字（3-9） + 9位数字结尾
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('手机号不正确'))
      callback()
    }
    return {
      // 建议：和后台接口需要的字段保存一致，目的将来直接提交该对象即可
      loginForm: {
        mobile: '',
        code: ''
      },
      // 校验规则对象
      loginRules: {
        // 具体的校验规则
        mobile: [
          // required: true 必填规则，message不符合规则时提示，trigger 何时触发校验
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 自定义校验
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login () {
      // 1. 对整体表单进行校验
      this.$refs.loginForm.validate( async valid => {
        if (valid) {
          //2. 校验成功后进行登录
          // this.$http.post('/authorizations', this.loginForm).then(res => {
          //   // 成功
          //   // 保存信息 res.data 响应主体 res.data.data 用户信息
          //   auth.setUser(res.data.data)
          //   // 跳转首页
          //   this.$router.push('/')
          // }).catch(() => {
          //   // 提示
          //   this.$message.error('手机号或验证码错误')
          // })

           // 使用 try{}catch(e){} 来捕获和处理异常
           // 使用try{}捕获可能出现的异常
           // 在catch中来处理异常

          try {
               // 正常情况下的代码
          const res = await this.$http.post('/authorizations',this.loginForm)
          console.log(res)
          //登录成功
          auth.setUser(res.data.data)
          this.$router.push("/")
           }catch (e) {
             //请求失败 提示报错
             this.$message.error('手机号或验证码错误')
           }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container-login {
  width: 100%;
  height: 100%;
  // center / cover  背景图定位 / 背景图的此处（特殊值 cover 铺满容器  contain 完全在容器显示）
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
  // el-card 是组件，解析后没有这种标签的。
  // 饿了么在封装组件的时候，组件的根元素默认会拥有一个和组件名称一致的类名
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .logo {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>

<template>
  <el-container class="layout">
    <el-aside :width="isOpen?'200px':'64px'">
      <div class="logo" :class="{logo_mini:!isOpen}"></div>
      <!-- 导航菜单 -->
      <el-menu
        :default-active="$route.path"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span
          @click="toggleAside()"
          class="icon"
          :class="{'el-icon-s-fold':isOpen,'el-icon-s-unfold':!isOpen}"
        ></span>
        <span class="text">瑞云科技教育有限公司</span>
        <el-dropdown class="my-dropdown" @command="clickItem">
          <span>
            <img class="head" :src="userInfo.photo" alt />
            <span class="name">{{userInfo.name}}</span>
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="setting" icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item command="logout" icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 二级路由显示的位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import auth from "@/utils/auth";
export default {
  name: "layout",
  data() {
    return {
      // 默认展开状态
      isOpen: true,
      userInfo: {
        photo: "",
        name: ""
      }
    };
  },
  created() {
    // 获取用户信息
    const { photo, name } = auth.getUser();
    this.userInfo = { photo, name };
  },
  methods: {
    // 切换左侧栏展开与收起
    toggleAside() {
      this.isOpen = !this.isOpen;
    },
    //个人设置
    setting() {
      this.$router.push("/setting");
    },
    // 退出登录
    logout() {
      //删除本地用户信息
      auth.delUser();
      //跳转登录
      this.$router.push("/login");
    },
    clickItem(command) {
      // console.log(command) setting  logout 根据command 做判断，做不同的事情
      // 如果是 setting 调用setting函数  如果是logout 调用logout函数 即可
      //调用相关函数
      this[command]();
    }
  }
};
</script>

<style scoped lang='less'>
.layout {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002233;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../assets/logo_admin.png) no-repeat center / 140px
        auto;
    }
    .logo_mini {
      background-image: url(../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .my-dropdown {
      float: right;
      .head {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .name {
        font-weight: bold;
        color: #333;
        vertical-align: middle;
        margin: 0 10px;
      }
    }
  }
}
</style>
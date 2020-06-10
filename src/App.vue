<template>
  <div id="app">
    黑马头条PC <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <!-- 显示一级路由对应组件的容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

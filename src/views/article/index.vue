<template>
  <div class="container-article">
    <!-- 筛选 卡片 -->
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 内容 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <!-- 单选框 -->
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <!-- 下拉框 -->
          <el-select v-model="reqParams.channel_id" placeholder="请选择">
            <el-option label="java" :value="1"></el-option>
            <el-option label="前端" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <!-- 思考：日期范围，选择之后的值是数组 [start,end] -->
          <!-- 后台：需要的是两个字段，不能直接绑定两个字段 -->
          <!-- 方案：reqParams中声明两个字段，再声明一个额外字段支持组件，
          选择后分别给reqPrams中的两个字段赋值即可-->
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "article-page",
  data() {
    return {
      //日期范围
      dateArr: [],
      // 筛选参数对象
      // 当你提交的数据为null的时候,axios是不会提交这个字段,也就不传的意思
      reqParams: {
        // 0-草稿 1-待审核 2-审核失败 4-已删除 不传为全部
        // 接口不支持查询已删除的文章
        status: null,
        // 频道id 默认为空
        channel_id: null,
        // 起始时间
        begin_pubdate: null,
        // 结束时间
        end_pubdate: null
      }
    };
  }
};
</script>

<style scoped lang='less'></style>
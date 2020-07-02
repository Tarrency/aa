<template>
  <div id="app">
    <el-container >
        <el-aside>
          <left></left><!-- 侧边栏 -->
        </el-aside>
        <el-container>
            <el-header class="header"><!-- 顶部 -->
            <el-row>
              <el-col  :span="4" :offset="14">
                <i class="el-icon-s-tools"></i>
                <el-button @click="routerTo('/logs')"
                type="text" style="color:black;height:50px">系统日志</el-button>
              </el-col>
         
              <el-col  :span="4" :offset="0">
                <i class="el-icon-s-tools"></i>
                <el-button @click="routerTo('/userinfo')"
                type="text" style="color:black;height:50px;">用户信息</el-button>
              </el-col>
              </el-row>
            </el-header>
            <el-main><!-- 主内容区 -->
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import leftmenu from './views/Left.vue';
export default {
  components: {
    left: leftmenu
   },
   methods: {
    routerTo (val) {
      this.$router.push({path: val})
    }
  }

}

</script>
<style>
.header{
  height:50px;
  border-bottom:2px solid silver;
  background-color:#fff;
  text-align:right;  
  vertical-align:top;
}
.el-button{
  vertical-align: middle;
  text-align:center;
}
.el-main {
  background-color:#fff;

}
</style>

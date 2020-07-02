<template>
    <div class="dialoguestatistics">
        <div class="panel">
            
            <div id="logs">
            <el-row>
                <el-col :span="18">
                    <el-breadcrumb separator="/" >
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>系统日志</a></el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>                
            </el-row>

<el-row>    </el-row>

            <el-table :data="tableData" stripe border height="330" style="width:100%;" id="out-table" XLSX.uitls.table_to_book v-loading="loading" element-loading-text="正在拼命加载中" :eader-row-style="{'background':'#efefef'}">
                <el-table-column label="操作类型" width="100">
                    <template slot-scope="scope">
                        <div>用户登录</div>
                    </template>
                </el-table-column>
                <el-table-column label="日志信息" width="700">
                    <template slot-scope="scope">
                        <div>文件[/www/wwwroot/yuhaowei.com/webcarry/appstore/hayday/views.py]保存成功!'</div>
                    </template>
                </el-table-column>
                <el-table-column label="操作日期" width="300">
                    <template slot-scope="scope">
                        <div>2020-07-01 23:06:29</div>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" icon="el-icon"  @click="exportExcel" style="margin-top: 50px">导出日志文件</el-button>
        </div>
    </div>
    </div>
</template>

<script>
 import {excel} from '../../src/excel/excel.js';
    export default {
        data() {
            return {
                tableData: [{
                    operatype:'用户登录',
                    operainfo: '文件[/www/wwwroot/yuhaowei.com/webcarry/appstore/hayday/views.py]保存成功!',
                    datetime: '2020-04-07 23:06:29'
                }]
            }
        },
        methods: {
             exportExcel () {//导出表格 传入两个参绑定的id和表格名称
             excel('out-table','系统日志');},

                routerTo (val) {
                this.$router.push({path: val})
                }
        }
    }
</script>

<style scoped>
.el-row{
    margin-bottom: 20px;
  text-align: center;
  vertical-align: top;
}

</style>
<template>
    <div class="TransportRange identicalStyle">
        <el-form :inline="true" :model="logisticsForm" ref="ruleForm" class="demo-ruleForm classify_searchinfo">
            <el-form-item label="出发地：" prop="startProvinceCityArea">
                <el-input v-model="logisticsForm.startProvinceCityArea">
                </el-input>
            </el-form-item>
            <el-form-item label="到达地：" prop="endProvinceCityArea">
                <el-input v-model="logisticsForm.endProvinceCityArea">
                </el-input>
            </el-form-item>
                <el-form-item label="商品名称：" prop="goodsName">
                <el-input v-model="logisticsForm.goodsName">
                </el-input>
            </el-form-item>
            <el-form-item class="btnChoose fr">
                <el-button type="primary" icon="el-icon-search" plain :size="btnsize" @click="handleSearch">搜索</el-button>
                <el-button type="info" icon="fontFamily aflc-icon-qingkong" plain :size="btnsize" @click="clearSearch">清空</el-button>
            </el-form-item>
        </el-form>
        <div class="classify_info">
            <div class="info_news">
                <el-table
                :data="tableData"
                ref="multipleTable"
                stripe
                border
                height="100%"
                style="width: 100% ;">
                    <el-table-column
                        label="序号"
                        type="index"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop = "startProvinceCityArea"
                        label="出发地"
                        >
                        <template slot-scope="scope">
                            <span>{{scope.row.startProvinceCityArea}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="endProvinceCityArea"
                        label="到达地"
                        >
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="goodsName"
                        label="商品名称"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="goodsNum"
                        label="货品总数量（件）"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="goodsWeight"
                        label="预估总重量（公斤）" 
                        width="150">
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="goodsVolume"
                        label="预估总体积（方）"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="consignor"
                        label="发货人" 
                        width="180">
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="time"
                        label="发布时间" 
                        width="180">
                    </el-table-column>
                    <!-- <el-table-column
                        prop="address"
                        label="操作" 
                        >
                            <template slot-scope="scope">
                                <el-button-group>
                                    <el-button @click="handleEdit(scope.row)" type="primary" plain size="mini">修改</el-button>
                                    <el-button @click="handleDelete(scope.row)" type="primary" size="mini">删除</el-button>
                                    <el-button @click="handleStatus(scope.row)" plain :type="scope.row.isEnable == 0 ? 'primary' : 'info'" size="mini">{{scope.row.isEnable == 0 ? '启用' : '禁用'}}</el-button>
                                </el-button-group>
                            </template>
                    </el-table-column> -->
                </el-table>
            </div>
        </div>  
        <div class="info_tab_footer">共计:{{ totalCount }} <div class="show_pager"> <Pager :total="totalCount" @change="handlePageChange" :sizes="sizes"/></div> </div>    
    </div>
</template>

<script>

import { parseTime } from '@/utils/index.js'
import { getGoodsSourceList,GoodsSourceStatus } from '@/api/order/xuqiuku/goodssource.js'
import Pager from '@/components/Pagination/index'
 
export default {
    components:{
        Pager
    },
    data() {
       
        return {
            btnsize:'mini',
            defaultImg:'/static/default.png',//默认加载失败图片
            totalCount:0,
            page:1,
            sizes:[20,50,100],
            pagesize:20,
            logisticsForm: {
                queryType:'2',
                startProvinceCityArea: '',//出发地
                endProvinceCityArea: '',//到达地
                goodsName:'',//商品名称
            },
            tableData: [],
        };
    },
    watch:{

    },
    mounted(){
        this.firstblood();
    },  
    methods: {
        handlePageChange(obj) {
            console.log(obj)
            this.page = obj.pageNum;
            this.pagesize = obj.pageSize;
            this.firstblood();
        },
        firstblood(){
            getGoodsSourceList(this.page,this.pagesize,this.logisticsForm).then(res=>{
                console.log(res)
                this.tableData = res.data.list;
                this.totalCount = res.data.totalCount;
                this.tableData.forEach(el => {
                    el.time = parseTime(el.createTime)
                })
            })
        },
        clearSearch(){
            this.$refs.ruleForm.resetFields();
            this.firstblood();
        },
        //搜索
        handleSearch(){
            this.firstblood()
        },
        //新增网点
        handleNew(){
            this.$router.push({name: '发布物流专线'});
        },
        //修改
        handleEdit(row) {
            this.$router.push('/cargoInfo/create?cid='+row.id)
            //this.$router.push({name: '发布物流专线',params:{ data:row}});
        },
        //删除网点
        handleDelete(row) {
            this.$confirm('确定要删除 '+ row.startLocation +'-'+ row.endLocation +' 该条专线吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                deleteTransportRange(row.id).then(res => {
                    this.firstblood();
                }).catch(err => {
                    this.$message({
                        type: 'info',
                        message: '操作失败，原因：' + err.errorInfo ? err.errorInfo : err.text
                    })
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        //更改状态
        handleStatus(row) {
            let type = row.isEnable == '0' ? '1' : '0';
            GoodsSourceStatus(row.id,type).then(res => {
                this.firstblood();
            }).catch(err=>{
                this.$message({
                    type: 'info',
                    message: '操作失败，原因：' + err.text ? err.text : err
                })
            })
        },
    },
  
}
</script>

<style type="text/css" lang="scss">
    .TransportRange{
        .el-form{
           
        }
    }
</style>

<template>
    <div class="identicalStyle getPastCompnent" v-loading="loading">
        <el-form  :inline="true" :model="listSystemObj.vo" ref="ruleForm" class="demo-ruleForm classify_searchinfo">
            <el-form-item label="申请单号" prop="carStickerOrderSerial">
                <el-input v-model="listSystemObj.vo.carStickerOrderSerial" clearable></el-input>
            </el-form-item>
            <el-form-item label="产品所属区域" prop="productAreaCode">
                <getCityList class="chooseItem" @returnStr="getStr" v-model="listSystemObj.vo.productAreaCode" ref="area"></getCityList>
            </el-form-item>
            <el-form-item label="车型" prop="carType">
                <el-select v-model="listSystemObj.vo.carType" clearable placeholder="请选择">
                    <el-option
                    v-for="item in optionsCarType"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="产品名称" prop="productName">
                <el-input v-model="listSystemObj.vo.productName" clearable></el-input>
            </el-form-item>
            <el-form-item label="申请/上报类型"   prop="operType">
                <el-select v-model="listSystemObj.vo.operType" clearable placeholder="请选择">
                    <el-option
                    v-for="item in optionsApplyType"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="车贴跟进人" prop="followUpName">
                <el-input v-model="listSystemObj.vo.followUpName" clearable></el-input>
            </el-form-item>
            <el-form-item label="申请/上报时间" prop="chooseTime1">
                <el-date-picker
                    v-model="chooseTime1"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    unlink-panels
                    align="right"
                    :default-time="['00:00:00', '23:59:59']"
                    value-format="timestamp">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="操作时间" prop="chooseTime2">
                <el-date-picker
                    v-model="chooseTime2"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    unlink-panels
                    align="right"
                    :default-time="['00:00:00', '23:59:59']"
                    value-format="timestamp">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="当前车贴状态" prop="status">
                <el-select v-model="listSystemObj.vo.status" clearable placeholder="请选择">
                    <el-option
                    v-for="item in optionsCarStickerType"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="车主姓名" prop="driverName">
                <el-input v-model="listSystemObj.vo.driverName" clearable></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="driverMobile">
                <el-input v-model="listSystemObj.vo.driverMobile" clearable></el-input>
            </el-form-item>
            <el-form-item class="btnChoose fr"  style="margin-left:0;">
                <el-button type="primary" icon="el-icon-search" plain :size="btnsize" @click="handleSearch('search')">搜索</el-button>
                <el-button type="info" icon="fontFamily aflc-icon-qingkong" :size="btnsize" plain @click="handleSearch('clear')">清空</el-button>
            </el-form-item>
        </el-form>
        <div class="classify_info">
            <div class="info_news">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    stripe
                    border
                    align = "center"
                    height="100%"
                    tooltip-effect="dark"
                    style="width: 100%">
                    <el-table-column label="序号" width="60">
                        <template slot-scope="scope">
                            {{ (listSystemObj.currentPage - 1)*listSystemObj.pageSize + scope.$index + 1 }}
                        </template>
                    </el-table-column> 
                    <el-table-column
                        sortable
                        label="申请单号"
                        prop="carStickerOrderSerial"
                        min-width="250">
                        <template  slot-scope="scope">
                            <h4 class="needMoreInfo" @click="handleClick('details',scope.row)">{{ scope.row.carStickerOrderSerial}}</h4>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="driverName"
                        sortable
                        label="车主姓名"
                        min-width="150">
                    </el-table-column>
                    <el-table-column
                        prop="driverMobile"
                        sortable
                        label="手机号"
                        min-width="150"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="productAreaCodeName"
                        sortable
                        min-width="150"
                        label="产品所属区域"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="carTypeName"
                        sortable
                        label="车型"
                        min-width="150">
                    </el-table-column>
                    <el-table-column
                        prop="productName"
                        sortable
                        min-width="150"
                        label="产品名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="operTypeName"
                        sortable
                        min-width="150"
                        label="申请/上报类型"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="applyMoneyView"
                        sortable
                        min-width="150"
                        label="申请费用"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="subsidyMoney"
                        sortable
                        min-width="150"
                        label="每月补贴费用"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="submitTime"
                        sortable
                        label="申请时间"
                        min-width="160">
                        <template slot-scope="scope">
                            {{ scope.row.submitTime | parseTime }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="statusName"
                        sortable
                        min-width="150"
                        label="当前车贴状态"
                        >
                    </el-table-column>
                     <el-table-column
                        prop="followUpName"
                        sortable
                        min-width="150"
                        label="车贴跟进人"
                        >
                    </el-table-column>
                     <el-table-column
                        prop="operator"
                        sortable
                        min-width="150"
                        label="操作人"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="operTime"
                        sortable
                        label="操作时间"
                        min-width="160">
                        <template slot-scope="scope">
                            {{ scope.row.operTime | parseTime }}
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!-- 页码 -->
        <div class="info_tab_footer">共计:{{ dataTotal }} <div class="show_pager"> <Pager :total="dataTotal" @change="handlePageChange" ref="pager"/></div> </div>    
        <carStickerDetails :dialogFormVisible.sync = "dialogFormVisible" showType='applyInfo' :isView = "isView" :detailsObj="scopeObj"  :formtitle = "formtitle"  @renovate="firstblood"/>
    </div>
</template>

<script type="text/javascript">
import { carStickerApplyList } from '@/api/marketing/carSticker'
import { DicCartype,ApplyType,CarStickerType } from '@/api/common.js'
import Pager from '@/components/Pagination/index'
// import add from './add'
import getCityList from '@/components/GetCityList/index'
import carStickerDetails from '../component/carStickerDetails'

export default{
    name:'getPastCompnent',
    props: {
        isvisible: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Pager,
        getCityList,
        carStickerDetails,
    },
    data() {
        return {
            btnsize: 'mini',
            loading: false, // 加载
            dialogFormVisible:false,
            isView:false,
            formtitle:'',
            scopeObj:{},
            dataTotal: 0,
            listSystemObj:{
                "currentPage": 1,
                "pageSize": 20,
                "vo": {
                    applyStatus:'AF0880402',//当前车贴状态(【待处理】显示：待处理（AF0880401）【已通过】显示：通过（AF0880402）【不通过】显示：车主取消（AF0880403）不符合条件（AF0880404） )
                    carStickerOrderSerial:'',//车贴订单号
                    productAreaCode:'',//产品所属区域
                    carType:'',//车型
                    productName:'',//产品名称
                    operType:'',//申请/上报类型
                    driverName:'',//车主姓名
                    driverMobile:'',//车主手机号
                    followUpName:'',//车贴跟进人
                    applyStartTime:'',//申请开始时间
                    applyEndTime:'',//申请结束时间
                    operStartTime:'',//操作开始时间
                    operEndTime:'',//操作结束时间
                    status:'',//当前车贴状态
                }
            },
            tableData: [],
            optionsApplyType:[{
                name:'全部',
                code:""
            }],
            optionsCarType:[{
                name:'全部',
                code:""
            }],
            optionsCarStickerType:[{
                name:'全部',
                code:""
            }],
            chooseTime1:[],
            chooseTime2:[],
        }
    },
    watch: {
        isvisible: {
            handler(newVal, oldVal) {
                if (newVal) {
                    this.firstblood()
                } 
            },
            // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
            immediate: true
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        handleClick(type,row){
            this.scopeObj = row;
            this.dialogFormVisible = true;
            this.isView = true;
            this.formtitle = '车贴详情';
        },
        init(){
            Promise.all([DicCartype(),ApplyType(),CarStickerType()]).then(resArr => {
                this.optionsCarType = this.optionsCarType.concat(resArr[0].data);
                this.optionsApplyType = this.optionsApplyType.concat(resArr[1].data);
                this.optionsCarStickerType = this.optionsCarStickerType.concat(resArr[1].data);
            })
        },
        getStr(d){
            // this.searchInfo.belongCityName = (!d.province&&!d.city&&!d.area) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}`.trim();
            this.listSystemObj.vo.productAreaCode = d.city.code;
        },
        handlePageChange(obj) {
            this.listSystemObj.currentPage = obj.pageNum;
            this.listSystemObj.pageSize = obj.pageSize;
            this.firstblood();
        },
        // 刷新页面
        firstblood() {
            this.loading = true
            carStickerApplyList(this.listSystemObj).then(res => {
                this.tableData = res.data.list;
                this.dataTotal = res.data.totalCount;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.$message({
                    type: 'info',
                    message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                })
            })
        },
        // 模糊查询 分类名称或者code
        handleSearch(type) {
            if(type == 'clear'){
                this.listSystemObj.vo ={
                    applyStatus:'AF0880402',//当前车贴状态(【待处理】显示：待处理（AF0880401）【已通过】显示：通过（AF0880402）【不通过】显示：车主取消（AF0880403）不符合条件（AF0880404） )
                    carStickerOrderSerial:'',//车贴订单号
                    productAreaCode:'',//产品所属区域
                    carType:'',//车型
                    productName:'',//产品名称
                    operType:'',//申请/上报类型
                    driverName:'',//车主姓名
                    driverMobile:'',//车主手机号
                    followUpName:'',//车贴跟进人
                    applyStartTime:'',//申请开始时间
                    applyEndTime:'',//申请结束时间
                    operStartTime:'',//操作开始时间
                    operEndTime:'',//操作结束时间
                    status:'',//当前车贴状态
                }
                this.chooseTime1 = [];
                this.chooseTime2 = [];
                this.$refs.area.clearData();
            }

            if(this.chooseTime1){
                this.listSystemObj.vo.applyStartTime = this.chooseTime1[0];
                this.listSystemObj.vo.applyEndTime = this.chooseTime1[1];
            }
            if(this.chooseTime2){
                this.listSystemObj.vo.operStartTime = this.chooseTime2[0];
                this.listSystemObj.vo.operEndTime = this.chooseTime2[1];
            }
            if(this.listSystemObj.currentPage!= 1){
                this.listSystemObj.currentPage = 1;
                this.$refs.pager.inputval = this.listSystemObj.currentPage;
                this.$refs.pager.pageNum = this.listSystemObj.currentPage;
            }
            this.firstblood();
        },
    }
}
</script>

<style type="text/css" lang="scss" scoped>
    .getPastCompnent{
    }
</style>

<template>
    <div class="identicalStyle clearfix systemProcessing" v-loading="loading">
        <searchInfo @change="getSearchParam" searchType="exchange"></searchInfo>
        <div class="classify_info">
            <!-- <div class="btns_box">
                <el-button type="primary" :size="btnsize" @click="handleSearch('search')">导出Exce</el-button>
            </div> -->
            <div class="info_news">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    stripe
                    border
                    align = "center"
                    height="100%"
                    :span-method="objectSpanMethod"
                    @selection-change = "getinfomation"
                    tooltip-effect="dark"
                    @row-click="clickDetails"
                    style="width: 100%"> 
                    <el-table-column label="序号"  width="60">
                        <template slot-scope="scope">
                            {{ (listSystemObj.currentPage - 1)*listSystemObj.pageSize + scope.row.currentKey + 1 }}
                        </template>
                    </el-table-column>  
                    <el-table-column
                        sortable
                        prop="orderSerial"
                        label="订单编号"
                        width="250"
                        >
                        <template  slot-scope="scope">
                            <h4 class="needMoreInfo" @click="pushOrderSerial(scope.row)">{{ scope.row.orderSerial}}</h4>
                        </template>
                    </el-table-column>
                    <el-table-column
                        :show-overflow-tooltip="true"
                        sortable
                        prop="startAddress"
                        label="提货地"
                        >
                        <template  slot-scope="scope">
                            {{scope.row.startAddress.replace(/,/g,"-")}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        :show-overflow-tooltip="true"
                        sortable
                        prop="endAddress"
                        label="到达地"
                        >
                        <template  slot-scope="scope">
                            {{scope.row.endAddress.replace(/,/g,"-")}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        sortable
                        :show-overflow-tooltip="true"
                        prop="shipperMobile"
                        label="车主姓名"
                        >
                        <template  slot-scope="scope">
                            <span>{{scope.row.driverName}} / {{scope.row.driverMobile}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="orderPrice"
                        label="订单总额"
                        >
                    </el-table-column>
                    <el-table-column
                        sortable
                        :show-overflow-tooltip="true"
                        prop="riskControlName"
                        label="可疑违规说明"
                        >
                    </el-table-column>
                    <el-table-column
                        sortable
                        :show-overflow-tooltip="true"
                        prop="behaviorScore"
                        label="可扣行为分"
                        >
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button :size="btnsize"
                            :disabled="scope.row.behaviorScoreStatus != '0'"
                             type="primary" plain @click="handleClick('deduct',scope.row)">扣除行为分</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 页码 -->
            <div class="info_tab_footer">共计:{{ dataTotal }} <div class="show_pager"> <Pager :total="dataTotal" @change="handlePageChange"  ref="pager"/></div> </div>    
        </div>
    </div>
</template>

<script type="text/javascript">

import '@/styles/dialog.scss'
import { listMasterOrderUnusual,deductionBehavior } from '@/api/order/ordermange'
import { parseTime,pickerOptions2,objectMerge2 } from '@/utils/index.js'
import Pager from '@/components/Pagination/index'
import getCityList from '@/components/GetCityList/city'
import { parseShipStatus } from '@/utils/dict'
import searchInfo from './abnormalSearch'

    export default{
        props: {
            isvisible: {
                type: Boolean,
                default: false
            }
        },
        components:{
            Pager,
            getCityList,
            searchInfo
        },
        data(){
            return{
                btnsize:'mini',
                timeOutAll:null,
                loading: false,//加载
                listSystemObj:{
                    "currentPage": 1,
                    "pageSize": 20,
                    "vo": {
                        belongCityName:'',
                        orderSerial:'',
                        driverName:'',
                        unusualType:'0',
                    }
                },
                spanArr:[],
                pos:0,
                tableKeys:'',
                dataTotal:0,
                pickerOptions2:{
                    shortcuts:pickerOptions2
                },
                tableData:[],
            }
        },
        watch:{
            isvisible: {
                handler(newVal, oldVal) {
                    if(newVal){
                        // this.$nextTick(()=>{
                        //     this.tableKeys = (new Date()).getTime();
                            this.firstblood();
                        // })
                        // this.timeOut = setInterval(this.firstblood,60000)
                    }
                    // else{
                    //     clearInterval(this.timeOut);
                    // }
                },
                // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
                immediate: true
            },
        },
        mounted(){
            // this.firstblood();
            // this.timeOutAll = setInterval(this.firstblood,2000)
        },  
        beforeDestroy(){
            // clearInterval(this.timeOutAll);
        },
        methods: {
            getValue(obj){
                return obj ? obj.value:'';
            },
            getSearchParam(obj) {
                // console.log(obj)
                this.listSystemObj.vo = objectMerge2(this.listSystemObj.vo, obj);
                if(this.listSystemObj.currentPage!= 1){
                    this.listSystemObj.currentPage = 1;
                    this.$refs.pager.inputval = this.listSystemObj.currentPage;
                    this.$refs.pager.pageNum = this.listSystemObj.currentPage;
                }
                this.firstblood();
            },
            handlePageChange(obj) {
                this.loading = true;
                this.listSystemObj.currentPage = obj.pageNum;
                this.listSystemObj.pageSize = obj.pageSize;
                this.firstblood();
            },
            //刷新页面  
            firstblood(){
                this.loading = true;
                // this.tableKeys = (new Date()).getTime();
                // this.listSystemObj.vo.orderSerial = this.$route.query.orderSerial || '';
                listMasterOrderUnusual(this.listSystemObj).then(res => {
                    // console.log('全部',res)
                    this.dataTotal = res.data.totalCount;
                    let tableArr = objectMerge2(res.data.list);
                    let rowData = [];
                    tableArr.forEach((el,idx) => {
                        el.orderUnusuals.forEach(item => {
                            item.driverMobile = el.driverMobile;
                            item.driverName = el.driverName;
                            item.endAddress = el.endAddress;
                            item.orderPrice = el.orderPrice;
                            item.orderSerial = el.orderSerial;
                            item.startAddress = el.startAddress;
                            item.currentKey = idx;
                            rowData.push(item)
                        })
                    })
                    this.tableData = rowData;
                    this.getSpanArr(this.tableData)
                    this.loading = false;
                }).catch(err => {
                    this.$message({
                        type: 'info',
                        message: '操作失败，原因：' + err.errorInfo ? err.errorInfo : err.text
                    })
                    this.loading = false;
                })
            },
            getSpanArr(data) {　
                this.spanArr = [];
                this.pos = 0 ;
                for (var i = 0; i < data.length; i++) {
                    if (i === 0) {
                        this.spanArr.push(1);
                        this.pos = 0
                    } else {
                    // 判断当前元素与上一个元素是否相同
                    if (data[i].orderSerial === data[i - 1].orderSerial) {
                            this.spanArr[this.pos] += 1;
                            this.spanArr.push(0);
                        } else {
                            this.spanArr.push(1);
                            this.pos = i;
                        }
                     }
                 }
                // console.log('this.spanArr',this.spanArr)
            },
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                // console.log('row, column, rowIndex, columnIndex',row, column, rowIndex, columnIndex)
                // console.log('rowIndex',rowIndex)
                if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3 || columnIndex === 4 || columnIndex === 5) {
                    const _row = this.spanArr[rowIndex];
                    const _col = _row > 0 ? 1 : 0;
                    // console.log('_row,_col',_row,_col,this.spanArr[rowIndex])
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }
            },
            //模糊查询 分类名称或者code
            handleSearch(type){
              
            },
             //判断是否选中
            getinfomation(selection){
                this.checkedinformation = selection;
            },
             //点击选中当前行
            clickDetails(row, event, column){
                this.$refs.multipleTable.toggleRowSelection(row);
            },
            //详情弹窗
            pushOrderSerial(item){
                this.$router.push({name: '订单详情',query:{ orderSerial:item.orderSerial }});
            },
            handleClick(type,row){
                console.log(row,row.id)
                // let message = row.flag == '0' ? '确认启用当前奖励活动吗？' :'确认禁用当前奖励活动吗？';
                this.$confirm('确认扣除车主行为分吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deductionBehavior(row.id).then(res => {
                        this.$message({
                            type: 'success',
                            message: '操作成功！',
                        })
                        this.firstblood();
                    }).catch(err => {
                        this.$message({
                            type: 'warning',
                            message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                        })
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    })
                })
            }
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    .systemProcessing{
       
    }
</style>

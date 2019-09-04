<template>
    <div class="identicalStyle tadadeAreaCarrier" v-loading="loading">
            <el-form  :inline="true" :model="searchInfo" ref="ruleForm" class="demo-ruleForm classify_searchinfo">
                <el-form-item label="承运商类型" prop="tradeCarrierType">
                    <el-select v-model="searchInfo.tradeCarrierType" placeholder="请选择承运商类型">
                        <el-option
                        v-for="item in optionsTradeCarrierType"
                        :key="item.id"
                        :label="item.name"
                        :value="item.code">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商圈承运商" prop="tradeLineCarrierName">
                    <el-input v-model="searchInfo.tradeLineCarrierName" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="商圈"   prop="tradeName">
                    <el-input v-model="searchInfo.tradeName" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="到达地"   prop="endAreaName">
                    <!-- <vregion :ui="true" @values="regionChange"  class="form-control" ref="vregion">
                        <el-input v-model="searchInfo.endAreaName" ></el-input>
                    </vregion> -->
                    <el-input v-model="searchInfo.endAreaName" ></el-input>
                </el-form-item>
                <el-form-item class="btnChoose fr"  style="margin-left:0;">
                    <el-button type="primary" icon="el-icon-search" plain :size="btnsize" @click="handleSearch('search')">搜索</el-button>
                    <el-button type="info" icon="fontFamily aflc-icon-qingkong" :size="btnsize" plain @click="handleSearch('clear')">清空</el-button>
                </el-form-item>
            </el-form>
            <div class="classify_info">
                <div class="btns_box">
                    <el-button type="primary" icon="el-icon-circle-plus" plain @click="handleClick('new')" :size="btnsize" v-has:SERVICE_LTL_AREA_CARRIER_ADD>新增</el-button>
                </div>
                <div class="info_news">
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        stripe
                        border
                        align = "center"
                        height="100%"
                        @selection-change = "getinfomation"
                        tooltip-effect="dark"
                        @row-click="clickDetails"
                        v-has:SERVICE_LTL_AREA_CARRIER_LIST
                        style="width: 100%"> 
                        <el-table-column
                            type="selection"
                            width="50">
                        </el-table-column>
                        <el-table-column label="序号" sortable width="60">
                            <template slot-scope="scope">
                                {{ (page - 1)*pagesize + scope.$index + 1 }}
                            </template>
                        </el-table-column>  
                        <el-table-column
                            sortable
                            prop="tradeLineCarrierName"
                            label="商圈承运商"
                            >
                            <template slot-scope="scope">
                               <h4 class="moreInfo" @click="handleInfo(scope.row)">{{scope.row.tradeLineCarrierName}}</h4>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tradeCarrierTypeName"
                            :show-overflow-tooltip="true"
                            sortable
                            label="承运商类型"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="tradeName"
                            :show-overflow-tooltip="true"
                            sortable
                            label="商圈"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="endAreaName"
                            :show-overflow-tooltip="true"
                            sortable
                            label="到达地"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="aflcTradeCarrierPrice"
                            :show-overflow-tooltip="true"
                            sortable
                            label="标准货物分类价格"
                            width="250">
                            <template slot-scope="scope">
                               <div v-html="scope.row.aflcTradeCarrierPrice" class="vHtml"></div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="lowerPrice"
                            sortable
                            label="最低一票收费"
                            width="120">
                            <template slot-scope="scope">
                                {{ scope.row.lowerPrice + '元' }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="transportAging"
                            sortable
                            label="运输时效"
                            width="120">
                            <template slot-scope="scope">
                                {{ scope.row.transportAging + '小时' }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="startTime"
                            sortable
                            label="有效开始日期"
                            width="160">
                            <template slot-scope="scope">
                                {{ scope.row.startTime | parseTime('{y}-{m}-{d}') }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="endTime"
                            sortable
                            label="有效结束日期"
                            width="160">
                            <template slot-scope="scope">
                                {{ scope.row.endTime | parseTime('{y}-{m}-{d}') }}
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>   
                <!-- 页码 -->
            <div class="info_tab_footer" v-has:SERVICE_LTL_AREA_CARRIER_LIST>共计:{{ dataTotal }} <div class="show_pager"> <Pager :total="dataTotal" @change="handlePageChange"    ref="pager"/></div> </div>    
    </div>
</template>

<script type="text/javascript">

import { TradeAreaCarrierList } from '@/api/server/lingdan/tradeAreaServicePrice.js'
import { DicTradeCarrier } from '@/api/common.js'
import Pager from '@/components/Pagination/index'
// import vregion from '@/components/vregion/Region.vue'

export default{
      props: {
          isvisible: {
              type: Boolean,
              default: false
            }
        },
      components: {
            Pager,
            // vregion
        },
      data() {
          return {
              btnsize: 'mini',
              loading: false, // 加载
              optionsTradeCarrierType:[{
                  name:'全部',
                  code:""
              }],
              sizes: [20, 50, 100, 400],
              pagesize: 20, // 初始化加载数量
              page: 1, // 初始化页码
              dataTotal: 0,
              searchInfo: {
                    tradeCarrierType:'',
                    tradeName:'',
                    tradeLineCarrierName:'',
                    endAreaCode:'',
                    endAreaName:'',
                },
              tableData: [],
              checkedinformation: [],
            }
        },
      watch: {
          isvisible: {
              handler(newVal, oldVal) {
                  if (newVal) {
                        this.firstblood();
                    } 
                },
                // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
              immediate: true
            }
        },
      created() {

        },
      mounted() {
            this.getParamse();
        },
      beforeDestroy() {
        },
      methods: {
            // regionChange(d) {
            //     // console.log('data:',d)
            //     this.searchInfo.endAreaName = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            //     if(d.area){
            //         this.searchInfo.endAreaCode = d.area.code;
            //     }else if(d.city){
            //         this.searchInfo.endAreaCode = d.city.code;
            //     }else{
            //         this.searchInfo.endAreaCode = d.province ? d.province.code :'';
            //     }
            // },
            // getValue(obj){
            //     return obj ? obj.value:'';
            // },
            handlePageChange(obj) {
                this.page = obj.pageNum
                this.pagesize = obj.pageSize
                this.firstblood()
            },
            getParamse(){
                DicTradeCarrier().then(res => {
                    this.optionsTradeCarrierType = this.optionsTradeCarrierType.concat(res.data);
                })
            },
            // 刷新页面
          firstblood() {
                this.loading = true
                TradeAreaCarrierList(this.page, this.pagesize, this.searchInfo).then(res => {
                    this.tableData = res.data.list;
                    this.dataTotal = res.data.totalCount;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                })
            },
            // 模糊查询 分类名称或者code
          handleSearch(type) {
                if(type == 'clear'){
                    this. searchInfo ={
                        tradeCarrierType:'',
                        tradeName:'',
                        tradeLineCarrierName:'',
                        endAreaCode:'',
                        endAreaName:'',
                    }
                    this.$refs.ruleForm.resetFields();
                }
                if(this.page!= 1){
                    this.page = 1;
                    this.$refs.pager.inputval = this.page;
                    this.$refs.pager.pageNum = this.page;
                }
                this.firstblood()
            },
            handleClick(type){
                switch (type) {
                    case 'new':
                        this.$router.push({name:'发物流新增商圈承运商'});
                        break
                }
            },
             // 判断是否选中
            getinfomation(selection) {
              this.checkedinformation = selection
            },
             // 点击选中当前行
            clickDetails(row, event, column) {
              this.$refs.multipleTable.toggleRowSelection(row)
            },
            // 详情弹窗
            handleInfo(row) {
                this.$router.push({ name: '发物流新增商圈承运商', query: { tradeId: row.id , ifrevise :'1'}})
            },
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    .tadadeAreaCarrier{
        height: 100%;
    }
</style>

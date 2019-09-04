<template>
    <div class="identicalStyle creatQRCode" v-loading="loading">
            <el-form  :inline="true" :model="searchInfo" ref="ruleForm" class="demo-ruleForm classify_searchinfo">
                <el-form-item label="承运商类型" prop="carrierType">
                    <el-select v-model="searchInfo.carrierType" placeholder="请选择承运商类型">
                        <el-option
                        v-for="item in optionsTradeCarrierType"
                        :key="item.id"
                        :label="item.name"
                        :value="item.code">
                        </el-option>
                    </el-select>       
                </el-form-item>
                <el-form-item label="线路承运商" prop="carrierName">
                    <el-input v-model="searchInfo.carrierName" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="出发地"   prop="startLocation">
                    <!-- <vregion :ui="true" @values="regionChangeStart"  class="form-control" ref="vregion1">
                        <el-input v-model="searchInfo.startLocation" ></el-input>
                    </vregion> -->
                    <el-input v-model="searchInfo.startLocation" ></el-input>
                </el-form-item>
                <el-form-item label="到达地"   prop="endLocation">
                    <!-- <vregion :ui="true" @values="regionChangeEnd"  class="form-control" ref="vregion2">
                        <el-input v-model="searchInfo.endLocation" ></el-input>
                    </vregion> -->
                    <el-input v-model="searchInfo.endLocation" ></el-input>
                </el-form-item>
                <el-form-item class="btnChoose fr"  style="margin-left:0;">
                    <el-button type="primary" icon="el-icon-search" plain :size="btnsize" @click="handleSearch('search')">搜索</el-button>
                    <el-button type="info" icon="fontFamily aflc-icon-qingkong" :size="btnsize" plain @click="handleSearch('clear')">清空</el-button>
                </el-form-item>
            </el-form>
            <div class="classify_info">
                <div class="btns_box">
                    <el-button type="primary" icon="el-icon-circle-plus" plain @click="handleClick('new')" :size="btnsize" v-has:SERVICE_LTL_RANGE_CARRIER_ADD>新增</el-button>
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
                        v-has:SERVICE_LTL_RANGE_CARRIER_LIST
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
                            prop="carrierName"
                            label="线路承运商"
                            width="150">
                            <template slot-scope="scope">
                               <h4 class="moreInfo" @click="handleInfo(scope.row)">{{scope.row.carrierName}}</h4>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="carrierTypeName"
                            :show-overflow-tooltip="true"
                            sortable
                            label="承运商类型"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="startAreaName"
                            :show-overflow-tooltip="true"
                            sortable
                            label="出发地"
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
                            :show-overflow-tooltip="true"
                            prop="lightGoods"
                            sortable
                            label="轻货"
                            width="250">
                            <template slot-scope="scope">
                               <div v-html="scope.row.lightGoods" class="vHtml"></div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            :show-overflow-tooltip="true"
                            prop="weightGoods"
                            sortable
                            label="重货"
                            width="250">
                            <template slot-scope="scope">
                               <div v-html="scope.row.weightGoods" class="vHtml"></div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="lowerPrice"
                            sortable
                            label="最低一票收费"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="transportAging"
                            sortable
                            label="运输时效"
                            width="120">
                            <template slot-scope="scope">
                                {{ scope.row.transportAging | dataParams}}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="carrierStartTime"
                            sortable
                            label="有效开始日期"
                            width="160">
                            <template slot-scope="scope">
                                {{ scope.row.carrierStartTime | parseTime('{y}-{m}-{d}') }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="carrierEndTime"
                            sortable
                            label="有效结束日期"
                            width="160">
                            <template slot-scope="scope">
                                {{ scope.row.carrierEndTime | parseTime('{y}-{m}-{d}') }}
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>   
                <!-- 页码 -->
            <div class="info_tab_footer" v-has:SERVICE_LTL_RANGE_CARRIER_LIST>共计:{{ dataTotal }} <div class="show_pager"> <Pager :total="dataTotal" @change="handlePageChange"  :sizes="sizes"  ref="pager"/></div> </div>    
    </div>
</template>

<script type="text/javascript">
import { TradeLineCarrierlist } from '@/api/server/lingdan/TradeAreaLineCarrier.js'
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
    filters:{
        // 过滤器名称（任何名称）： 对应过滤函数方法名称
        // dataParams:function(val){
        //     if(!val) return ''
        //     if(parseInt(val) <= 24){
        //         return val + '小时'
        //     }else{
        //         let int = parseInt(val / 24);
        //         let dotted = val % 24 ;
        //         let result = int+'天'+dotted+'小时'
        //         return result
        //     } 
        // }
    },
    data() {
        return {
            btnsize: 'mini',
            loading: false, // 加载
            sizes: [20, 50, 100, 400],
            pagesize: 20, // 初始化加载数量
            page: 1, // 初始化页码
            dataTotal: 0,
            searchInfo: {
                carrierType:'',//承运商类型
                carrierName:'',
            //   startAreaCode:'',
            //   startAreaName:'',
            //   endAreaCode:'',
            //   endAreaName:'',
                endLocation:'',
                startLocation:''

            },
            tableData: [],
            checkedinformation: [],
            optionsTradeCarrierType:[{
                name:'全部',
                code:""
            }],
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
    created() {

    },
    mounted() {
        this.getParamse();
    },
    beforeDestroy() {
    },
    methods: {
        // regionChangeStart(d) {
        //     // console.log('data:',d)
        //     this.searchInfo.startAreaName = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
        //     if(d.area){
        //         this.searchInfo.startAreaCode = d.area.code;
        //     }else if(d.city){
        //         this.searchInfo.startAreaCode = d.city.code;
        //     }else{
        //         this.searchInfo.startAreaCode = d.province ? d.province.code :'';
        //     }
        // },
        // regionChangeEnd(d) {
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
        getParamse(){
            DicTradeCarrier().then(res => {
                this.optionsTradeCarrierType = this.optionsTradeCarrierType.concat(res.data);
            })
        },
        handlePageChange(obj) {
            this.page = obj.pageNum;
            this.pagesize = obj.pageSize;
            this.firstblood();
        },
        // 刷新页面
        firstblood() {
            this.loading = true
            TradeLineCarrierlist(this.page, this.pagesize, this.searchInfo).then(res => {
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
                    carrierType:'',//承运商类型
                    carrierName:'',
                    endLocation:'',
                    startLocation:''
                }
            }
            if(this.page!= 1){
                this.page = 1;
                this.$refs.pager.inputval = this.page;
                this.$refs.pager.pageNum = this.page;
            }
            this.firstblood();
        },
        handleClick(type){
            switch (type) {
                case 'new':
                    this.$router.push({ name: '发物流新增线路承运商'})
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
            this.$router.push({ name: '发物流新增线路承运商', query: { lineId: row.id , ifrevise :'1'}})
        },
    }
}
</script>

<style type="text/css" lang="scss" scoped>
    .creatQRCode{
        height: 100%;
    }
</style>

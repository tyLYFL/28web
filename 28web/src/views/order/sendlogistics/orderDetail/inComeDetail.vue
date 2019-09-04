<template>
    <div class="TCorderInfo clearfix" v-loading="loading">
        <!--  分账信息 -->
        <div class="orderInfo-collapse collapseInfo">
            <h2>分账信息</h2>
            <div class="essentialInformation">
                <p>
                    <span>货主支付运费：</span>
                    <span class="fontRed">{{formData.waybillExpenses.payAmount || 0}}</span>
                </p>
                <p>
                    <span>区代入账金额：</span>
                    <span class="fontRed">{{formData.waybillExpenses.areaAgencyWaitAmount || 0}}</span>
                </p>
                <p>
                    <span>专线承运商入账金额：</span>
                    <span class="fontRed">{{formData.waybillExpenses.carriersWaitAmount || 0 }}</span>
                </p>
                <p>
                    <span>平台分润金额：</span>
                    <span class="fontRed">{{formData.waybillExpenses.platformWaitPrice}}</span>
                </p>
            </div>
            <div class="essentialInformation">
                <p>
                    <span>入账状态：</span>
                    <span class="fontRed">{{formData.waybillExpenses.entryAccountStatus}}</span>
                </p>
            </div>         
        </div>
        <!-- 收支明细 -->
        <div class="orderInfo-collapse collapseInfo">
            <h2>收支明细</h2>
            <div class="essentialInformation" >
            <el-table style="width: 100%" :data="formData.orderPaymentList" ref="multipleTable" stripe border highlight-current-row >
                <el-table-column  label="交易流水号" prop="orderSerial" show-overflow-tooltip></el-table-column>
                <el-table-column  label="账户" prop="accountName" show-overflow-tooltip></el-table-column>
                <el-table-column  label="账户类型" prop="accountTypeName" show-overflow-tooltip></el-table-column>
                <el-table-column  label="交易类型" prop="tradeTypeName" show-overflow-tooltip></el-table-column>
                <el-table-column  label="收支类型" prop="incomeExpendTypeName" show-overflow-tooltip></el-table-column>
                <el-table-column  label="交易金额" prop="payTotal" show-overflow-tooltip></el-table-column>
                <el-table-column  label="交易方式" prop="payWayName" show-overflow-tooltip></el-table-column>
                <el-table-column  label="交易时间" prop="payTime" show-overflow-tooltip>
                    <template slot-scope="scope">{{scope.row.payTime | parseTime}}</template>
                </el-table-column>
                <el-table-column  label="备注" prop="tradeDes" show-overflow-tooltip></el-table-column>
           </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import { parseTime,pickerOptions2 } from '@/utils/index.js'
import { payMentDetails } from '@/api/order/logistics/logistics1.js'
export default {
    props:{
        isvisible: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            loading: false,    
            formData: {},
        }
    },
    methods:{
    firstblood(){
        this.loading = true;
        payMentDetails(this.$route.query.orderSerial).then(res=>{
            this.formData = res.data;
            this.loading = false;
        }).catch(err => {
            this.$message({
                type: 'info',
                message: '操作失败，原因：' + err.errorInfo ? err.errorInfo : err.text
            })
            this.loading = false
        })
    },
    },
    watch:{
        isvisible:{
          handler(newVal,oldVal){
            if (newVal) {
            this.firstblood()
            }   
          },
          immediate: true
      }
    },
}
</script>


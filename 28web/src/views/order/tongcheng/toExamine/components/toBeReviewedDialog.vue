<template>
    <div class="toBeReviewedDialog commoncss">
        <el-dialog :title='formtitle' :close-on-click-modal="false" v-el-drag-dialog top="5vh" :visible="dialogFormVisible" @close="close">
            <el-form   :model="standForm" :rules="newrules" label-position="right"  ref="ruleForm"  :label-width="formLabelWidth">
                <h2>货主支付金额校验</h2>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <p class="paramsStyle">货主支付：{{initData.factPay}}</p>
                    </el-col>
                </el-row> 
                <table class="systemTitle">
                    <thead>
                        <th v-for="(item,idx) in shipperParams" :key="idx">
                            <p>{{item.name}}</p>
                            <p v-if="item.mark">{{item.mark}}</p>
                        </th>
                    </thead>
                    <tbody>
                       <tr>
                           <td>{{initData.startPrice}}</td>
                           <td>{{initData.outMileagePrice}}</td>
                           <td>{{initData.unloadingFee}}</td>
                           <td>{{initData.totalExtraCharge}}</td>
                           <td>{{initData.tip}}</td>
                           <td>{{initData.moreWayPrice}}</td>
                           <td>{{initData.driverChangeFee}}</td>
                           <td>{{initData.shipperInsuranceFee}}</td>
                           <td>{{initData.preferentialPrice}}</td>
                           <td>{{initData.reward }}</td>
                           <td>{{initData.changeUnloadingFee || 0}}</td>
                           <td>{{initData.factPay}}</td>
                       </tr>
                    </tbody>
                </table>
                <h2>车主收入金额校验</h2>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <p class="paramsStyle">审核前车主收入：{{initData.driverIncome}}</p>
                    </el-col>
                </el-row> 
                <table class="systemTitle">
                    <thead>
                        <th v-for="(item,idx) in driverParams" :key="idx">
                            <p>{{item.name}}</p>
                            <p v-if="item.mark">{{item.mark}}</p>
                        </th>
                    </thead>
                    <tbody>
                       <tr>
                            <td>{{initData.orderPrice}}</td>
                            <td>{{initData.extraTip || 0}}</td>
                            <td>{{initData.driverReward}}</td>
                            <td>{{initData.platMaidFee}}</td>
                            <td>{{initData.driverInsuranceFee}}</td>
                            <td>{{initData.deductionDriverReward}}</td>
                            <td>{{initData.deductionPreferentialPrice}}</td>
                            <td>{{initData.deductionReward}}</td>
                            <td>{{(initData.orderPrice + initData.extraTip + initData.driverReward - initData.platMaidFee - initData.driverInsuranceFee - initData.deductionDriverReward - initData.deductionPreferentialPrice - initData.deductionReward)}}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>审核处理</h2>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item  label="处理结果：" prop="auditStatus" class="exFormItem">
                            <el-radio-group v-model="standForm.auditStatus">
                                <el-radio label="AF0850603" >审核通过</el-radio>
                                <el-radio label="AF0850604" >审核不通过</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item  label="" prop="auditStatus" v-if="standForm.auditStatus == 'AF0850603'" label-width="0px">
                            <span>车主钱包可提现金额转入金额：{{(initData.orderPrice + initData.extraTip +  initData.driverReward - initData.platMaidFee - initData.driverInsuranceFee - initData.deductionDriverReward - initData.deductionPreferentialPrice - initData.deductionReward)}}</span>
                        </el-form-item>
                        <el-form-item  label="不通过原因：" prop="auditStatus" v-if="standForm.auditStatus == 'AF0850604'">
                            <el-select v-model="standForm.reauditFailsReason" clearable placeholder="请选择" size="small">
                                <el-option
                                v-for="item in optionsDis"
                                :key="item.code"
                                :label="item.name"
                                :value="item.name">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row> 
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" plain  icon="el-icon-success" @click="submitForm('ruleForm')" :disabled="btnShow">保 存</el-button>
                <el-button type="primary" plain icon="el-icon-error" @click="close">取 消</el-button>
            </div> 
        </el-dialog>
    </div>
</template>

<script>

import { orderRecordAuditFinish,orderRecordAuditExpenses } from '@/api/order/ordermange'
import { objectMerge2 } from '@/utils/'
import { DicOrderDis } from '@/api/common'

export default {
    name: 'toBeReviewedDialog',
    props: {
        dialogFormVisible:{
            type:Boolean,
            required:true
        },
        formtitle:{
            type:String,
            required:false,
            default:'订单复审'
        },
        itemForm:{
            type:Object,
        }
    },
    components:{
    },
    data() {
      return {
        btnShow:false,
        formLabelWidth:'100px',
        initData:{},
        standForm:{
            "auditStatus": "AF0850603",//审核状态（待审核 AF0850601、待复审 AF0850602、已复审 AF0850603、复审不通过 AF0850604）
            "orderSerial": "",//订单流水号
            "reauditFailsReason": "",//复审不通过原因
        },
        optionsDis:[],
        newrules: {
         
        },
        shipperParams:[{name:'起步价',mark:'( + )'},{name:'超里程费',mark:'( + )'},{name:'等候费',mark:'( + )'},{name:'额外服务费',mark:'( + )'},{name:'小费',mark:'( + )'},{name:'多途径地费',mark:'( + )'},{name:'车主改价费',mark:'( + )'},{name:'货主货物保障费',mark:'( + )'},{name:'优惠券抵扣',mark:'( - )'},{name:'在线交易优惠金',mark:'( - )'},{name:'等候费改价',mark:'( - )'},{name:'总计',mark:''},],
        driverParams:[{name:'运费总额',mark:'( + )'},{name:'额外小费',mark:'( + )'},{name:'在线交易奖励金',mark:'( + )'},{name:'平台抽佣费',mark:'( - )'},{name:'车主货物保障费',mark:'( - )'},{name:'扣在线交易奖励金',mark:'( - )'},{name:'扣优惠券抵扣',mark:'( - )'},{name:'扣在线交易优惠金',mark:'( - )'},{name:'总计',mark:''},],
      };
    },
    watch:{
        dialogFormVisible:{
            handler(newVal,oldVal){
                if(newVal){
                    this.reviseForms();
                }
            },
            deep:true
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        reviseForms(){
            orderRecordAuditExpenses(this.itemForm.orderSerial).then(res => {
                this.initData = res.data;
            })
        },
        close(){
            if(this.dialogFormVisible){
                this.$emit('update:dialogFormVisible',false);
                this.$refs.ruleForm.resetFields();
                this.clearForms();
                this.$emit('renovate');
                this.btnShow = false;
            }
        },
        //初始化选择项数据
        init(){
            DicOrderDis().then(res => {
                this.optionsDis = res.data;
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.btnShow = true;
                    this.standForm.orderSerial = this.itemForm.orderSerial;
                    let forms = objectMerge2(this.standForm);
                    orderRecordAuditFinish(forms).then(res =>{
                        this.$message({
                            type: 'success',
                            message: '操作成功！'
                        })
                        this.close();
                    }).catch(err => {
                        this.$message({
                            type: 'info',
                            message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                        })
                        this.btnShow = false;
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: '请填写完整数据!'
                    })
                    return false;
                }
            });
        },
        clearForms(){
            for (const i in this.standForm) {
                if(i == 'auditStatus'){
                    this.standForm[i] = "AF0850603";
                }else{
                    this.standForm[i] = ''
                }
            } 
        },
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
    .toBeReviewedDialog{
        h2{
            border-bottom: solid 2px #e0e0e0;
            line-height: 25px;
            font-size: 18px;
            padding: 0px 0 18px 0;
            color: #333333;
            font-weight: bold;
            font-stretch: normal;
            margin-bottom: 20px;
        }
        .exFormItem{
            margin-bottom: 10px;
        }
        .systemTitle{
            margin-bottom: 20px;
            th{
                p{
                    line-height: 25px;
                }
            }
        }
        .paramsStyle{
            line-height: 30px;
            font-size: 16px;
        }
    }
</style>

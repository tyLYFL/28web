<template>
  <div class="newLineServicePrice carrierCommonStyle">
    <el-form :model="ruleForm.aflcTradeCarrier" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
        <div class="searchInformation rangeCommon">
            <h2>基本信息</h2>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="商圈所在地：" prop="tradeAreaName" class="location_line">
                        <el-input v-model="ruleForm.aflcTradeCarrier.tradeAreaName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <vregion :ui="true" @values="regionChangeTradeArea"  class="form-control" ref="vregion" v-else>
                            <el-input v-model="ruleForm.aflcTradeCarrier.tradeAreaName" ></el-input>
                        </vregion>
                    </el-form-item>  
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="商圈：" prop="tradeId" class="location_line">
                        <el-input v-model="ruleForm.aflcTradeCarrier.tradeName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <el-select v-model="ruleForm.aflcTradeCarrier.tradeId" :loading="loadingTrade" :no-data-text = "dataText" filterable placeholder="请选择商圈"  @focus="getTradeList"  v-else>
                            <el-option
                            v-for="item in optionsTrade"
                            :key="item.tradeId"
                            :label="item.tradeName"
                            :value="item.tradeId">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="到达地：" prop="endAreaName" class="location_line">
                        <el-input v-model="ruleForm.aflcTradeCarrier.endAreaName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <vregion :ui="true" @values="regionChangeEnd"  class="form-control" ref="vregion" v-else>
                            <el-input v-model="ruleForm.aflcTradeCarrier.endAreaName" ></el-input>
                        </vregion>
                    </el-form-item>  
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="商圈承运商：" prop="tradeLineCarrierName" class="location_line">
                        <el-input v-model="ruleForm.aflcTradeCarrier.tradeLineCarrierName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <CompanySearch @returnCompany = 'getCompany' v-model="ruleForm.aflcTradeCarrier.tradeLineCarrierName" v-else/>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="承运商类型：" prop="tradeCarrierType" class="location_line">
                        <el-input v-model="ruleForm.aflcTradeCarrier.tradeCarrierTypeName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <el-select v-model="ruleForm.aflcTradeCarrier.tradeCarrierType" placeholder="请选择承运商类型" v-else>
                            <el-option
                            v-for="item in optionsTradeCarrierType"
                            :key="item.id"
                            :label="item.name"
                            :value="item.code">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
        <div class=" priceTime rangeCommon">
            <h2>价格时效</h2>
            <el-form-item label="承运有效期：" prop="timeVal" class="location_line">
                <el-date-picker
                    v-model="ruleForm.aflcTradeCarrier.timeVal"
                    type="daterange"
                    start-placeholder="开始日期"
                    value-format="timestamp"
                    unlink-panels
                    end-placeholder="结束日期"
                    :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="标准货物分类价格：" class="jieti" prop="" required>
                <p>(阶梯价格最大值不填，代表无穷大，例如：10- ，代表10以上；区间指标准货物分类数据区间，单价指标准货物分类单位的运费；例如：某商圈的标准货物分类单位为“条”，则代表在一定条数区间内，每条的价格)</p>
                <div class="goodsPriceChoose">
                    <el-row class="goodsPriceChoose_title">
                        <el-col :span="12">标准货物分类数量区间</el-col>
                        <el-col :span="12">单价</el-col>
                    </el-row>
                    <el-row v-for="(form,keys) in ruleForm.aflcTradeCarrierStandardPriceList" :key="keys">
                        <el-col :span="12" class="intervalNum blackBook">
                            <el-input v-model.number="form.goodsClassificationInterval1" v-numberOnly placeholder="包含" maxlength="7" disabled></el-input>
                            <span>----</span>
                            <el-input v-model.number="form.goodsClassificationInterval2" :disabled="unable" v-numberOnly placeholder="包含，整数"  maxlength="7" @change="ifWrong(ruleForm.aflcTradeCarrierStandardPriceList,keys,form,'goodsClassificationInterval','standPrice')"></el-input>
                        </el-col>
                        <el-col :span="12" class="fixPrice blackBook">
                            <!-- <el-input v-model="form.unitPrice" :disabled="unable" v-numberOnly:point maxlength="7"></el-input> -->
                            <NumberOnlyPoint v-model="form.unitPrice" placeholderTxt="报价" length="7"/>
                            <div class="iconItem">
                                <span  @click="addItem('standPrice',keys,form)" class="addItem" v-if="keys == ruleForm.aflcTradeCarrierStandardPriceList.length-1 && keys != 4">
                                </span>
                                <span  @click="reduceItem(keys,'standPrice')" class="reduceItem" v-if="keys == ruleForm.aflcTradeCarrierStandardPriceList.length-1 && ruleForm.aflcTradeCarrierStandardPriceList.length !=1">
                                </span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-form-item>

            <el-form-item label="最低一票收费：" prop="lowerPrice">
                <!-- <input v-model="ruleForm.aflcTradeCarrier.lowerPrice" placeholder="报价" :disabled="unable" v-numberOnly:point>
                     <template slot="append">元</template>
                </input>  -->
                <NumberOnlyPoint v-model="ruleForm.aflcTradeCarrier.lowerPrice" placeholderTxt="报价" length="7" slotTxt = "元"/>
            </el-form-item>

             <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="运输时效：" prop="transportAging">
                        <el-input placeholder="请输入" v-numberOnly v-model="ruleForm.aflcTradeCarrier.transportAging"  maxlength="3" :disabled="unable">
                            <template slot="append">小时</template>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="发车频率：" prop="departureHzData">
                        <el-input placeholder="请输入" v-numberOnly v-model="ruleForm.aflcTradeCarrier.departureHzData" v-on:change="checkNumber(ruleForm.aflcTradeCarrier.departureHzData,'departureHzData')" maxlength="3"  :disabled="unable">
                            <template slot="append">天</template>
                        </el-input>
                        <el-input placeholder="请输入" v-numberOnly v-model="ruleForm.aflcTradeCarrier.departureHzTime" v-on:change="checkNumber(ruleForm.aflcTradeCarrier.departureHzTime,'departureHzTime')" maxlength="3" :disabled="unable">
                            <template slot="append">次</template>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="增值服务：" prop="incrementServiceArr">
                <el-checkbox-group v-model="ruleForm.aflcTradeCarrier.incrementServiceArr">
                    <el-checkbox-button v-for="item in optionsHighValue" :label="item.code" :key="item.id">{{item.name}}</el-checkbox-button>
                </el-checkbox-group>
            </el-form-item>
        </div>
        <el-form-item class="fromfooter">
            <el-button type="primary" plain  icon="el-icon-success" @click="submitForm('ruleForm')">保存</el-button>
            <el-button type="primary" plain icon="el-icon-error" v-if="ifShowRangeType != '1'" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>

import '../../carrierCommon.scss'
import { newTradeAreaCarrier,aflcTradeAreaTradeList,TradeAreaCarrierDetails } from '@/api/server/lingdan/tradeAreaServicePrice.js'
import { data_LogisticsCompany,DicTradeCarrier } from '@/api/common.js'
import vregion from '@/components/vregion/Region.vue'
import CompanySearch from '@/components/CustomerSearch/companyList'
import NumberOnlyPoint from '@/components//NumberOnlyPoint/index'

export default {
    components:{
        vregion,
        CompanySearch,
        NumberOnlyPoint
    },
    data() {
        var checkStartLocation = (rule,value,callback) => {
            // console.log('this.ruleForm.startCity',this.ruleForm.startProvince)
            // console.log(value)
            if (value == '') {
                callback(new Error('请选择区域'));
            } else if(this.ruleForm.aflcTradeCarrier.tradeCity == '' && this.ruleForm.aflcTradeCarrier.tradeProvince !=  '北京市' && this.ruleForm.aflcTradeCarrier.tradeProvince !=  '天津市' && this.ruleForm.aflcTradeCarrier.tradeProvince !=  '重庆市' && this.ruleForm.aflcTradeCarrier.tradeProvince !=  '上海市' ){
                callback(new Error('至少选择到市级范围'));
            }else{
                callback();
            }
        };

        var checkTransportAging = (rule,value,callback) => {
            // console.log('valuevalue',value)
            if (!value) {
                callback(new Error('请输入运输时效'));
            }else if(parseInt(value) <= 0){
                callback(new Error('运输时效不可为0'));
            }else{
                callback();
            }
        };
        return {
            unable:false,
            optionsHighValue:[],
            loadingTrade:false,
            dataText:'该区域暂无商圈',
            optionsTrade:[],//商圈
            optionsTradeCarrierType:[],//承运商类型
            ifShowRangeType:'0',
            testTime:[],
            ruleForm: {
                //商圈承运商
                aflcTradeCarrier:{
                    tradeName:'',//商圈名称
                    tradeId:'',//商圈id
                    tradeProvince:'',//商圈省
                    tradeCity:'',//商圈市
                    tradeArea:'',//商圈区
                    tradeAreaCode:'',//商圈区域编码
                    tradeAreaName:'',//商圈区域名称
                    tradeLineCarrierId:'',//商圈承运商
                    tradeLineCarrierName:'',//商圈承运商
                    tradeCarrierType:'',//商圈承运商类型
                    tradeCarrierTypeName:'',
                    endProvince:'',//到达地省
                    endCity:'',//到达地市
                    endArea:'',//到达地区
                    endAreaCode:'',//到达地
                    endAreaName:'',//endAreaName
                    startTime:'',//承运有效开始时间
                    endTime:'',//承运有效结束时间
                    departureHzData:'',//发车频率天
                    departureHzTime:'',//发车频率次
                    lowerPrice:'',//最低一票收费
                    incrementService:'',//增值服务
                    incrementServiceCode:'',//增值服务code
                    timeVal:[],
                    incrementServiceArr:[],
                },
                //商圈承运商标准货物定价
                aflcTradeCarrierStandardPriceList:[{
                    goodsClassificationInterval1:'0',//标准货物分类区间1
                    goodsClassificationInterval2:'',//标准货物分类区间2
                    unitPrice:'',
                }]
            },
            rules: {
                areaName:[
                    { required: true, validator: checkStartLocation, trigger: 'change' },
                ],
                tradeAreaName:{required: true, validator: checkStartLocation, trigger: 'change' },
                tradeId:{ required: true, message:'请选择商圈', trigger: 'change' },
                endAreaName:{required: true, validator: checkStartLocation, trigger: 'change' },
                tradeLineCarrierName:{required: true, message:'请选择商圈承运商', trigger: 'change'},
                tradeCarrierType:{required: true, message:'请选择承运商类型', trigger: 'change'},
                timeVal:{type: 'array', required: true, message: '请选择承运有效期', trigger: 'change'},
                lowerPrice:{required: true, message:'请输入最低一票收费', trigger: 'change'},
                transportAging:{required: true, validator: checkTransportAging, trigger: ['change','blur']},
            }
        }
    },
    watch:{
       'ruleForm.aflcTradeCarrier.timeVal':{
            handler(newVal,oldVal){
                console.log('ruleForm.aflcTradeCarrier.timeVal',newVal,oldVal)
               
            },
            deep:true
        }
    },
    mounted(){
        this.getParams();
        this.getMoreInformation();
    },
    methods:{
        checkNumber(value,type){
            if(value && parseInt(value) <= 0){
                switch(type){
                    case 'departureHzData':
                        this.ruleForm.aflcTradeCarrier.departureHzData = '';
                        break;
                    case 'departureHzTime':
                        this.ruleForm.aflcTradeCarrier.departureHzTime = '';
                        break;
                }
            }
        },
        ifWrong(item,idx,obj,label,classfy){
            // console.log(item,idx,obj,label,classfy)
            if(item[idx][label+'2'] != ''){
                let flag = item[idx][label+'2'] <= item[idx][[label+'1']] ? true : false;

                if(item[idx][label+'2'] && (item.length == (idx+1)) && !flag){
                    this.addItem(classfy,idx,item)
                }
                if(flag){
                    this.$message({
                        type: 'warning',
                        message: '标准货物分类数量区间的最大值应大于最小值' 
                    })
                    return item[idx][label+'2'] = ''
                }
                else if(item.length > (idx+1)){
                    item[idx+1][[label+'1']] = item[idx][label+'2'] ;
                    if(item[idx+1][label+'2']){
                        if(item[idx+1][label+'2'] <= item[idx+1][[label+'1']]){
                            this.$message({
                                type: 'warning',
                                message: '标准货物分类数量区间的最大值应大于最小值' 
                            })
                            item.splice(idx+1);
                            return this.addItem(classfy,idx,item)
                        }
                    }
                }
            }else{
                if(item.length == (idx+1)){

                }else{
                    item.splice(idx+1);
                }
            }
        },
        regionChangeTradeArea(d){
            this.ruleForm.aflcTradeCarrier.tradeAreaName = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            this.ruleForm.aflcTradeCarrier.tradeProvince = d.province ? d.province.name : '';
            this.ruleForm.aflcTradeCarrier.tradeCity = d.city ? d.city.name : '';
            this.ruleForm.aflcTradeCarrier.tradeArea = d.area ? d.area.name : '';
            if(d.area){
                this.ruleForm.aflcTradeCarrier.tradeAreaCode = d.area.code;
            }else if(d.city){
                this.ruleForm.aflcTradeCarrier.tradeAreaCode = d.city.code;
            }else{
                this.ruleForm.aflcTradeCarrier.tradeAreaCode = d.province ? d.province.code :'';
            }
        },
        regionChangeEnd(d) {
            // console.log('data:',d)
            this.ruleForm.aflcTradeCarrier.endAreaName = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            this.ruleForm.aflcTradeCarrier.endProvince = d.province ? d.province.name : '';
            this.ruleForm.aflcTradeCarrier.endCity = d.city ? d.city.name : '';
            this.ruleForm.aflcTradeCarrier.endArea = d.area ? d.area.name : '';
            if(d.area){
                this.ruleForm.aflcTradeCarrier.endAreaCode = d.area.code;
            }else if(d.city){
                this.ruleForm.aflcTradeCarrier.endAreaCode = d.city.code;
            }else{
                this.ruleForm.aflcTradeCarrier.endAreaCode = d.province ? d.province.code :'';
            }
        },
        getCompany(val){
            // console.log('belongSalesman',val)
            this.ruleForm.aflcTradeCarrier.tradeLineCarrierId = val.id;
            this.ruleForm.aflcTradeCarrier.tradeLineCarrierName = val.companyName;
        },
        getTradeList(){
            this.optionsTrade = [];
            if(this.ruleForm.aflcTradeCarrier.tradeAreaCode == ''){
                return  this.$message({
                    type: 'warning',
                    message: '请先选择商圈所在地！'
                })
            }else{
                this.loadingTrade = true;
                aflcTradeAreaTradeList(this.ruleForm.aflcTradeCarrier.tradeAreaCode).then(res => {
                    setTimeout(() => {
                        this.loadingTrade = false;
                        this.optionsTrade = res.data;
                        if(this.optionsTrade == [] && this.ruleForm.aflcTradeCarrier.tradeId){
                            this.ruleForm.aflcTradeCarrier.tradeId = ''
                        }
                    }, 200);
                }).catch(err => {
                    this.ruleForm.aflcTradeCarrier.tradeId = '';
                })
            }
        },
        getValue(obj){
            return obj ? obj.value:'';
        },
        radioChange(value,type){
            if(this[type][value].radio == '1'){
                this[type][value].unitPrice = '';
            }else{
                this[type][value].cost = '';
            }
            this.$forceUpdate()
        },
        //获取增值服务定价
        getMoreInformation(){
            data_LogisticsCompany().then(res=> {
                this.optionsHighValue = res.data;
            });
            DicTradeCarrier().then(res => {
                this.optionsTradeCarrierType = res.data;
            })
        },
        getParams(){
            if(this.$route.query.tradeId){
                this.ifShowRangeType = this.$route.query.ifrevise;//1是修改，2是详情
                let tradeId = this.$route.query.tradeId;//接收数据
                // console.log('```',areaCode,this.ifShowRangeType)
                TradeAreaCarrierDetails(tradeId).then(res=>{
                    this.ruleForm = res.data;
                    this.ruleForm.aflcTradeCarrierStandardPriceList.sort(function(a, b) {
                        return a.goodsClassificationInterval1 - b.goodsClassificationInterval1
                    })       
                    this.$set(this.ruleForm.aflcTradeCarrier,'incrementServiceArr', JSON.parse(this.ruleForm.aflcTradeCarrier.incrementServiceCode))
                    this.$set(this.ruleForm.aflcTradeCarrier, 'timeVal', [this.ruleForm.aflcTradeCarrier.startTime,this.ruleForm.aflcTradeCarrier.endTime])
                })

            }
        },
        //添加子节点新增
        addItem(type,idx,item){
            // console.log(type)
            switch(type){
                case 'standPrice':
                        this.ruleForm.aflcTradeCarrierStandardPriceList.push({
                            goodsClassificationInterval1:this.ruleForm.aflcTradeCarrierStandardPriceList[idx].goodsClassificationInterval2,//干线费区间1
                            goodsClassificationInterval2:'',//干线费区间2
                            unitPrice:'',//费率
                        }); 
                    break;
            }
        },
        //删除子节点新增
        reduceItem(idx,type,item){
            // console.log(idx,type)
            switch(type){
                case 'standPrice':
                    this.ruleForm.aflcTradeCarrierStandardPriceList.splice(idx,1);
                    this.ruleForm.aflcTradeCarrierStandardPriceList[idx-1].goodsClassificationInterval2 = '';
                    break;
            }
        },  
        completeName(){
            this.ruleForm.aflcTradeCarrier.startTime =  this.ruleForm.aflcTradeCarrier.timeVal[0] ? this.ruleForm.aflcTradeCarrier.timeVal[0] : '';
            this.ruleForm.aflcTradeCarrier.endTime =  this.ruleForm.aflcTradeCarrier.timeVal[1] ? this.ruleForm.aflcTradeCarrier.timeVal[1] :'';
            if(this.ifShowRangeType!= '1' ){
                this.ruleForm.aflcTradeCarrier.tradeName = this.optionsTrade.find(item => item.tradeId ==  this.ruleForm.aflcTradeCarrier.tradeId)['tradeName'];
            }
            // console.log(this.ruleForm.aflcTradeCarrier.tradeId,this.ruleForm.aflcTradeCarrier.tradeName)
            let incrementServiceName = [];
            this.ruleForm.aflcTradeCarrier.incrementServiceArr.forEach(el => {
                this.optionsHighValue.forEach(item => {
                    if(el == item.code){
                        incrementServiceName.push(item.name);
                    }
                })
            })
            this.ruleForm.aflcTradeCarrier.incrementServiceCode = JSON.stringify(this.ruleForm.aflcTradeCarrier.incrementServiceArr);
            this.ruleForm.aflcTradeCarrier.incrementService = JSON.stringify(incrementServiceName);
        },
        //提交按钮
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let ifNull = true;
                    let messageInfo;
                    this.ruleForm.aflcTradeCarrierStandardPriceList.forEach(item => {
                        // console.log(item.goodsClassificationInterval1,item.unitPrice)
                        if((item.goodsClassificationInterval1+'') == ''){
                            messageInfo= '标准货物分类价格区间最小值不可为空' 
                            ifNull = false;
                        }else if(item.unitPrice == ''){
                            messageInfo= '标准货物分类价格区间单价不可为空' 
                            ifNull = false;
                        }
                    })
                    if(ifNull){
                        this.completeName();
                        let commitFunction = newTradeAreaCarrier(this.ruleForm);
                        commitFunction.then(res => {
                            if(res.status == 200){
                                this.$alert('操作成功', '提示', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        sessionStorage.setItem('tradeAreaCarrierName','tradeAreaLineCarrier');
                                        this.$router.push({name:'发物流商圈承运商'});
                                    }
                                });
                            }else{
                                this.$message({
                                    type: 'info',
                                    message: '操作失败，原因：' + (res.errorInfo ? res.errorInfo : res.text)
                                })
                            }
                        }).catch(err=>{
                            this.$message({
                                type: 'info',
                                message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                            })
                        })
                        }else{
                        this.$message({
                            type: 'warning',
                            message: messageInfo
                        })
                    }
                } else {
                    this.$message({
                        type: 'info',
                        message: '请填写完整信息' 
                    })
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.$refs.vregion.clear();
            this.ruleForm = {
                //商圈承运商
                aflcTradeCarrier:{
                    tradeName:'',//商圈名称
                    tradeId:'',//商圈id
                    tradeProvince:'',//商圈省
                    tradeCity:'',//商圈市
                    tradeArea:'',//商圈区
                    tradeAreaCode:'',//商圈区域编码
                    tradeAreaName:'',//商圈区域名称
                    tradeLineCarrierId:'',//商圈承运商
                    tradeLineCarrierName:'',//商圈承运商
                    tradeCarrierType:'',//商圈承运商类型
                    tradeCarrierTypeName:'',
                    endProvince:'',//到达地省
                    endCity:'',//到达地市
                    endArea:'',//到达地区
                    endAreaCode:'',//到达地
                    endAreaName:'',//endAreaName
                    startTime:'',//承运有效开始时间
                    endTime:'',//承运有效结束时间
                    departureHzData:'',//发车频率天
                    departureHzTime:'',//发车频率次
                    lowerPrice:'',//最低一票收费
                    incrementService:'',//增值服务
                    incrementServiceCode:'',//增值服务code
                    timeVal:[],
                    incrementServiceArr:[],
                },
                //商圈承运商标准货物定价
                aflcTradeCarrierStandardPriceList:[{
                    goodsClassificationInterval1:'0',//标准货物分类区间1
                    goodsClassificationInterval2:'',//标准货物分类区间2
                    unitPrice:'',
                }]
            };
        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss" >
    
</style>

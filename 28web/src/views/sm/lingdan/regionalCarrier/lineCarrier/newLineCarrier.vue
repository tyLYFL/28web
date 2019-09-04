<template>
  <div class="newLineServicePrice carrierCommonStyle">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
        <div class="searchInformation rangeCommon">
            <h2>基本信息</h2>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="出发地：" prop="startAreaName" class="location_line">
                        <el-input v-model="ruleForm.startAreaName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <vregion :ui="true" @values="regionChangeStart"  class="form-control" ref="vregion" v-else>
                            <el-input v-model="ruleForm.startAreaName" ></el-input>
                        </vregion>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="到达地：" prop="endAreaName" class="location_line">
                        <el-input v-model="ruleForm.endAreaName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <vregion :ui="true" @values="regionChangeEnd"  class="form-control" ref="vregion" v-else>
                            <el-input v-model="ruleForm.endAreaName" ></el-input>
                        </vregion>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="线路承运商：" prop="carrierName" class="location_line">
                        <el-input v-model="ruleForm.carrierName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <CompanySearch @returnCompany = 'getCompany' v-model="ruleForm.carrierName" v-else/>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="承运商类型：" prop="carrierType" class="location_line">
                        <el-input v-model="ruleForm.carrierTypeName" v-if="ifShowRangeType == '1'" disabled></el-input>
                        <el-select v-model="ruleForm.carrierType" placeholder="请选择承运商类型" v-else>
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
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="承运商重泡比：" prop="wvRatio" class="location_line">
                        <el-input v-model="ruleForm.wvRatio" placeholder="报价" :disabled="unable" v-numberOnly>
                            <template slot="prepend">轻货<</template>
                            <template slot="append">≤重货</template>
                        </el-input> 
                        <span class="tips">重泡比=重量/立方(KG/m³)</span>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="承运有效期：" prop="timeVal" class="location_line">
                        <el-date-picker
                            v-model="ruleForm.timeVal"
                            type="daterange"
                            unlink-panels
                            value-format="timestamp"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="轻货价格：" class="jieti" prop="" required>
                <p>(阶梯价格最大值不填，代表无穷大，例如：10-，代表10立方以上)</p>
                <div class="goodsPriceChoose">
                    <el-row class="goodsPriceChoose_title">
                        <el-col :span="12">体积区间（立方）</el-col>
                        <el-col :span="12">价格（元 / 立方）</el-col>
                    </el-row>
                    <el-row v-for="(form,keys) in ligthPriceForms" :key="keys">
                        <el-col :span="12" class="intervalNum blackBook">
                            <el-input v-model.number="form.startVolume" v-numberOnly placeholder="包含" maxlength="7" disabled></el-input>
                            <span>----</span>
                            <el-input v-model.number="form.endVolume" :disabled="unable" v-numberOnly placeholder="包含，整数"  maxlength="7" @change="ifWrong(ligthPriceForms,keys,form,'startVolume','ligthPriceForms')"></el-input>
                        </el-col>
                        <el-col :span="12" class="fixPrice blackBook">
                            <!-- <el-input v-model="form.primeryPrice" :disabled="unable" v-numberOnly:point maxlength="7"></el-input> -->
                            <NumberOnlyPoint v-model="form.primeryPrice" placeholderTxt="报价" length="7"/>
                            <div class="iconItem">
                                <span  @click="addItem('ligthPriceForms',keys,form)" class="addItem" v-if="keys == ligthPriceForms.length-1 && keys != 4">
                                </span>
                                <span  @click="reduceItem(keys,'ligthPriceForms')" class="reduceItem" v-if="keys == ligthPriceForms.length-1 && ligthPriceForms.length !=1">
                                </span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-form-item>

            <el-form-item label="重货价格：" class="jieti" prop="" required>
                <p>(阶梯价格最大值不填，代表无穷大，例如：500-，代表500公斤以上)</p>
                <div class="goodsPriceChoose">
                    <el-row class="goodsPriceChoose_title">
                        <el-col :span="12">重量区间（公斤）</el-col>
                        <el-col :span="12">价格（元 / 公斤）</el-col>
                    </el-row>
                    <el-row v-for="(form,keys) in weigthPriceForms" :key="keys">
                        <el-col :span="12" class="intervalNum blackBook">
                            <el-input v-model.number="form.startVolume" v-numberOnly placeholder="包含" maxlength="7" disabled></el-input>
                            <span>----</span>
                            <el-input v-model.number="form.endVolume" :disabled="unable" v-numberOnly placeholder="包含，整数"  maxlength="7" @change="ifWrong(weigthPriceForms,keys,form,'startVolume','weigthPriceForms')"></el-input>
                        </el-col>
                        <el-col :span="12" class="fixPrice blackBook">
                            <!-- <el-input v-model="form.primeryPrice" :disabled="unable" v-numberOnly:point maxlength="7"></el-input> -->
                            <NumberOnlyPoint v-model="form.primeryPrice" placeholderTxt="报价" length="7"/>
                            <div class="iconItem">
                                <span  @click="addItem('weigthPriceForms',keys,form)" class="addItem" v-if="keys == weigthPriceForms.length-1 && keys != 4">
                                </span>
                                <span  @click="reduceItem(keys,'weigthPriceForms')" class="reduceItem" v-if="keys == weigthPriceForms.length-1 && weigthPriceForms.length !=1">
                                </span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-form-item>

            <el-form-item label="最低一票收费：" prop="lowerPrice">
                <!-- <el-input v-model="ruleForm.lowerPrice" placeholder="报价" :disabled="unable" v-numberOnly:point>
                     <template slot="append">元</template>
                </el-input>  -->
                <NumberOnlyPoint v-model="ruleForm.lowerPrice" placeholderTxt="报价" length="7" slotTxt = "元"/>                
            </el-form-item>

             <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="运输时效：" prop="transportAging">
                        <el-input placeholder="请输入" v-numberOnly v-model="ruleForm.transportAging" maxlength="3" :disabled="unable">
                            <template slot="append">小时</template>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="发车频率：" prop="departureHzData">
                        <el-input placeholder="请输入" v-numberOnly v-model="ruleForm.departureHzData" maxlength="3" v-on:change="checkNumber(ruleForm.departureHzData,'departureHzData')" :disabled="unable">
                            <template slot="append">天</template>
                        </el-input>
                        <el-input placeholder="请输入" v-numberOnly v-model="ruleForm.departureHzTime" maxlength="3" v-on:change="checkNumber(ruleForm.departureHzTime,'departureHzTime')" :disabled="unable">
                            <template slot="append">次</template>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="增值服务：" prop="otherServiceArr">
                <el-checkbox-group v-model="ruleForm.otherServiceArr">
                    <el-checkbox-button v-for="item in optionsHighValue" :label="item.code" :key="item.id">{{item.name}}</el-checkbox-button>
                </el-checkbox-group>
            </el-form-item>
        </div>
        <el-form-item class="fromfooter">
            <el-button type="primary" plain  icon="el-icon-success" @click="submitForm('ruleForm')">保存</el-button>
            <el-button type="primary" plain icon="el-icon-error" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import '../../carrierCommon.scss'
import { newTradeLineCarrier,LineCarrierDetails,LineCarrierWvRatio } from '@/api/server/lingdan/TradeAreaLineCarrier.js'
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
            if (value == '') {
                callback(new Error('请选择区域'));
            } else if(this.ruleForm.startCity == '' && this.ruleForm.startProvince !=  '北京市' && this.ruleForm.startProvince !=  '天津市' && this.ruleForm.startProvince !=  '重庆市' && this.ruleForm.startProvince !=  '上海市' ){
                callback(new Error('至少选择到市级范围'));
            }else{
                callback();
            }
        };
        var checkEndLocation = (rule,value,callback) => {
            if (value == '') {
                callback(new Error('请选择区域'));
            } else if(this.ruleForm.endCity == '' && this.ruleForm.endProvince !=  '北京市' && this.ruleForm.endProvince !=  '天津市' && this.ruleForm.endProvince !=  '重庆市' && this.ruleForm.endProvince !=  '上海市' ){
                callback(new Error('至少选择到市级范围'));
            }else{
                callback();
            }
        };

        var checkTransportAging = (rule,value,callback) => {
            if (!value) {
                callback(new Error('请输入运输时效'));
            } else if(parseInt(value) <= 0){
                callback(new Error('运输时效不可为0'));
            }else{
                callback();
            }
        };
        return {
            unable:false,
            optionsHighValue:[],
            ifShowRangeType:'0',
            optionsTradeCarrierType:[],
            ruleForm: {
                startAreaName:'',//出发地
                startProvince:'',//省
                startCity:'',//市
                startArea:'',//区
                startAreaCode:'',//区域code
                endArea:'',//到达地区
                endAreaCode:'',//到达地区code
                endAreaName:'',//到达地区名称
                endCity:'',//到达地市
                endProvince:'',//到达地省
                carrierId:'',//线路承运商
                carrierName:'',//线路承运商Name
                carrierType:'',//承运商类型
                carrierEndTime:'',//承运有效期（结束时间）
                carrierStartTime:'',//承运有效期（开始时间）
                wvRatio:'',//承运商重泡比
                transportAging:'',//运输时效
                lowerPrice:'',//最低一票收费
                departureHzData:'',//发车频率天
                departureHzTime:'',//发车频率次
                otherService:'',//增值服务
                otherServiceCode:'',//增值服务code
                timeVal:[],
                otherServiceArr:[],
                //线路承运商价格区间
                rangePriceList:[],
            },
            ligthPriceForms:[
                {
                    startVolume:'0',
                    endVolume:'',
                    primeryPrice:'',//标准价
                    type:'0'
                } 
            ],
            weigthPriceForms:[
                {
                    startVolume:'0',
                    endVolume:'',
                    primeryPrice:'',//标准价
                    type:'1'
                }
            ],
            rules: {
                startAreaName:[
                    { required: true, validator: checkStartLocation, trigger: 'change' },
                ],                
                endAreaName:[
                    { required: true, validator: checkEndLocation, trigger: 'change' },
                ],
                carrierName:{required: true, message:'请选择线路承运商', trigger: 'change'},
                carrierType:{required: true, message:'请选择承运商类型', trigger: 'change'},
                wvRatio:{required: true, message:'请输入承运商重泡比', trigger: 'change'},
                timeVal:{type: 'array', required: true, message: '请选择承运有效期', trigger: 'change'},
                lowerPrice:{required: true, message:'请输入最低一票收费', trigger: 'change'},
                transportAging:{required: true,validator: checkTransportAging,trigger: 'change'},
            }
        }
    },
    watch:{
       
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
                        this.ruleForm.departureHzData = '';
                        break;
                    case 'departureHzTime':
                        this.ruleForm.departureHzTime = '';
                        break;
                }
            }
        },
        getCompany(val){
            // console.log('belongSalesman',val)
            this.ruleForm.carrierId = val.id;
            this.ruleForm.carrierName = val.companyName;
        },
        ifWrong(item,idx,obj,label,classfy){
            // console.log(item,idx,obj,label,classfy)
            if(item[idx].endVolume != ''){
                let flag = item[idx].endVolume <= item[idx][[label]] ? true : false;
                if(item[idx].endVolume && (item.length == (idx+1)) && !flag){
                    this.addItem(classfy,idx,item)
                }
                if(flag){
                    this.$message({
                        type: 'info',
                        message: '区间终止值应应大于起始值' 
                    })
                    return item[idx].endVolume = ''
                }
                else if(item.length > (idx+1)){
                    item[idx+1][[label]] = item[idx].endVolume ;
                    if(item[idx+1].endVolume){
                        if(item[idx+1].endVolume <= item[idx+1][[label]]){
                            this.$message({
                                type: 'info',
                                message: '区间终止值应应大于起始值' 
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

             let flag = item[idx].endVolume <= item[idx].startVolume ? true : false;
            if(flag){
                this.$message({
                    type: 'info',
                    message: '区间终止值应应大于起始值' 
                })
                return item[idx].endVolume = ''
            }
            else if(item.length > (idx+1)){
                item[idx+1].startVolume = item[idx].endVolume ;
                if(item[idx+1].endVolume){
                    if(item[idx+1].endVolume <= item[idx+1].startVolume){
                        this.$message({
                            type: 'info',
                            message: '区间终止值应应大于起始值' 
                        })
                        return item.splice(idx+1);
                    }
                }
            }
        },
        regionChangeStart(d) {
            // console.log('data:',d)
            this.ruleForm.startAreaName = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            // console.log(this.ruleForm.areaName)
            this.ruleForm.startProvince = d.province ? d.province.name : '';
            this.ruleForm.startCity = d.city ? d.city.name : '';
            this.ruleForm.startArea = d.area ? d.area.name : '';
            if(d.area){
                this.ruleForm.startAreaCode = d.area.code;
            }else if(d.city){
                this.ruleForm.startAreaCode = d.city.code;
            }else{
                this.ruleForm.startAreaCode = d.province ? d.province.code :'';
            }
        },
        regionChangeEnd(d){
            this.ruleForm.endAreaName = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            // console.log(this.ruleForm.areaName)
            this.ruleForm.endProvince = d.province ? d.province.name : '';
            this.ruleForm.endCity = d.city ? d.city.name : '';
            this.ruleForm.endArea = d.area ? d.area.name : '';
            if(d.area){
                this.ruleForm.endAreaCode = d.area.code;
            }else if(d.city){
                this.ruleForm.endAreaCode = d.city.code;
            }else{
                this.ruleForm.endAreaCode = d.province ? d.province.code :'';
            }
        },
        getValue(obj){
            return obj ? obj.value:'';
        },
        radioChange(value,type){
            if(this[type][value].radio == '1'){
                this[type][value].rate = '';
            }else{
                this[type][value].cost = '';
            }
            this.$forceUpdate();
        },
        //获取增值服务定价
        getMoreInformation(){
            data_LogisticsCompany().then(res=> {
                this.optionsHighValue = res.data;
            })
            DicTradeCarrier().then(res => {
                this.optionsTradeCarrierType = res.data;
            })
        },
        getParams(){
            // console.log(this.$route.query.lineId)
            if(this.$route.query.lineId){
                this.ifShowRangeType = this.$route.query.ifrevise;//1是修改，2是详情
                let lineId = this.$route.query.lineId;//接收数据
                LineCarrierDetails(lineId).then(res=>{
                    this.ruleForm = res.data;
                    // this.ruleForm.timeVal = [this.ruleForm.carrierStartTime,this.ruleForm.carrierEndTime];
                    // this.ruleForm.otherServiceArr = JSON.parse(this.ruleForm.otherServiceCode);
                    this.$set(this.ruleForm,'otherServiceArr', JSON.parse(this.ruleForm.otherServiceCode))
                    this.$set(this.ruleForm, 'timeVal', [this.ruleForm.carrierStartTime,this.ruleForm.carrierEndTime])
                    this.ligthPriceForms = [];
                    this.weigthPriceForms = [];
                    this.ruleForm.rangePriceList.forEach(el => {
                        switch(el.type){
                            case '0':
                                this.ligthPriceForms.push(el);
                                break;
                            case '1':
                                this.weigthPriceForms.push(el);
                                break;
                        }
                    })

                    this.ligthPriceForms.sort(function(a, b) {
                        return a.startVolume - b.startVolume
                    })       
                    
                    this.weigthPriceForms.sort(function(a, b) {
                        return a.startVolume - b.startVolume
                    })
                })
            }
        },
        //添加子节点新增
        addItem(type,idx,item){
            switch(type){
                case 'ligthPriceForms':
                    this.ligthPriceForms.push({
                        type:'0',//费用类型(保价费定价:0 ;代收货款手续费定价:1 ; 时效保障费定价:2)
                        startVolume:this.ligthPriceForms[idx].endVolume,//
                        endVolume:'',//
                        primeryPrice:'',
                    }); 
                    break;
                case 'weigthPriceForms':
                    this.weigthPriceForms.push({
                        startVolume:this.weigthPriceForms[idx].endVolume,
                        endVolume:'',
                        primeryPrice:'',//标准价
                        type:'1'
                    }); 
                    break;
            }
        },
        //删除子节点新增
        reduceItem(idx,type,item){
            switch(type){
                case 'ligthPriceForms':
                    this.ligthPriceForms.splice(idx,1);
                    this.ligthPriceForms[idx-1].endVolume = '';
                    break;
                case 'weigthPriceForms':
                    this.weigthPriceForms.splice(idx,1);
                    this.weigthPriceForms[idx-1].endVolume = '';
            }
        },  
        completeName(){
            this.ruleForm.rangePriceList = [];
            this.ruleForm.rangePriceList = this.ruleForm.rangePriceList.concat(this.ligthPriceForms,this.weigthPriceForms);
            this.ruleForm.carrierStartTime =  this.ruleForm.timeVal[0] ? this.ruleForm.timeVal[0] : '';
            this.ruleForm.carrierEndTime =  this.ruleForm.timeVal[1] ? this.ruleForm.timeVal[1] :'';

            let incrementServiceName = [];
            this.ruleForm.otherServiceArr.forEach(el => {
                this.optionsHighValue.forEach(item => {
                    if(el == item.code){
                        incrementServiceName.push(item.name);
                    }
                })
            })
            this.ruleForm.otherServiceCode = JSON.stringify(this.ruleForm.otherServiceArr);
            this.ruleForm.otherService = JSON.stringify(incrementServiceName);
        },
        //提交按钮
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let ifNull = true;
                    let messageInfo;
                    
                    this.ligthPriceForms.forEach(item => {
                        if((item.startVolume+'') == ''){
                            messageInfo= '轻货价格最小值不可为空' 
                            ifNull = false;
                        }else if(item.primeryPrice == ''){
                            messageInfo= '轻货价格不可为空' 
                            ifNull = false;
                        }
                    })

                    this.weigthPriceForms.forEach(item => {
                        if((item.startVolume+'') == ''){
                            messageInfo= '重货价格最小值不可为空' 
                            ifNull = false;
                        }else if(item.primeryPrice == ''){
                            messageInfo= '重货价格不可为空' 
                            ifNull = false;
                        }
                    })

                    if(ifNull){
                        this.completeName();
                        let commitFunction = newTradeLineCarrier(this.ruleForm);
                        // console.log(this.ruleForm)
                        commitFunction.then(res => {
                            if(res.status == 200){
                                this.$alert('操作成功', '提示', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        sessionStorage.setItem('regionalCarrierName','lineCarrier');
                                        this.$router.push({name:'发物流线路承运商'});                                       
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
                            type: 'info',
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
        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss" >
    
</style>

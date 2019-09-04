<template>
    <div class="newDeliverPrice commoncss">
        <el-dialog :title='formtitle' :close-on-click-modal="false" v-el-drag-dialog top="10vh" :visible="dialogFormVisible" @close="close">
            <el-form   :model="standForm" :rules="newrules" label-position="right"  ref="ruleForm"  :label-width="formLabelWidth">
                <el-row :gutter="20" v-if="!isBatch">
                   <el-col :span="12">
                        <el-form-item  label="选择送货街道：" prop="areaCode" v-if="!isModify">
                            <getCityList class="chooseItem" @returnStr="getStrStart" :isArea="true" v-model="standForm.areaCode" ref="startArea"></getCityList>
                        </el-form-item>
                        <el-form-item  label="送货街道区域：" class="is-required" v-else>
                            <el-input :value="standForm.province + standForm.city + standForm.area" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="isModify ? 12 :6" >
                        <el-form-item label="" prop="streetCodeList" label-width="0px" v-if="!isModify">
                            <el-select v-model="standForm.streetCodeList"  multiple collapse-tags :loading="loadingStreet" @focus="getStartAreaList" clearable placeholder="请选择">
                                <el-option
                                v-for="item in optionsStreetArr"
                                :key="item.code"
                                :label="item.name"
                                :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                         <el-form-item  label="送货街道：" class="is-required" v-else>
                            <el-input :value="standForm.street" disabled></el-input>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="轻货价格：" class="is-required">
                            <p>(阶梯价格最大值不填，代表无穷大，例如：区间为10-，代表10m³及以上)</p>
                            <table class="systemTitle priceTable">
                                <thead>
                                    <th style="width:50%;">体积区间（m³）</th>
                                    <th>价格（元 / m³）</th>
                                    <th class="lastOne">操作</th>
                                </thead>
                                <tbody>
                                <tr v-for="(item,keys) in ligthPriceForms" :key="keys">
                                    <td>
                                        <el-input v-model="item.startVolumn" disabled></el-input>
                                        <span>----</span>
                                        <el-input v-model="item.endVolumn" @change="ifWrong(ligthPriceForms,keys,'ligthPriceForms')" v-numberOnly></el-input>
                                    </td>
                                    <td>
                                        <NumberOnlyPoint v-model="item.cost" :ifZero = "false"/>
                                    </td>
                                    <td class="lastOne">
                                        <div class="iconItem">
                                            <span class="addItem" @click="addItem('ligthPriceForms',keys)" v-if="keys == ligthPriceForms.length-1 && keys <= 4"></span>
                                            <span class="reduceItem" @click="reduceItem('ligthPriceForms',keys)" v-if="ligthPriceForms.length !=1 && keys !== 0"></span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="重货价格：" class="is-required">
                            <p>(阶梯价格最大值不填，代表无穷大，例如：区间500-，代表500kg及以上)</p>
                            <table class="systemTitle priceTable">
                                <thead>
                                    <th style="width:50%;">重量区间（kg）</th>
                                    <th>价格（元 / kg ）</th>
                                    <th class="lastOne">操作</th>
                                </thead>
                                <tbody>
                                <tr v-for="(item,keys) in weigthPriceForms" :key="keys">
                                    <td>
                                        <el-input v-model="item.startVolumn" disabled></el-input>
                                        <span>----</span>
                                        <el-input v-model="item.endVolumn" @change="ifWrong(weigthPriceForms,keys,'weigthPriceForms')" v-numberOnly></el-input>
                                    </td>
                                    <td>
                                        <NumberOnlyPoint v-model="item.cost" :ifZero = "false"/>
                                    </td>
                                    <td class="lastOne">
                                        <div class="iconItem">
                                            <span class="addItem" @click="addItem('weigthPriceForms',keys)" v-if="keys == weigthPriceForms.length-1 && keys <= 4"></span>
                                            <span class="reduceItem" @click="reduceItem('weigthPriceForms',keys)" v-if="weigthPriceForms.length !=1 && keys !== 0"></span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="单票最低收费：" prop="singleLowestCost">
                            <NumberOnlyPoint v-model="standForm.singleLowestCost" placeholderTxt="元"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="单票最高收费：" prop="singleHighestCost">
                            <NumberOnlyPoint v-model="standForm.singleHighestCost" placeholderTxt="元"/>
                        </el-form-item>
                    </el-col>
                </el-row> 
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" plain  icon="el-icon-success" @click="submitForm('ruleForm')" :disabled="btnShow">{{isModify ? '保 存' : '确 定'}}</el-button>
                <el-button type="primary" plain icon="el-icon-error" @click="close">取 消</el-button>
            </div> 
        </el-dialog>
    </div>
</template>

<script>

import { newCollectFees,collectFeesDetails,updateCollectFees,batchCollectFees } from '@/api/server/lingdan/otherService.js'
import { objectMerge2 } from '@/utils/'
import NumberOnlyPoint from '@/components//NumberOnlyPoint/index'
import getCityList from '@/components/GetCityList/chinaMap'
import { getStreetInfo } from '@/api/common'
export default {
    name: 'newDeliverPrice',
    props: {
        dialogFormVisible:{
            type:Boolean,
            required:true
        },
        formtitle:{
            type:String,
            required:false,
            default:'新增送货费定价'
        },
        isModify:{
            type:Boolean,
            default:false,
        },
        changeForm:{
            type:Object,
        },
        batchIds:{
            type:Array,
            default:[],
        },
        isBatch:{
            type:Boolean,
            default:false,
        }
    },
    components:{
        NumberOnlyPoint,
        getCityList
    },
    data() {
        var checkSingleLowestCost = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入送货费费单票最低收费'));
            }else if (parseFloat(value) <= 0) {
                callback(new Error('送货费费单票最低收费需大于0'));
            }else if(Number(this.standForm.singleHighestCost) <= Number(this.standForm.singleLowestCost) && this.standForm.singleHighestCost != ''){
                callback(new Error('单票最高收费应大于单票最低收费'));
            } else {
                callback();
            }
        };
        var checkSingleHighestCost = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入送货费费单票最高收费'));
            }else if (parseFloat(value) <= 0) {
                callback(new Error('送货费费单票最高收费需大于0'));
            }else if(Number(this.standForm.singleHighestCost) <= Number(this.standForm.singleLowestCost)){
                callback(new Error('单票最高收费应大于单票最低收费'));
            }else {
                callback();
            }
        };
      return {
        btnShow:false,
        formLabelWidth:'120px',
        loadingStreet:false,
        optionsStreetArr:[],
        props: {
          value: 'name',
          children: 'children'
        },
        standForm:{
            province:'',//省名称
            city:'',//市名称
            area:'',//区域名称
            areaCode:'',//
            useType:'0',//定价类型(0:送货,1:送货)
            singleHighestCost:'',//单票最高费用
            singleLowestCost:'',//单票最低费用
            streetCodeList:[],//街道code集合
            streetList:[],//街道集合
            configs:[],
        },
        ligthPriceForms:[
            {
                startVolumn:'0',
                endVolumn:'',
                cost:'',//标准价
                goodsType:'0'//货物类型(1:重货，0:轻货)
            } 
        ],
        weigthPriceForms:[
            {
                startVolumn:'0',
                endVolumn:'',
                cost:'',//标准价
                goodsType:'1'//货物类型(1:重货，0:轻货)
            }
        ],
        newrules: {
            areaCode:{required: true, message: '请选择送货街道所属行政区', trigger: 'blur'},
            streetCodeList:{type: 'array', required: true, message: '请选择送货街道', trigger: 'change'},
            singleLowestCost:{required: true,validator: checkSingleLowestCost,trigger: 'blur'},
            singleHighestCost:{ required: true, validator: checkSingleHighestCost,trigger: 'blur'},
        },
      };
    },
    watch:{
        'standForm.areaCode':{
            handler(newVal,oldVal){
                if(newVal){
                    this.standForm.streetCodeList = [];
                }
            },
            deep:true
        },
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
        // this.init()
    },
    methods: {
        ifWrong(item,idx,classfy){
            // console.log(item,idx)
           let flag = parseFloat(item[idx].endVolumn) <= parseFloat(item[idx].startVolumn) ? true : false;
            if(item.length == (idx+1)){
                this.addItem(classfy,idx)
            }
            let messageTip = classfy == 'ligthPriceForms' ? '体积区间最大值应大于区间最小值' : '重量区间最大值应大于区间最小值' ;
            if(flag){
                this.$message({
                    type: 'info',
                    message: messageTip
                })
                if(item.length > (idx+1)){
                    item.splice(idx+1);
                }
                return item[idx].endVolumn = ''
            }
            else if(item.length > (idx+1)){
                item[idx+1].startVolumn = item[idx].endVolumn ;
                if(item[idx+1].endVolumn){
                    if(parseFloat(item[idx+1].endVolumn) <= parseFloat(item[idx+1].startVolumn)){
                        this.$message({
                            type: 'info',
                            message: message
                        })
                        item.splice(idx+1);
                        this.addItem(classfy,idx)
                    }
                }
            }
        },
        getStrStart(d){
            // console.log('getStrStart',d)
            this.standForm.province = d.province ? d.province.name : '';//省名称
            this.standForm.city = d.city ? d.city.name : '';//市名称
            this.standForm.area = d.area ? d.area.name : ''
            this.standForm.areaCode = d.area ? d.area.code : ''
        },
        getValue(obj){
            return obj ? obj.value:'';
        },
        getStartAreaList(){
            this.optionsStreetArr = [];
            if(this.standForm.areaCode == ''){
                return  this.$message({
                    type: 'warning',
                    message: '请先选择送货省市区！'
                })
            }else{
                this.loadingStreet = true;
                getStreetInfo(this.standForm.areaCode).then(res => {
                    setTimeout(() => {
                        this.loadingStreet = false;
                        this.optionsStreetArr = res.data;
                        if(this.optionsStreetArr == [] && this.standForm.areaCode){
                            this.standForm.streetCodeList = [];
                        }
                    }, 200);
                }).catch(err => {
                    this.standForm.streetCodeList = [];
                })
            }
        },
        addItem(type,idx){
            switch(type){
                case 'ligthPriceForms':
                    this.ligthPriceForms.push({
                        startVolumn:this.ligthPriceForms[idx].endVolumn,
                        endVolumn:'',
                        cost:'',
                        goodsType:'0',
                    }); 
                    break;
                case 'weigthPriceForms':
                    this.weigthPriceForms.push({
                        startVolumn:this.weigthPriceForms[idx].endVolumn,
                        endVolumn:'',
                        cost:'',
                        goodsType:'1'
                    }); 
                    break;
            }
        },
        reduceItem(type,idx){
            switch(type){
                 case 'ligthPriceForms':
                    if(idx == this.ligthPriceForms.length -1){
                        this.ligthPriceForms[idx-1].endVolumn = '';
                    }else{
                        this.ligthPriceForms[idx+1].startVolumn = this.ligthPriceForms[idx-1].endVolumn;
                        this.$forceUpdate();
                    }
                    this.ligthPriceForms.splice(idx,1);
                    break;
                case 'weigthPriceForms':
                    if(idx == this.weigthPriceForms.length -1){
                        this.weigthPriceForms[idx-1].endVolumn = '';
                    }else{
                        this.weigthPriceForms[idx+1].startVolumn = this.weigthPriceForms[idx-1].endVolumn;
                        this.$forceUpdate();
                    }
                    this.weigthPriceForms.splice(idx,1);
                    break;
            }
        },
        close(){
            if(this.dialogFormVisible){
                this.$emit('update:dialogFormVisible',false);
                this.$refs.ruleForm.resetFields();
                this.clearForms();
                this.$emit('renovate');
                this.btnShow = false;
                if(!this.isModify && !this.isBatch){
                    this.$refs.startArea.clearData();
                }
            }
        },
        //初始化选择项数据
        init(){
          
        },
        reviseForms(){
            if(this.isModify){
                // console.log(this.changeForm)
                collectFeesDetails(this.changeForm.id).then(res => {
                    this.clearForms();
                    this.standForm = objectMerge2(res.data);
                    this.ligthPriceForms = [];
                    this.weigthPriceForms = [];
                    this.standForm.configs.forEach(el => {
                        switch(el.goodsType){
                            case '0':
                                this.ligthPriceForms.push(el);
                                break;
                            case '1':
                                this.weigthPriceForms.push(el);
                                break;
                        }
                    })

                    this.ligthPriceForms.sort(function(a, b) {
                        return a.startVolumn - b.startVolumn
                    })

                    this.weigthPriceForms.sort(function(a, b) {
                        return a.startVolumn - b.startVolumn
                    })
                })
            }else if(this.isBatch){
                this.clearForms();
                this.standForm = {
                    batchIds:this.batchIds,
                    singleHighestCost:'',//单票最高费用
                    singleLowestCost:'',//单票最低费用
                    configs:[],
                }
            }
            else{
                this.clearForms();
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let ifNull = true;
                    let messageInfo;

                    this.weigthPriceForms.forEach(item => {
                        if( (item.startVolumn+'') == ''){
                            messageInfo= '重货价格重量区间最小值不可为空' 
                            ifNull = false;
                        }else if(item.cost == ''){
                            messageInfo= '重货价格定价规则不能为空' 
                            ifNull = false;
                        }
                    })
                    this.ligthPriceForms.forEach(item => {
                        if( (item.startVolumn+'') == ''){
                            messageInfo= '轻货价格体积区间最小值不可为空' 
                            ifNull = false;
                        }else if(item.cost == ''){
                            messageInfo= '轻货价格定价规则不能为空' 
                            ifNull = false;
                        }
                    })

                    if(ifNull){
                        this.btnShow = true;
                        this.completeName();
                        let forms = objectMerge2(this.standForm);
                        // console.log(forms)
                        let standarFunction = this.isBatch ? batchCollectFees(forms) : this.isModify? updateCollectFees(forms) : newCollectFees(forms);
                        standarFunction.then(res =>{
                            this.$message({
                                type: 'success',
                                message: this.isModify ? '修改干线费定价成功' : this.isBatch ? '批量修改干线费定价成功!' : '新增干线费定价成功!'
                            })
                            this.close();
                        }).catch(err => {
                            this.$message({
                                type: 'info',
                                message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                            })
                            this.btnShow = false;
                        })
                    }else{
                        this.$message({
                            type: 'info',
                            message: messageInfo
                        })
                    }
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
                if(i == 'streetCodeList'){
                    this.standForm[i] = []
                }else if(i == 'streetList'){
                    this.standForm[i] = []
                }else if(i == 'configs'){
                    this.standForm[i] = []
                }else if(i == 'useType'){
                    this.standForm[i] = '0'
                }else{
                    this.standForm[i] = ''
                }
            } 
            this.ligthPriceForms = [{
                startVolumn:'0',
                endVolumn:'',
                cost:'',//标准价
                goodsType:'0'//货物类型(1:重货，0:轻货)
            }];
            this.weigthPriceForms = [{
                startVolumn:'0',
                endVolumn:'',
                cost:'',//标准价
                goodsType:'1'//货物类型(1:重货，0:轻货)
            }]
        },
        completeName(){
            if(!this.isModify && !this.isBatch){
                // this.standForm.province = this.optionsProvince.find(item => item.code ==  this.standForm.provinceCode)['name'];
                let streetListName = [];
                this.optionsStreetArr.forEach(el => {
                    this.standForm.streetCodeList.forEach(item => {
                        if(el.code == item){
                            streetListName.push(el.name)
                        }
                    })
                })
                this.standForm.streetList = streetListName;
            }
            this.standForm.configs = [];
            this.standForm.configs = this.standForm.configs.concat([],this.ligthPriceForms,this.weigthPriceForms);
        },
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
    .newDeliverPrice{
        p{
            color: red;
        }
        .priceTable tbody{
            tr td:first-child{
                .el-input{
                    width: 45%;
                }
            }
        }
    }
</style>

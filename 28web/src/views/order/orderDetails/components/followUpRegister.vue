<template>
     <div class="followUpRegister commoncss">
        <el-dialog :title="typetitle" :visible="followUpRegister_add" :modal-append-to-body = 'false' :before-close="close" top="5vh" :close-on-click-modal="false" ref="dialog">
        <el-form :model="formAll" ref="formAll" :rules="rulesForm">
        <el-row>
            <el-col :span="24" >
                <el-form-item label="跟进内容：" prop="goodsclaimDes" :label-width="formLabelWidth" class="textArea" >
                        <el-input type="textarea" :rows="2" placeholder="1-200间的字符" maxlength="200" ref="infofocus" v-model="formAll.goodsclaimDes" clearable :disabled="editType=='view'"></el-input>
                        <p class="countNum"><span class="">{{formAll.goodsclaimDes.length}}</span> <span>/ 200</span> </p>
                </el-form-item>
            </el-col>
         </el-row>
         <el-row>
             <el-col :span="12" >
            <el-form-item label="上传附件：" prop="" :label-width="formLabelWidth">
             <upload class="licensePicture" tip="（必须为jpg/png并且小于5M）" v-model="formAll.fileAddress" />
            </el-form-item>
             </el-col>
         </el-row>
            <el-col :span="24" >
                <el-form-item label="扣除行为分：" prop="" :label-width="formLabelWidth" v-if="newParams.respondentType=='AF0053102'">
                  <el-select
                    v-model="formAll.riskControlCode"
                    multiple
                    collapse-tags
                    placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.ruleDescSetting"
                    :value="item.code">
                      <span style="float: left">{{ item.ruleDescSetting }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px;margin-right:20px">{{ item.subBehaviorScore ? item.subBehaviorScore + '分' : '' }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="24" >
                <el-form-item label="" :label-width="formLabelWidth" >
                <el-checkbox v-model="unloadingFeeFlag" disabled>修改等候费</el-checkbox>
                <span v-if="UnloadingFee>0">原系统等候费￥{{UnloadingFee}}，现改为
                <el-input clearable v-model="formAll.adjustUnloadingFee" class="adjustUnloadingFee" placeholder="等候费" v-numberOnly></el-input>
                </span>
                </el-form-item>
            </el-col>
            <el-col :span="24" >
                <el-form-item label="" :label-width="formLabelWidth" >
                  <span @click="complainStatusChange">
                  <el-checkbox v-model="complainStatus"  :disabled="!this.newParams.respondentType">已处理完毕</el-checkbox>
                  </span>
                </el-form-item>
            </el-col>
            <el-col :span="24" v-show="complainStatus">
                <el-form-item label="" :label-width="formLabelWidth" prop="IsRule">
                  <el-radio-group v-model="formAll.IsRule" v-for="item of dutyList" :key="item.code" @change="IsRuleRadio">
                      <el-radio-button :label="item.code">{{item.name}}</el-radio-button>
                </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="24" v-show="formAll.IsRule=='1'">
                <el-form-item label="责任区域：" prop="responsibilityBusinessGroupName" :label-width="formLabelWidth" >
                    <businessGroup @inputObject="getObject" v-model="formAll.responsibilityBusinessGroupName" ref="businessGroup"/>
                </el-form-item>
            </el-col>
            <el-col :span="24" v-show="formAll.IsRule=='1'">
                <el-form-item label="责任人:" prop="responsibilityName" :label-width="formLabelWidth" >
                    <selectBelong :groupCode="groupCode" :belongSalesman="formAll.responsibilityName" @returnBelong="(value)=>{getReturnBelong(value)}"/>
                </el-form-item>
            </el-col>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="add_data" >确 定</el-button>
          <el-button @click="close()" >取 消</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import { eventBus } from '@/eventBus'
import { getDictionary,getUploadPolicy } from "@/api/common.js";
import { parseTime,pickerOptions2 } from '@/utils/'
import Pager from '@/components/Pagination/index'
import businessGroup from "@/components/selectTree/businessGroup";
import selectBelong from "./selectBelong";
import { getAllBusinessGroup,aflcBusinessGroupUserList } from '@/api/company/businessGroup'
import Upload from "@/components/Upload/CarSinglemage";
import { recordFollowup,OutorderSerial,listComplainSetting,aflcOrderComplainId } from '@/api/service/dispose.js'
import { orderDetailsList } from '@/api/order/ordermange'
export default {
  components: {
    Pager,
    selectBelong,
    Upload,
    businessGroup
  },
  props: {
    paramsId:{
        type: String,
        default: ''
    },
    typetitle: {
        type: String,
        default: ''
    },
    /*add新增，edit编辑，view查看*/
    editType: {
      type: String,
    },
    followUpRegister_add:{
        type:Boolean,
        default:false
    }
  },
  data() {
    const IsRuleValidator = (rule, val, cb) => {
    if(!val&&this.complainStatus){
     cb(new Error("请选择是否定责"));
    }
    else{
      cb()
    }
    }
    const responsibilityBusinessGroupName = (rule, val, cb) => {
    if(!val&&this.formAll.IsRule=='1'){
     cb(new Error("请选择责任区域"));
    }
    else{
      cb()
    }
    }
    const responsibilityName = (rule, val, cb) => {
    if(!val&&this.formAll.IsRule=='1'){
     cb(new Error("请选择责任人"));
    }
    else{
      cb()
    }
    }
    

    return {
      defaultImg:'/static/test.jpg',
      formLabelWidth:'150px',
      pickerOptions2: {shortcuts: pickerOptions2},
      btnStatus:true, //新增修改按钮状态  
      btnsize: 'mini',
      formAll: {
          goodsclaimDes:'',
          fileAddress:'',
          riskControlCode:[],//风控类型code
          riskControlName:[],//风控类型Name
          riskControlValue:[],//风控类型value
          adjustUnloadingFee:'',
          IsRule:'',
          responsibilityBusinessGroupId:'',
          responsibilityBusinessGroupName:'',
          responsibilityName:'',
          responsibilityId:'',
          goodsclaimId: '',
          orderSerial:this.$route.query.orderSerial,
      },
      payStatus:'',
      groupCode:'',
      unloadingFeeFlag:false,
      complainStatus:false,
      UnloadingFee:'',
      options:[],
      dutyList:[{code:'1',name:'定责'},{code:'0',name:'不定责'}],
      newParams:{},
      rulesForm: {
        goodsclaimDes: { required: true, message: "跟进内容不能为空", trigger: "change" },
        IsRule: { required: true, validator: IsRuleValidator, trigger: "change" },
        responsibilityBusinessGroupName:{ required: true, validator: responsibilityBusinessGroupName, trigger: "change" },
        responsibilityName:{ required: true, validator: responsibilityName, trigger: "change" },
      },
    }
  },
  watch: {
    followUpRegister_add: {
      handler: function(val, oldVal) {
        if (!val) {
          this.$refs['formAll'].resetFields()
          this.$emit('getData');
          for (var key in this.formAll) {
            this.formAll[key] = '';
          }
          this.formAll.riskControlCode = []
          this.formAll.riskControlName = []
          this.formAll.riskControlValue = []
          this.unloadingFeeFlag = false
          this.complainStatus = false
        }
        else{
          this.formAll.orderSerial = this.$route.query.orderSerial
          this.getMoreInformation()
          this.btnStatus = true
        }
      }
    },
  },
  methods: {
    close: function() {
      this.$emit('update:followUpRegister_add', false);
    },
    // 获取  服务和车辆 类型列表
    getMoreInformation() {
      orderDetailsList(this.$route.query.orderSerial).then(res => {
        this.currentCity = res.data.belongCity;
        listComplainSetting(this.currentCity).then(res => {
            this.options = res.data;
        })
      })
    OutorderSerial(this.$route.query.orderSerial).then(res=>{
      if(res.data.payTimeType==='0'&&res.data.payStatus=='AF00801'){
        this.unloadingFeeFlag = true
      }
      else{
        this.unloadingFeeFlag = false
      }
      this.UnloadingFee = res.data.unloadingFee
      this.payStatus = res.data.payStatus
    })
    aflcOrderComplainId(this.paramsId).then(res=>{
      this.newParams = res.data
    })
    },
    getObject(e){
      this.formAll.responsibilityBusinessGroupName = e.groupName;
      this.formAll.responsibilityBusinessGroupId =  e.id
      this.groupCode = e.groupCode;
      this.formAll.responsibilityName = ''
      this.formAll.responsibilityId = ''
    },
    getReturnBelong(val){
      this.formAll.responsibilityName = val.name;
      this.formAll.responsibilityId = val.userId;
    },
    complainStatusChange(i){
    if(!this.newParams.respondentType){
      this.$message.warning('请先选择被投诉对象')
      this.complainStatus = !i
    }
    },
    IsRuleRadio(i){
      if(i==0){
      this.formAll.responsibilityBusinessGroupName =''
      this.formAll.responsibilityBusinessGroupId = ''
      this.groupCode = ''
      this.formAll.responsibilityName = ''
      this.formAll.responsibilityId = ''
      }
    },
    // 投诉登记
    add_data() {
        this.$refs['formAll'].validate(valid => {
        if(!this.formAll.adjustUnloadingFee&&this.payStatus=='AF00801'&&this.UnloadingFee>0){
          this.$message.warning('请输入等候费')
        }
        else if(this.formAll.adjustUnloadingFee>this.UnloadingFee&&this.payStatus=='AF00801'){
          this.$message.warning('等候费需小于原系统等候费')
        }
        else{
        if(this.formAll.riskControlCode.length>0){
        let riskControlName = [];
        let riskControlValue = [];
        this.formAll.riskControlCode.forEach(el => {
                this.options.forEach(item => {
                    if(el == item.code){
                        riskControlName.push(item.ruleDescSetting)
                        riskControlValue.push(item.subBehaviorScore)
                    }
                })
        })
        this.formAll.riskControlName = riskControlName;
        this.formAll.riskControlValue = riskControlValue;
        }
        if(valid){
        if(this.unloadingFeeFlag){
          this.formAll.unloadingFeeFlag = 1
        }
        else{
          this.formAll.unloadingFeeFlag = 0
        }
        if(this.complainStatus){
          this.formAll.complainStatus = 'AF04002'
        }
        else{
          this.formAll.complainStatus = ''
        }
        this.formAll.goodsclaimId = this.paramsId
        recordFollowup(this.formAll).then(res=>{
        this.$emit('update:followUpRegister_add', false);
        this.$message.success('操作成功')
        }).catch(err=>{
        this.$emit('update:followUpRegister_add', false);
        this.$message.error(err.text)
        })
        }    
        }
        })
    },
  }
}
</script>
<style lang="scss" >
.followUpRegister{
   .el-select{
       width: 220px!important
   }
   .adjustUnloadingFee{
     width: 200px;
   }
   .el-radio-group{
     &:nth-of-type(1){
     margin-left:0px;
    }
   }
}
</style>

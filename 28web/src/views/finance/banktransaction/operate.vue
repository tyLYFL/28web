<template>
     <div class="userRevitalize commoncss">
        <el-dialog :title="typetitle" :visible="dialogFormVisible_add" :modal-append-to-body = 'false' :before-close="close" top="5vh" :close-on-click-modal="false" ref="dialog">
        <el-form :model="formAll" ref="formAll" :rules="rulesForm">
          <el-row>
            <el-col :span="12">
                <el-form-item label="账户类型：" prop="accountType" :label-width="formLabelWidth">
                <el-select v-model="formAll.accountType" clearable placeholder="请选择" >
                          <el-option
                             v-for="item in businessTypeList"
                              :key="item.code"
                              :label="item.name"
                              :value="item.code">
                         </el-option>
                 </el-select>
                </el-form-item>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="12">
                <el-form-item label="账户名：" prop="accountName" :label-width="formLabelWidth">
                     <el-input clearable v-model="formAll.accountName"></el-input>
                </el-form-item>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="12">
                <el-form-item label="账户号：" prop="accountNum" :label-width="formLabelWidth">
                     <el-input clearable v-model="formAll.accountNum"></el-input>
                </el-form-item>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="12">
                <el-form-item label="所属银行：" prop="accountBank" :label-width="formLabelWidth">
                     <el-input clearable v-model="formAll.accountBank"></el-input>
                </el-form-item>
            </el-col>
            </el-row>
            <el-row>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="operatedata" >确 定</el-button>
          <el-button @click="close()" >取 消</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import { eventBus } from '@/eventBus'
import { getDictionary,getUploadPolicy } from "@/api/common.js";
import { parseTime,pickerOptions2 } from '@/utils/'
import { aflcFundAccountAdd,aflcFundAccountUpdate,aflcFundAccountId } from '@/api/finance/banktransaction'
export default {
  components: {
  },
  props: {
    params:{
        type:[Object,Array],
    },
    typetitle: {
        type: String,
        default: ''
    },
    /*add新增，edit编辑，view查看*/
    editType: {
      type: String,
    },
    dialogFormVisible_add:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {
      defaultImg:'/static/test.jpg',
      formLabelWidth:'150px',
      pickerOptions2: {shortcuts: pickerOptions2},
      btnStatus:true, //新增修改按钮状态  
      btnsize: 'mini',
      formAll: {
          businessType:null,
          userType:null,
          smsContent:'',
      },
      businessTypeList:[],    //账户类型
      rulesForm: {
        accountType: { required: true, message: "请选择账户类型", trigger: "change" },
        accountName: { required: true, message: "账户名不能为空", trigger: "change" },
        accountNum: { required: true, message: "账户号不能为空", trigger: "change" },
        accountBank: { required: true, message: "所属银行不能为空", trigger: "change" },
      },
    }
  },
  watch: {
    dialogFormVisible_add: {
      handler: function(val, oldVal) {
        if (!val) {
          this.$refs['formAll'].resetFields()
          this.$emit('getData');
          this.formAll = {
          businessType:null,
          userType:null,
          smsContent:'',
          }
        }
        else{
          if(this.editType!='add'){
          this.openDialog();
          }
          this.getMoreInformation()
          this.btnStatus = true
        }
      }
    },
  },
  methods: {
    openDialog: function() {
        aflcFundAccountId(this.params[0].id).then(res=>{
        this.formAll = res.data
        })
    },
    close: function() {
      this.$emit('update:dialogFormVisible_add', false);
    },
    // 获取  服务和车辆 类型列表
    getMoreInformation() {
      getDictionary('AF089').then(res => {
          this.businessTypeList = res.data
      })
    },
    // 同城新增
    operatedata() {
        this.$refs['formAll'].validate(valid => {
          if(valid){
          if (this.btnStatus) {
          this.btnStatus = false
          if(this.editType=='add'){
           aflcFundAccountAdd(this.formAll).then(res=>{
           this.$emit('update:dialogFormVisible_add', false);
           this.$message.success('新增成功')
           }).catch(err=>{
           this.$message.error(err.errorInfo)
           this.$emit('update:dialogFormVisible_add', false);
          })
          }
          else{
           aflcFundAccountUpdate(this.formAll).then(res=>{
           this.$emit('update:dialogFormVisible_add', false);
           this.$message.success('修改成功')
           }).catch(err=>{
           this.$message.error(err.errorInfo)
           this.$emit('update:dialogFormVisible_add', false);
          })
          }
          }
          }
        })
    },
  }
}
</script>
<style lang="scss" >
.userRevitalize{
  .el-radio-group{
    &:nth-of-type(1){
     margin-left:0px;
    }
  }
}
</style>

<template>
     <div class="CarCash commoncss">
        <el-dialog :title="typetitle" :visible="dialogFormVisible_add" :modal-append-to-body = 'false' :before-close="close" top="5vh" :close-on-click-modal="false" ref="dialog">
        <el-form :model="formAll" ref="formAll">
          <el-row>
            <h2 class="carNewinfoH2">提现信息</h2>
            <el-col :span="12">
              <el-form-item label="流水号：" :label-width="formLabelWidth">{{formAll.extractSerial}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户姓名：" :label-width="formLabelWidth">{{formAll.name}}</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="手机号码：" :label-width="formLabelWidth">{{formAll.mobile}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="提现金额：" :label-width="formLabelWidth">{{formAll.extractSum}}</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="手续费：" :label-width="formLabelWidth"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="收款方式：" :label-width="formLabelWidth">{{formAll.extractWay}}</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="收款账号：" :label-width="formLabelWidth">{{formAll.extractAccount}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="申请时间：" :label-width="formLabelWidth">{{formAll.createTime|parseTime}}</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <h2 class="carNewinfoH2">提现动态</h2>
            <el-col :span="12">
              <el-form-item label="处理状态：" :label-width="formLabelWidth">{{formAll.auditOpinion}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="提现状态：" :label-width="formLabelWidth">{{formAll.extractStatus}}</el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="cashtype=='AF0860303'">
            <el-col :span="12">
              <el-form-item label="转账成功时间：" :label-width="formLabelWidth">{{formAll.extractTime|parseTime}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="操作人：" :label-width="formLabelWidth">{{formAll.updater}}</el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="cashtype=='AF0860304'||cashtype=='AF0860306'">
            <el-col :span="12">
              <el-form-item label="转账失败时间：" :label-width="formLabelWidth">{{formAll.extractTime|parseTime}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="操作人：" :label-width="formLabelWidth">{{formAll.updater}}</el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="cashtype=='AF0860304'||cashtype=='AF0860306'">
            <el-col :span="24">
              <el-form-item label="转账失败原因：" :label-width="formLabelWidth">{{formAll.extractDes}}</el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="cashtype=='AF0860306'">
            <el-col :span="12" >
              <el-form-item label="提现申请驳回时间：" :label-width="formLabelWidth">{{formAll.updateTime|parseTime}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="操作人：" :label-width="formLabelWidth">{{formAll.updater}}</el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="cashtype=='AF0860306'">
            <el-col :span="24">
              <el-form-item label="驳回原因：" :label-width="formLabelWidth">{{formAll.extractFail}}</el-form-item>
            </el-col>
          </el-row>

        </el-form>
      </el-dialog>
     </div>
</template>
<script>
import { eventBus } from '@/eventBus'
import { parseTime,pickerOptions2 } from '@/utils/'
import { aflcExtractCashId } from '@/api/finance/CarCash.js'
export default {
  components: {
  },
  props: {
    params:{
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
    dialogFormVisible_add:{
      type:Boolean,
      default:false
    },
    cashtype:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultImg:'/static/test.jpg',
      formLabelWidth:'150px',
      pickerOptions2: {shortcuts: pickerOptions2},
      btnsize: 'mini',
      formAll: {
      },
      rulesForm: {
      },
    }
  },
  watch: {
    dialogFormVisible_add: {
      handler: function(val, oldVal) {
        if (!val) {
          this.$refs['formAll'].resetFields()
          this.$emit('getData');
        }
        else{
          this.openDialog();
        }
      }
    },
  },
  methods: {

    openDialog: function() {
        aflcExtractCashId(this.params).then(res=>{
        this.formAll = res.data
        })
    },
    close: function() {
      this.$emit('update:dialogFormVisible_add', false);
    },
  }
}
</script>
<style lang="scss" >
.CarCash{
    .carNewinfoH2{
        color: #f4f4f5;
        background: #909399;
        padding: 10px 0px;
        text-indent: 20px;
        margin: 10px 0px 20px;
        position: relative;
    }
}
</style>

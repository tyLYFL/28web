<template>
     <div class="comtratorDialog commoncss">
      <el-button :type="btntype" :value="value" :plain="plain" :icon="icon" @click="openDialog()" :class="editType=='view'?'pad0':''" size="mini"><span :class="editType=='view'?'BtnInfo':''">{{btntext}}</span ></el-button>
      <el-dialog  :visible="dialogFormVisible_add" :before-close="change" :title="btntitle" top=5vh v-dialogDrag>
            <el-form ref="formAllData" :model="formAllData"  :rules="rulesForm" :label-width="formLabelWidth">
            <el-row>
            <el-col :span="12"> 
            <el-form-item label="出发地" prop="areaName1">
            <el-input v-model="formAllData.areaName1" placeholder="请选择" :disabled="editType=='view'" v-if="editType=='view'"></el-input>
            <vregion :ui="true"  @values="regionChange1" class="form-control"  v-else>
                <el-input v-model="formAllData.areaName1" placeholder="请选择"></el-input>
            </vregion>
            </el-form-item>
            </el-col>
            <el-col :span="12">
            <el-form-item label="到达地" prop="areaName2">
            <el-input v-model="formAllData.areaName2" placeholder="请选择" :disabled="editType=='view'" v-if="editType=='view'"></el-input>
            <vregion :ui="true"  @values="regionChange2" class="form-control" v-else>
                <el-input v-model="formAllData.areaName2" placeholder="请选择"></el-input>
            </vregion>
            </el-form-item>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="12"> 
            <el-form-item label="区域承包商" prop="areaCarrierName">
                        <el-select v-model="formAllData.areaCarrierName" filterable placeholder="请选择" @change="handleSelect" :disabled="editType!=='add'">
                            <el-option
                            v-for="item in restaurants"
                            :key="item.id"
                            :label="item.companyName"
                            :value="item.companyName">
                            <span style="float: left">{{ item.companyName }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.mobile }}</span>
                            </el-option>
                        </el-select>
            </el-form-item>
            </el-col>
            <el-col :span="12"> 
            <el-form-item label="承运有效期" prop="createTime">
                    <el-date-picker
                        is-range
                        unlink-panels
                        :picker-options="pickerOptions2"
                        type="daterange"
                        align="right"
                        v-model="formAllData.createTime"
                        range-separator="-"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        :default-time="['00:00:00', '23:59:59']"
                        @change='cTime'
                        :disabled="editType=='view'"
                        >
                    </el-date-picker>
            </el-form-item>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="12"> 
            <el-form-item label="承包价格" prop="carrierPrice" class="not_form">
                <el-input v-model="formAllData.carrierPrice" :disabled="editType=='view'"></el-input>
            </el-form-item>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="24"> 
            <el-form-item label="备注" class="textArea">
                <el-input type="textarea" v-model="formAllData.remark" :disabled="editType=='view'" maxlength="100" :rows="2"></el-input>
            <p class="countNum"> <span>{{formAllData.remark.length}}</span> <span>/ 100</span> </p>
            </el-form-item>
            </el-col>
            </el-row>
             </el-form> 
        <div slot="footer" class="dialog-footer">
          <el-button type="primary"  @click="add_data" v-if="editType=='add'">确 定</el-button>
          <el-button type="primary"  @click="edit_data" v-if="editType=='edit'">确 定</el-button>
          <el-button @click="close()">取 消</el-button>
        </div>
      </el-dialog>
     </div>
</template>
          
<script>
import GetCityList from '@/components/GetCityList/city'
import { aflcTradeAreaTrade_Add,aflcTradeAreaTrade_Update,data_get_aflcAreaCarrier_Id} from '@/api/server/lingdan/AreaContractor.js'
import {parseTime,pickerOptions2} from '@/utils/'
import vregion from '@/components/vregion/Region'
import { eventBus } from '@/eventBus'
import {data_get_aflcPartner_findAuthCompany} from '@/api/users/district/manageDistrict.js'
export default {
    data(){
        // 地址
        const areaNameValidator =  (rule, val, cb) => {
            if(!val){
            cb(new Error('地址不能为空'))
            }
            else{
                cb()
            }         
        }
        // 区域承包商
        const areaCarrierNameValidator =  (rule, val, cb) => {
            if(!val){
            cb(new Error('区域承包商不能为空'))
            }
            else{
                cb()
            }        
        }

        // 选择区域承运有效期
        const createTimeValidator =  (rule, val, cb) => {
            if(!val){
            cb(new Error('承运有效期不能为空'))
            }
            else{
                cb()
            }        
        }
        const carrierPriceValidator = (rule, val, cb) => {
            var reg = /^[0-9]+(.[0-9]{1,2})?$/ 
            if(!reg.test(val)&&val){
            cb(new Error('请输入数字,最多只能保留2位小数'))
            }
            else{
                cb()
            }        
        }
          return{
              restaurants:[],
              pickerOptions2: {
              shortcuts: pickerOptions2},
              dialogFormVisible_add: false,
              formLabelWidth:'120px',
              formAllData:{
               createTime:null,
               areaName1:null,
               areaName2:null,
               startProvince:null,
               startCity:null,
               startArea:null,
               startCode:null,
               endProvince:null,
               endCity:null,
               endArea:null,
               endCode:null,
               areaCarrierName:null,
               areaCarrierId:null,
               startTime:null,
               endTime:null,
               carrierPrice:null,
               remark:'',
              },
              rulesForm:{
              areaName1:{trigger:'change',required:true,validator: areaNameValidator},
              areaName2:{trigger:'change',required:true,validator: areaNameValidator},
              areaCarrierName:{trigger:'change',required:true,validator: areaCarrierNameValidator},
              createTime:{trigger:'change',required:true,validator: createTimeValidator},
              carrierPrice:{trigger:'change',required:true,validator: carrierPriceValidator},
              }
          }
    },
    components:{
        GetCityList,
        vregion,
    },
    props:{
            params:{
            type:[Object,String,Array,Number],
            },
            firstData:{
            type:[Object,String,Array,Number],
            },
            value:{
            type: String,
            default:''
            },
            btntype: {
            type: String,
            default: ''
            },
            btntext: {
            type: String,
            default: ''
            },
            btntitle: {
            type: String,
            default: ''
            },
            icon:{
            type: String,
            default: ''
            },
            plain:{
            type: Boolean,
            default: false
            },
            /*add新增，edit编辑，view查看*/
            editType: {
            type: String,
            }    
        },
        watch:{
            dialogFormVisible_add:{
            handler: function(val, oldVal) {
            if(!val){
            this.formAllData = {
               createTime:null,
               areaName1:null,
               areaName2:null,
               startProvince:null,
               startCity:null,
               startArea:null,
               startCode:null,
               endProvince:null,
               endCity:null,
               endArea:null,
               endCode:null,
               areaCarrierName:null,
               areaCarrierId:null,
               startTime:null,
               endTime:null,
               carrierPrice:null,
               remark:'',
            }
            this.$refs['formAllData'].resetFields();
            }
            else{
            let FromData = {
             companyName:null,
            }
            data_get_aflcPartner_findAuthCompany(1, 10000, FromData).then(res=>{
            this.restaurants = res.data;
            })
            }
            }
            }
        },
        mounted(){
        },
        methods:{
        handleSelect(item) {
            let SelectObj = {};
            SelectObj = this.restaurants.find((items)=>{
            return items.companyName == item;
            });
            this.formAllData.areaCarrierName = SelectObj.companyName
            this.formAllData.areaCarrierId = SelectObj.id
            },
        regionChange1(d){
            this.formAllData.areaName1 = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            this.formAllData.startProvince = d.province ? d.province.name : '';
            this.formAllData.startCity = d.city ? d.city.name : '';
            this.formAllData.startArea = d.area ? d.area.name : '';
            this.$forceUpdate()
            if(d.area){
                this.formAllData.startCode = d.area.code;
            }else if(d.city){
                this.formAllData.startCode = d.city.code;
            }else{
                this.formAllData.startCode = d.province ? d.province.code :'';
            }
            },
        regionChange2(d){
            this.formAllData.areaName2 = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue2(d.province)}${this.getValue2(d.city)}${this.getValue2(d.area)}${this.getValue2(d.town)}`.trim();
            this.formAllData.endProvince = d.province ? d.province.name : '';
            this.formAllData.endCity = d.city ? d.city.name : '';
            this.formAllData.endArea = d.area ? d.area.name : '';
            this.$forceUpdate()
            if(d.area){
                this.formAllData.endCode = d.area.code;
            }else if(d.city){
                this.formAllData.endCode = d.city.code;
            }else{
                this.formAllData.endCode = d.province ? d.province.code :'';
            }
        },
        getValue(obj){
            return obj ? obj.value:'';
        },
        getValue2(obj){
            return obj ? obj.value:'';
        },
        openDialog:function(){
            if(this.editType=='add'){
            this.dialogFormVisible_add = true;
            }
            else if(this.editType=='edit'){
            if(!this.params.length){
                this.$message.warning('请选择您要操作的区域承包商');
                return
            }
            else if(this.params.length == 0 && this.editType !== 'add'){
                this.$message.warning('请选择您要操作的区域承包商');
                return false
            }else if (this.params.length > 1 && this.editType !== 'add') {
                    this.$message({
                        message: '每次只能操作单条数据~',
                        type: 'warning'
                    })
                    this.$emit('getData') 
                    return false
          }
          else{
              data_get_aflcAreaCarrier_Id(this.params[0].id).then(res=>{
                  this.formAllData = res.data
                  this.formAllData.areaName1 = res.data.startProvince + res.data.startCity + res.data.startArea
                  this.formAllData.areaName2 = res.data.endProvince + res.data.endCity + res.data.endArea
                  this.formAllData.createTime = [res.data.startTime,res.data.endTime]
              }).catch(err=>{
              })
              this.dialogFormVisible_add = true;
          }
        }
        else if(this.editType == 'view'){
            data_get_aflcAreaCarrier_Id(this.firstData.id).then(res=>{
                  this.formAllData = res.data
                  this.formAllData.areaName1 = res.data.startProvince + res.data.startCity + res.data.startArea
                  this.formAllData.areaName2 = res.data.endProvince + res.data.endCity + res.data.endArea
                  this.formAllData.createTime = [res.data.startTime,res.data.endTime]
              }).catch(err=>{
              })
              this.dialogFormVisible_add = true;
        }
        },
        change:function(){
            this.dialogFormVisible_add = false;
        },
        close:function(){
            this.dialogFormVisible_add = false;
            },
        cTime(i){
                if(i!==null){
                this.formAllData.startTime = i[0]
                this.formAllData.endTime = i[1]
                }
                else{
                this.formAllData.startTime = null
                this.formAllData.endTime = null
                }
        },
        changeList(){
                eventBus.$emit('pushListtwo')
            },  
        // 新增
        add_data(){
            let fromAll = {
               startProvince:this.formAllData.startProvince,
               startCity:this.formAllData.startCity,
               startArea:this.formAllData.startArea,
               startCode:this.formAllData.startCode,
               endProvince:this.formAllData.endProvince,
               endCity:this.formAllData.endCity,
               endArea:this.formAllData.endArea,
               endCode:this.formAllData.endCode,
               areaCarrierName:this.formAllData.areaCarrierName,
               areaCarrierId:this.formAllData.areaCarrierId,
               startTime:this.formAllData.startTime,
               endTime:this.formAllData.endTime,
               carrierPrice:this.formAllData.carrierPrice,
               remark:this.formAllData.remark,
            }
         this.$refs['formAllData'].validate(valid=>{
         if(valid){            
            aflcTradeAreaTrade_Add(fromAll).then(res=>{
            this.$message.success('新增成功');
            this.changeList();
            this.dialogFormVisible_add = false; 
            }).catch(err=>{
            this.$message.error(err.text)
            this.changeList();
        })
        }
        })
        },
        edit_data(){
         let updataFromAll = {
               startProvince:this.formAllData.startProvince,
               startCity:this.formAllData.startCity,
               startArea:this.formAllData.startArea,
               startCode:this.formAllData.startCode,
               endProvince:this.formAllData.endProvince,
               endCity:this.formAllData.endCity,
               endArea:this.formAllData.endArea,
               endCode:this.formAllData.endCode,
               areaCarrierName:this.formAllData.areaCarrierName,
               areaCarrierId:this.formAllData.areaCarrierId,
               startTime:this.formAllData.startTime,
               endTime:this.formAllData.endTime,
               carrierPrice:this.formAllData.carrierPrice,
               remark:this.formAllData.remark,
               id:this.formAllData.id
         }
         this.$refs['formAllData'].validate(valid=>{
        if(valid){
         aflcTradeAreaTrade_Update(updataFromAll).then(res=>{
            this.$message.success('修改成功');
            this.changeList();
            this.dialogFormVisible_add = false;
         }).catch(err=>{
            this.$message.error(err.text)
            this.changeList();
        })
        }})
        }

        } 
}
</script>
          
<style lang="scss">
.comtratorDialog{
    .BtnInfo{
        font-weight: bold;
        font-size:12px;
    }
    .el-dialog{
        overflow: unset!important;
        .el-dialog__body{
        overflow: unset!important;
        }
    }
    display: inline-block;
    .el-input__inner{
        width: 320px;
    }
    .pad0{padding: 0px 15px 0px;}
    .not_form{
        label{
            &::before{
             content: ''!important;
            }
        }
    }
}

</style>

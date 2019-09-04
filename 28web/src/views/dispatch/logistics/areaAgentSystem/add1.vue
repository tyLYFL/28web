<template>
    <div class="areaTradeSystem commoncss StyleNewinfoComponent">
        <el-dialog :title='formtitle' :close-on-click-modal="false" width="65%" v-el-drag-dialog top="5vh" :visible="dialogFormVisible" @close="close">
            <el-form   :model="standForm" :rules="newrules" label-position="right"  ref="ruleForm"  :label-width="formLabelWidth">
                <h2>基本信息</h2>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item  label="区代名称：" prop="agencyName">
                            <el-input v-model="standForm.agencyName" clearable  maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item  label="区代联系人：" prop="contactName">
                            <el-input v-model="standForm.contactName" clearable maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系人电话：" prop="mobile">
                            <el-input v-model="standForm.mobile"  clearable v-numberOnly maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item  label="区代详细地址：" prop="detailAddress">
                            <el-input v-model="standForm.detailAddress" ref="addressInput" :disabled="isView" clearable @focus="toLoadUI()" @clear="()=>{return clearAddress(standForm)}"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item  label="区代客服电话：" prop="agencyMobile">
                            <el-input v-model="standForm.agencyMobile" clearable maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="区代所在地：" prop="agencyArea">
                            <!-- <getCityList class="chooseItem" @returnStr="getStrStart" :isArea="true" v-model="standForm.areaCode" ref="startArea"></getCityList> -->
                            <el-input v-model="standForm.agencyArea" disabled v-if="isView"></el-input>
                            <vregion :ui="true"  @values="regionChange" class="form-control" ref = "regionChange" v-else>
                               <el-input v-model="standForm.agencyArea" placeholder="请选择" ></el-input>
                           </vregion>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="门牌号：" prop="doorNo">
                            <el-input v-model="standForm.doorNo" clearable maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item  label="所属业务员：" prop="salesmanId">
                            <el-input v-model="standForm.salesmanName" v-if="isView" disabled></el-input>
                            <el-select v-model="standForm.salesmanId" filterable  clearable placeholder="请选择" v-else>
                                <el-option
                                v-for="item in optionsStaff"
                                :key="item.userId"
                                :label="item.name"
                                :value="item.userId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <h2>公司信息</h2>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="区代物流公司：" prop="companyName">
                            <el-input v-model="standForm.companyName" v-if="isView || isModify" disabled></el-input>
                            <CompanySearch @returnCompany = 'getCompany' v-model="standForm.companyName" :clearableStatus = 'true' ref="CompanySearch" v-else/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="公司联系人：" prop="comContactName">
                            <el-input v-model="standForm.comContactName" clearable maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="联系人电话：" prop="comMobile">
                            <el-input v-model="standForm.comMobile"  clearable v-numberOnly maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <h2>运作信息</h2>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="银行账户名称：" prop="bankAccount">
                            <el-input v-model="standForm.bankAccount" clearable maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="银行账号：" prop="bankNum">
                            <el-input v-model="standForm.bankNum" clearable maxlength="30" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="发卡行：" prop="bankName">
                            <el-input v-model="standForm.bankName"  clearable maxlength="20" :disabled="isView"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row :gutter="20">
                    <el-col :span="12">
                         <el-form-item label="运作时间：" prop="timeVal">
                            <el-date-picker
                                v-model="standForm.timeVal"
                                type="daterange"
                                start-placeholder="开始日期"
                                value-format="timestamp"
                                unlink-panels
                                :disabled="isView"
                                end-placeholder="结束日期"
                                :default-time="['00:00:00', '23:59:59']">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="区代图片：" prop="imgSrc">
                            <img style="width:200px;" :src="standForm.imgSrc ? standForm.imgSrc : defaultImg" alt="" v-if="isView">
                            <!-- <el-button size="mini" type="primary" plain v-showPicture :imgurl="standForm.imgSrc ? standForm.imgSrc : defaultImg" v-if="isView">查看</el-button> -->
                            <UploadImg class="licensePicture" tip="（必须为jpg/png并且小于5M）" v-model="standForm.imgSrc" v-else/>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <h2>资质照片</h2>
                <el-row :gutter="20" v-viewer>
                    <el-col :span="6" class="CheckPass">
                        <el-form-item prop="businessImg" label-width="0">
                            <div class="uploadPicture">
                                <h3 class="uploadH3">公司营业执照</h3>
                                <div class="uploadImgBox" v-if="isView">
                                    <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                        <img :src='standForm.businessImg ? standForm.businessImg : defaultImg'  alt="" >
                                    </el-tooltip>
                                </div>
                                <div class="upload_True" v-else >
                                    <UploadImg class="licensePicture" tip="（必须为jpg/png并且小于5M）" v-model="standForm.businessImg"/>
                                </div>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="CheckPass">
                        <el-form-item prop="legalIdImg" label-width="0">
                            <div class="uploadPicture">
                                <h3 class="uploadH3"><span style="color:red;">*</span>法人身份证照片</h3>
                                <div class="uploadImgBox" v-if="isView">
                                    <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                        <img :src='standForm.legalIdImg ? standForm.legalIdImg : defaultImg'  alt="" >
                                    </el-tooltip>
                                </div>
                                <div class="upload_True" v-else >
                                    <UploadImg class="licensePicture" tip="（必须为jpg/png并且小于5M）" v-model="standForm.legalIdImg"/>
                                </div>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="CheckPass">
                        <el-form-item prop="storeImg" label-width="0">
                            <div class="uploadPicture">
                                <h3 class="uploadH3"><span style="color:red;">*</span>档口照片</h3>
                                <div class="uploadImgBox" v-if="isView">
                                    <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                        <img :src='standForm.storeImg ? standForm.storeImg : defaultImg'  alt="" >
                                    </el-tooltip>
                                </div>
                                <div class="upload_True" v-else >
                                    <UploadImg class="licensePicture" tip="（必须为jpg/png并且小于5M）" v-model="standForm.storeImg"/>
                                </div>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="CheckPass">
                        <el-form-item prop="carImg" label-width="0">
                            <div class="uploadPicture">
                                <h3 class="uploadH3">车辆照片</h3>
                                <div class="uploadImgBox" v-if="isView">
                                    <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                        <img :src='standForm.carImg ? standForm.carImg : defaultImg'  alt="" >
                                    </el-tooltip>
                                </div>
                                <div class="upload_True" v-else >
                                    <UploadImg class="licensePicture" tip="（必须为jpg/png并且小于5M）" v-model="standForm.carImg"/>
                                </div>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <h2>合同附件</h2>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <!-- <el-form-item prop="businessLicenceFile" label-width="0"> -->
                            <div v-if="isView" class="clearfix uploadcard">
                                <el-button class="showBtn" v-for="(item,idx) in enclosure" :key="idx" size="mini" type="primary" plain @click="handleclick(item,idx)">附件{{idx+1}}</el-button>
                            </div>
                            <div class="clearfix uploadcard" v-else>
                                <upload :title="'本地上传'" tip="" v-model="standForm.contractImg" :showFileList="true"/>
                            </div>
                        <!-- </el-form-item> -->
                    </el-col>
                </el-row> 
                <h2>其他</h2>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="备注：" prop="remark">
                            <el-input
                               placeholder="少于100字符"
                               type="textarea"
                               :autosize="{ minRows: 2, maxRows: 4}"
                               clearable
                               maxlength="100"
                               :disabled="isView"
                               v-model="standForm.remark">
                           </el-input>
                        </el-form-item>
                    </el-col>
                </el-row> 
                <el-row :gutter="20" v-if="isView">
                    <el-col :span="8">
                        <el-form-item  label="创建人：" prop="creater">
                            <el-input v-model="standForm.creater" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item  label="创建时间：" prop="createTime">
                            <el-input :value="standForm.createTime | parseTime" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="最后修改人：" prop="updater">
                            <el-input v-model="standForm.updater" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="最后修改时间：" prop="updateTime">
                            <el-input :value="standForm.updateTime | parseTime" disabled></el-input>
                        </el-form-item>
                    </el-col>
                </el-row> 
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" plain  icon="el-icon-success" v-if="!isView" @click="submitForm('ruleForm')" :disabled="btnShow">保 存</el-button>
                <el-button type="primary" plain icon="el-icon-error" @click="close">取 消</el-button>
            </div> 
        </el-dialog>
    </div>
</template>

<script>

// import { newAreaAgentSystem,getAgencyLine,reviseAreaAgentSystem2 } from '@/api/dispatch/areaAgentSystem.js'
import { newAreaAgentSystem2,areaAgentSystemDetails,reviseAreaAgentSystem2 } from '@/api/dispatch/areaAgentSystem.js'
import { objectMerge2 } from '@/utils/'
// import NumberOnlyPoint from '@/components//NumberOnlyPoint/index'
import UploadImg from '@/components/Upload/singleImage'
// import Upload from '@/components/Upload/singlei'
import { loadJs } from '@/utils/'
import { getCityInfo,getStreetInfo,operateStaff } from '@/api/common'
import CompanySearch from '@/components/CustomerSearch/companyList'
// import getCityList from '@/components/GetCityList/chinaMap'
import vregion from '@/components/vregion/Region'
import {REGEX} from '@/utils/validate'
import upload from '@/components/Upload/multImage'

export default {
    name: 'areaTradeSystem',
    props: {
        dialogFormVisible:{
            type:Boolean,
            required:true
        },
        formtitle:{
            type:String,
            required:false,
            default:'新增区代'
        },
        isModify:{
            type:Boolean,
            default:false,
        },
        changeForm:{
            type:Object,
        },
        isView:{
            type:Boolean,
            default:false,
        }
    },
    components:{
        // NumberOnlyPoint,
        UploadImg,
        CompanySearch,
        // getCityList,
        vregion,
        upload,
    },
    data() {
        var agencyMobileCheck = (rule, value, callback) => {
            if(!value){
                callback(new Error('区代客服电话不能为空'));
            }
            else if (!REGEX.MOBILE.test(value) && !REGEX.TEL.test(value)) {
                callback('请输入正确的手机号或电话号码~')
            }else{
                callback()
            }
        };
        var checkLocation = (rule,value,callback) => {
            if (value == '') {
                callback(new Error('请选择区域'));
            } else if(this.standForm.areaCode == ''){
                callback(new Error('必须选择到区域范围'));
            }else{
                callback();
            }
        };

        var checkDetailAddress = (rule, value, callback) => {
            if(!value){
                callback(new Error('请选择区代详细地址'));
            }  
            else if (this.standForm.latitude == '' && this.standForm.longitude == '') {
                callback('未获取到详细地址的经纬度,请选择列表地址!')
            }else{
                callback()
            }
        };
      return {
        defaultImg:'/static/test.jpg',//默认第一张图片的url
        btnShow:false,
        formLabelWidth:'120px',
        standForm:{
            agencyName:'',//区代名称
            companyId:'',//区代公司
            companyName:'',//区代公司名称
            comContactName:'',//公司联系人
            companyScore:'',
            companyAccount:'',//物流公司账号（TMS用）
            comMobile:'',//公司联系人电话
            detailAddress:'',//区代详细地址
            latitude:'',//纬度
            longitude:'',//经度
            agencyArea:'',//区代所在地
            province:'',//区代省份
            city:'',//区代市
            area:'',//区域
            areaCode:'',//区域code
            doorNo:'',//门牌号
            contactName:'',//区代联系人
            mobile:'',//区代联系人电话
            agencyMobile:'',//区代客服电话
            imgSrc:'',//区代图片
            timeVal:[],
            startTime:'',//运作开始日期
            endTime	:'',//运作结束日期
            salesmanId:'',//所属业务员ID
            salesmanName:'',//业务员名称
            bankAccount:'',//银行账户名
            bankNum:'',//银行卡号
            bankName:'',//发卡名称
            businessImg:'',//公司营业执照
            legalIdImg:'',//法人身份证照片
            storeImg:'',//档口图片
            carImg:'',//车辆图片
            contractImg:'',//合同附件
            remark:'',//备注
        },
        newrules: {
            agencyName:{required: true,message:"请输入区代名称",trigger: 'change'},
            companyName:{required: true,message:"请选择区代公司",trigger: 'change' },
            detailAddress:{required: true, validator: checkDetailAddress, trigger: 'change'},
            agencyArea:{ required: true, validator: checkLocation,trigger: 'change'},
            agencyMobile:{required: true, validator: agencyMobileCheck,trigger: 'change'},
            imgSrc:{required: true, message:"请上传前端显示区代图片", trigger: 'change'},
            timeVal:{type: 'array', required: true, message: '请选择运作时间', trigger: 'change'},
            bankAccount:{required: true,message:"请输入银行账户名称",trigger: 'change'},
            bankNum:{required: true,message:"请输入银行卡号",trigger: 'change'},
            bankName:{required: true,message:"请输入银行发卡行",trigger: 'change'},
            legalIdImg:{required: true,message:"请上传法人身份证照片",trigger: 'change'},
            storeImg:{required: true,message:"请上传档口照片",trigger: 'change'},
        },
        optionsStaff:[],//系统运营人员
        enclosure:[],//附件展示
      };
    },
    watch:{
        // 'standForm.areaCode':{
        //     handler(newVal,oldVal){
        //         // console.log('standForm.areaCode',newVal,'standForm',oldVal)
        //         if(newVal){
        //             getAgencyLine(newVal,this.standForm.city).then(res => {
        //                 this.agencyLineTree = res.data;
        //                 if(!res.data){
        //                     this.$message({
        //                         type: 'info',
        //                         message: '当前区代所在地没有线路信息，请先添加干线费定价!'
        //                     })
        //                 }
        //             }).catch(err => {
        //                 this.$message({
        //                     type: 'info',
        //                     message: '网络失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
        //                 })
        //             })
        //         }
        //     },
        //     deep:true
        // },
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
        handleclick(val,idx){
            console.log(val)
            var NewDom = document.createElement("a");
            NewDom.setAttribute('href', val);
            NewDom.setAttribute('target', '_blank');
            NewDom.setAttribute('download', '附件'+(idx+1));
            document.body.appendChild(NewDom);
            NewDom.click();
            document.body.removeChild(NewDom)
        },
        reviseForms(){
            if(this.isModify || this.isView){
                this.clearForms();
                areaAgentSystemDetails(this.changeForm.id).then(res => {
                    this.standForm = objectMerge2(res.data);
                    this.$set(this.standForm, 'timeVal', [this.changeForm.startTime,this.changeForm.endTime])
                    this.enclosure = this.standForm.contractImg ? this.standForm.contractImg.split(',') : [];
                    console.log('this.enclosure',this.enclosure)
                })
            }else{
                this.clearForms();
            }
        },
        regionChange(d){
            // console.log('getStrStart',d)
            this.standForm.agencyArea = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            this.standForm.province = d.province ? d.province.name : '';//省名称
            this.standForm.city = d.city ? d.city.name : '';//市名称
            this.standForm.area = d.area ? d.area.name : ''
            this.standForm.areaCode = d.area ? d.area.code : ''
        },
        getValue(obj){
            return obj ? obj.value:'';
        },
        getCompany(val){
            // console.log('getCompany',val)
            this.standForm.companyId = val.id;
            this.standForm.companyName = val.companyName;
            this.standForm.comMobile = val.mobile;
            this.standForm.comContactName = val.contactsName;
            this.standForm.companyScore = val.companyScore;
            this.standForm.companyAccount = val.mobile;
        },
        clearAddress(item){
            this.$set(item,'detailAddress','');
            this.$set(item,'latitude','');
            this.$set(item,'longitude','');
            this.$set(item,'province','');
            this.$set(item,'city','');
            this.$set(item,'area','');
            this.$set(item,'areaCode','');
            this.$refs.regionChange.clear();
            // this.$refs.startArea.clearData();
        },
        close(){
            if(this.dialogFormVisible){
                this.$emit('update:dialogFormVisible',false);
                if(!this.isView){
                    this.$refs.regionChange.clear()
                }
                this.$refs.ruleForm.resetFields();
                this.clearForms();
                this.$emit('renovate');
                this.btnShow = false;
                if(!this.isModify && !this.isView){
                    this.$refs.CompanySearch.clear();
                }
            }
        },
        //初始化选择项数据
        init(){
            // loadJs('https://webapi.amap.com/ui/1.0/main.js?v=1.0.11');
            operateStaff().then(res => {
                this.optionsStaff = res.data;
            })
        },
        toLoadUI(){
            // console.log(this.$refs.addressInput)
            AMapUI.loadUI(['misc/PoiPicker'], (PoiPicker) =>{
            let poiPicker = new PoiPicker({
                input: this.$refs.addressInput.$refs.input
            });
            this.poiPickerReady(poiPicker);
            });
        },
        poiPickerReady(poiPicker){
            poiPicker.on('poiPicked', (poiResult)=> {
                // console.log(poiResult)
                if(poiResult.item.location === undefined){
                    this.$message.warning("没有获取到地址");
                    this.standForm.detailAddress = '';
                    this.standForm.latitude = '';
                    this.standForm.longitude = '';
                    this.standForm.province = '';
                    this.standForm.city = '';
                    this.standForm.area = '';
                    this.standForm.areaCode = '';
                    this.$refs.regionChange.clear()
                    // this.$refs.startArea.clearData();
                    return
                }

                let geocoder = new AMap.Geocoder({});
                geocoder.getAddress([poiResult.item.location.lng,poiResult.item.location.lat], (status, result) =>{
                    if (status === 'complete' && result.info === 'OK') {
                    // console.log('result',result)
                    this.standForm.detailAddress = `${poiResult.item.name} (${poiResult.item.district}${poiResult.item.address})`
                    this.standForm.latitude = poiResult.item.location.lat;
                    this.standForm.longitude = poiResult.item.location.lng;
                    this.standForm.province = result.regeocode.addressComponent.province;
                    this.standForm.city = result.regeocode.addressComponent.city;
                    this.standForm.area = result.regeocode.addressComponent.district;
                    this.standForm.areaCode = result.regeocode.addressComponent.adcode;
                    this.standForm.agencyArea = `${result.regeocode.addressComponent.province}${result.regeocode.addressComponent.city}${result.regeocode.addressComponent.district}`;
                    // let cityCode = this.standForm.areaCode.slice(0,4)+'00';
                    // let provinceCode = cityCode.slice(0,3)+'000';
                    // console.log(this.$refs.startArea)
                    }
                });
            });
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.btnShow = true;
                    this.complateData();
                    let forms = objectMerge2(this.standForm);
                    // console.log(forms)
                    let standarFunction;
                    standarFunction = this.isModify ? reviseAreaAgentSystem2 : newAreaAgentSystem2;
                    standarFunction(forms).then(res =>{
                        this.$message({
                            type: 'success',
                            message: this.isModify ? '区代修改成功' : '新增区代成功！' 
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
                if(i == 'timeVal'){
                    this.standForm[i] = []
                }
                this.standForm[i] = ''
            };
        },
        complateData(){
            this.standForm.startTime =  this.standForm.timeVal[0] ? this.standForm.timeVal[0] : '';
            this.standForm.endTime =  this.standForm.timeVal[1] ? this.standForm.timeVal[1] :'';
            if(this.standForm.salesmanId){
                this.standForm.salesmanName = this.optionsStaff.find(item => item.userId === this.standForm.salesmanId)['name'];
            }
        }
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
    .areaTradeSystem{
        .el-dialog .CheckPass .el-form-item:first-child {
            margin-bottom: 22px;
        }
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
        .uploadcard{
            margin-bottom: 22px;
            .showBtn + .showBtn{
                margin-left: 10px;
            }
            .box_container .el-upload .el-upload-dragger {
                width: 90px;
                height: 30px;
                border:0 none;
                .el-button {
                    margin-top: 0;
                    margin-left:5px; 
                }
            }
            .el-upload-list--picture .el-upload-list__item{
                width: 20%;
                display: inline-block;
                margin: 0 5px;
            }
        }
        .amap-ui-poi-picker-sugg-list .sugg-item {
            line-height: 22px;
        }
    }
</style>

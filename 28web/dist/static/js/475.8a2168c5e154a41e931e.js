webpackJsonp([475],{"0TzR":function(e,t,n){"use strict";t.d=function(e,t,n){return Object(r.a)({url:"/"+i+"/dispatch/aflcOrderObtain/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:n}})},t.c=function(e){return Object(r.a)({url:"/"+i+"/dispatch/aflcOrderObtain/v1/add2",method:"post",data:e})},t.a=function(e){return Object(r.a)({url:"/"+i+"/dispatch/aflcOrderObtain/v1/update",method:"put",data:e})},t.b=function(e){return Object(r.a)({url:"/"+i+"/dispatch/aflcOrderObtain/v1/delete",method:"delete",data:e})};var r=n("Vo7i"),i="aflc-order"},"524S":function(e,t){},CSar:function(e,t,n){"use strict";var r=n("t5DY");t.a={name:"getCityList",props:{disabled:{type:Boolean},value:[String,Array]},data:function(){return{selectedOptions:[],areaList:null,cityTree:[],props:{label:"name",value:"code",children:"children"},nowData:{province:null,city:null,area:null}}},methods:{handleItemMore:function(e){e[0]&&(this.nowData.province={code:e[0],key:e[0],name:this.$refs.cityTree.currentLabels[0],value:this.$refs.cityTree.currentLabels[0],parentCode:null}),e[1]&&(this.nowData.city={code:e[1],key:e[1],name:this.$refs.cityTree.currentLabels[1],value:this.$refs.cityTree.currentLabels[1],parentCode:e[0]}),e[2]&&(this.nowData.area={code:e[2],key:e[2],name:this.$refs.cityTree.currentLabels[2],value:this.$refs.cityTree.currentLabels[2],parentCode:e[1]}),this.returnArr(this.nowData)},init:function(){var t=this;Object(r._2)().then(function(e){t.cityTree=e.data})},returnArr:function(e){this.$emit("returnStr",e)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}},Cae1:function(e,t,n){"use strict";var r=n("CSar"),i=n("JNZ8");var o=function(e){n("fJqg")},s=n("VU/8")(r.a,i.a,o,null,null);t.a=s.exports},JNZ8:function(e,t,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chooseCityList"},[n("el-cascader",{ref:"cityTree",attrs:{options:t.cityTree,disabled:t.disabled,props:t.props},on:{change:t.handleItemMore},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)},staticRenderFns:[]};t.a=r},Pzvh:function(e,t,n){"use strict";var r=n("//Fk"),i=n.n(r),o=n("Cae1"),s=n("t5DY"),a=n("0TzR"),c=n("0xDb");t.a={name:"addClassfy",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!0},isModify:{type:Boolean,default:!1},changeforms:{type:Object}},components:{getCityList:o.a},data:function(){return{btnShow:!1,formLabelWidth:"120px",standForm:{areaCode:"",areaCodeName:"",serivceCode:"",serivceCodeName:"",carType:"",carTypeName:"",obtainKmList:"",obtainTimeList:"",obtainTime:"",obtainKm:"",obtainTimeInterval:"",obtainKmInterval:"",rounds:""},optionsService:"",optionsCarType:"",information:"",newrules:{areaCode:[{required:!0,message:"请选择所在地点",trigger:"change"}],serivceCode:[{required:!0,message:"请选择服务类型",trigger:"change"}],carType:[{required:!0,message:"请选择用车类型",trigger:"change"}],obtainTimeInterval:{required:!0,validator:function(e,t,n){""==t?n(new Error("请输入中单时间间隔")):parseInt(t)<5?n(new Error("限制中单时间间隔不小于5秒")):n()},trigger:"change"},obtainKmInterval:{required:!0,message:"请输入中单距离间隔",trigger:"change"},rounds:{required:!0,message:"请输入中单公布轮数",trigger:"change"}}}},watch:{dialogFormVisible:{handler:function(e,t){e&&this.init()},deep:!0}},mounted:function(){},methods:{close:function(){this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.$refs.area&&(this.$refs.area.selectedOptions=[]),this.btnShow=!1},getStr:function(e){console.log("data:",e),this.standForm.areaCodeName=e.province||e.city||e.area?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)).trim():"",e.city?this.standForm.areaCode=e.city.code:this.standForm.areaCode=e.province.code},getValue:function(e){return e?e.value:""},init:function(){var t=this;if(this.clearForms(),!this.isModify)return i.a.all([Object(s._4)(),Object(s._7)()]).then(function(e){console.log(e),t.optionsCarType=e[0].data,t.optionsService=e[1].data}).catch(function(e){t.$message({type:"warning",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})});this.standForm=Object(c.i)({},this.changeforms)},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message({type:"warning",message:"请填写完整数据"}),!1;r.complantName();var t=Object(c.i)({},r.standForm),n=r.isModify?Object(a.a)(t):Object(a.c)(t);console.log(t),r.btnShow=!0,n.then(function(e){r.$message({type:"success",message:"操作成功"}),r.close()}).catch(function(e){r.$message({type:"warning",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),r.btnShow=!1})})},clearForms:function(){for(var e in this.standForm)this.standForm[e]=""},complantName:function(){var t=this;this.isModify||(this.standForm.serivceCode&&(this.standForm.serivceCodeName=this.optionsService.find(function(e){return e.code===t.standForm.serivceCode}).name),this.standForm.carType&&(this.standForm.carTypeName=this.optionsCarType.find(function(e){return e.code===t.standForm.carType}).name))}}}},exsX:function(e,t,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"orderObtain commoncss"},[n("el-dialog",{attrs:{title:t.formtitle,"close-on-click-modal":!1,visible:t.dialogFormVisible},on:{close:t.close}},[n("el-form",{ref:"ruleForm",attrs:{model:t.standForm,rules:t.newrules,"label-width":t.formLabelWidth,"label-position":"right"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"所在地：",prop:"areaCode"}},[t.isModify?n("el-input",{attrs:{disabled:""},model:{value:t.standForm.areaCodeName,callback:function(e){t.$set(t.standForm,"areaCodeName",e)},expression:"standForm.areaCodeName"}}):n("getCityList",{ref:"area",staticClass:"chooseItem",on:{returnStr:t.getStr},model:{value:t.standForm.areaCode,callback:function(e){t.$set(t.standForm,"areaCode",e)},expression:"standForm.areaCode"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"选择服务类型：",prop:"serivceCode"}},[t.isModify?n("el-input",{attrs:{disabled:""},model:{value:t.standForm.serivceCodeName,callback:function(e){t.$set(t.standForm,"serivceCodeName",e)},expression:"standForm.serivceCodeName"}}):n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.standForm.serivceCode,callback:function(e){t.$set(t.standForm,"serivceCode",e)},expression:"standForm.serivceCode"}},t._l(t.optionsService,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"选择用车类型：",prop:"carType"}},[t.isModify?n("el-input",{attrs:{disabled:""},model:{value:t.standForm.carTypeName,callback:function(e){t.$set(t.standForm,"carTypeName",e)},expression:"standForm.carTypeName"}}):n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.standForm.carType,callback:function(e){t.$set(t.standForm,"carType",e)},expression:"standForm.carType"}},t._l(t.optionsCarType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"中单时间间隔：",prop:"obtainTimeInterval"}},[n("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"请输入内容",maxlength:"4",clearable:""},model:{value:t.standForm.obtainTimeInterval,callback:function(e){t.$set(t.standForm,"obtainTimeInterval",e)},expression:"standForm.obtainTimeInterval"}},[n("template",{slot:"append"},[t._v("/秒")])],2)],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"中单距离间隔：",prop:"obtainKmInterval"}},[n("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"请输入内容",maxlength:"4",clearable:""},model:{value:t.standForm.obtainKmInterval,callback:function(e){t.$set(t.standForm,"obtainKmInterval",e)},expression:"standForm.obtainKmInterval"}},[n("template",{slot:"append"},[t._v("/公里")])],2)],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"轮数：",prop:"rounds"}},[n("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"请输入内容",maxlength:"4",clearable:""},model:{value:t.standForm.rounds,callback:function(e){t.$set(t.standForm,"rounds",e)},expression:"standForm.rounds"}},[n("template",{slot:"append"},[t._v("/轮")])],2)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:t.btnShow},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v(t._s(t.isModify?"保 存":"确 定"))]),t._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.close}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=r},fJqg:function(e,t){},"m+t+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Pzvh"),i=n("exsX");var o=function(e){n("524S")},s=n("VU/8")(r.a,i.a,o,null,null);t.default=s.exports},t5DY:function(e,t,n){"use strict";t._10=function(t){return t=t||"",o.a.get("/"+s+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return o.a.get("/"+s+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(o.a)({url:"/"+s+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(o.a)({url:"/"+s+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(o.a)({url:"/"+a+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new i.a(function(e){e(window.UPLOADPOLICYDATA)}):o.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return o.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return o.a.get("/"+a+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(o.a)({url:"/"+a+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return o.a.get("/"+a+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return o.a.get("/"+a+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return o.a.get("/"+s+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return o.a.get("/"+s+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return o.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return o.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(o.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(o.a)({url:"/"+s+"/system/user/v1/operate/staff",method:"post",data:e})};var r=n("//Fk"),i=n.n(r),o=n("Vo7i"),s="aflc-common",a="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
webpackJsonp([418],{"33qD":function(e,t){},"3li6":function(e,t,r){"use strict";var c=r("74zt"),n=r("0xDb"),a=r("Flqv"),i=r("zUTR");t.a={name:"newAgencyArea",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!1,default:""}},components:{getCityList:a.a},data:function(){return{btnShow:!1,formLabelWidth:"100px",standForm:{startAreaCode:"",agencyId:"",agencyIds:[]},newrules:{startAreaCode:{required:!0,message:"请选择出发区/县",trigger:"change"},agencyId:{required:!0,message:"请选择区代",trigger:"change"},agencyIds:{type:"array",required:!0,message:"请选择区代",trigger:"change"}},optionseAreaAgency:[]}},watch:{dialogFormVisible:{handler:function(e,t){e&&this.reviseForms()},deep:!0}},mounted:function(){},methods:{getAreaDelegate:function(e){this.standForm.startAreaCode=e.area?e.area.code:"",this.standForm.agencyId=""},getValue:function(e){return e?e.value:""},getAreaAgency:function(){var t=this;if(this.optionseAreaAgency=[],""==this.standForm.startAreaCode)return this.$message({type:"warning",message:"请先选择区代所在地！"});Object(i.i)(this.standForm.startAreaCode).then(function(e){setTimeout(function(){t.optionseAreaAgency=e.data,t.optionseAreaAgency==[]&&t.standForm.areaCode&&(t.standForm.agencyId="")},200)}).catch(function(e){t.standForm.agencyId=""})},reviseForms:function(){this.isModify?this.standForm=Object(n.i)(this.changeForm):this.clearForms()},close:function(){this.dialogFormVisible&&(this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.$refs.areaDelegate.clearData(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1)},init:function(){},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message({type:"warning",message:"请填写完整数据!"}),!1;r.btnShow=!0;var t=Object(n.i)(r.standForm);Object(c.w)(t).then(function(e){r.$message({type:"success",message:"新增增值服务标准定价区代成功!"}),r.close()}).catch(function(e){r.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),r.btnShow=!1})})},clearForms:function(){for(var e in this.standForm)this.standForm[e]=""}}}},"6v9S":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=r("3li6"),n=r("gP9L");var a=function(e){r("hmsK")},i=r("VU/8")(c.a,n.a,a,null,null);t.default=i.exports},"74zt":function(e,t,r){"use strict";t.E=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/list",method:"post",data:e})},t.A=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/add",method:"post",data:e})},t.G=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/update",method:"put",data:e})},t.h=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/list",method:"post",data:e})},t.f=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/"+e,method:"get"})},t.x=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/add",method:"post",data:e})},t.M=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/update",method:"put",data:e})},t.e=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/batchUpdate",method:"put",data:e})},t.j=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/banOrUse",method:"put",data:e})},t.i=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/list",method:"post",data:e})},t.y=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/add",method:"post",data:e})},t.g=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/"+e,method:"get"})},t.N=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/update",method:"put",data:e})},t.k=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/banOrUse",method:"put",data:e})},t.m=function(){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/templateExcel?platformType=1",responseType:"blob",method:"get"})},t.s=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/import",method:"post",data:e})},t.l=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueDeliveTakePrice/v1/outAgencyExcel?platformType="+e.platformType+"&carriersId="+e.carriersId+"&carriersName="+e.carriersName+"&useType="+e.useType,responseType:"blob",method:"get"})},t.K=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/list",method:"post",data:e})},t.B=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/add",method:"post",data:e})},t.J=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/"+e,method:"get"})},t.H=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/update",method:"put",data:e})},t.L=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/banOrUse",method:"put",data:e})},t.r=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/import",method:"post",data:e})},t.n=function(e){var t=e||"0";return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/templateExcel?platformType="+t,responseType:"blob",method:"get"})},t.o=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/outAgencyExcel?agencyName="+e.agencyName+"&agencyId="+e.agencyId+"&platformType="+e.platformType+"&agencyArea="+e.agencyArea+"&startArea="+e.startArea+"&startProvince="+e.startProvince+"&startCity="+e.startCity+"&startAreaCode="+e.startAreaCode+"&carriersId="+e.carriersId+"&carriersName="+e.carriersName+"&pointId="+e.pointId+"&pointName="+e.pointName+"&pointArea="+e.pointArea,responseType:"blob",method:"get"})},t.D=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAreaPriceNewV2/v1/list",method:"post",data:e})},t.z=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAreaPriceNewV2/v1/add",method:"post",data:e})},t.F=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAreaPriceNewV2/v1/update",method:"put",data:e})},t.a=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAreaPriceNewV2/v1/"+e,method:"get"})},t.b=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAreaPriceNewV2/v1/banOrUse",method:"put",data:e})},t.t=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/list",method:"post",data:e})},t.q=function(e,t){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/agencyLine?areaCode="+e+"&cityName="+t,method:"get"})},t.C=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/add",method:"post",data:e})},t.I=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/update",method:"put",data:e})},t.u=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/"+e,method:"get"})},t.v=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/banOrUse",method:"put",data:e})},t.p=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/outAgencyExcel?agencyId="+e,responseType:"blob",method:"get"})},t.c=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/list",method:"post",data:e})},t.w=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/add",method:"post",data:e})},t.d=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/banOrUse",method:"put",data:e})};var c=r("Vo7i"),n="aflc-uc",a="aflc-lcl"},Flqv:function(e,t,r){"use strict";var c=r("zLJG"),n=r("U0PT");var a=function(e){r("33qD")},i=r("VU/8")(c.a,n.a,a,null,null);t.a=i.exports},U0PT:function(e,t,r){"use strict";var c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chooseCityList"},[r("el-cascader",{ref:"chinaData",attrs:{placeholder:t.placeholderTxt,options:t.cascaderData,separator:"-","change-on-select":t.ifChange,props:t.props},on:{change:t.handleItemMore,"active-item-change":t.handleItemChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)},staticRenderFns:[]};t.a=c},gP9L:function(e,t,r){"use strict";var c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"newAgencyArea commoncss"},[r("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:t.formtitle,"close-on-click-modal":!1,width:"30%",top:"15vh",visible:t.dialogFormVisible},on:{close:t.close}},[r("el-form",{ref:"ruleForm",attrs:{model:t.standForm,rules:t.newrules,"label-position":"right","label-width":t.formLabelWidth}},[r("el-form-item",{attrs:{label:"区代所在地：",prop:"startAreaCode"}},[r("getCityList",{ref:"areaDelegate",staticClass:"chooseItem",attrs:{isArea:!0},on:{returnStr:t.getAreaDelegate},model:{value:t.standForm.startAreaCode,callback:function(e){t.$set(t.standForm,"startAreaCode",e)},expression:"standForm.startAreaCode"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"区代：",prop:"agencyIds"}},[r("el-select",{attrs:{multiple:"","collapse-tags":"",clearable:"",placeholder:"请选择"},on:{focus:t.getAreaAgency},model:{value:t.standForm.agencyIds,callback:function(e){t.$set(t.standForm,"agencyIds",e)},expression:"standForm.agencyIds"}},t._l(t.optionseAreaAgency,function(e){return r("el-option",{key:e.id,attrs:{label:e.agencyName,value:e.id}})}))],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:t.btnShow},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("保 存")]),t._v(" "),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.close}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=c},hmsK:function(e,t){},t5DY:function(e,t,r){"use strict";t._10=function(t){return t=t||"",a.a.get("/"+i+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return a.a.get("/"+i+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(a.a)({url:"/"+i+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(a.a)({url:"/"+i+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(a.a)({url:"/"+i+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(a.a)({url:"/"+o+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(a.a)({url:"/"+i+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(a.a)({url:"/"+i+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(a.a)({url:"/"+i+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(a.a)({url:"/"+i+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return a.a.get("/"+i+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new n.a(function(e){e(window.UPLOADPOLICYDATA)}):a.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return a.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return a.a.get("/"+o+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(a.a)({url:"/"+o+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return a.a.get("/"+o+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return a.a.get("/"+o+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(a.a)({url:"/"+i+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return a.a.get("/"+i+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return a.a.get("/"+i+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return a.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return a.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(a.a)({url:"/"+s+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(a.a)({url:"/"+i+"/system/user/v1/operate/staff",method:"post",data:e})};var c=r("//Fk"),n=r.n(c),a=r("Vo7i"),i="aflc-common",o="aflc-sm",s="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},zLJG:function(e,t,r){"use strict";var a=r("t5DY");t.a={name:"getAreaList",props:{disabled:{type:Boolean},value:[String,Array,Number],isArea:{type:Boolean,default:!1},ifChange:{type:Boolean,default:!1},placeholderTxt:{type:String,default:"请选择"}},data:function(){return{departmentOptions:[],cascaderData:[],selectedOptions:[],props:{label:"name",value:"code",children:"cities"},nowData:{province:null,city:null,area:null}}},methods:{getNodes:function(c){var n=this,e=void 0,t=void 0;c?1===c.length?(e=c[0],t=c.length):2===c.length&&this.isArea&&(e=c[1],t=c.length):(e=null,t=0),Object(a._10)(e).then(function(e){if(e.data){var r=e.data;0===t?n.cascaderData=r.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):1===t?n.cascaderData.map(function(e,t){e.code===c[0]&&(n.isArea?e.cities=r.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):e.cities=r.map(function(e,t){return{code:e.code,name:e.name}}))}):2===t&&n.isArea&&n.cascaderData.map(function(e,t){e.code===c[0]&&e.cities.map(function(e,t){e.code===c[1]&&(e.cities.length||(e.cities=r.map(function(e,t){return{code:e.code,name:e.name}})))})})}}).catch(function(e){return n.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})},handleItemChange:function(e){this.getNodes(e)},handleItemMore:function(e){this.ifChange&&this.getNodes(e),e[0]&&(this.nowData.province={code:e[0],key:e[0],name:this.$refs.chinaData.currentLabels[0],value:this.$refs.chinaData.currentLabels[0],parentCode:null}),e[1]&&(this.nowData.city={code:e[1],key:e[1],name:this.$refs.chinaData.currentLabels[1],value:this.$refs.chinaData.currentLabels[1],parentCode:e[0]}),e[2]&&(this.nowData.area={code:e[2],key:e[2],name:this.$refs.chinaData.currentLabels[2],value:this.$refs.chinaData.currentLabels[2],parentCode:e[1]}),this.returnArr(this.nowData)},init:function(){this.getNodes()},returnArr:function(e){this.$emit("returnStr",e)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}},zUTR:function(e,t,r){"use strict";t.j=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/add",method:"post",data:e})},t.h=function(e,t){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/agencyLine?areaCode="+e+"&cityName="+t,method:"get"})},t.l=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/update",method:"put",data:e})},t.c=function(e,t){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/streetOrLine/"+e+"?streetOrLine="+t,method:"get"})},t.b=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/update/street",method:"put",data:e})},t.a=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/update/line",method:"put",data:e})},t.g=function(e,t){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/getEntity/"+e+"?city="+t,method:"put"})},t.f=function(e){return Object(c.a)({url:"/"+n+"/usercenter/aflcLclScheduleAreaAgency/v1/batchUpdate/line",method:"put",data:e})},t.e=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclScheduleAreaAgencyNewV2/v1/list",method:"post",data:e})},t.k=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclScheduleAreaAgencyNewV2/v1/add",method:"post",data:e})},t.d=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclScheduleAreaAgencyNewV2/v1/"+e,method:"get"})},t.m=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclScheduleAreaAgencyNewV2/v1/update",method:"put",data:e})},t.i=function(e){return Object(c.a)({url:"/"+a+"/lclserver/aflcLclScheduleAreaAgencyNewV2/v1/getAgencyNew?areaCode="+e,method:"get"})};var c=r("Vo7i"),n="aflc-uc",a="aflc-lcl"}});
webpackJsonp([505],{"+op5":function(e,t,r){"use strict";t.a={name:"NumberOnlyPoint",props:{value:[String,Array,Number],length:{type:String,default:"20"},slotTxt:{type:String,default:""},placeholderTxt:{type:String,default:""},disabledType:{type:Boolean,default:!1},showType:{type:String,default:""},ifZero:{type:Boolean,default:!0}},data:function(){return{currentVal:""}},watch:{value:{handler:function(e,t){this.currentVal=e},deep:!0,immediate:!0},currentVal:function(e,t){e?this.handlerChoose(e):""==e&&this.$emit("input","")}},methods:{handlerChoose:function(e){var t=this,r="String"==typeof e?e:e+"";r=(r=(r=(r=(r=(r=r.replace(/[^\d.]/g,"")).replace(/^\./,"0.")).replace(/^0{2,}/,"0")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),this.$emit("input",r),this.$nextTick(function(e){t.currentVal=r,t.$refs.einpu.$el.children[0].value=r})},reg:function(t){var r=this;this.$nextTick(function(){var e="String"==typeof t?t:t+"";e=(e=(e=(e=(e=(e=e.replace(/[^\d.]/g,"")).replace(/^\./,"0.")).replace(/^0{2,}/,"0.")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),r.currentVal=e,r.$emit("input",e)})},showTypeFunction:function(){if(""!==this.showType){switch(this.showType){case"permill":this.currentVal=1e3<parseInt(this.currentVal)?"1000":this.currentVal;break;case"percent":this.currentVal=100<parseInt(this.currentVal)?"100":this.currentVal}return this.$emit("input",this.currentVal)}if(!this.ifZero&&parseFloat(this.currentVal)<=0)return this.currentVal="",this.$message({type:"warning",message:"所填内容必须大于0!"}),this.$emit("input",this.currentVal);this.$emit("input",parseFloat(this.currentVal)||"")}},beforeDestroy:function(){}}},"74zt":function(e,t,r){"use strict";t.E=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/list",method:"post",data:e})},t.A=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/add",method:"post",data:e})},t.G=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/update",method:"put",data:e})},t.h=function(e){return Object(a.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/list",method:"post",data:e})},t.f=function(e){return Object(a.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/"+e,method:"get"})},t.x=function(e){return Object(a.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/add",method:"post",data:e})},t.M=function(e){return Object(a.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/update",method:"put",data:e})},t.e=function(e){return Object(a.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/batchUpdate",method:"put",data:e})},t.j=function(e){return Object(a.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/banOrUse",method:"put",data:e})},t.i=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/list",method:"post",data:e})},t.y=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/add",method:"post",data:e})},t.g=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/"+e,method:"get"})},t.N=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/update",method:"put",data:e})},t.k=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/banOrUse",method:"put",data:e})},t.m=function(){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/templateExcel?platformType=1",responseType:"blob",method:"get"})},t.s=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/import",method:"post",data:e})},t.l=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/outAgencyExcel?platformType="+e.platformType+"&carriersId="+e.carriersId+"&carriersName="+e.carriersName+"&useType="+e.useType,responseType:"blob",method:"get"})},t.K=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/list",method:"post",data:e})},t.B=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/add",method:"post",data:e})},t.J=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/"+e,method:"get"})},t.H=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/update",method:"put",data:e})},t.L=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/banOrUse",method:"put",data:e})},t.r=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/import",method:"post",data:e})},t.n=function(e){var t=e||"0";return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/templateExcel?platformType="+t,responseType:"blob",method:"get"})},t.o=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/outAgencyExcel?agencyName="+e.agencyName+"&agencyId="+e.agencyId+"&platformType="+e.platformType+"&agencyArea="+e.agencyArea+"&startArea="+e.startArea+"&startProvince="+e.startProvince+"&startCity="+e.startCity+"&startAreaCode="+e.startAreaCode+"&carriersId="+e.carriersId+"&carriersName="+e.carriersName+"&pointId="+e.pointId+"&pointName="+e.pointName+"&pointArea="+e.pointArea,responseType:"blob",method:"get"})},t.D=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/list",method:"post",data:e})},t.z=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/add",method:"post",data:e})},t.F=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/update",method:"put",data:e})},t.a=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/"+e,method:"get"})},t.b=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/banOrUse",method:"put",data:e})},t.t=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/list",method:"post",data:e})},t.q=function(e,t){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/agencyLine?areaCode="+e+"&cityName="+t,method:"get"})},t.C=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/add",method:"post",data:e})},t.I=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/update",method:"put",data:e})},t.u=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/"+e,method:"get"})},t.v=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/banOrUse",method:"put",data:e})},t.p=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/outAgencyExcel?agencyId="+e,responseType:"blob",method:"get"})},t.c=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/list",method:"post",data:e})},t.w=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/add",method:"post",data:e})},t.d=function(e){return Object(a.a)({url:"/"+l+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/banOrUse",method:"put",data:e})};var a=r("Vo7i"),n="aflc-uc",l="aflc-lcl"},HGKA:function(e,t,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"otherServiceStandPriceADD commoncss"},[r("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:t.formtitle,"close-on-click-modal":!1,top:"5vh",visible:t.dialogFormVisible},on:{close:t.close}},[r("el-form",{ref:"ruleForm",attrs:{model:t.standForm,rules:t.newrules,"label-position":"right","label-width":t.formLabelWidth}},[r("h2",[t._v("代收货款服务费")]),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"费率(千分之)：",prop:"agencyRate"}},[r("NumberOnlyPoint",{attrs:{placeholderTxt:"‰"},model:{value:t.standForm.agencyRate,callback:function(e){t.$set(t.standForm,"agencyRate",e)},expression:"standForm.agencyRate"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"单票最低收费：",prop:"agencySingleLowestCost"}},[r("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"元"},model:{value:t.standForm.agencySingleLowestCost,callback:function(e){t.$set(t.standForm,"agencySingleLowestCost",e)},expression:"standForm.agencySingleLowestCost"}})],1)],1)],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"单票最高收费：",prop:"agencySingleHighestCost"}},[r("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"元"},model:{value:t.standForm.agencySingleHighestCost,callback:function(e){t.$set(t.standForm,"agencySingleHighestCost",e)},expression:"standForm.agencySingleHighestCost"}})],1)],1)],1),t._v(" "),r("h2",[t._v("货物保价服务费")]),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"费率(千分之)：",prop:"keepRate"}},[r("NumberOnlyPoint",{attrs:{placeholderTxt:"‰"},model:{value:t.standForm.keepRate,callback:function(e){t.$set(t.standForm,"keepRate",e)},expression:"standForm.keepRate"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"单票最低收费：",prop:"keepSingleLowestCost"}},[r("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"元"},model:{value:t.standForm.keepSingleLowestCost,callback:function(e){t.$set(t.standForm,"keepSingleLowestCost",e)},expression:"standForm.keepSingleLowestCost"}})],1)],1)],1),t._v(" "),r("h2",[t._v("签收单服务费")]),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"传真返回：",prop:"faxReceiptCost"}},[r("el-input",{attrs:{placeholder:"元"},model:{value:t.standForm.faxReceiptCost,callback:function(e){t.$set(t.standForm,"faxReceiptCost",t._n(e))},expression:"standForm.faxReceiptCost"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"原件返回：",prop:"orginReturn"}},[r("el-input",{attrs:{placeholder:"元"},model:{value:t.standForm.orginReturn,callback:function(e){t.$set(t.standForm,"orginReturn",t._n(e))},expression:"standForm.orginReturn"}})],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:t.btnShow},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("保 存")]),t._v(" "),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.close}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=a},ILH5:function(e,t,r){"use strict";var a=r("+op5"),n=r("Wv8t");var l=function(e){r("fssl")},c=r("VU/8")(a.a,n.a,l,null,null);t.a=c.exports},UQ0I:function(e,t){},Wv8t:function(e,t,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-input",{ref:"einpu",attrs:{placeholder:t.placeholderTxt,maxlength:t.length},on:{blur:t.showTypeFunction},model:{value:t.currentVal,callback:function(e){t.currentVal=e},expression:"currentVal"}},[t.slotTxt?r("template",{slot:"append"},[t._v(t._s(t.slotTxt))]):t._e()],2)],1)},staticRenderFns:[]};t.a=a},by2m:function(e,t,r){"use strict";var a=r("74zt"),n=r("0xDb"),l=r("ILH5");t.a={name:"otherServiceStandPriceADD",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!1,default:"维护增值服务标准定价"},isModify:{type:Boolean,default:!1},changeForm:{type:Object}},components:{NumberOnlyPoint:l.a},data:function(){return{btnShow:!1,formLabelWidth:"150px",standForm:{agencyRate:"",agencySingleLowestCost:"",agencySingleHighestCost:"",agencyBiggestCost:"",keepRate:"",keepSingleLowestCost:"",keepSingleHighestCost:"",faxReceiptCost:"",orginReturn:""},newrules:{agencyRate:{required:!0,validator:function(e,t,r){if(!t)return r(new Error("请输入代收货款服务费费率"));parseFloat(t)<=0?r(new Error("代收货款服务费费率需大于0")):r()},trigger:"blur"},agencySingleLowestCost:{required:!0,validator:function(e,t,r){if(!t)return r(new Error("请输入代收货款服务费单票最低收费"));parseFloat(t)<=0?r(new Error("代收货款服务费单票最低收费需大于0")):r()},trigger:"blur"},agencySingleHighestCost:{required:!0,validator:function(e,t,r){if(!t)return r(new Error("请输入代收货款服务费单票最高收费"));parseFloat(t)<=0?r(new Error("代收货款服务费单票最高收费需大于0")):r()},trigger:"blur"},agencyBiggestCost:{required:!0,message:"请输入代收货款最大金额",trigger:"blur"},keepRate:{required:!0,validator:function(e,t,r){if(!t)return r(new Error("请输入货物保价服务费费率"));parseFloat(t)<=0?r(new Error("货物保价服务费费率需大于0")):r()},trigger:"blur"},keepSingleLowestCost:{required:!0,validator:function(e,t,r){if(!t)return r(new Error("请输入货物保价服务费单票最低收费"));parseFloat(t)<=0?r(new Error("货物保价服务费单票最低收费最低收费需大于0")):r()},trigger:"blur"},keepSingleHighestCost:{required:!0,message:"请输入货物保价最大金额",trigger:"blur"},faxReceiptCost:[{required:!0,message:"请输入签收单服务费传真返回",trigger:"change"},{type:"number",message:"签收单服务费传真返回必须为数字值",trigger:"change"}],orginReturn:[{required:!0,message:"请输入签收单服务费原件返回",trigger:"change"},{type:"number",message:"签收单服务费原件返回必须为数字值",trigger:"change"}]}}},watch:{dialogFormVisible:{handler:function(e,t){e&&this.reviseForms()},deep:!0}},mounted:function(){},methods:{reviseForms:function(){this.isModify?this.standForm=Object(n.i)(this.changeForm):this.clearForms()},close:function(){this.dialogFormVisible&&(this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1)},init:function(){},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message({type:"warning",message:"请填写完整数据!"}),!1;r.btnShow=!0;var t=Object(n.i)(r.standForm);(r.isModify?Object(a.G)(t):Object(a.A)(t)).then(function(e){r.$message({type:"success",message:"维护增值服务标准定价成功！"}),r.close()}).catch(function(e){r.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),r.btnShow=!1})})},clearForms:function(){for(var e in this.standForm)this.standForm[e]=""}}}},erIk:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("by2m"),n=r("HGKA");var l=function(e){r("UQ0I")},c=r("VU/8")(a.a,n.a,l,null,null);t.default=c.exports},fssl:function(e,t){}});
webpackJsonp([280,505],{"+op5":function(e,t,a){"use strict";t.a={name:"NumberOnlyPoint",props:{value:[String,Array,Number],length:{type:String,default:"20"},slotTxt:{type:String,default:""},placeholderTxt:{type:String,default:""},disabledType:{type:Boolean,default:!1},showType:{type:String,default:""},ifZero:{type:Boolean,default:!0}},data:function(){return{currentVal:""}},watch:{value:{handler:function(e,t){this.currentVal=e},deep:!0,immediate:!0},currentVal:function(e,t){e?this.handlerChoose(e):""==e&&this.$emit("input","")}},methods:{handlerChoose:function(e){var t=this,a="String"==typeof e?e:e+"";a=(a=(a=(a=(a=(a=a.replace(/[^\d.]/g,"")).replace(/^\./,"0.")).replace(/^0{2,}/,"0")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),this.$emit("input",a),this.$nextTick(function(e){t.currentVal=a,t.$refs.einpu.$el.children[0].value=a})},reg:function(t){var a=this;this.$nextTick(function(){var e="String"==typeof t?t:t+"";e=(e=(e=(e=(e=(e=e.replace(/[^\d.]/g,"")).replace(/^\./,"0.")).replace(/^0{2,}/,"0.")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),a.currentVal=e,a.$emit("input",e)})},showTypeFunction:function(){if(""!==this.showType){switch(this.showType){case"permill":this.currentVal=1e3<parseInt(this.currentVal)?"1000":this.currentVal;break;case"percent":this.currentVal=100<parseInt(this.currentVal)?"100":this.currentVal}return this.$emit("input",this.currentVal)}if(!this.ifZero&&parseFloat(this.currentVal)<=0)return this.currentVal="",this.$message({type:"warning",message:"所填内容必须大于0!"}),this.$emit("input",this.currentVal);this.$emit("input",parseFloat(this.currentVal)||"")}},beforeDestroy:function(){}}},"1eEp":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("fD0C"),n=a("wpUO");var l=function(e){a("iqbG")},i=a("VU/8")(r.a,n.a,l,"data-v-6d86e14d",null);t.default=i.exports},"1onU":function(e,t,a){"use strict";var r=a("VT+v"),n=a("juIs");var l=function(e){a("ZdV2"),a("co/t")},i=a("VU/8")(r.a,n.a,l,"data-v-695be8cd",null);t.a=i.exports},"74zt":function(e,t,a){"use strict";t.E=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/list",method:"post",data:e})},t.A=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/add",method:"post",data:e})},t.G=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclPlatformStandardPriceNewV2/v1/update",method:"put",data:e})},t.h=function(e){return Object(r.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/list",method:"post",data:e})},t.f=function(e){return Object(r.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/"+e,method:"get"})},t.x=function(e){return Object(r.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/add",method:"post",data:e})},t.M=function(e){return Object(r.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/update",method:"put",data:e})},t.e=function(e){return Object(r.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/batchUpdate",method:"put",data:e})},t.j=function(e){return Object(r.a)({url:"/"+n+"/usercenter/aflcLclValueDeliveTakePrice/v1/banOrUse",method:"put",data:e})},t.i=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/list",method:"post",data:e})},t.y=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/add",method:"post",data:e})},t.g=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/"+e,method:"get"})},t.N=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/update",method:"put",data:e})},t.k=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/banOrUse",method:"put",data:e})},t.m=function(){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/templateExcel?platformType=1",responseType:"blob",method:"get"})},t.s=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/import",method:"post",data:e})},t.l=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueDeliveTakePrice/v1/outAgencyExcel?platformType="+e.platformType+"&carriersId="+e.carriersId+"&carriersName="+e.carriersName+"&useType="+e.useType,responseType:"blob",method:"get"})},t.K=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/list",method:"post",data:e})},t.B=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/add",method:"post",data:e})},t.J=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/"+e,method:"get"})},t.H=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/update",method:"put",data:e})},t.L=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/banOrUse",method:"put",data:e})},t.r=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/import",method:"post",data:e})},t.n=function(e){var t=e||"0";return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/templateExcel?platformType="+t,responseType:"blob",method:"get"})},t.o=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/outAgencyExcel?agencyName="+e.agencyName+"&agencyId="+e.agencyId+"&platformType="+e.platformType+"&agencyArea="+e.agencyArea+"&startArea="+e.startArea+"&startProvince="+e.startProvince+"&startCity="+e.startCity+"&startAreaCode="+e.startAreaCode+"&carriersId="+e.carriersId+"&carriersName="+e.carriersName+"&pointId="+e.pointId+"&pointName="+e.pointName+"&pointArea="+e.pointArea,responseType:"blob",method:"get"})},t.D=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/list",method:"post",data:e})},t.z=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/add",method:"post",data:e})},t.F=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/update",method:"put",data:e})},t.a=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/"+e,method:"get"})},t.b=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAreaPriceNewV2/v1/banOrUse",method:"put",data:e})},t.t=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/list",method:"post",data:e})},t.q=function(e,t){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAgencyLinePriceNewV2/v1/agencyLine?areaCode="+e+"&cityName="+t,method:"get"})},t.C=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/add",method:"post",data:e})},t.I=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/update",method:"put",data:e})},t.u=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/"+e,method:"get"})},t.v=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/banOrUse",method:"put",data:e})},t.p=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclAreaAgencyAndLinePriceNewV2/v1/outAgencyExcel?agencyId="+e,responseType:"blob",method:"get"})},t.c=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/list",method:"post",data:e})},t.w=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/add",method:"post",data:e})},t.d=function(e){return Object(r.a)({url:"/"+l+"/lclserver/aflcLclValueAgencyAndPlatformPriceNewV2/v1/banOrUse",method:"put",data:e})};var r=a("Vo7i"),n="aflc-uc",l="aflc-lcl"},HGKA:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"otherServiceStandPriceADD commoncss"},[a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:t.formtitle,"close-on-click-modal":!1,top:"5vh",visible:t.dialogFormVisible},on:{close:t.close}},[a("el-form",{ref:"ruleForm",attrs:{model:t.standForm,rules:t.newrules,"label-position":"right","label-width":t.formLabelWidth}},[a("h2",[t._v("代收货款服务费")]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"费率(千分之)：",prop:"agencyRate"}},[a("NumberOnlyPoint",{attrs:{placeholderTxt:"‰"},model:{value:t.standForm.agencyRate,callback:function(e){t.$set(t.standForm,"agencyRate",e)},expression:"standForm.agencyRate"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"单票最低收费：",prop:"agencySingleLowestCost"}},[a("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"元"},model:{value:t.standForm.agencySingleLowestCost,callback:function(e){t.$set(t.standForm,"agencySingleLowestCost",e)},expression:"standForm.agencySingleLowestCost"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"单票最高收费：",prop:"agencySingleHighestCost"}},[a("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"元"},model:{value:t.standForm.agencySingleHighestCost,callback:function(e){t.$set(t.standForm,"agencySingleHighestCost",e)},expression:"standForm.agencySingleHighestCost"}})],1)],1)],1),t._v(" "),a("h2",[t._v("货物保价服务费")]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"费率(千分之)：",prop:"keepRate"}},[a("NumberOnlyPoint",{attrs:{placeholderTxt:"‰"},model:{value:t.standForm.keepRate,callback:function(e){t.$set(t.standForm,"keepRate",e)},expression:"standForm.keepRate"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"单票最低收费：",prop:"keepSingleLowestCost"}},[a("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"元"},model:{value:t.standForm.keepSingleLowestCost,callback:function(e){t.$set(t.standForm,"keepSingleLowestCost",e)},expression:"standForm.keepSingleLowestCost"}})],1)],1)],1),t._v(" "),a("h2",[t._v("签收单服务费")]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"传真返回：",prop:"faxReceiptCost"}},[a("el-input",{attrs:{placeholder:"元"},model:{value:t.standForm.faxReceiptCost,callback:function(e){t.$set(t.standForm,"faxReceiptCost",t._n(e))},expression:"standForm.faxReceiptCost"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"原件返回：",prop:"orginReturn"}},[a("el-input",{attrs:{placeholder:"元"},model:{value:t.standForm.orginReturn,callback:function(e){t.$set(t.standForm,"orginReturn",t._n(e))},expression:"standForm.orginReturn"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:t.btnShow},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("保 存")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.close}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=r},ILH5:function(e,t,a){"use strict";var r=a("+op5"),n=a("Wv8t");var l=function(e){a("fssl")},i=a("VU/8")(r.a,n.a,l,null,null);t.a=i.exports},UQ0I:function(e,t){},"VT+v":function(e,t,a){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,a=e.target;console.log("page keydown:",t,a),13===t&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},Wv8t:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-input",{ref:"einpu",attrs:{placeholder:t.placeholderTxt,maxlength:t.length},on:{blur:t.showTypeFunction},model:{value:t.currentVal,callback:function(e){t.currentVal=e},expression:"currentVal"}},[t.slotTxt?a("template",{slot:"append"},[t._v(t._s(t.slotTxt))]):t._e()],2)],1)},staticRenderFns:[]};t.a=r},ZdV2:function(e,t){},by2m:function(e,t,a){"use strict";var r=a("74zt"),n=a("0xDb"),l=a("ILH5");t.a={name:"otherServiceStandPriceADD",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!1,default:"维护增值服务标准定价"},isModify:{type:Boolean,default:!1},changeForm:{type:Object}},components:{NumberOnlyPoint:l.a},data:function(){return{btnShow:!1,formLabelWidth:"150px",standForm:{agencyRate:"",agencySingleLowestCost:"",agencySingleHighestCost:"",agencyBiggestCost:"",keepRate:"",keepSingleLowestCost:"",keepSingleHighestCost:"",faxReceiptCost:"",orginReturn:""},newrules:{agencyRate:{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入代收货款服务费费率"));parseFloat(t)<=0?a(new Error("代收货款服务费费率需大于0")):a()},trigger:"blur"},agencySingleLowestCost:{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入代收货款服务费单票最低收费"));parseFloat(t)<=0?a(new Error("代收货款服务费单票最低收费需大于0")):a()},trigger:"blur"},agencySingleHighestCost:{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入代收货款服务费单票最高收费"));parseFloat(t)<=0?a(new Error("代收货款服务费单票最高收费需大于0")):a()},trigger:"blur"},agencyBiggestCost:{required:!0,message:"请输入代收货款最大金额",trigger:"blur"},keepRate:{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入货物保价服务费费率"));parseFloat(t)<=0?a(new Error("货物保价服务费费率需大于0")):a()},trigger:"blur"},keepSingleLowestCost:{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入货物保价服务费单票最低收费"));parseFloat(t)<=0?a(new Error("货物保价服务费单票最低收费最低收费需大于0")):a()},trigger:"blur"},keepSingleHighestCost:{required:!0,message:"请输入货物保价最大金额",trigger:"blur"},faxReceiptCost:[{required:!0,message:"请输入签收单服务费传真返回",trigger:"change"},{type:"number",message:"签收单服务费传真返回必须为数字值",trigger:"change"}],orginReturn:[{required:!0,message:"请输入签收单服务费原件返回",trigger:"change"},{type:"number",message:"签收单服务费原件返回必须为数字值",trigger:"change"}]}}},watch:{dialogFormVisible:{handler:function(e,t){e&&this.reviseForms()},deep:!0}},mounted:function(){},methods:{reviseForms:function(){this.isModify?this.standForm=Object(n.i)(this.changeForm):this.clearForms()},close:function(){this.dialogFormVisible&&(this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1)},init:function(){},submitForm:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return a.$message({type:"warning",message:"请填写完整数据!"}),!1;a.btnShow=!0;var t=Object(n.i)(a.standForm);(a.isModify?Object(r.G)(t):Object(r.A)(t)).then(function(e){a.$message({type:"success",message:"维护增值服务标准定价成功！"}),a.close()}).catch(function(e){a.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),a.btnShow=!1})})},clearForms:function(){for(var e in this.standForm)this.standForm[e]=""}}}},"co/t":function(e,t){},erIk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("by2m"),n=a("HGKA");var l=function(e){a("UQ0I")},i=a("VU/8")(r.a,n.a,l,null,null);t.default=i.exports},fD0C:function(e,t,a){"use strict";var r=a("74zt"),n=a("1onU"),l=a("erIk");t.a={name:"otherServiceStandPrice",props:{isvisible:{type:Boolean,default:!1}},components:{Pager:n.a,add:l.default},data:function(){return{btnsize:"mini",loading:!1,listSystemObj:{currentPage:1,pageSize:20,vo:{}},dataTotal:0,dialogFormVisible:!1,tableData:[],isModify:!1,changeForm:{}}},watch:{isvisible:{handler:function(e,t){e&&this.firstblood()},immediate:!0}},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handlePageChange:function(e){this.listSystemObj.currentPage=e.pageNum,this.listSystemObj.pageSize=e.pageSize,this.firstblood()},firstblood:function(){var t=this;this.loading=!0,Object(r.E)(this.listSystemObj).then(function(e){t.tableData=e.data.list,t.dataTotal=e.data.totalCount,t.loading=!1}).catch(function(e){t.loading=!1})},handleClick:function(e,t){this.dialogFormVisible=!0,this.changeForm=t,this.isModify=!1}}}},fssl:function(e,t){},iqbG:function(e,t){},juIs:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=r},wpUO:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"identicalStyle otherServiceStandPrice"},[a("div",{staticClass:"classify_info"},[a("div",{staticClass:"btns_box"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit-outline",plain:"",size:t.btnsize},on:{click:function(e){t.handleClick("maintain")}}},[t._v("维护标准定价")])],1),t._v(" "),a("div",{staticClass:"info_news"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s((t.listSystemObj.currentPage-1)*t.listSystemObj.pageSize+e.$index+1)+"\n                    ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"代收货款服务费"}},[a("el-table-column",{attrs:{prop:"agencyRate",label:"费率(‰)",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"agencySingleLowestCost","show-overflow-tooltip":!0,label:"单票最低收费",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"agencySingleHighestCost","show-overflow-tooltip":!0,width:"150",label:"单票最高收费"}})],1),t._v(" "),a("el-table-column",{attrs:{label:"货物保价服务费"}},[a("el-table-column",{attrs:{prop:"keepRate",label:"费率(‰)",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"keepSingleLowestCost","show-overflow-tooltip":!0,width:"150",label:"单票最低收费"}})],1),t._v(" "),a("el-table-column",{attrs:{label:"签收单服务费"}},[a("el-table-column",{attrs:{prop:"orginReturn",label:"传真返回",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"faxReceiptCost","show-overflow-tooltip":!0,width:"150",label:"原件返回"}})],1),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"creater",label:"生效操作人",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"createTime",label:"生效时间",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(t._f("parseTime")(e.row.createTime))+"\n                    ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"inefficienter",label:"失效操作人",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"inefficientTime",label:"失效时间",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(t._f("parseTime")(e.row.inefficientTime))+"\n                    ")]}}])})],1)],1)]),t._v(" "),a("div",{staticClass:"info_tab_footer"},[t._v("共计:"+t._s(t.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:t.dataTotal},on:{change:t.handlePageChange}})],1)]),t._v(" "),a("add",{attrs:{dialogFormVisible:t.dialogFormVisible,changeForm:t.changeForm,isModify:t.isModify},on:{"update:dialogFormVisible":function(e){t.dialogFormVisible=e},renovate:t.firstblood}})],1)},staticRenderFns:[]};t.a=r}});
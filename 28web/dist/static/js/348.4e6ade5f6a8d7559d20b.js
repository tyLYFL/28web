webpackJsonp([348],{"3jZn":function(t,e,n){"use strict";e.r=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclInformationOperater/v1/list",method:"post",data:t})},e.n=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclInformationOperater/v1/add",method:"post",data:t})},e.q=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclInformationOperater/v1/"+t,method:"get"})},e.y=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclInformationOperater/v1/update",method:"put",data:t})},e.i=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclInformationOperater/v1/delete/"+t,method:"DELETE"})},e.v=function(t,e){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclInformationOperater/v1/banOrUse/"+t+"?banOrUse="+e,method:"post"})},e.d=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractProduct/v1/list",method:"post",data:t})},e.l=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractProduct/v1/add",method:"post",data:t})},e.w=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractProduct/v1/update",method:"put",data:t})},e.c=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractProduct/v1/"+t,method:"get"})},e.g=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractProduct/v1/delete/"+t,method:"DELETE"})},e.a=function(){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractProduct/v1/idAndName",method:"post"})},e.m=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractMerchant/v1/add",method:"post",data:t})},e.f=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractMerchant/v1/list",method:"post",data:t})},e.e=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractMerchant/v1/"+t,method:"get"})},e.x=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractMerchant/v1/update",method:"put",data:t})},e.h=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclContractMerchant/v1/delete/"+t,method:"DELETE"})},e.t=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclCargoInformationPush/v1/list",method:"post",data:t})},e.o=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclCargoInformationPush/v1/add",method:"post",data:t})},e.z=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclCargoInformationPush/v1/update",method:"put",data:t})},e.s=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclCargoInformationPush/v1/"+t,method:"get"})},e.j=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclCargoInformationPush/v1/delete/"+t,method:"DELETE"})},e.b=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclMerchantInfoPush/v1/list",method:"post",data:t})},e.p=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclMerchantInfoPush/v1/add",method:"post",data:t})},e.A=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclMerchantInfoPush/v1/update",method:"put",data:t})},e.u=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclMerchantInfoPush/v1/"+t,method:"get"})},e.k=function(t){return Object(r.a)({url:"/"+o+"/usercenter/aflcLclMerchantInfoPush/v1/delete/"+t,method:"DELETE"})};var r=n("Vo7i"),o="aflc-uc"},"9xBt":function(t,e){},D4TC:function(t,e,n){"use strict";var r=n("YNHS"),o=n("kyaA");var a=function(t){n("i0em")},c=n("VU/8")(r.a,o.a,a,null,null);e.a=c.exports},HukK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Tx8q"),o=n("OZjj");var a=function(t){n("RMBq")},c=n("VU/8")(r.a,o.a,a,null,null);e.default=c.exports},L7Ck:function(t,e,n){"use strict";var r={render:function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("el-autocomplete",{staticClass:"inline-input companyList",attrs:{"fetch-suggestions":n.querySearch,placeholder:"",disabled:n.disabled,clearable:""},on:{select:n.handleSelect,blur:n.chekcblank,clear:function(){return n.clearCompany()}},scopedSlots:n._u([{key:"default",fn:function(t){var e=t.item;return[r("span",{staticStyle:{float:"left",overflow:"hidden",width:"70%","text-overflow":"ellipsis","white-space":"nowrap"}},[n._v(n._s(e.companyName))]),n._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px",overflow:"hidden",width:"30%","text-overflow":"ellipsis","white-space":"nowrap"}},[n._v(n._s(e.mobile))])]}}]),model:{value:n.company,callback:function(t){n.company=t},expression:"company"}})},staticRenderFns:[]};e.a=r},"NR+F":function(t,e,n){"use strict";var o=n("t5DY");e.a={name:"companyList",props:{disabled:{type:Boolean},companyName:{type:String},value:[String,Array],clearableStatus:{type:Boolean,default:!0},timeoutSearch:null},data:function(){return{restaurants:[],company:""}},watch:{companyName:function(t,e){this.company=t||""}},methods:{clearCompany:function(){this.$emit("returnCompany",{companyName:"",id:"",mobile:"",contactsName:"",province:"",city:"",area:"",areaCode:"",address:""})},chekcblank:function(){0==this.restaurants.length&&(this.company="",this.$emit("returnCompany",{companyName:"",id:"",mobile:"",contactsName:"",province:"",city:"",area:"",areaCode:"",address:""}))},querySearch:function(t,e){var n=this,r=[];this.company=t,Object(o._1)(this.company).then(function(t){r=t.data,n.restaurants=t.data,e(r)}).catch(function(t){n.$message({type:"warning",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)})})},handleSelect:function(t){this.company=t.companyName,this.$emit("returnCompany",t)},clear:function(){this.company=""}},mounted:function(){this.company=this.companyName?this.companyName:""},beforeDestroy:function(){}}},OZjj:function(t,e,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ContractorAdd commoncss"},[n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:e.formtitle,"close-on-click-modal":!1,top:"5vh",visible:e.dialogFormVisible},on:{close:e.close}},[n("el-form",{ref:"ruleForm",attrs:{model:e.standForm,rules:e.newrules,"label-position":"right","label-width":e.formLabelWidth}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"承包商：",prop:"companyName"}},[e.isView?n("el-input",{attrs:{disabled:""},model:{value:e.standForm.companyName,callback:function(t){e.$set(e.standForm,"companyName",t)},expression:"standForm.companyName"}}):n("CompanySearch",{ref:"CompanySearch",attrs:{companyName:e.standForm.companyName,clearableStatus:!0},on:{returnCompany:e.getCompany},model:{value:e.standForm.companyName,callback:function(t){e.$set(e.standForm,"companyName",t)},expression:"standForm.companyName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"承包产品：",prop:"productId"}},[e.isView?n("el-input",{attrs:{disabled:""},model:{value:e.standForm.productName,callback:function(t){e.$set(e.standForm,"productName",t)},expression:"standForm.productName"}}):n("el-select",{model:{value:e.standForm.productId,callback:function(t){e.$set(e.standForm,"productId",t)},expression:"standForm.productId"}},e._l(e.optionsProduct,function(t){return n("el-option",{key:t.id,attrs:{label:t.productName,value:t.id}})}))],1)],1)],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"开通渠道：",prop:"channel"}},[n("el-input",{attrs:{disabled:""},model:{value:e.standForm.channel,callback:function(t){e.$set(e.standForm,"channel",t)},expression:"standForm.channel"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"业务办理人：",prop:"userName"}},[e.isView?n("el-input",{attrs:{disabled:e.isView},model:{value:e.standForm.userName,callback:function(t){e.$set(e.standForm,"userName",t)},expression:"standForm.userName"}}):n("CustomerSearch",{attrs:{customerName:e.standForm.userName},on:{returnCustomer:e.getCustomer}})],1)],1)],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"支付方式：",prop:"payWay"}},[n("el-input",{attrs:{disabled:""},model:{value:e.standForm.payWay,callback:function(t){e.$set(e.standForm,"payWay",t)},expression:"standForm.payWay"}})],1)],1)],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[n("el-input",{attrs:{placeholder:"少于100字符",type:"textarea","show-word-limit":"",autosize:{minRows:2,maxRows:4},clearable:"",disabled:e.isView,maxlength:"100"},model:{value:e.standForm.remark,callback:function(t){e.$set(e.standForm,"remark",t)},expression:"standForm.remark"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.isView?e._e():n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:e.btnShow},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v(e._s(e.isModify?"保 存":"确 定"))]),e._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:e.close}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]};e.a=r},RMBq:function(t,e){},THXX:function(t,e,n){"use strict";e.c=function(t,e,n){return Object(r.a)({url:"/"+o+"/dispatch/aflcShipperPlatform/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:n}})},e.a=function(t){return Object(r.a)({url:"/"+o+"/dispatch/aflcShipperPlatform/v1/enableOrDisable",method:"post",headers:{"Content-Type":"application/json"},data:t})},e.b=function(t){return Object(r.a)({url:"/"+o+"/dispatch/aflcShipperPlatform/v1/add",method:"post",data:t})},e.d=function(t){return Object(r.a)({url:"/"+o+"/dispatch/aflcShipperPlatform/v1/findAflcShipperList",method:"post",data:t})},e.e=function(t){return Object(r.a)({url:"/"+o+"/dispatch/aflcShipperPlatform/v1/findAflcSystemUserList",method:"post",data:t})};var r=n("Vo7i"),o="aflc-order"},Tx8q:function(t,e,n){"use strict";var r=n("3jZn"),o=n("0xDb"),a=(n("t5DY"),n("slLy")),c=n("D4TC");e.a={name:"ContractorAdd",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!1,default:"新增承包产品"},isModify:{type:Boolean,default:!1},changeForm:{type:Object},isView:{type:Boolean,default:!1}},components:{CustomerSearch:c.a,CompanySearch:a.a},data:function(){return{btnShow:!1,formLabelWidth:"100px",optionsProduct:[],standForm:{companyName:"",companyId:"",productName:"",productId:"",serviceInfo:"",channel:"线下办理",channelCode:"",userName:"",userId:"",payWay:"线下转账",payWayCode:"",remark:""},newrules:{productName:{required:!0,message:"请输入产品名称",trigger:"change"},typeCode:{required:!0,message:"请选择产品类型",trigger:"change"},serviceInfo:{required:!0,message:"请输入服务信息",trigger:"change"},conrtactPrice:{required:!0,message:"请输入承包价格",trigger:"change"}}}},watch:{dialogFormVisible:{handler:function(t,e){t&&this.reviseForms()},deep:!0}},mounted:function(){this.init()},methods:{getCustomer:function(t){this.standForm.userId=t.userId,this.standForm.userName=t.name},getCompany:function(t){this.standForm.companyId=t.id,this.standForm.companyName=t.companyName},close:function(){this.dialogFormVisible&&(this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1,this.isView||this.$refs.CompanySearch.clear())},init:function(){var e=this;Object(r.a)().then(function(t){e.optionsProduct=t.data}).catch(function(t){e.$message({type:"info",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)})})},reviseForms:function(){var e=this;this.isModify||this.isView?Object(r.e)(this.changeForm.id).then(function(t){e.standForm=t.data}):this.clearForms()},submitForm:function(t){var n=this;this.$refs[t].validate(function(t){if(!t)return n.$message({type:"warning",message:"请填写完整数据!"}),!1;n.btnShow=!0,n.completeName();var e=Object(o.i)(n.standForm);(n.isModify?Object(r.x)(e):Object(r.m)(e)).then(function(t){n.$message({type:"success",message:n.isModify?"修改承包产品成功":"新增承包产品成功!"}),n.close()}).catch(function(t){n.$message({type:"info",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)}),n.btnShow=!1})})},clearForms:function(){for(var t in this.standForm)this.standForm[t]="channel"==t?"线下办理":"payWay"==t?"线下转账":""},completeName:function(){var e=this;this.standForm.productName=this.optionsProduct.find(function(t){return t.id==e.standForm.productId}).productName,this.standForm.serviceInfo=this.optionsProduct.find(function(t){return t.id==e.standForm.productId}).serviceInfo},doName:function(t,n){var r=[];return t.forEach(function(e){n.forEach(function(t){e.code==t&&r.push(e.name)})}),r}}}},YNHS:function(t,e,n){"use strict";var r=n("THXX"),o=n("t5DY");e.a={name:"CustomerSearch",props:{disabled:{type:Boolean},customerName:{type:String},apiType:{type:String},value:[String,Array],timeoutSearch:null},data:function(){return{restaurants:[],customer:null,filterOptionsSystemUsers:{search:""}}},watch:{customerName:function(t,e){this.customer=t||""}},methods:{init:function(){var e=this;("business"==this.apiType?Object(o._3)(this.filterOptionsSystemUsers):Object(r.e)(this.filterOptionsSystemUsers)).then(function(t){e.restaurants=t.data}).catch(function(t){e.$message({type:"warning",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)})})},handleSelect:function(e){console.log("this.customer",this.customer);var t=this.restaurants.filter(function(t){return t.name==e});this.$emit("returnCustomer",t[0])}},mounted:function(){this.customer=this.customerName?this.customerName:"",this.init()},beforeDestroy:function(){}}},i0em:function(t,e){},kyaA:function(t,e,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.handleSelect},model:{value:e.customer,callback:function(t){e.customer=t},expression:"customer"}},e._l(e.restaurants,function(t){return n("el-option",{key:t.userId,attrs:{label:t.name,value:t.name}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.mobilephone))])])}))},staticRenderFns:[]};e.a=r},slLy:function(t,e,n){"use strict";var r=n("NR+F"),o=n("L7Ck");var a=function(t){n("9xBt")},c=n("VU/8")(r.a,o.a,a,null,null);e.a=c.exports},t5DY:function(t,e,n){"use strict";e._10=function(e){return e=e||"",a.a.get("/"+c+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return a.a.get("/"+c+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(a.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(a.a)({url:"/"+c+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(a.a)({url:"/"+c+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(a.a)({url:"/"+s+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(a.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(a.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(a.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(a.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return a.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new o.a(function(t){t(window.UPLOADPOLICYDATA)}):a.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return a.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return a.a.get("/"+s+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(a.a)({url:"/"+s+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return a.a.get("/"+s+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return a.a.get("/"+s+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(a.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return a.a.get("/"+c+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return a.a.get("/"+c+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return a.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return a.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(a.a)({url:"/"+i+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(a.a)({url:"/"+c+"/system/user/v1/operate/staff",method:"post",data:t})};var r=n("//Fk"),o=n.n(r),a=n("Vo7i"),c="aflc-common",s="aflc-sm",i="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
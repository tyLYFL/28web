webpackJsonp([367],{"17yh":function(t,e){},"7TVD":function(t,e){},BFOC:function(t,e,r){"use strict";var o=r("G46U"),i=r("adj5");var n=function(t){r("7TVD"),r("17yh")},a=r("VU/8")(o.a,i.a,n,null,null);e.a=a.exports},G46U:function(t,e,r){"use strict";var o=r("mvHQ"),i=r.n(o),n=r("//Fk"),a=r.n(n),c=r("t5DY"),l=r("0xDb");e.a={name:"singleImageUpload",props:{value:[String,Array],title:{type:String,default:""},tip:{type:String,default:"（必须为jpg/png并且小于5M）"},size:{type:String,default:"mini"},showFileList:{type:Boolean,default:!1},limit:{type:Number,default:10},listtype:{type:String,default:"picture",enum:["text","picture","picture-card","application"]},disabled:{type:Boolean,default:!1},hidBut:{type:Boolean,default:!1},showBut:{type:Boolean}},computed:{imageUrl:function(){return this.value}},data:function(){return{dialogTxt:null,dialogImageUrl:"",dialogVisible:!1,tempUrl:"",dataObj:{token:"",key:""},upload:{key:"",policy:"",OSSAccessKeyId:"",success_action_status:"201",signature:""},uploadUrl:"",dir:"",filelist:[]}},watch:{value:{handler:function(t){if(this.showFileList){var e=Array.isArray(t)?t:t?t.split(","):[];e=e.filter(function(t){return t}),this.filelist=e.map(function(t){var e={},r="";return r=(r=t.split("/"))[r.length-1],e.url=t,e.name=r,e})}this.$emit("filelist",this.filelist)},immediate:!0},hidBut:function(){},disabled:function(){}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(c._15)("aflc").then(function(t){e.upload.OSSAccessKeyId=t.accessid,e.upload.policy=t.policy,e.upload.signature=t.signature,e.uploadUrl=t.host,e.dir=t.dir}).catch(function(t){console.log("get Policy ERror:",t)})},rmImage:function(){this.emitInput("")},onexceed:function(t,e){this.$message.error("最多上传 "+this.limit+" 张!")},handleRemove:function(t,e){this.filelist=e,this.emitInput()},random_string:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",r=e.length,o="",i=0;i<t;i++)o+=e.charAt(Math.floor(Math.random()*r));return o},emitInput:function(t){t&&this.filelist.push({url:t.url,name:t.name}),this.$emit("input",this.showFileList?this.filelist.map(function(t){return t.url}).join(","):t)},handleImageScucess:function(t){var e="",r="";-1!==t.indexOf("Location")&&(r=(r=(e=(e=t.match(/<Location>([^<]+)<\/Location>/m))?e[1]:"").split("/"))[r.length-1]),this.emitInput({url:e,name:r})},handleError:function(t){this.$emit("error",t)},beforeUpload:function(r){var o=this;this.fileInfo={},this.fileInfo=r,this.$emit("fileInfo",this.fileInfo);/(image|text|application)\/\w+/.test(r.type)&&/(jpe?g|png|plain|msword|vnd.ms-excel)/i.test(r.type),r.size;var t=r.name.match(/([^\.]+)$/);return t=t?"."+t[1]:"",new a.a(function(e,t){o.init().then(function(t){o.upload.key=o.dir+Object(l.k)(new Date,"{y}{m}{d}")+"/"+o.random_string()+"/"+r.name,e(!0)}).catch(function(t){o.$message.error("未知错误："+i()(t)),e(!1)})})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url;var e="";"txt"===(e=(e=(e=t.url.split("/"))[e.length-1].split("."))[e.length-1])||"doc"===e||"xls"===e||"zip"===e||"rar"===e?(this.dialogTxt=!0,window.open(t.url),console.log(t)):this.dialogVisible=!0}}}},OiKJ:function(t,e){},S56e:function(t,e,r){"use strict";e.i=function(t,e,r){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/listAppShipperComplain",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.f=function(t,e,r){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/listAppShipperComplainExcel",responseType:"blob",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.k=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/listComplainant",method:"post",data:t})},e.l=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/listRespondent",method:"post",data:t})},e.j=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/reportComplain",method:"post",data:t})},e.c=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/update",method:"put",data:t})},e.b=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/"+t,method:"get"})},e.d=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/listAppShipperComplainByOrderSerial/"+t,method:"get"})},e.h=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsfollowup/v1/addComplain",method:"post",data:t})},e.e=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/updateDealStatus/"+t,method:"get"})},e.g=function(t){return Object(o.a)({url:"/"+i+"/order/aflcRiskControlManageSetting/v1/listComplainSetting/"+t,method:"get"})},e.m=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsfollowup/v1/recordFollowup",method:"post",data:t})},e.a=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderComplain/v1/orderDetal/"+t,method:"get"})};var o=r("Vo7i"),i="aflc-order"},adj5:function(t,e,r){"use strict";var o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box_container multimg",class:{hideuploadbtn:e.filelist.length>=e.limit||e.disabled}},[e.uploadUrl?r("el-upload",{attrs:{drag:"",data:e.upload,action:e.uploadUrl,multiple:!1,"show-file-list":e.showFileList,"file-list":e.filelist,"list-type":"picture",limit:e.limit,disabled:e.disabled,"before-upload":e.beforeUpload,"on-preview":e.handlePictureCardPreview,"on-error":e.handleError,"on-exceed":e.onexceed,"on-success":e.handleImageScucess,"on-remove":e.handleRemove}},[e._t("content",[r("el-button",{staticClass:"button",attrs:{size:e.size,type:"primary",disabled:e.disabled}},[e._v("点击上传")]),e._v(" "),e.tip?r("div",{staticClass:"upload__tip"},[e._v(e._s(e.tip))]):e._e()])],2):e._e(),e._v(" "),r("el-dialog",{attrs:{"custom-class":"singleimage2",visible:e.dialogVisible,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};e.a=o},eG7h:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("tjwf"),i=r("hmU6");var n=function(t){r("OiKJ")},a=r("VU/8")(o.a,i.a,n,null,null);e.default=a.exports},hmU6:function(t,e,r){"use strict";var o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wzlAddgenjing"},[r("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:e.popTitle,visible:e.isShow,width:"40%",top:"18vh",center:"","close-on-click-modal":!1,"before-close":e.closeMe},on:{"update:visible":function(t){e.isShow=t},close:e.closeMe}},[r("el-form",{ref:"ruleForm",attrs:{model:e.formAllData,rules:e.rules,inline:!1,"label-width":"120px","label-position":"right"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"跟进人：",prop:"followName"}},[r("el-input",{attrs:{maxlength:20,placeholder:"请输入跟进人","auto-complete":"off",clearable:""},model:{value:e.formAllData.followName,callback:function(t){e.$set(e.formAllData,"followName",t)},expression:"formAllData.followName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"code","label-width":"50px"}},[r("el-checkbox",{model:{value:e.formAllData.code,callback:function(t){e.$set(e.formAllData,"code",t)},expression:"formAllData.code"}},[e._v("是否处理完毕")])],1)],1)],1),e._v(" "),e.formAllData.code?r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"code",label:"扣除行为分："}},[r("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择"},model:{value:e.formAllData.riskControlCode,callback:function(t){e.$set(e.formAllData,"riskControlCode",t)},expression:"formAllData.riskControlCode"}},e._l(e.optionsRisk,function(t){return r("el-option",{key:t.id,attrs:{label:t.ruleDescSetting,value:t.code}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.ruleDescSetting))]),e._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.subBehaviorScore?t.subBehaviorScore+"分":""))])])}))],1)],1)],1):e._e(),e._v(" "),r("el-form-item",{staticClass:"goodsclaimDes",attrs:{label:e.isClaim?"物损跟进：":"投诉跟进：",prop:"goodsclaimDes"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",maxlength:200,placeholder:"投诉跟进最多输入200个字符"},model:{value:e.formAllData.goodsclaimDes,callback:function(t){e.$set(e.formAllData,"goodsclaimDes",t)},expression:"formAllData.goodsclaimDes"}})],1),e._v(" "),r("el-form-item",{staticClass:"clearfix imgbox",attrs:{label:"上传附件：",prop:"fileAddress"}},[r("div",{staticClass:"clearfix uploadcard"},[r("upload",{attrs:{title:"本地上传",showFileList:!0,limit:4,listtype:"picture"},on:{filelist:e.getFileList,fileInfo:e.getFileInfo},model:{value:e.formAllData.fileAddress,callback:function(t){e.$set(e.formAllData,"fileAddress",t)},expression:"formAllData.fileAddress"}})],1)])],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")]),e._v(" "),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:e.closeMe}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]};e.a=o},mj9Z:function(t,e,r){"use strict";e.e=function(t,e,r){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsclaim/v1/listRecently",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.d=function(t,e,r){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/listClain",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.a=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsclaim/v1/GoodsclaimAll/"+t,method:"get"})},e.b=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsfollowup/v1/GoodsfollowupAll/"+t,method:"get"})},e.c=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsclaim/v1/updateDealStatus/"+t,method:"get"})},e.f=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsclaim/v1/reportClaim",method:"post",data:t})},e.g=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderGoodsfollowup/v1/add",method:"post",data:t})};var o=r("Vo7i"),i="aflc-order"},pikG:function(t,e,r){"use strict";e.z=function(t,e,r){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/orderManager",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.r=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/orderDetail/"+t,method:"get"})},e.l=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/getOrderPushList",method:"post",data:t})},e.k=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/getOrderGrabList",method:"post",data:t})},e.j=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/getOrderFollowingFiles",method:"post",data:t})},e.m=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/getReturnListAndEvaluation/"+t,method:"post"})},e.d=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/cancelOrder",method:"post",data:t})},e.e=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/cancelOrderListExcel",method:"post",responseType:"blob",data:t})},e.c=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/appointDriver",method:"post",data:t})},e.p=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/nearDriverList",method:"post",data:t})},e.i=function(t,e,r){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/getOrderCarTrailList",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.a=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/customServiceRemark",method:"post",data:t})},e.E=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/sendDeductBonusSms",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t})},e.h=function(){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/getCountByStatus",method:"post"})},e.F=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/webConfirmGoods",method:"post",data:t})},e.n=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderUnusual/v1/listMasterOrderUnusual",method:"post",data:t})},e.f=function(t){return Object(o.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/deductionBehavior/"+t,method:"post"})},e.A=function(t){return Object(o.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/returnBehavior/"+t,method:"post"})},e.C=function(t){return Object(o.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/returnReward/"+t,method:"post"})},e.o=function(t){return Object(o.a)({url:"/aflc-order/order/aflcOrderBackReward/v1/listReward/"+t,method:"post"})},e.B=function(t,e){return Object(o.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/listReturnBehaviorDetial/"+t+"?riskControlCode="+e,method:"post"})},e.y=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderAudit/v1/orderReview",method:"post",data:t})},e.D=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderAuditRecord/v1/orderRecordReviewModify/"+t.orderSerial+"?reviewStatus="+t.reviewStatus,method:"put"})},e.g=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderExpenses/v1/findByOrderSerial/"+t,method:"get"})},e.s=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderAudit/v1/list",method:"post",data:t})},e.q=function(t){return Object(o.a)({url:"/"+a+"/im/driver/v1/nearbyDriver?longitude="+t.longitude+"&latitude="+t.latitude+"&carTypeCode="+t.carTypeCode+"&distance="+t.distance+"&keyword="+t.keyword+"&isVipCar="+t.isVipCar+"&currentPage="+t.currentPage+"&pageSize="+t.pageSize,method:"get"})},e.v=function(t,e,r){return Object(o.a)({url:"/"+n+"/usercenter/driverSurvey/v1/orderNumAndRank",method:"post",data:{currentPage:t,pageSize:e,vo:r}})},e.b=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/appointDriver",method:"post",data:t})},e.t=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrder/v1/orderManagerAudit",method:"post",data:t})},e.u=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderAuditRecord/v1/orderRecordAuditModify/"+t,method:"put"})},e.x=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderAuditRecord/v1/orderRecordAuditFinish",method:"post",data:t})},e.w=function(t){return Object(o.a)({url:"/"+i+"/order/aflcOrderAuditRecord/v1/orderRecordAuditExpenses/"+t,method:"get"})};var o=r("Vo7i"),i="aflc-order",n="aflc-uc",a="aflc-socket"},t5DY:function(t,e,r){"use strict";e._10=function(e){return e=e||"",n.a.get("/"+a+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return n.a.get("/"+a+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(n.a)({url:"/"+a+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(n.a)({url:"/"+a+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(n.a)({url:"/"+a+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(n.a)({url:"/"+c+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(n.a)({url:"/"+a+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(n.a)({url:"/"+a+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(n.a)({url:"/"+a+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(n.a)({url:"/"+a+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return n.a.get("/"+a+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new i.a(function(t){t(window.UPLOADPOLICYDATA)}):n.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return n.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return n.a.get("/"+c+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(n.a)({url:"/"+c+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return n.a.get("/"+c+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return n.a.get("/"+c+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(n.a)({url:"/"+a+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return n.a.get("/"+a+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return n.a.get("/"+a+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return n.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return n.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(n.a)({url:"/"+l+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(n.a)({url:"/"+a+"/system/user/v1/operate/staff",method:"post",data:t})};var o=r("//Fk"),i=r.n(o),n=r("Vo7i"),a="aflc-common",c="aflc-sm",l="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},tjwf:function(t,e,r){"use strict";var o=r("BFOC"),a=r("mj9Z"),c=r("S56e"),i=r("pikG"),l=r("0xDb");e.a={computed:{isShow:{get:function(){return this.centerDialogVisible},set:function(){}}},components:{Upload:o.a},props:{centerDialogVisible:{type:Boolean,default:!1},rowid:{type:[Number,String]},isDispose:{type:Boolean,default:!1},isClaim:{type:Boolean,default:!1},listForm:{type:Object}},data:function(){return{popTitle:"",btnsize:"mini",sizes:[30,50,100],dataset:[],dataTotal:0,pagesize:30,page:1,totalCount:null,value:"",searchCreatTime:+new Date,pickOption2:"",checked:!1,options:[{value:"选项1",label:"货主"},{value:"选项2",label:"车主"}],rules:{followName:[{required:!0,message:"请输入跟进人"}],goodsclaimDes:[{required:!0,message:"投诉跟进内容最多可输入200个字符"}],fileAddress:[{required:!1,message:"至少上传一张图片"}]},currentCity:"",optionsRisk:[],value11:[],formAllData:{code:!1,fileAddress:"",followName:"",fileName:"",goodsclaimDes:"",orderSerial:"",complainType:"",complainTypeName:"",complainDes:"",riskControlCode:[],riskControlName:[],riskControlValue:[]}}},watch:{isClaim:{handler:function(t){this.isClaim&&(this.popTitle="记录物损跟进")}},isDispose:{handler:function(t){this.isDispose&&(this.popTitle="记录投诉跟进")}}},mounted:function(){this.getMoreInformation()},methods:{reset:function(){this.$refs.ruleForm.resetFields()},closeMe:function(t){this.$emit("close"),this.reset(),"function"==typeof t&&t()},getMoreInformation:function(){var e=this;Object(i.r)(this.$route.query.orderSerial).then(function(t){e.currentCity=t.data.belongCity,Object(c.g)(e.currentCity).then(function(t){e.optionsRisk=t.data})})},getSelection:function(t){this.selectRowData=t},clickDetails:function(t,e,r){this.$refs.multipleTable.toggleRowSelection(t)},getFileInfo:function(t){},getFileList:function(t){var r=[],o=[];t.forEach(function(t,e){r.push(t.url),o.push(t.name)}),this.$set(this.formAllData,"fileAddress",r.join(",")),this.$set(this.formAllData,"fileName",o.join(","))},handleChange:function(){},uploadHandleFile:function(t){var e=t.file,r="",o=e.name.toLowerCase(),i=o.lastIndexOf(".");if(-1<i&&(r=o.substring(i)),r&&".txt"===r){var n=new FormData;n.append("uploadfile",e),n.append("excelSign",this.info)}else this.$message({type:"info",message:"只能上传 .txt 模板文件"})},submitForm:function(t){var n=this;this.$refs[t].validate(function(t){if(!t)return!1;if(!0===n.formAllData.code){n.formAllData.code=1,n.formAllData.orderSerial=n.$route.query.orderSerial,n.formAllData.complainType=n.isClaim?"":n.listForm.complainType,n.formAllData.complainTypeName=n.isClaim?"":n.listForm.complainTypeName,n.formAllData.complainDes=n.isClaim?"":n.listForm.complainDes;var r=[],o=[];n.formAllData.riskControlCode.forEach(function(e){n.optionsRisk.forEach(function(t){e==t.code&&(r.push(t.ruleDescSetting),o.push(t.subBehaviorScore))})}),n.formAllData.riskControlName=r,n.formAllData.riskControlValue=o}else n.formAllData.code=0,n.formAllData.orderSerial="",n.formAllData.complainType="",n.formAllData.complainTypeName="",n.formAllData.complainDes="",n.formAllData.riskControlCode=[],n.formAllData.riskControlName=[],n.formAllData.riskControlValue=[];n.$set(n.formAllData,"goodsclaimId",n.rowid);var e=Object(l.i)({},n.formAllData),i=void 0;n.isClaim?i=Object(a.g)(e):n.isDispose&&(i=Object(c.h)(e)),i.then(function(t){n.$message({message:"保存成功~",type:"success"}),n.closeMe(),n.$emit("success")}).catch(function(t){n.$message({type:"error",message:t.errorInfo||t.text||"未知错误，请重试~"}),n.loading=!1})})}}}}});
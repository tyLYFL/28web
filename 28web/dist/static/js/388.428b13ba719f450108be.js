webpackJsonp([388],{BjNd:function(e,t){},EPeO:function(e,t,r){"use strict";var i=r("mvHQ"),s=r.n(i),n=r("//Fk"),a=r.n(n),o=r("t5DY"),c=r("0xDb");t.a={name:"singleImageUpload",props:{value:[String,Array],title:{type:String,default:""},tip:{type:String,default:"（jpg/png。小于5M）"},size:{type:String,default:"mini"},showFileList:{type:Boolean,default:!1},limit:{type:Number,default:10},listtype:{type:String,default:"picture",enum:["text","picture","picture-card"]},disabled:{type:Boolean,default:!1}},computed:{imageUrl:function(){return this.value}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""},upload:{key:"",policy:"",OSSAccessKeyId:"",success_action_status:"201",signature:""},uploadUrl:"",dir:"",filelist:[],videoUploadPercent:0,videoFlag:!1}},watch:{value:{handler:function(e){if(this.showFileList){var t=Array.isArray(e)?e:e?e.split(","):[];t=t.filter(function(e){return e}),this.filelist=t.map(function(e){var t={};return t.url=e,t})}else this.filelist=[{url:e}]},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(o._15)("aflc").then(function(e){t.upload.OSSAccessKeyId=e.accessid,t.upload.policy=e.policy,t.upload.signature=e.signature,t.uploadUrl=e.host,t.dir=e.dir}).catch(function(e){console.log("get Policy ERror:",e)})},uploadVideoProcess:function(e,t,r){this.videoFlag=!0,this.videoUploadPercent=parseInt(e.percent)},rmImage:function(){this.emitInput("")},onexceed:function(e,t){this.$message.error("最多上传 "+this.limit+" 张!")},handleRemove:function(e,t){console.log("handleRemove:",e,t),this.filelist=t,this.emitInput()},getNowFormatDate:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate(),n=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return t+"_"+r+"_"+i+"_"+(n=n<10?"0"+n:n)+(o=o<10?"0"+o:o)+(s=s<10?"0"+s:s)},random_string:function(e){var t="IMG_WEB_",r=this.getNowFormatDate();return console.log("timestamp",r),t+=r+"_"+Math.floor((Math.random()+Math.floor(9*Math.random()+1))*Math.pow(10,4))},emitInput:function(e){e&&this.filelist.push({url:e}),this.$emit("input",this.showFileList?this.filelist.map(function(e){return e.url}).join(","):e)},handleImageScucess:function(e){this.videoFlag=!1;var t="";-1!==e.indexOf("Location")&&(t=(t=e.match(/<Location>([^<]+)<\/Location>/m))?t[1].replace("//"+this.dir,"/"+this.dir):""),this.emitInput(t)},handleError:function(e){console.log("upload err:",e),this.$emit("error",e)},beforeUpload:function(e){var r=this;console.log("beforeUpload:",e);var i=/image\/\w+/.test(e.type)&&/(jpe?g|png)/i.test(e.type),n=e.size/1024/1024<5,o=e.name.match(/([^\.]+)$/);return o=o?"."+o[1]:"",new a.a(function(t,e){i?n?(console.log("loooo1"),r.init().then(function(e){console.log("loooo2"),r.upload.key=r.dir+Object(c.k)(new Date,"{y}{m}{d}")+"/"+r.random_string()+o,t(!0)}).catch(function(e){console.log("loooo3"),r.$message.error("未知错误："+s()(e)),t(!1)})):(r.$message.error("上传图片大小不能超过 5MB!"),e(!1)):(r.$message.error("上传图片只能是 JPG/PNG 格式!"),e(!1))})}}}},QbVN:function(e,t,r){"use strict";var i=r("EPeO"),n=r("jrcS");var o=function(e){r("BjNd"),r("yDTW")},s=r("VU/8")(i.a,n.a,o,"data-v-a8a0f0d6",null);t.a=s.exports},SbUv:function(e,t){},c5Na:function(e,t,r){"use strict";t.f=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/addSystemMemberConfig",method:"post",data:e})},t.i=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/listSystemMemberConfig",method:"post",data:e})},t.l=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/updateSystemMemberConfig",method:"post",data:e})},t.h=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/listExchangeMemberConfig",method:"post",data:e})},t.k=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/updateExchangeMemberConfigUsingStatus/"+e,method:"post"})},t.e=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/addExchangeMemberConfig",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/listBuyMemberConfig",method:"post",data:e})},t.d=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/addBuyMemberConfig",method:"post",data:e})},t.j=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcMarketingMemberConfig/v1/updateBuyMemberConfigUsingStatus/"+e,method:"post"})},t.c=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcDriverBuyMemberDetail/v1/list",method:"post",data:e})},t.b=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcCoinsGrantDriver/v1/driverList",method:"post",data:e})},t.a=function(e){return Object(i.a)({url:"/"+n+"/usercenter/aflcCoinsGrantDriverDetail/v1/list",method:"post",data:e})};var i=r("Vo7i"),n="aflc-uc"},dvOl:function(e,t,r){"use strict";var i={render:function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",{staticClass:"newMememberSystem commoncss"},[n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:i.formtitle,"close-on-click-modal":!1,visible:i.dialogFormVisible},on:{close:i.close}},[n("el-form",{ref:"ruleForm",attrs:{model:i.standForm,rules:i.newrules,"label-width":i.formLabelWidth,"label-position":"left"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"一级会员等级：",prop:"firstMemberGrade"}},[n("el-input",{attrs:{maxlength:"10",disabled:i.isModify},model:{value:i.standForm.firstMemberGrade,callback:function(e){i.$set(i.standForm,"firstMemberGrade",e)},expression:"standForm.firstMemberGrade"}})],1)],1),i._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"前端显示排序序号：",prop:"firstMemberSort"}},[n("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{"auto-complete":"off",maxlength:"2"},model:{value:i.standForm.firstMemberSort,callback:function(e){i.$set(i.standForm,"firstMemberSort",e)},expression:"standForm.firstMemberSort"}})],1)],1)],1),i._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"前端显示提示语：",prop:"markedWords"}},[n("el-input",{attrs:{maxlength:"50"},model:{value:i.standForm.markedWords,callback:function(e){i.$set(i.standForm,"markedWords",e)},expression:"standForm.markedWords"}})],1)],1)],1),i._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"前端显示图标：",prop:"firstMemberIcon"}},[n("Upload",{staticClass:"licensePicture",attrs:{tip:"（必须为jpg/png并且小于5M）"},model:{value:i.standForm.firstMemberIcon,callback:function(e){i.$set(i.standForm,"firstMemberIcon",e)},expression:"standForm.firstMemberIcon"}})],1)],1)],1),i._v(" "),n("table",{staticClass:"systemTitle"},[n("thead",[n("th",[i._v("前端显示图标")]),i._v(" "),n("th",[i._v("二级会员等级")]),i._v(" "),n("th",[i._v("中单等级")]),i._v(" "),n("th",[i._v("奖励等级")]),i._v(" "),n("th",[i._v("抽佣等级")]),i._v(" "),n("th",[i._v("提现等级")]),i._v(" "),n("th",{staticClass:"lastOne"},[i._v("操作")])]),i._v(" "),n("tbody",i._l(i.otherForm,function(t,r){return n("tr",{key:r},[n("td",[n("Upload",{staticClass:"licensePicture",attrs:{tip:""},model:{value:t.secondMemberIcon,callback:function(e){i.$set(t,"secondMemberIcon",e)},expression:"item.secondMemberIcon"}})],1),i._v(" "),n("td",[n("el-input",{attrs:{"auto-complete":"off",maxlength:"10",disabled:r<=i.isModifyLength-1},model:{value:t.secondMemberGrade,callback:function(e){i.$set(t,"secondMemberGrade",e)},expression:"item.secondMemberGrade"}})],1),i._v(" "),n("td",[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.winOrderGrade,callback:function(e){i.$set(t,"winOrderGrade",e)},expression:"item.winOrderGrade"}},i._l(i.optionsObtainGrade,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),i._v(" "),n("td",[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.rewardGrade,callback:function(e){i.$set(t,"rewardGrade",e)},expression:"item.rewardGrade"}},i._l(i.optionsRewardGrade,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),i._v(" "),n("td",[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.commissionGrade,callback:function(e){i.$set(t,"commissionGrade",e)},expression:"item.commissionGrade"}},i._l(i.optionsBrokerageGrade,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),i._v(" "),n("td",[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.extractCashGrade,callback:function(e){i.$set(t,"extractCashGrade",e)},expression:"item.extractCashGrade"}},i._l(i.optionsTakeCashGrade,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),i._v(" "),n("td",{staticClass:"lastOne"},[n("div",{staticClass:"iconItem"},[r==i.otherForm.length-1&&4!=r?n("span",{staticClass:"addItem",on:{click:i.addItem}}):i._e(),i._v(" "),r==i.otherForm.length-1&&1!=i.otherForm.length&&r>i.isModifyLength-1?n("span",{staticClass:"reduceItem",on:{click:function(e){i.reduceItem(r)}}}):i._e()])])])}))])],1),i._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:i.btnShow},on:{click:function(e){i.submitForm("ruleForm")}}},[i._v(i._s(i.isModify?"保 存":"确 定"))]),i._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:i.close}},[i._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=i},fVYH:function(e,t,r){"use strict";var i=r("//Fk"),n=r.n(i),o=r("t5DY"),s=r("c5Na"),a=r("0xDb"),c=r("QbVN");t.a={name:"newMememberSystem",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!0},isModify:{type:Boolean,default:!1},changeforms:{type:Object}},components:{Upload:c.a},data:function(){return{btnShow:!1,formLabelWidth:"150px",isModifyLength:0,standForm:{firstMemberGrade:"",firstMemberSort:"",markedWords:"",firstMemberIcon:""},otherForm:[{secondMemberIcon:"",secondMemberGrade:"",winOrderGrade:"",rewardGrade:"",commissionGrade:"",extractCashGrade:""}],optionsObtainGrade:"",optionsRewardGrade:"",optionsBrokerageGrade:"",optionsTakeCashGrade:"",information:"",newrules:{firstMemberGrade:[{required:!0,message:"请输入一级会员等级",trigger:"change"}],firstMemberSort:[{required:!0,message:"请输入前端显示排序序号",trigger:"change"}],markedWords:{required:!0,message:"请输入前端显示提示语",trigger:"change"},firstMemberIcon:{required:!0,message:"请上传前端显示图标",trigger:"change"}}}},watch:{dialogFormVisible:{handler:function(e,t){e&&(this.init(),this.reviseForms())},deep:!0}},mounted:function(){this.init()},methods:{close:function(){this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1},init:function(){var t=this;n.a.all([Object(o.z)(),Object(o.K)(),Object(o.k)(),Object(o.Q)()]).then(function(e){t.optionsObtainGrade=e[0].data,t.optionsRewardGrade=e[1].data,t.optionsBrokerageGrade=e[2].data,t.optionsTakeCashGrade=e[3].data})},reviseForms:function(){this.isModify?(console.log("this.changeforms",this.changeforms),this.standForm.firstMemberGrade=this.changeforms.firstMemberGrade,this.standForm.firstMemberSort=this.changeforms.firstMemberSort,this.standForm.markedWords=this.changeforms.configs[0].markedWords,this.standForm.firstMemberIcon=this.changeforms.configs[0].firstMemberIcon,this.otherForm=this.changeforms.configs,this.isModifyLength=this.changeforms.configs.length):this.clearForms()},submitForm:function(e){var i=this;this.$refs[e].validate(function(e){if(!e)return i.$message({type:"warning",message:"请填写完整数据!"}),!1;var t=!1;if(i.otherForm.forEach(function(e){e.secondMemberIcon&&e.secondMemberGrade&&e.winOrderGrade&&e.rewardGrade&&e.commissionGrade&&e.extractCashGrade||(t=!0)}),t)i.$message({type:"warning",message:"选择等级存在必填项未选择！"});else{i.btnShow=!0,i.complantForm();var r=Object(a.i)(i.otherForm);(i.isModify?Object(s.l)(r):Object(s.f)(r)).then(function(e){i.$message({type:"success",message:i.isModify?"修改成功！":"新增成功！"}),i.close()}).catch(function(e){i.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),i.btnShow=!1})}})},clearForms:function(){this.standForm={firstMemberGrade:"",firstMemberSort:"",markedWords:"",firstMemberIcon:""},this.otherForm=[{secondMemberIcon:"",secondMemberGrade:"",winOrderGrade:"",rewardGrade:"",commissionGrade:"",extractCashGrade:""}]},addItem:function(){this.otherForm.push({secondMemberIcon:"",secondMemberGrade:"",winOrderGrade:"",rewardGrade:"",commissionGrade:"",extractCashGrade:""})},reduceItem:function(e){this.otherForm.splice(e,1)},complantForm:function(){var t=this;this.otherForm.forEach(function(e){e.firstMemberGrade=t.standForm.firstMemberGrade,e.firstMemberSort=t.standForm.firstMemberSort,e.markedWords=t.standForm.markedWords,e.firstMemberIcon=t.standForm.firstMemberIcon})}}}},jrcS:function(e,t,r){"use strict";var i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upload-container",class:{uploadlist:e.showFileList}},[e.uploadUrl?r("el-upload",{staticClass:"image-uploader",attrs:{data:e.upload,action:e.uploadUrl,multiple:!1,drag:!e.showFileList,"show-file-list":e.showFileList,"file-list":e.filelist,limit:e.limit,"before-upload":e.beforeUpload,"list-type":e.listtype,"on-exceed":e.onexceed,disabled:e.disabled,"on-remove":e.handleRemove,"on-progress":e.uploadVideoProcess,"on-error":e.handleError,"on-success":e.handleImageScucess}},[e._t("content",[e.title&&!e.showFileList?r("div",{staticClass:"upload__title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),r("el-button",{attrs:{size:e.size,type:"primary"}},[e._v("点击上传")]),e._v(" "),e.showFileList?e._e():r("div",{staticClass:"el-upload__text"},[e._v("将文件拖拽到此区域")]),e._v(" "),e.tip?r("div",{staticClass:"upload__tip"},[e._v(e._s(e.tip))]):e._e()])],2):e._e(),e._v(" "),e.imageUrl&&!e.showFileList?r("div",{staticClass:"image-preview"},[r("div",{staticClass:"image-preview-wrapper"},[r("img",{attrs:{src:e.imageUrl}}),e._v(" "),r("div",{staticClass:"image-preview-action"},[r("i",{staticClass:"el-icon-delete",on:{click:e.rmImage}})])])]):e._e(),e._v(" "),1==e.videoFlag?r("div",{staticClass:"progressShow"},[r("el-progress",{attrs:{type:"circle",percentage:e.videoUploadPercent}})],1):e._e()],1)},staticRenderFns:[]};t.a=i},rg6m:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("fVYH"),n=r("dvOl");var o=function(e){r("SbUv")},s=r("VU/8")(i.a,n.a,o,null,null);t.default=s.exports},t5DY:function(e,t,r){"use strict";t._10=function(t){return t=t||"",o.a.get("/"+s+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return o.a.get("/"+s+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(o.a)({url:"/"+s+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(o.a)({url:"/"+s+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(o.a)({url:"/"+a+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return o.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new n.a(function(e){e(window.UPLOADPOLICYDATA)}):o.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return o.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return o.a.get("/"+a+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(o.a)({url:"/"+a+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return o.a.get("/"+a+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return o.a.get("/"+a+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(o.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return o.a.get("/"+s+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return o.a.get("/"+s+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return o.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return o.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(o.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(o.a)({url:"/"+s+"/system/user/v1/operate/staff",method:"post",data:e})};var i=r("//Fk"),n=r.n(i),o=r("Vo7i"),s="aflc-common",a="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},yDTW:function(e,t){}});
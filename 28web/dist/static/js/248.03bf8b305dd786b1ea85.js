webpackJsonp([248,387],{"0BxF":function(t,e,i){"use strict";var n={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"identicalStyle gestureConfig"},[s("div",{staticClass:"classify_info"},[s("div",{staticClass:"btns_box"},[s("el-button",{attrs:{type:"primary",size:n.btnsize,plain:"",icon:"el-icon-circle-plus"},on:{click:function(t){n.handleClick("new")}}},[n._v("新增")]),n._v(" "),s("el-button",{attrs:{type:"primary",size:n.btnsize,plain:"",icon:"el-icon-edit"},on:{click:function(t){n.handleClick("revise")}}},[n._v("修改")])],1),n._v(" "),s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"info_news"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:n.tableData,border:"",stripe:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"row-click":n.clickDetails}},[s("el-table-column",{attrs:{label:"选择",width:"60",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[s("el-radio",{staticClass:"radio",attrs:{label:t.row.id},model:{value:n.radio,callback:function(t){n.radio=t},expression:"radio"}},[n._v(" ")])]}}])}),n._v(" "),n._l(n.tableColumn,function(i,t){return[i.slot?s("el-table-column",{key:t,attrs:{sortable:"",fixed:i.fixed,label:i.label,"show-overflow-tooltip":i.overflow,width:i.width||""},scopedSlots:n._u([{key:"default",fn:function(e){return[i.click?s("span",{staticClass:"clickitem",domProps:{innerHTML:n._s(i.slot(e))},on:{click:function(t){t.stopPropagation(),i.click(e.row)}}}):s("span",{domProps:{innerHTML:n._s(i.slot(e))}})]}}])}):s("el-table-column",{key:t,attrs:{sortable:"",fixed:i.fixed,label:i.label,"show-overflow-tooltip":i.overflow,prop:i.prop,width:i.width}})]})],2)],1)]),n._v(" "),s("div",{staticClass:"info_tab_footer"},[n._v("共计:"+n._s(n.totalCount)+" "),s("div",{staticClass:"show_pager"},[s("Pager",{ref:"pager",attrs:{total:n.totalCount},on:{change:n.handlePageChange}})],1)]),n._v(" "),s("add",{attrs:{dialogFormVisible:n.dialogFormVisible,formtitle:n.formtitle,changeForm:n.changeForm,isModify:n.isModify},on:{"update:dialogFormVisible":function(t){n.dialogFormVisible=t},renovate:n.firstblood}})],1)},staticRenderFns:[]};e.a=n},"1onU":function(t,e,i){"use strict";var n=i("VT+v"),s=i("juIs");var a=function(t){i("ZdV2"),i("co/t")},o=i("VU/8")(n.a,s.a,a,"data-v-695be8cd",null);e.a=o.exports},BjNd:function(t,e){},EOFL:function(t,e,i){"use strict";e.f=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerSetting/v1/list",method:"post",data:t})},e.v=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerSetting/v1/add",method:"post",data:t})},e.x=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerSetting/v1/update",method:"put",data:t})},e.e=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerSetting/v1/"+t,method:"get"})},e.l=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerSetting/v1/delete/"+t,method:"DELETE"})},e.j=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerSetting/v1/enableOrDisable",method:"post",data:t})},e.q=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerGestureSetting/v1/list",method:"post",data:t})},e.w=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerGestureSetting/v1/add",method:"post",data:t})},e.y=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerGestureSetting/v1/update",method:"put",data:t})},e.p=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcDriverStickerGestureSetting/v1/"+t,method:"get"})},e.c=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerOrder/v1/list",method:"post",data:t})},e.b=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerApply/v1/orderSerial/"+t,method:"get"})},e.i=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerFollowing/v1/list",method:"post",data:t})},e.a=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerFollowing/v1/add",method:"post",data:t})},e.d=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerApply/v1/check",method:"post",data:t})},e.o=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerFirstTrial/v1/list",method:"post",data:t})},e.n=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerFirstTrial/v1/"+t,method:"get"})},e.m=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerFirstTrial/v1/check",method:"post",data:t})},e.t=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerMonthTrial/v1/list",method:"post",data:t})},e.r=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerMonthTrial/v1/check",method:"post",data:t})},e.s=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerMonthTrial/v1/"+t,method:"get"})},e.u=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerMonthTrial/v1/repeatCheck",method:"post",data:t})},e.h=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerCheck/v1/list",method:"post",data:t})},e.g=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerOrderPayment/v1/carStickerPaymentList",method:"post",data:t})},e.k=function(t){return Object(n.a)({url:"/"+s+"/sm/aflcCarStickerOrderPayment/v1/list",method:"post",data:t})};var n=i("Vo7i"),s="aflc-sm"},EPeO:function(t,e,i){"use strict";var n=i("mvHQ"),o=i.n(n),s=i("//Fk"),r=i.n(s),a=i("t5DY"),c=i("0xDb");e.a={name:"singleImageUpload",props:{value:[String,Array],title:{type:String,default:""},tip:{type:String,default:"（jpg/png。小于5M）"},size:{type:String,default:"mini"},showFileList:{type:Boolean,default:!1},limit:{type:Number,default:10},listtype:{type:String,default:"picture",enum:["text","picture","picture-card"]},disabled:{type:Boolean,default:!1}},computed:{imageUrl:function(){return this.value}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""},upload:{key:"",policy:"",OSSAccessKeyId:"",success_action_status:"201",signature:""},uploadUrl:"",dir:"",filelist:[],videoUploadPercent:0,videoFlag:!1}},watch:{value:{handler:function(t){if(this.showFileList){var e=Array.isArray(t)?t:t?t.split(","):[];e=e.filter(function(t){return t}),this.filelist=e.map(function(t){var e={};return e.url=t,e})}else this.filelist=[{url:t}]},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(a._15)("aflc").then(function(t){e.upload.OSSAccessKeyId=t.accessid,e.upload.policy=t.policy,e.upload.signature=t.signature,e.uploadUrl=t.host,e.dir=t.dir}).catch(function(t){console.log("get Policy ERror:",t)})},uploadVideoProcess:function(t,e,i){this.videoFlag=!0,this.videoUploadPercent=parseInt(t.percent)},rmImage:function(){this.emitInput("")},onexceed:function(t,e){this.$message.error("最多上传 "+this.limit+" 张!")},handleRemove:function(t,e){console.log("handleRemove:",t,e),this.filelist=e,this.emitInput()},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,n=t.getDate(),s=t.getHours(),a=t.getMinutes(),o=t.getSeconds();return e+"_"+i+"_"+n+"_"+(s=s<10?"0"+s:s)+(a=a<10?"0"+a:a)+(o=o<10?"0"+o:o)},random_string:function(t){var e="IMG_WEB_",i=this.getNowFormatDate();return console.log("timestamp",i),e+=i+"_"+Math.floor((Math.random()+Math.floor(9*Math.random()+1))*Math.pow(10,4))},emitInput:function(t){t&&this.filelist.push({url:t}),this.$emit("input",this.showFileList?this.filelist.map(function(t){return t.url}).join(","):t)},handleImageScucess:function(t){this.videoFlag=!1;var e="";-1!==t.indexOf("Location")&&(e=(e=t.match(/<Location>([^<]+)<\/Location>/m))?e[1].replace("//"+this.dir,"/"+this.dir):""),this.emitInput(e)},handleError:function(t){console.log("upload err:",t),this.$emit("error",t)},beforeUpload:function(t){var i=this;console.log("beforeUpload:",t);var n=/image\/\w+/.test(t.type)&&/(jpe?g|png)/i.test(t.type),s=t.size/1024/1024<5,a=t.name.match(/([^\.]+)$/);return a=a?"."+a[1]:"",new r.a(function(e,t){n?s?(console.log("loooo1"),i.init().then(function(t){console.log("loooo2"),i.upload.key=i.dir+Object(c.k)(new Date,"{y}{m}{d}")+"/"+i.random_string()+a,e(!0)}).catch(function(t){console.log("loooo3"),i.$message.error("未知错误："+o()(t)),e(!1)})):(i.$message.error("上传图片大小不能超过 5MB!"),t(!1)):(i.$message.error("上传图片只能是 JPG/PNG 格式!"),t(!1))})}}}},Et4K:function(t,e){},"Fmw/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("cyzD"),s=i("e6W3");var a=function(t){i("Et4K")},o=i("VU/8")(n.a,s.a,a,null,null);e.default=o.exports},LhEs:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("UcrB"),s=i("0BxF");var a=function(t){i("Rm6R")},o=i("VU/8")(n.a,s.a,a,null,null);e.default=o.exports},QbVN:function(t,e,i){"use strict";var n=i("EPeO"),s=i("jrcS");var a=function(t){i("BjNd"),i("yDTW")},o=i("VU/8")(n.a,s.a,a,"data-v-a8a0f0d6",null);e.a=o.exports},Rm6R:function(t,e){},UcrB:function(t,e,i){"use strict";var n=i("EOFL"),s=i("1onU"),a=i("0xDb"),o=i("Fmw/");e.a={name:"gestureConfig",components:{Pager:s.a,add:o.default},data:function(){var e=this;return{btnsize:"mini",loading:!1,dialogFormVisible:!1,isModify:!1,formtitle:"",changeForm:{},totalCount:0,listSystemObj:{currentPage:1,pageSize:20,vo:{}},chooseTime:[],tableData:[],radio:"",selected:{},tableColumn:[{label:"序号",prop:"id",width:"60",fixed:!1,slot:function(t){return(e.listSystemObj.currentPage-1)*e.listSystemObj.pageSize+t.$index+1}},{label:"年月",prop:"belongMouth",fixed:!1,overflow:!0,slot:function(t){return Object(a.k)(t.row.belongMouth,"{y}-{m}")}},{label:"月审手势图片",prop:"gestureUrl",fixed:!1,overflow:!0,slot:function(t){return"<img src='"+t.row.gestureUrl+"'/>"}},{label:"操作时间",prop:"updateTime",fixed:!1,overflow:!1,slot:function(t){return Object(a.k)(t.row.updateTime)}},{label:"操作人",prop:"updater",fixed:!1,overflow:!1}]}},watch:{},mounted:function(){this.firstblood()},beforeDestroy:function(){},methods:{clickDetails:function(t,e,i){this.selected=t},getStr:function(t){this.listSystemObj.vo.fullCityName=t.province||t.city||t.area?(""+this.getValue(t.province)+this.getValue(t.city)+this.getValue(t.area)).trim():"",this.listSystemObj.vo.cityCode=t.city.code},getValue:function(t){return t?t.value:""},handlePageChange:function(t){this.listSystemObj.currentPage=t.pageNum,this.listSystemObj.pageSize=t.pageSize,this.firstblood()},handleSearch:function(t){"clear"==t&&(this.listSystemObj.vo={produceName:"",fullCityName:"",cityCode:""}),1!=this.listSystemObj.currentPage&&(this.listSystemObj.currentPage=1,this.$refs.pager.inputval=this.listSystemObj.currentPage,this.$refs.pager.pageNum=this.listSystemObj.currentPage),this.firstblood()},firstblood:function(){var e=this;this.loading=!0,Object(n.q)(this.listSystemObj).then(function(t){e.totalCount=t.data.totalCount,e.tableData=t.data.list,e.loading=!1}).catch(function(t){e.loading=!1})},handleClick:function(t){if(this.selected.id||"new"==t)switch(t){case"new":this.dialogFormVisible=!0,this.formtitle="新增每月手势配置",this.isModify=!1;break;case"revise":this.dialogFormVisible=!0,this.formtitle="修改每月手势配置",this.isModify=!0,this.changeForm=this.selected}else this.$message({type:"warning",message:"请选择一条列表数据!"})}}}},"VT+v":function(t,e,i){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,i=t.target;console.log("page keydown:",e,i),13===e&&this.oldValue&&i.value!==this.oldValue&&(this.handleChange(i.value),this.oldValue="")},jumpTo:function(t){console.log("d",this.inputval),t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},ZdV2:function(t,e){},"co/t":function(t,e){},cyzD:function(t,e,i){"use strict";var n=i("EOFL"),s=i("0xDb"),a=i("QbVN");e.a={name:"gestureConfig",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!1,default:"每月手势配置"},isModify:{type:Boolean,default:!1},changeForm:{type:Object}},components:{Upload:a.a},data:function(){return{btnShow:!1,formLabelWidth:"100px",standForm:{belongMouth:"",gestureUrl:"",isUser:"0"},newrules:{belongMouth:{required:!0,message:"请选择每月手势配置年月",trigger:"blur"},gestureUrl:{required:!0,message:"请上传当月图片",trigger:"change"}},remarkList:[{label:"当月进行的手势图片，若无人提交月审，可以修改图片；若已有人提交月审资料，则不能修改图片。"}]}},watch:{dialogFormVisible:{handler:function(t,e){t&&this.reviseForms()},deep:!0}},mounted:function(){this.init()},methods:{reviseForms:function(){var e=this;this.isModify?Object(n.p)(this.changeForm.id).then(function(t){e.$set(e.standForm,"isUser","0"),e.standForm=Object(s.i)(t.data)}):this.clearForms()},close:function(){this.dialogFormVisible&&(this.$emit("update:dialogFormVisible",!1),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1)},init:function(){},submitForm:function(t){var i=this;this.$refs[t].validate(function(t){if(!t)return i.$message({type:"warning",message:"请填写完整数据!"}),!1;i.btnShow=!0;var e=Object(s.i)(i.standForm);(i.isModify?Object(n.y)(e):Object(n.w)(e)).then(function(t){i.$message({type:"success",message:"每月手势配置成功！"}),i.close()}).catch(function(t){i.$message({type:"info",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)}),i.btnShow=!1})})},clearForms:function(){for(var t in this.standForm)this.standForm[t]="isUser"==t?"0":""}}}},e6W3:function(t,e,i){"use strict";var n={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"gestureConfig commoncss"},[n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:i.formtitle,"close-on-click-modal":!1,top:"8vh",width:"40%",visible:i.dialogFormVisible},on:{close:i.close}},[n("el-form",{ref:"ruleForm",attrs:{model:i.standForm,rules:i.newrules,"label-position":"right","label-width":i.formLabelWidth}},[n("el-row",[n("el-col",{attrs:{span:14}},[n("el-form-item",{attrs:{label:"年月：",prop:"belongMouth"}},[n("el-date-picker",{attrs:{type:"month",disabled:"1"==i.standForm.isUser,placeholder:"选择月"},model:{value:i.standForm.belongMouth,callback:function(t){i.$set(i.standForm,"belongMouth",t)},expression:"standForm.belongMouth"}})],1)],1)],1),i._v(" "),n("el-row",[n("el-col",{attrs:{span:14}},[n("el-form-item",{attrs:{label:"当月图片：",prop:"gestureUrl"}},["1"==i.standForm.isUser?n("img",{directives:[{name:"showPicture",rawName:"v-showPicture"}],attrs:{src:i.standForm.gestureUrl,alt:"",imgurl:i.standForm.gestureUrl}}):n("upload",{staticClass:"licensePicture",attrs:{tip:"（必须为jpg/png并且小于5M）"},model:{value:i.standForm.gestureUrl,callback:function(t){i.$set(i.standForm,"gestureUrl",t)},expression:"standForm.gestureUrl"}})],1)],1)],1),i._v(" "),n("el-row",{staticClass:"rewordRemark"},[n("el-col",{attrs:{span:24}},[n("p",[i._v("页面备注：")]),i._v(" "),n("ul",i._l(i.remarkList,function(t,e){return n("li",{key:e},[n("span",[i._v(i._s(t.label))])])}))])],1)],1),i._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["0"==i.standForm.isUser?n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:i.btnShow},on:{click:function(t){i.submitForm("ruleForm")}}},[i._v("保 存")]):i._e(),i._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:i.close}},[i._v("取 消")])],1)],1)],1)},staticRenderFns:[]};e.a=n},jrcS:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container",class:{uploadlist:t.showFileList}},[t.uploadUrl?i("el-upload",{staticClass:"image-uploader",attrs:{data:t.upload,action:t.uploadUrl,multiple:!1,drag:!t.showFileList,"show-file-list":t.showFileList,"file-list":t.filelist,limit:t.limit,"before-upload":t.beforeUpload,"list-type":t.listtype,"on-exceed":t.onexceed,disabled:t.disabled,"on-remove":t.handleRemove,"on-progress":t.uploadVideoProcess,"on-error":t.handleError,"on-success":t.handleImageScucess}},[t._t("content",[t.title&&!t.showFileList?i("div",{staticClass:"upload__title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),i("el-button",{attrs:{size:t.size,type:"primary"}},[t._v("点击上传")]),t._v(" "),t.showFileList?t._e():i("div",{staticClass:"el-upload__text"},[t._v("将文件拖拽到此区域")]),t._v(" "),t.tip?i("div",{staticClass:"upload__tip"},[t._v(t._s(t.tip))]):t._e()])],2):t._e(),t._v(" "),t.imageUrl&&!t.showFileList?i("div",{staticClass:"image-preview"},[i("div",{staticClass:"image-preview-wrapper"},[i("img",{attrs:{src:t.imageUrl}}),t._v(" "),i("div",{staticClass:"image-preview-action"},[i("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])]):t._e(),t._v(" "),1==t.videoFlag?i("div",{staticClass:"progressShow"},[i("el-progress",{attrs:{type:"circle",percentage:t.videoUploadPercent}})],1):t._e()],1)},staticRenderFns:[]};e.a=n},juIs:function(t,e,i){"use strict";var n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tms-pagenation"},[i("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[i("span",{staticClass:"first-page"})]),i("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[i("span",{staticClass:"prev-page"})]),e._v(" "),i("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),i("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},nativeOn:{keydown:function(t){return e.handleKeyup(t)}},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),i("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[i("span",{staticClass:"next-page"})]),e._v(" "),i("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[i("span",{staticClass:"last-page"})]),e._v(" "),i("span",{staticClass:"tms-pagination__sizes"},[i("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizesChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})}))],1)])},staticRenderFns:[]};e.a=n},t5DY:function(t,e,i){"use strict";e._10=function(e){return e=e||"",a.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return a.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(a.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(a.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(a.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new s.a(function(t){t(window.UPLOADPOLICYDATA)}):a.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return a.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return a.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(a.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return a.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return a.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return a.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return a.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return a.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return a.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(a.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(a.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:t})};var n=i("//Fk"),s=i.n(n),a=i("Vo7i"),o="aflc-common",r="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},yDTW:function(t,e){}});
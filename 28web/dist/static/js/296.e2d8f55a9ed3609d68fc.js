webpackJsonp([296],{"17yh":function(e,t){},"1onU":function(e,t,i){"use strict";var a=i("VT+v"),s=i("juIs");var n=function(e){i("ZdV2"),i("co/t")},r=i("VU/8")(a.a,s.a,n,"data-v-695be8cd",null);t.a=r.exports},"7TVD":function(e,t){},"7twG":function(e,t,i){"use strict";var a={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"wzlAddReg"},[a("el-dialog",{attrs:{title:"物损登记",visible:i.isShow,center:"",top:"6vh","close-on-click-modal":!1,"before-close":i.closeMe},on:{"update:visible":function(e){i.isShow=e},close:i.closeMe}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{model:i.formAllData,rules:i.rules,inline:!0,"label-position":"right"}},[a("el-form-item",{attrs:{label:"交易时间"}},[a("el-date-picker",{attrs:{"default-value":i.defaultTime,type:"daterange",align:"right","popper-class":"searchCreatTime","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","picker-options":i.pickerOptions2,"end-placeholder":"结束日期"},model:{value:i.searchCreatTime,callback:function(e){i.searchCreatTime=e},expression:"searchCreatTime"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"货主"}},[a("el-input",{attrs:{maxlength:20,placeholder:"账户/姓名","auto-complete":"off",clearable:""},model:{value:i.formAllData.shipperName,callback:function(e){i.$set(i.formAllData,"shipperName",e)},expression:"formAllData.shipperName"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"车主"}},[a("el-input",{attrs:{maxlength:20,placeholder:"账户/姓名/车号牌","auto-complete":"off",clearable:""},model:{value:i.formAllData.driverName,callback:function(e){i.$set(i.formAllData,"driverName",e)},expression:"formAllData.driverName"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"订单号"}},[a("el-input",{attrs:{maxlength:20,"auto-complete":"off",clearable:""},model:{value:i.formAllData.orderSerial,callback:function(e){i.$set(i.formAllData,"orderSerial",e)},expression:"formAllData.orderSerial"}})],1),i._v(" "),a("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[a("el-button",{attrs:{type:"primary",size:i.btnsize,plain:"",icon:"el-icon-search"},on:{click:function(e){i.handleSearch("search")}}},[i._v("搜索")]),i._v(" "),a("el-button",{attrs:{type:"info",size:i.btnsize,plain:"",icon:"fontFamily aflc-icon-qingkong"},on:{click:function(e){i.handleSearch("clear")}}},[i._v("清空")])],1)],1),i._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"info_news"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",border:"",height:"100%","highlight-current-row":"",data:i.dataset,"tooltip-effect":"dark"},on:{"row-click":i.clickDetails,"selection-change":i.getSelection}},[a("el-table-column",{attrs:{label:"选择",type:"selection",width:"50"}}),i._v(" "),a("el-table-column",{attrs:{fixed:"",label:"序号",sortable:"",width:"60"},scopedSlots:i._u([{key:"default",fn:function(e){return[i._v("\n            "+i._s((i.page-1)*i.pagesize+e.$index+1)+"\n            ")]}}])}),i._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"orderSerial",label:"订单号",sortable:"",width:"300"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("h4",{staticClass:"needMoreInfo",on:{click:function(e){i.pushOrderSerial(t.row)}}},[i._v(i._s(t.row.orderSerial))])]}}])}),i._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"provinceCityArea",label:"所属区域",width:"300"}}),i._v(" "),a("el-table-column",{attrs:{label:"货主",sortable:"",prop:"shipperName","show-overflow-tooltip":!0,width:"200"}}),i._v(" "),a("el-table-column",{attrs:{label:"车主",sortable:"",prop:"driverName","show-overflow-tooltip":!0,width:"200"}}),i._v(" "),a("el-table-column",{attrs:{label:"提货地",prop:"startAddress",sortable:"","show-overflow-tooltip":!0,width:"300"}}),i._v(" "),a("el-table-column",{attrs:{label:"目的地",prop:"endAddress",sortable:"","show-overflow-tooltip":!0,width:"300"}}),i._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"",label:"下单时间",width:"200",sortable:""},scopedSlots:i._u([{key:"default",fn:function(e){return[a("span",{staticClass:"orderSerial"},[i._v("\n              "+i._s(i._f("parseTime")(e.row.useTime,"{y}-{m}-{d} {h}:{i}:{s}"))+"    \n            ")])]}}])})],1)],1),i._v(" "),a("div",{staticClass:"info_bottom"},[a("el-form",{ref:"ruleForm",attrs:{"label-position":"right",model:i.searchForm,rules:i.rules,inline:!0}},[a("el-form-item",{attrs:{label:"上报时间",prop:"createTime"}},[a("el-date-picker",{attrs:{disabled:"disabled",align:"right",type:"date","picker-options":i.pickOption2,placeholder:"选择日期","value-format":"timestamp"},model:{value:i.searchCreatTime1,callback:function(e){i.searchCreatTime1=e},expression:"searchCreatTime1"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"物损类型",prop:"claimType"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择处理状态"},model:{value:i.searchForm.claimType,callback:function(e){i.$set(i.searchForm,"claimType",e)},expression:"searchForm.claimType"}},i._l(i.optionsclaimType,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),i._v(" "),a("el-form-item",{attrs:{label:"上报人类型",prop:"reporterType"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:i.changeCode},model:{value:i.searchForm.reporterType,callback:function(e){i.$set(i.searchForm,"reporterType",e)},expression:"searchForm.reporterType"}},i._l(i.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),i._v(" "),a("el-form-item",{staticClass:"discrabel",attrs:{label:"物损描述",prop:"claimDes"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",maxlength:200,placeholder:"物损描述最多输入200个字符"},model:{value:i.searchForm.claimDes,callback:function(e){i.$set(i.searchForm,"claimDes",e)},expression:"searchForm.claimDes"}})],1),i._v(" "),a("el-form-item",{staticClass:"clearfix imgbox",attrs:{label:"物损图片",prop:"claimPic1"}},[a("div",{staticClass:"clearfix uploadcard"},[a("upload",{attrs:{title:"本地上传",showFileList:!0,limit:4,listtype:"picture"},model:{value:i.searchForm.claimPic1,callback:function(e){i.$set(i.searchForm,"claimPic1",e)},expression:"searchForm.claimPic1"}})],1)])],1)],1),i._v(" "),a("div",{staticClass:"info_tab_footer"},[i._v("共计:"+i._s(i.dataTotal)),a("div",{staticClass:"show_pager"},[a("Pager",{attrs:{total:i.dataTotal,sizes:i.sizes},on:{change:i.handlePageChange}})],1)])]),i._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(e){i.submitForm("ruleForm")}}},[i._v("确 定")]),i._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:i.closeMe}},[i._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=a},BFOC:function(e,t,i){"use strict";var a=i("G46U"),s=i("adj5");var n=function(e){i("7TVD"),i("17yh")},r=i("VU/8")(a.a,s.a,n,null,null);t.a=r.exports},G46U:function(e,t,i){"use strict";var a=i("mvHQ"),s=i.n(a),n=i("//Fk"),r=i.n(n),o=i("t5DY"),l=i("0xDb");t.a={name:"singleImageUpload",props:{value:[String,Array],title:{type:String,default:""},tip:{type:String,default:"（必须为jpg/png并且小于5M）"},size:{type:String,default:"mini"},showFileList:{type:Boolean,default:!1},limit:{type:Number,default:10},listtype:{type:String,default:"picture",enum:["text","picture","picture-card","application"]},disabled:{type:Boolean,default:!1},hidBut:{type:Boolean,default:!1},showBut:{type:Boolean}},computed:{imageUrl:function(){return this.value}},data:function(){return{dialogTxt:null,dialogImageUrl:"",dialogVisible:!1,tempUrl:"",dataObj:{token:"",key:""},upload:{key:"",policy:"",OSSAccessKeyId:"",success_action_status:"201",signature:""},uploadUrl:"",dir:"",filelist:[]}},watch:{value:{handler:function(e){if(this.showFileList){var t=Array.isArray(e)?e:e?e.split(","):[];t=t.filter(function(e){return e}),this.filelist=t.map(function(e){var t={},i="";return i=(i=e.split("/"))[i.length-1],t.url=e,t.name=i,t})}this.$emit("filelist",this.filelist)},immediate:!0},hidBut:function(){},disabled:function(){}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(o._15)("aflc").then(function(e){t.upload.OSSAccessKeyId=e.accessid,t.upload.policy=e.policy,t.upload.signature=e.signature,t.uploadUrl=e.host,t.dir=e.dir}).catch(function(e){console.log("get Policy ERror:",e)})},rmImage:function(){this.emitInput("")},onexceed:function(e,t){this.$message.error("最多上传 "+this.limit+" 张!")},handleRemove:function(e,t){this.filelist=t,this.emitInput()},random_string:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",i=t.length,a="",s=0;s<e;s++)a+=t.charAt(Math.floor(Math.random()*i));return a},emitInput:function(e){e&&this.filelist.push({url:e.url,name:e.name}),this.$emit("input",this.showFileList?this.filelist.map(function(e){return e.url}).join(","):e)},handleImageScucess:function(e){var t="",i="";-1!==e.indexOf("Location")&&(i=(i=(t=(t=e.match(/<Location>([^<]+)<\/Location>/m))?t[1]:"").split("/"))[i.length-1]),this.emitInput({url:t,name:i})},handleError:function(e){this.$emit("error",e)},beforeUpload:function(i){var a=this;this.fileInfo={},this.fileInfo=i,this.$emit("fileInfo",this.fileInfo);/(image|text|application)\/\w+/.test(i.type)&&/(jpe?g|png|plain|msword|vnd.ms-excel)/i.test(i.type),i.size;var e=i.name.match(/([^\.]+)$/);return e=e?"."+e[1]:"",new r.a(function(t,e){a.init().then(function(e){a.upload.key=a.dir+Object(l.k)(new Date,"{y}{m}{d}")+"/"+a.random_string()+"/"+i.name,t(!0)}).catch(function(e){a.$message.error("未知错误："+s()(e)),t(!1)})})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url;var t="";"txt"===(t=(t=(t=e.url.split("/"))[t.length-1].split("."))[t.length-1])||"doc"===t||"xls"===t||"zip"===t||"rar"===t?(this.dialogTxt=!0,window.open(e.url),console.log(e)):this.dialogVisible=!0}}}},I8BH:function(e,t){},"VT+v":function(e,t,i){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,i=e.target;console.log("page keydown:",t,i),13===t&&this.oldValue&&i.value!==this.oldValue&&(this.handleChange(i.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},ZdV2:function(e,t){},adj5:function(e,t,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box_container multimg",class:{hideuploadbtn:t.filelist.length>=t.limit||t.disabled}},[t.uploadUrl?i("el-upload",{attrs:{drag:"",data:t.upload,action:t.uploadUrl,multiple:!1,"show-file-list":t.showFileList,"file-list":t.filelist,"list-type":"picture",limit:t.limit,disabled:t.disabled,"before-upload":t.beforeUpload,"on-preview":t.handlePictureCardPreview,"on-error":t.handleError,"on-exceed":t.onexceed,"on-success":t.handleImageScucess,"on-remove":t.handleRemove}},[t._t("content",[i("el-button",{staticClass:"button",attrs:{size:t.size,type:"primary",disabled:t.disabled}},[t._v("点击上传")]),t._v(" "),t.tip?i("div",{staticClass:"upload__tip"},[t._v(t._s(t.tip))]):t._e()])],2):t._e(),t._v(" "),i("el-dialog",{attrs:{"custom-class":"singleimage2",visible:t.dialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};t.a=a},"co/t":function(e,t){},fX1U:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("oO2H"),s=i("7twG");var n=function(e){i("I8BH")},r=i("VU/8")(a.a,s.a,n,null,null);t.default=r.exports},juIs:function(e,t,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tms-pagenation"},[i("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[i("span",{staticClass:"first-page"})]),i("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[i("span",{staticClass:"prev-page"})]),t._v(" "),i("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),i("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),i("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[i("span",{staticClass:"next-page"})]),t._v(" "),i("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[i("span",{staticClass:"last-page"})]),t._v(" "),i("span",{staticClass:"tms-pagination__sizes"},[i("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=a},mj9Z:function(e,t,i){"use strict";t.e=function(e,t,i){return Object(a.a)({url:"/"+s+"/order/aflcOrderGoodsclaim/v1/listRecently",method:"post",data:{currentPage:e,pageSize:t,vo:i}})},t.d=function(e,t,i){return Object(a.a)({url:"/"+s+"/order/aflcOrder/v1/listClain",method:"post",data:{currentPage:e,pageSize:t,vo:i}})},t.a=function(e){return Object(a.a)({url:"/"+s+"/order/aflcOrderGoodsclaim/v1/GoodsclaimAll/"+e,method:"get"})},t.b=function(e){return Object(a.a)({url:"/"+s+"/order/aflcOrderGoodsfollowup/v1/GoodsfollowupAll/"+e,method:"get"})},t.c=function(e){return Object(a.a)({url:"/"+s+"/order/aflcOrderGoodsclaim/v1/updateDealStatus/"+e,method:"get"})},t.f=function(e){return Object(a.a)({url:"/"+s+"/order/aflcOrderGoodsclaim/v1/reportClaim",method:"post",data:e})},t.g=function(e){return Object(a.a)({url:"/"+s+"/order/aflcOrderGoodsfollowup/v1/add",method:"post",data:e})};var a=i("Vo7i"),s="aflc-order"},oO2H:function(e,t,i){"use strict";var a=i("0xDb"),s=i("mj9Z"),n=i("1onU"),r=i("BFOC"),o=i("t5DY"),l=i("0xDb");t.a={computed:{isShow:{get:function(){return this.centerDialogVisible},set:function(){}}},components:{Pager:n.a,Upload:r.a},props:{centerDialogVisible:{type:Boolean,default:!1}},data:function(){return{btnsize:"mini",sizes:[10,50,100],dataset:[],dataTotal:0,pagesize:10,page:1,totalCount:null,value:"",pickOption2:"",selected:[],optionsclaimType:[],options:[{value:0,label:"货主"},{value:1,label:"车主"}],form:{},rules:{reporterType:[{required:!0,message:"请输入上报人"}],claimPic1:[{required:!0,message:"至少上传一张图片"}]},pickerOptions2:{shortcuts:a.l},searchCreatTime1:+new Date,searchCreatTime:[],defaultTime:[Object(a.k)(+new Date-5184e6,"{y}-{m}-{d}"),Object(a.k)(new Date,"{y}-{m}-{d}")],formAllData:{orderSerial:"",startOrderDate:"",endOrderDate:"",shipperName:"",driverName:""},searchForm:{createTime:"",claimDes:"",claimPic1:"",reporterType:"",claimType:"",orderSerial:""}}},watch:{isShow:{handler:function(e){e&&this.firstblood()},immediate:!0}},mounted:function(){this.searchCreatTime=this.defaultTime,this.firstblood(),this.getclaimstatus()},methods:{firstblood:function(){var t=this;Object(s.d)(this.page,this.pagesize,this.formAllData).then(function(e){t.dataTotal=e.data.totalCount,t.dataset=e.data.list})},handleSearch:function(e){switch(e){case"search":this.searchCreatTime?(this.formAllData.startOrderDate=this.searchCreatTime?Object(a.k)(this.searchCreatTime[0],"{y}-{m}-{d}")+" 00:00:00":null,this.formAllData.endOrderDate=this.searchCreatTime?Object(a.k)(this.searchCreatTime[1],"{y}-{m}-{d}")+" 23:59:59":null):(this.formAllData.startOrderDate=null,this.formAllData.endOrderDate=null),this.firstblood();break;case"clear":this.formAllData={orderSerial:"",startTime:"",endTime:"",shipperName:"",driverName:""},this.firstblood()}},reset:function(){this.$refs.ruleForm.resetFields()},closeMe:function(e){this.$emit("close"),this.reset(),"function"==typeof e&&e()},getclaimstatus:function(){var t=this;Object(o.r)().then(function(e){e.data.map(function(e){t.optionsclaimType.push(e)})})},handlePageChange:function(e){this.page=e.pageNum,this.pagesize=e.pageSize,this.firstblood()},pushOrderSerial:function(e){this.$router.push({name:"订单详情",query:{orderSerial:e.orderSerial}})},changeCode:function(e){},getSelection:function(e){this.selected=e},clickDetails:function(e,t,i){this.$refs.multipleTable.toggleRowSelection(e)},submitForm:function(e){var i=this;if(this.selected.length)if(1<this.selected.length)this.$message({message:"每次只能登记一条数据",type:"warning"});else{if(""===this.searchForm.claimType&&""===this.searchForm.claimDes)return this.$message({message:"物损类型及物损描述至少选填一项！",type:"warning"}),!1;this.$refs[e].validate(function(e){if(!e)return!1;i.searchForm.createTime=Object(a.k)(i.searchCreatTime1,"{y}-{m}-{d} {h}:{i}:{s}"),i.searchForm.orderSerial=i.selected[0].orderSerial;var t=Object(l.i)({},i.searchForm);Object(s.f)(t).then(function(e){i.$message({message:"保存成功~",type:"success"}),i.closeMe(),i.$emit("success")}).catch(function(e){i.$message({type:"error",message:e.errorInfo||e.text||"未知错误，请重试~"}),i.loading=!1})})}else this.$message({message:"请选择要操作的项~",type:"warning"})}}}},t5DY:function(e,t,i){"use strict";t._10=function(t){return t=t||"",n.a.get("/"+r+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return n.a.get("/"+r+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(n.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(n.a)({url:"/"+r+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(n.a)({url:"/"+r+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(n.a)({url:"/"+o+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(n.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(n.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(n.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(n.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return n.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new s.a(function(e){e(window.UPLOADPOLICYDATA)}):n.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return n.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return n.a.get("/"+o+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(n.a)({url:"/"+o+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return n.a.get("/"+o+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return n.a.get("/"+o+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(n.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return n.a.get("/"+r+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return n.a.get("/"+r+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return n.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return n.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(n.a)({url:"/"+l+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(n.a)({url:"/"+r+"/system/user/v1/operate/staff",method:"post",data:e})};var a=i("//Fk"),s=i.n(a),n=i("Vo7i"),r="aflc-common",o="aflc-sm",l="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
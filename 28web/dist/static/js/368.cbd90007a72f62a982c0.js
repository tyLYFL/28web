webpackJsonp([368],{"1onU":function(e,t,a){"use strict";var n=a("VT+v"),i=a("juIs");var s=function(e){a("ZdV2"),a("co/t")},o=a("VU/8")(n.a,i.a,s,"data-v-695be8cd",null);t.a=o.exports},"7Ume":function(e,t,a){"use strict";var n=a("TEqA"),i=(a.n(n),a("1onU")),s=a("8S06"),o=a("0xDb");a("t5DY"),a("IdSN");t.a={data:function(){return{loading:!0,pickerOptions2:{shortcuts:o.l},btnsize:"mini",selectRowData:{},sizes:[20,50,100,400],tableDataAll:[],totalCount:null,dataTotal:0,pagesize:20,page:1,createTime:[],rechargeChannelList:[{code:"AF04702",name:"APP"},{code:"AF04703",name:"WEB"},{code:"AF04705",name:"TMS"}],rechargeWayList:[{code:null,name:"全部"},{code:"0",name:"支付宝"},{code:"1",name:"微信"}],userList:[{code:"AF00102",name:"车主"},{code:"AF00101",name:"货主"},{code:"AF00112",name:"区代"},{code:"AF00113",name:"专线承运商"}],formAllData:{mobile:null,rechargeChannel:null,rechargeWay:null,rechargeTime:null,rechargeSerial:null,userType:null}}},components:{Pager:i.a},mounted:function(){this.firstblood()},methods:{firstblood:function(){var t=this;this.loading=!0,Object(s.a)(this.page,this.pagesize,this.formAllData).then(function(e){t.dataTotal=e.data.totalCount,t.tableDataAll=e.data.list,t.tableDataAll.forEach(function(e){e.rechargeTime=Object(o.k)(e.rechargeTime,"{y}-{m}-{d} {h}:{i}:{s}")}),t.loading=!1})},getMoreInformation:function(){},handlePageChange:function(e){this.page=e.pageNum,this.pagesize=e.pageSize,this.firstblood()},cTime:function(e){this.formAllData.startRechargeTime=e[0],this.formAllData.endRechargeTime=e[1]},seach_data:function(){this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page,this.firstblood()},clearSearch:function(){this.createTime=null,this.formAllData={mobile:null,rechargeChannel:null,rechargeWay:null,rechargeTime:null,startRechargeTime:null,endRechargeTime:null,rechargeSerial:null,userType:null},1!=this.page&&(this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page),this.firstblood()},pushOrderSerial:function(e){this.$router.push({name:"货主详情",query:{userId:e.accountId}})},importExcel:function(){this.$message.info("正在导出中...");var n="";Object(s.b)(0,0,this.formAllData).then(function(e){var t=new Blob([e]);n=window.URL.createObjectURL(t);var a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("target","_blank"),a.setAttribute("download","充值明细.xls"),document.body.appendChild(a),a.click(),document.body.removeChild(a)})}}}},"8Kqj":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7Ume"),i=a("enFE");var s=function(e){a("loXj")},o=a("VU/8")(n.a,i.a,s,null,null);t.default=o.exports},"8S06":function(e,t,a){"use strict";t.a=function(e,t,a){return Object(n.a)({url:"/"+i+"/usercenter/aflcRecharge/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:a}})},t.b=function(e,t,a){return Object(n.a)({url:"/"+i+"/usercenter/aflcRecharge/v1/exportExcel",responseType:"blob",method:"post",data:{currentPage:e,pageSize:t,vo:a}})};var n=a("Vo7i"),i="aflc-uc"},IdSN:function(e,t,a){"use strict";t.a=function(e,t,a){return Object(n.a)({url:"/"+i+"/order/aflcOrderPayment/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:a}})};var n=a("Vo7i"),i="aflc-order"},TEqA:function(e,t){},"VT+v":function(e,t,a){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,a=e.target;console.log("page keydown:",t,a),13===t&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},ZdV2:function(e,t){},"co/t":function(e,t){},enFE:function(e,t,a){"use strict";var n={render:function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"identicalStyle clearfix transactionRecharge",staticStyle:{height:"100%"}},[n("el-form",{staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"电话号码"}},[n("el-input",{staticClass:"Input",attrs:{placeholder:"请输入内容",clearable:"",maxlength:"11"},model:{value:a.formAllData.mobile,callback:function(e){a.$set(a.formAllData,"mobile",e)},expression:"formAllData.mobile"}})],1),a._v(" "),n("el-form-item",{attrs:{label:"充值渠道"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:a.formAllData.rechargeChannel,callback:function(e){a.$set(a.formAllData,"rechargeChannel",e)},expression:"formAllData.rechargeChannel"}},a._l(a.rechargeChannelList,function(e){return n("el-option",{key:e.code,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),a._v(" "),n("el-form-item",{attrs:{label:"充值方式"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:a.formAllData.rechargeWay,callback:function(e){a.$set(a.formAllData,"rechargeWay",e)},expression:"formAllData.rechargeWay"}},a._l(a.rechargeWayList,function(e){return n("el-option",{key:e.code,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),a._v(" "),n("el-form-item",{attrs:{label:"充值时间"}},[n("el-date-picker",{attrs:{"is-range":"","unlink-panels":"",type:"daterange","picker-options":a.pickerOptions2,"range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"]},on:{change:a.cTime},model:{value:a.createTime,callback:function(e){a.createTime=e},expression:"createTime"}})],1),a._v(" "),n("el-form-item",{attrs:{label:"流水号"}},[n("el-input",{staticClass:"Input",attrs:{placeholder:"请输入内容",clearable:""},model:{value:a.formAllData.rechargeSerial,callback:function(e){a.$set(a.formAllData,"rechargeSerial",e)},expression:"formAllData.rechargeSerial"}})],1),a._v(" "),n("el-form-item",{attrs:{label:"账户类型"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:a.formAllData.userType,callback:function(e){a.$set(a.formAllData,"userType",e)},expression:"formAllData.userType"}},a._l(a.userList,function(e){return n("el-option",{key:e.code,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),a._v(" "),n("el-form-item",{staticClass:"fr"},[n("el-button",{attrs:{type:"primary",plain:"",size:a.btnsize,icon:"el-icon-search"},on:{click:a.seach_data}},[a._v("搜索")]),a._v(" "),n("el-button",{attrs:{type:"info",plain:"",size:a.btnsize,icon:"fontFamily aflc-icon-qingkong"},on:{click:a.clearSearch}},[a._v("清空")])],1)],1),a._v(" "),n("div",{staticClass:"classify_info"},[n("div",{staticClass:"btns_box"},[n("el-button",{attrs:{type:"primary",size:a.btnsize,icon:"el-icon-download",plain:""},on:{click:a.importExcel}},[a._v("导出Excel")])],1),a._v(" "),n("div",{staticClass:"info_news"},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",border:"",height:"100%","highlight-current-row":"",data:a.tableDataAll}},[n("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:a._u([{key:"default",fn:function(e){return[a._v("\n                         "+a._s((a.page-1)*a.pagesize+e.$index+1)+"\n                        ")]}}])}),a._v(" "),n("el-table-column",{attrs:{label:"用户账号",prop:"mobile",sortable:"","show-overflow-tooltip":""},scopedSlots:a._u([{key:"default",fn:function(t){return[n("h4",{staticClass:"needMoreInfo",on:{click:function(e){a.pushOrderSerial(t.row)}}},[a._v(a._s(t.row.mobile))])]}}])}),a._v(" "),n("el-table-column",{attrs:{label:"账户类型",prop:"userTypeName",sortable:"","show-overflow-tooltip":""}}),a._v(" "),n("el-table-column",{attrs:{label:"充值实收金额",prop:"rechargeSum",sortable:"","show-overflow-tooltip":""}}),a._v(" "),n("el-table-column",{attrs:{label:"充值到账金额",prop:"enterSum",sortable:"","show-overflow-tooltip":""}}),a._v(" "),n("el-table-column",{attrs:{label:"充值赠送",prop:"giveSum",sortable:"","show-overflow-tooltip":""}}),a._v(" "),n("el-table-column",{attrs:{label:"充值渠道",prop:"rechargeChannelName",sortable:"","show-overflow-tooltip":""}}),a._v(" "),n("el-table-column",{attrs:{label:"充值方式",prop:"rechargeWayName",sortable:"","show-overflow-tooltip":""}}),a._v(" "),n("el-table-column",{attrs:{label:"流水号",prop:"rechargeSerial",sortable:"","show-overflow-tooltip":"",width:"250"}}),a._v(" "),n("el-table-column",{attrs:{label:"支付单号",prop:"tradeNo",sortable:"","show-overflow-tooltip":"",width:"250"}}),a._v(" "),n("el-table-column",{attrs:{label:"充值时间",prop:"rechargeTime",sortable:"",width:"200","show-overflow-tooltip":""}})],1),a._v(" "),n("div",{staticClass:"info_tab_footer"},[a._v("共计:"+a._s(a.dataTotal)+" "),n("div",{staticClass:"show_pager"},[n("Pager",{ref:"pager",attrs:{total:a.dataTotal,sizes:a.sizes},on:{change:a.handlePageChange}})],1)])],1)])],1)},staticRenderFns:[]};t.a=n},juIs:function(e,t,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=n},loXj:function(e,t){},t5DY:function(e,t,a){"use strict";t._10=function(t){return t=t||"",s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(s.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(s.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(s.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new i.a(function(e){e(window.UPLOADPOLICYDATA)}):s.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return s.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return s.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(s.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return s.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return s.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(s.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(s.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:e})};var n=a("//Fk"),i=a.n(n),s=a("Vo7i"),o="aflc-common",r="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
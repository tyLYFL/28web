webpackJsonp([405],{"1onU":function(t,e,a){"use strict";var n=a("VT+v"),i=a("juIs");var s=function(t){a("ZdV2"),a("co/t")},c=a("VU/8")(n.a,i.a,s,"data-v-695be8cd",null);e.a=c.exports},"2arc":function(t,e,a){"use strict";var i=a("ahYp"),n=a("t5DY"),s=a("1onU"),c=a("0xDb");e.a={data:function(){return{loading:!1,pickerOptions2:{shortcuts:c.l},btnsize:"mini",selectRowData:[],sizes:[20,50,100,400],pagesize:20,page:1,totalCount:null,dataTotal:0,tableDataAll:[],formAllData:{accountId:this.$route.query.Id,recordType:"0",serial:null,tradeStartTime:null,tradeEndTime:null,entryAccountStatus:null,entryAccountStartTime:null,entryAccountEndTime:null},exchangeTypeList:[{name:"充值",code:"AF01413"},{name:"提现",code:"AF01512"},{name:"运费收入",code:"AF01408"},{name:"支付代收款",code:"AF01545"}],enterAccountTypeList:[],exchange:[],created:[],agencyOrLineName:sessionStorage.getItem("transaCarrierPrice"),waitBalance:0}},props:{isvisible:{type:Boolean,default:!1},cashtype:{type:String,default:null}},components:{Pager:s.a},watch:{isvisible:{handler:function(t,e){t&&(this.getMoreInformation(),this.firstblood())},immediate:!0}},methods:{getMoreInformation:function(){var e=this;Object(n._12)("AF098").then(function(t){e.enterAccountTypeList=t.data}),Object(i.f)(this.$route.query.Id,"AF00112").then(function(t){e.waitBalance=t.data.waitBalance})},firstblood:function(){var e=this;this.loading=!0,Object(i.c)(this.page,this.pagesize,this.formAllData).then(function(t){e.dataTotal=t.data.totalCount,e.tableDataAll=t.data.list,e.tableDataAll.forEach(function(t){t.tradeTime=Object(c.k)(t.tradeTime,"{y}-{m}-{d} {h}:{i}:{s}"),t.entryAccountTime=Object(c.k)(t.entryAccountTime,"{y}-{m}-{d} {h}:{i}:{s}")}),e.loading=!1})},getData_query:function(){this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page,this.firstblood()},clearSearch:function(){this.formAllData={accountId:this.$route.query.Id,recordType:"0",serial:null,tradeStartTime:null,tradeEndTime:null,entryAccountStatus:null,entryAccountStartTime:null,entryAccountEndTime:null},1!=this.page&&(this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page),this.created=[],this.exchange=[],this.firstblood()},eTime:function(t){t?(this.formAllData.tradeStartTime=t[0],this.formAllData.tradeEndTime=t[1]):(this.formAllData.tradeStartTime=null,this.formAllData.tradeEndTime=null)},cTime:function(t){t?(this.formAllData.entryAccountStartTime=t[0],this.formAllData.entryAccountEndTime=t[1]):(this.formAllData.entryAccountStartTime=null,this.formAllData.entryAccountEndTime=null)},importExcel:function(){var n="";this.$message.info("正在导出中..."),Object(i.d)(0,0,this.formAllData).then(function(t){var e=new Blob([t]);n=window.URL.createObjectURL(e);var a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("target","_blank"),a.setAttribute("download","区代账户概况待入账金额.xls"),document.body.appendChild(a),a.click(),document.body.removeChild(a)})},handlePageChange:function(t){this.page=t.pageNum,this.pagesize=t.pageSize,this.firstblood()}}}},"TSp+":function(t,e){},"VT+v":function(t,e,a){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,a=t.target;console.log("page keydown:",e,a),13===e&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(t){console.log("d",this.inputval),t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},ZdV2:function(t,e){},ahYp:function(t,e,a){"use strict";e.e=function(t,e,a,n){return Object(i.a)({url:"/"+s+"/usercenter/aflcMywallet/v1/mywalletTotal/"+n,method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.f=function(t,e){return Object(i.a)({url:"/"+s+"/usercenter/aflcMywallet/v1/findAflcMywalletByAccountId/"+t+"/"+e,method:"get"})},e.c=function(t,e,a){return Object(i.a)({url:"/"+s+"/usercenter/aflcMywalletDetail/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.d=function(t,e,a){return Object(i.a)({url:"/"+s+"/usercenter/aflcMywalletDetail/v1/listExcel",responseType:"blob",method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.a=function(t,e,a){return Object(i.a)({url:"/"+s+"/usercenter/aflcLclExtractCash/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.b=function(t,e,a){return Object(i.a)({url:"/"+s+"/usercenter/aflcLclExtractCash/v1/listExcel",responseType:"blob",method:"post",data:{currentPage:t,pageSize:e,vo:a}})};var i=a("Vo7i"),s="aflc-uc"},"co/t":function(t,e){},itnq:function(t,e,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"identicalStyle",staticStyle:{height:"100%"}},[a("el-form",{staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"订单号"}},[a("el-input",{attrs:{clearable:""},model:{value:e.formAllData.serial,callback:function(t){e.$set(e.formAllData,"serial",t)},expression:"formAllData.serial"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"交易类型"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formAllData.tradeType,callback:function(t){e.$set(e.formAllData,"tradeType",t)},expression:"formAllData.tradeType"}},e._l(e.exchangeTypeList,function(t){return a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"交易时间"}},[a("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","picker-options":e.pickerOptions2,"range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},on:{change:e.eTime},model:{value:e.exchange,callback:function(t){e.exchange=t},expression:"exchange"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入账状态"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formAllData.entryAccountStatus,callback:function(t){e.$set(e.formAllData,"entryAccountStatus",t)},expression:"formAllData.entryAccountStatus"}},e._l(e.enterAccountTypeList,function(t){return a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"入账时间"}},[a("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","picker-options":e.pickerOptions2,"range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},on:{change:e.cTime},model:{value:e.created,callback:function(t){e.created=t},expression:"created"}})],1),e._v(" "),a("el-form-item",{staticClass:"fr"},[a("el-button",{attrs:{type:"primary",plain:"",size:e.btnsize,icon:"el-icon-search"},on:{click:e.getData_query}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"info",plain:"",size:e.btnsize,icon:"fontFamily aflc-icon-qingkong"},on:{click:e.clearSearch}},[e._v("清空")])],1)],1),e._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"btns_box"},[e._v("\n        区代名称："),a("span",{staticClass:"pr50 titleName"},[e._v(e._s(e.agencyOrLineName?e.agencyOrLineName:""))]),e._v("待入账总金额："),a("span",{staticClass:"pr50"},[e._v("0")]),e._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary",plain:"",icon:"el-icon-download",size:e.btnsize},on:{click:e.importExcel}},[e._v("导出Excel")])],1),e._v(" "),a("div",{staticClass:"info_news"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",border:"",height:"99%","highlight-current-row":"",data:e.tableDataAll,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s((e.page-1)*e.pagesize+t.$index+1)+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单号",prop:"serial",sortable:"","show-overflow-tooltip":"",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"交易类型",prop:"tradeTypeName",sortable:"","show-overflow-tooltip":"",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",prop:"tradeTime",sortable:"","show-overflow-tooltip":"",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"待入账金额（元）",prop:"tradeAmount",sortable:"","show-overflow-tooltip":"",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"入账状态",prop:"entryAccountStatusName",sortable:"","show-overflow-tooltip":"",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"入账时间",prop:"entryAccountTime",sortable:"","show-overflow-tooltip":"",width:""}})],1)],1),e._v(" "),a("div",{staticClass:"info_tab_footer"},[e._v("共计:"+e._s(e.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:e.dataTotal,sizes:e.sizes},on:{change:e.handlePageChange}})],1)])])],1)},staticRenderFns:[]};e.a=n},juIs:function(t,e,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),e._v(" "),a("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},nativeOn:{keydown:function(t){return e.handleKeyup(t)}},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),e._v(" "),a("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[a("span",{staticClass:"last-page"})]),e._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizesChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}))],1)])},staticRenderFns:[]};e.a=n},"nwm+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2arc"),i=a("itnq");var s=function(t){a("TSp+")},c=a("VU/8")(n.a,i.a,s,null,null);e.default=c.exports},t5DY:function(t,e,a){"use strict";e._10=function(e){return e=e||"",s.a.get("/"+c+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return s.a.get("/"+c+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(s.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(s.a)({url:"/"+c+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(s.a)({url:"/"+c+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(s.a)({url:"/"+o+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(s.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(s.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(s.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(s.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return s.a.get("/"+c+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new i.a(function(t){t(window.UPLOADPOLICYDATA)}):s.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return s.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return s.a.get("/"+o+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(s.a)({url:"/"+o+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return s.a.get("/"+o+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return s.a.get("/"+o+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(s.a)({url:"/"+c+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return s.a.get("/"+c+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return s.a.get("/"+c+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return s.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return s.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(s.a)({url:"/"+r+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(s.a)({url:"/"+c+"/system/user/v1/operate/staff",method:"post",data:t})};var n=a("//Fk"),i=a.n(n),s=a("Vo7i"),c="aflc-common",o="aflc-sm",r="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
webpackJsonp([391],{"+7w3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("OQ5l"),i=n("4Qkl");var s=function(e){n("At68")},r=n("VU/8")(a.a,i.a,s,"data-v-2d5df7f4",null);t.default=r.exports},"1onU":function(e,t,n){"use strict";var a=n("VT+v"),i=n("juIs");var s=function(e){n("ZdV2"),n("co/t")},r=n("VU/8")(a.a,i.a,s,"data-v-695be8cd",null);t.a=r.exports},"4Qkl":function(e,t,n){"use strict";var a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"identicalStyle tadadeAreaCarrier"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:n.searchInfo}},[a("el-form-item",{attrs:{label:"承运商类型",prop:"tradeCarrierType"}},[a("el-select",{attrs:{placeholder:"请选择承运商类型"},model:{value:n.searchInfo.tradeCarrierType,callback:function(e){n.$set(n.searchInfo,"tradeCarrierType",e)},expression:"searchInfo.tradeCarrierType"}},n._l(n.optionsTradeCarrierType,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1),n._v(" "),a("el-form-item",{attrs:{label:"商圈承运商",prop:"tradeLineCarrierName"}},[a("el-input",{attrs:{clearable:""},model:{value:n.searchInfo.tradeLineCarrierName,callback:function(e){n.$set(n.searchInfo,"tradeLineCarrierName",e)},expression:"searchInfo.tradeLineCarrierName"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"商圈",prop:"tradeName"}},[a("el-input",{attrs:{clearable:""},model:{value:n.searchInfo.tradeName,callback:function(e){n.$set(n.searchInfo,"tradeName",e)},expression:"searchInfo.tradeName"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"到达地",prop:"endAreaName"}},[a("el-input",{model:{value:n.searchInfo.endAreaName,callback:function(e){n.$set(n.searchInfo,"endAreaName",e)},expression:"searchInfo.endAreaName"}})],1),n._v(" "),a("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:"",size:n.btnsize},on:{click:function(e){n.handleSearch("search")}}},[n._v("搜索")]),n._v(" "),a("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:n.btnsize,plain:""},on:{click:function(e){n.handleSearch("clear")}}},[n._v("清空")])],1)],1),n._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"btns_box"},[a("el-button",{directives:[{name:"has",rawName:"v-has:SERVICE_LTL_AREA_CARRIER_ADD",arg:"SERVICE_LTL_AREA_CARRIER_ADD"}],attrs:{type:"primary",icon:"el-icon-circle-plus",plain:"",size:n.btnsize},on:{click:function(e){n.handleClick("new")}}},[n._v("新增")])],1),n._v(" "),a("div",{staticClass:"info_news"},[a("el-table",{directives:[{name:"has",rawName:"v-has:SERVICE_LTL_AREA_CARRIER_LIST",arg:"SERVICE_LTL_AREA_CARRIER_LIST"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:n.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"selection-change":n.getinfomation,"row-click":n.clickDetails}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),n._v(" "),a("el-table-column",{attrs:{label:"序号",sortable:"",width:"60"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                            "+n._s((n.page-1)*n.pagesize+e.$index+1)+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"tradeLineCarrierName",label:"商圈承运商"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("h4",{staticClass:"moreInfo",on:{click:function(e){n.handleInfo(t.row)}}},[n._v(n._s(t.row.tradeLineCarrierName))])]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"tradeCarrierTypeName","show-overflow-tooltip":!0,sortable:"",label:"承运商类型"}}),n._v(" "),a("el-table-column",{attrs:{prop:"tradeName","show-overflow-tooltip":!0,sortable:"",label:"商圈"}}),n._v(" "),a("el-table-column",{attrs:{prop:"endAreaName","show-overflow-tooltip":!0,sortable:"",label:"到达地"}}),n._v(" "),a("el-table-column",{attrs:{prop:"aflcTradeCarrierPrice","show-overflow-tooltip":!0,sortable:"",label:"标准货物分类价格",width:"250"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("div",{staticClass:"vHtml",domProps:{innerHTML:n._s(e.row.aflcTradeCarrierPrice)}})]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"lowerPrice",sortable:"",label:"最低一票收费",width:"120"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                            "+n._s(e.row.lowerPrice+"元")+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"transportAging",sortable:"",label:"运输时效",width:"120"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                            "+n._s(e.row.transportAging+"小时")+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"startTime",sortable:"",label:"有效开始日期",width:"160"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                            "+n._s(n._f("parseTime")(e.row.startTime,"{y}-{m}-{d}"))+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"endTime",sortable:"",label:"有效结束日期",width:"160"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                            "+n._s(n._f("parseTime")(e.row.endTime,"{y}-{m}-{d}"))+"\n                        ")]}}])})],1)],1)]),n._v(" "),a("div",{directives:[{name:"has",rawName:"v-has:SERVICE_LTL_AREA_CARRIER_LIST",arg:"SERVICE_LTL_AREA_CARRIER_LIST"}],staticClass:"info_tab_footer"},[n._v("共计:"+n._s(n.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:n.dataTotal},on:{change:n.handlePageChange}})],1)])],1)},staticRenderFns:[]};t.a=a},AVWN:function(e,t,n){"use strict";t.f=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcTradeArea/v1/tradeList/"+e,method:"get"})},t.g=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/addTrade",method:"post",data:e})},t.d=function(e,t,n){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/importlistTrade",method:"post",data:{currentPage:e,pageSize:t,vo:n}})},t.e=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/enableOrDisableTrade",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/areaCodeTrade?areaCodeTrade="+e,method:"get"})},t.h=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcTradeCarrier/v1/add",method:"post",data:e})},t.b=function(e,t,n){return Object(a.a)({url:"/"+i+"/usercenter/aflcTradeCarrier/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:n}})},t.a=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcTradeCarrier/v1/"+e,method:"get"})};var a=n("Vo7i"),i="aflc-uc"},At68:function(e,t){},OQ5l:function(e,t,n){"use strict";var a=n("AVWN"),i=n("t5DY"),s=n("1onU");t.a={props:{isvisible:{type:Boolean,default:!1}},components:{Pager:s.a},data:function(){return{btnsize:"mini",loading:!1,optionsTradeCarrierType:[{name:"全部",code:""}],sizes:[20,50,100,400],pagesize:20,page:1,dataTotal:0,searchInfo:{tradeCarrierType:"",tradeName:"",tradeLineCarrierName:"",endAreaCode:"",endAreaName:""},tableData:[],checkedinformation:[]}},watch:{isvisible:{handler:function(e,t){e&&this.firstblood()},immediate:!0}},created:function(){},mounted:function(){this.getParamse()},beforeDestroy:function(){},methods:{handlePageChange:function(e){this.page=e.pageNum,this.pagesize=e.pageSize,this.firstblood()},getParamse:function(){var t=this;Object(i.R)().then(function(e){t.optionsTradeCarrierType=t.optionsTradeCarrierType.concat(e.data)})},firstblood:function(){var t=this;this.loading=!0,Object(a.b)(this.page,this.pagesize,this.searchInfo).then(function(e){t.tableData=e.data.list,t.dataTotal=e.data.totalCount,t.loading=!1}).catch(function(e){t.loading=!1})},handleSearch:function(e){"clear"==e&&(this.searchInfo={tradeCarrierType:"",tradeName:"",tradeLineCarrierName:"",endAreaCode:"",endAreaName:""},this.$refs.ruleForm.resetFields()),1!=this.page&&(this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page),this.firstblood()},handleClick:function(e){switch(e){case"new":this.$router.push({name:"发物流新增商圈承运商"})}},getinfomation:function(e){this.checkedinformation=e},clickDetails:function(e,t,n){this.$refs.multipleTable.toggleRowSelection(e)},handleInfo:function(e){this.$router.push({name:"发物流新增商圈承运商",query:{tradeId:e.id,ifrevise:"1"}})}}}},"VT+v":function(e,t,n){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,n=e.target;console.log("page keydown:",t,n),13===t&&this.oldValue&&n.value!==this.oldValue&&(this.handleChange(n.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},ZdV2:function(e,t){},"co/t":function(e,t){},juIs:function(e,t,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tms-pagenation"},[n("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[n("span",{staticClass:"first-page"})]),n("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[n("span",{staticClass:"prev-page"})]),t._v(" "),n("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),n("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),n("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[n("span",{staticClass:"next-page"})]),t._v(" "),n("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[n("span",{staticClass:"last-page"})]),t._v(" "),n("span",{staticClass:"tms-pagination__sizes"},[n("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=a},t5DY:function(e,t,n){"use strict";t._10=function(t){return t=t||"",s.a.get("/"+r+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return s.a.get("/"+r+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(s.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(s.a)({url:"/"+r+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(s.a)({url:"/"+r+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(s.a)({url:"/"+o+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(s.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(s.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(s.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(s.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return s.a.get("/"+r+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new i.a(function(e){e(window.UPLOADPOLICYDATA)}):s.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return s.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return s.a.get("/"+o+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(s.a)({url:"/"+o+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return s.a.get("/"+o+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return s.a.get("/"+o+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(s.a)({url:"/"+r+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return s.a.get("/"+r+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return s.a.get("/"+r+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return s.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return s.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(s.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(s.a)({url:"/"+r+"/system/user/v1/operate/staff",method:"post",data:e})};var a=n("//Fk"),i=n.n(a),s=n("Vo7i"),r="aflc-common",o="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
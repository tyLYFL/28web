webpackJsonp([392],{"1onU":function(t,e,n){"use strict";var a=n("VT+v"),i=n("juIs");var s=function(t){n("ZdV2"),n("co/t")},o=n("VU/8")(a.a,i.a,s,"data-v-695be8cd",null);e.a=o.exports},I8NA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gVaa"),i=n("nWQM");var s=function(t){n("IJDG")},o=n("VU/8")(a.a,i.a,s,"data-v-b6c83698",null);e.default=o.exports},IJDG:function(t,e){},LbX9:function(t,e,n){"use strict";e.f=function(t){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/add",method:"post",data:t})},e.c=function(t,e,n){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/importlist",method:"post",data:{currentPage:t,pageSize:e,vo:n}})},e.d=function(t){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/enableOrDisable",method:"post",data:t})},e.b=function(t){return Object(a.a)({url:"/"+i+"/usercenter/aflcIncrementPrice/v1/areaCode?areaCode="+t,method:"get"})},e.g=function(t){return Object(a.a)({url:"/"+i+"/usercenter/aflcTransportRange/v1/LineAdd",method:"post",data:t})},e.e=function(t,e,n){return Object(a.a)({url:"/"+i+"/usercenter/aflcTransportRange/v1/LineCarrierImplist",method:"post",data:{currentPage:t,pageSize:e,vo:n}})},e.a=function(t){return Object(a.a)({url:"/"+i+"/usercenter/aflcTransportRange/v1/transportRangeLine/"+t,method:"get"})};var a=n("Vo7i"),i="aflc-uc"},"VT+v":function(t,e,n){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,n=t.target;console.log("page keydown:",e,n),13===e&&this.oldValue&&n.value!==this.oldValue&&(this.handleChange(n.value),this.oldValue="")},jumpTo:function(t){console.log("d",this.inputval),t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},ZdV2:function(t,e){},"co/t":function(t,e){},gVaa:function(t,e,n){"use strict";var a=n("LbX9"),i=n("t5DY"),s=n("1onU");e.a={props:{isvisible:{type:Boolean,default:!1}},components:{Pager:s.a},filters:{},data:function(){return{btnsize:"mini",loading:!1,sizes:[20,50,100,400],pagesize:20,page:1,dataTotal:0,searchInfo:{carrierType:"",carrierName:"",endLocation:"",startLocation:""},tableData:[],checkedinformation:[],optionsTradeCarrierType:[{name:"全部",code:""}]}},watch:{isvisible:{handler:function(t,e){t&&this.firstblood()},immediate:!0}},created:function(){},mounted:function(){this.getParamse()},beforeDestroy:function(){},methods:{getParamse:function(){var e=this;Object(i.R)().then(function(t){e.optionsTradeCarrierType=e.optionsTradeCarrierType.concat(t.data)})},handlePageChange:function(t){this.page=t.pageNum,this.pagesize=t.pageSize,this.firstblood()},firstblood:function(){var e=this;this.loading=!0,Object(a.e)(this.page,this.pagesize,this.searchInfo).then(function(t){e.tableData=t.data.list,e.dataTotal=t.data.totalCount,e.loading=!1}).catch(function(t){e.loading=!1})},handleSearch:function(t){"clear"==t&&(this.searchInfo={carrierType:"",carrierName:"",endLocation:"",startLocation:""}),1!=this.page&&(this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page),this.firstblood()},handleClick:function(t){switch(t){case"new":this.$router.push({name:"发物流新增线路承运商"})}},getinfomation:function(t){this.checkedinformation=t},clickDetails:function(t,e,n){this.$refs.multipleTable.toggleRowSelection(t)},handleInfo:function(t){this.$router.push({name:"发物流新增线路承运商",query:{lineId:t.id,ifrevise:"1"}})}}}},juIs:function(t,e,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tms-pagenation"},[n("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[n("span",{staticClass:"first-page"})]),n("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[n("span",{staticClass:"prev-page"})]),e._v(" "),n("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),n("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},nativeOn:{keydown:function(t){return e.handleKeyup(t)}},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),n("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[n("span",{staticClass:"next-page"})]),e._v(" "),n("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[n("span",{staticClass:"last-page"})]),e._v(" "),n("span",{staticClass:"tms-pagination__sizes"},[n("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizesChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:t}})}))],1)])},staticRenderFns:[]};e.a=a},nWQM:function(t,e,n){"use strict";var a={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"identicalStyle creatQRCode"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:n.searchInfo}},[a("el-form-item",{attrs:{label:"承运商类型",prop:"carrierType"}},[a("el-select",{attrs:{placeholder:"请选择承运商类型"},model:{value:n.searchInfo.carrierType,callback:function(t){n.$set(n.searchInfo,"carrierType",t)},expression:"searchInfo.carrierType"}},n._l(n.optionsTradeCarrierType,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.code}})}))],1),n._v(" "),a("el-form-item",{attrs:{label:"线路承运商",prop:"carrierName"}},[a("el-input",{attrs:{clearable:""},model:{value:n.searchInfo.carrierName,callback:function(t){n.$set(n.searchInfo,"carrierName",t)},expression:"searchInfo.carrierName"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"出发地",prop:"startLocation"}},[a("el-input",{model:{value:n.searchInfo.startLocation,callback:function(t){n.$set(n.searchInfo,"startLocation",t)},expression:"searchInfo.startLocation"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"到达地",prop:"endLocation"}},[a("el-input",{model:{value:n.searchInfo.endLocation,callback:function(t){n.$set(n.searchInfo,"endLocation",t)},expression:"searchInfo.endLocation"}})],1),n._v(" "),a("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:"",size:n.btnsize},on:{click:function(t){n.handleSearch("search")}}},[n._v("搜索")]),n._v(" "),a("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:n.btnsize,plain:""},on:{click:function(t){n.handleSearch("clear")}}},[n._v("清空")])],1)],1),n._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"btns_box"},[a("el-button",{directives:[{name:"has",rawName:"v-has:SERVICE_LTL_RANGE_CARRIER_ADD",arg:"SERVICE_LTL_RANGE_CARRIER_ADD"}],attrs:{type:"primary",icon:"el-icon-circle-plus",plain:"",size:n.btnsize},on:{click:function(t){n.handleClick("new")}}},[n._v("新增")])],1),n._v(" "),a("div",{staticClass:"info_news"},[a("el-table",{directives:[{name:"has",rawName:"v-has:SERVICE_LTL_RANGE_CARRIER_LIST",arg:"SERVICE_LTL_RANGE_CARRIER_LIST"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:n.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"selection-change":n.getinfomation,"row-click":n.clickDetails}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),n._v(" "),a("el-table-column",{attrs:{label:"序号",sortable:"",width:"60"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n                            "+n._s((n.page-1)*n.pagesize+t.$index+1)+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"carrierName",label:"线路承运商",width:"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("h4",{staticClass:"moreInfo",on:{click:function(t){n.handleInfo(e.row)}}},[n._v(n._s(e.row.carrierName))])]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"carrierTypeName","show-overflow-tooltip":!0,sortable:"",label:"承运商类型"}}),n._v(" "),a("el-table-column",{attrs:{prop:"startAreaName","show-overflow-tooltip":!0,sortable:"",label:"出发地"}}),n._v(" "),a("el-table-column",{attrs:{prop:"endAreaName","show-overflow-tooltip":!0,sortable:"",label:"到达地"}}),n._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"lightGoods",sortable:"",label:"轻货",width:"250"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("div",{staticClass:"vHtml",domProps:{innerHTML:n._s(t.row.lightGoods)}})]}}])}),n._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"weightGoods",sortable:"",label:"重货",width:"250"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("div",{staticClass:"vHtml",domProps:{innerHTML:n._s(t.row.weightGoods)}})]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"lowerPrice",sortable:"",label:"最低一票收费",width:"120"}}),n._v(" "),a("el-table-column",{attrs:{prop:"transportAging",sortable:"",label:"运输时效",width:"120"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n                            "+n._s(n._f("dataParams")(t.row.transportAging))+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"carrierStartTime",sortable:"",label:"有效开始日期",width:"160"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n                            "+n._s(n._f("parseTime")(t.row.carrierStartTime,"{y}-{m}-{d}"))+"\n                        ")]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"carrierEndTime",sortable:"",label:"有效结束日期",width:"160"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n                            "+n._s(n._f("parseTime")(t.row.carrierEndTime,"{y}-{m}-{d}"))+"\n                        ")]}}])})],1)],1)]),n._v(" "),a("div",{directives:[{name:"has",rawName:"v-has:SERVICE_LTL_RANGE_CARRIER_LIST",arg:"SERVICE_LTL_RANGE_CARRIER_LIST"}],staticClass:"info_tab_footer"},[n._v("共计:"+n._s(n.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:n.dataTotal,sizes:n.sizes},on:{change:n.handlePageChange}})],1)])],1)},staticRenderFns:[]};e.a=a},t5DY:function(t,e,n){"use strict";e._10=function(e){return e=e||"",s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(s.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(s.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(s.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new i.a(function(t){t(window.UPLOADPOLICYDATA)}):s.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return s.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return s.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(s.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return s.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return s.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(s.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(s.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:t})};var a=n("//Fk"),i=n.n(a),s=n("Vo7i"),o="aflc-common",r="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
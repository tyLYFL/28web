webpackJsonp([453],{"1onU":function(e,t,a){"use strict";var l=a("VT+v"),i=a("juIs");var s=function(e){a("ZdV2"),a("co/t")},n=a("VU/8")(l.a,i.a,s,"data-v-695be8cd",null);t.a=n.exports},"VT+v":function(e,t,a){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,a=e.target;console.log("page keydown:",t,a),13===t&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},ZdV2:function(e,t){},Zvqa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("zAUn"),i=a("fqaT");var s=function(e){a("yAyZ")},n=a("VU/8")(l.a,i.a,s,"data-v-716e939d",null);t.default=n.exports},"co/t":function(e,t){},fqaT:function(e,t,a){"use strict";var l={render:function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"identicalStyle allCompnent"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:a.listSystemObj.vo}},[l("el-form-item",{attrs:{label:"中转单状态",prop:"waybillStatus"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:a.listSystemObj.vo.waybillStatus,callback:function(e){a.$set(a.listSystemObj.vo,"waybillStatus",e)},expression:"listSystemObj.vo.waybillStatus"}},a._l(a.optionsCarriersWaybill,function(e){return l("el-option",{key:e.name,attrs:{label:e.name,value:e.code}})}))],1),a._v(" "),l("el-form-item",{attrs:{label:"专线承运商",prop:"carrierName"}},[l("el-input",{attrs:{clearable:""},model:{value:a.listSystemObj.vo.carrierName,callback:function(e){a.$set(a.listSystemObj.vo,"carrierName",e)},expression:"listSystemObj.vo.carrierName"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"区代",prop:"agencyName"}},[l("el-input",{attrs:{clearable:""},model:{value:a.listSystemObj.vo.agencyName,callback:function(e){a.$set(a.listSystemObj.vo,"agencyName",e)},expression:"listSystemObj.vo.agencyName"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"区代物流公司",prop:"agencyCompanyName"}},[l("el-input",{attrs:{clearable:""},model:{value:a.listSystemObj.vo.agencyCompanyName,callback:function(e){a.$set(a.listSystemObj.vo,"agencyCompanyName",e)},expression:"listSystemObj.vo.agencyCompanyName"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"到货地",prop:"endAddress"}},[l("el-input",{attrs:{clearable:""},model:{value:a.listSystemObj.vo.endAddress,callback:function(e){a.$set(a.listSystemObj.vo,"endAddress",e)},expression:"listSystemObj.vo.endAddress"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"区代运单号",prop:"waybillNo"}},[l("el-input",{attrs:{clearable:""},model:{value:a.listSystemObj.vo.waybillNo,callback:function(e){a.$set(a.listSystemObj.vo,"waybillNo",e)},expression:"listSystemObj.vo.waybillNo"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"中转订单号",prop:"outsourceId"}},[l("el-input",{attrs:{clearable:""},model:{value:a.listSystemObj.vo.outsourceId,callback:function(e){a.$set(a.listSystemObj.vo,"outsourceId",e)},expression:"listSystemObj.vo.outsourceId"}})],1),a._v(" "),l("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:"",size:a.btnsize},on:{click:function(e){a.handleSearch("search")}}},[a._v("搜索")]),a._v(" "),l("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:a.btnsize,plain:""},on:{click:function(e){a.handleSearch("clear")}}},[a._v("清空")])],1)],1),a._v(" "),l("div",{staticClass:"classify_info"},[l("div",{staticClass:"btns_box"},[l("el-button",{attrs:{type:"primary",plain:"",size:a.btnsize},on:{click:function(e){a.handleClick("depart")}}},[a._v("代专线操作发车")]),a._v(" "),l("el-button",{attrs:{type:"primary",plain:"",size:a.btnsize},on:{click:function(e){a.handleClick("arrive")}}},[a._v("代专线操作到达")]),a._v(" "),l("el-button",{attrs:{type:"primary",plain:"",size:a.btnsize},on:{click:function(e){a.handleClick("sign")}}},[a._v("代专线操作签收")])],1),a._v(" "),l("div",{staticClass:"info_news"},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"selection-change":a.getSelection}},[l("el-table-column",{attrs:{label:"选择",type:"selection",width:"50"}}),a._v(" "),l("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:a._u([{key:"default",fn:function(e){return[a._v("\n                        "+a._s((a.listSystemObj.currentPage-1)*a.listSystemObj.pageSize+e.$index+1)+"\n                    ")]}}])}),a._v(" "),l("el-table-column",{attrs:{sortable:"",label:"专线运单号",prop:"waybillNo","show-overflow-tooltip":!0,"min-width":"250"},scopedSlots:a._u([{key:"default",fn:function(t){return[l("h4",{staticClass:"needMoreInfo",on:{click:function(e){a.handleClick("details",t.row)}}},[a._v(a._s(t.row.waybillNo))])]}}])}),a._v(" "),l("el-table-column",{attrs:{prop:"outsourceId",sortable:"",label:"平台中转单号","min-width":"250"}}),a._v(" "),l("el-table-column",{attrs:{prop:"carrierName",sortable:"",label:"专线承运商","min-width":"150"}}),a._v(" "),l("el-table-column",{attrs:{prop:"carrierServiceMobile",sortable:"","min-width":"180",label:"专线承运商客服电话"}}),a._v(" "),l("el-table-column",{attrs:{prop:"agencyName",sortable:"","min-width":"150",label:"区代"}}),a._v(" "),l("el-table-column",{attrs:{prop:"agencyCompanyName",sortable:"","min-width":"200",label:"区代物流公司"}}),a._v(" "),l("el-table-column",{attrs:{prop:"agencyMobile",sortable:"","min-width":"150",label:"区代客服电话"}}),a._v(" "),l("el-table-column",{attrs:{prop:"waybillStatusName",sortable:"","min-width":"150",label:"运单状态"}}),a._v(" "),l("el-table-column",{attrs:{prop:"endAddress",sortable:"","min-width":"150",label:"收货地"}}),a._v(" "),l("el-table-column",{attrs:{prop:"goodsTypeName",sortable:"","min-width":"150",label:"货物名称"}}),a._v(" "),l("el-table-column",{attrs:{prop:"goodsVolume",sortable:"","min-width":"150",label:"体积(立方)"}}),a._v(" "),l("el-table-column",{attrs:{prop:"goodsWeight",sortable:"","min-width":"150",label:"重量(公斤)"}}),a._v(" "),l("el-table-column",{attrs:{prop:"goodsNum",sortable:"","min-width":"150",label:"件数"}}),a._v(" "),l("el-table-column",{attrs:{prop:"totalAmount",sortable:"","min-width":"150",label:"运费总金额(元)"}}),a._v(" "),l("el-table-column",{attrs:{prop:"payTimeType",sortable:"","min-width":"150",label:"付款方式"},scopedSlots:a._u([{key:"default",fn:function(e){return[a._v("\n                        "+a._s("1"==e.row.payTimeType?"现付":"到付")+"\n                    ")]}}])}),a._v(" "),l("el-table-column",{attrs:{prop:"rebates",sortable:"","min-width":"150",label:"回扣"}}),a._v(" "),l("el-table-column",{attrs:{prop:"useTime",sortable:"",label:"揽收时间","min-width":"160"}}),a._v(" "),l("el-table-column",{attrs:{prop:"expectArriveTime",sortable:"",label:"预计到达日期","min-width":"160"}}),a._v(" "),l("el-table-column",{attrs:{prop:"carDispatchTime",sortable:"",label:"发车时间","min-width":"160"}}),a._v(" "),l("el-table-column",{attrs:{prop:"actualArriveTime",sortable:"",label:"到达时间","min-width":"160"}})],1)],1)]),a._v(" "),l("div",{staticClass:"info_tab_footer"},[a._v("共计:"+a._s(a.dataTotal)+" "),l("div",{staticClass:"show_pager"},[l("Pager",{ref:"pager",attrs:{total:a.dataTotal},on:{change:a.handlePageChange}})],1)])],1)},staticRenderFns:[]};t.a=l},juIs:function(e,t,a){"use strict";var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=l},xkzL:function(e,t,a){"use strict";t.r=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/findPlatformOrderList",method:"post",data:e})},t.s=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/exportPlatformOrderExcel",method:"post",responseType:"blob",data:e})},t.o=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/agencyAccept",method:"put",data:e})},t.t=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/agencyRefused",method:"put",data:e})},t.p=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/replaceShipperCancel",method:"put",data:e})},t.q=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/getOrderByOrderSerial/"+e,method:"get"})},t.u=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/getNetworkWaybillByOrderSerial/"+e,method:"get"})},t.n=function(e){return Object(l.a)({url:"/"+i+"/lcl/waybillOutsource/platform/getOutsourceByOrderSerial/"+e,method:"get"})},t.m=function(e){return Object(l.a)({url:"/"+i+"/lcl/waybillOutsource/platform/getCarriersWaybillByOrderSerial/"+e,method:"get"})},t.c=function(e,t,a){return Object(l.a)({url:"/"+i+"/lcl/aflcLclOrderAudit/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:a}})},t.b=function(e){return Object(l.a)({url:"/"+i+"/lcl/aflcLclOrderAudit/v1/detail?id="+e,method:"post"})},t.g=function(e){return Object(l.a)({url:"/"+i+"/lcl/aflcLclOrderAudit/v1/verify",method:"post",data:e})},t.j=function(e){return Object(l.a)({url:"/"+i+"/lcl/waybillOutsource/platform/list/carriersWaybill",method:"post",data:e})},t.i=function(e){return Object(l.a)({url:"/"+i+"/lcl/waybillOutsource/platform/list/carriersAllWaybill",method:"post",data:e})},t.l=function(e){return Object(l.a)({url:"/"+i+"/lcl/waybillOutsource/platform/exportCarriersWaybillExcel",method:"post",responseType:"blob",data:e})},t.h=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclAreaAgencyWaybill/findAreaAgencyWaybillList",method:"post",data:e})},t.k=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclAreaAgencyWaybill/exportAreaAgencyWaybillExcel",method:"post",responseType:"blob",data:e})},t.v=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclAreaAgencyWaybill/mainLineCarArrive",method:"put",data:e})},t.w=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclAreaAgencyWaybill/mainLineCarDispatch",method:"put",data:e})},t.z=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclAreaAgencyWaybill/waybillSign",method:"put",data:e})},t.e=function(e){return Object(l.a)({url:"/"+i+"/lcl/aflcLclOrderAuditLog/v1/list",method:"post",data:e})},t.d=function(e){return Object(l.a)({url:"/"+i+"/lcl/aflcLclOrderAudit/v1/check",method:"post",data:e})},t.f=function(e){return Object(l.a)({url:"/"+i+"/lcl/aflcLclOrderAudit/v1/register",method:"post",data:e})},t.x=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/orderFollow",method:"post",data:e})},t.a=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/addOrderFollow",method:"post",data:e})},t.y=function(e){return Object(l.a)({url:"/"+i+"/lcl/lclShipperOrder/getOrderPaymentDetailsByOrderSerial/"+e,method:"get"})};var l=a("Vo7i"),i="aflc-lcl"},yAyZ:function(e,t){},zAUn:function(e,t,a){"use strict";var l=a("xkzL"),i=a("1onU");a("0xDb");t.a={name:"allCompnent",props:{isvisible:{type:Boolean,default:!1}},components:{Pager:i.a},data:function(){return{btnsize:"mini",loading:!1,dataTotal:0,listSystemObj:{currentPage:1,pageSize:20,vo:{agencyCompanyName:"",agencyName:"",carrierName:"",endAddress:"",outsourceId:"",waybillNo:"",waybillStatus:""}},tableData:[],optionsCarriersWaybill:[{name:"全部",code:""},{name:"已揽货",code:"AF071080301"},{name:"运输中",code:"AF071080302"},{name:"已到达",code:"AF071080303"},{name:"派送中",code:"AF071080304"}],selected:[],dto:{operateType:"2",waybillIdList:[]}}},watch:{isvisible:{handler:function(e,t){e&&this.firstblood()},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){},handlePageChange:function(e){this.listSystemObj.currentPage=e.pageNum,this.listSystemObj.pageSize=e.pageSize,this.firstblood()},firstblood:function(){var t=this;this.loading=!0,Object(l.j)(this.listSystemObj).then(function(e){t.tableData=e.data.list,t.dataTotal=e.data.total,t.loading=!1}).catch(function(e){t.loading=!1,t.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})},handleSearch:function(e){"clear"==e&&(this.listSystemObj.vo={agencyCompanyName:"",agencyName:"",carrierName:"",endAddress:"",outsourceId:"",waybillNo:"",waybillStatus:""}),1!=this.listSystemObj.currentPage&&(this.listSystemObj.currentPage=1,this.$refs.pager.inputval=this.listSystemObj.currentPage,this.$refs.pager.pageNum=this.listSystemObj.currentPage),this.firstblood()},handleClick:function(e,t){var a=this;if(0!=this.selected.length||"details"==e)switch(e){case"details":this.$router.push({name:"发物流订单详情",query:{orderSerial:t.orderSerial}});break;case"depart":this.dto.waybillIdList=[],this.selected.forEach(function(e){a.dto.waybillIdList.push(e.id)}),Object(l.v)(this.dto).then(function(e){a.$message({type:"success",message:"代专线操作发车成功！"}),a.firstblood()}).catch(function(e){a.$message({type:"error",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})});break;case"arrive":this.dto.waybillIdList=[],this.selected.forEach(function(e){a.dto.waybillIdList.push(e.id)}),Object(l.w)(this.dto).then(function(e){a.$message({type:"success",message:"代专线操作发车成功！"}),a.firstblood()}).catch(function(e){a.$message({type:"error",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})});break;case"sign":this.dto.waybillIdList=[],this.selected.forEach(function(e){a.dto.waybillIdList.push(e.id)}),Object(l.z)(this.dto).then(function(e){a.$message({type:"success",message:"代专线操作发车成功！"}),a.firstblood()}).catch(function(e){a.$message({type:"error",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})}else this.$message({type:"warning",message:"depart"==e?"请选择代专线操作发车的运单。":"arrive"==e?"请选择代专线操作到达的运单。":"请选择代专线操作签收的运单。"})},getSelection:function(e){this.selected=e}}}}});
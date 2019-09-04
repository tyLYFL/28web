webpackJsonp([603],{"4Son":function(a,t,e){"use strict";var r={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"TCorderInfo clearfix"},[r("div",{staticClass:"orderInfo-collapse collapseInfo"},[r("h2",[e._v("基础信息")]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("订单号：")]),e._v(" "),r("span",[e._v(e._s(e.formData.orderSerial))])]),e._v(" "),r("p",[r("span",[e._v("订单类型：")]),e._v(" "),r("span",[e._v(e._s(e.formData.orderTypeName))])]),e._v(" "),r("p",[r("span",[e._v("订单状态：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.orderStatusName))])]),e._v(" "),r("p",[r("span",[e._v("货主账号：")]),e._v(" "),r("span",[e._v(e._s(e.formData.shipperMobile))])])]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("货主姓名：")]),e._v(" "),r("span",[e._v(e._s(e.formData.shipperName))])]),e._v(" "),r("p",[r("span",[e._v("货主所属业务员：")]),e._v(" "),r("span",[e._v(e._s(e.formData.shipperSalesmanName))])]),e._v(" "),r("p",[r("span",[e._v("订单来源：")]),e._v(" "),r("span",[e._v(e._s(e.formData.orderFromName))])]),e._v(" "),r("p",[r("span",[e._v("下单时间：")]),e._v(" "),r("span",[e._v(e._s(e._f("parseTime")(e.formData.useTime)))])])]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("区代响应时间：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e._f("parseTime")(e.formData.responseTime)))])]),e._v(" "),r("p",[r("span",[e._v("揽收时间：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e._f("parseTime")(e.formData.freightTime)))])])])]),e._v(" "),r("div",{staticClass:"orderInfo-collapse collapseInfo"},[r("h2",[e._v("区代信息")]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("区代：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.agencyName))])]),e._v(" "),r("p",[r("span",[e._v("区代物流公司：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.agencyCompanyName))])]),e._v(" "),r("p",[r("span",[e._v("联系人：")]),e._v(" "),r("span",[e._v(e._s(e.formData.agencyContact))])]),e._v(" "),r("p",[r("span",[e._v("联系电话：")]),e._v(" "),r("span",[e._v(e._s(e.formData.agencyContactPhone))])])]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("区代客服电话：")]),e._v(" "),r("span",[e._v(e._s(e.formData.agencyServiceMobile))])])])]),e._v(" "),r("div",{staticClass:"orderInfo-collapse collapseInfo"},[r("h2",[e._v("地址信息")]),e._v(" "),e._l(e.formData.lclOrderAddressList,function(a,t){return r("div",{key:t},[r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v(e._s(0==a.viaOrder?"发货地：":"收货地："))]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(a.city+a.area))])]),e._v(" "),r("p",[r("span",[e._v(e._s(0==a.viaOrder?"发货街道：":"收货街道："))]),e._v(" "),r("span",[e._v(e._s(a.streetName))])]),e._v(" "),r("p",[r("span",[e._v(e._s(0==a.viaOrder?"发货详细地址：":"收货详细地址："))]),e._v(" "),r("span",[e._v(e._s(a.viaAddressName)+"("+e._s(a.viaAddress)+")")])]),e._v(" "),r("p",[r("span",[e._v(e._s(0==a.viaOrder?"发货人：":"收货人："))]),e._v(" "),r("span",[e._v(e._s(a.contacts))])])]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("联系方式：")]),e._v(" "),r("span",[e._v(e._s(a.contactsPhone))])]),e._v(" "),r("p",[r("span",[e._v(e._s(0==a.viaOrder?"是否上门接货：":"是否需要送货："))]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(0==a.viaOrder?"1"==e.formData.isDoorPickUp?"需要":"不需要":"1"==e.formData.isDoorDelivery?"需要":"不需要"))])])])])})],2),e._v(" "),r("div",{staticClass:"orderInfo-collapse collapseInfo"},[r("h2",[e._v("货物信息")]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.formData.lclOrderGoodsList,stripe:"",border:"","highlight-current-row":"","show-summary":""}},[r("el-table-column",{attrs:{label:"货品名称",prop:"goodsTypeName","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"重量（公斤）",prop:"goodsWeight","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"体积（立方）",prop:"goodsVolume","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"件数",prop:"goodsNum","show-overflow-tooltip":""}})],1)],1)]),e._v(" "),r("div",{staticClass:"orderInfo-collapse collapseInfo"},[r("h2",[e._v("增值服务")]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("货物保价：")]),e._v(" "),r("span",[e._v(e._s(e.formData.goodsPrice?e.formData.goodsPrice+"元":""))])]),e._v(" "),r("p",[r("span",[e._v("代收货款：")]),e._v(" "),r("span",[e._v(e._s(e.formData.receivedAmount))])]),e._v(" "),r("p",[r("span",[e._v("签收单：")]),e._v(" "),r("span",[e._v(e._s(e.formData.receiptTypeName))])]),e._v(" "),r("p",{staticClass:"markInfo remakInfo"},[r("span",[e._v("发货备注：")]),e._v(" "),r("span",[e._v(e._s(e.formData.remark))])])])]),e._v(" "),r("div",{staticClass:"orderInfo-collapse collapseInfo"},[r("h2",[e._v("预估运费")]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("预估运费总额：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.totalAmount?"￥"+e.formData.totalAmount:""))])]),e._v(" "),r("p",[r("span",[e._v("付款方式：")]),e._v(" "),r("span",[e._v(e._s(e.formData.payTimeTypeName))])]),e._v(" "),r("p",[r("span",[e._v("预估优惠金减免：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.preferentialAmount?"￥"+e.formData.preferentialAmount:""))])]),e._v(" "),r("p",[r("span",[e._v("预估优惠券减免：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.discountCouponAmount?"￥"+e.formData.discountCouponAmount:""))])])]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("p",[r("span",[e._v("预估货主应付款金额：")]),e._v(" "),r("span",{staticClass:"fontRed"},[e._v(e._s(e.formData.shipperShouldPayAmount?"￥"+e.formData.shipperShouldPayAmount:""))])])]),e._v(" "),r("div",{staticClass:"essentialInformation"},[r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.formData.lclOrderExpensesCourseList,stripe:"",border:"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"费用科目",prop:"expensesCourseName","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"预估金额(元)",prop:"coursePrice","show-overflow-tooltip":""}})],1)],1)])])},staticRenderFns:[]};t.a=r},hWoz:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("uQOV"),s=e("4Son"),l=e("VU/8")(r.a,s.a,null,null,null);t.default=l.exports},uQOV:function(a,t,e){"use strict";e("0xDb");var r=e("xkzL");t.a={props:{isvisible:{type:Boolean,default:!1}},data:function(){return{loading:!1,formData:{}}},methods:{firstblood:function(){var t=this;this.loading=!0,Object(r.q)(this.$route.query.orderSerial).then(function(a){t.formData=a.data,t.loading=!1}).catch(function(a){t.$message({type:"info",message:a.errorInfo}),t.loading=!1})}},watch:{isvisible:{handler:function(a,t){a&&this.firstblood()},immediate:!0}}}},xkzL:function(a,t,e){"use strict";t.r=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/findPlatformOrderList",method:"post",data:a})},t.s=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/exportPlatformOrderExcel",method:"post",responseType:"blob",data:a})},t.o=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/agencyAccept",method:"put",data:a})},t.t=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/agencyRefused",method:"put",data:a})},t.p=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/replaceShipperCancel",method:"put",data:a})},t.q=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/getOrderByOrderSerial/"+a,method:"get"})},t.u=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/getNetworkWaybillByOrderSerial/"+a,method:"get"})},t.n=function(a){return Object(r.a)({url:"/"+s+"/lcl/waybillOutsource/platform/getOutsourceByOrderSerial/"+a,method:"get"})},t.m=function(a){return Object(r.a)({url:"/"+s+"/lcl/waybillOutsource/platform/getCarriersWaybillByOrderSerial/"+a,method:"get"})},t.c=function(a,t,e){return Object(r.a)({url:"/"+s+"/lcl/aflcLclOrderAudit/v1/list",method:"post",data:{currentPage:a,pageSize:t,vo:e}})},t.b=function(a){return Object(r.a)({url:"/"+s+"/lcl/aflcLclOrderAudit/v1/detail?id="+a,method:"post"})},t.g=function(a){return Object(r.a)({url:"/"+s+"/lcl/aflcLclOrderAudit/v1/verify",method:"post",data:a})},t.j=function(a){return Object(r.a)({url:"/"+s+"/lcl/waybillOutsource/platform/list/carriersWaybill",method:"post",data:a})},t.i=function(a){return Object(r.a)({url:"/"+s+"/lcl/waybillOutsource/platform/list/carriersAllWaybill",method:"post",data:a})},t.l=function(a){return Object(r.a)({url:"/"+s+"/lcl/waybillOutsource/platform/exportCarriersWaybillExcel",method:"post",responseType:"blob",data:a})},t.h=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclAreaAgencyWaybill/findAreaAgencyWaybillList",method:"post",data:a})},t.k=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclAreaAgencyWaybill/exportAreaAgencyWaybillExcel",method:"post",responseType:"blob",data:a})},t.v=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclAreaAgencyWaybill/mainLineCarArrive",method:"put",data:a})},t.w=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclAreaAgencyWaybill/mainLineCarDispatch",method:"put",data:a})},t.z=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclAreaAgencyWaybill/waybillSign",method:"put",data:a})},t.e=function(a){return Object(r.a)({url:"/"+s+"/lcl/aflcLclOrderAuditLog/v1/list",method:"post",data:a})},t.d=function(a){return Object(r.a)({url:"/"+s+"/lcl/aflcLclOrderAudit/v1/check",method:"post",data:a})},t.f=function(a){return Object(r.a)({url:"/"+s+"/lcl/aflcLclOrderAudit/v1/register",method:"post",data:a})},t.x=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/orderFollow",method:"post",data:a})},t.a=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/addOrderFollow",method:"post",data:a})},t.y=function(a){return Object(r.a)({url:"/"+s+"/lcl/lclShipperOrder/getOrderPaymentDetailsByOrderSerial/"+a,method:"get"})};var r=e("Vo7i"),s="aflc-lcl"}});
webpackJsonp([499],{"1onU":function(t,s,a){"use strict";var _=a("VT+v"),v=a("juIs");var l=function(t){a("ZdV2"),a("co/t")},c=a("VU/8")(_.a,v.a,l,"data-v-695be8cd",null);s.a=c.exports},CJrG:function(t,s,a){"use strict";var _=a("1onU");s.a={name:"myDialog",data:function(){return{dialogFormVisible:!1,tableData1:[],dataTotal:0}},components:{Pager:_.a},methods:{closeClick:function(){},handlePageChange1:function(t){}}}},FUvd:function(t,s,a){"use strict";var _={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"commoncss"},[a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{"close-on-click-modal":!1,visible:s.dialogFormVisible,title:"",width:"1400px"},on:{"update:visible":function(t){s.dialogFormVisible=t},close:s.closeClick}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"货主订单"}},[a("table",{staticClass:"width_100",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("基础信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("订单号")]),s._v(" "),a("td",{staticClass:"value"},[s._v("AFWL2018070511190465522")]),s._v(" "),a("td",{staticClass:"key"},[s._v("订单类型")]),s._v(" "),a("td",{staticClass:"value"},[s._v("发物流")]),s._v(" "),a("td",{staticClass:"key"},[s._v("订单状态")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("已揽收")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("货主账号")]),s._v(" "),a("td",{staticClass:"value"},[s._v("13812345678")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主姓名")]),s._v(" "),a("td",{staticClass:"value"},[s._v("刘晓丽")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主所属业务员")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李思丽")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("订单来源")]),s._v(" "),a("td",{staticClass:"value"},[s._v("IOS")]),s._v(" "),a("td",{staticClass:"key"},[s._v("下单时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-24 14:48:38")]),s._v(" "),a("td",{staticClass:"key"},[s._v("区代响应时间")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("2019-04-24 15:28:52（响应速度40分钟）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("揽收时间")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("2019-04-26 13:00:00")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"}),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("区代信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("区代")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("天河南区代")]),s._v(" "),a("td",{staticClass:"key"},[s._v("区代物流公司")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("广州福泉物流有限公司")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("张立成")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("联系电话")]),s._v(" "),a("td",{staticClass:"value"},[s._v("13888888888")]),s._v(" "),a("td",{staticClass:"key"},[s._v("区代客服电话")]),s._v(" "),a("td",{staticClass:"value"},[s._v("020-88888888")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("地址信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货地")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("广州市天河区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发货街道")]),s._v(" "),a("td",{staticClass:"value"},[s._v("天河南街道")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发货详细地址")]),s._v(" "),a("td",{staticClass:"value"},[s._v("丰兴广场（天河南路242号丰兴广场B1804）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李鑫")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("18822222222")]),s._v(" "),a("td",{staticClass:"key"},[s._v("是否上门接货")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("需要（2019-04-24 上午6:00-12:00）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("收货地")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("北京市朝阳区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("收货街道")]),s._v(" "),a("td",{staticClass:"value"},[s._v("南磨房地区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("收货详细地址")]),s._v(" "),a("td",{staticClass:"value"},[s._v("XXXXX（XX路XX号）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("收货人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李欣才")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("13612345685")]),s._v(" "),a("td",{staticClass:"key"},[s._v("是否需要送货")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("不需要")])])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"4"}},[s._v("货物信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_3"},[s._v("货物名称")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("重量（公斤）")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("体积（立方）")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("件数")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("油漆")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("1000")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("1.1")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("100")])])]),s._v(" "),a("table",{staticClass:"width_100 b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("增值服务")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("货物保价")]),s._v(" "),a("td",{staticClass:"value"},[s._v("50000元")]),s._v(" "),a("td",{staticClass:"key"},[s._v("代收货款")]),s._v(" "),a("td",{staticClass:"value"},[s._v("50000元")]),s._v(" "),a("td",{staticClass:"key"},[s._v("签收单")]),s._v(" "),a("td",{staticClass:"value"},[s._v("原单返回")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货备注")]),s._v(" "),a("td",{staticClass:"value",attrs:{colspan:"5"}},[s._v("XXXXXXXXX")])]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("  预估运费")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("预估运费总额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("付款方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("到付")]),s._v(" "),a("td",{staticClass:"key"},[s._v("预估优惠金减免")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("¥-10")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("预估优惠券减免")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("¥-10")]),s._v(" "),a("td",{staticClass:"key"},[s._v("预估货主应付款金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥1980")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{staticClass:"c_3"},[s._v("费用科目")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("预估金额")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("运费")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("¥1500")])])])]),s._v(" "),a("el-tab-pane",{attrs:{label:"区代运单"}},[a("table",{staticClass:"width_100",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("基础信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("区代运单号")]),s._v(" "),a("td",{staticClass:"value"},[s._v("AFWL2018070511190465522")]),s._v(" "),a("td",{staticClass:"key"},[s._v("运单状态")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("货主已确认收货")]),s._v(" "),a("td",{staticClass:"key"},[s._v("揽收时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-26 13:00:00")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("预计到达日期")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-27")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发车时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-26  16:52:32")]),s._v(" "),a("td",{staticClass:"key"},[s._v("实际到达时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-28  16:52:32（超出预计1天）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("签收时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-27  16:52:32（超出预计1天4小时）")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主确认收货时间")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("2019-04-29  18:00:01（平台自动确认收货）")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("地址信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货地")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("广州市天河区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发货街道")]),s._v(" "),a("td",{staticClass:"value"},[s._v("天河南街道")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发货详细地址")]),s._v(" "),a("td",{staticClass:"value"},[s._v("丰兴广场（天河南路242号丰兴广场B1804）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李鑫")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("18822222222")]),s._v(" "),a("td",{staticClass:"key"},[s._v("是否上门接货")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("需要（2019-04-24 上午6:00-12:00）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("收货地")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("北京市朝阳区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("收货街道")]),s._v(" "),a("td",{staticClass:"value"},[s._v("南磨房地区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("收货详细地址")]),s._v(" "),a("td",{staticClass:"value"},[s._v("XXXXX（XX路XX号）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("收货人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李欣才")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("13612345685")]),s._v(" "),a("td",{staticClass:"key"},[s._v("是否需要送货")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("不需要")])])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"4"}},[s._v("货物信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_3"},[s._v("货物名称")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("重量（公斤）")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("体积（立方）")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("件数")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("油漆")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("1000")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("1.1")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("100")])])]),s._v(" "),a("table",{staticClass:"width_100 b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("增值服务")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("货物保价")]),s._v(" "),a("td",{staticClass:"value"},[s._v("50000元")]),s._v(" "),a("td",{staticClass:"key"},[s._v("代收货款")]),s._v(" "),a("td",{staticClass:"value"},[s._v("50000元")]),s._v(" "),a("td",{staticClass:"key"},[s._v("签收单")]),s._v(" "),a("td",{staticClass:"value"},[s._v("原单返回")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货备注")]),s._v(" "),a("td",{staticClass:"value",attrs:{colspan:"5"}},[s._v("XXXXXXXXX")])]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("运费信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("实际运费总金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("开单运费总金额")]),s._v(" "),a("td",{staticClass:"value"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主选择付款方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("现付")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("优惠金")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("¥-10")]),s._v(" "),a("td",{staticClass:"key"},[s._v("优惠券")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥1980")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主应付运费金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥2030")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("付款状态")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("¥-10")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value c_r"}),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value c_r"})])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{staticClass:"c_3"},[s._v("费用科目")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("实际费用金额")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("开单费用金额")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("运费")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("¥1450")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("¥1450")])])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"8"}},[s._v("费用变更")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_3"},[s._v("申请人")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("申请人类型")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("申请时间")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("总金额")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("明细")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("状态")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("审核时间")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("备注")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("18565382929-张立新")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("货主")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("2019-07-01 12:12:25")]),s._v(" "),a("td",{staticClass:"c_r"},[s._v("-50")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("运费-50")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("已退款")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("2019-07-01 12:12:26")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("退运费")])])])]),s._v(" "),a("el-tab-pane",{attrs:{label:"区代中转单"}},[a("table",{staticClass:"width_100",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("基础信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("中转单号")]),s._v(" "),a("td",{staticClass:"value"},[s._v("AFWL2018070511190465522")]),s._v(" "),a("td",{staticClass:"key"},[s._v("中转单状态")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("已揽收")]),s._v(" "),a("td",{staticClass:"key"},[s._v("中转时间")]),s._v(" "),a("td",{staticClass:"value "},[s._v("2019-04-26 13:00:00")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("专线揽收时间")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("2019-04-26 13:00:00")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"}),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("专线承运商信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("专线承运商")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("广州青春物流有限公司")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李鑫")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系人电话")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("18538556666")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("客服电话")]),s._v(" "),a("td",{staticClass:"value"},[s._v("020-8888888")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"}),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("  预估中转费")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("预估中转费总额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥1500")]),s._v(" "),a("td",{staticClass:"key"},[s._v("付款方式")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("到付")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value c_r"})])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{staticClass:"c_3"},[s._v("费用科目")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("预估费用金额")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("运费")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("¥1300")])])])]),s._v(" "),a("el-tab-pane",{attrs:{label:"专线运单"}},[a("table",{staticClass:"width_100",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("基础信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("专线运单号")]),s._v(" "),a("td",{staticClass:"value"},[s._v("AFWL2018070511190465522")]),s._v(" "),a("td",{staticClass:"key"},[s._v("运单状态")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("货主已确认收货")]),s._v(" "),a("td",{staticClass:"key"},[s._v("揽收时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-26 13:00:00")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("预计到达日期")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-27")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发车时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-26  16:52:32")]),s._v(" "),a("td",{staticClass:"key"},[s._v("实际到达时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-28  16:52:32（超出预计1天）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("签收时间")]),s._v(" "),a("td",{staticClass:"value"},[s._v("2019-04-27  16:52:32（超出预计1天4小时）")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主确认收货时间")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("2019-04-29  18:00:01（平台自动确认收货）")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value"})]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("地址信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货地")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("广州市天河区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发货街道")]),s._v(" "),a("td",{staticClass:"value"},[s._v("天河南街道")]),s._v(" "),a("td",{staticClass:"key"},[s._v("发货详细地址")]),s._v(" "),a("td",{staticClass:"value"},[s._v("丰兴广场（天河南路242号丰兴广场B1804）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李鑫")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("18822222222")]),s._v(" "),a("td",{staticClass:"key"},[s._v("是否上门接货")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("需要（2019-04-24 上午6:00-12:00）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("收货地")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("北京市朝阳区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("收货街道")]),s._v(" "),a("td",{staticClass:"value"},[s._v("南磨房地区")]),s._v(" "),a("td",{staticClass:"key"},[s._v("收货详细地址")]),s._v(" "),a("td",{staticClass:"value"},[s._v("XXXXX（XX路XX号）")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("收货人")]),s._v(" "),a("td",{staticClass:"value"},[s._v("李欣才")]),s._v(" "),a("td",{staticClass:"key"},[s._v("联系方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("13612345685")]),s._v(" "),a("td",{staticClass:"key"},[s._v("是否需要送货")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("不需要")])])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"4"}},[s._v("货物信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_3"},[s._v("货物名称")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("重量（公斤）")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("体积（立方）")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("件数")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("油漆")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("1000")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("1.1")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("100")])])]),s._v(" "),a("table",{staticClass:"width_100 b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("增值服务")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("货物保价")]),s._v(" "),a("td",{staticClass:"value"},[s._v("50000元")]),s._v(" "),a("td",{staticClass:"key"},[s._v("代收货款")]),s._v(" "),a("td",{staticClass:"value"},[s._v("50000元")]),s._v(" "),a("td",{staticClass:"key"},[s._v("签收单")]),s._v(" "),a("td",{staticClass:"value"},[s._v("原单返回")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("发货备注")]),s._v(" "),a("td",{staticClass:"value",attrs:{colspan:"5"}},[s._v("XXXXXXXXX")])]),s._v(" "),a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("运费信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("实际运费总金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("开单运费总金额")]),s._v(" "),a("td",{staticClass:"value"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("货主选择付款方式")]),s._v(" "),a("td",{staticClass:"value"},[s._v("现付")])])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{staticClass:"c_3"},[s._v("费用科目")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("实际费用金额")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("开单费用金额")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("运费")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("¥1450")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("¥1450")])])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"8"}},[s._v("费用变更")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_3"},[s._v("申请人")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("申请人类型")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("申请时间")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("总金额")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("申请费用明细")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("状态")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("审核时间")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("备注")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("18565382929-张立新")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("货主")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("2019-07-01 12:12:25")]),s._v(" "),a("td",{staticClass:"c_r"},[s._v("-50")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("运费-50")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("已同意")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("2019-07-01 12:12:26")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("退运费")])])])]),s._v(" "),a("el-tab-pane",{attrs:{label:"订单跟踪"}},[a("el-button",{staticClass:"margin_b_10",attrs:{type:"primary",size:"mini"}},[s._v("增加跟踪记录")]),s._v(" "),a("el-table",{staticClass:"margin_b_10",staticStyle:{width:"100%"},attrs:{data:s.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"实际操作时间",width:"180"}}),s._v(" "),a("el-table-column",{attrs:{prop:"name",label:"操作人",width:"180"}}),s._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作人类型"}}),s._v(" "),a("el-table-column",{attrs:{prop:"address",label:"货主是否可见"}}),s._v(" "),a("el-table-column",{attrs:{prop:"address",label:"反馈给货主的操作时间"}}),s._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作信息"}}),s._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作内容"}})],1),s._v(" "),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s._v("\n                    共计:"+s._s(s.dataTotal)+"\n                    "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager1",attrs:{total:s.dataTotal},on:{change:s.handlePageChange1}})],1)])],1),s._v(" "),a("el-tab-pane",{attrs:{label:"收支明细"}},[a("table",{staticClass:"width_100",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"6"}},[s._v("分账信息")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("货主支付运费")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("区代入账金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥160")]),s._v(" "),a("td",{staticClass:"key"},[s._v("专线承运商入账金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥1800")])]),s._v(" "),a("tr",[a("td",{staticClass:"key"},[s._v("平台分润金额")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("￥2000")]),s._v(" "),a("td",{staticClass:"key"},[s._v("入账状态")]),s._v(" "),a("td",{staticClass:"value c_r"},[s._v("待入账")]),s._v(" "),a("td",{staticClass:"key"}),s._v(" "),a("td",{staticClass:"value c_r"})])]),s._v(" "),a("table",{staticClass:"width_100 t_fix b_t",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("th",{attrs:{colspan:"9"}},[s._v("收支明细")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_3"},[s._v("交易流水号")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("账户")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("账户类型")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("交易类型")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("收支类型")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("交易金额")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("交易方式")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("交易时间")]),s._v(" "),a("td",{staticClass:"c_3"},[s._v("备注")])]),s._v(" "),a("tr",[a("td",{staticClass:"c_9"},[s._v("00000000000000001")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("18568538568-张立新")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("货主")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("支付运费")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("支出")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("-50")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("微信")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("2019-04-01 12:35:25")]),s._v(" "),a("td",{staticClass:"c_9"},[s._v("退送货费")])])])])],1)],1)],1)},staticRenderFns:[]};s.a=_},HIBo:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var _=a("CJrG"),v=a("FUvd");var l=function(t){a("UcWP")},c=a("VU/8")(_.a,v.a,l,"data-v-df39942e",null);s.default=c.exports},UcWP:function(t,s){},"VT+v":function(t,s,a){"use strict";s.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var s=parseInt(t,10);isNaN(s)?this.inputval=1:s<1?this.inputval=1:s>this.pages?this.inputval=this.pages:this.inputval=s},handleBlur:function(t){var s=t.target;this.handleChange(s.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var s=t.keyCode,a=t.target;console.log("page keydown:",s,a),13===s&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(t){console.log("d",this.inputval),t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},ZdV2:function(t,s){},"co/t":function(t,s){},juIs:function(t,s,a){"use strict";var _={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:s.pageNum<=1},on:{click:function(t){s.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:s.pageNum<=1},on:{click:function(t){s.jumpTo(s.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),s._v(" "),a("span",{staticClass:"page-jumper"},[s._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:s.pages,type:"number",disabled:s.pages<=1},on:{change:s.handleChange,focus:s.handleFocus,blur:s.handleBlur},nativeOn:{keydown:function(t){return s.handleKeyup(t)}},model:{value:s.inputval,callback:function(t){s.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),s._v(" 页\n  ")],1),s._v("\n  /共 "+s._s(s.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:s.pageNum===s.pages},on:{click:function(t){s.jumpTo(s.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),s._v(" "),a("span",{staticClass:"page-num",class:{disabled:s.pageNum===s.pages},on:{click:function(t){s.jumpTo(s.pages)}}},[a("span",{staticClass:"last-page"})]),s._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:s.sizesChange},model:{value:s.size,callback:function(t){s.size=t},expression:"size"}},s._l(s.sizes,function(t,s){return a("el-option",{key:s,attrs:{label:t,value:t}})}))],1)])},staticRenderFns:[]};s.a=_}});
webpackJsonp([594],{Lghx:function(t,e,i){"use strict";e.b=function(t,e,i){return Object(s.a)({url:"/"+r+"/usercenter/aflcinsurancepolicy/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:i}})},e.a=function(t){return Object(s.a)({url:"/"+r+"/usercenter/aflcinsurancepolicy/v1/"+t,method:"get"})},e.c=function(){return Object(s.a)({url:"/"+r+"/usercenter/aflcinsurancepolicy/v1/getCountByPaymentState/",method:"post",data:{}})};var s=i("Vo7i"),r="aflc-uc"},NEoc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("qOBi"),r=i("oY/G");var a=function(t){i("cYiG")},o=i("VU/8")(s.a,r.a,a,null,null);e.default=o.exports},cYiG:function(t,e){},"oY/G":function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"detail-lll"},[i("div",{staticClass:"detail"},[i("div",{staticClass:"classul"},[i("ul",[i("li",[i("span",[t._v(t._s(t.form.insuranceName))]),t._v(" "),i("span",[t._v("保险单")]),t._v(" "),i("span",[t._v("投保日期："+t._s(t.form.createTime))])]),t._v(" "),i("br"),t._v(" "),i("li",[i("span",[t._v("投保单号："+t._s(t.form.insuranceNum))]),t._v(" "),i("span",[t._v("保险金额："),i("i",{staticStyle:{color:"red","font-style":"normal"}},[t._v(t._s(t.form.insuranceFee))]),t._v(" 元")]),t._v(" "),i("span",[t._v(t._s(0===t.form.paymentState?"待支付":"已支付"))]),t._v(" "),1===t.form.paymentState?i("span",[t._v("支付时间："+t._s(t.form.paymentTime))]):t._e()])])]),t._v(" "),t._m(0),t._v(" "),i("table",{staticClass:"detail-top"},[t._m(1),t._v(" "),i("tr",[i("td",[t._v(t._s(t.form.policyHolderType))]),t._v(" "),i("td",[t._v(t._s(t.form.policyHolderName))]),t._v(" "),i("td",[t._v(t._s(t.form.policyHolderNum))])])]),t._v(" "),t._m(2),t._v(" "),i("table",{staticClass:"detail-top"},[t._m(3),t._v(" "),i("tr",[i("td",[t._v(t._s(t.form.theInsuredType))]),t._v(" "),i("td",[t._v(t._s(t.form.theInsuredName))]),t._v(" "),i("td",[t._v(t._s(t.form.theInsuredNum))])])]),t._v(" "),t._m(4),t._v(" "),i("table",{staticClass:"detail-botton"},[i("tr",[i("th",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right","font-weight":"normal"},attrs:{width:"16%"}},[t._v("货物类型")]),t._v(" "),i("th",{staticStyle:{"font-weight":"normal","text-align":"left"}},[t._v(t._s(t.form.goodsType))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("货物名称")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.form.goodsName))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("货物包装")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.form.goodsPack))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("货物数量")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.form.goodsNumber))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("货物价值")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.form.goodsValue)+"元")])])]),t._v(" "),t._m(5),t._v(" "),i("table",{staticClass:"detail-top"},[i("tr",[i("th",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right","font-weight":"normal"},attrs:{width:"16%"}},[t._v("起运地")]),t._v(" "),i("th",{staticStyle:{"background-color":"white","text-align":"left","font-weight":"normal"},attrs:{width:"34%"}},[t._v("\n          "+t._s(t.form.startProvince+t.form.startCity)+"\n        ")]),t._v(" "),i("th",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right","font-weight":"normal"},attrs:{width:"16%"}},[t._v("起运日期")]),t._v(" "),i("th",{staticStyle:{"background-color":"white","text-align":"left","font-weight":"normal"},attrs:{width:"34%"}},[t._v(t._s(t.form.startTime))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("目的地")]),t._v(" "),i("td",{staticStyle:{"background-color":"white","text-align":"left","font-weight":"normal"}},[t._v(t._s(t.form.endProvince+t.form.endCity)+"\n        ")]),t._v(" "),i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("车牌号")]),t._v(" "),i("td",{staticStyle:{"background-color":"white","text-align":"left","font-weight":"normal"}},[t._v(t._s(t.form.carNum))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("中转地")]),t._v(" "),i("td",{staticStyle:{"background-color":"white","text-align":"left","font-weight":"normal"}},[t._v(" "+t._s(t.form.transferCitys))]),t._v(" "),i("td",{staticStyle:{"background-color":"rgb(249,249,249)","text-align":"right"}},[t._v("运单号")]),t._v(" "),i("td",{staticStyle:{"background-color":"white","text-align":"left","font-weight":"normal"}},[t._v(t._s(t.form.orderNum))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-class"},[i("h4",[t._v("投保人信息")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",{staticStyle:{width:"33%"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{width:"33%"}},[t._v("投保人")]),t._v(" "),i("th",{staticStyle:{width:"33%"}},[t._v("证件号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-class",staticStyle:{"margin-top":"15px"}},[i("h4",[t._v("被保人信息")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",{staticStyle:{width:"33%"}},[t._v("类型")]),t._v(" "),i("th",{staticStyle:{width:"33%"}},[t._v("投保人")]),t._v(" "),i("th",{staticStyle:{width:"33%"}},[t._v("证件号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-class",staticStyle:{"margin-top":"15px"}},[i("h4",[t._v("货物信息")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-class",staticStyle:{"margin-top":"15px"}},[i("h4",[t._v("运输信息")])])}]};e.a=s},qOBi:function(t,e,i){"use strict";var s=i("Lghx");e.a={name:"detail",data:function(){return{loading:!1,form:{}}},mounted:function(){this.fetchDetail()},methods:{fetchDetail:function(){var e=this;this.loading=!0,s.a(this.$route.query.id).then(function(t){e.comData(t.data),e.loading=!1})},comData:function(t){this.$set(this.form,"insuranceName",t.insuranceName),this.$set(this.form,"createTime",t.createTime),this.$set(this.form,"insuranceNum",t.insuranceNum),this.$set(this.form,"insuranceFee",t.insuranceFee?t.insuranceFee:"0.00"),this.$set(this.form,"paymentState",t.paymentState),this.$set(this.form,"paymentTime",t.paymentTime),this.$set(this.form,"policyHolderType",0===t.policyHolderType?"个人":"团队"),this.$set(this.form,"policyHolderName",t.policyHolderName),this.$set(this.form,"policyHolderNum",t.policyHolderNum),this.$set(this.form,"theInsuredType",0===t.theInsuredType?"个人":"团队"),this.$set(this.form,"theInsuredName",t.theInsuredName),this.$set(this.form,"theInsuredNum",t.theInsuredNum),this.$set(this.form,"goodsType",t.goodsType),this.$set(this.form,"goodsName",t.goodsName),this.$set(this.form,"goodsPack",t.goodsPack),this.$set(this.form,"goodsNumber",t.goodsNumber),this.$set(this.form,"goodsValue",t.goodsValue?t.goodsValue:"0.00"),this.$set(this.form,"startProvince",t.startProvince),this.$set(this.form,"startCity",t.startCity),this.$set(this.form,"startTime",t.startTime),this.$set(this.form,"endProvince",t.endProvince),this.$set(this.form,"endCity",t.endCity),this.$set(this.form,"carNum",t.carNum),this.$set(this.form,"orderNum",t.orderNum),this.$set(this.form,"transferCitys",t.transferCitys?t.transferCitys:"无")}}}}});
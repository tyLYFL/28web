webpackJsonp([616],{"0sFE":function(e,t){},"9uGa":function(e,t,a){"use strict";t.a={name:"shipperProfileDashbord",components:{},data:function(){return{shipperProfileName:"shipperTotalCount"}},computed:{},mounted:function(){},methods:{init:function(){},handleClick:function(e,t){this.shipperProfileName=e.name}}}},DtyR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("9uGa"),s=a("xuPD");var i=function(e){a("0sFE")},r=a("VU/8")(n.a,s.a,i,null,null);t.default=r.exports},xuPD:function(e,t,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shipperProfileDashbord tabsWrap"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.shipperProfileName,callback:function(e){t.shipperProfileName=e},expression:"shipperProfileName"}},[t.$_has_permission("DATA_CENTER_DRIVER_GENERAL_DRIVER_GENERAL_START_QRCODE_GENERATE")?a("el-tab-pane",{attrs:{label:"二维码生成",name:"shipperTotalCount"}}):t._e(),t._v(" "),t.$_has_permission("DATA_CENTER_DRIVER_GENERAL_DRIVER_GENERAL_START_CHANNEL_DATA_STATIS")?a("el-tab-pane",{attrs:{label:"渠道数据统计",name:"belongBusinessPerson"}}):t._e()],1)],1)},staticRenderFns:[]};t.a=n}});
webpackJsonp([164,203,511,519],{"+/vL":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAADOklEQVRYhdXZb8ieUxwH8M99NRuKTP57QxaKHsby78VYSZGJoRZCSoTNZF5IeaN4QbLHMklq/ra8IFvMv7SaecRMzPx5MUUpSTRh9ph5ce57u5/Ldd/Xdc517OZbd93X75zz/X0713V+53d+p7Ns4y4tcTrOwok4HgdiJnbhJ/yCr7AFE9jUxtm0xHGn4jpcjFkN+l/Q9/9LvIKV+CzWcRHZ/5yus01YopnYMk7AXdiMF3FazOCmgg/AE3gX82Mc1OAKbMQjGr7tJoLPF17jjem6anE7PseZdR3rBN+GN3FkBlF1mCUsymuGdRom+G48muB4Oc7r/lYkjH8Gtw5qHPTdLMb9Cc6uwgt9z+vwKR6L5FkuhMTnyw1VMzwPyyIdwFumiu1hBT5M4HsOY2VjWfD+eC2BHN4Z0rY+kfMNdPoNZcHPYkYi+SlD2k5O5Dxc6XPqF3wGLkskhisxu8I+TwiNqbhZ2PIxVXDswiijg/eEeH0IDsMteLslL4zvdtJNfubggwzEPWwXJmN6Rs7jsLU3w3dkJIZ95RULi9gzC22+3b2FhQTB52K/jMQTuFZIP1vlviUcgdnTBMG58DHO7nt+Gl8IKWUOzC2kx8gqPFhhezwj/1iBYzIS/lxh25GR/9gCB2ckrNol/8zIf2gh5A+50Kmw5ZzhGcUAJzkRe26sJfstJ+G/jMkC20atIgI/Fvhm1Coi8G0hVGT+L9hcYMOoVURgfSEc4/8atZIG2IYNvUW3dsRimuAl7OzFyPFhPf8jGGdPUH8dX49OSy0+6v6m7EKLR6OlEXZXgvoFr8H7e19LLdYIhwL8c59f0JK8KjPb2YJvElf3G8qCv8P1LRxUZWa/tuC7VCl1qMqkVuLhRAcXVdguTOS6B6+WjYOql3fiINwQ6WSR8JaeEibjpgQOeMCA6mmn5hbpIUF8LHYIefY+CWPvxX2DGuuS66XSrgqmixe7Xag9DBRLs9PAkzhJnhrZIKwWSgGr6jo2Pb5sESqQC3V3nEyYEKpOl2iYl8eet1YJN5+XC8nIZOR4+F24n5svFF1ejhlct+jqcBTmCtXPMRwtFKF7hcA/8L0QOT4RZnQdfkh1+DdfUo2LUU0eeQAAAABJRU5ErkJggg=="},"1onU":function(e,t,r){"use strict";var a=r("VT+v"),n=r("juIs");var i=function(e){r("ZdV2"),r("co/t")},o=r("VU/8")(a.a,n.a,i,"data-v-695be8cd",null);t.a=o.exports},"2Jo/":function(e,t,r){"use strict";var a={render:function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:r.loading,expression:"loading"}],staticClass:"identicalStyle clearfix plantOrigin"},[a("keep-alive",[a("searchInfo",{on:{change:r.getSearchParam}})],1),r._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"btns_box"},["AF0080607PT"!=r.status&&"AF0080606PT"!=r.status?a("el-button",{attrs:{type:"primary",icon:"el-icon-warning",size:r.btnsize,plain:""},on:{click:function(e){r.handleSearch("cancel")}}},[r._v("取消订单")]):r._e(),r._v(" "),"AF0080607PT"==r.status?a("el-button",{directives:[{name:"has",rawName:"v-has:ORDER_CITY_WIDE_ORDER_ING_CONFIRM_RECEIPT",arg:"ORDER_CITY_WIDE_ORDER_ING_CONFIRM_RECEIPT"}],attrs:{type:"primary",icon:"el-icon-warning",size:r.btnsize,plain:""},on:{click:function(e){r.handleSearch("sure")}}},[r._v("确认收货")]):r._e()],1),r._v(" "),a("div",{staticClass:"info_news"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:r.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"selection-change":r.getinfomation,"row-click":r.clickDetails}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),r._v(" "),a("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                            "+r._s((r.page-1)*r.pagesize+e.$index+1)+"\n                        ")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"orderSerial",label:"订单号",width:"250"},scopedSlots:r._u([{key:"default",fn:function(t){return[a("h4",{staticClass:"needMoreInfo",on:{click:function(e){r.pushOrderSerial(t.row)}}},[r._v(r._s(t.row.orderSerial))])]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"orderType",label:"服务分类",width:"110"}}),r._v(" "),a("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":!0,prop:"belongCity",label:"区域",width:"150"}}),r._v(" "),a("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":!0,prop:"shipperMobile",label:"货主",width:"250"},scopedSlots:r._u([{key:"default",fn:function(e){return[a("p",[r._v(r._s(e.row.shipperMobile)),e.row.shipperName?a("span",[r._v("-")]):r._e(),r._v(r._s(e.row.shipperName))])]}}])}),r._v(" "),a("el-table-column",{attrs:{label:"车主","show-overflow-tooltip":!0,sortable:"",prop:"driverMobile",width:"250"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                            "+r._s(e.row.aflcDriverStatus.driverMobile)+r._s(e.row.aflcDriverStatus.driverName?"-"+e.row.aflcDriverStatus.driverName:"")+r._s(e.row.aflcDriverStatus.carNumber?"-"+e.row.aflcDriverStatus.carNumber:"")+"\n                        ")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":!0,prop:"usedCarType",label:"所需车型",width:"120"}}),r._v(" "),a("el-table-column",{attrs:{sortable:"","show-overflow-tooltip":!0,prop:"totalAmount",label:"运费总额（元）",width:"150"},scopedSlots:r._u([{key:"default",fn:function(e){return[e.row.aflcOrderExpenses?a("span",[r._v(r._s(e.row.aflcOrderExpenses.totalOrderPrice?e.row.aflcOrderExpenses.totalOrderPrice:""))]):a("span")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"useCarTime",label:"用车时间",width:"160"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                                "+r._s(r._f("parseTime")(e.row.useCarTime))+"    \n                            ")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"orderClass",label:"订单类型",width:"120"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                                "+r._s("1"==e.row.orderClass?"即时订单":"预约订单")+"\n                            ")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"payStatus",label:"付款状态",width:"120"}}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"aflcOrderAddresses",label:"提货地","show-overflow-tooltip":!0,width:"250"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                             "+r._s(e.row.aflcOrderAddresses[0].viaAddressName)+r._s(e.row.aflcOrderAddresses[0].viaAddress?"("+e.row.aflcOrderAddresses[0].viaAddress+")":"")+"\n                        ")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"aflcOrderAddresses",label:"目的地","show-overflow-tooltip":!0,width:"250"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                            "+r._s(e.row.aflcOrderAddresses[e.row.aflcOrderAddresses.length-1].viaAddressName)+r._s(e.row.aflcOrderAddresses[e.row.aflcOrderAddresses.length-1].viaAddress?"("+e.row.aflcOrderAddresses[e.row.aflcOrderAddresses.length-1].viaAddress+")":"")+"\n                        ")]}}])}),r._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"useTime",label:"下单时间",width:"160"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n                            "+r._s(r._f("parseTime")(e.row.useTime))+"\n                        ")]}}])})],1)],1)]),r._v(" "),a("div",{staticClass:"info_tab_footer"},[r._v("共计:"+r._s(r.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:r.dataTotal},on:{change:r.handlePageChange}})],1)]),r._v(" "),a("cancelCompnent",{attrs:{dialogVisible:r.dialogVisible,orderSerial:r.currentOrderSerial},on:{"update:dialogVisible":function(e){r.dialogVisible=e},close:r.shuaxin}})],1)},staticRenderFns:[]};t.a=a},"3aNt":function(e,t,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:t.searchInfo}},[r("el-form-item",{attrs:{label:"区域：",prop:"belongCityName"}},[r("getCityList",{ref:"area",staticClass:"chooseItem",on:{returnStr:t.getStr},model:{value:t.searchInfo.belongCityName,callback:function(e){t.$set(t.searchInfo,"belongCityName",e)},expression:"searchInfo.belongCityName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"订单号：",prop:"orderSerial"}},[r("el-input",{attrs:{clearable:""},model:{value:t.searchInfo.orderSerial,callback:function(e){t.$set(t.searchInfo,"orderSerial",e)},expression:"searchInfo.orderSerial"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"货主：",maxlength:"18",prop:"shipperName"}},[r("el-input",{attrs:{clearable:"",placeholder:"账户/姓名"},model:{value:t.searchInfo.shipperName,callback:function(e){t.$set(t.searchInfo,"shipperName",e)},expression:"searchInfo.shipperName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"车主：",maxlength:"18",prop:"driverName"}},[r("el-input",{attrs:{clearable:"",placeholder:"账户/姓名/车牌号"},model:{value:t.searchInfo.driverName,callback:function(e){t.$set(t.searchInfo,"driverName",e)},expression:"searchInfo.driverName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"下单时间：",prop:"chooseTime"}},[r("el-date-picker",{attrs:{type:"daterange","picker-options":t.pickerOptions2,"range-separator":"-","unlink-panels":"","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right","default-time":["00:00:00","23:59:59"],"value-format":"timestamp"},model:{value:t.chooseTime,callback:function(e){t.chooseTime=e},expression:"chooseTime"}})],1),t._v(" "),r("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:"",size:t.btnsize},on:{click:function(e){t.handleSearch("search")}}},[t._v("搜索")]),t._v(" "),r("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:t.btnsize,plain:""},on:{click:function(e){t.handleSearch("clear")}}},[t._v("清空")])],1)],1)},staticRenderFns:[]};t.a=a},"4t6y":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("8YLU"),n=r("3aNt");var i=function(e){r("ebyk")},o=r("VU/8")(a.a,n.a,i,"data-v-0a59d084",null);t.default=o.exports},"8YLU":function(e,t,r){"use strict";var a=r("woOf"),n=r.n(a),i=r("0xDb"),o=r("F6AQ");t.a={components:{getCityList:o.a},data:function(){return{btnsize:"mini",chooseTime:[],pickerOptions2:{shortcuts:i.l},searchInfo:{belongCity:"",belongCityName:"",shipperName:"",startOrderDate:"",endOrderDate:"",orderSerial:"",driverName:""}}},methods:{getStr:function(e){console.log("data:",e),this.searchInfo.belongCityName=e.province||e.city||e.area?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)).trim():"",this.searchInfo.belongCity=e.area.code},getValue:function(e){return e?e.value:""},handleSearch:function(e){var t=void 0;switch(e){case"search":this.searchInfo.startOrderDate=this.chooseTime[0],this.searchInfo.endOrderDate=this.chooseTime[1],t=n()({},this.searchInfo);break;case"clear":this.searchInfo={belongCity:"",belongCityName:"",shipperName:"",startOrderDate:"",endOrderDate:"",orderSerial:"",driverName:""},this.chooseTime=[],this.$refs.area.clearData(),t=n()({},this.searchInfo)}this.$emit("change",t)}}}},A3bd:function(e,t,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chooseCityList"},[r("el-cascader",{ref:"cityTree",attrs:{options:t.cityTree,disabled:t.disabled,props:t.props},on:{change:t.handleItemMore},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)},staticRenderFns:[]};t.a=a},F6AQ:function(e,t,r){"use strict";var a=r("dMM8"),n=r("A3bd");var i=function(e){r("TpPc")},o=r("VU/8")(a.a,n.a,i,null,null);t.a=o.exports},"Il+z":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("LgZO"),n=r("Qai0");var i=function(e){r("Wglj")},o=r("VU/8")(a.a,n.a,i,null,null);t.default=o.exports},Jkqo:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("ukWE"),n=r("2Jo/");var i=function(e){r("kPek")},o=r("VU/8")(a.a,n.a,i,"data-v-7a361d46",null);t.default=o.exports},LgZO:function(e,t,r){"use strict";var a=r("Jkqo");t.a={name:"orderTrack",components:{implementComponent:a.default},data:function(){return{orderTabName:"tihuo",visibleTabs:[{label:"待提货",name:"tihuo",type:"AF0080601PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_WIAT_PICK_GOODS"},{label:"待到车",name:"daoche",type:"AF0080602PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_WIAT_CAR"},{label:"待装货",name:"zhuanghuo",type:"AF0080603PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_WIAT_LOAD_GOODS"},{label:"完成装货",name:"wczhuanghuo",type:"AF0080604PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_FINISH_LOAD_GOODS"},{label:"运输中",name:"yunshu",type:"AF0080605PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_TRANSPORT_ING"},{label:"待卸货",name:"xiehuo",type:"AF0080606PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_WIAT_UNLOAD_GOODS"},{label:"完成卸货",name:"wcxiehuo",type:"AF0080607PT",vHas:"ORDER_CITY_WIDE_ORDER_ING_FINISH_UNLOAD_GOODS"}]}},watch:{orderTabName:function(e,t){console.log("newVal,oldVal",e,t),this.orderTabName=e||t}},created:function(){this.orderTabName=localStorage.getItem("orderTabName")||"tihuo"},beforeUpdate:function(){localStorage.setItem("orderTabName",this.orderTabName)},beforeDestroy:function(){localStorage.setItem("orderTabName",this.orderTabName||"tihuo")},methods:{handleClick:function(e,t){this.orderTabName=e.name}}}},Qai0:function(e,t,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"implement tabsWrap"},[r("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.orderTabName,callback:function(e){t.orderTabName=e},expression:"orderTabName"}},t._l(t.visibleTabs,function(e){return r("el-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}},[t.$_has_permission(e.vHas)?r("implementComponent",{attrs:{isvisible:t.orderTabName===e.name,status:e.type}}):t._e()],1)}))],1)},staticRenderFns:[]};t.a=a},TpPc:function(e,t){},"VT+v":function(e,t,r){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,r=e.target;console.log("page keydown:",t,r),13===t&&this.oldValue&&r.value!==this.oldValue&&(this.handleChange(r.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},Wglj:function(e,t){},ZdV2:function(e,t){},bsIq:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"delData cancel",attrs:{title:"取消订单",top:"35vh",modal:!1,visible:t.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"25%","before-close":t.close}},[r("div",{staticClass:"ifcancel"},[r("p",[r("img",{staticClass:"delwarn",attrs:{src:a("+/vL"),alt:""}}),t._v(" "),r("span",{staticClass:"delinfo"},[t._v("是否确认取消订单 ?")])]),t._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":t.formLabelWidth,"label-position":"right",size:"mini"}},[r("el-form-item",{attrs:{label:"取消原因：",prop:"cancelCode"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.cancelCode,callback:function(e){t.$set(t.form,"cancelCode",e)},expression:"form.cancelCode"}},t._l(t.optionsCancel,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1),t._v(" "),r("el-form-item",{attrs:{label:"备注：",prop:"cancelRemark"}},[r("el-input",{attrs:{autosize:{minRows:3,maxRows:10},type:"textarea",maxlength:400},model:{value:t.form.cancelRemark,callback:function(e){t.$set(t.form,"cancelRemark",e)},expression:"form.cancelRemark"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(e){t.handleSearch("sure")}}},[t._v("确认")]),t._v(" "),r("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:function(e){t.handleSearch("cancel")}}},[t._v("取消")])],1)])},staticRenderFns:[]};t.a=r},"co/t":function(e,t){},dMM8:function(e,t,r){"use strict";var a=r("t5DY");t.a={name:"getAreaList",props:{disabled:{type:Boolean},value:[String,Array]},data:function(){return{selectedOptions:[],cityTree:[],props:{label:"name",value:"code",children:"children"},nowData:{province:null,city:null,area:null}}},methods:{handleItemMore:function(e){this.nowData={province:null,city:null,area:null},e[0]&&(this.nowData.province={code:e[0],key:e[0],name:this.$refs.cityTree.currentLabels[0],value:this.$refs.cityTree.currentLabels[0],parentCode:null}),e[1]&&(this.nowData.city={code:e[1],key:e[1],name:this.$refs.cityTree.currentLabels[1],value:this.$refs.cityTree.currentLabels[1],parentCode:e[0]}),e[2]&&(this.nowData.area={code:e[2],key:e[2],name:this.$refs.cityTree.currentLabels[2],value:this.$refs.cityTree.currentLabels[2],parentCode:e[1]}),this.returnArr(this.nowData)},init:function(){var t=this;Object(a.Z)().then(function(e){t.cityTree=e.data})},returnArr:function(e){this.$emit("returnStr",e)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}},ebyk:function(e,t){},gDMb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("r1KN"),n=r("bsIq");var i=function(e){r("oXb8")},o=r("VU/8")(a.a,n.a,i,"data-v-2823b87e",null);t.default=o.exports},juIs:function(e,t,r){"use strict";var a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tms-pagenation"},[r("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[r("span",{staticClass:"first-page"})]),r("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[r("span",{staticClass:"prev-page"})]),t._v(" "),r("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),r("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),r("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[r("span",{staticClass:"next-page"})]),t._v(" "),r("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[r("span",{staticClass:"last-page"})]),t._v(" "),r("span",{staticClass:"tms-pagination__sizes"},[r("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=a},kPek:function(e,t){},oXb8:function(e,t){},pikG:function(e,t,r){"use strict";t.z=function(e,t,r){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/orderManager",method:"post",data:{currentPage:e,pageSize:t,vo:r}})},t.r=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/orderDetail/"+e,method:"get"})},t.l=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/getOrderPushList",method:"post",data:e})},t.k=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/getOrderGrabList",method:"post",data:e})},t.j=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/getOrderFollowingFiles",method:"post",data:e})},t.m=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/getReturnListAndEvaluation/"+e,method:"post"})},t.d=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/cancelOrder",method:"post",data:e})},t.e=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/cancelOrderListExcel",method:"post",responseType:"blob",data:e})},t.c=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/appointDriver",method:"post",data:e})},t.p=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/nearDriverList",method:"post",data:e})},t.i=function(e,t,r){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/getOrderCarTrailList",method:"post",data:{currentPage:e,pageSize:t,vo:r}})},t.a=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/customServiceRemark",method:"post",data:e})},t.E=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/sendDeductBonusSms",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:e})},t.h=function(){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/getCountByStatus",method:"post"})},t.F=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/webConfirmGoods",method:"post",data:e})},t.n=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderUnusual/v1/listMasterOrderUnusual",method:"post",data:e})},t.f=function(e){return Object(a.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/deductionBehavior/"+e,method:"post"})},t.A=function(e){return Object(a.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/returnBehavior/"+e,method:"post"})},t.C=function(e){return Object(a.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/returnReward/"+e,method:"post"})},t.o=function(e){return Object(a.a)({url:"/aflc-order/order/aflcOrderBackReward/v1/listReward/"+e,method:"post"})},t.B=function(e,t){return Object(a.a)({url:"/aflc-uc/usercenter/aflcBehaviorScoreDetail/v1/listReturnBehaviorDetial/"+e+"?riskControlCode="+t,method:"post"})},t.y=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderAudit/v1/orderReview",method:"post",data:e})},t.D=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderAuditRecord/v1/orderRecordReviewModify/"+e.orderSerial+"?reviewStatus="+e.reviewStatus,method:"put"})},t.g=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderExpenses/v1/findByOrderSerial/"+e,method:"get"})},t.s=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderAudit/v1/list",method:"post",data:e})},t.q=function(e){return Object(a.a)({url:"/"+o+"/im/driver/v1/nearbyDriver?longitude="+e.longitude+"&latitude="+e.latitude+"&carTypeCode="+e.carTypeCode+"&distance="+e.distance+"&keyword="+e.keyword+"&isVipCar="+e.isVipCar+"&currentPage="+e.currentPage+"&pageSize="+e.pageSize,method:"get"})},t.v=function(e,t,r){return Object(a.a)({url:"/"+i+"/usercenter/driverSurvey/v1/orderNumAndRank",method:"post",data:{currentPage:e,pageSize:t,vo:r}})},t.b=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/appointDriver",method:"post",data:e})},t.t=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrder/v1/orderManagerAudit",method:"post",data:e})},t.u=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderAuditRecord/v1/orderRecordAuditModify/"+e,method:"put"})},t.x=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderAuditRecord/v1/orderRecordAuditFinish",method:"post",data:e})},t.w=function(e){return Object(a.a)({url:"/"+n+"/order/aflcOrderAuditRecord/v1/orderRecordAuditExpenses/"+e,method:"get"})};var a=r("Vo7i"),n="aflc-order",i="aflc-uc",o="aflc-socket"},r1KN:function(e,t,r){"use strict";var a=r("woOf"),n=r.n(a),i=r("t5DY"),o=r("pikG");t.a={components:{},props:{dialogVisible:{type:Boolean,default:!1},orderSerial:{type:String,required:!0}},watch:{dialogVisible:function(e,t){e&&this.init()}},data:function(){return{cancelReason:"AF00512",formLabelWidth:"25%",loading:!0,form:{cancelRemark:"",cancelCode:"",cancelCause:"",cancelType:"AF0051302",orderSerial:""},optionsCancel:[],rules:{cancel:[{required:!0,message:"请选择取消原因",trigger:"blur"}]}}},methods:{init:function(){var t=this;Object(i._12)(this.cancelReason).then(function(e){t.optionsCancel=e.data,t.form.cancelCode=e.data[0].code,t.loading=!1})},handleSearch:function(e){var t=this;switch(e){case"cancel":this.close();break;case"sure":this.form.cancelCause=this.optionsCancel.find(function(e){return e.code==t.form.cancelCode}).name;var r=n()({},this.form,{orderSerial:this.orderSerial});Object(o.d)(r).then(function(e){t.close(),t.$message({type:"success",message:"操作成功~"})}).catch(function(e){t.$message({type:"info",message:e.text})})}},close:function(e){this.$refs.ruleForm.resetFields(),this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()}}}},t5DY:function(e,t,r){"use strict";t._10=function(t){return t=t||"",i.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return i.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(i.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(i.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(i.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(i.a)({url:"/"+s+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(i.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(i.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(i.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(i.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return i.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new n.a(function(e){e(window.UPLOADPOLICYDATA)}):i.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return i.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return i.a.get("/"+s+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(i.a)({url:"/"+s+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return i.a.get("/"+s+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return i.a.get("/"+s+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(i.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return i.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return i.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return i.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return i.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(i.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(i.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:e})};var a=r("//Fk"),n=r.n(a),i=r("Vo7i"),o="aflc-common",s="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},ukWE:function(e,t,r){"use strict";var a=r("woOf"),n=r.n(a),i=r("pikG"),o=(r("0xDb"),r("1onU")),s=r("4t6y"),c=r("gDMb"),l=r("TIfe");t.a={props:{isvisible:{type:Boolean,default:!1},status:{type:String,required:!0}},components:{Pager:o.a,searchInfo:s.default,cancelCompnent:c.default},data:function(){return{btnsize:"mini",currentOrderSerial:"",timeOut:null,loading:!0,sizes:[20,50,100],pagesize:20,page:1,dataTotal:0,searchInfo:{belongCity:"",shipperName:"",startOrderDate:"",endOrderDate:"",orderSerial:"",orderStatus:"",parentOrderStatus:"AF00806PT"},tableData:[],dialogFormVisible_details:!1,DetailsOrderSerial:"",dialogVisible:!1,checkedinformation:[]}},watch:{isvisible:{handler:function(e,t){e?this.firstblood():clearInterval(this.timeOut)},immediate:!0}},created:function(){},mounted:function(){},beforeDestroy:function(){clearInterval(this.timeOut)},methods:{handlePageChange:function(e){this.page=e.pageNum,this.pagesize=e.pageSize,this.firstblood()},firstblood:function(){var t=this;this.loading=!0,this.searchInfo.orderStatus=this.status,Object(i.z)(this.page,this.pagesize,this.searchInfo).then(function(e){console.log("是否刷新",e.data),t.tableData=e.data.list,t.dataTotal=e.data.totalCount,t.tableData.forEach(function(e){e.aflcOrderAddresses.sort(function(e,t){return e.viaOrder-t.viaOrder})}),t.loading=!1}).catch(function(e){t.$message({type:"warning",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),t.loading=!1})},handleSearch:function(e){var t=this;if(0==this.checkedinformation.length)return this.$message({type:"info",message:"请选择一个订单"});if(1<this.checkedinformation.length)return this.$message({type:"info",message:"只能选择一个订单"});switch(e){case"cancel":this.currentOrderSerial=this.checkedinformation[0].orderSerial,this.dialogVisible=!0;break;case"sure":console.log(Object(l.b)(),this.checkedinformation[0]);var r={orderSerial:this.checkedinformation[0].orderSerial,shipperId:this.checkedinformation[0].shipperId,name:Object(l.b)().name,userId:Object(l.b)().id,userName:Object(l.b)().username};Object(i.F)(r).then(function(e){t.$message({type:"success",message:"已确认收货！"}),t.firstblood()}).catch(function(e){t.$message({type:"warning",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})}},getinfomation:function(e){console.log("当前选中",e),this.checkedinformation=e},clickDetails:function(e,t,r){this.$refs.multipleTable.toggleRowSelection(e)},pushOrderSerial:function(e){this.$router.push({name:"订单详情",query:{orderSerial:e.orderSerial}})},getSearchParam:function(e){console.log(e),this.searchInfo=n()(this.searchInfo,e),this.loading=!1,1!=this.page&&(this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page),this.firstblood()},shuaxin:function(){this.firstblood()}}}}});
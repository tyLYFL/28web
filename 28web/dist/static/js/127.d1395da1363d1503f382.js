webpackJsonp([127,166,364,521],{"/55F":function(e,t){},"1onU":function(e,t,n){"use strict";var a=n("VT+v"),i=n("juIs");var s=function(e){n("ZdV2"),n("co/t")},o=n("VU/8")(a.a,i.a,s,"data-v-695be8cd",null);t.a=o.exports},"2JQB":function(e,t){},"33qD":function(e,t){},"4E2J":function(e,t,n){"use strict";var a=n("t5DY"),i=n("ecTC");t.a={name:"garde",components:{},props:{dialogVisible:{type:Boolean,default:!1},initForm:{type:Array}},watch:{dialogVisible:function(e,t){e&&(console.log(this.initForm),this.form.potentialGrade=this.initForm[0].levelAdjustmentCode)}},data:function(){return{formLabelWidth:"0",loading:!0,form:{potentialGrade:""},optionsGradeType:[],rules:{potentialGrade:{required:!0,message:"请选择调整等级",trigger:"change"}}}},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(a.v)().then(function(e){t.optionsGradeType=e.data})},submitForm:function(e){var n=this;this.$refs[e].validate(function(e){if(!e)return n.$message({type:"warning",message:"请填写完整数据!"}),!1;n.btnShow=!0;var t=[];n.initForm.forEach(function(e){t.push({id:e.id,potentialGrade:n.form.potentialGrade,potentialGradeName:n.optionsGradeType.find(function(e){return e.code==n.form.potentialGrade}).name})}),Object(i.a)(t).then(function(e){n.$message({type:"success",message:"操作成功！"}),n.close()}).catch(function(e){n.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),n.btnShow=!1})})},close:function(e){this.$refs.ruleForm.resetFields(),this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()}}}},"4Uw5":function(e,t,n){"use strict";var a=n("O6e2"),i=n("HlqG");t.a={props:{value:{type:[Number,String]},disabled:{type:Boolean,default:!1}},watch:{value:function(e){this.aid=e,this.init()}},mounted:function(){var e=this;this.aid=this.value,this.init(),a.a.$on("closepopbox",function(){e.$refs.myautocomplete.handleClose()})},computed:{openGroups:function(){return function t(e,n){var a=[];return e.map(function(e){e.index=n,a.push(e),e.children&&(a=a.concat(t(e.children,n+1)))}),a}(this.groups,1)}},data:function(){return{groups:[],aid:""}},methods:{init:function(){var t=this;Object(i.c)().then(function(e){t.groups=[],t.groups.push(e.data[0])}).catch(function(e){t.inited=!1})},change:function(e){this.$emit("change",e)},selectData:function(e){this.$emit("inputObject",e)},clearInput:function(){this.aid=null}}}},"4wD2":function(e,t){},"6q1I":function(e,t,n){"use strict";var a=n("9j5Z");t.a={name:"shipperGrade",components:{tongcheng:a.default},data:function(){return{gradeName:"tongcheng"}},computed:{},mounted:function(){},methods:{init:function(){},handleClick:function(e,t){this.gradeName=e.name}}}},"9/ED":function(e,t,n){"use strict";var a=n("4Uw5"),i=n("gtxl");var s=function(e){n("2JQB")},o=n("VU/8")(a.a,i.a,s,null,null);t.a=o.exports},"9j5Z":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("VVE0"),i=n("Mgyb");var s=function(e){n("/55F")},o=n("VU/8")(a.a,i.a,s,"data-v-45c24ade",null);t.default=o.exports},Flqv:function(e,t,n){"use strict";var a=n("zLJG"),i=n("U0PT");var s=function(e){n("33qD")},o=n("VU/8")(a.a,i.a,s,null,null);t.a=o.exports},HlqG:function(e,t,n){"use strict";t.c=function(){return a.a.get("/"+i+"/usercenter/aflcBusinessGroup/v1/tree")},t.b=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcBusinessGroupUser/v1/list",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcBusinessGroup/v1/addGroupAndUsers",method:"post",data:e})},t.e=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcBusinessGroup/v1/updateGroupAndUsers",method:"put",data:e})},t.d=function(e){return a.a.get("/"+i+"/usercenter/aflcBusinessGroup/v1/selectGroupAndUsers/"+e)};var a=n("Vo7i"),i="aflc-uc"},Mgyb:function(e,t,n){"use strict";var a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"identicalStyle"},[a("searchInfo",{attrs:{showType:n.tabType},on:{change:n.getSearchParam}}),n._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"btns_box"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit-outline",plain:"",size:n.btnsize},on:{click:function(e){n.handleClick("adjust")}}},[n._v("等级调整")]),n._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-notebook-2",plain:"",size:n.btnsize},on:{click:function(e){n.handleClick("view")}}},[n._v("查看详情")])],1),n._v(" "),a("div",{staticClass:"info_news"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:n.tableDataAll,stripe:"",border:"",height:"100%","tooltip-effect":"dark"},on:{"selection-change":n.getSelection}},[a("el-table-column",{attrs:{label:"选择",type:"selection",width:"50"}}),n._v(" "),a("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                        "+n._s((n.listSystemObj.currentPage-1)*n.listSystemObj.pageSize+e.$index+1)+"\n                    ")]}}])}),n._v(" "),a("el-table-column",{attrs:{label:"手机号",prop:"mobile",sortable:"",width:"150"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("h4",{staticClass:"needMoreInfo",on:{click:function(e){n.pushOrderSerial(t.row)}}},[n._v(n._s(t.row.mobile))])]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"companyName","show-overflow-tooltip":!0,sortable:"",label:"公司名称",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"contacts","show-overflow-tooltip":!0,width:"150",sortable:"",label:"联系人"}}),n._v(" "),a("el-table-column",{attrs:{prop:"shipperType",sortable:"",label:"货主类型",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"potentialGradeName",sortable:"",label:"同城潜力等级",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"belongCityName",sortable:"",label:"所在地",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"tradeAreaId",sortable:"",label:"所属商圈",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"regisAddress","show-overflow-tooltip":!0,sortable:"",label:"所属业务组",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"belongSalesmanName","show-overflow-tooltip":!0,sortable:"",label:"所属业务员",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"orderVolumeLastMonth",sortable:"",width:"150",label:"上月订单量"}}),n._v(" "),a("el-table-column",{attrs:{prop:"levelAdjustment",sortable:"",width:"150",label:"调整等级"}})],1)],1)]),n._v(" "),a("div",{staticClass:"info_tab_footer"},[n._v("共计:"+n._s(n.totalCount)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:n.totalCount},on:{change:n.handlePageChange}})],1)]),n._v(" "),a("grade",{attrs:{dialogVisible:n.dialogVisible,initForm:n.currentArr},on:{"update:dialogVisible":function(e){n.dialogVisible=e},close:n.firstblood}})],1)},staticRenderFns:[]};t.a=a},NnBl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("6q1I"),i=n("P2da");var s=function(e){n("tl/2")},o=n("VU/8")(a.a,i.a,s,null,null);t.default=o.exports},P2da:function(e,t,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shipperGrade tabsWrap"},[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.gradeName,callback:function(e){t.gradeName=e},expression:"gradeName"}},[n("el-tab-pane",{attrs:{label:"同城",name:"tongcheng"}},[n("tongcheng",{attrs:{isvisible:"tongcheng"===t.gradeName}})],1)],1)],1)},staticRenderFns:[]};t.a=a},SqXm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4E2J"),i=n("VbUW");var s=function(e){n("q6/W")},o=n("VU/8")(a.a,i.a,s,null,null);t.default=o.exports},U0PT:function(e,t,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chooseCityList"},[n("el-cascader",{ref:"chinaData",attrs:{placeholder:t.placeholderTxt,options:t.cascaderData,separator:"-","change-on-select":t.ifChange,props:t.props},on:{change:t.handleItemMore,"active-item-change":t.handleItemChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)},staticRenderFns:[]};t.a=a},"VT+v":function(e,t,n){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,n=e.target;console.log("page keydown:",t,n),13===t&&this.oldValue&&n.value!==this.oldValue&&(this.handleChange(n.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},VVE0:function(e,t,n){"use strict";var a=n("ecTC"),i=n("1onU"),s=n("b6z+"),o=n("SqXm"),r=n("0xDb");t.a={components:{Pager:i.a,searchInfo:s.default,grade:o.default},props:{isvisible:{type:Boolean,default:!1}},data:function(){return{loading:!1,tabType:"All",btnsize:"mini",dialogVisible:!1,searchInfo:{belongCity:"",shipperStatus:"",accountStatus:"",companyName:"",mobile:"",usingStatus:""},listSystemObj:{currentPage:1,pageSize:20,vo:{}},totalCount:0,tableDataAll:[],selected:[],currentArr:[]}},created:function(){},watch:{isvisible:{handler:function(e,t){e&&this.firstblood()},immediate:!0}},mounted:function(){},methods:{clickDetails:function(e,t,n){this.$refs.multipleTable.toggleRowSelection(e)},getSelection:function(e){this.selected=e},getSearchParam:function(e){this.listSystemObj.vo=Object(r.i)(e),1!=this.listSystemObj.currentPage&&(this.listSystemObj.currentPage=e.pageNum,this.listSystemObj.pageSize=e.pageSize),this.firstblood()},pushOrderSerial:function(e){},handlePageChange:function(e){this.listSystemObj.currentPage=e.pageNum,this.listSystemObj.pageSize=e.pageSize,this.firstblood()},handleClick:function(e){switch(e){case"adjust":if(0==this.selected.length)return this.$message.warning("请选择一项列表数据");console.log("this.selected",this.selected),this.currentArr=this.selected,this.dialogVisible=!0;break;case"view":if(1!=this.selected.length)return this.$message.warning("请选择一项列表数据");this.$router.push({name:"货主详情",query:{userId:this.selected[0].id}})}this.$refs.multipleTable.clearSelection()},firstblood:function(){var t=this;this.loading=!0,Object(a.b)(this.listSystemObj).then(function(e){t.totalCount=e.data.totalCount,t.tableDataAll=e.data.list,t.loading=!1}).catch(function(e){t.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),t.loading=!1})},getDataList:function(){var e=this;this.$nextTick(function(){e.firstblood()})}}}},VbUW:function(e,t,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"garde",attrs:{title:"是否将潜力等级调整为以下等级",top:"15vh",modal:!1,visible:t.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"30%","before-close":t.close}},[n("div",{staticClass:"ifcancel"},[n("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":t.formLabelWidth,"label-position":"right"}},[n("el-form-item",{attrs:{prop:"potentialGrade"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.potentialGrade,callback:function(e){t.$set(t.form,"potentialGrade",e)},expression:"form.potentialGrade"}},t._l(t.optionsGradeType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("确认")]),t._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.close}},[t._v("取消")])],1)])},staticRenderFns:[]};t.a=a},ZdV2:function(e,t){},"b6z+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("qCqu"),i=n("ffyQ");var s=function(e){n("4wD2")},o=n("VU/8")(a.a,i.a,s,"data-v-150b8bcc",null);t.default=o.exports},"co/t":function(e,t){},ecTC:function(e,t,n){"use strict";t.b=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcShipperExtend/v1/shipperLevelList",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/"+i+"/usercenter/aflcShipperExtend/v1/updatePotentialGrade",method:"put",data:e})};var a=n("Vo7i"),i="aflc-uc"},ffyQ:function(e,t,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:t.searchInfo}},[n("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[n("el-input",{attrs:{placeholder:"请输入",clearable:"",maxlength:"11"},model:{value:t.searchInfo.mobile,callback:function(e){t.$set(t.searchInfo,"mobile","string"==typeof e?e.trim():e)},expression:"searchInfo.mobile"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[n("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:t.searchInfo.companyName,callback:function(e){t.$set(t.searchInfo,"companyName","string"==typeof e?e.trim():e)},expression:"searchInfo.companyName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人",prop:"contacts"}},[n("el-input",{attrs:{placeholder:"请输入",clearable:"",maxlength:"20"},model:{value:t.searchInfo.contacts,callback:function(e){t.$set(t.searchInfo,"contacts","string"==typeof e?e.trim():e)},expression:"searchInfo.contacts"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"同城潜力等级",prop:"potentialGrade"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchInfo.potentialGrade,callback:function(e){t.$set(t.searchInfo,"potentialGrade",e)},expression:"searchInfo.potentialGrade"}},t._l(t.optionsGradeType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"所在地",prop:"belongCity"}},[n("getCityList",{ref:"gradeChinaMap",attrs:{isArea:!0,ifChange:!0},on:{returnStr:t.getStrStart},model:{value:t.searchInfo.belongCity,callback:function(e){t.$set(t.searchInfo,"belongCity",e)},expression:"searchInfo.belongCity"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"货主类型",prop:"shipperType"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchInfo.shipperType,callback:function(e){t.$set(t.searchInfo,"shipperType",e)},expression:"searchInfo.shipperType"}},t._l(t.optionsShipperType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"所属商圈",prop:"tradeAreaId"}},[n("el-input",{attrs:{clearable:""},model:{value:t.searchInfo.tradeAreaId,callback:function(e){t.$set(t.searchInfo,"tradeAreaId","string"==typeof e?e.trim():e)},expression:"searchInfo.tradeAreaId"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"所属业务组",prop:"groupCode"}},[n("businessGroup",{ref:"businessGroup",on:{change:t.getVal},model:{value:t.searchInfo.groupCode,callback:function(e){t.$set(t.searchInfo,"groupCode",e)},expression:"searchInfo.groupCode"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"调整等级",prop:"levelAdjustment"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchInfo.levelAdjustment,callback:function(e){t.$set(t.searchInfo,"levelAdjustment",e)},expression:"searchInfo.levelAdjustment"}},t._l(t.optionsLevelAdjustment,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.code,disabled:e.disabled}})}))],1),t._v(" "),n("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[n("el-button",{attrs:{type:"primary",size:t.btnsize,icon:"el-icon-search",plain:""},on:{click:function(e){t.handleSearch("search")}}},[t._v("搜索")]),t._v(" "),n("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:t.btnsize,plain:""},on:{click:function(e){t.handleSearch("clear")}}},[t._v("清空")])],1)],1)},staticRenderFns:[]};t.a=a},gtxl:function(e,t,n){"use strict";var a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("el-select",{ref:"myautocomplete",staticClass:"select-tree",attrs:{disabled:n.disabled},on:{change:n.change},model:{value:n.aid,callback:function(e){n.aid=e},expression:"aid"}},n._l(n.openGroups,function(t){return a("el-option",{key:t.id,attrs:{label:t.groupName,value:t.id}},[a("div",{class:"indent indent"+t.index,on:{click:function(e){n.selectData(t)}}},[n._v(n._s(t.groupName))])])}))},staticRenderFns:[]};t.a=a},juIs:function(e,t,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tms-pagenation"},[n("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[n("span",{staticClass:"first-page"})]),n("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[n("span",{staticClass:"prev-page"})]),t._v(" "),n("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),n("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),n("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[n("span",{staticClass:"next-page"})]),t._v(" "),n("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[n("span",{staticClass:"last-page"})]),t._v(" "),n("span",{staticClass:"tms-pagination__sizes"},[n("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=a},"q6/W":function(e,t){},qCqu:function(e,t,n){"use strict";var a=n("woOf"),i=n.n(a),s=n("//Fk"),o=n.n(s),r=n("bOdI"),c=n.n(r),l=(n("0xDb"),n("t5DY")),u=n("9/ED"),d=n("Flqv");t.a={components:{businessGroup:u.a,getCityList:d.a},props:{showType:{type:String,default:"All"}},data:function(){var e;return{btnsize:"mini",auditingStatus:"AF00104",accountStatus:"AF00105",searchInfo:(e={belongCity:"",belongCityName:"",belongIndustry:"",belongIndustryName:"",belongSalesmanName:"",companyName:"",contacts:"",groupCode:"",groupName:"",levelAdjustment:"",mobile:""},c()(e,"groupCode",""),c()(e,"groupName",""),c()(e,"potentialGrade",""),c()(e,"potentialGradeName",""),c()(e,"shipperType",""),c()(e,"tradeAreaId",""),e),optionsGradeType:[{code:"",name:"全部"}],optionsShipperType:[{code:"",name:"全部"}],optionsIndustryType:[{code:"",name:"全部"}],optionsLevelAdjustment:[{code:"",name:"全部"}]}},watch:{},mounted:function(){this.init()},methods:{getStrStart:function(e){e.area?this.searchInfo.belongCity=e.area.code:e.city?this.searchInfo.belongCity=e.city.code:this.searchInfo.belongCity=e.province.code},init:function(){var t=this;o.a.all([Object(l.v)(),Object(l.O)(),Object(l.w)()]).then(function(e){t.optionsGradeType=t.optionsGradeType.concat(e[0].data),t.optionsLevelAdjustment=t.optionsLevelAdjustment.concat(e[0].data),t.optionsShipperType=t.optionsShipperType.concat(e[1].data),t.optionsIndustryType=t.optionsIndustryType.concat(e[2].data)})},handleSearch:function(e){if("clear"==e){for(var t in this.searchInfo)this.searchInfo[t]="";this.$refs.gradeChinaMap.clearData()}var n=i()({},this.searchInfo);this.$emit("change",n)},getVal:function(e){console.log(e),this.searchInfo.groupCode=e}}}},t5DY:function(e,t,n){"use strict";t._10=function(t){return t=t||"",s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(s.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(s.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(s.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new i.a(function(e){e(window.UPLOADPOLICYDATA)}):s.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return s.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return s.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(s.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return s.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return s.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(s.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(s.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:e})};var a=n("//Fk"),i=n.n(a),s=n("Vo7i"),o="aflc-common",r="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},"tl/2":function(e,t){},zLJG:function(e,t,n){"use strict";var s=n("t5DY");t.a={name:"getAreaList",props:{disabled:{type:Boolean},value:[String,Array,Number],isArea:{type:Boolean,default:!1},ifChange:{type:Boolean,default:!1},placeholderTxt:{type:String,default:"请选择"}},data:function(){return{departmentOptions:[],cascaderData:[],selectedOptions:[],props:{label:"name",value:"code",children:"cities"},nowData:{province:null,city:null,area:null}}},methods:{getNodes:function(a){var i=this,e=void 0,t=void 0;a?1===a.length?(e=a[0],t=a.length):2===a.length&&this.isArea&&(e=a[1],t=a.length):(e=null,t=0),Object(s._10)(e).then(function(e){if(e.data){var n=e.data;0===t?i.cascaderData=n.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):1===t?i.cascaderData.map(function(e,t){e.code===a[0]&&(i.isArea?e.cities=n.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):e.cities=n.map(function(e,t){return{code:e.code,name:e.name}}))}):2===t&&i.isArea&&i.cascaderData.map(function(e,t){e.code===a[0]&&e.cities.map(function(e,t){e.code===a[1]&&(e.cities.length||(e.cities=n.map(function(e,t){return{code:e.code,name:e.name}})))})})}}).catch(function(e){return i.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})},handleItemChange:function(e){this.getNodes(e)},handleItemMore:function(e){this.ifChange&&this.getNodes(e),e[0]&&(this.nowData.province={code:e[0],key:e[0],name:this.$refs.chinaData.currentLabels[0],value:this.$refs.chinaData.currentLabels[0],parentCode:null}),e[1]&&(this.nowData.city={code:e[1],key:e[1],name:this.$refs.chinaData.currentLabels[1],value:this.$refs.chinaData.currentLabels[1],parentCode:e[0]}),e[2]&&(this.nowData.area={code:e[2],key:e[2],name:this.$refs.chinaData.currentLabels[2],value:this.$refs.chinaData.currentLabels[2],parentCode:e[1]}),this.returnArr(this.nowData)},init:function(){this.getNodes()},returnArr:function(e){this.$emit("returnStr",e)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}}});
webpackJsonp([361],{"+3zm":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Kf0V"),i=a("7kh6");var s=function(e){a("jjzw")},l=a("VU/8")(n.a,i.a,s,"data-v-3b1a10a7",null);t.default=l.exports},"1onU":function(e,t,a){"use strict";var n=a("VT+v"),i=a("juIs");var s=function(e){a("ZdV2"),a("co/t")},l=a("VU/8")(n.a,i.a,s,"data-v-695be8cd",null);t.a=l.exports},"7kh6":function(e,t,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"identicalStyle creatQRCode"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:t.searchInfo}},[a("el-form-item",{attrs:{label:"业务员",prop:"salesman"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchInfo.salesman,callback:function(e){t.$set(t.searchInfo,"salesman",e)},expression:"searchInfo.salesman"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道名称",prop:"channal"}},[a("selectChannel",{on:{change:t.getVal},model:{value:t.searchInfo.channal,callback:function(e){t.$set(t.searchInfo,"channal",e)},expression:"searchInfo.channal"}})],1),t._v(" "),a("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:"",size:t.btnsize},on:{click:function(e){t.handleSearch("search")}}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:t.btnsize,plain:""},on:{click:function(e){t.handleSearch("clear")}}},[t._v("清空")])],1)],1),t._v(" "),a("div",{staticClass:"classify_info"},[a("div",{staticClass:"info_news",staticStyle:{height:"89%"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"selection-change":t.getinfomation,"row-click":t.clickDetails}},[a("el-table-column",{attrs:{label:"序号",sortable:"",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            "+t._s((t.page-1)*t.pagesize+e.$index+1)+"\n                        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"salesman",label:"业务员",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"channelName","show-overflow-tooltip":!0,sortable:"",label:"渠道名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"regisShipper","show-overflow-tooltip":!0,sortable:"",label:"注册货主"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cartificationeShipper","show-overflow-tooltip":!0,sortable:"",label:"认证货主"}}),t._v(" "),a("el-table-column",{attrs:{prop:"shipperOrdernum",sortable:"",label:"货主下单数量",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"regisDriver",sortable:"",label:"注册车主",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cartificationeDriver",sortable:"",label:"认证车主",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"regisLogisticsCompany",sortable:"",label:"注册物流公司",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cartificationeLogisticsCompany",sortable:"",label:"认证物流公司",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"logisticsCompanyOrdernum",sortable:"",label:"物流公司下单数量",width:"160"}})],1)],1)]),t._v(" "),a("div",{staticClass:"info_tab_footer"},[t._v("共计:"+t._s(t.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:t.dataTotal},on:{change:t.handlePageChange}})],1)])],1)},staticRenderFns:[]};t.a=n},Kf0V:function(e,t,a){"use strict";var n=a("dtI4"),i=(a("0xDb"),a("1onU")),s=a("mmv8");t.a={props:{isvisible:{type:Boolean,default:!1}},components:{Pager:i.a,selectChannel:s.a},data:function(){return{btnsize:"mini",loading:!0,sizes:[20,50,100,400],pagesize:20,page:1,dataTotal:0,searchInfo:{channal:"",salesman:""},tableData:[],checkedinformation:[]}},watch:{isvisible:{handler:function(e,t){e&&this.firstblood()},immediate:!0}},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{getVal:function(e){this.searchInfo.channal=e},handlePageChange:function(e){this.page=e.pageNum,this.pagesize=e.pageSize,this.firstblood()},firstblood:function(){var t=this;this.loading=!0,Object(n.a)(this.page,this.pagesize,this.searchInfo).then(function(e){t.tableData=e.data.list,t.dataTotal=e.data.totalCount,t.loading=!1})},handleSearch:function(e){switch(e){case"search":break;case"clear":this.$refs.ruleForm.resetFields()}1!=this.page&&(this.page=1,this.$refs.pager.inputval=this.page,this.$refs.pager.pageNum=this.page),this.firstblood()},getinfomation:function(e){this.checkedinformation=e},clickDetails:function(e,t,a){this.$refs.multipleTable.toggleRowSelection(e)}}}},"VT+v":function(e,t,a){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,a=e.target;console.log("page keydown:",t,a),13===t&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},VtGQ:function(e,t,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{ref:"myautocomplete",staticClass:"select-tree",attrs:{disabled:t.disabled},on:{change:t.change},model:{value:t.aid,callback:function(e){t.aid=e},expression:"aid"}},t._l(t.openGroups,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.code}},[a("div",{class:"indent indent"+e.index},[t._v(t._s(e.name))])])}))},staticRenderFns:[]};t.a=n},ZdV2:function(e,t){},"co/t":function(e,t){},dtI4:function(e,t,a){"use strict";t.c=function(e,t,a){return Object(n.a)({url:"/"+i+"/common/aflcQrcode/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:a}})},t.b=function(e){return Object(n.a)({url:"/"+i+"/common/aflcQrcode/v1/delete/"+e,method:"DELETE"})},t.d=function(e){return Object(n.a)({url:"/"+i+"/common/aflcQrcode/v1/add",method:"post",data:e})},t.e=function(){return Object(n.a)({url:"/"+i+"/sysDict/getChannel/?code=AF0030103",method:"get"})},t.a=function(e,t,a){return Object(n.a)({url:"/"+i+"/common/aflcChannelStatistics/v1/list",method:"post",data:{currentPage:e,pageSize:t,vo:a}})};var n=a("Vo7i"),i="aflc-common"},hfOx:function(e,t,a){"use strict";var n=a("O6e2"),i=a("dtI4");t.a={props:{value:{type:[Number,String]},disabled:{type:Boolean,default:!1}},watch:{value:function(e){this.aid=e,this.init()}},mounted:function(){var e=this;this.aid=this.value,this.init(),n.a.$on("closepopbox",function(){e.$refs.myautocomplete.handleClose()})},computed:{openGroups:function(){return function t(e,a){var n=[];return e.map(function(e){e.index=a,n.push(e),e.children&&(n=n.concat(t(e.children,a+1)))}),n}(this.groups,1)}},data:function(){return{groups:[],aid:""}},methods:{init:function(){var t=this;this.inited||(this.inited=!0,Object(i.e)().then(function(e){t.groups=e.data[0].children}).catch(function(e){t.inited=!1}))},change:function(e){this.$emit("change",e),this.$emit("input",e)}}}},jjzw:function(e,t){},juIs:function(e,t,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=n},mmv8:function(e,t,a){"use strict";var n=a("hfOx"),i=a("VtGQ");var s=function(e){a("ugsU")},l=a("VU/8")(n.a,i.a,s,null,null);t.a=l.exports},ugsU:function(e,t){}});
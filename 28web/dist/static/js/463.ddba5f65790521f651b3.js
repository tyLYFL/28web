webpackJsonp([463],{"+qcM":function(t,e,a){"use strict";e.a=function(t,e,a){return Object(s.a)({url:"/"+n+"/usercenter/aflcDriverDeposit/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.b=function(t){return Object(s.a)({url:"/"+n+"/usercenter/aflcDriverDeposit/v1/freeze?id="+t,method:"get"})},e.d=function(t,e,a,i){return Object(s.a)({url:"/"+n+"/usercenter/aflcShipperDeposit/v1/list/"+i,method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.e=function(t,e,a){return Object(s.a)({url:"/"+n+"/usercenter/aflcShipperDeposit/v1/agencyRecharge/"+e+"/"+a,method:"put",data:t})},e.c=function(t,e,a){return Object(s.a)({url:"/"+n+"/usercenter/aflcMywalletDetail/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:a}})};var s=a("Vo7i"),n="aflc-uc"},"1J8i":function(t,e,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bailManageDetail commoncss"},[a("el-dialog",{ref:"dialog",attrs:{title:e.typetitle,visible:e.dialogDetailNotes,"modal-append-to-body":!1,"before-close":e.close,top:"5vh","close-on-click-modal":!1}},[a("div",{staticStyle:{height:"100%"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",border:"",height:"100%","highlight-current-row":"",data:e.tableDataAll,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n             "+e._s((e.page-1)*e.pagesize+t.$index+1)+"\n           ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易流水号",prop:"serial","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"交易类型",prop:"tradeTypeName","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"资金流水号",prop:"fundSerial","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"收支类型",prop:"incomeExpendTypeName","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"交易金额",prop:"tradeAmount","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",prop:"tradeTime","show-overflow-tooltip":""}})],1)],1),e._v(" "),a("div",{staticClass:"info_tab_footer"},[e._v("共计:"+e._s(e.dataTotal)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{ref:"pager",attrs:{total:e.dataTotal,sizes:e.sizes},on:{change:e.handlePageChange}})],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.close()}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};e.a=i},"1onU":function(t,e,a){"use strict";var i=a("VT+v"),s=a("juIs");var n=function(t){a("ZdV2"),a("co/t")},l=a("VU/8")(i.a,s.a,n,"data-v-695be8cd",null);e.a=l.exports},A2Gw:function(t,e){},Hn17:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NN74"),s=a("1J8i");var n=function(t){a("A2Gw")},l=a("VU/8")(i.a,s.a,n,null,null);e.default=l.exports},NN74:function(t,e,a){"use strict";a("O6e2");var i=a("0xDb"),s=a("+qcM"),n=a("1onU");e.a={components:{Pager:n.a},props:{params:{type:[Object,Array]},typetitle:{type:String,default:""},editType:{type:String},dialogDetailNotes:{type:Boolean,default:!1}},data:function(){return{defaultImg:"/static/test.jpg",formLabelWidth:"150px",pickerOptions2:{shortcuts:i.l},btnsize:"mini",selectRowData:[],sizes:[10,20,50,100],pagesize:10,page:1,totalCount:null,dataTotal:0,tableDataAll:[],formAll:{accountId:null,recordType:"2"}}},watch:{dialogDetailNotes:{handler:function(t,e){t?this.openDialog():(this.$emit("getData"),this.formAll={accountId:null,recordType:"2"})}}},methods:{openDialog:function(){this.formAll.accountId=this.params.id,this.firstblood()},close:function(){this.$emit("update:dialogDetailNotes",!1)},firstblood:function(){var e=this;Object(s.c)(this.page,this.pagesize,this.formAll).then(function(t){e.dataTotal=t.data.totalCount,e.tableDataAll=t.data.list,e.tableDataAll.forEach(function(t){t.tradeTime=Object(i.k)(t.tradeTime,"{y}-{m}-{d} {h}:{i}:{s}")})})},handlePageChange:function(t){this.page=t.pageNum,this.pagesize=t.pageSize,this.firstblood()}}}},"VT+v":function(t,e,a){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,a=t.target;console.log("page keydown:",e,a),13===e&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(t){console.log("d",this.inputval),t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},ZdV2:function(t,e){},"co/t":function(t,e){},juIs:function(t,e,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),e._v(" "),a("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},nativeOn:{keydown:function(t){return e.handleKeyup(t)}},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),e._v(" "),a("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[a("span",{staticClass:"last-page"})]),e._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizesChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}))],1)])},staticRenderFns:[]};e.a=i}});
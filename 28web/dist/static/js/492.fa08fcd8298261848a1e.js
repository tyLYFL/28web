webpackJsonp([492],{"2laq":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("yN7T"),o=n("j3x1");var s=function(t){n("T79M")},c=n("VU/8")(i.a,o.a,s,null,null);e.default=c.exports},"3EPC":function(t,e,n){"use strict";var i=n("qYK6"),o=n("4byv");var s=function(t){n("dcg1")},c=n("VU/8")(i.a,o.a,s,null,null);e.a=c.exports},"4byv":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popRight-center",class:{showPopRight:t.isShow},style:{zIndex:t.zIndex}},[n("div",{staticClass:"popRight-header"},[t._t("title",[t._v(t._s(t.title))]),t._v(" "),n("i",{staticClass:"el-icon-close",attrs:{title:"关闭"},on:{click:t.close}})],2),t._v(" "),n("div",{staticClass:"popRight-content"},[t._t("content",[t._v("内容")])],2),t._v(" "),n("div",{staticClass:"popRight-footer"},[t._t("footer",[t._v("底部")])],2)])},staticRenderFns:[]};e.a=i},T79M:function(t,e){},T8y6:function(t,e,n){"use strict";e.e=function(t){return i.a.get("/"+o+"/system/org/v1/"+t)},e.h=function(t){return i.a.post("/"+o+"/system/org/v1/save/",t)},e.j=function(t){return i.a.put("/"+o+"/system/org/v1/edit/",t)},e.f=function(t){return i.a.get("/"+o+"/system/dict/v1/selectDictInfo",{params:{dictType:"department_type",orgId:t}}).then(function(t){return t.data||[]})},e.g=function(t,e){return i.a.post("/"+o+"/system/dict/v1/",{dictType:"department_type",dictRemark:"部门类型",dict_value:"",orgid:t,dictName:e}).then(function(t){return t.data||[]})},e.a=function(t){return i.a.delete("/"+o+"/system/dict/v1/"+t)},e.i=function(t,e,n){return i.a.put("/"+o+"/system/dict/v1/",{dictType:"department_type",dictRemark:"部门类型",id:n,orgid:t,dictName:e}).then(function(t){return t.data||[]})},e.c=function(t){return i.a.get("/"+o+"/system/dict/v1/selectDictInfo",{params:{dictType:"network_type",orgId:t}}).then(function(t){return t.data||[]})},e.b=function(t){return i.a.get("/"+o+"/system/dict/v1/selectDictInfo",{params:{dictType:"manage_type",orgId:t}}).then(function(t){return t.data||[]})},e.d=function(t){return i.a.get("/"+o+"/system/dict/v1/selectDictInfo",{params:{dictType:"network_status",orgId:t}}).then(function(t){return t.data||[]})};var i=n("Vo7i"),o="aflc-common"},dcg1:function(t,e){},j3x1:function(t,e,n){"use strict";var i={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"dep-maintain"},[i("PopFrame",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"addpopDepMain",attrs:{title:n.popTitle,isShow:n.popVisible},on:{close:n.closeMe}},[i("template",{staticClass:"addRelationPop-content",slot:"content"},[i("div",{ref:"ruleForm",staticClass:"depmain-div"},[n.showDate?i("div",{staticClass:"depmain-content"},[i("ul",n._l(n.getMentInfo,function(t){return i("li",[i("span",[n._v(n._s(t.dictName))])])}))]):n._e(),n._v(" "),n.hiddenAdd?i("div",{staticClass:"depmain-add"},[i("el-input",{attrs:{placeholder:"请输入内容"},model:{value:n.dictName,callback:function(t){n.dictName=t},expression:"dictName"}}),n._v(" "),i("el-checkbox",{on:{change:n.addDep},model:{value:n.checked1,callback:function(t){n.checked1=t},expression:"checked1"}}),n._v(" "),i("el-checkbox",{model:{value:n.checked2,callback:function(t){n.checked2=t},expression:"checked2"}}),n._v(" "),i("ul",n._l(n.getMentInfo,function(t){return i("li",[i("span",[n._v(n._s(t.dictName))])])}))],1):n._e(),n._v(" "),n.hiddenEdit?i("div",{staticClass:"depmain-edit"},[i("ul",n._l(n.getMentInfo,function(e){return i("li",[i("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.dictName,callback:function(t){n.$set(e,"dictName",t)},expression:"item.dictName"}}),n._v(" "),i("el-checkbox",{model:{value:n.checked1,callback:function(t){n.checked1=t},expression:"checked1"}}),n._v(" "),i("el-checkbox",{model:{value:n.checked2,callback:function(t){n.checked2=t},expression:"checked2"}})],1)}))]):n._e()])]),n._v(" "),n.showBotton?i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){n.submitForm("ruleForm")}}},[n._v(n._s(n.addText))]),n._v(" "),i("el-button",{on:{click:n.editMe}},[n._v(n._s(n.editText))])],1):n._e(),n._v(" "),n.remBotton?i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:n.closeMe}},[n._v(n._s(n.remText))])],1):n._e()],2)],1)},staticRenderFns:[]};e.a=i},qYK6:function(t,e,n){"use strict";e.a={props:{width:{type:String,default:"400"},title:{type:String,default:"标题"},isShow:{type:Boolean,default:!1}},data:function(){return{zIndex:(window.tmsPopZindex?window.tmsPopZindex+=1:window.tmsPopZindex=1e3,window.tmsPopZindex)}},methods:{close:function(){this.$emit("close")}}}},yN7T:function(t,e,n){"use strict";var i,o=n("mvHQ"),s=n.n(o),c=n("//Fk"),a=n.n(c),d=n("bOdI"),r=n.n(d),l=n("Dd8w"),u=n.n(l),h=n("3EPC"),p=n("T8y6"),f=n("NYxO");e.a=(i={computed:u()({},Object(f.b)(["otherinfo"])),components:{PopFrame:h.a},props:{popVisible:{type:Boolean,default:!1},dotInfo:[Object,Array],isDepMain:{type:Boolean,default:!1},createrId:[Number,String]},data:function(){var t;return t={checked1:!0,popTitle:"部门",loading:!0,getMentInfo:[]},r()(t,"getMentInfo",[]),r()(t,"checked",!0),r()(t,"checked2",!0),r()(t,"hiddenAdd",!1),r()(t,"hiddenEdit",!1),r()(t,"showDate",!1),r()(t,"dictName",""),r()(t,"addText","添加"),r()(t,"editText","编辑"),r()(t,"remText","取消"),r()(t,"showBotton",!1),r()(t,"remBotton",!1),t}},r()(i,"computed",{isShow:{get:function(){return this.popVisible},set:function(){}}}),r()(i,"watch",{isDepMain:function(){this.isDepMain?(this.popTitle="部门",this.showBotton=!0,this.remBotton=!1,this.hiddenAdd=!1,this.hiddenEdit=!1,this.showDate=!0,console.log("true")):console.log("false")},dotInfo:function(t){this.getMentInfo=this.dotInfo},popVisible:function(t){console.log("popVisible:",t)}}),r()(i,"mounted",function(){var e=this;this.popVisible&&(this.loading=!0,a.a.all([Object(p.f)(this.createrId),this.fetchSelectDict(this.createrId)]).then(function(t){e.getMentInfo=t[0],console.log(e.getMentInfo,"接口"),e.getMentInfo=t[1],e.loading=!1}).catch(function(t){e.$message.error("错误："+(t.text||t.errInfo||t.data||s()(t))),e.loading=!1}),this.getAddDate(this.createrId,this.dictName))}),r()(i,"methods",{getAddDate:function(t,e){var n=this;this.createrId=t,this.dictName=e,this.loading=!0,postDict(this.createrId,this.dictName).then(function(t){n.loading=!1}).catch(function(t){n.$message.error("错误："+(t.text||t.errInfo||t.data||s()(t))),n.loading=!1})},closeMe:function(t){this.$emit("close"),"function"==typeof t&&t()},editMe:function(){this.popTitle="编辑",this.remBotton=!0,this.showBotton=!1,this.hiddenAdd=!1,this.hiddenEdit=!0,this.showDate=!1},submitForm:function(t){this.popTitle="添加",this.remBotton=!0,this.hiddenAdd=!0,this.showBotton=!1,this.hiddenEdit=!1,this.showDate=!1},addDep:function(){this.getAddDate()}}),i)}});
webpackJsonp([591],{PeAb:function(e,t,i){"use strict";t.h=function(e,t,i){return Object(o.a)({url:"/"+r+"/sysDict/findSysDictByPid",method:"post",data:{currentPage:e,pageSize:t,vo:{pid:i}}})},t.f=function(){return o.a.get("/"+r+"/sysDict/list")},t.g=function(e,t,i,a){return Object(o.a)({url:"/"+r+"/sysDict/findSysDictByPid",method:"post",data:{currentPage:e,pageSize:t,vo:{pid:i,likeNameOrCode:a}}})},t.c=function(e){return Object(o.a)({url:"/"+r+"/sysDict/nextCode/"+e,method:"get"})},t.e=function(e){return Object(o.a)({url:"/"+r+"/sysDict/deleteSysDict",method:"post",data:e})},t.i=function(e){return Object(o.a)({url:"/"+r+"/sysDict/batchForbiddenSysDict",method:"post",data:e})},t.a=function(e){return Object(o.a)({url:"/"+r+"/sysDict/batchAddSysDict",method:"post",data:e})},t.d=function(){return Object(o.a)({url:"/"+r+"/sysDict/nextCode/top",method:"get"})},t.b=function(e){return Object(o.a)({url:"/"+r+"/sysDict/updateSysDict",method:"post",data:e})},t.j=function(){return Object(o.a)({url:"/"+a+"/sysDict/clearCache",method:"get"})},t.k=function(e){return Object(o.a)({url:"/"+a+"/sysDict/importDictExcel",method:"post",data:e})};var o=i("Vo7i"),r="aflc-common",a="aflc-common"},U5KP:function(e,t){},qCcj:function(e,t,i){"use strict";var a=i("PeAb");t.a={name:"AddDictionary",props:{dialogAddDic:{type:Boolean,default:!1},isModify:{type:Boolean,default:!1},formtitle:{type:String},pid:{type:String,default:null},pidName:{type:String,default:""},reviseForm:{type:Object}},components:{},data:function(){return{maxlengthNum:200,formLabelWidth:"110px",loading:!1,pidValue:"",nowcode:"",btnShow:!1,AddDictionaryForm:[{code:"",name:"",pid:"",remark:"",value:""}],forms:[{code:"",name:"",pid:"",remark:"",value:""}],optionsUptree:[{value:null,label:"无"}]}},watch:{dialogAddDic:{handler:function(e,t){e&&!this.isModify?(this.init(),this.currentValue(this.pid)):this.reviseForm.pidNameVal=this.reviseForm.pidName?this.reviseForm.pidName:"无"},deep:!0}},mounted:function(){},methods:{init:function(){if(this.optionsUptree=[{value:null,label:"无"}],this.pid!=this.optionsUptree[0].value){var e={value:this.pid,label:this.pidName};this.optionsUptree.push(e)}this.pidValue=this.pid?this.pid:null},currentValue:function(e){var t=this;e?Object(a.c)(this.pid).then(function(e){t.AddDictionaryForm[0].code=e.data,t.nowcode=e.data}):Object(a.d)().then(function(e){t.AddDictionaryForm[0].code=e.data,t.nowcode=e.data}),this.AddDictionaryForm=[{code:"",name:"",pid:"",remark:"",value:""}]},addItem:function(){var e=1*this.nowcode.slice(2)+1,t=String(e).length,i=this.nowcode.slice(0,-t)+e;this.nowcode=i,this.AddDictionaryForm.push({code:i,name:"",pid:this.pid,remark:"",value:""})},reduceItem:function(e){this.AddDictionaryForm.splice(e,1)},submitForm:function(){var t=this,i=!(this.btnShow=!0);if(this.isModify?this.reviseForm.name||(this.$message({type:"warning",message:"请填写分类名称!"}),i=!0):this.AddDictionaryForm.map(function(e){e.pid=t.pidValue,e.name||(t.$message({type:"warning",message:"请填写分类名称!"}),i=!0)}),i)return!1;var e=this.isModify?"确定要修改该条数据吗？":"确定要新增该条数据吗？";this.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(t.isModify?Object(a.b)(t.reviseForm):Object(a.a)(t.AddDictionaryForm)).then(function(e){t.$message.success("新增数据成功！"),t.btnShow=!1,t.close()}).catch(function(e){t.$message.error("操作失败，失败原因：",e.errorInfo),t.btnShow=!1})}).catch(function(){t.$message({type:"info",message:"已取消"})})},close:function(){this.$emit("update:dialogAddDic",!1),this.$emit("close"),this.AddDictionaryForm=[{code:"",name:"",pid:"",remark:"",value:""}],"function"==typeof done&&done()}}}},rhS9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("qCcj"),o=i("tw4F");var r=function(e){i("U5KP")},n=i("VU/8")(a.a,o.a,r,null,null);t.default=n.exports},tw4F:function(e,t,i){"use strict";var a={render:function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"commoncss addDictionary"},[o("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{title:a.formtitle,"close-on-click-modal":!1,visible:a.dialogAddDic},on:{close:a.close}},[o("el-form",{ref:"ruleForm",attrs:{inline:!0,"label-position":"right"}},[o("el-form-item",{attrs:{label:"上级分类：","label-width":a.formLabelWidth,required:""}},[a.isModify?o("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:a.reviseForm.pidNameVal,callback:function(e){a.$set(a.reviseForm,"pidNameVal",e)},expression:"reviseForm.pidNameVal"}}):o("el-select",{attrs:{placeholder:"请选择"},on:{change:a.currentValue},model:{value:a.pidValue,callback:function(e){a.pidValue=e},expression:"pidValue"}},a._l(a.optionsUptree,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),a._v(" "),a._l(a.AddDictionaryForm,function(t,i){return a.isModify?o("div",{staticClass:"moreInfo"},[o("el-form-item",{attrs:{label:"编码","label-width":"80px",required:""}},[o("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:a.reviseForm.code,callback:function(e){a.$set(a.reviseForm,"code",e)},expression:"reviseForm.code"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"分类名称",required:""}},[o("el-input",{attrs:{"auto-complete":"off",placeholder:"少于20字",maxlength:"20"},model:{value:a.reviseForm.name,callback:function(e){a.$set(a.reviseForm,"name",e)},expression:"reviseForm.name"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"数据值"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:a.reviseForm.value,callback:function(e){a.$set(a.reviseForm,"value",e)},expression:"reviseForm.value"}})],1),a._v(" "),o("el-form-item",{staticClass:"textArea",attrs:{label:"描述","label-width":"80px"}},[o("el-input",{attrs:{type:"textarea",maxlength:a.maxlengthNum,autosize:{minRows:3,maxRows:5}},model:{value:a.reviseForm.remark,callback:function(e){a.$set(a.reviseForm,"remark",e)},expression:"reviseForm.remark"}}),a._v(" "),o("p",{staticClass:"countNum"},[o("span",{},[a._v(a._s(a.reviseForm.remark.length))]),a._v(" "),o("span",[a._v("/ "+a._s(a.maxlengthNum))])])],1)],1):o("div",{key:i,staticClass:"moreInfo"},[o("el-form-item",{staticClass:"codeStyle",attrs:{label:"编码：","label-width":"80px",required:""}},[o("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:t.code,callback:function(e){a.$set(t,"code",e)},expression:"form.code"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"分类名称：",required:""}},[o("el-input",{attrs:{"auto-complete":"off",placeholder:"少于20字",maxlength:"20"},model:{value:t.name,callback:function(e){a.$set(t,"name",e)},expression:"form.name"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"数据值："}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.value,callback:function(e){a.$set(t,"value",e)},expression:"form.value"}})],1),a._v(" "),o("el-form-item",{staticClass:"textArea",attrs:{label:"描述：","label-width":"80px"}},[o("el-input",{attrs:{type:"textarea",maxlength:a.maxlengthNum,autosize:{minRows:3,maxRows:5}},model:{value:t.remark,callback:function(e){a.$set(t,"remark",e)},expression:"form.remark"}}),a._v(" "),o("p",{staticClass:"countNum"},[o("span",{},[a._v(a._s(t.remark.length))]),a._v(" "),o("span",[a._v("/ "+a._s(a.maxlengthNum))])])],1),a._v(" "),o("span",0==i?{staticClass:"addItem",on:{click:a.addItem}}:{staticClass:"reduceItem",on:{click:function(e){a.reduceItem(i)}}})],1)})],2),a._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",disabled:a.btnShow},on:{click:function(e){a.submitForm("ruleForm")}}},[a._v("确 定")]),a._v(" "),o("el-button",{on:{click:a.close}},[a._v("取 消")])],1)],1)],1)},staticRenderFns:[]};t.a=a}});
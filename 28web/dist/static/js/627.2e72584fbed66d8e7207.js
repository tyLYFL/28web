webpackJsonp([627],{"0gWx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("3gFi"),r=o("OUIB"),s=o("VU/8")(a.a,r.a,null,null,null);t.default=s.exports},"3gFi":function(e,t,o){"use strict";var a=o("Vo7i");t.a={name:"reject",props:{recordid:{type:String,default:""}},data:function(){return{loading:!1,radio:"1",processmemo:""}},methods:{handleClose:function(){this.$parent.recordid=""},reject:function(){var t=this;this.loading=!0;var e={recordid:this.recordid,processmemo:this.processmemo};Object(a.a)({url:"/"+this.$cms+"/usercenter/aflcsalesmanperformancesubmit/v1/refuse",method:"post",data:e}).then(function(e){200===e.status?(t.loading=!1,t.$parent.recordid="",t.$parent.firstblood(),console.log(e,"4545454454545454"),t.$message({message:"提交成功~",type:"success"})):(t.loading=!1,t.$parent.recordid="")}).catch(function(e){t.loading=!1,t.$parent.recordid=""})}}}},OUIB:function(e,t,o){"use strict";var a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"customerReportedDialog commoncss StyleNewinfoComponent"},[o("el-dialog",{ref:"dialog",attrs:{visible:!!t.recordid,"modal-append-to-body":!1,modal:!1,top:"30vh",title:"拒绝关联","close-on-click-modal":!1,"before-close":t.handleClose,width:"30%"}},[o("el-row",{staticStyle:{"margin-bottom":"22px"}},[o("el-radio",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("拒绝关联")]),t._v(" "),o("el-input",{attrs:{type:"textarea",placeholder:"请输入原因",maxlength:"50","show-word-limit":"",rows:4},model:{value:t.processmemo,callback:function(e){t.processmemo=e},expression:"processmemo"}})],1),t._v(" "),o("el-row",{staticStyle:{"margin-bottom":"22px"}},[o("p",{staticClass:"aflcBusinessBtn"},[o("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:t.reject}},[t._v("确 定")]),t._v(" "),o("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.handleClose}},[t._v("取 消")])],1)])],1)],1)},staticRenderFns:[]};t.a=a}});
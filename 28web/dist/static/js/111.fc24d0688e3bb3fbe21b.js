webpackJsonp([111,352,488,491,590],{"/18W":function(e,t){},"1onU":function(e,t,i){"use strict";var s=i("VT+v"),o=i("juIs");var n=function(e){i("ZdV2"),i("co/t")},r=i("VU/8")(s.a,o.a,n,"data-v-695be8cd",null);t.a=r.exports},"28Un":function(e,t,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pop-right",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"addEmployeerPop",attrs:{title:t.popTitle,isShow:t.popVisible},on:{close:t.closeMe}},[i("template",{staticClass:"addEmployeerPop-content",slot:"content"},[i("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,inline:!0,"label-position":"right",size:"mini"}},[i("el-form-item",{attrs:{label:"用户姓名","label-width":t.formLabelWidth,prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"手机号码","label-width":t.formLabelWidth,prop:"mobilephone"}},[i("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{maxlength:11,"auto-complete":"off"},model:{value:t.form.mobilephone,callback:function(e){t.$set(t.form,"mobilephone",e)},expression:"form.mobilephone"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"登录账号","label-width":t.formLabelWidth,prop:"username"}},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top",enterable:!1,manual:!0,value:t.tooltip}},[i("div",{attrs:{slot:"content"},slot:"content"},[t._v("账号可以由字母、数字组成"),i("br"),t._v("长度范围2~15个字符")]),t._v(" "),i("el-input",{attrs:{"auto-complete":"off",disabled:t.isModify},on:{focus:function(e){t.tooltip=!0},blur:function(e){t.tooltip=!1}},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username","string"==typeof e?e.trim():e)},expression:"form.username"}})],1)],1),t._v(" "),t.isModify?t._e():i("el-form-item",{attrs:{label:"密码","label-width":t.formLabelWidth,prop:"password"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password","string"==typeof e?e.trim():e)},expression:"form.password"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"职位","label-width":t.formLabelWidth,prop:"position"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"员工号","label-width":t.formLabelWidth,prop:"jobNumber"}},[i("el-input",{attrs:{"auto-complete":"off",maxlength:20},model:{value:t.form.jobNumber,callback:function(e){t.$set(t.form,"jobNumber",e)},expression:"form.jobNumber"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"性别",prop:"sexFlag","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择性别"},model:{value:t.form.sexFlag,callback:function(e){t.$set(t.form,"sexFlag",e)},expression:"form.sexFlag"}},[i("el-option",{attrs:{label:"男",value:"0"}}),t._v(" "),i("el-option",{attrs:{label:"女",value:"1"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"入职时间","label-width":t.formLabelWidth,prop:"hireTime"}},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"timestamp"},model:{value:t.form.hireTime,callback:function(e){t.$set(t.form,"hireTime",e)},expression:"form.hireTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"归属机构","label-width":t.formLabelWidth,prop:"orgid"}},[i("SelectTree",{attrs:{filterable:"",orgid:t.otherinfo.orgid},model:{value:t.form.orgid,callback:function(e){t.$set(t.form,"orgid",e)},expression:"form.orgid"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"归属部门","label-width":t.formLabelWidth,prop:"departmentId"}},[i("el-select",{attrs:{placeholder:"请选择部门"},model:{value:t.form.departmentId,callback:function(e){t.$set(t.form,"departmentId",e)},expression:"form.departmentId"}},t._l(t.departments,function(e){return i("el-option",{key:e.id,attrs:{label:e.dictName,value:e.id}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"企业微信","label-width":t.formLabelWidth,prop:"qywxUserId"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.qywxUserId,callback:function(e){t.$set(t.form,"qywxUserId",e)},expression:"form.qywxUserId"}})],1)],1),t._v(" "),t.isModify?t._e():i("div",{staticClass:"info"},[t._v("注：密码默认为：123456")])],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm",!0)}}},[t._v("保存并添加")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("确 定")]),t._v(" "),i("el-button",{on:{click:t.closeMe}},[t._v("取 消")])],1)],2)},staticRenderFns:[]};t.a=s},"4zgh":function(e,t){},"6JwP":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("wmiK"),o=i("unbD"),n=i("VU/8")(s.a,o.a,null,null,null);t.default=n.exports},"BTi/":function(e,t,i){"use strict";var s=i("Dd8w"),o=i.n(s),n=i("O6e2"),r=i("u8ra"),a=i("NYxO");t.a={props:{value:{type:[Number,String]},disabled:{type:Boolean,default:!1}},watch:{value:function(e){this.aid=e,this.init()}},mounted:function(){var e=this;this.aid=this.value,this.init(),n.a.$on("closepopbox",function(){console.log("closepopbox selectTree:"),e.$refs.myautocomplete.handleClose()})},computed:o()({},Object(a.b)(["otherinfo"]),{openGroups:function(){return function t(e,i){var s=[];return e.map(function(e){e.index=i,s.push(e),e.children&&(s=s.concat(t(e.children,i+1)))}),s}(this.groups,1)}}),data:function(){return{groups:[],aid:""}},methods:{init:function(){var t=this;this.inited||(this.inited=!0,Object(r.b)(this.otherinfo.companyId).then(function(e){t.groups=e}).catch(function(e){t.inited=!1}))},change:function(e){this.$emit("change",e),this.$emit("input",e)}}}},BeJv:function(e,t,i){"use strict";var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"popRight",class:{showPopRight:e.isShow},style:{zIndex:e.zIndex}},[i("div",{staticClass:"popRight-header"},[e._t("title",[e._v(e._s(e.title))]),e._v(" "),i("i",{staticClass:"el-icon-close",attrs:{title:"关闭"},on:{click:e.close}})],2),e._v(" "),i("div",{staticClass:"popRight-content arteryDelivery_lrl"},[e._t("content",[e._v("内容")])],2),e._v(" "),i("div",{staticClass:"popRight-footer"},[e._t("footer",[e._v("底部")])],2)])},staticRenderFns:[]};t.a=s},E4LH:function(e,t,i){"use strict";t.b=function(e){return/^([0-9a-zA-Z\|\-\_]|[\u0391-\uFFE5]){2,}$/.test(e.trim())},t.c=function(e){return/^(13[0-9]|14[57]|15[01-37-9]|18[0235-9])\d{8}$/.test(e)},i.d(t,"a",function(){return s});var s={ONLY_CHINESE:/^[\u4E00-\u9FA5]+$/,CHINESE_AND_ENGLISH:/^[\u4E00-\u9FA5a-zA-Z]+$/,MOBILE:/^[1][3-9]\d{9}$/,ID_CARD:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,ENGLISH_AND_NUMBER:/^[a-zA-Z0-9]+$/,SPECIAL_CHARACTER:/([^0-9a-zA-Z\u4E00-\u9FA5])+/,FLOAT2ING:/^\d+(\.\d{0,2})?$/,EMAIL:/^[\w!#$%&\'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,ONLY_NUMBER:/^[0-9]+$/,ONLY_LETTER:/^[a-zA-Z]+$/,ONLY_PUNCTUATION:/^[~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,ONLY_NUMBER_AND_LETTER:/^[0-9a-zA-Z]+$/,PWD_NUMBER_AND_LETTER:/^[0-9a-zA-Z_#]{6,32}$/,ONLY_LETTER_AND_PUNCTUATION:/^[a-zA-Z~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,ONLY_NUMBER_AND_PUNCTUATION:/^[0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,LETTER_AND_NUMBER_AND_PUNCTUATION:/^[a-zA-Z0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,ONLY_NUMBER_GT:/^[1-9]\d*$/,ONLY_NUMBER_POINT:/^\d*\.{0,1}\d{0,1}$/,ONLY_ONE_NUMBER:/^[1-9]\d{0,2}\.\d$|^0\.\d$/,ONLY_ENGLISH_NUMBER:/^[A-Za-z0-9_]+$/,TELEPHONE:/(^\d{3}-\d{8}$)|(^\d{4}-\d{7,8}$)/,TEL:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,ZIPCODE:/^[1-9]\d{5}(?!\d)$/,strlen:function(e){for(var t=0,i=0;i<e.length;i++)e.charAt(i).match(/[\u0391-\uFFE5]/)?t+=2:t++;return t}}},"G/H5":function(e,t){},Ht9P:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("lyON"),o=i("ikEQ");var n=function(e){i("q0jo")},r=i("VU/8")(s.a,o.a,n,null,null);t.default=r.exports},ImbS:function(e,t,i){"use strict";var s=i("woOf"),o=i.n(s),n=i("//Fk"),r=i.n(n),a=i("Dd8w"),l=i.n(a),c=i("u8ra"),u=i("NYxO"),d=i("6JwP"),m=i("nofg"),h=i("hYvk"),f=i("1onU"),p=i("0xDb"),g=i("Ht9P");t.a={name:"employeeManage",components:{SearchForm:d.default,AddEmployeer:m.default,SetAuth:h.default,Pager:f.a,ChangePwPop:g.default},computed:l()({},Object(u.b)(["otherinfo"])),data:function(){var t=this;return{rolesArr:[],showPop:!1,departmentArr:[],usersArr:[],loading:!0,selected:[],authUser:[],theUser:{},btnsize:"mini",setupTableVisible:!1,AddEmployeerVisible:!1,SetAuthVisible:!1,showSetAuth:!1,showAddEmployeer:!1,searchForm:{name:"",pageSize:100,pageNum:1,mobile:"",orgid:""},sizes:[100,200,400,600],dialogFormVisible:!1,isModify:!1,total:0,tablekey:123,tableColumn:[{label:"序号",prop:"id",width:"60",fixed:!1,slot:function(e){return(t.searchForm.pageNum-1)*t.searchForm.pageSize+e.$index+1}},{label:"姓名",prop:"name",width:"150",fixed:!1},{label:"归属机构",prop:"orgName",width:"150",fixed:!1},{label:"归属部门",prop:"departmentName",width:"150",fixed:!1},{label:"职务",prop:"position",width:"150",fixed:!1},{label:"员工号",prop:"jobNumber",width:"150",fixed:!1},{label:"登录账号",prop:"username",width:"150",fixed:!1},{label:"权限角色",prop:"rolesName",width:"200",slot:function(e){return"0"!==e.row.rolesId?e.row.rolesName:'<span class="unauth" v-else>未授权</span>'},fixed:!1},{label:"性别",prop:"sexFlag",width:"100",slot:function(e){return"0"===e.row.sexFlag?"男":"1"===e.row.sexFlag?"女":""}},{label:"联系手机",prop:"mobilephone",width:"120",fixed:!1},{label:"在职状态",prop:"statusCodeName",width:"120",slot:function(e){return"在职"!==e.row.statusCodeName?'<span class="unauth" v-else>'+e.row.statusCodeName+"</span>":e.row.statusCodeName},fixed:!1},{label:"入职时间",prop:"hireTime",width:"150",slot:function(e){return""+Object(p.k)(e.row.hireTime,"{y}-{m}-{d}")},fixed:!1},{label:"离职时间",prop:"leaveTime",width:"160",slot:function(e){return""+Object(p.k)(e.row.leaveTime,"{y}-{m}-{d} {h}:{i}:{s}")},fixed:!1},{label:"创建日期",prop:"createTime",width:"160",slot:function(e){return""+Object(p.k)(e.row.createTime,"{y}-{m}-{d} {h}:{i}:{s}")},fixed:!1}]}},mounted:function(){var t=this;r.a.all([this.fetchAllUser(this.otherinfo.orgid)]).then(function(e){t.loading=!1,t.usersArr=e[0].list,t.total=e[0].total}).catch(function(e){t.loading=!1,t.$message.error(e.errorInfo||e.text||"未知错误，请重试~")})},methods:{closeForce:function(){this.showPop=!1},fetchAllUser:function(e,t,i){return Object(c.c)(e,t||"",i||"",this.searchForm.pageSize,this.searchForm.pageNum)},doAction:function(e){var t=this;if(!this.selected.length&&"add"!==e)return this.closeAuth(),this.closeAddEmployeer(),this.$message({message:"请选择要操作的员工~",type:"warning"}),!1;switch(console.log("this.selected:",this.selected),e){case"add":this.isModify=!1,this.theUser={},this.openAddEmployeer();break;case"modify":this.isModify=!0,1<this.selected.length&&this.$message({message:"每次只能修改单条数据~",type:"warning"}),this.theUser=Object(p.i)({},this.selected[0]),this.openAddEmployeer();break;case"delete":var i=1<this.selected.length?this.selected.length+"名":this.selected[0].name,s="";this.selected.map(function(e){s+=e.id+","}),s=s.slice(0,s.length-1),this.$confirm("确定要删除 "+i+" 员工吗？","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.a)(s).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.fetchData()}).catch(function(e){t.$message({type:"info",message:e.errorInfo})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})});break;case"auth":this.authUser=this.selected,this.openAuth();break;case"force":1<this.selected.length?this.$message({message:"每次只能修改单条数据~",type:"warning"}):(this.theUser={},this.theUser=Object(p.i)({},this.selected[0]),this.showPop=!0);break;case"quite":if(1<this.selected.length)this.$message({message:"每次只能修改单条数据~",type:"warning"});else if("离职"==this.selected[0].statusCodeName)this.$message({type:"warning",message:"该员工已离职，不需多次设置!"});else{i=this.selected[0].name,s=this.selected[0].id;this.$confirm("确定 "+i+" 员工已离职了吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.k)(s).then(function(e){t.$message({type:"success",message:"设置成功!"}),t.fetchData()}).catch(function(e){t.$message({type:"warning",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})}).catch(function(){t.$message({type:"info",message:"已取消设置!"})})}}this.$refs.multipleTable.clearSelection()},closeSetupTable:function(){this.setupTableVisible=!1},setColumn:function(e){this.tableColumn=e,this.tablekey=Math.random()},openAddEmployeer:function(){this.showAddEmployeer=!0,this.AddEmployeerVisible=!0},closeAddEmployeer:function(){this.AddEmployeerVisible=!1},openAuth:function(){this.showSetAuth=!0,this.SetAuthVisible=!0},closeAuth:function(){this.SetAuthVisible=!1},clickDetails:function(e,t,i){this.$refs.multipleTable.toggleRowSelection(e)},getSelection:function(e){this.selected=e},fetchData:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.searchForm.orgid||this.otherinfo.orgid,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.searchForm.name,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.searchForm.mobile,s=this;3<arguments.length&&void 0!==arguments[3]?arguments[3]:this.searchForm.pageSize,4<arguments.length&&void 0!==arguments[4]?arguments[4]:this.searchForm.pageNum;this.loading=!0,this.fetchAllUser(e,t,i,this.searchForm.pageSize,this.searchForm.pageNum).then(function(e){s.loading=!1,s.usersArr=e.list,s.total=e.total}).catch(function(e){s.loading=!1,s.$message.error(e.errorInfo||e.text||"未知错误，请重试~")})},getSearchParam:function(e){o()(this.searchForm,e),this.fetchData()},handlePageChange:function(e){console.log("obj",e),this.searchForm.pageSize=e.pageSize,this.searchForm.pageNum=e.pageNum,console.log("this.searchForm",this.searchForm),this.fetchData()}}}},P5Di:function(e,t,i){"use strict";var s=i("R5Qd"),o=i("BeJv");var n=function(e){i("4zgh")},r=i("VU/8")(s.a,o.a,n,null,null);t.a=r.exports},R5Qd:function(e,t,i){"use strict";t.a={props:{width:{type:String,default:"546"},title:{type:String,default:"标题"},isShow:{type:Boolean,default:!1}},data:function(){return{zIndex:(window.tmsPopZindex?window.tmsPopZindex+=1:window.tmsPopZindex=1e3,window.tmsPopZindex)}},methods:{close:function(){this.$emit("close")}}}},"VT+v":function(e,t,i){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,i=e.target;console.log("page keydown:",t,i),13===t&&this.oldValue&&i.value!==this.oldValue&&(this.handleChange(i.value),this.oldValue="")},jumpTo:function(e){console.log("d",this.inputval),e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},WBvd:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("ImbS"),o=i("biz/");var n=function(e){i("cUQT")},r=i("VU/8")(s.a,o.a,n,null,null);t.default=r.exports},XvyP:function(e,t,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-select",{ref:"myautocomplete",staticClass:"select-tree",attrs:{disabled:t.disabled},on:{change:t.change},model:{value:t.aid,callback:function(e){t.aid=e},expression:"aid"}},t._l(t.openGroups,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}},[i("div",{class:"indent indent"+e.index},[t._v(t._s(e.name))])])}))},staticRenderFns:[]};t.a=s},ZdV2:function(e,t){},"biz/":function(e,t,i){"use strict";var s={render:function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"staff_manage"},[o("SearchForm",{attrs:{orgid:s.otherinfo.orgid,btnsize:s.btnsize},on:{change:s.getSearchParam}}),s._v(" "),o("div",{staticClass:"staff_info"},[o("div",{staticClass:"btns_box"},[o("el-button",{directives:[{name:"has",rawName:"v-has:SYSTEM_EMPLOYEE_MANAGE_ADD_EMP",arg:"SYSTEM_EMPLOYEE_MANAGE_ADD_EMP"}],attrs:{type:"primary",size:s.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(e){s.doAction("add")}}},[s._v("新增员工")]),s._v(" "),o("el-button",{directives:[{name:"has",rawName:"v-has:SYSTEM_EMPLOYEE_MANAGE_EMP_AUTH",arg:"SYSTEM_EMPLOYEE_MANAGE_EMP_AUTH"}],attrs:{type:"primary",size:s.btnsize,icon:"el-icon-edit-outline",plain:""},on:{click:function(e){s.doAction("auth")}}},[s._v("员工授权")]),s._v(" "),o("el-button",{directives:[{name:"has",rawName:"v-has:SYSTEM_EMPLOYEE_MANAGE_UPDATE",arg:"SYSTEM_EMPLOYEE_MANAGE_UPDATE"}],attrs:{type:"primary",size:s.btnsize,icon:"el-icon-edit",plain:""},on:{click:function(e){s.doAction("modify")}}},[s._v("修改")]),s._v(" "),o("el-button",{directives:[{name:"has",rawName:"v-has:SYSTEM_EMPLOYEE_MANAGE_DELETE",arg:"SYSTEM_EMPLOYEE_MANAGE_DELETE"}],attrs:{type:"primary",size:s.btnsize,icon:"el-icon-delete",plain:""},on:{click:function(e){s.doAction("delete")}}},[s._v("删除")]),s._v(" "),o("el-button",{directives:[{name:"has",rawName:"v-has:SYSTEM_EMPLOYEE_MANAGE_RESET_PASSWORD",arg:"SYSTEM_EMPLOYEE_MANAGE_RESET_PASSWORD"}],attrs:{type:"primary",size:s.btnsize,icon:"el-icon-warning",plain:""},on:{click:function(e){s.doAction("force")}}},[s._v("重置密码")]),s._v(" "),o("el-button",{directives:[{name:"has",rawName:"v-has:SYSTEM_EMPLOYEE_MANAGE_EMPLOYEE_TURNOVER",arg:"SYSTEM_EMPLOYEE_MANAGE_EMPLOYEE_TURNOVER"}],attrs:{type:"danger",size:s.btnsize,icon:"el-icon-question",plain:""},on:{click:function(e){s.doAction("quite")}}},[s._v("员工离职")])],1),s._v(" "),o("div",{staticClass:"info_news"},[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:s.usersArr,stripe:"",border:"",height:"100%","tooltip-effect":"dark","default-sort":{prop:"id",order:"ascending"}},on:{"row-click":s.clickDetails,"selection-change":s.getSelection}},[o("el-table-column",{attrs:{fixed:"",sortable:"",type:"selection",width:"50"}}),s._v(" "),s._l(s.tableColumn,function(i){return[i.slot?o("el-table-column",{key:i.id,attrs:{fixed:i.fixed,sortable:"",label:i.label,width:i.width||""},scopedSlots:s._u([{key:"default",fn:function(t){return[i.click?o("span",{staticClass:"clickitem",domProps:{innerHTML:s._s(i.slot(t))},on:{click:function(e){e.stopPropagation(),i.click(t)}}}):o("span",{domProps:{innerHTML:s._s(i.slot(t))}})]}}])}):o("el-table-column",{key:i.id,attrs:{fixed:i.fixed,sortable:"",label:i.label,prop:i.prop,width:i.width}})]})],2)],1),s._v(" "),o("div",{staticClass:"info_news_footer"},[s._v("共计:"+s._s(s.total)+"\n      "),o("div",{staticClass:"show_pager"},[o("Pager",{attrs:{total:s.total,sizes:s.sizes},on:{change:s.handlePageChange}})],1)])]),s._v(" "),o("transition",{attrs:{name:"slideInRight"}},[o("AddEmployeer",{attrs:{isModify:s.isModify,userInfo:s.theUser,orgid:s.searchForm.orgid||s.otherinfo.orgid,popVisible:s.AddEmployeerVisible},on:{"update:popVisible":function(e){s.AddEmployeerVisible=e},close:s.closeAddEmployeer,success:s.fetchData}})],1),s._v(" "),o("transition",{attrs:{name:"slideInRight"}},[s.showSetAuth?o("SetAuth",{attrs:{orgid:s.otherinfo.companyId,popVisible:s.SetAuthVisible,users:s.authUser},on:{"update:popVisible":function(e){s.SetAuthVisible=e},close:s.closeAuth,success:s.fetchData}}):s._e()],1),s._v(" "),o("ChangePwPop",{attrs:{isShow:s.showPop,otherInfo:s.theUser},on:{"update:isShow":function(e){s.showPop=e},close:s.closeForce}})],1)},staticRenderFns:[]};t.a=s},cUQT:function(e,t){},"co/t":function(e,t){},hYvk:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("qvnQ"),o=i("thyS");var n=function(e){i("kluF")},r=i("VU/8")(s.a,o.a,n,null,null);t.default=r.exports},i1bd:function(e,t,i){"use strict";var s=i("mvHQ"),n=i.n(s),o=i("//Fk"),r=i.n(o),a=i("woOf"),l=i.n(a),c=i("Dd8w"),u=i.n(c),d=i("E4LH"),m=i("u8ra"),h=i("P5Di"),f=i("o9X6"),p=i("NYxO");t.a={components:{popRight:h.a,SelectTree:f.a},props:{popVisible:{type:Boolean,default:!1},orgid:{required:!0},isModify:{type:Boolean,default:!1},userInfo:{type:Object,default:function(){}}},computed:u()({},Object(p.b)(["otherinfo"])),data:function(){return{querykey:"11",form:{name:"",mobilephone:"",username:"",password:"123456",position:"",jobNumber:"",sexFlag:"",orgid:"",rolesId:[],departmentId:"",hireTime:"",qywxUserId:""},formLabelWidth:"80px",tooltip:!1,rules:{name:[{required:!0,message:"请输入用户姓名"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}],mobilephone:[{required:!0,message:"请输入手机号码",pattern:d.a.MOBILE}],username:[{required:!0,message:"请输入有效的登录账号",pattern:d.a.USERNAME},{max:15,message:"不能超过15个字符",trigger:"blur"}],position:[{max:10,message:"不能超过10个字符",trigger:"blur"}]},popTitle:"新增员工",orgArr:[],rolesArr:[],departmentArr:[],loading:!1,roles:[],departments:[],groups:[],inited:!1,query:"",roleslist:[]}},mounted:function(){this.form.orgid=this.orgid,this.inited||(this.inited=!0,this.initInfo())},watch:{popVisible:function(e,t){this.inited||(this.inited=!0,this.initInfo())},orgid:function(e){this.form.orgid=e},userInfo:function(){if(this.isModify){this.popTitle="修改员工";l()({},this.userInfo);for(var e in this.form)this.form[e]=this.userInfo[e];this.form.rolesId=0===this.userInfo.rolesIdList?"":this.userInfo.rolesIdList}else{for(var t in this.popTitle="新增员工",this.form)this.form[t]="password"===t?"123456":"rolesId"===t?[]:"";this.form.orgid=this.orgid}}},methods:{highLight:function(e,t){return""!==this.query?this.setHightLight(e[t],this.query):e[t]},setHightLight:function(e,t){return e.replace(new RegExp(t,"igm"),'<i class="highlight">'+t+"</i>")},makefilter:function(e){this.query=e;var t=new RegExp(e,"i");this.roleslist=this.roles.filter(function(e){return t.test(e.roleName)})},initInfo:function(){var t=this;return this.loading=!0,r.a.all([Object(m.d)(this.otherinfo.companyId),Object(m.e)(this.otherinfo.companyId)]).then(function(e){t.loading=!1,t.roles=e[0].list,t.roleslist=t.roles,t.departments=e[1]}).catch(function(e){t.$message.error("错误1："+(e.text||e.errInfo||e.data||n()(e))),t.loading=!1,t.inited=!1})},getOrgid:function(e){this.form.orgid=e},reset:function(){var e=this.form.orgid;this.$refs.ruleForm.resetFields(),console.log("id",e,this.form.orgid),this.form.orgid=e},submitForm:function(e,s){var o=this;this.$refs[e].validate(function(e){if(!e)return!1;o.loading=!0;var t=l()({},o.form),i=void 0;t.rolesId=t.rolesId.join(","),o.isModify?(t.id=o.userInfo.id,i=Object(m.h)(t)):(t.password=o.$md5(t.password),i=Object(m.g)(t)),i.then(function(e){o.loading=!1,o.$message({type:"success",message:"保存成功!"}),o.reset(),s||o.closeMe(),o.$emit("success")}).catch(function(e){o.$message.error("错误2："+(e.text||e.errInfo||e.data||n()(e))),o.loading=!1})})},closeMe:function(e){this.$refs.ruleForm.resetFields(),this.$emit("update:popVisible",!1),"function"==typeof e&&e()}}}},ikEQ:function(e,t,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"RePasswordPop",attrs:{title:"重置密码",visible:t.isShow,"close-on-click-modal":!1,"before-close":t.closeMe},on:{"update:visible":function(e){t.isShow=e}}},[i("el-form",{ref:"ruleForm",attrs:{model:t.form,"status-icon":"",size:"mini",rules:t.rules}},[i("el-form-item",{attrs:{label:"账号","label-width":t.formLabelWidth,prop:"username"}},[i("el-input",{attrs:{disabled:"","auto-complete":"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"新密码","label-width":t.formLabelWidth,prop:"pwd"}},[i("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"确认新密码","label-width":t.formLabelWidth,prop:"re_pwd"}},[i("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.form.re_pwd,callback:function(e){t.$set(t.form,"re_pwd",e)},expression:"form.re_pwd"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:t.closeMe}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};t.a=s},juIs:function(e,t,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tms-pagenation"},[i("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[i("span",{staticClass:"first-page"})]),i("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[i("span",{staticClass:"prev-page"})]),t._v(" "),i("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),i("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},nativeOn:{keydown:function(e){return t.handleKeyup(e)}},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),i("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[i("span",{staticClass:"next-page"})]),t._v(" "),i("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[i("span",{staticClass:"last-page"})]),t._v(" "),i("span",{staticClass:"tms-pagination__sizes"},[i("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizesChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:e}})}))],1)])},staticRenderFns:[]};t.a=s},kluF:function(e,t){},lyON:function(e,t,i){"use strict";i("NYxO");var s=i("u8ra");t.a={props:{isShow:{type:Boolean,default:!1},otherInfo:{type:Object}},watch:{isShow:function(e,t){console.log(e,t,this.otherInfo),e&&(this.form.username=this.otherInfo.username,this.form.id=this.otherInfo.id,this.form.userType=this.otherInfo.type)}},mounted:function(){},data:function(){var s=this;return{isCheck:"",form:{id:0,username:"",origin_pwd:"",userType:"",pwd:"",re_pwd:"",errorTip:""},formLabelWidth:"100px",rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],origin_pwd:[{required:!0,message:"请输入原密码",trigger:"blur"},{validator:function(e,t,i){"false"===s.isCheck?(i(new Error("请输入正确的密码！")),s.isCheck=""):i()},message:"请输入正确的密码"}],pwd:[{required:!0,message:"请输入新密码",trigger:"blur",validator:function(e,t,i){"string"!=typeof t||""===t||t.length<6?i("密码不能小于6位"):i()}}],re_pwd:[{required:!0,message:"请再次输入新密码",trigger:"change"},{validator:function(e,t,i){""===t?i(new Error("请再次输入密码")):t!==s.form.pwd?i(new Error("两次输入密码不一致!")):i()},trigger:"blur"}]}}},methods:{submitForm:function(e){var i=this;this.$refs[e].validate(function(e){if(!e)return!1;var t=i.form;i.$confirm("确定要强制修改"+t.username+" 该账号吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.j)({userName:t.username,id:t.id,newPassword:i.$md5(t.pwd),surePassword:i.$md5(t.re_pwd),userType:t.userType}).then(function(e){i.closeMe(),i.$message({type:"success",message:"操作成功~"})}).catch(function(e){i.$message({type:"warning",message:e.errorInfo}),i.ifDisable=!1})}).catch(function(){i.$message({type:"info",message:"已取消"}),i.ifDisable=!1})})},resetForm:function(e){this.$refs[e].resetFields()},closeMe:function(e){this.resetForm("ruleForm"),this.$emit("update:isShow",!1),"function"==typeof e&&e()}}}},nofg:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("i1bd"),o=i("28Un");var n=function(e){i("/18W")},r=i("VU/8")(s.a,o.a,n,null,null);t.default=r.exports},o9X6:function(e,t,i){"use strict";var s=i("BTi/"),o=i("XvyP");var n=function(e){i("G/H5")},r=i("VU/8")(s.a,o.a,n,null,null);t.a=r.exports},q0jo:function(e,t){},qvnQ:function(e,t,i){"use strict";var s=i("Dd8w"),o=i.n(s),n=i("u8ra"),r=i("P5Di"),a=i("NYxO");t.a={components:{popRight:r.a},props:{popVisible:{type:Boolean,default:!1},users:{type:Array,default:[]}},computed:o()({},Object(a.b)(["otherinfo"]),{myusers:function(){var t=this;return this.form.users={},this.users.map(function(e){t.$set(t.form.users,e.id,e.rolesIdList)}),this.users}}),data:function(){return{form:{rolesId:[],users:{}},loading:!1,roles:[],inited:!1}},watch:{popVisible:function(e){this.inited||(this.inited=!0,this.initInfo())}},mounted:function(){this.inited||(this.inited=!0,this.initInfo())},methods:{initInfo:function(){var t=this;return this.loading=!0,Object(n.d)(this.otherinfo.orgid).then(function(e){t.roles=e.list,t.loading=!1}).catch(function(e){t.loading=!1,t.inited=!1,t.$message.error(e.errorInfo||e.text||"未知错误，请重试~")})},submitForm:function(){var t=this;this.loading=!0;var e=[];for(var i in this.form.users)e.push({id:i,rolesId:this.form.users[i].join(",")});Object(n.i)(e).then(function(e){t.loading=!1,t.$message.success("保存成功"),t.closeMe(),t.$emit("success")}).catch(function(e){t.loading=!1,t.$message.error(e.errorInfo||e.text||"未知错误，请重试~")})},closeMe:function(){this.form.users={},this.$emit("update:popVisible",!1)},getId:function(e,t){console.log("change:: ",e,t)}}}},thyS:function(e,t,i){"use strict";var s={render:function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("pop-right",{directives:[{name:"loading",rawName:"v-loading",value:i.loading,expression:"loading"}],staticClass:"setUserAuthPop",attrs:{title:"员工授权",isShow:i.popVisible},on:{close:i.closeMe}},[s("template",{staticClass:"setUserAuthPop-content",slot:"content"},[s("table",[s("thead",[s("tr",[s("th",[i._v("员工")]),i._v(" "),s("th",[i._v("权限角色")])])]),i._v(" "),s("tbody",i._l(i.myusers,function(t){return s("tr",{key:t.username},[s("td",[i._v("\n            "+i._s(t.name)+"\n          ")]),i._v(" "),s("td",[s("el-select",{attrs:{size:"mini",multiple:"",placeholder:"请选择权限"},on:{change:function(e){i.getId(t.id)}},model:{value:i.form.users[t.id],callback:function(e){i.$set(i.form.users,t.id,e)},expression:"form.users[user.id]"}},i._l(i.roles,function(e){return s("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})}))],1)])}))])]),i._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){i.submitForm()}}},[i._v("保存")]),i._v(" "),s("el-button",{on:{click:i.closeMe}},[i._v("取 消")])],1)],2)},staticRenderFns:[]};t.a=s},u8ra:function(e,t,i){"use strict";t.b=function(i,e){return a.a.get("/"+l+"/system/org/v1/tree/"+i).then(function(e){var t=e.data||[];return n[i]=t})},t.f=function(i,e){return a.a.post("/"+l+"/system/org/v1/tree/"+i).then(function(e){var t=e.data||[];return n[i]=t})},t.e=c,t.d=u,t.c=function(e,t,i,s,o){var n=e;"object"!==(void 0===e?"undefined":r()(e))&&(n={pageSize:s,currentPage:o,vo:{name:t,orgid:e,mobilephone:i}});return a.a.post("/"+l+"/system/user/v1/findAllInfo",n).then(function(e){return e.data||{total:0,list:[]}})},t.g=function(e){return a.a.post("/"+l+"/system/user/v1/",e)},t.h=function(e){return a.a.put("/"+l+"/system/user/v1/",e)},t.a=function(e){return a.a.delete("/"+l+"/system/user/v1/"+e)},t.i=function(e){return a.a.put("/"+l+"/system/user/v1/usersAuth",e)},t.j=function(e){return a.a.put("/aflc-common/common/aflcCommonUser/v1/resetPlatformAdminPassword",e)},t.k=function(e){return a.a.delete("/"+l+"/system/user/v1/"+e+"/userDimission")};var s=i("//Fk"),o=(i.n(s),i("pFYg")),r=i.n(o),a=i("Vo7i"),l="aflc-common";var n={};function c(e){return a.a.get("/"+l+"/system/dict/v1/selectDictInfo",{params:{dictType:"department_type",orgId:e}}).then(function(e){return e.data||[]})}function u(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return a.a.post("/"+l+"/system/role/v1/findAllInfo",{currentPage:i,pageSize:t,vo:{orgid:e,rolesName:""}}).then(function(e){return e.data||{total:0,list:[]}})}},unbD:function(e,t,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{ref:"searchFormRef",staticClass:"staff_searchinfo clearfix",attrs:{inline:!0,size:t.btnsize,"label-position":"right","label-width":"70px",rules:t.rules,model:t.searchForm}},[i("div",{staticClass:"staff_searchinfo--input fl"},[i("el-form-item",{attrs:{label:"归属网点"}},[i("SelectTree",{attrs:{orgid:this.orgid},model:{value:t.searchForm.orgid,callback:function(e){t.$set(t.searchForm,"orgid",e)},expression:"searchForm.orgid"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"员工名称"}},[i("el-input",{attrs:{placeholder:"请输入姓名",clearable:""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"手机号码"}},[i("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{placeholder:"请输入手机号码",maxlength:"11",clearable:""},model:{value:t.searchForm.mobile,callback:function(e){t.$set(t.searchForm,"mobile",e)},expression:"searchForm.mobile"}})],1),t._v(" "),i("el-form-item",{staticClass:"fr"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",plain:""},on:{click:function(e){t.clearForm("searchFormRef")}}},[t._v("清空")])],1)],1)])},staticRenderFns:[]};t.a=s},wmiK:function(e,t,i){"use strict";var s=i("E4LH"),o=i("o9X6");t.a={components:{SelectTree:o.a},props:{btnsize:{type:String,default:"mini"},orgid:{type:Number}},data:function(){return{searchForm:{orgid:"",name:"",mobile:""},rules:{mobile:[{pattern:s.a.MOBILE}]}}},watch:{orgid:function(e){this.searchForm.orgid=e}},mounted:function(){this.searchForm.orgid=this.orgid},methods:{onSubmit:function(){this.$emit("change",this.searchForm)},clearForm:function(e){this.searchForm.name="",this.searchForm.orgid=this.orgid,this.searchForm.mobile="",this.$emit("change",this.searchForm)}}}}});
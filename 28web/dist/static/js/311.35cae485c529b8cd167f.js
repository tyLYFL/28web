webpackJsonp([311],{"/xtb":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("S62n"),n=a("2aN2");var i=function(e){a("OzNB")},s=a("VU/8")(r.a,n.a,i,null,null);t.default=s.exports},"2aN2":function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carrierPointNetworkAdd commoncss"},[a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:t.formtitle,"close-on-click-modal":!1,top:"5vh",visible:t.dialogFormVisible},on:{close:t.close}},[a("el-form",{ref:"ruleForm",attrs:{model:t.standForm,rules:t.newrules,"label-position":"right","label-width":t.formLabelWidth}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"专线承运商：",prop:"carrierId"}},[t.isView?a("el-input",{attrs:{disabled:""},model:{value:t.standForm.carrierName,callback:function(e){t.$set(t.standForm,"carrierName",e)},expression:"standForm.carrierName"}}):a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.standForm.carrierId,callback:function(e){t.$set(t.standForm,"carrierId",e)},expression:"standForm.carrierId"}},t._l(t.optionsCarriers,function(e){return a("el-option",{key:e.id,attrs:{label:e.carriersName,value:e.id}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"网点名称：",prop:"pointName"}},[a("el-input",{attrs:{clearable:"",maxlength:"20",disabled:t.isView},model:{value:t.standForm.pointName,callback:function(e){t.$set(t.standForm,"pointName",e)},expression:"standForm.pointName"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[t.isView?a("el-form-item",{staticClass:"is-required",attrs:{label:"网点所在物流园："}},[a("el-input",{attrs:{disabled:""},model:{value:t.standForm.parkName,callback:function(e){t.$set(t.standForm,"parkName",e)},expression:"standForm.parkName"}})],1):a("el-form-item",{attrs:{label:"网点所在物流园：",prop:"parkId"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:t.doPark},model:{value:t.standForm.parkId,callback:function(e){t.$set(t.standForm,"parkId",e)},expression:"standForm.parkId"}},t._l(t.optionsCompanyPark,function(e){return a("el-option",{key:e.id,attrs:{label:e.parkName,value:e.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.parkName))]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.province+e.city+e.area)+"  "+t._s("("+e.detailAddress+")"))])])})),t._v(" "),a("p",{staticStyle:{"text-align":"right"}},[t._v("\n                            网点所在物流园不在当前列表中？\n                            "),a("span",{staticStyle:{cursor:"pointer",color:"#409EFF"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("点击新增")])])],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"网点所在地：",prop:"areaCode"}},[t.isView?a("el-input",{attrs:{disabled:""},model:{value:t.standForm.totalArea,callback:function(e){t.$set(t.standForm,"totalArea",e)},expression:"standForm.totalArea"}}):a("getCityList2",{ref:"regionChange",staticClass:"chooseItem",attrs:{ifChange:!0,isArea:!0},on:{returnStr:t.regionChange},model:{value:t.standForm.areaCode,callback:function(e){t.$set(t.standForm,"areaCode",e)},expression:"standForm.areaCode"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"详细地址：",prop:"address"}},[a("el-input",{attrs:{clearable:"",maxlength:"20",disabled:t.isView},model:{value:t.standForm.address,callback:function(e){t.$set(t.standForm,"address",e)},expression:"standForm.address"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"网点联系人：",prop:"contactName"}},[a("el-input",{attrs:{clearable:"",maxlength:"20",disabled:t.isView},model:{value:t.standForm.contactName,callback:function(e){t.$set(t.standForm,"contactName",e)},expression:"standForm.contactName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"网点联系人电话：",prop:"contactMobile"}},[a("el-input",{attrs:{clearable:"",maxlength:"20",disabled:t.isView},model:{value:t.standForm.contactMobile,callback:function(e){t.$set(t.standForm,"contactMobile",e)},expression:"standForm.contactMobile"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"网点客服电话：",prop:"serviceMobile"}},[a("el-input",{attrs:{clearable:"",maxlength:"20",disabled:t.isView},model:{value:t.standForm.serviceMobile,callback:function(e){t.$set(t.standForm,"serviceMobile",e)},expression:"standForm.serviceMobile"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[a("el-input",{attrs:{placeholder:"少于100字符",type:"textarea",autosize:{minRows:2,maxRows:4},clearable:"",maxlength:"100",disabled:t.isView},model:{value:t.standForm.remark,callback:function(e){t.$set(t.standForm,"remark",e)},expression:"standForm.remark"}})],1)],1)],1),t._v(" "),t.isView?a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"创建人：",prop:"creater"}},[a("el-input",{attrs:{disabled:""},model:{value:t.standForm.creater,callback:function(e){t.$set(t.standForm,"creater",e)},expression:"standForm.creater"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"创建时间：",prop:"createTime"}},[a("el-input",{attrs:{value:t._f("parseTime")(t.standForm.createTime),disabled:""}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"最后修改人：",prop:"updater"}},[a("el-input",{attrs:{disabled:""},model:{value:t.standForm.updater,callback:function(e){t.$set(t.standForm,"updater",e)},expression:"standForm.updater"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"最后修改时间：",prop:"updateTime"}},[a("el-input",{attrs:{value:t._f("parseTime")(t.standForm.updateTime),disabled:""}})],1)],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.isView?t._e():a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success",disabled:t.btnShow},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("保 存")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:t.close}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{staticClass:"batchImport",attrs:{title:"新增物流园",top:"15vh",modal:!0,visible:t.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"30%"}},[a("div",{staticClass:"ifcancel"},[a("el-form",{ref:"ruleForm2",attrs:{model:t.form,rules:t.rules,"label-width":t.formLabelWidth,"label-position":"right"}},[a("el-form-item",{attrs:{label:"物流园名称：",prop:"parkName"}},[a("el-input",{attrs:{clearable:"",maxlength:"20"},model:{value:t.form.parkName,callback:function(e){t.$set(t.form,"parkName",e)},expression:"form.parkName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"物流园所在地：",prop:"agencyId"}},[a("getCityList",{ref:"startArea",staticClass:"chooseItem",attrs:{isArea:!0},on:{returnStr:t.getStrStart},model:{value:t.form.areaCode,callback:function(e){t.$set(t.form,"areaCode",e)},expression:"form.areaCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"详细地址：",prop:"detailAddress"}},[a("el-input",{attrs:{clearable:"",maxlength:"20"},model:{value:t.form.detailAddress,callback:function(e){t.$set(t.form,"detailAddress",e)},expression:"form.detailAddress"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(e){t.submitForm2("ruleForm2")}}},[t._v("确认")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)])],1)},staticRenderFns:[]};t.a=r},"33qD":function(e,t){},E4LH:function(e,t,a){"use strict";t.b=function(e){return/^([0-9a-zA-Z\|\-\_]|[\u0391-\uFFE5]){2,}$/.test(e.trim())},t.c=function(e){return/^(13[0-9]|14[57]|15[01-37-9]|18[0235-9])\d{8}$/.test(e)},a.d(t,"a",function(){return r});var r={ONLY_CHINESE:/^[\u4E00-\u9FA5]+$/,CHINESE_AND_ENGLISH:/^[\u4E00-\u9FA5a-zA-Z]+$/,MOBILE:/^[1][3-9]\d{9}$/,ID_CARD:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,ENGLISH_AND_NUMBER:/^[a-zA-Z0-9]+$/,SPECIAL_CHARACTER:/([^0-9a-zA-Z\u4E00-\u9FA5])+/,FLOAT2ING:/^\d+(\.\d{0,2})?$/,EMAIL:/^[\w!#$%&\'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,ONLY_NUMBER:/^[0-9]+$/,ONLY_LETTER:/^[a-zA-Z]+$/,ONLY_PUNCTUATION:/^[~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,ONLY_NUMBER_AND_LETTER:/^[0-9a-zA-Z]+$/,PWD_NUMBER_AND_LETTER:/^[0-9a-zA-Z_#]{6,32}$/,ONLY_LETTER_AND_PUNCTUATION:/^[a-zA-Z~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,ONLY_NUMBER_AND_PUNCTUATION:/^[0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,LETTER_AND_NUMBER_AND_PUNCTUATION:/^[a-zA-Z0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,ONLY_NUMBER_GT:/^[1-9]\d*$/,ONLY_NUMBER_POINT:/^\d*\.{0,1}\d{0,1}$/,ONLY_ONE_NUMBER:/^[1-9]\d{0,2}\.\d$|^0\.\d$/,ONLY_ENGLISH_NUMBER:/^[A-Za-z0-9_]+$/,TELEPHONE:/(^\d{3}-\d{8}$)|(^\d{4}-\d{7,8}$)/,TEL:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,ZIPCODE:/^[1-9]\d{5}(?!\d)$/,strlen:function(e){for(var t=0,a=0;a<e.length;a++)e.charAt(a).match(/[\u0391-\uFFE5]/)?t+=2:t++;return t}}},EF9i:function(e,t,a){"use strict";var r=a("Ug3F"),n=a("TWfu");var i=function(e){a("pp89")},s=a("VU/8")(r.a,n.a,i,null,null);t.a=s.exports},Flqv:function(e,t,a){"use strict";var r=a("zLJG"),n=a("U0PT");var i=function(e){a("33qD")},s=a("VU/8")(r.a,n.a,i,null,null);t.a=s.exports},NnYa:function(e,t,a){"use strict";t.b=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclDedicatedCarriersLine/v1/list",method:"post",data:e})},t.e=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclDedicatedCarriersLine/v1/add",method:"post",data:e})},t.f=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclDedicatedCarriersLine/v1/update",method:"put",data:e})},t.a=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclDedicatedCarriersLine/v1/"+e,method:"get"})},t.c=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclDedicatedCarriersLine/v1/banOrUse",method:"put",data:e})},t.d=function(){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclDedicatedCarriersLine/v1/carriersLine",method:"get"})};var r=a("Vo7i"),n="aflc-lcl"},OzNB:function(e,t){},S62n:function(e,t,a){"use strict";var r=a("NnYa"),n=a("siAg"),i=a("0xDb"),s=(a("E4LH"),a("Flqv")),o=a("EF9i");t.a={name:"carrierPointNetworkAdd",props:{dialogFormVisible:{type:Boolean,required:!0},formtitle:{type:String,required:!1,default:"新增专线承运商网点"},isModify:{type:Boolean,default:!1},changeForm:{type:Object},isView:{type:Boolean,default:!1}},components:{getCityList:s.a,getCityList2:o.a},data:function(){return{defaultImg:"/static/test.jpg",btnShow:!1,formLabelWidth:"130px",standForm:{carrierName:"",carrierId:"",pointName:"",parkName:"",parkId:"",province:"",city:"",area:"",areaCode:"",totalArea:"",address:"",contactName:"",contactMobile:"",serviceMobile:"",remark:""},newrules:{carrierId:{required:!0,message:"请选择专线承运商",trigger:"change"},pointName:{required:!0,message:"请输入专线承运商网点名称",trigger:"change"},areaCode:{required:!0,message:"请选择网点所在地",trigger:"change"},address:{required:!0,message:"请输入网点详细地址",trigger:"change"},contactName:{required:!0,message:"请输入网点联系人",trigger:"change"},contactMobile:{required:!0,message:"请输入网点联系人电话",trigger:"change"},serviceMobile:{required:!0,message:"请输入网点客服电话",trigger:"change"}},form:{parkName:"",province:"",city:"",area:"",areaCode:"",detailAddress:""},rules:{},optionsCarriers:[],optionsCompanyPark:[],dialogVisible:!1,showAddress:{province:"",city:"",area:""}}},watch:{dialogFormVisible:{handler:function(e,t){e&&this.reviseForms()},deep:!0}},mounted:function(){this.init()},methods:{doPark:function(t){console.log("val",t);var e=this.optionsCompanyPark.filter(function(e){return e.id==t})[0];this.standForm.parkName=e.parkName,this.standForm.address=e.detailAddress+e.parkName,this.showress(e.areaCode),this.standForm.totalArea=e.province+e.city+e.area,this.standForm.province=e.province,this.standForm.city=e.city,this.standForm.area=e.area,this.standForm.areaCode=e.areaCode},showress:function(e){var t=e.slice(0,4)+"00",a=e.slice(0,2)+"0000";this.showAddress={province:a,city:t,area:e},this.isView||this.$refs.regionChange.doActions([1*this.showAddress.province,1*this.showAddress.city,1*this.showAddress.area])},reviseForms:function(){var t=this;(this.isModify||this.isView)&&Object(n.a)(this.changeForm.id).then(function(e){t.showress(e.data.areaCode),t.standForm=Object(i.i)(e.data)})},regionChange:function(e){this.standForm.totalArea=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():"",this.standForm.province=e.province?e.province.name:"",this.standForm.city=e.city?e.city.name:"",this.standForm.area=e.area?e.area.name:"",this.standForm.areaCode=e.area?e.area.code:""},getStrStart:function(e){console.log("getStrStart",e),this.form.province=e.province?e.province.name:"",this.form.city=e.city?e.city.name:"",this.form.area=e.area?e.area.name:"",this.form.areaCode=e.area?e.area.code:""},getValue:function(e){return e?e.value:""},close:function(){this.dialogFormVisible&&(this.$emit("update:dialogFormVisible",!1),this.isView||this.$refs.regionChange.clearData(),this.$refs.ruleForm.resetFields(),this.clearForms(),this.$emit("renovate"),this.btnShow=!1)},close2:function(){this.$refs.ruleForm2.resetFields(),this.dialogVisible=!1,this.clearForms2()},init:function(){var t=this;Object(r.d)().then(function(e){t.optionsCarriers=e.data}),this.loadCompanyPark()},loadCompanyPark:function(){var t=this;Object(n.e)().then(function(e){t.optionsCompanyPark=e.data})},submitForm:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return a.$message({type:"warning",message:"请填写完整数据!"}),!1;a.btnShow=!0,a.complateData();var t=Object(i.i)(a.standForm);(a.isModify?n.h:n.f)(t).then(function(e){a.$message({type:"success",message:"专线承运商网点操作成功！"}),a.close()}).catch(function(e){a.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)}),a.btnShow=!1})})},submitForm2:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return a.$message({type:"warning",message:"请填写完整数据!"}),!1;var t=Object(i.i)(a.form);Object(n.g)(t).then(function(e){a.$message({type:"success",message:"新增物流园成功"}),a.loadCompanyPark(),a.close2()}).catch(function(e){a.$message({type:"warning",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})})},clearForms:function(){for(var e in this.standForm)this.standForm[e]=""},clearForms2:function(){for(var e in this.form)this.form[e]=""},complateData:function(){var t=this;this.standForm.carrierId&&(this.standForm.carrierName=this.optionsCarriers.find(function(e){return e.id===t.standForm.carrierId}).carriersName)}}}},TWfu:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chooseCityList"},[a("el-cascader",{ref:"chinaData",attrs:{options:t.cascaderData,separator:"-","change-on-select":t.ifChange,props:t.props,disabled:t.disabled},on:{change:t.handleItemMore,"active-item-change":t.handleItemChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)},staticRenderFns:[]};t.a=r},U0PT:function(e,t,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chooseCityList"},[a("el-cascader",{ref:"chinaData",attrs:{placeholder:t.placeholderTxt,options:t.cascaderData,separator:"-","change-on-select":t.ifChange,props:t.props},on:{change:t.handleItemMore,"active-item-change":t.handleItemChange},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)},staticRenderFns:[]};t.a=r},Ug3F:function(e,t,a){"use strict";var r=a("fZjL"),n=a.n(r),i=a("t5DY");t.a={name:"getAreaList",props:{disabled:{type:Boolean,default:!1},value:[String,Array,Number],isArea:{type:Boolean,default:!1},ifChange:{type:Boolean,default:!1},currentObj:{type:Object}},watch:{currentObj:function(e,t){e&&0!=n()(e).length&&this.onlyOnce&&(this.selectedOptions=[],e.province&&this.selectedOptions.push(parseInt(e.province)),e.city&&this.selectedOptions.push(parseInt(e.city)),e.area&&this.selectedOptions.push(parseInt(e.area)),this.doActions(this.selectedOptions))}},data:function(){return{departmentOptions:[],cascaderData:[],selectedOptions:[],props:{label:"name",value:"code",children:"cities"},nowData:{province:null,city:null,area:null},onlyOnce:!0}},methods:{getActios:function(e){Object(i._10)(e).then(function(e){return e.data})},doActions:function(e){if((this.selectedOptions=e)[1]){var t=[e[0]];this.getNodes(t)}if(e[1]&&e[2]){var a=[e[0],e[1]];this.getNodes(a)}},getNodes:function(r){var n=this,e=void 0,t=void 0;r?1===r.length?(e=r[0],t=r.length):2===r.length&&this.isArea&&(e=r[1],t=r.length):(e=null,t=0),Object(i._10)(e).then(function(e){if(e.data){var a=e.data;0===t?n.cascaderData=a.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):1===t?n.cascaderData.map(function(e,t){e.code===r[0]&&(n.isArea?e.cities=a.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):e.cities=a.map(function(e,t){return{code:e.code,name:e.name}}))}):2===t&&n.isArea&&n.cascaderData.map(function(e,t){e.code===r[0]&&e.cities.map(function(e,t){e.code===r[1]&&(e.cities.length||(e.cities=a.map(function(e,t){return{code:e.code,name:e.name}})))})})}}).catch(function(e){return n.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})},handleItemChange:function(e){this.getNodes(e)},handleItemMore:function(e){this.ifChange&&this.getNodes(e),e[0]&&(this.nowData.province={code:e[0],key:e[0],name:this.$refs.chinaData.currentLabels[0],value:this.$refs.chinaData.currentLabels[0],parentCode:null}),e[1]&&(this.nowData.city={code:e[1],key:e[1],name:this.$refs.chinaData.currentLabels[1],value:this.$refs.chinaData.currentLabels[1],parentCode:e[0]}),e[2]&&(this.nowData.area={code:e[2],key:e[2],name:this.$refs.chinaData.currentLabels[2],value:this.$refs.chinaData.currentLabels[2],parentCode:e[1]}),this.returnArr(this.nowData)},init:function(){this.getNodes()},returnArr:function(e){this.$emit("returnStr",e)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}},pp89:function(e,t){},siAg:function(e,t,a){"use strict";t.b=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCarrierPointNetwork/v1/list",method:"post",data:e})},t.f=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCarrierPointNetwork/v1/add",method:"post",data:e})},t.h=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCarrierPointNetwork/v1/update",method:"put",data:e})},t.a=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCarrierPointNetwork/v1/"+e,method:"get"})},t.c=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCarrierPointNetwork/v1/banOrUse",method:"put",data:e})},t.d=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCarrierPointNetwork/v1/pointNetwork?carrierId="+e,method:"get"})},t.g=function(e){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCompanyPark/v1/add",method:"post",data:e})},t.e=function(){return Object(r.a)({url:"/"+n+"/lclserver/aflcLclCompanyPark/v1/companyPark",method:"get"})};var r=a("Vo7i"),n="aflc-lcl"},t5DY:function(e,t,a){"use strict";t._10=function(t){return t=t||"",i.a.get("/"+s+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})},t._14=function(e){return i.a.get("/"+s+"/common/aflcCommonPCA/v1/findAllStreetby/"+e)},t._12=function(e){return Object(i.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})},t._13=function(e){return Object(i.a)({url:"/"+s+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+e,method:"get"})},t._11=function(e){return Object(i.a)({url:"/"+s+"/sysDict/findAflcCommonSysDictBycode/"+e,method:"get"})},t.s=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00424")},t.r=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF021")},t.u=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF040")},t.f=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF048")},t.j=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02004")},t.T=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02003")},t.M=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF017")},t.p=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF018")},t.q=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF009")},t.n=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05602")},t.m=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05603")},t.V=function(e,t){return Object(i.a)({url:"/"+o+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+e+"/"+t,method:"get"})},t.O=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00101")},t.o=function(){return Object(i.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},t.N=function(){return Object(i.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},t.G=function(){return Object(i.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},t.R=function(){return Object(i.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},t.z=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00503")},t.K=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00207")},t.k=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00206")},t.Q=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00209")},t.S=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF062")},t.I=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF063")},t.L=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF064")},t.i=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF057")},t.l=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00210")},t.J=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF066")},t.y=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF074")},t.x=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF075")},t.t=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF076")},t.P=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF077")},t.H=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF078")},t.v=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00211")},t.w=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF06803")},t.F=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08501")},t.A=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08506")},t.h=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08502")},t.E=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08507")},t.B=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00513")},t.C=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880301")},t.D=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880302")},t.X=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08403")},t.U=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08404")},t.a=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880303")},t.e=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08805")},t.d=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08804")},t.c=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08808")},t.g=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880304")},t.W=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08810")},t._20=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00418")},t.b=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08802")},t._17=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710801")},t._18=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05006")},t._16=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF04913")},t.Y=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710803")},t._15=function(e){return window.UPLOADPOLICYDATA?new n.a(function(e){e(window.UPLOADPOLICYDATA)}):i.a.get("/aflc-common/common/oss/v1/policy?bucket="+e).then(function(e){return window.UPLOADPOLICYDATA=e.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},t._9=function(e){return i.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+e)},t._8=function(){return i.a.get("/"+o+"/sm/aflcDistrict/v1/getProvinceList")},t._5=function(e){return Object(i.a)({url:"/"+o+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:e}})},t._4=function(){return i.a.get("/"+o+"/sm/aflcSysDict/v1/getCarTypeList")},t._7=function(){return i.a.get("/"+o+"/sm/aflcSysDict/v1/getServiceClassList")},t._6=function(){return Object(i.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},t.Z=function(){return i.a.get("/"+s+"/common/aflcCityTree/v1/treaCode")},t._2=function(){return i.a.get("/"+s+"/common/aflcCityTree/v1/provinceCode")},t._0=function(e){return i.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+e)},t._1=function(e){return i.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+e)},t._3=function(e){return Object(i.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:e})},t._19=function(e){return Object(i.a)({url:"/"+s+"/system/user/v1/operate/staff",method:"post",data:e})};var r=a("//Fk"),n=a.n(r),i=a("Vo7i"),s="aflc-common",o="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},zLJG:function(e,t,a){"use strict";var i=a("t5DY");t.a={name:"getAreaList",props:{disabled:{type:Boolean},value:[String,Array,Number],isArea:{type:Boolean,default:!1},ifChange:{type:Boolean,default:!1},placeholderTxt:{type:String,default:"请选择"}},data:function(){return{departmentOptions:[],cascaderData:[],selectedOptions:[],props:{label:"name",value:"code",children:"cities"},nowData:{province:null,city:null,area:null}}},methods:{getNodes:function(r){var n=this,e=void 0,t=void 0;r?1===r.length?(e=r[0],t=r.length):2===r.length&&this.isArea&&(e=r[1],t=r.length):(e=null,t=0),Object(i._10)(e).then(function(e){if(e.data){var a=e.data;0===t?n.cascaderData=a.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):1===t?n.cascaderData.map(function(e,t){e.code===r[0]&&(n.isArea?e.cities=a.map(function(e,t){return{code:e.code,name:e.name,cities:[]}}):e.cities=a.map(function(e,t){return{code:e.code,name:e.name}}))}):2===t&&n.isArea&&n.cascaderData.map(function(e,t){e.code===r[0]&&e.cities.map(function(e,t){e.code===r[1]&&(e.cities.length||(e.cities=a.map(function(e,t){return{code:e.code,name:e.name}})))})})}}).catch(function(e){return n.$message({type:"info",message:"操作失败，原因："+(e.errorInfo?e.errorInfo:e.text)})})},handleItemChange:function(e){this.getNodes(e)},handleItemMore:function(e){this.ifChange&&this.getNodes(e),e[0]&&(this.nowData.province={code:e[0],key:e[0],name:this.$refs.chinaData.currentLabels[0],value:this.$refs.chinaData.currentLabels[0],parentCode:null}),e[1]&&(this.nowData.city={code:e[1],key:e[1],name:this.$refs.chinaData.currentLabels[1],value:this.$refs.chinaData.currentLabels[1],parentCode:e[0]}),e[2]&&(this.nowData.area={code:e[2],key:e[2],name:this.$refs.chinaData.currentLabels[2],value:this.$refs.chinaData.currentLabels[2],parentCode:e[1]}),this.returnArr(this.nowData)},init:function(){this.getNodes()},returnArr:function(e){this.$emit("returnStr",e)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}}});
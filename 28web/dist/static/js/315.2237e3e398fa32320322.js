webpackJsonp([315,533],{"/LBT":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("eZ1p"),n=i("Y3Yj");var a=function(t){i("RRY9")},o=i("VU/8")(s.a,n.a,a,"data-v-d3514710",null);e.default=o.exports},"1onU":function(t,e,i){"use strict";var s=i("VT+v"),n=i("juIs");var a=function(t){i("ZdV2"),i("co/t")},o=i("VU/8")(s.a,n.a,a,"data-v-695be8cd",null);e.a=o.exports},"3TcB":function(t,e){},"3hlv":function(t,e,i){"use strict";var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"carStickerEXAdd",attrs:{title:"车贴审查",top:"15vh",modal:!1,visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"30%","before-close":e.close}},[i("div",{staticClass:"ifcancel"},[i("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right"}},[i("el-form-item",{attrs:{label:"审核结果：",prop:"status"}},[i("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.optionsEx,function(t){return i("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1),e._v(" "),"AF0880103"==e.form.status?i("el-form-item",{attrs:{label:"不通过原因：",prop:"checkNoPassCause"}},[i("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.form.checkNoPassCause,callback:function(t){e.$set(e.form,"checkNoPassCause",t)},expression:"form.checkNoPassCause"}},e._l(e.optionsNoPass,function(t){return i("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1):e._e()],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确认")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:e.close}},[e._v("取消")])],1)])},staticRenderFns:[]};e.a=s},RRY9:function(t,e){},"VT+v":function(t,e,i){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,400]}},total:{type:Number,default:0},pageLog:{type:Number,default:1}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){1==this.pageLog&&(this.pageNum=1)}},mounted:function(){this.size=this.sizes[0],this.pageNum=this.pageLog},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:100}},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizesChange:function(){this.pageNum=1,this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,i=t.target;console.log("page keydown:",e,i),13===e&&this.oldValue&&i.value!==this.oldValue&&(this.handleChange(i.value),this.oldValue="")},jumpTo:function(t){console.log("d",this.inputval),t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},Y3Yj:function(t,e,i){"use strict";var s={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:i.loading,expression:"loading"}],staticClass:"identicalStyle toExamine"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm classify_searchinfo",attrs:{inline:!0,model:i.listSystemObj.vo}},[s("el-form-item",{attrs:{label:"订单号",prop:"orderSerial"}},[s("el-input",{attrs:{clearable:""},model:{value:i.listSystemObj.vo.orderSerial,callback:function(t){i.$set(i.listSystemObj.vo,"orderSerial",t)},expression:"listSystemObj.vo.orderSerial"}})],1),i._v(" "),s("el-form-item",{attrs:{label:"车主姓名",prop:"driverName"}},[s("el-input",{attrs:{clearable:""},model:{value:i.listSystemObj.vo.driverName,callback:function(t){i.$set(i.listSystemObj.vo,"driverName",t)},expression:"listSystemObj.vo.driverName"}})],1),i._v(" "),s("el-form-item",{attrs:{label:"手机号",prop:"driverMobile"}},[s("el-input",{attrs:{clearable:""},model:{value:i.listSystemObj.vo.driverMobile,callback:function(t){i.$set(i.listSystemObj.vo,"driverMobile",t)},expression:"listSystemObj.vo.driverMobile"}})],1),i._v(" "),s("el-form-item",{attrs:{label:"卸货时间",prop:"chooseTime"}},[s("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","unlink-panels":"",align:"right","default-time":["00:00:00","23:59:59"],"value-format":"timestamp"},model:{value:i.chooseTime,callback:function(t){i.chooseTime=t},expression:"chooseTime"}})],1),i._v(" "),s("el-form-item",{staticClass:"btnChoose fr",staticStyle:{"margin-left":"0"}},[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:"",size:i.btnsize},on:{click:function(t){i.handleSearch("search")}}},[i._v("搜索")]),i._v(" "),s("el-button",{attrs:{type:"info",icon:"fontFamily aflc-icon-qingkong",size:i.btnsize,plain:""},on:{click:function(t){i.handleSearch("clear")}}},[i._v("清空")])],1)],1),i._v(" "),s("div",{staticClass:"classify_info"},[s("div",{staticClass:"btns_box"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-s-check",plain:"",size:i.btnsize},on:{click:function(t){i.handleClick("ex")}}},[i._v("批量审核")])],1),i._v(" "),s("div",{staticClass:"info_news"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:i.tableData,stripe:"",border:"",align:"center",height:"100%","tooltip-effect":"dark"},on:{"selection-change":i.getSelection}},[s("el-table-column",{attrs:{label:"选择",type:"selection",selectable:i.checkSelectable,width:"50"}}),i._v(" "),s("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v("\n                        "+i._s((i.listSystemObj.currentPage-1)*i.listSystemObj.pageSize+t.$index+1)+"\n                    ")]}}])}),i._v(" "),s("el-table-column",{attrs:{sortable:"",label:"车辆45°照片",prop:"carFile","min-width":"150"},scopedSlots:i._u([{key:"default",fn:function(t){return[s("img",{directives:[{name:"showPicture",rawName:"v-showPicture"}],attrs:{src:t.row.carFile,imgurl:t.row.carFile?t.row.carFile:""}})]}}])}),i._v(" "),s("el-table-column",{attrs:{sortable:"",label:"订单号",prop:"orderSerial","min-width":"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[s("h4",{staticClass:"needMoreInfo",on:{click:function(t){i.pushOrderSerial(e.row)}}},[i._v(i._s(e.row.orderSerial))])]}}])}),i._v(" "),s("el-table-column",{attrs:{sortable:"",label:"车主姓名",prop:"driverName","min-width":"150"}}),i._v(" "),s("el-table-column",{attrs:{prop:"driverMobile",sortable:"",label:"手机号","min-width":"150"}}),i._v(" "),s("el-table-column",{attrs:{prop:"unloadTime",sortable:"",label:"卸货时间","min-width":"160"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v("\n                        "+i._s(i._f("parseTime")(t.row.unloadTime))+"\n                    ")]}}])})],1)],1)]),i._v(" "),s("div",{staticClass:"info_tab_footer"},[i._v("共计:"+i._s(i.dataTotal)+" "),s("div",{staticClass:"show_pager"},[s("Pager",{ref:"pager",attrs:{total:i.dataTotal},on:{change:i.handlePageChange}})],1)]),i._v(" "),s("add",{attrs:{dialogVisible:i.dialogVisible,currentArr:i.currentArr},on:{"update:dialogVisible":function(t){i.dialogVisible=t},close:i.firstblood}})],1)},staticRenderFns:[]};e.a=s},ZdV2:function(t,e){},aqXL:function(t,e,i){"use strict";var s=i("jduE"),n=i("t5DY");i("0xDb");e.a={name:"batchImport",components:{},props:{dialogVisible:{type:Boolean,default:!1},currentArr:{type:Array,default:[],required:!0}},watch:{dialogVisible:function(t,e){t&&console.log("this.currentArr",this.currentArr)}},data:function(){return{formLabelWidth:"120px",loading:!0,form:{status:"",checkNoPassCause:""},rules:{status:{required:!0,message:"请选择审核结果",trigger:"change"},checkNoPassCause:{required:!0,message:"请选择不通过原因",trigger:"change"}},optionsEx:[{name:"车贴照片通过",code:"AF0880102"},{name:"车贴照片不通过",code:"AF0880103"}],optionsNoPass:[]}},mounted:function(){this.init()},methods:{init:function(){var e=this;Object(n.b)().then(function(t){e.optionsNoPass=t.data})},submitForm:function(t){var i=this;this.$refs[t].validate(function(t){if(!t)return i.$message({type:"warning",message:"请填写完整数据!"}),!1;var e=[];i.currentArr.forEach(function(t){e.push({id:t.id,status:i.form.status,checkNoPassCause:i.form.checkNoPassCause,driverId:t.driverId,carStickerOrderSerial:t.carStickerOrderSerial,createTime:t.createTime})}),Object(s.a)(e).then(function(t){i.$message({type:"success",message:"操作成功！"}),i.close()}).catch(function(t){i.$message({type:"warning",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)})})})},close:function(t){this.$refs.ruleForm.resetFields(),this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof t&&t()}}}},"co/t":function(t,e){},eZ1p:function(t,e,i){"use strict";var s=i("jduE"),n=i("1onU"),a=i("pXH6");e.a={name:"toExamine",props:{isvisible:{type:Boolean,default:!1}},components:{Pager:n.a,add:a.default},data:function(){return{btnsize:"mini",loading:!1,dialogVisible:!1,dataTotal:0,changeForm:{},checkedinformation:[],currentArr:[],chooseTime:[],listSystemObj:{currentPage:1,pageSize:20,vo:{orderSerial:"",driverName:"",driverMobile:"",status:"AF0880101",unloadTimeStartTime:"",unloadTimeEndTime:""}},tableData:[]}},watch:{isvisible:{handler:function(t,e){t&&this.firstblood()},immediate:!0}},mounted:function(){},methods:{checkSelectable:function(t){return"1"==t.operResult},handlePageChange:function(t){this.listSystemObj.currentPage=t.pageNum,this.listSystemObj.pageSize=t.pageSize,this.firstblood()},firstblood:function(){var e=this;this.loading=!0,Object(s.b)(this.listSystemObj).then(function(t){e.tableData=t.data.list,e.dataTotal=t.data.totalCount,e.loading=!1}).catch(function(t){e.loading=!1,e.$message({type:"info",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)})})},handleSearch:function(t){"clear"==t&&(this.listSystemObj.vo={orderSerial:"",driverName:"",driverMobile:"",status:"AF0880101",unloadTimeStartTime:"",unloadTimeEndTime:""},this.chooseTime=[]),this.chooseTime&&(this.listSystemObj.vo.unloadTimeStartTime=this.chooseTime[0],this.listSystemObj.vo.unloadTimeEndTime=this.chooseTime[1]),1!=this.listSystemObj.currentPage&&(this.listSystemObj.currentPage=1,this.$refs.pager.inputval=this.listSystemObj.currentPage,this.$refs.pager.pageNum=this.listSystemObj.currentPage),this.firstblood()},handleClick:function(t,e){if(0==this.checkedinformation.length)this.$message({type:"warning",message:"请选择一条列表数据!"});else{switch(t){case"ex":this.dialogVisible=!0,this.currentArr=this.checkedinformation}this.$refs.multipleTable.clearSelection()}},clickDetails:function(t,e,i){this.$refs.multipleTable.toggleRowSelection(t)},getSelection:function(t){this.checkedinformation=t},pushOrderSerial:function(t){this.$router.push({name:"订单详情",query:{orderSerial:t.orderSerial}})}}}},jduE:function(t,e,i){"use strict";e.b=function(t){return Object(s.a)({url:"/"+n+"/sm/aflcCarStickerCheck/v1/list",method:"post",data:t})},e.a=function(t){return Object(s.a)({url:"/"+n+"/sm/aflcCarStickerCheck/v1/updateCarStickerOrder",method:"put",data:t})},e.c=function(t){return Object(s.a)({url:"/"+n+"/sm/aflcCarStickerCheck/v1/checkList",method:"post",data:t})};var s=i("Vo7i"),n="aflc-sm"},juIs:function(t,e,i){"use strict";var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tms-pagenation"},[i("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[i("span",{staticClass:"first-page"})]),i("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[i("span",{staticClass:"prev-page"})]),e._v(" "),i("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),i("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},nativeOn:{keydown:function(t){return e.handleKeyup(t)}},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),i("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[i("span",{staticClass:"next-page"})]),e._v(" "),i("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[i("span",{staticClass:"last-page"})]),e._v(" "),i("span",{staticClass:"tms-pagination__sizes"},[i("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizesChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})}))],1)])},staticRenderFns:[]};e.a=s},pXH6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("aqXL"),n=i("3hlv");var a=function(t){i("3TcB")},o=i("VU/8")(s.a,n.a,a,null,null);e.default=o.exports},t5DY:function(t,e,i){"use strict";e._10=function(e){return e=e||"",a.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return a.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(a.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(a.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(a.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return a.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new n.a(function(t){t(window.UPLOADPOLICYDATA)}):a.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return a.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return a.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(a.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return a.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return a.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(a.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return a.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return a.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return a.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return a.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(a.a)({url:"/"+c+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(a.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:t})};var s=i("//Fk"),n=i.n(s),a=i("Vo7i"),o="aflc-common",r="aflc-sm",c="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
webpackJsonp([520],{"8/tq":function(t,e,n){"use strict";var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"garde",attrs:{title:"是否将潜力等级调整为以下等级",top:"15vh",modal:!1,visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"30%","before-close":e.close}},[n("div",{staticClass:"ifcancel"},[n("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right"}},[n("el-form-item",{attrs:{prop:"potentialGrade"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.potentialGrade,callback:function(t){e.$set(e.form,"potentialGrade",t)},expression:"form.potentialGrade"}},e._l(e.optionsGradeType,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.code,disabled:t.disabled}})}))],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-success"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确认")]),e._v(" "),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-error"},on:{click:e.close}},[e._v("取消")])],1)])},staticRenderFns:[]};e.a=i},Zwmo:function(t,e,n){"use strict";var i=n("t5DY"),o=n("ecTC");e.a={name:"garde",components:{},props:{dialogVisible:{type:Boolean,default:!1},initForm:{type:Array}},watch:{dialogVisible:function(t,e){t&&(console.log(this.initForm),this.form.potentialGrade=this.initForm[0].levelAdjustmentCode)}},data:function(){return{formLabelWidth:"0",loading:!0,form:{potentialGrade:""},optionsGradeType:[],rules:{potentialGrade:{required:!0,message:"请选择调整等级",trigger:"change"}}}},mounted:function(){this.init()},methods:{init:function(){var e=this;Object(i.v)().then(function(t){e.optionsGradeType=t.data})},submitForm:function(t){var n=this;this.$refs[t].validate(function(t){if(!t)return n.$message({type:"warning",message:"请填写完整数据!"}),!1;n.btnShow=!0;var e=[];n.initForm.forEach(function(t){e.push({id:t.id,potentialGrade:n.form.potentialGrade,potentialGradeName:n.optionsGradeType.find(function(t){return t.code==n.form.potentialGrade}).name})}),Object(o.a)(e).then(function(t){n.$message({type:"success",message:"操作成功！"}),n.close()}).catch(function(t){n.$message({type:"info",message:"操作失败，原因："+(t.errorInfo?t.errorInfo:t.text)}),n.btnShow=!1})})},close:function(t){this.$refs.ruleForm.resetFields(),this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof t&&t()}}}},ecTC:function(t,e,n){"use strict";e.b=function(t){return Object(i.a)({url:"/"+o+"/usercenter/aflcShipperExtend/v1/shipperLevelList",method:"post",data:t})},e.a=function(t){return Object(i.a)({url:"/"+o+"/usercenter/aflcShipperExtend/v1/updatePotentialGrade",method:"put",data:t})};var i=n("Vo7i"),o="aflc-uc"},eh4s:function(t,e){},qV7O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Zwmo"),o=n("8/tq");var c=function(t){n("eh4s")},s=n("VU/8")(i.a,o.a,c,null,null);e.default=s.exports},t5DY:function(t,e,n){"use strict";e._10=function(e){return e=e||"",c.a.get("/"+s+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return c.a.get("/"+s+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(c.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(c.a)({url:"/"+s+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(c.a)({url:"/"+s+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(c.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(c.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(c.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(c.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(c.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return c.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new o.a(function(t){t(window.UPLOADPOLICYDATA)}):c.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return c.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return c.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(c.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return c.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return c.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(c.a)({url:"/"+s+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return c.a.get("/"+s+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return c.a.get("/"+s+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return c.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return c.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(c.a)({url:"/"+a+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(c.a)({url:"/"+s+"/system/user/v1/operate/staff",method:"post",data:t})};var i=n("//Fk"),o=n.n(i),c=n("Vo7i"),s="aflc-common",r="aflc-sm",a="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""}});
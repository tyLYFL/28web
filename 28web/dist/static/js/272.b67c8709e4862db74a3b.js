webpackJsonp([272],{A3bd:function(t,e,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chooseCityList"},[a("el-cascader",{ref:"cityTree",attrs:{options:e.cityTree,disabled:e.disabled,props:e.props},on:{change:e.handleItemMore},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1)},staticRenderFns:[]};e.a=i},F6AQ:function(t,e,a){"use strict";var i=a("dMM8"),n=a("A3bd");var s=function(t){a("TpPc")},o=a("VU/8")(i.a,n.a,s,null,null);e.a=o.exports},JUQo:function(t,e,a){"use strict";var i=a("RQ3y"),n=a("eTnS");var s=function(t){a("Q30d"),a("S5hD")},o=a("VU/8")(i.a,n.a,s,"data-v-6b157922",null);e.a=o.exports},Q30d:function(t,e){},RQ3y:function(t,e,a){"use strict";var i=a("mvHQ"),o=a.n(i),n=a("//Fk"),r=a.n(n),s=a("t5DY"),l=a("0xDb");e.a={name:"singleImageUpload",props:{value:[String,Array],title:{type:String,default:""},tip:{type:String,default:"（jpg/png。小于5M）"},size:{type:String,default:"mini"},showFileList:{type:Boolean,default:!1},limit:{type:Number,default:10},listtype:{type:String,default:"picture",enum:["text","picture","picture-card"]},disabled:{type:Boolean,default:!1}},computed:{imageUrl:function(){return this.value}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""},upload:{key:"",policy:"",OSSAccessKeyId:"",success_action_status:"201",signature:""},uploadUrl:"",dir:"",filelist:[]}},watch:{value:{handler:function(t){if(this.showFileList){var e=Array.isArray(t)?t:t?t.split(","):[];e=e.filter(function(t){return t}),this.filelist=e.map(function(t){var e={};return e.url=t,e})}else this.filelist=[{url:t}]},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(s._15)("aflc").then(function(t){e.upload.OSSAccessKeyId=t.accessid,e.upload.policy=t.policy,e.upload.signature=t.signature,e.uploadUrl=t.host,e.dir=t.dir}).catch(function(t){console.log("get Policy ERror:",t)})},rmImage:function(){this.emitInput("")},onexceed:function(t,e){this.$message.error("最多上传 "+this.limit+" 张!")},handleRemove:function(t,e){console.log("handleRemove:",t,e),this.filelist=e,this.emitInput()},random_string:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=e.length,i="",n=0;n<t;n++)i+=e.charAt(Math.floor(Math.random()*a));return i},emitInput:function(t){t&&this.filelist.push({url:t}),this.$emit("input",this.showFileList?this.filelist.map(function(t){return t.url}).join(","):t)},handleImageScucess:function(t){var e="";-1!==t.indexOf("Location")&&(e=(e=t.match(/<Location>([^<]+)<\/Location>/m))?e[1]:""),this.emitInput(e)},handleError:function(t){console.log("upload err:",t),this.$emit("error",t)},beforeUpload:function(t){var a=this;console.log("beforeUpload:",t);var i=/image\/\w+/.test(t.type)&&/(jpe?g|png)/i.test(t.type),n=t.size/1024/1024<5,s=t.name.match(/([^\.]+)$/);return s=s?"."+s[1]:"",new r.a(function(e,t){i?n?(console.log("loooo1"),a.init().then(function(t){console.log("loooo2"),a.upload.key=a.dir+Object(l.k)(new Date,"{y}{m}{d}")+"/"+a.random_string()+s,e(!0)}).catch(function(t){console.log("loooo3"),a.$message.error("未知错误："+o()(t)),e(!1)})):(a.$message.error("上传分类简图大小不能超过 5MB!"),t(!1)):(a.$message.error("上传分类简图只能是 JPG/PNG 格式!"),t(!1))})}}}},S5hD:function(t,e){},TpPc:function(t,e){},"U/44":function(t,e,a){"use strict";var i,n=a("bOdI"),s=a.n(n),o=a("0xDb"),r={};e.a={props:{fromData:{type:[Object,String,Array,Number]},editstatusMap:{type:[String],default:""}},data:function(){return{dataAraay:[],path:[],totalAraay:[],Mapstatus:this.editstatusMap}},watch:{editstatusMap:function(t){this.Mapstatus=t}},methods:{loadMap:function(){var t=this;this.$nextTick(function(){Object(o.h)("https://webapi.amap.com/maps?v=1.4.10&key=73bdb8428fbfe511ed6c5f3328b5734b&plugin=AMap.Geocoder,AMap.MouseTool").then(function(){t.init()})})},init:function(){var t,e=this;(r=new AMap.Map("shoppingMap",{resizeEnable:!0,zoom:12})).plugin(["AMap.ToolBar"],function(){r.addControl(new AMap.ToolBar)}),r.setCenter([113.257416,23.149586]),(a=new AMap.MouseTool(r)).polygon((t={strokeColor:"#FF33FF",strokeOpacity:1,strokeWeight:2},s()(t,"strokeOpacity",.2),s()(t,"fillColor","#1791fc"),s()(t,"fillOpacity",.4),s()(t,"strokeStyle","solid"),t));var a;(a=new AMap.MouseTool(r)).polygon();AMap.event.addListener(a,"draw",function(t){console.log(t.obj),"1"==e.Mapstatus?(e.$message({message:"修改围栏需要清除之前的围栏~",type:"warning"}),r.clearMap(),i.setMap(r)):"2"==e.Mapstatus?(e.$message({message:"详情不能进行修改~",type:"warning"}),r.clearMap(),i.setMap(r)):(e.dataAraay.push(t.obj.getPath()),e.$emit("returnStr",e.dataAraay))}),r.on("complete",function(){var t=[];t=0<e.fromData.points.length?e.fromData.points[0][0]:[113.257416,23.149586],e.path=e.fromData.points,i=new AMap.Polygon({path:e.path,isOutline:!0,strokeOpacity:1,lineJoin:"round",strokeWeight:2,strokeStyle:"solid",strokeColor:"#3366FF",strokeDasharray:[10,5],fillOpacity:.2,fillColor:"#1791fc"}),r.setCenter(t),i.setMap(r)})},ToolBar:function(){(i=new AMap.Polygon({path:this.totalAraay,isOutline:!0,strokeOpacity:1,lineJoin:"round",strokeWeight:3,strokeStyle:"solid",strokeColor:"#3366FF",strokeDasharray:[10,5],fillOpacity:.2,fillColor:"#1791fc"})).setMap(r)},clear:function(){"2"==this.Mapstatus?this.$message({message:"详情不能进行修改~",type:"warning"}):(r.clearMap(),this.path=[],this.dataAraay=[],this.Mapstatus="0",this.$emit("EditStr",[]))},editFlag:function(){this.$emit("EditStr",this.Mapstatus)},exit:function(){this.path=[],this.dataAraay=[],r.destroy()},setCity:function(){new AMap.Geocoder({}).getLocation(this.fromData.city+this.fromData.area,function(t,e){"complete"===t&&"OK"===e.info&&r.setCenter([e.geocodes[0].location.lng,e.geocodes[0].location.lat])})}},mounted:function(){this.loadMap()}}},Y2TZ:function(t,e,a){"use strict";var i=a("zZ9T"),n=(a("F6AQ"),a("ZgLz"),a("O6e2")),s=a("JUQo");e.a={props:{params:{type:[Object,String,Array,Number]},value:{type:String,default:""},btntype:{type:String,default:""},btntext:{type:String,default:""},btntitle:{type:String,default:""},icon:{type:String,default:""},plain:{type:Boolean,default:!1}},data:function(){return{btnStatus:!0,selectFlag:null,dialogFormVisible_add:!1,formLabelWidth:"200px",selectIndex:null,formAll:[{categoryName:null,categoryDesc:null,goodsName:null,categoryUnit:null,volume:null,weight:null,uploadCategoryDiagrams:null,standardProportion:"标准分类",tradeId:null,tradeName:null}],unitList:[]}},watch:{dialogFormVisible_add:{handler:function(t,e){t&&(this.btnStatus=!0)}}},mounted:function(){this.getInformation()},components:{Upload:s.a},methods:{openDialog:function(){var e=this;if(this.params.length)return 0==this.params.length&&"add"!==this.editType?(this.$message.warning("请选择您要操作的商圈"),!1):1<this.params.length&&"add"!==this.editType?(this.$message({message:"每次只能操作单条数据~",type:"warning"}),this.$emit("getData"),!1):(this.formAll[0].tradeId=this.params[0].id,this.formAll[0].tradeName=this.params[0].tradeName,Object(i.b)(this.params[0].id).then(function(t){0<t.data.length?e.formAll=t.data:e.formAll=[{categoryName:null,categoryDesc:null,goodsName:null,categoryUnit:null,volume:null,weight:null,uploadCategoryDiagrams:null,standardProportion:"标准分类",tradeId:e.params[0].id,tradeName:e.params[0].tradeName}]}),void(this.dialogFormVisible_add=!0));this.$message.warning("请选择您要操作的商圈")},change:function(){this.dialogFormVisible_add=!1},close:function(){this.dialogFormVisible_add=!1},changeList:function(){n.a.$emit("pushListtwo")},addItem:function(){if("view"==this.editType)return!1;this.formAll.push({categoryName:null,categoryDesc:null,goodsName:null,categoryUnit:null,volume:null,weight:null,uploadCategoryDiagrams:null,standardProportion:null,tradeId:this.params[0].id,tradeName:this.params[0].tradeName})},reduceItem:function(t){1<this.formAll.length&&this.formAll.splice(t,1)},getInformation:function(){var e=this;Object(i.i)().then(function(t){e.unitList=t.data})},completeData:function(){for(var t=0;t<this.formAll.length;t++){var e=/^[+]?(0|([1-9]\d*))(\.\d+)?$/;if(!this.formAll[t].categoryName)return this.$message.warning("第"+(t+1)+"条分类名称都不能为空"),!1;if(!this.formAll[t].goodsName)return this.$message.warning("第"+(t+1)+"条货物名称都不能为空"),!1;if(!this.formAll[t].categoryUnit)return this.$message.warning("第"+(t+1)+"条分类单位都不能为空"),!1;if(!this.formAll[t].volume)return this.$message.warning("第"+(t+1)+"条体积都不能为空"),!1;if(!this.formAll[t].weight)return this.$message.warning("第"+(t+1)+"条重量都不能为空"),!1;if(!e.test(this.formAll[t].volume))return this.$message.warning("第"+(t+1)+"条体积必须数字"),!1;if(!e.test(this.formAll[t].weight))return this.$message.warning("第"+(t+1)+"条重量必须数字"),!1;if(parseFloat(this.formAll[t].volume)<=0)return this.$message.warning("第"+(t+1)+"条体积必须大于0"),!1;if(parseFloat(this.formAll[t].weight)<=0)return this.$message.warning("第"+(t+1)+"条重量必须大于0"),!1;if(!this.formAll[t].uploadCategoryDiagrams)return this.$message.warning("第"+(t+1)+"条上传分类简图都不能为空"),!1;if(!this.formAll[t].standardProportion)return this.$message.warning("第"+(t+1)+"条与标准分类比例都不能为空"),!1;if(parseFloat(this.formAll[t].standardProportion)<=0&&0<t)return this.$message.warning("第"+(t+1)+"条与标准分类比例必须大于0"),!1;if(!e.test(this.formAll[t].standardProportion)&&0<t)return this.$message.warning("第"+(t+1)+"条与标准分类比例必须数字"),!1}},add_data:function(){var e=this;0!=this.completeData()&&this.btnStatus&&(this.btnStatus=!1,this.$message.info("新增中..."),Object(i.a)(this.formAll).then(function(t){e.$message.success("新增成功"),e.changeList(),e.dialogFormVisible_add=!1}).catch(function(t){e.$message.error("新增失败"),e.driverTemplateDialogFlag=!1}))}}}},YVvY:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Y2TZ"),n=a("rxx1");var s=function(t){a("zWKO")},o=a("VU/8")(i.a,n.a,s,null,null);e.default=o.exports},ZgLz:function(t,e,a){"use strict";var i=a("U/44"),n=a("iqXA");var s=function(t){a("aGbA")},o=a("VU/8")(i.a,n.a,s,null,null);e.a=o.exports},aGbA:function(t,e){},dMM8:function(t,e,a){"use strict";var i=a("t5DY");e.a={name:"getAreaList",props:{disabled:{type:Boolean},value:[String,Array]},data:function(){return{selectedOptions:[],cityTree:[],props:{label:"name",value:"code",children:"children"},nowData:{province:null,city:null,area:null}}},methods:{handleItemMore:function(t){this.nowData={province:null,city:null,area:null},t[0]&&(this.nowData.province={code:t[0],key:t[0],name:this.$refs.cityTree.currentLabels[0],value:this.$refs.cityTree.currentLabels[0],parentCode:null}),t[1]&&(this.nowData.city={code:t[1],key:t[1],name:this.$refs.cityTree.currentLabels[1],value:this.$refs.cityTree.currentLabels[1],parentCode:t[0]}),t[2]&&(this.nowData.area={code:t[2],key:t[2],name:this.$refs.cityTree.currentLabels[2],value:this.$refs.cityTree.currentLabels[2],parentCode:t[1]}),this.returnArr(this.nowData)},init:function(){var e=this;Object(i.Z)().then(function(t){e.cityTree=t.data})},returnArr:function(t){this.$emit("returnStr",t)},clearData:function(){this.selectedOptions=[]}},mounted:function(){this.init()},beforeDestroy:function(){this.selectedOptions=[]}}},eTnS:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-container",class:{uploadlist:t.showFileList}},[t.uploadUrl?a("el-upload",{staticClass:"image-uploader",attrs:{data:t.upload,action:t.uploadUrl,multiple:!1,drag:!t.showFileList,"show-file-list":t.showFileList,"file-list":t.filelist,limit:t.limit,"before-upload":t.beforeUpload,"list-type":t.listtype,"on-exceed":t.onexceed,disabled:t.disabled,"on-remove":t.handleRemove,"on-error":t.handleError,"on-success":t.handleImageScucess}},[t._t("content",[t.title&&!t.showFileList?a("div",{staticClass:"upload__title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),a("el-button",{attrs:{size:t.size,type:"primary"}},[t._v("点击上传")]),t._v(" "),t.showFileList?t._e():a("div",{staticClass:"el-upload__text"},[t._v("将文件拖拽到此区域")]),t._v(" "),t.tip?a("div",{staticClass:"upload__tip"},[t._v(t._s(t.tip))]):t._e()])],2):t._e(),t._v(" "),t.imageUrl&&!t.showFileList?a("div",{staticClass:"image-preview"},[a("div",{staticClass:"image-preview-wrapper"},[a("img",{attrs:{src:t.imageUrl}}),t._v(" "),a("div",{staticClass:"image-preview-action"},[a("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])]):t._e()],1)},staticRenderFns:[]};e.a=i},iqXA:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shoppingMapBox"},[a("div",{attrs:{id:"clear"},on:{click:t.clear}},[t._v("清除所有地理围栏")]),t._v(" "),a("div",{attrs:{id:"shoppingMap"}})])},staticRenderFns:[]};e.a=i},rxx1:function(t,e,a){"use strict";var i={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"shoppingDialog commoncss"},[i("el-button",{attrs:{type:a.btntype,value:a.value,plain:a.plain,icon:a.icon,size:"mini"},on:{click:function(t){a.openDialog()}}},[a._v(a._s(a.btntext))]),a._v(" "),i("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:a.dialogFormVisible_add,"before-close":a.change,title:a.btntitle,top:"5vh",closeOnClickModal:!1}},[i("el-form",{ref:"formAll",attrs:{inline:""}},[i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"商圈名称 ："}},[i("el-input",{attrs:{disabled:""},model:{value:a.formAll[0].tradeName,callback:function(t){a.$set(a.formAll[0],"tradeName",t)},expression:"formAll[0].tradeName"}})],1)],1)],1),a._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},a._l(a.formAll,function(t,e){return i("div",{key:e,staticClass:"manageShopping_table"},[0==e?i("div",{staticClass:"manageShopping_tr"},[i("div",{staticClass:"manageShopping_th table_w1"},[a._v("序号")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w2"},[a._v("分类名称")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w3"},[a._v("分类简要说明")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w4"},[a._v("货物名称")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w5"},[a._v("分类单位")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w6"},[a._v("体积（方）")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w7"},[a._v("重量(KG)")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w8"},[a._v("上传分类简图")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w9"},[a._v("与标准分类比例")]),a._v(" "),i("div",{staticClass:"manageShopping_th table_w10"},[a._v("操作")])]):a._e(),a._v(" "),i("div",{staticClass:"manageShopping_tr"},[i("div",{staticClass:"manageShopping_td table_w1",on:{click:function(t){a.changeInput(e)}}},[a._v("\n                    "+a._s(e+1)+"\n                 ")]),a._v(" "),i("div",{staticClass:"manageShopping_td table_w2"},[i("el-input",{attrs:{maxlength:"20"},model:{value:a.formAll[e].categoryName,callback:function(t){a.$set(a.formAll[e],"categoryName",t)},expression:"formAll[keys].categoryName"}})],1),a._v(" "),i("div",{staticClass:"manageShopping_td table_w3"},[i("el-input",{attrs:{maxlength:"50"},model:{value:a.formAll[e].categoryDesc,callback:function(t){a.$set(a.formAll[e],"categoryDesc",t)},expression:"formAll[keys].categoryDesc"}})],1),a._v(" "),i("div",{staticClass:"manageShopping_td table_w4"},[i("el-input",{attrs:{maxlength:"20"},model:{value:a.formAll[e].goodsName,callback:function(t){a.$set(a.formAll[e],"goodsName",t)},expression:"formAll[keys].goodsName"}})],1),a._v(" "),i("div",{staticClass:"manageShopping_td table_w5"},[i("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:a.formAll[e].categoryUnit,callback:function(t){a.$set(a.formAll[e],"categoryUnit",t)},expression:"formAll[keys].categoryUnit"}},a._l(a.unitList,function(t){return i("el-option",{key:t.code,attrs:{label:t.name,value:t.code,disabled:t.disabled}})}))],1),a._v(" "),i("div",{staticClass:"manageShopping_td table_w6"},[i("el-input",{model:{value:a.formAll[e].volume,callback:function(t){a.$set(a.formAll[e],"volume",t)},expression:"formAll[keys].volume"}})],1),a._v(" "),i("div",{staticClass:"manageShopping_td table_w7"},[i("el-input",{model:{value:a.formAll[e].weight,callback:function(t){a.$set(a.formAll[e],"weight",t)},expression:"formAll[keys].weight"}})],1),a._v(" "),i("div",{staticClass:"manageShopping_td table_w8"},[i("span",[i("upload",{staticClass:"licensePicture",attrs:{tip:"（必须为jpg/png并且小于5M）"},model:{value:a.formAll[e].uploadCategoryDiagrams,callback:function(t){a.$set(a.formAll[e],"uploadCategoryDiagrams",t)},expression:"formAll[keys].uploadCategoryDiagrams"}})],1)]),a._v(" "),i("div",{staticClass:"manageShopping_td table_w9"},[0==e?i("span",[a._v("标准分类")]):i("span",[i("el-input",{model:{value:a.formAll[e].standardProportion,callback:function(t){a.$set(a.formAll[e],"standardProportion",t)},expression:"formAll[keys].standardProportion"}})],1)]),a._v(" "),i("div",{staticClass:"manageShopping_td Item_position table_w10"},[i("span",0==e?{staticClass:"addItem",on:{click:function(t){a.addItem()}}}:{staticClass:"reduceItem",on:{click:function(t){a.reduceItem(e)}}})])])])}))],1)],1),a._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:a.add_data}},[a._v("确 定")]),a._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){a.close()}}},[a._v("取 消")])],1)],1)],1)},staticRenderFns:[]};e.a=i},t5DY:function(t,e,a){"use strict";e._10=function(e){return e=e||"",s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})},e._14=function(t){return s.a.get("/"+o+"/common/aflcCommonPCA/v1/findAllStreetby/"+t)},e._12=function(t){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})},e._13=function(t){return Object(s.a)({url:"/"+o+"/aflcCommonSysDistApi/findAflcCommonSysDictByCodes/"+t,method:"get"})},e._11=function(t){return Object(s.a)({url:"/"+o+"/sysDict/findAflcCommonSysDictBycode/"+t,method:"get"})},e.s=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00424")},e.r=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF021")},e.u=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF040")},e.f=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF048")},e.j=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02004")},e.T=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF02003")},e.M=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF017")},e.p=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF018")},e.q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF009")},e.n=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05602")},e.m=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05603")},e.V=function(t,e){return Object(s.a)({url:"/"+r+"/sm/aflcStandardPrice/v1/getPriceByServiceAndCarType/"+t+"/"+e,method:"get"})},e.O=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00101")},e.o=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF009",method:"get"})},e.N=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF00208",method:"get"})},e.G=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF054",method:"get"})},e.R=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF053",method:"get"})},e.z=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00503")},e.K=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00207")},e.k=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00206")},e.Q=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00209")},e.S=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF062")},e.I=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF063")},e.L=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF064")},e.i=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF057")},e.l=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00210")},e.J=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF066")},e.y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF074")},e.x=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF075")},e.t=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF076")},e.P=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF077")},e.H=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF078")},e.v=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00211")},e.w=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF06803")},e.F=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08501")},e.A=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08506")},e.h=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08502")},e.E=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08507")},e.B=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00513")},e.C=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880301")},e.D=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880302")},e.X=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08403")},e.U=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08404")},e.a=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880303")},e.e=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08805")},e.d=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08804")},e.c=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08808")},e.g=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0880304")},e.W=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08810")},e._20=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF00418")},e.b=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF08802")},e._17=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710801")},e._18=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF05006")},e._16=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF04913")},e.Y=function(){return s.a.get("/"+o+"/sysDict/getSysDictByCodeGet/AF0710803")},e._15=function(t){return window.UPLOADPOLICYDATA?new n.a(function(t){t(window.UPLOADPOLICYDATA)}):s.a.get("/aflc-common/common/oss/v1/policy?bucket="+t).then(function(t){return window.UPLOADPOLICYDATA=t.data||"",window.UPLOADPOLICYDATA_timer=setTimeout(function(){window.UPLOADPOLICYDATA=""},6e4),window.UPLOADPOLICYDATA})},e._9=function(t){return s.a.get("/aflc-common/common/oss/v1/generatePreSignedUrl?bucket=aflcprivate&key="+t)},e._8=function(){return s.a.get("/"+r+"/sm/aflcDistrict/v1/getProvinceList")},e._5=function(t){return Object(s.a)({url:"/"+r+"/sm/aflcDistrict/v1/lists",method:"post",data:{code:t}})},e._4=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getCarTypeList")},e._7=function(){return s.a.get("/"+r+"/sm/aflcSysDict/v1/getServiceClassList")},e._6=function(){return Object(s.a)({url:"/"+o+"/sysDict/getSysDictByCodeGet/AF025",method:"get"})},e.Z=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/treaCode")},e._2=function(){return s.a.get("/"+o+"/common/aflcCityTree/v1/provinceCode")},e._0=function(t){return s.a.get("/aflc-sm/sm/aflcAreaPrice/v1/open/"+t)},e._1=function(t){return s.a.get("/aflc-uc/usercenter/aflcLogisticsCompany/v1/companyName?id="+t)},e._3=function(t){return Object(s.a)({url:"/"+l+"/usercenter/aflcBusinessGroup/v1/findAflcSystemUserList",method:"post",data:t})},e._19=function(t){return Object(s.a)({url:"/"+o+"/system/user/v1/operate/staff",method:"post",data:t})};var i=a("//Fk"),n=a.n(i),s=a("Vo7i"),o="aflc-common",r="aflc-sm",l="aflc-uc";window.UPLOADPOLICYDATA="",window.UPLOADPOLICYDATA_timer=""},zWKO:function(t,e){},zZ9T:function(t,e,a){"use strict";e.g=function(t,e,a){return Object(i.a)({url:"/"+n+"/usercenter/aflcTradeArea/v1/list",method:"post",data:{currentPage:t,pageSize:e,vo:a}})},e.f=function(t){return i.a.post("/"+n+"/usercenter/aflcTradeArea/v1/add",t)},e.d=function(t){return Object(i.a)({url:"/"+n+"/usercenter/aflcTradeArea/v1/delete/"+t,method:"delete"})},e.c=function(t){return Object(i.a)({url:"/"+n+"/usercenter/aflcTradeArea/v1/enableOrDisable",method:"post",data:t})},e.h=function(t){return i.a.put("/"+n+"/usercenter/aflcTradeArea/v1/update",t)},e.e=function(t){return Object(i.a)({url:"/"+n+"/usercenter/aflcTradeArea/v1/"+t,method:"get"})},e.i=function(){return i.a.get("/"+s+"/sysDict/getSysDictByCodeGet/AF04903")},e.a=function(t){return Object(i.a)({url:"/"+n+"/usercenter/aflcGoodscategorySetting/v1/add",method:"post",data:t})},e.b=function(t){return Object(i.a)({url:"/"+n+"/usercenter/aflcGoodscategorySetting/v1/trade/"+t,method:"get"})};var i=a("Vo7i"),n="aflc-uc",s="aflc-common"}});
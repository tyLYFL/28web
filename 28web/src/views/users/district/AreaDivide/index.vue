<template>
    <div class="identicalStyle AreaDivide" style="height:100%" v-loading="loading">
          <el-form :inline="true"  class="demo-ruleForm classify_searchinfo">
            <el-form-item label="所在地">
              <GetCityList ref="area" v-model="formAllData.location"  @returnStr="getStr"></GetCityList>
            </el-form-item>
            <el-form-item label="区域名称">
              <el-input  v-model.trim="formAllData.professionTradeName"></el-input>
            </el-form-item>    
            <el-form-item label="类型">
                    <el-select v-model="formAllData.professionTradeType" placeholder="请选择" clearable>
                        <el-option
                            v-for="item in professionTradeTypeList"
                            :key="item.code"
                            :label="item.name"
                            :value="item.code"
                            :disabled="item.disabled"
                            >
                        </el-option>
                    </el-select>
            </el-form-item>
            <el-form-item label="负责人">
              <el-input v-model.trim="formAllData.professionTradeOwner"></el-input>
            </el-form-item> 
            <el-form-item label="手机号码">
              <el-input v-model.trim="formAllData.ownerPhone"></el-input>
            </el-form-item> 
            <el-form-item class="fr">       
          <el-button type="primary" plain @click="getData_query" :size="btnsize" icon="el-icon-search">搜索</el-button>
          <el-button type="info" plain @click="clearSearch"  :size="btnsize" icon="fontFamily aflc-icon-qingkong">清空</el-button>
          </el-form-item>              
          </el-form>
          	<div class="classify_info">
            <div class="btns_box">
                <el-button  type="primary" value="value" plain icon="el-icon-circle-plus" @click="openDialogAdd()" :size="btnsize" v-has:BUSINESS_AREA_MANAGE_AREA_DIVISION_MANAGE_ADD>新增</el-button>
                <el-button  type="primary" value="value" plain icon="el-icon-edit" @click="openDialogEdit()" :size="btnsize" v-has:BUSINESS_AREA_MANAGE_AREA_DIVISION_MANAGE_UPDATE>修改</el-button>
                <el-button  type="primary" plain icon="el-icon-bell" @click="handleUseStates" :size="btnsize" v-has:BUSINESS_AREA_MANAGE_AREA_DIVISION_MANAGE_USE>启用/停用</el-button>
                <el-button type="primary" plain icon="el-icon-delete" @click="delete_data" :size="btnsize" v-has:BUSINESS_AREA_MANAGE_AREA_DIVISION_MANAGE_DELETE>删除</el-button>
            </div>
            <div class="info_news">    
            <el-table style="width: 100%" stripe border height="100%" :data="tableDataAll" ref="multipleTable"  @selection-change="getSelection" @row-click="clickDetails" highlight-current-row tooltip-effect="dark" v-has:BUSINESS_AREA_MANAGE_AREA_DIVISION_MANAGE_LIST>
              <el-table-column
                            label="选择"
                            type="selection"
                            width="50">
              </el-table-column>
           <el-table-column label="序号" sortable  width="60">
                            <template slot-scope="scope">
                             {{ (page - 1)*pagesize + scope.$index + 1 }}
                            </template>
            </el-table-column> 
            <el-table-column  label="区域名称" sortable>
            <template slot-scope="scope">
               <span>{{scope.row.professionTradeName}}</span>
             </template>
            </el-table-column>
            <el-table-column  label="类型" prop="professionTradeTypeName" sortable>
            </el-table-column>
            <el-table-column  label="所在地" prop="location" sortable>
            </el-table-column>
            <el-table-column  label="负责人" prop="professionTradeOwner" sortable>
            </el-table-column>
            <el-table-column  label="联系号码" prop="ownerPhone" sortable>
            </el-table-column>       
            <el-table-column  label="业务员数量" prop="" sortable>
            </el-table-column>                                                       
            <el-table-column  label="状态" prop="" sortable >
            <template  slot-scope="scope">
              {{ scope.row.usingStatus == 1 ? '启用' : '禁用' }}
            </template>
            </el-table-column>      
            </el-table>
        	</div> 
         <!-- 页码 -->
        <div class="info_tab_footer">共计:{{ dataTotal }} <div class="show_pager"> <Pager :total="dataTotal" @change="handlePageChange"  :sizes="sizes" ref="pager" v-has:BUSINESS_AREA_MANAGE_AREA_DIVISION_MANAGE_LIST/></div> </div> 
        </div>

        <!-- 弹框 -->
       <div class="AreaDivideDialog commoncss">
      <el-dialog  :visible="dialogFormVisible_add" :before-close="change" top=3vh v-dialogDrag :title="btntitle" :closeOnClickModal='false'>
    <el-form ref="formAll" :model="formAll" :rules="rulesForm" :label-width="formLabelWidth">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="区域名称 ："  prop="professionTradeName">
                    <el-input  :disabled="editType=='view'" v-model="formAll.professionTradeName"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="区域所属类型 ："  prop="professionTradeType">
                    <el-select v-model="formAll.professionTradeType" placeholder="请选择" clearable>
                        <el-option
                            v-for="item in professionTradeTypeList"
                            :key="item.code"
                            :label="item.name"
                            :value="item.code"
                            :disabled="item.disabled"
                            >
                        </el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="负责人 ：" >
                    <el-input  :disabled="editType=='view'" v-model="formAll.professionTradeOwner"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="联系号码 ：">
                    <el-input  :disabled="editType=='view'" v-model="formAll.ownerPhone" v-numberOnly :maxlength="11"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                     <span v-if="editType !=='add'&&!selectFlag">
                    <el-form-item label="所在区域 ："  prop="location">
                    <el-input v-model="formAll.location" placeholder="请选择" :disabled="editType=='view'" @focus="changeSelect"></el-input>
                    </el-form-item>
                     </span>
                     <span v-else>
                    <el-form-item label="所在区域 ："  prop="location">
                      <GetCityList ref="area1" v-model="formAll.location"  @returnStr="getStr2"></GetCityList>
                    </el-form-item>
                     </span>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="中心区域详细地址 ：" prop="address">
                    <el-input  :disabled="editType=='view'" ref="centerAdress" id="centerAdress" v-model="formAll.address"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>  
            <el-row>
                <el-col :span="12">
                    <el-form-item label="围栏半径范围（米）：" prop="centerPointRadius" v-numberOnly>
                    <el-input  :disabled="editType=='view'"  v-model="formAll.centerPointRadius" @blur = centerPointRadiusBlur></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="允许打卡范围（米）："  prop="punchClockRangeRadius" v-numberOnly>
                    <el-input  :disabled="editType=='view'" v-model="formAll.punchClockRangeRadius" @blur = punchClockRangeRadiusBlur></el-input>
                    </el-form-item>
                </el-col>
            </el-row>        
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商圈地理围栏 ：">
                      <div id="AreaDividemap"></div>
                    </el-form-item>
                </el-col>
            </el-row>          
           </el-form>
            <div  class="dialog-footer">
                <el-button type="primary"  @click="add_data" v-if="editType=='add'">确 定</el-button>
                <el-button type="primary"  @click="edit_data" v-if="editType=='edit'">确 定</el-button>
                <el-button @click="close()" >取 消</el-button>
            </div>    
      </el-dialog>
      </div>
      </div>
</template>
<script>
import {data_post_aflcProfessionTradeArea,data_Able_aflcProfessionTradeArea,data_post_aflcProfessionTradeArea_create,data_get_aflcProfessionTradeAreaId,data_Del_aflcProfessionTradeArea,data_post_aflcProfessionTradeArea_update} from '@/api/users/district/AreaDivide.js'
import {getDictionary} from '@/api/common.js'
import GetCityList from '@/components/GetCityList/city'
import { eventBus } from '@/eventBus'
import Pager from '@/components/Pagination/index'
import { parseTime } from '@/utils/'
import AreaDividemap from '@/components/map/AreaDividemap'
import { loadJs } from '@/utils/'
var map = {}
export default {
  data() {
     const centerPointRadiusValidator = (rule, val, cb) =>{
          if(val==0){
            cb(new Error('请输入大于零的数'))
          }
          else{
          cb()
          }
    }
    const punchClockRangeRadiusValidator = (rule, val, cb) =>{
            if(val==0){
            cb(new Error('请输入大于零的数'))
          }
          else if(parseInt(val)>parseInt(this.formAll.centerPointRadius)){
                cb(new Error('允许打卡范围不能大于围栏半径范围'))
          }
          else{
          cb()
          }  
    }
    return {
      btnStatus:true, //新增修改按钮状态  
      loading:false,
      btnsize: 'mini',
      selectRowData: {},
      selectId: [],
      sizes: [20, 50, 100, 400],
      pagesize: 20, // 初始化加载数量
      page: 1, // 初始化页码
      totalCount: null,
      dataTotal: 0,
      tableDataAll: [],
      radio: 1,
      professionTradeTypeList:[],
      formAllData: {
        professionTradeName: null,
        location: null,
        professionTradeType:null,
        professionTradeOwner:null,
        ownerPhone:null,
      },
      formAll:{
      professionTradeName:null,
      professionTradeType:null,
      professionTradeOwner:null,
      ownerPhone:null,
      areaCode:null,
      area:null,
      city:null,
      province:null,
      location:null,
      address:null,
      centerPoint:null,
      centerPointRadius:0,
      punchClockRangeRadius:0,
      },
      centerPoint:[],
      rulesForm:{
      professionTradeName:{required:true, message:'区域名称不能为空', trigger:'change'},
      professionTradeType:{required:true, message:'区域所属类型不能为空', trigger:'change'},
      location:{required:true, message:'所在区域 不能为空', trigger:'change'},
      address:{required:true, message:'中心区域详细地址不能为空', trigger:'change'},
      centerPointRadius:{validator:centerPointRadiusValidator, trigger:'change',required:true,},
      punchClockRangeRadius:{validator:punchClockRangeRadiusValidator, trigger:'change',required:true,},
      },
      selectFlag:null,
      formLabelWidth:'190px',
      dialogFormVisible_add:false,
      btntitle:'',
      editType:'',
      editstatus:'0',
      marker:null,
      contextMenuPositon:[]
    }
  },
  components: {
    Pager,
    GetCityList,
    AreaDividemap
  },
  watch:{
   dialogFormVisible_add:{
        handler: function(val, oldVal) {
            if(!val){
            this.formAll = {
            professionTradeName:null,
            professionTradeType:null,
            professionTradeOwner:null,
            ownerPhone:null,
            areaCode:null,
            area:null,
            city:null,
            province:null,
            location:null,
            address:null,
            centerPoint:null,
            centerPointRadius:0,
            punchClockRangeRadius:0,
            }
            this.selectFlag = null;
            if(this.$refs.area1){
            this.$refs.area1.clearData();
            this.$refs.formAll.resetFields();
            }
            }
            else{
            this.btnStatus = true
            if(this.$refs.formAll){
            this.$refs.formAll.resetFields();
            }
            this.loadMap();
            }
        },
    },
  },
  methods: {
      getStr(val){
        this.formAllData.location= val.area.name
      },
      getStr2(val){
                this.formAll.areaCode= val.area.code
                this.formAll.area = val.area.name
                this.formAll.city = val.city.name
                this.formAll.province = val.province.name
                this.formAll.location = val.province.name + val.city.name + val.area.name
                this.setCity()
            },  

    // 下拉数据字典
    getMoreInformation() {
        getDictionary('AF06801').then(res=>{
          this.professionTradeTypeList = res.data
        })
    },
    // 列表刷新页面
    firstblood() {
    //   this.loading = true
      data_post_aflcProfessionTradeArea(this.page, this.pagesize, this.formAllData).then(res => {
        this.dataTotal = res.data.totalCount
        this.tableDataAll = res.data.list
        this.loading = false
      })
    },
    //  查询
    getData_query() {
      this.page = 1;
      this.$refs.pager.inputval = this.page;
      this.$refs.pager.pageNum = this.page;
      this.firstblood()
    },
    // 清空
    clearSearch() {
       this.formAllData = {
        professionTradeName: null,
        location: null,
        professionTradeType:null,
        professionTradeOwner:null,
        ownerPhone:null,
      }
       if(this.page!= 1){
        this.page = 1;
        this.$refs.pager.inputval = this.page;
        this.$refs.pager.pageNum = this.page;
      }
      this.$refs.area.clearData();
       this.firstblood()
     },
    // 新增按钮
    openDialogAdd(){
        this.dialogFormVisible_add = true;
        this.btntitle="创建";
        this.editType="add";
        this.editstatus = '0';
    },
    // 修改按钮
    openDialogEdit(){
          if(!this.selectRowData.length){
               this.$message.warning('请选择您要操作的区域');
               return
          }
          else if(this.selectRowData.length == 0 && this.editType !== 'add'){
               this.$message.warning('请选择您要操作的区域');
               return false
          }else if (this.selectRowData.length > 1 && this.editType !== 'add') {
                this.$message({
                    message: '每次只能操作单条数据~',
                    type: 'warning'
                })
                this.getDataList();
                return false
          }
          else{
            data_get_aflcProfessionTradeAreaId(this.selectRowData[0].id).then(res=>{
              this.formAll = res.data
              this.centerPoint = this.formAll.centerPoint.split(",")
              this.setCity()
              this.geocoder_CallBack(this.centerPoint)
          })
            this.dialogFormVisible_add = true;
            this.btntitle="修改";
            this.editType="edit";
            this.editstatus = '1';
          }
    },
    change:function(){
      this.dialogFormVisible_add = false;
      this.getDataList()
     },
    close:function(){
      this.dialogFormVisible_add = false;
      this.getDataList()
      },
    // 省市状态表
    changeSelect(){
      this.selectFlag='1'
    },
     // 判断选中与否
    getSelection(val) {
      console.log('选中内容', val)
      this.selectRowData = val
    },
    //点击选中当前行
    clickDetails(row, event, column){
        this.$refs.multipleTable.toggleRowSelection(row);
    }, 
        // 每页显示数据量变更
    handlePageChange(obj) {
      this.page = obj.pageNum
      this.pagesize = obj.pageSize
      this.firstblood()
    },
        // 选择删除
    delete_data() {
      if (this.selectRowData.length == 0) {
        this.$message.warning('请选择您要操作的数据')
        return
      } else if (this.selectRowData.length > 1) {
        this.$message({
              message: '每次只能操作单条数据~',
              type: 'warning'
            })
        this.$refs.multipleTable.clearSelection()
      } else {
        this.delDataInformation()
      }
    },
       // 确认删除
    delDataInformation() {
      this.$confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
        data_Del_aflcProfessionTradeArea(this.selectRowData[0].id).then(res => {
          this.$message.success('删除成功')
          this.firstblood()
          this.$refs.multipleTable.clearSelection()
        }).catch(err => {
          this.firstblood()
          this.$refs.multipleTable.clearSelection()
          this.$message({
            type: 'info',
            message: '操作失败，原因：' + err.text ? err.text : err
          })
        })
      }).catch(() => {
        this.firstblood()
        this.$refs.multipleTable.clearSelection()
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
      // 启用禁用
    handleUseStates() {
      if (this.selectRowData.length == 0) {
        this.$message.warning('请选择您要操作的数据')
        return
      } else if (this.selectRowData.length > 1) {
        this.$message({
              message: '每次只能操作单条数据~',
              type: 'warning'
            })
        this.$refs.multipleTable.clearSelection()
      } else {
        this.selectId.push(this.selectRowData[0].id)
        data_Able_aflcProfessionTradeArea(this.selectId).then(res => {
              this.selectId.splice(0, 1)
              if (this.selectRowData[0].usingStatus == 1) {
                this.$message.warning('已禁用')
              } else {
                this.$message.success('已启用')
              }
              this.firstblood()
              this.$refs.multipleTable.clearSelection()
            })
      }
    },
    centerPointRadiusBlur(){
    if(this.centerPoint.length>0){
    this.geocoder_CallBack(this.centerPoint)
    }
    },
    punchClockRangeRadiusBlur(){
    if(this.centerPoint.length>0){
    this.geocoder_CallBack(this.centerPoint)
    }
    },
    // 新增
    add_data(){
    this.$refs['formAll'].validate(valid=>{
    if(valid){
    if(!this.formAll.centerPoint){
       this.$message.error('请在地图上点击增加中心点')
    }else{
    if(this.btnStatus){
      this.btnStatus = false
      this.$message.info('修改中...')
    data_post_aflcProfessionTradeArea_create(this.formAll).then(res=>{
      this.$message.success('新增成功');
      this.dialogFormVisible_add = false;
      this.firstblood()
    }).catch(err=>{
      this.$message.error(err.text)
      this.dialogFormVisible_add = false;
    })    
    } 
    }
    }
    })  
    },
    // 修改
    edit_data(){
    this.$refs['formAll'].validate(valid=>{
    if(valid){
    if(!this.formAll.centerPoint){
       this.$message.error('请在地图上点击增加中心点')
    }else{
      if(this.btnStatus){
      this.btnStatus = false
      this.$message.info('修改中...')
    data_post_aflcProfessionTradeArea_update(this.formAll).then(res=>{
      this.$message.success('修改成功');
      this.dialogFormVisible_add = false;
      this.firstblood()
    }).catch(err=>{
      this.$message.error(err.text)
      this.dialogFormVisible_add = false;
    })
    }
    }
    }
    })
    },
    getDataList() {
      this.firstblood()
      this.$refs.multipleTable.clearSelection()
    },

    // 高德地图
    loadMap:function(){
            this.$nextTick(()=>{
                loadJs('https://webapi.amap.com/maps?v=1.4.10&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.CitySearch,AMap.Autocomplete,AMap.DistrictSearch,AMap.Geocoder,AMap.OverView,AMap.TruckDriving,AMap.Scale').then(() => {
                this.init();
                })
    })},
    init:function(){
        var _this = this
        var contextMenu = new AMap.ContextMenu()
   		map = new AMap.Map('AreaDividemap', {
			resizeEnable: true,
			zoom:12
        })

    // 输入提示
      var autoOptions = {
        input: 'centerAdress'
      }
      var auto = new AMap.Autocomplete(autoOptions)
      AMap.event.addListener(auto, 'select', function(e){
         _this.centerPoint = [e.poi.location.lng,e.poi.location.lat]
         _this.formAll.address = e.poi.district + e.poi.name
         _this.formAll.centerPoint = e.poi.location.lng+','+ e.poi.location.lat
         _this.geocoder_CallBack(_this.centerPoint)
         map.setCenter([e.poi.location.lng,e.poi.location.lat]);
      })
        map.on('rightclick', function (e) {
            contextMenu.open(map, e.lnglat);
            _this.contextMenuPositon = e.lnglat; //右键菜单位置
        });
        contextMenu.addItem('添加中心点', function(e) {
        _this.clearMarker()
        findInfo(_this.contextMenuPositon)
        }, 3)
        function findInfo(pos) {
        var geocoder = new AMap.Geocoder({
        radius: 500 ,// 范围，默认：500
        extensions: "all"
        })
        geocoder.getAddress(pos, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  _this.formAll.centerPoint = pos.lng+','+pos.lat
                  _this.formAll.address = result.regeocode.formattedAddress
                  _this.centerPoint = [pos.lng,pos.lat]
                  _this.geocoder_CallBack(_this.centerPoint)
                } else {
                    _this.clearMarker()
                    alert('获取不到当前位置的地址信息~')
                }
                })
            }
        },

        geocoder_CallBack(pos){
        this.circleDraw(pos)
        this.circleDraw2(pos)
        this.marker = new AMap.Marker({
            map: map,
            position: pos // 基点位置
          })         
        },

        // 中心点原型范围
        circleDraw(pos){
         map.clearMap(circle);
         var circle = new AMap.Circle({
                center: pos,
                radius: this.formAll.centerPointRadius, //半径
                borderWeight: 3,
                strokeColor: "#FF33FF", 
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeOpacity: 0.8,
                fillOpacity: 0.1,
                strokeStyle: 'dashed',
                strokeDasharray: [3, 3], 
                fillColor: '#1791fc',
                zIndex: 50,
            })
        circle.setMap(map)
        },
        circleDraw2(pos){
         var circle = new AMap.Circle({
                center: pos,
                radius: this.formAll.punchClockRangeRadius, //半径
                borderWeight: 3,
                strokeColor: "#0588c3", 
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeOpacity: 0.8,
                fillOpacity: 0.1,
                strokeStyle: 'dashed',
                strokeDasharray: [3, 3], 
                fillColor: '#FF0000',
                zIndex: 50,
            })
        circle.setMap(map)
        },

        // 清除中心点
        clearMarker(){
        if (this.marker) {
          this.marker.setMap(null)
          this.marker = null
        }
        },

        // 定位城市
        setCity:function(){
            var _this = this
            let getLocationMap = [];
            var geocoder
             geocoder = new AMap.Geocoder({
            });
             geocoder.getLocation(_this.formAll.city+_this.formAll.area, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
             map.setCenter([result.geocodes[0].location.lng,result.geocodes[0].location.lat]); 
            }
        })
        }
        
  },

  mounted() {
    eventBus.$on('pushListtwo', () => {
    this.firstblood()
    })
    this.getMoreInformation()
    this.firstblood()
  }
}
</script>
<style lang="scss">  
.amap-sug-result { z-index: 6666!important; }
.AreaDivide{
   .AreaDivideDialog{
     display: inline-block;
        .el-dialog{
         width: 80%!important;
         max-height: 97%;
     }
     #AreaDividemap{
        width: 100%;
        height: 500px;
  }
  }
}
</style>


<template>
    <div class="identicalStyle AreaContractor" style="height:100%">
          <el-form :inline="true"  class="demo-ruleForm classify_searchinfo">
            <el-form-item label="区域承包商">
                <el-input v-model.trim="formAllData.areaCarrierName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="出发地">
                <el-input v-model.trim="formAllData.startLocation" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="到达地">
                <el-input v-model.trim="formAllData.endLocation" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item class="fr">
           <el-button type="primary" plain @click="getData_query" :size="btnsize" icon="el-icon-search">搜索</el-button> 
           <el-button type="info" plain @click="clearSearch"  :size="btnsize" icon="fontFamily aflc-icon-qingkong">清空</el-button>
          </el-form-item>
          </el-form>
          	<div class="classify_info">
            	<div class="btns_box">
                   <comtratorDialog
                    btntext="新增"
                    :plain="true"
                    btntype="primary"
                    icon="el-icon-circle-plus"
                    editType="add"
                    btntitle="新增区域承包商"
                    @getData="getDataList"
                    v-has:SERVICE_LTL_AREA_CARRIER_ADD
                    >
                    </comtratorDialog>
                   <comtratorDialog
                    btntext="修改"
                    :plain="true"
                    btntype="primary"
                    icon="el-icon-edit"
                    editType="edit"
                    btntitle="修改区域承包商"
                    :params="selectRowData"
                    @getData="getDataList"
                    v-has:SERVICE_LTL_AREA_CARRIER_UPDATE
                    >
                    </comtratorDialog>
                      <el-button type="primary" plain :size="btnsize" @click="delete_data" icon="el-icon-delete" v-has:SERVICE_LTL_AREA_CARRIER_DELETE>删除</el-button>
            	</div>
            <div class="info_news">    
               <el-table style="width: 100%" ref="multipleTable" stripe border height="100%" @selection-change="getSelection" @row-click="clickDetails" highlight-current-row :data="tableDataAll" v-has:SERVICE_LTL_AREA_CARRIER_LIST >
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
            <el-table-column  label="区域承包商" prop="areaCarrierName" sortable>
                        <template slot-scope="scoped">
                        <comtratorDialog
                            :btntext='scoped.row.areaCarrierName'
                            btntype="text"
                            :plain="false"
                            editType="view"
                            btntitle="详情"
                            :firstData="scoped.row"
                            >
                            </comtratorDialog>
                        </template>
            </el-table-column>
            <el-table-column  label="出发地" prop="startLocation" sortable>
            </el-table-column>
            <el-table-column  label="到达地" prop="endLocation" sortable>
            </el-table-column> 
            <el-table-column  label="承包价格" prop="carrierPrice" sortable>
            </el-table-column>
            <el-table-column  label="有效开始日期" prop="startTime" sortable>
            </el-table-column>
            <el-table-column  label="有效结束日期" prop="endTime" sortable>
            </el-table-column>
            </el-table> 
                <!-- 页码 -->
       <div class="info_tab_footer" v-has:SERVICE_LTL_AREA_CARRIER_LIST>共计:{{ dataTotal }} <div class="show_pager"> <Pager :total="dataTotal" @change="handlePageChange"  :sizes="sizes" ref="pager"/></div> </div>  
        	</div> 
          </div>
      </div>
</template>
<script>
import comtratorDialog from './comtratorDialog.vue'
import vregion from '@/components/vregion/Region'
import { eventBus } from '@/eventBus'
import Pager from '@/components/Pagination/index'
import {parseTime} from '@/utils/'
import { aflcAreaCarrier_List,data_Del_aflcAreaCarrier,data_get_aflcAreaCarrier_Id} from '@/api/server/lingdan/AreaContractor.js'
import CustomerSearch from '@/components/CustomerSearch/company'
export default {
  data(){
    return{
      loading:true,
      btnsize:'mini',  
      selectRowData:{},
      sizes:[20,50,100],
      information:'操作不正确',
      pagesize:20,//每页显示数
      page:1,//当前页
      totalCount:null,
      dataTotal:null,
      tableDataAll:[],
      formAllData:{
       startLocation:null,
       endLocation:null,
       areaCarrierName:null,
      },
    }
  },
    components:{
        Pager,
        vregion,
        comtratorDialog,
        CustomerSearch
    },
    methods:{
            regionChangeStart(d) {
                this.formAllData.startLocation = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            },
            regionChangeEnd(d) {
                this.formAllData.endLocation = (!d.province&&!d.city&&!d.area&&!d.town) ? '': `${this.getValue(d.province)}${this.getValue(d.city)}${this.getValue(d.area)}${this.getValue(d.town)}`.trim();
            },
            getValue(obj){
                return obj ? obj.value:'';
            },
          // 列表刷新页面  
            firstblood(){
                this.loading = true                       
                aflcAreaCarrier_List(this.page,this.pagesize,this.formAllData).then(res => {
                    this.dataTotal = res.data.totalCount
                    this.tableDataAll = res.data.list;
                    this.tableDataAll.forEach(item=>{
                        item.startTime = parseTime(item.startTime,"{y}-{m}-{d}");
                        item.endTime = parseTime(item.endTime,"{y}-{m}-{d}");
                    })
                    this.loading = false
                })
            },
         //  查询
         getData_query(){
          this.page = 1;
          this.$refs.pager.inputval = this.page;
          this.$refs.pager.pageNum = this.page;             
          this.firstblood();
          },
        // 清空
        clearSearch(){
        this.formAllData =  {
            startLocation:null,
            endLocation:null,
            areaCarrierName:null,
        }
       if(this.page!= 1){
        this.page = 1;
        this.$refs.pager.inputval = this.page;
        this.$refs.pager.pageNum = this.page;
        }
        this.firstblood()    
        },
        // 判断选中与否
        getSelection(val){
        console.log('选中内容',val)
        this.selectRowData = val;
        },
        //点击选中当前行
        clickDetails(row, event, column){
        this.$refs.multipleTable.toggleRowSelection(row);
        },
        //每页显示数据量变更
        handlePageChange(obj) {
                this.page = obj.pageNum
                this.pagesize = obj.pageSize
                this.firstblood();
        },
        delete_data(){
                    if(!this.selectRowData.length){
                        this.$message.warning('请选择您要操作的区域承包商');
                        return
                    }
                    if(this.selectRowData.length == 0){
                        this.$message.warning('请选择您要操作的区域承包商');
                        return
                    }else if (this.selectRowData.length > 1) {
                            this.$message({
                                message: '每次只能操作单条数据~',
                                type: 'warning'
                            })
                        this.$refs.multipleTable.clearSelection();
                    }
                    else {
                this.delDataInformation()
            }
        },

       //确认删除
            delDataInformation(){         
                   this.$confirm('确定要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    data_Del_aflcAreaCarrier(this.selectRowData[0].id).then(res=>{
                        this.$message.success('删除成功');
                        this.firstblood();       
                        this.$refs.multipleTable.clearSelection();
                    }).catch(err => {
                        this.$message({
                            type: 'info',
                            message: '操作失败，原因：' + err.text ? err.text : err
                        })
                        this.$refs.multipleTable.clearSelection();
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    })
                    this.$refs.multipleTable.clearSelection();
                })
            },

        getDataList(){
            this.firstblood()
            this.$refs.multipleTable.clearSelection();
        }
   },
  mounted(){
     eventBus.$on('pushListtwo', () => {
       this.firstblood()
    })
    this.firstblood();
    },
}
</script>
<style lang="scss" >
.AreaContractor{
}
</style>
<template>
  <div class="carrier-manager identicalStyle"  v-loading="loading">
    <SearchForm :orgid="otherinfo.orgid" :issender="true" @change="getSearchParam" :btnsize="btnsize" />  
    <div class="classify_info">
      <!-- <div class="btns_box">
         <el-button type="primary" size="mini"  @click="createNew">发布车源</el-button>
      </div> -->
      <div class="info_news">
        <el-table
          ref="multipleTable"
          :data="usersArr"
          stripe
          border
          @row-click="clickDetails"
          @selection-change="getSelection"
          height="100%"
          tooltip-effect="dark"
          style="width: 100%">
          <el-table-column
            label="序号"
            width="80">
            <template slot-scope="scope">
              {{ (searchQuery.currentPage - 1)*searchQuery.pageSize + scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column
            prop="strartAddress"
            sortable
            label="出发地 -> 到达地">
            <template slot-scope="scope">
              <span class="vipline" v-if="scope.row.isCommonRoute === '1'"></span>
              {{ scope.row.strartAddress + '->' + scope.row.endAddress }}
            </template>
          </el-table-column>
          <el-table-column
            sortable
            prop="carNum"
            width="200"
            label="车牌号">
          </el-table-column>
          <el-table-column
            sortable
            prop="carTypeName"
            width="150"
            label="车型">
          </el-table-column>
          
          <el-table-column
            sortable
            prop="carSourceTypeName"
            width="120"
            label="150">
          </el-table-column>
          <!-- <el-table-column
            label="常跑线路"
            >
            <template slot-scope="scope">
                <el-button size="mini" type="info" v-if="scope.row.isCommonRoute === '1'" @click="setRemote(scope.row.id, '0')">取消常跑</el-button>
                <el-button size="mini" type="primary" v-if="scope.row.isCommonRoute === '0'" @click="setRemote(scope.row.id, '1')">设置常跑</el-button>
            </template>
          </el-table-column> -->
          <el-table-column
            sortable
            prop="createrName"
            width="180"
            label="创建人"
            >
          </el-table-column>
          <el-table-column
            sortable
            prop="createTime"
            width="200"
            label="创建时间">
            <template slot-scope="scope">
                  {{ scope.row.createTime | parseTime }}
            </template>
          </el-table-column>
          <!-- <el-table-column
            width="230"
            label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="changeItem(scope.row.id)">修改</el-button>
                <el-button size="mini" type="danger" @click="deleteItem(scope.row.id)">删除</el-button>
                <el-button size="mini" type="primary" v-if="scope.row.isEnable === '0'" @click="enableItem(scope.row.id,'1')">启用</el-button>
                <el-button size="mini" type="info" v-if="scope.row.isEnable === '1'" @click="enableItem(scope.row.id,'0')">禁用</el-button>
                  {{ scope.row.contractEndtime | parseTime('{y}{m}{d}') }}
            </template>
          </el-table-column> -->
        </el-table>
      </div>
      <div class="info_tab_footer">共计:{{ total }} <div class="show_pager"> <Pager :sizes="sizes" :total="total" @change="handlePageChange" /></div> </div>    
    </div>
  </div>
</template>
<script>
// import { getAllCarrier, deleteSomeCarrierInfo, getExportExcel } from '@/api/company/carrierManage'

import * as carApi from '@/api/order/xuqiuku/carsource'
import SearchForm from './components/search'
import Pager from '@/components/Pagination/index'

export default {
  components: {
    SearchForm,
    Pager
  },
  computed: {
    orgid() {
      console.log(this.selectInfo.orgid, this.searchQuery.vo.orgid, this.otherinfo.orgid)
      return this.isModify ? this.selectInfo.orgid : this.searchQuery.vo.orgid || this.otherinfo.orgid
    }
  },
  mounted() {
    this.searchQuery.vo.orgid = this.otherinfo.orgid
    this.fetchAllCustomer(this.otherinfo.orgid).then(res => {
      this.loading = false
    })
  },
  data() {
    return {
      btnsize: 'mini',
      usersArr: [],
      total: 0,
      // 加载状态
      loading: true,
      setupTableVisible: false,
      AddCustomerVisible: false,
      isModify: false,
      selectInfo: {},
      // 选中的行
      selected: [],
      sizes: [20, 50, 100, 400],
      searchQuery: {
        'currentPage': 1,
        'pageSize': 20,
        'vo': {
          endAddress: '',
          strartAddress: ''
        }
      }
    }
  },
  methods: {
    createNew() {
      this.$router.push('/carinfo/create')
    },
    fetchAllCustomer() {
      this.loading = true
      return carApi.getCarList(this.searchQuery).then(data => {
        console.log('list:', data, data.list)
        this.usersArr = data.list
        this.total = data.totalCount
        this.loading = false
      })
    },
    fetchData() {
      this.fetchAllCustomer()
    },
    handlePageChange(obj) {
      this.searchQuery.currentPage = obj.pageNum
      this.searchQuery.pageSize = obj.pageSize
    },
    getSearchParam(obj) {
      this.searchQuery.vo = obj
      this.fetchAllCustomer()
    },
    showImport() {
      // 显示导入窗口
    },
    setRemote(id, type) {
      return carApi.putSetRouteType(id, type).then(() => {
        this.fetchData()
      }).catch(err => {
        this.$message.error('操作出错了： ' + JSON.stringify(err))
      })
    },
    enableItem(id, type) {
      return carApi.putEnableType(id, type).then(() => {
        this.fetchData()
      }).catch(err => {
        this.$message.error('操作出错了： ' + JSON.stringify(err))
      })
    },
    doAction(type) {
      if (type === 'import') {
        this.showImport()
        return false
      }
      // 判断是否有选中项
      if (!this.selected.length && type !== 'add') {
        this.closeAddCustomer()
        this.$message({
          message: '请选择要操作的项~',
          type: 'warning'
        })
        return false
      }

      console.log('this.selected:', this.selected)

      switch (type) {
          // 添加客户
        case 'add':
          this.isModify = false
          this.selectInfo = {}
          this.openAddCustomer()
          break
          // 修改客户信息
        case 'modify':
          this.isModify = true
          if (this.selected.length > 1) {
            this.$message({
              message: '每次只能修改单条数据~',
              type: 'warning'
            })
          }
          this.selectInfo = this.selected[0]
          this.openAddCustomer()
          break
          // 删除客户
        case 'delete':
          var deleteItem = this.selected.length > 1 ? this.selected.length + '名' : this.selected[0].carrierName
                  // =>todo 删除多个
          var ids = this.selected.map(item => {
            return item.carrierId
          })
          ids = ids.join(',')

          this.$confirm('确定要删除 ' + deleteItem + ' 客户吗？', '提示', {
            confirmButtonText: '删除',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // deleteSomeCarrierInfo(ids).then(res => {
            //   this.$message({
            //     type: 'success',
            //     message: '删除成功!'
            //   })
            //   this.fetchData()
            // }).catch(err => {
            //   this.$message({
            //     type: 'info',
            //     message: '删除失败，原因：' + err.errorInfo ? err.errorInfo : err
            //   })
            // })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
          break
          // 导出数据
        case 'export':
          var ids2 = this.selected.map(el => {
            return el.carrierId
          })
          getExportExcel(ids2.join(',')).then(res => {
            this.$message({
              type: 'success',
              message: '即将自动下载!'
            })
          })
          break
      }
      // 清除选中状态，避免影响下个操作
      this.$refs.multipleTable.clearSelection()
    },
    deleteItem(id) {
      this.$confirm('确定要删除吗？', '提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        carApi.deleteCarInfo(id).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetchData()
        }).catch(err => {
          this.$message({
            type: 'info',
            message: '删除失败，原因：' + err.errorInfo ? err.errorInfo : JSON.stringify(err)
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    changeItem(id) {
      this.$router.push('/carinfo/create?id=' + id)
    },
    setTable() {
      this.setupTableVisible = true
    },
    closeSetupTable() {
      this.setupTableVisible = false
    },
    openAddCustomer() {
      this.AddCustomerVisible = true
    },
    closeAddCustomer() {
      this.AddCustomerVisible = false
    },
    clickDetails(row, event, column) {
      this.$refs.multipleTable.toggleRowSelection(row)
    },
    getSelection(selection) {
      this.selected = selection
    },
    onSubmit() {

    }
  }
}
</script>
<style lang="scss" scoped>
  .carrier-manager{
   
  }
</style>
<style lang="scss">
.carrier-manager{
    position: relative;
}
</style>

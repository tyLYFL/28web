<template>
  <div class="TwoColumns clearfix" v-loading="loading">
    <div class="columnsContainer">
      <div class="side_right">
        <el-form :inline="true" ref="ruleForm" class="divide" size="mini">
          <el-form-item label="专线承运商">
            <el-input v-model="formData.carrierName" clearable placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="区代">
            <el-input v-model="formData.agencyName" clearable placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="区代物流公司">
            <el-input v-model="formData.agencyCompanyName" clearable placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="到货地">
            <el-input v-model="formData.endAddress" clearable placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="区代运单号">
            <el-input v-model="formData.waybillNo" clearable placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="中转订单号">
            <el-input v-model="formData.outsourceId" clearable placeholder=""></el-input>
          </el-form-item>
          <el-form-item class="fr">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-search"
              plain
              @click="searchClick()"
            >查询</el-button>
            <el-button
              type="info"
              size="mini"
              icon="fontFamily aflc-icon-qingkong"
              plain
              @click="clearClick()"
            >清空</el-button>
          </el-form-item>
        </el-form>

        <div class="side_right_bottom clearfix">
          <div class="info_news">
            <el-table
              ref="multipleTable"
              :data="tableData"
              stripe
              border
              height="100%"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column label="序号" width="60">
                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
              </el-table-column>
              <el-table-column min-width="250" prop="outsourceId" sortable label="中转订单号">
                <template slot-scope="scope">
                    <!-- <el-button type="text" @click="openDetail()">{{scope.row.outsourceId}}</el-button> -->
                    <h4 class="needMoreInfo" @click="openDetail(scope.row)">{{ scope.row.outsourceId}}</h4>
                </template>
              </el-table-column>
              <el-table-column prop="waybillNo" sortable min-width="250" label="区代运单号"></el-table-column>
              <el-table-column prop="carrierName" sortable min-width="200" label="专线承运商"></el-table-column>
              <el-table-column prop="carrierServiceMobile" sortable min-width="200" label="专线承运商客服电话"></el-table-column>
              <el-table-column prop="endAddress" sortable min-width="150" label="收货地"></el-table-column>
              <el-table-column prop="agencyName" min-width="150" sortable label="区代"></el-table-column>
              <el-table-column min-width="200" prop="agencyCompanyName" sortable label="区代物流公司"></el-table-column>
              <el-table-column min-width="150" prop="agencyMobile" sortable label="区代客服电话"></el-table-column>
              <el-table-column min-width="150" prop="goodsTypeName" sortable label="货物名称"></el-table-column>
              <el-table-column min-width="150" prop="goodsVolume" sortable label="体积（立方）"></el-table-column>
              <el-table-column min-width="150" prop="goodsWeight" sortable label="重量（公斤）"></el-table-column>
              <el-table-column min-width="150" prop="goodsNum" sortable label="件数"></el-table-column>
              <el-table-column min-width="150" prop="expense" sortable label="预估中转费（元）"></el-table-column>
              <el-table-column min-width="150" prop="payTimeType" sortable label="付款方式"></el-table-column>
              <el-table-column min-width="160" prop="outsourceTime" sortable label="区代中转时间"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <!-- 页码 -->
    <div class="info_tab_footer">
      共计:{{ dataTotal }}
      <div class="show_pager">
        <Pager :total="dataTotal" @change="handlePageChange" ref="pager"/>
      </div>
    </div>
    <!-- <my-dialog ref="myDialog"></my-dialog> -->
  </div>
</template>

<script type="text/javascript">
    import Pager from '@/components/Pagination/index'
    import {
      getTimeOut
    } from '@/api/order/transferOrderManagement/transferOrderManagement'
    // import myDialog from './components/dialog'
    export default {
      data() {
        return {
          loading: false,
          tableData1: [],
          btntitle: '',
          selectedList: [], // 选择
          dataTotal: 0,
          tableData: [],
          formData: {
            pageNum: 1,
            pageSize: 20,
            carrierName: '',
            agencyName: '',
            agencyCompanyName: '',
            endAddress: '',
            waybillNo: '',
            outsourceId: ''
          }
        }
      },
      props: {
        tabData: {
          type: String
        }
      },
      computed: {
      },
      components: { Pager, //myDialog 
      },
      watch: {},
      created() {
        this.getList()
      },
      mounted() {},

      methods: {
        searchClick() {
          this.resetPage()
          this.getList()
        },
        clearClick() {
          this.formData = this.$options.data().formData
          this.resetPage()
          this.getList()
        },
        getList() {
          this.loading = true
          getTimeOut(this.formData)
                    .then(res => {
                      if (res.status === 200) {
                        this.tableData = res.data.list
                        this.dataTotal = res.data.total
                        this.loading = false
                      } else {
                        this.$message.warning(res.errorInfo || res.text)
                      }
                    })
                    .catch(err => {
                      this.$message({
                        type: 'info',
                        message:
                                '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                      })
                      this.loading = false
                    })
        },
        handlePageChange(obj) {
          this.formData.pageNum = obj.pageNum
          this.formData.pageSize = obj.pageSize
          this.getList()
        },
        handleSelectionChange(val) {
          this.selectedList = val.map(item => {
            return item.id
          })
        },
        closeClick() {
        },
        resetPage() {
          this.formData.pageNum = 1
          this.$refs.pager.inputval = 1
          this.$refs.pager.pageNum = 1
        },
        openDetail(row) {
        //   this.$refs['myDialog'].dialogFormVisible = true
            this.$router.push({name: '发物流订单详情',query:{ orderSerial:row.orderSerial}});
        }
      }
    }
</script>

<style type="text/css" lang="scss" scoped>
  .divide {
    border-bottom: 1px dashed #999;
    margin-bottom: 10px;
  }
  .margin_10 {
    margin: 10px;
  }
  .margin_l_10 {
    margin-left: 10px;
  }
   .info_news .cell .needMoreInfo {
    cursor: pointer;
    color: #3e9ff1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

</style>

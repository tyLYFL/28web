<template>
  <div class="identicalStyle" v-loading="loading">
    <el-form :inline="true" class="demo-ruleForm classify_searchinfo">
      <el-form-item label="注册所在地">
        <el-input v-model.trim="formInline.regisAddress"></el-input>
      </el-form-item>
      <el-form-item label="认证所在地">
        <el-input v-model.trim="formInline.belongCityName"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input placeholder="请输入内容" v-model.trim="formInline.carNumber" clearable></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input
          placeholder="请输入内容"
          v-model.trim="formInline.driverMobile"
          clearable
          maxlength="11"
        ></el-input>
      </el-form-item>
      <el-form-item label="车主姓名">
        <el-input placeholder="请输入内容" v-model.trim="formInline.driverName" clearable></el-input>
      </el-form-item>
      <el-form-item label="认证通过日期">
        <el-date-picker
          is-range
          unlink-panels
          :picker-options="pickerOptions2"
          type="daterange"
          align="right"
          v-model="createTime"
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
          value-format="yyyy-MM-dd HH:mm:ss"
          :default-time="['00:00:00', '23:59:59']"
          @change="cTime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="所属业务员">
        <el-input v-model.trim="formInline.belongSalesmanName" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item class="fr">
        <el-button
          type="primary"
          plain
          @click="getdata_search"
          :size="btnsize"
          icon="el-icon-search"
        >搜索</el-button>
        <el-button
          type="info"
          plain
          @click="clearSearch"
          :size="btnsize"
          icon="fontFamily aflc-icon-qingkong"
        >清空</el-button>
      </el-form-item>
    </el-form>
    <div class="classify_info">
      <div class="btns_box">
        <driver-newTemplate
          btntext="修改"
          :plain="true"
          type="primary"
          btntype="primary"
          icon="el-icon-edit-outline"
          editType="edit"
          :params="selectionData"
          btntitle="修改"
          @getData="getDataList"
          v-has:DRIVER_MANAGE_UPDATE
          :isclick="isclick"
        ></driver-newTemplate>
      </div>
      <div class="info_news">
        <el-table
          ref="multipleTable"
          :data="tableDataTree"
          stripe
          border
          highlight-current-row
          height="100%"
          @selection-change="getSelection"
          @row-click="clickDetails"
          current-row-key
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column label="选择" type="selection" width="50"></el-table-column>
          <el-table-column label="序号" sortable width="60">
            <template slot-scope="scope">{{ (page - 1)*pagesize + scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column prop="driverMobile" sortable label="手机号">
            <template slot-scope="scope">
              <driver-newTemplate
                btntype="text"
                :btntext="scope.row.driverMobile"
                editType="view"
                :paramsView="scope.row"
                btntitle="详情"
              ></driver-newTemplate>
            </template>
          </el-table-column>
          <el-table-column prop="carNumber" sortable label="车牌号"></el-table-column>
          <el-table-column prop="driverName" sortable label="车主" width="200"></el-table-column>
          <el-table-column prop="registerOriginName" sortable label="注册来源"></el-table-column>
          <el-table-column
            width="150"
            prop="regisAddress"
            show-overflow-tooltip
            sortable
            label="注册所在地"
          ></el-table-column>
          <el-table-column
            width="160"
            prop="belongCityName"
            show-overflow-tooltip
            sortable
            label="认证所在地"
          ></el-table-column>
          <el-table-column
            prop="belongCustomerService"
            label="所属客服"
            sortable
            width="120"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="belongSalesmanName"
            label="所属业务员"
            sortable
            width="120"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="authenticationTime"
            label="提交认证时间"
            sortable
            width="180"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="authPassTime" sortable label="认证通过日期">
            <template slot-scope="scope">
              <span v-if="scope.row.authPassTime">{{ scope.row.authPassTime | parseTime}}</span>
            </template>
          </el-table-column>
        </el-table>

        <div class="info_tab_footer">
          共计:{{ totalCount }}
          <div class="show_pager">
            <Pager :total="totalCount" @change="handlePageChange" ref="pager" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import {
  data_get_driver_list,
  data_get_driver_status
} from "../../../api/users/carowner/total_carowner.js";
import { eventBus } from "@/eventBus";
import { parseTime, formatTime, pickerOptions2 } from "@/utils/index.js";
import vregion from "@/components/vregion/Region";
import Pager from "@/components/Pagination/index";
import DriverNewTemplate from "../carowner/driver-newTemplate1";
import GetCityList from "@/components/GetCityList/city";
export default {
  props: {
    isvisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vregion,
    Pager,
    DriverNewTemplate,
    GetCityList
  },
  data() {
    return {
      pickerOptions2: {
        shortcuts: pickerOptions2
      },
      loading: true,
      btnsize: "mini",
      page: 1, //当前页
      pagesize: 20, //每页显示数
      totalCount: null, //总记录数
      formInline: {
        //查询条件
        driverMobile: null,
        driverStatus: "AF0010403",
        carNumber: null,
        belongCity: null,
        belongCityName: null,
        regisAddress: null,
        driverName: null,
        authPassTime: null,
        authPassTimeStart: null,
        authPassTimeEnd: null
      },
      tableDataTree: [], //定义列表记录
      optionsService: [
        //状态
        {
          code: null,
          name: "全部"
        }
      ],
      selectionData: null,
      multipleSelection: [],
      createTime: [],
      isclick: false //是否自动点击修改按钮
    };
  },
  watch: {
    isvisible: {
      handler(newVal, oldVal) {
        if (newVal) {
          if (!this.$route.query.mobile) {
            this.firstblood();
          }
        }
      },
      immediate: true
    },
    $route(to, from) {
      // 从客户上报进来进行操作
      if (from.path === "/service/customerReported/index") {
        const self = this;
          if (self.$route.query.mobile) {
            self.formInline.driverMobile = self.$route.query.mobile;
            self.firstblood(true);
          }
      }
    }
  },
   mounted() {
      // 从客户上报进来进行操作
      const self = this;
      if (self.$route.query.mobile) {
      self.formInline.driverMobile = self.$route.query.mobile;
      self.firstblood(true);
      }
  },
  methods: {
    // 从客户上报进来弹出对应框
    toggleOne(data) {
      if (!!data) {
        this.$refs.multipleTable.toggleRowSelection(data);
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handlePageChange(obj) {
      this.page = obj.pageNum;
      this.pagesize = obj.pageSize;
      this.firstblood();
    },
    cTime(i) {
      if (i !== null) {
        this.formInline.authPassTimeStart = i[0];
        this.formInline.authPassTimeEnd = i[1];
      } else {
        this.formInline.authPassTimeStart = null;
        this.formInline.authPassTimeEnd = null;
      }
    },

    clearSearch() {
      (this.formInline = {
        //查询条件
        driverMobile: null,
        driverStatus: "AF0010403",
        carNumber: null,
        belongCity: null,
        belongCityName: null,
        regisAddress: null,
        driverCardid: null,
        driverName: null,
        authPassTimeStart: null,
        authPassTimeEnd: null
      }),
        (this.createTime = []);
      if (this.page != 1) {
        this.page = 1;
        this.$refs.pager.inputval = this.page;
        this.$refs.pager.pageNum = this.page;
      }
      // this.$refs.area.clearData();
      this.firstblood();
    },
    //点击选中当前行
    clickDetails(row, event, column) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },
    // 判断选中与否
    getSelection(val) {
      console.log("选中内容", val);
      this.selectionData = val;
    },
    //刷新页面
    firstblood(boole) {
      const self = this;
      self.loading = true;
      data_get_driver_list(self.page, self.pagesize, self.formInline).then(
        res => {
          self.totalCount = res.data.totalCount;
          self.tableDataTree = res.data.list;
          self.loading = false;
          if (boole) {
            if (self.tableDataTree && self.tableDataTree.length == 1) {
              self.toggleOne(self.tableDataTree[0]);
              self.isclick = true;
              sessionStorage.setItem("once", true);
            }
          } else {
            sessionStorage.setItem("once", false);
          }
        }
      );
    },
    //点击查询按纽，按条件查询列表
    getdata_search(event) {
      this.page = 1;
      this.$refs.pager.inputval = this.page;
      this.$refs.pager.pageNum = this.page;
      this.firstblood();
    },
    //获取车主状态列表
    getMoreInformation() {
      data_get_driver_status().then(res => {
        res.data.map(item => {
          this.optionsService.push(item);
        });
      });
    },
    //每页显示数据量变更
    handleSizeChange: function(val) {
      this.pagesize = val;
      this.firstblood();
    },

    //页码变更
    handleCurrentChange: function(val) {
      this.page = val;
      this.firstblood();
    },
    getDataList() {
      this.firstblood();
      this.$refs.multipleTable.clearSelection();
    }
  }
};
</script>
<style lang="scss">
</style>

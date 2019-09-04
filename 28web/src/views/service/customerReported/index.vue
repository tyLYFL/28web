<template>
  <div class="tabsWrap">
    <el-tabs type="card" @tab-click="handleClick" v-model="customertype">
      <!-- 全部 -->
      <el-tab-pane label="全部" name="all">
        <customer-reported :customertype="customertype" v-if="customertype == 'all'"></customer-reported>
      </el-tab-pane>

      <!-- 未认证 -->
      <el-tab-pane label="车主" name="driver">
        <customer-reported :customertype="customertype" v-if="customertype == 'driver'"></customer-reported>
      </el-tab-pane>

      <!-- 待认证 -->
      <el-tab-pane label="货主" name="shipper">
        <customer-reported :customertype="customertype" v-if="customertype == 'shipper'"></customer-reported>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/javascript">
import customerReported from "./customerReported";
export default {
  components: {
    customerReported
  },
  data() {
    return {
        customertype: 'all'
    };
  },
  mounted() {},
  methods: {
    handleClick(tab) {
      this.customertype = tab.name
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>

</style>

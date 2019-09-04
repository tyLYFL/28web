<template>
  <div class="tabsWrap">
    <el-tabs type="card" @tab-click="handleClick" v-model="assessType">
      <!-- 全部 -->
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="item in assessTypeList"
        :key="item.name"
      >
        <employee-evaluation-form :assessType="assessType" v-if="assessType == item.name"></employee-evaluation-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/javascript">
import employeeEvaluationForm from "./employeeEvaluationForm";
export default {
  name: "businessEvaluationForm",
  components: {
    employeeEvaluationForm
  },
  data() {
    return {
      assessTypeList: [
        {
          name: "personage",
          label: "个人考核表"
        },
        {
          name: "team",
          label: "团队考核表"
        }
      ],
      assessType: "personage"
    };
  },
  mounted() {},
  methods: {
    handleClick(tab) {
      this.assessType = tab.name;
    }
  }
};
</script>


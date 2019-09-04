<template>
    <div class="otherService tabsWrap">
       <el-tabs v-model="otherServiceName" type="card" @tab-click="handleClick" >
            <!-- 增值服务标准定价
                <el-tab-pane label="增值服务标准定价" name="otherServiceStandPrice">
                    <otherServiceStandPrice :key = 'dataKeys' :isvisible="otherServiceName === 'otherServiceStandPrice'"/>
                </el-tab-pane> -->

            <!-- 增值服务区域定价 -->
                <el-tab-pane label="增值服务区域定价" name="otherServiceAreaPrice">
                    <otherServiceAreaPrice :key = 'dataKeys' :isvisible="otherServiceName === 'otherServiceAreaPrice'"/>
                </el-tab-pane>

            <!-- 增值服务区域定价历史记录 -->
                <el-tab-pane label="增值服务区域定价历史记录" name="otherServiceHistoryAreaPrice">
                    <otherServiceHistoryAreaPrice :key = 'dataKeys' :isvisible="otherServiceName === 'otherServiceHistoryAreaPrice'"/> 
                </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// import otherServiceStandPrice from './otherServiceStandPrice/index'
import otherServiceAreaPrice from './otherServiceAreaPrice/index'
import otherServiceHistoryAreaPrice from './otherServiceAreaPrice/otherServiceHistoryAreaPrice'
export default {
    name: 'otherService',
    components: {
        // otherServiceStandPrice,
        otherServiceAreaPrice,
        otherServiceHistoryAreaPrice
    },
    data() {
        return {
            otherServiceName: 'otherServiceAreaPrice',
            dataKeys:''
        }
    },
    computed: {

    },
    created() {
        this.otherServiceName = sessionStorage.getItem('otherServiceName') || 'otherServiceAreaPrice';
    },
    beforeUpdate () {
        sessionStorage.setItem('otherServiceName', this.otherServiceName);
    },
    beforeDestroy () {
        sessionStorage.setItem('otherServiceName', this.otherServiceName);
    },
    mounted() {
        // if (this.$route.query.currentTab) {
        // this.otherServiceName = this.$route.query.currentTab
        // }
    },
    methods: {
        init() {
        },
        handleClick(tab, event) {
            this.dataKeys = Math.random();
            this.otherServiceName = tab.name
        }
    }

}
</script>

<style rel="stylesheet/scss" lang="scss">
    .otherService{
    }
</style>


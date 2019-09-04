<template>
    <div class="monthTrial tabsWrap">
       <el-tabs v-model="monthTrialName" type="card" @tab-click="handleClick" >
        <!-- 全部 -->
            <el-tab-pane label="全部" name="monthTrialAll">
                <allComponent :key = 'dataKeys' :isvisible="monthTrialName === 'monthTrialAll'"/>
            </el-tab-pane>
        <!-- 月审待审核 -->
            <el-tab-pane label="月审待审核" name="monthTrialPending">
                <pendingComponent :key = 'dataKeys' :isvisible="monthTrialName === 'monthTrialPending'"/>
            </el-tab-pane>
         <!-- 月审待复审 -->
            <el-tab-pane label="月审待复审" name="monthTrialTorRview">
                <toReviewComponent :key = 'dataKeys' :isvisible="monthTrialName === 'monthTrialTorRview'"/>
            </el-tab-pane>
        <!-- 已复审 -->
            <el-tab-pane label="已复审" name="monthTrialReviewed">
                <reviewedComponent :key = 'dataKeys' :isvisible="monthTrialName === 'monthTrialReviewed'"/>
            </el-tab-pane>
        <!-- 复审驳回 -->
            <el-tab-pane label="复审驳回" name="monthTrialReject">
                <rejectComponent :key = 'dataKeys' :isvisible="monthTrialName === 'monthTrialReject'"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import allComponent from './all'
import pendingComponent from './pending'
import toReviewComponent from './toReview'
import reviewedComponent from './reviewed'
import rejectComponent from './reject'
export default {
    name: 'monthTrial',
    components: {
        allComponent,
        pendingComponent,
        toReviewComponent,
        reviewedComponent,
        rejectComponent
    },
    data() {
        return {
            monthTrialName: 'monthTrialAll',
            dataKeys:''
        }
    },
    
    computed: {

    },
    created() {
        this.monthTrialName = sessionStorage.getItem('monthTrialName') || 'monthTrialAll';
    },
    beforeUpdate () {
        sessionStorage.setItem('monthTrialName', this.monthTrialName);
    },
    beforeDestroy () {
        sessionStorage.setItem('monthTrialName', this.monthTrialName);
    },
    mounted() {
        // if (this.$route.query.currentTab) {
        // this.monthTrialName = this.$route.query.currentTab
        // }
    },
    methods: {
        init() {
        },
        handleClick(tab, event) {
            this.dataKeys = Math.random();
            this.monthTrialName = tab.name
        }
    }

}
</script>

<style rel="stylesheet/scss" lang="scss">
    .monthTrial{
    }
</style>


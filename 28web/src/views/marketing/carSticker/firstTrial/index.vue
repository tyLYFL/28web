<template>
    <div class="firstTrial tabsWrap">
       <el-tabs v-model="firstTrialName" type="card" @tab-click="handleClick" >
        <!-- 初审待审核 -->
            <el-tab-pane label="初审待审核" name="pending">
                <pendingComponent :key = 'dataKeys' :isvisible="firstTrialName === 'pending'"/>
            </el-tab-pane>

        <!-- 初审已审核 -->
            <el-tab-pane label="初审已审核" name="getPast">
                <getPastComponent :key = 'dataKeys' :isvisible="firstTrialName === 'getPast'"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import pendingComponent from './pending'
import getPastComponent from './getPast'
export default {
    name: 'firstTrial',
    components: {
        pendingComponent,
        getPastComponent,
    },
    data() {
        return {
            firstTrialName: 'pending',
            dataKeys:''
        }
    },
    computed: {

    },
    created() {
        this.firstTrialName = sessionStorage.getItem('firstTrialName') || 'pending';
    },
    beforeUpdate () {
        sessionStorage.setItem('firstTrialName', this.firstTrialName);
    },
    beforeDestroy () {
        sessionStorage.setItem('firstTrialName', this.firstTrialName);
    },
    mounted() {
        // if (this.$route.query.currentTab) {
        // this.firstTrialName = this.$route.query.currentTab
        // }
    },
    methods: {
        init() {
        },
        handleClick(tab, event) {
            this.dataKeys = Math.random();
            this.firstTrialName = tab.name
        }
    }

}
</script>

<style rel="stylesheet/scss" lang="scss">
    .firstTrial{
    }
</style>


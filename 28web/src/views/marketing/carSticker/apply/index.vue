<template>
    <div class="applyCarSticker tabsWrap">
       <el-tabs v-model="applyCarStickerName" type="card" @tab-click="handleClick" >
        <!-- 待处理 -->
            <el-tab-pane label="待处理" name="pending">
                <pendingComponent :key = 'dataKeys' :isvisible="applyCarStickerName === 'pending'"/>
            </el-tab-pane>

        <!-- 已通过 -->
            <el-tab-pane label="已通过" name="getPast">
                <getPastComponent :key = 'dataKeys' :isvisible="applyCarStickerName === 'getPast'"/>
            </el-tab-pane>

        <!-- 不通过 -->
            <el-tab-pane label="不通过" name="noPass">
                <noPassComponent :key = 'dataKeys' :isvisible="applyCarStickerName === 'noPass'"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import pendingComponent from './pending'
import getPastComponent from './getPast'
import noPassComponent from './noPass'
// import applyCarStickerHistoryAreaPrice from './applyCarStickerHistoryAreaPrice'
export default {
    name: 'applyCarSticker',
    components: {
        pendingComponent,
        getPastComponent,
        noPassComponent,
        // applyCarStickerHistoryAreaPrice
    },
    data() {
        return {
            applyCarStickerName: 'pending',
            dataKeys:''
        }
    },
    computed: {

    },
    created() {
        this.applyCarStickerName = sessionStorage.getItem('applyCarStickerName') || 'pending';
    },
    beforeUpdate () {
        sessionStorage.setItem('applyCarStickerName', this.applyCarStickerName);
    },
    beforeDestroy () {
        sessionStorage.setItem('applyCarStickerName', this.applyCarStickerName);
    },
    mounted() {
        // if (this.$route.query.currentTab) {
        // this.applyCarStickerName = this.$route.query.currentTab
        // }
    },
    methods: {
        init() {
        },
        handleClick(tab, event) {
            this.dataKeys = Math.random();
            this.applyCarStickerName = tab.name
        }
    }

}
</script>

<style rel="stylesheet/scss" lang="scss">
    .applyCarSticker{
    }
</style>


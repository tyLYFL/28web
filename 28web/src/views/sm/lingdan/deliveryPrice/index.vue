<template>
    <div class="deliverPrice tabsWrap">
       <el-tabs v-model="deliverPriceName" type="card" @tab-click="handleClick" >
            <!-- 送货费定价 -->
                <el-tab-pane label="送货费定价" name="deliverPriceList">
                    <deliverPriceList :key = 'dataKeys' :isvisible="deliverPriceName === 'deliverPriceList'"/>
                </el-tab-pane> 

            <!-- 送货费定价历史记录 -->
                <el-tab-pane label="送货费定价历史记录" name="deliverPriceHistoryList">
                    <deliverPriceHistoryList :key = 'dataKeys' :isvisible="deliverPriceName === 'deliverPriceHistoryList'"/>
                </el-tab-pane>

        </el-tabs>
    </div>
</template>

<script>
import deliverPriceList from './deliverPriceList'
import deliverPriceHistoryList from './deliverPriceHistoryList'
export default {
    name: 'deliverPrice',
    components: {
        deliverPriceList,  
        deliverPriceHistoryList
    },
    data() {
        return {
            deliverPriceName: 'deliverPriceList',
            dataKeys:''
        }
    },
    created() {
        this.deliverPriceName = sessionStorage.getItem('deliverPriceName') ? sessionStorage.getItem('deliverPriceName') :'deliverPriceList';
    },
    beforeUpdate () {
        sessionStorage.setItem('deliverPriceName', this.deliverPriceName);
    },
    beforeDestroy () {
        sessionStorage.setItem('deliverPriceName', this.deliverPriceName);
    },
    mounted() {
    },
    methods: {
        init() {
        },
        handleClick(tab, event) {
            this.dataKeys = Math.random();
            this.deliverPriceName = tab.name;
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
    .deliverPrice{
    }
</style>


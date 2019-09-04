<template>
  <div class="same_shipper tabsWrap tranSationDemo">
        <el-tabs type="card" @tab-click="handleClick" v-model="TypeName">
            <el-tab-pane label="车主" name="carList">
             <carList :isvisible="TypeName === 'carList'"/>
            </el-tab-pane>
            <el-tab-pane label="区代" name="Price">
             <CarrierPriceList :isvisible="TypeName === 'Price'" statusType='AF00112' />
            </el-tab-pane>
            <el-tab-pane label="专线承运商" name="Carrier">
             <CarrierPriceList :isvisible="TypeName === 'Carrier'" statusType='AF00113'  />
            </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import carList from './carList'
import CarrierPriceList from './CarrierPriceList'
export default {
    data(){
        return{
            TypeName: 'carList',
        }
    },
    components:{    
        carList,
        CarrierPriceList,
    },
    methods: {
     handleClick(tab, event) {
     this.TypeName = tab.name;
     }
     },
}
</script>

<style lang="scss" >

</style>


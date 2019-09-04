<template>
  <div class="same_shipper tabsWrap">
    <el-tabs v-model="TypeName" type="card"  @tab-click='handleClick'>
        <!-- 领券配置 -->
            <el-tab-pane label="领券配置" name="collocation">
                <collocation :isvisible="TypeName === 'collocation'"></collocation>
            </el-tab-pane>

        <!-- 领取记录 -->
            <el-tab-pane label="领取记录"  name="record">
                <record :isvisible="TypeName === 'record'"></record> 
            </el-tab-pane>            
    </el-tabs>
  </div>
</template>


<script>
import collocation from './collocation.vue'
import record from './record.vue'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            TypeName: 'collocation'
        }
    },
    components:{    
        collocation,
        record,
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


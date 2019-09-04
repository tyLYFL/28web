<template>
  <div class="same_shipper tabsWrap">
        <el-tabs type="card" @tab-click="handleClick" v-model="TypeName">
            <el-tab-pane  
            v-for="item in visibleTabs"
            :key="item.name"
            :label="item.label"
            :name="item.name">
            <priceLIst :isvisible="TypeName == item.name" :cashtype="item.type" />
            </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import priceLIst from './priceLIst.vue'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            TypeName: 'one',
            visibleTabs:[
                {label:"全部",name:"one",type:null},
                {label:"待审核",name:"two",type:'AF09301'},
                {label:"待付款",name:"three",type:'AF09601'},
                {label:"待核销",name:"four",type:'AF09201'},
            ]
        }
    },
    components:{    
        priceLIst,
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


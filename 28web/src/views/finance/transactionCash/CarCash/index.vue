<template>
  <div class="same_shipper tabsWrap">
        <el-tabs type="card" @tab-click="handleClick" v-model="TypeName">
            <el-tab-pane  
            v-for="item in visibleTabs"
            :key="item.name"
            :label="item.label"
            :name="item.name">
            <totalList :isvisible="TypeName == item.name" :cashtype="item.type" />
            </el-tab-pane>
        </el-tabs>
  </div>
</template>


<script>
import totalList from './totalList.vue'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            TypeName: 'one',
            visibleTabs:[
                {label:"全部",name:"one",type:null},
                {label:"待转账",name:"two",type:'AF0860302'},
                {label:"转账成功",name:"three",type:'AF0860303'},
                {label:"转账失败",name:"four",type:'AF0860304'},
                {label:"提现驳回",name:"five",type:'AF0860306'},
            ]
        }
    },
    components:{    
        totalList,
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


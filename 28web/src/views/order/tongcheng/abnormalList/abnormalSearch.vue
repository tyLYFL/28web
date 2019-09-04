<template>
     <el-form :inline="true" :model="searchInfo" ref="ruleForm" class="demo-ruleForm classify_searchinfo">
        <el-form-item label="区域" prop="belongCityName">
            <getCityList class="chooseItem" @returnStr="getStr" v-model="searchInfo.belongCityName" ref="area"></getCityList>
        </el-form-item>
        <el-form-item label="订单号" prop="orderSerial">
            <el-input v-model="searchInfo.orderSerial" clearable>
            </el-input>
        </el-form-item>
        <el-form-item label="车主" maxlength="18"  prop="driverName">
            <el-input v-model="searchInfo.driverName" clearable placeholder="账户/姓名/车牌号">
            </el-input>
        </el-form-item>
        <!-- <el-form-item label="处理时间" prop="mobile">
            <el-date-picker
                v-model="chooseTime"
                type="daterange"
                :picker-options="pickerOptions2"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                unlink-panels
                align="right"
                value-format="timestamp">
            </el-date-picker>
        </el-form-item> -->
        <el-form-item class="btnChoose fr"  style="margin-left:0;">
            <el-button type="primary" :size="btnsize" icon="el-icon-search" plain @click="handleSearch('search')">搜索</el-button>
            <el-button type="info" :size="btnsize" icon="fontFamily aflc-icon-qingkong" plain @click="handleSearch('clear')">清空</el-button>
        </el-form-item>
    </el-form>
</template>

<script type="text/javascript">

import getCityList from '@/components/GetCityList/city'
import { pickerOptions2 } from '@/utils/index.js'

    export default{
        name:'abnormal-serviceSerach',
        props:{
            searchType:{
                type:String,
                default:''
            },
        },
        components:{
            getCityList,
        },
        data(){
            return{
                btnsize:'mini',
                searchInfo:{
                    belongCityName:'',
                    orderSerial:'',
                    driverName:'',
                },
                chooseTime:[],
                pickerOptions2:{
                    shortcuts:pickerOptions2
                },
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            //初始化
            init(){
                this.searchInfo.orderSerial = this.$route.params.orderSerial || '';
                this.$emit('change', this.searchInfo)
            },
            getStr(d){
                this.searchInfo.belongCityName = (!d.province&&!d.city&&!d.area) ? '': `${this.getValue(d.province)},${this.getValue(d.city)},${this.getValue(d.area)}`.trim();
            },
            getValue(obj){
                return obj ? obj.value:'';
            },
            //模糊查询 分类名称或者code
            handleSearch(type){
                let searchObj;
                if(type == 'clear'){
                    this.searchInfo = {
                        belongCityName:'',
                        orderSerial:'',
                        driverName:'',
                    }
                }
                searchObj = Object.assign({}, this.searchInfo);
                this.$route.params.orderSerial = '';
                this.$emit('change', searchObj)
            },
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    
</style>
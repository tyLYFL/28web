<template>
    <div class="TwoColumns plusPowerSouce clearfix">
        <div class="columnsContainer">
            <div class="side_left">
                <div class="side_left_top">
                    <el-tree
                        ref="treeForm"
                        show-checkbox
                        :data="cityTree"
                        node-key="code"
                        :default-expanded-keys="[440000]"
                        :default-checked-keys="[440100]"
                        :props="defaultProps"
                        :check-strictly="treestatus"
                        :default-expand-all='treestatus'
                        :highlight-current = "true"
                        @check="nodeClick">
                    </el-tree>
                </div>
            </div>
            <div class="side_right">
                <div class="side_right_bottom clearfix">
                    <div class="info_news">
                        <el-form :rules="ruleForm" :model="tableData" ref="tableData">
                        <el-table
                        :data="tableData.tableDataList"
                        :span-method="objectSpanMethod"
                        border
                        ref="multipleTable" 
                        stripe
                        align = "center"
                        tooltip-effect="dark"
                        style="width: 100%"
                        v-has:DISPATCH_ORDER_WEIGHTED_SETTING_LIST
                        >
                        <el-table-column label="序号" width="60">
                        <template slot-scope="scope">
                            {{scope.$index+1}}
                        </template>
                        </el-table-column>
                        <el-table-column prop="weightItemClassName" label="加权分项分类" ></el-table-column>
                        <el-table-column prop="weightedItemName" label="加权分项" ></el-table-column>
                        <el-table-column prop="weightedCalculationCondition" label="加权计算条件" width="250">
                        <template  slot-scope="scope">
                           <span v-if="scope.$index==8" class="miniInput">
                                <el-form-item :prop="'tableDataList.' + scope.$index + '.weightedCalculationCondition'" :rules="[{ validator: (rule, value, callback) => {
                                    if (!value) {
                                    callback('不能为空');
                                    } else {
                                    callback();
                                    }
                                }}]">
                               认证<el-input v-model.number="scope.row.weightedCalculationCondition"></el-input>天内
                                </el-form-item>
                            </span>
                            <span v-else-if="scope.$index==9" class="miniInput">
                                <el-form-item :prop="'tableDataList.' + scope.$index + '.weightedCalculationCondition'" :rules="[{ validator: (rule, value, callback) => {
                                    var reg=  /^[1-9]\d*$/
                                    if (!value) {
                                    callback('不能为空');
                                    } else if(tableData.tableDataList[8].weightedCalculationCondition>=value){
                                    callback('请输入大于上一行数值');
                                    }
                                    else{
                                    callback()
                                    }
                                }}]">
                               认证<el-input v-model.number="scope.row.weightedCalculationCondition"></el-input>天内
                                </el-form-item>
                            </span>
                            <span v-else-if="scope.$index==10" class="miniInput">
                                <el-form-item :prop="'tableDataList.' + scope.$index + '.weightedCalculationCondition'" :rules="[{ validator: (rule, value, callback) => {
                                    if (!value) {
                                    callback('不能为空');
                                    } else {
                                    callback();
                                    }
                                }}]">
                               近<el-input v-model.number="scope.row.weightedCalculationCondition"></el-input>天无交易
                                </el-form-item>
                            </span>
                            <span v-else-if="scope.$index==11" class="miniInput">
                                <el-form-item :prop="'tableDataList.' + scope.$index + '.weightedCalculationCondition'" :rules="[{ validator: (rule, value, callback) => {
                                    var reg=  /^[1-9]\d*$/
                                    if (!value) {
                                    callback('不能为空');
                                    } else if(tableData.tableDataList[10].weightedCalculationCondition>=value){
                                    callback('请输入大于上一行数值');
                                    }
                                    else{
                                        callback()
                                    }
                                }}]">
                               近<el-input v-model.number="scope.row.weightedCalculationCondition"></el-input>天无交易
                                </el-form-item>
                            </span>
                           <span v-else>/</span>
                        </template>
                        </el-table-column>
                        <el-table-column prop="weightedScore" label="加权分数" width="250">
                        <template  slot-scope="scope">
                             <el-form-item :prop="'tableDataList.' + scope.$index + '.weightedScore'" :rules="[{ validator: (rule, value, callback) => {
                                var reg= /[^-?\d]/g
                                if(!value){
                                    callback('不能为空')
                                    }
                                    else if(reg.test(value)){
                                    callback('请输入整数')
                                    }else {
                                    callback();
                                    }
                                }}]">
                        <el-input v-model.number="scope.row.weightedScore"></el-input>
                             </el-form-item>
                        </template>
                        </el-table-column>
                        </el-table>
                        </el-form>
                    <div class="btn_footer">
                        <el-button type="primary" plain @click="Addsave" icon="el-icon-check">保存</el-button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import { aflcProvinceCode, getDictionary} from '@/api/common.js'
import {parseTime} from '@/utils/'
import { aflcMediumOrderWeightedList, aflcMediumOrderWeightedAdd } from '@/api/dispatch/plusPower.js'
import Pager from '@/components/Pagination/index'
export default{
      data() {
        const weightedScore =  (rule, val, cb) => {
            var reg= /[^-?\d]/g
            if(!val){
            cb(new Error('不能为空'))
            }
            else if(reg.test(val)){
            cb(new Error('请输入整数'))
            }
            else{
                cb()
            }
        } 

        const weightedCalculationCondition = (rule, val, cb) => {
            var reg=  /^[1-9]\d*$/
            var newweightArray = rule.field.split(".")
            if(!reg.test(val)){
            cb(new Error('请输入大于零的正整数'))
            }
            else if(newweightArray[1]%2)
            {
                if(parseInt(this.tableData.tableDataList[newweightArray[1]-1].weightedCalculationCondition)>=parseInt(this.tableData.tableDataList[newweightArray[1]].weightedCalculationCondition)){
                    cb(new Error('请输入大于上一行数值'))
                }
            }
            else{
                cb()
            }

        }
          return {
            cityTree:[],
            treestatus:false,
            defaultProps: {
                    children: 'children',
                    label: 'name'
            },
            btnsize: 'mini',
            formAll:{
                belongCityCode:'440100',
                belongCityName:'广州市',
            },
            tableData: {
                tableDataList:[]
            },
            weightItemClassNameArr:[],
            weightedItemNameArr:[],
            weightItemClassName:0,
            weightedItemName:0,
            pluspowerList:[
                {weightedConditionName:'/',weightedItem:'AF0050301',weightedItemName:'未分类'},
                {weightedConditionName:'/',weightedItem:'AF0050302',weightedItemName:'升级1'},
                {weightedConditionName:'/',weightedItem:'AF0050303',weightedItemName:'升级2'},
                {weightedConditionName:'/',weightedItem:'AF0050304',weightedItemName:'升级3'},
                {weightedConditionName:'/',weightedItem:'AF0050305',weightedItemName:'升级4'},
                {weightedConditionName:'/',weightedItem:'AF0050306',weightedItemName:'升级5'},
                {weightedConditionName:'/',weightedItem:'AF0050307',weightedItemName:'降级1'},
                {weightedConditionName:'/',weightedItem:'AF0050308',weightedItemName:'降级2'},
            ],
            additionalList:[
                {weightedConditionName:'认证X天内',weightedConditionCode:'AF005220101',weightedItem:'AF0052201',weightedItemName:'新司机'},
                {weightedConditionName:'认证Y天内',weightedConditionCode:'AF005220102',weightedItem:'AF0052201',weightedItemName:'新司机'},
                {weightedConditionName:'近X天无交易',weightedConditionCode:'AF005220201',weightedItem:'AF0052202',weightedItemName:'僵尸司机'},
                {weightedConditionName:'近Y天无交易',weightedConditionCode:'AF005220202',weightedItem:'AF0052202',weightedItemName:'僵尸司机'},
                {weightedConditionName:'/',weightedConditionCode:'',weightedItem:'AF0052203',weightedItemName:'收藏司机'},
            ],
            ruleForm:{
                weightedScore: [{ required: true, validator: weightedScore, trigger: 'change' }],
                weightedCalculationCondition: [{ required: true, validator: weightedCalculationCondition, trigger: 'change' }]
            },
            }
        },
      components: {
          Pager,
        },
        mounted() {
            var that = this
            this.getMoreInformation()
            this.firstblood()
        },
      methods: {
            // 刷新页面
            firstblood() {      
            aflcMediumOrderWeightedList(1,20,this.formAll).then(res=>{
               if(res.data.list&&res.data.list.length>0){
                this.tableData.tableDataList = res.data.list;
               }
               else{
                this.tableData.tableDataList =[]
                this.TableMethod()
                this.$refs['tableData'].resetFields();
               }
            })
            },
            // 数据字典1
            AddTableAraay_one(item){
            this.pluspowerList.forEach(i=>{
                    this.tableData.tableDataList.push({
                    weightItemClass:'AF00503',
                    weightItemClassName:'中单等级',
                    weightedItem:i.weightedItem,
                    weightedItemName:i.weightedItemName,
                    weightedConditionName:i.weightedConditionName,
                    weightedConditionCode:'',
                    weightedCalculationCondition:0,
                    weightedScore:'',
                    belongCityCode:this.formAll.belongCityCode,
                    belongCityName:this.formAll.belongCityName
                })           
            })
            },
            // 数据字典2
            AddTableAraay_two(){
            this.additionalList.forEach(j=>{
                    this.tableData.tableDataList.push({
                    weightItemClass:'AF00522',
                    weightItemClassName:'额外照顾',
                    weightedItem:j.weightedItem,
                    weightedItemName:j.weightedItemName,
                    weightedConditionCode:j.weightedConditionCode,
                    weightedConditionName:j.weightedConditionName,
                    weightedCalculationCondition:null,
                    weightedScore:'',
                    belongCityCode:this.formAll.belongCityCode,
                    belongCityName:this.formAll.belongCityName
                })        
            })
            this.tableData.tableDataList[this.tableData.tableDataList.length-1].weightedCalculationCondition = '0'
            },
            // 合并表格
            rowspan(data) {
                this.weightItemClassNameArr = []
                this.weightedItemNameArr = []
                this.weightItemClassName = 0;
                this.weightedItemName = 0;
                for (var i = 0; i < this.tableData.tableDataList.length; i++) {
                    if (i === 0) {
                        this.weightItemClassNameArr.push(1);
                        this.weightedItemNameArr.push(1);
                        this.weightItemClassName = 0;
                        this.weightedItemName = 0;
                    } else {
                        // 判断当前元素与上一个元素是否相同
                        if (this.tableData.tableDataList[i].weightItemClassName === this.tableData.tableDataList[i - 1].weightItemClassName) {
                            this.weightItemClassNameArr[this.weightItemClassName] += 1;
                            this.weightItemClassNameArr.push(0);
                        } else {
                            this.weightItemClassNameArr.push(1);
                            this.weightItemClassName = i;
                        }

                        if (this.tableData.tableDataList[i].weightedItemName === this.tableData.tableDataList[i - 1].weightedItemName) {
                            this.weightedItemNameArr[this.weightedItemName] += 1;
                            this.weightedItemNameArr.push(0);
                        } else {
                            this.weightedItemNameArr.push(1);
                            this.weightedItemName = i;
                        }
                     }
                 }
            },
            // 合并表格
            objectSpanMethod({ row, column, rowIndex, columnIndex }){
                if (columnIndex === 1) {
                    const _row = this.weightItemClassNameArr[rowIndex];
                    const _col = _row > 0 ? 1 : 0;
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }
                if (columnIndex === 2) {
                    const _row = this.weightedItemNameArr[rowIndex];
                    const _col = _row > 0 ? 1 : 0;
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }

            },
            //初始化获取数据字典
            getMoreInformation(){
            aflcProvinceCode().then(res=>{
            this.cityTree = res.data;
            })
            this.TableMethod()
            },
            TableMethod(){
            this.AddTableAraay_one()
            this.AddTableAraay_two()
            this.rowspan(this.tableData.tableDataList)
            },
            // 选择城市
            nodeClick(data){
            if(this.formAll.cityCode==data.code){
            this.$refs.treeForm.setCheckedNodes([])
            this.formAll.belongCityCode = null
            this.formAll.belongCityName = null
            }
            else{
            this.formAll.belongCityCode = data.code
            this.formAll.belongCityName = data.name
            this.$refs.treeForm.setCheckedNodes([data])
            }
            this.firstblood();
            },
            // 保存
            Addsave(){
            this.$nextTick(() => {
            this.$refs['tableData'].validate(valid=>{
            if(valid){
            if(this.formAll.belongCityCode){    
            aflcMediumOrderWeightedAdd(this.tableData.tableDataList).then(res=>{
            this.$message.success('保存成功')
            this.firstblood()
            }).catch(err=>{
            this.$message.error('保存失败')
            })
            }else{
            this.$message.error('请在左边选中城市');
            }
            }
            else{
            this.$message.error('请填写完整的内容')
            return false
            }
            })
            })
            }
        }
    }
</script>

<style type="text/css" lang="scss">
.plusPowerSouce{
    .el-tree-node__content{
        .el-checkbox{
            display: none;
        }
        }
        .el-tree-node__children{
            .el-checkbox{
                display: block
            }
        }    
    .el-form-item{
        margin-bottom: 0px;
    }
    .cell{
        overflow: initial;
    }
    .el-table__body-wrapper{
        padding-bottom:30px;
    }
    .el-input__inner{
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .el-form-item__error{
        z-index: 1;
        top: 90%;
    }
    .miniInput{
        .el-form-item__error{
            left:30%
        }
        .el-input{
             width: 80px;
             margin:0px 5px;
    }
    }
    .btn_footer{
                 text-align: center;
                 margin:20px 0px;
    }
    .el-table::before{
        position: relative;
    }
    .el-table__body-wrapper{
        position: unset;
        overflow: -webkit-paged-y;
    }
}
</style>

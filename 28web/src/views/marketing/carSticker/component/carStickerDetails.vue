<template>
    <div class="carStickerDetails commoncss">
        <el-dialog :title='formtitle' :close-on-click-modal="false" v-el-drag-dialog top="5vh" width="80%" :visible="dialogFormVisible" @close="close">
            <el-tabs v-model="carStickerDetailsName" type="card" @tab-click="handleClick" >
                <!-- 申请资料 -->
                <el-tab-pane label="申请资料" name="applyInfo">
                    <h2 class="carNewinfoH2">车主信息</h2>
                    <div class="essentialInformation">
                        <el-row class="basicInfo" :span='24'>
                            <!-- 第一行 -->
                            <el-col :span="2">车主姓名:</el-col>
                            <el-col :span="4">{{applyInfoDetails.driverName || ''}}</el-col>
                            <el-col :span="2">手机号码:</el-col>
                            <el-col :span="4">{{applyInfoDetails.driverMobile || ''}}</el-col>
                            <el-col :span="2">车牌号:</el-col>
                            <el-col :span="4">{{applyInfoDetails.carNumber || ''}}</el-col>
                            <el-col :span="2">品牌型号:</el-col>
                            <el-col :span="4">{{applyInfoDetails.carBrand || ''}}</el-col>
                            <!-- 第二行 -->
                            <el-col :span="2">车辆类型:</el-col>
                            <el-col :span="4">{{applyInfoDetails.carTypeName || ''}}</el-col>
                            <el-col :span="2">车辆规格:</el-col>
                            <el-col :span="4">{{applyInfoDetails.carSpecName || ''}}</el-col>
                            <el-col :span="2">车长:</el-col>
                            <el-col :span="4">{{applyInfoDetails.lengthWidthHeight || ''}}</el-col>
                        </el-row>
                    </div>
                    <div class="essentialInformation">
                        <el-row :gutter="20" v-viewer>
                            <el-col :span="8" class="CheckPass">
                                <div class="uploadPicture">
                                    <h3 class="uploadH3">认证时车辆45°照片</h3>
                                    <div class="uploadImgBox">
                                        <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                            <img :src='applyInfoDetails.carFile || defaultImg'  alt="" >
                                        </el-tooltip>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8" class="CheckPass">
                                <div class="uploadPicture">
                                    <h3 class="uploadH3">上报图片</h3>
                                    <div class="uploadImgBox">
                                        <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                            <img :src='applyInfoDetails.reportPicture || defaultImg'  alt="" >
                                        </el-tooltip>
                                    </div>
                                </div>
                            </el-col>
                        </el-row> 
                    </div>
                    <h2 class="carNewinfoH2">申请信息</h2>
                    <div class="essentialInformation">
                        <el-row class="basicInfo" :span='24'>
                            <!-- 第一行 -->
                            <el-col :span="2">申请单号:</el-col>
                            <el-col :span="4">{{applyInfoDetails.carStickerOrderSerial || ''}}</el-col>
                            <el-col :span="2">产品所属区域:</el-col>
                            <el-col :span="4">{{applyInfoDetails.productAreaCodeName || ''}}</el-col>
                            <el-col :span="2">产品名称:</el-col>
                            <el-col :span="4">{{applyInfoDetails.productName || ''}}</el-col>
                            <el-col :span="2">申请/上报类型:</el-col>
                            <el-col :span="4">{{applyInfoDetails.operTypeName || ''}}</el-col>
                            <!-- 第二行 -->
                            <el-col :span="2">车贴类型:</el-col>
                            <el-col :span="4">{{applyInfoDetails.productTypeName || ''}}</el-col>
                            <el-col :span="2">车贴时效(月):</el-col>
                            <el-col :span="4">{{applyInfoDetails.productDuration || ''}}</el-col>
                            <el-col :span="2">申请时间:</el-col>
                            <el-col :span="4">{{applyInfoDetails.submitTime | parseTime}}</el-col>
                            <el-col :span="2">本次申请费用:</el-col>
                            <el-col :span="4">{{applyInfoDetails.applyMoney || ''}}</el-col>
                            <!-- 第三行 -->
                            <el-col :span="2">每月补贴费用:</el-col>
                            <el-col :span="4">{{applyInfoDetails.subsidyMoney || ''}}</el-col>
                            <el-col :span="2">申请结果:</el-col>
                            <el-col :span="4" class="selectClass">
                                <el-select v-model="applyInfoDetails.status" v-if="!isView && showType =='applyInfo'" clearable placeholder="请选择">
                                    <el-option
                                    v-for="item in optionsCarStickerStatus"
                                    :key="item.code"
                                    :label="item.name"
                                    :value="item.code">
                                    </el-option>
                                </el-select>
                                <span v-else>{{applyInfoDetails.statusName}}</span>
                            </el-col>
                            <el-col :span="2">车贴跟进分组:</el-col>
                            <el-col :span="4" class="selectClass">
                                <businessGroup  @inputObject = "getVal" v-if="!isView && showType =='applyInfo'" v-model="applyInfoDetails.businessGroupId" ref ='businessGroup'/>
                                <span v-else>{{applyInfoDetails.businessGroupName}}</span>
                            </el-col>
                            <el-col :span="2">车贴跟进人:</el-col>
                            <el-col :span="4" class="selectClass">
                                <el-select v-model="applyInfoDetails.followUpId" v-if="!isView && showType =='applyInfo'" @focus="getfollowUp" @change="getfollowUpName" clearable placeholder="请选择">
                                    <el-option
                                    v-for="item in optionseFollowUp"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                                <span v-else>{{applyInfoDetails.followUpName}}</span>
                            </el-col>
                            <div v-if="isView || showType !=='applyInfo'">
                                <el-col :span="2">操作时间:</el-col>
                                <el-col :span="4">{{applyInfoDetails.operTime | parseTime}}</el-col>
                                <el-col :span="2">操作人:</el-col>
                                <el-col :span="4">{{applyInfoDetails.operator || ''}}</el-col>
                            </div>
                        </el-row>
                    </div>
                    <h2 class="carNewinfoH2">
                        跟进备注 
                        <el-button icon="el-icon-circle-plus" @click="handlerClick('remark')"  type="primary" size="mini" plain>添加备注</el-button>
                    </h2>
                    <div v-if="carStickerRemakeData.length != 0">
                        <div class="essentialInformation essentialInformation_remake"  v-for="item in carStickerRemakeData" :key="item.id">
                            <el-row :span='24'>
                                <el-col :span="3">操作人：</el-col>
                                <el-col :span="3">{{item.operator}}</el-col>
                                <el-col :span="3">添加时间：</el-col>
                                <el-col :span="3">{{item.operTime | parseTime}}</el-col>
                            </el-row>
                            <el-row :span='24'>
                                <el-col :span="3">备注信息：</el-col>
                                <el-col :span="3">
                                    <el-tooltip placement="top-start" effect="light">
                                        <div slot="content">{{item.remark}}</div>
                                        <span>{{item.remark}}</span>    
                                    </el-tooltip>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="essentialInformationNull" v-else>
                        <img src="../../../../assets/icom/25xinxi.png" alt="">
                        <span>客服未备注!</span>
                    </div>
                    <div class="dialog-footer" v-if="!isView && showType =='applyInfo'">
                        <el-button type="primary" plain  icon="el-icon-success" @click="submitForm('ruleForm')">确 定</el-button>
                        <el-button type="primary" plain icon="el-icon-error" @click="close">取 消</el-button>
                    </div> 
                </el-tab-pane>

                <!-- 初审资料 -->
                <el-tab-pane label="初审资料" name="firstTrial" v-if="showType!='applyInfo'">
                    <div class="essentialInformation">
                        <el-row class="basicInfo" :span='24'>
                            <!-- 第一行 -->
                            <el-col :span="2">本次申请费用:</el-col>
                            <el-col :span="4">{{firstTrialDetailsObj.applyMoney || ''}}</el-col>
                            <el-col :span="2">缴费流水号:</el-col>
                            <el-col :span="4">{{firstTrialDetailsObj.paySerial || ''}}</el-col>
                            <el-col :span="2">付款时间:</el-col>
                            <el-col :span="4">{{firstTrialDetailsObj.payTime | parseTime}}</el-col>
                            <el-col :span="2">实际支付费用:</el-col>
                            <el-col :span="4">{{firstTrialDetailsObj.realPayMoney || 0}}</el-col>

                            <!-- 第二行 -->
                            <el-col :span="2">支付渠道:</el-col>
                            <el-col :span="4">{{firstTrialDetailsObj.payChannelName || ''}}</el-col>
                        </el-row>
                    </div>
                    <div class="essentialInformation">
                        <el-table
                            :data="firstTrialHistoryList"
                            border
                            row-key="id" 
                            :expand-row-keys="expands"
                            @expand-change="changeExpand"
                            style="width: 100%">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-form label-position="right" class="demo-table-expand" >
                                        <!-- <el-form-item label="" label-width="0px" v-if="!isView"> -->
                                            <el-row :span='24' class="colInfo" v-if="!isView && showType =='firstTrial' && props.$index == 0">
                                                <el-col :span="4">初审状态：</el-col>
                                                <el-col :span="4">
                                                    <el-select v-model="props.row.status" placeholder="请选择">
                                                        <el-option
                                                        v-for="item in optionsfirstTrialStatus"
                                                        :key="item.id"
                                                        :label="item.name"
                                                        :value="item.code">
                                                        </el-option>
                                                    </el-select>
                                                    <!-- <span v-else>{{props.row.statusName}}</span> -->
                                                </el-col>
                                            </el-row>
                                        <!-- </el-form-item> -->
                                        <div class="essentialInformation">
                                            <el-row v-viewer>
                                                <el-col :span="8" class="CheckPass">
                                                    <div class="uploadPicture">
                                                        <h3 class="uploadH3">左后方45°角的全车照片（车牌无遮挡）</h3>
                                                        <div class="uploadImgBox">
                                                            <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                                                <img :src='props.row.leftRearPhoto || defaultImg'  alt="" >
                                                            </el-tooltip>
                                                        </div>
                                                    </div>
                                                    <el-form-item prop="shipperCardFileNoPass" label="图片审核状态：" label-width="150px">
                                                        <el-select v-model="props.row.leftRearPhotoStatus" placeholder="请选择" v-if="!isView && showType =='firstTrial' && props.$index == 0">
                                                            <el-option
                                                            v-for="item in optionsCarStickerImg"
                                                            :key="item.id"
                                                            :label="item.name"
                                                            :value="item.code">
                                                            </el-option>
                                                        </el-select>
                                                        <el-input v-model="props.row.leftRearPhotoStatusName" auto-complete="off" v-else disabled></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="8" class="CheckPass" style="margin-left:20px;">
                                                    <div class="uploadPicture">
                                                        <h3 class="uploadH3">右后方45°角的全车照片（车牌无遮挡）</h3>
                                                        <div class="uploadImgBox">
                                                            <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                                                <img :src='props.row.rightRearPhoto || defaultImg'  alt="" >
                                                            </el-tooltip>
                                                        </div>
                                                    </div>
                                                    <el-form-item prop="shipperCardFileNoPass" label="图片审核状态：" label-width="150px">
                                                        <el-select v-model="props.row.rightRearPhotoStatus" v-if="!isView && showType =='firstTrial' && props.$index == 0" placeholder="请选择" >
                                                            <el-option
                                                            v-for="item in optionsCarStickerImg"
                                                            :key="item.id"
                                                            :label="item.name"
                                                            :value="item.code">
                                                            </el-option>
                                                        </el-select>
                                                        <el-input v-model="props.row.rightRearPhotoStatusName" auto-complete="off" v-else  disabled></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row> 
                                        </div>
                                    </el-form>
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="审核单号"
                            prop="firstTrialSerial">
                            </el-table-column>
                            <el-table-column
                            label="初审提交时间"
                            prop="submitTime">
                                <template slot-scope="scope">
                                    {{ scope.row.submitTime | parseTime }}
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="初审结果"
                            prop="statusName">
                            </el-table-column>
                            <el-table-column
                            label="操作时间"
                            prop="operTime">
                                <template slot-scope="scope">
                                    {{ scope.row.operTime | parseTime }}
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="操作人"
                            prop="operator">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="dialog-footer" v-if="!isView && showType =='firstTrial'" >
                        <el-button type="primary" plain  icon="el-icon-success" @click="submitForm2('ruleForm')">确 定</el-button>
                        <el-button type="primary" plain icon="el-icon-error" @click="close">取 消</el-button>
                    </div> 
                </el-tab-pane>
                <!-- 月审资料 -->
                <el-tab-pane label="月审资料" name="monthTrial" v-if="showType!='applyInfo' && showType!='firstTrial'">
                    <div class="essentialInformation">
                        <el-table
                            :data="monthTrialHistoryList"
                            border
                            row-key="id" 
                            @row-click="rowClick"
                            @expand-change="changeExpandMonth"
                            :expand-row-keys="expands2"
                            style="width: 100%">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-form label-position="right" class="demo-table-expand" >
                                        <!-- <el-form-item label="" label-width="0px" v-if="!isView"> -->
                                            <el-row :span='24' class="colInfo">
                                                <el-col :span="4" v-if="!isView && props.$index == 0">月审状态：</el-col>
                                                <el-col :span="4" v-if="!isView && props.$index == 0">
                                                    <el-select v-model="props.row.status" placeholder="请选择" >
                                                        <el-option
                                                        v-for="item in optionsMonthTrialStatus"
                                                        :key="item.id"
                                                        :label="item.name"
                                                        :value="item.code">
                                                        </el-option>
                                                    </el-select>
                                                    <!-- <span v-else>{{props.row.statusName}}</span> -->
                                                </el-col>
                                                <el-col :span="4">实际有效天数：</el-col>
                                                <el-col :span="4">
                                                    <el-input placeholder="请输入内容" v-model="props.row.validDays" :disabled="isView" clearable v-numberOnly>
                                                        <template slot="append">/{{mGetDate()}}</template>
                                                    </el-input>
                                                </el-col>
                                                <el-col :span="4">补贴金额：</el-col> 
                                                <el-col :span="4">
                                                    <span v-if="!isView && props.$index == 0">{{((props.row.subsidyMoney / mGetDate())* props.row.validDays).toFixed(2) }}</span>
                                                    <span v-else>{{props.row.actualSubsidyMoney}}</span>
                                                </el-col>
                                                <div v-if="(props.row.applyOperType == 'AF088030303' || props.row.applyOperType == 'AF088030304') && props.row.periods == 1">
                                                    <el-col :span="4">补偿金额：</el-col>
                                                    <el-col :span="4">
                                                        <el-select v-model="props.row.compensateMoney" placeholder="请选择" v-if="!isView">
                                                            <el-option
                                                            v-for="item in optionsCompensateMoney"
                                                            :key="item.id"
                                                            :label="item.name"
                                                            :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                        <span v-else>{{props.row.compensateMoney}}</span>
                                                    </el-col>
                                                </div>
                                            </el-row>
                                        <!-- </el-form-item> -->
                                        <div class="essentialInformation">
                                            <el-row :gutter="20" v-viewer>
                                                <el-col :span="8" class="CheckPass">
                                                    <div class="uploadPicture">
                                                        <h3 class="uploadH3">左后方45°角的全车照片（车牌无遮挡）</h3>
                                                        <div class="uploadImgBox">
                                                            <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                                                <img :src='props.row.leftRearPhoto || defaultImg'  alt="" >
                                                            </el-tooltip>
                                                        </div>
                                                    </div>
                                                    <el-form-item prop="shipperCardFileNoPass" label="图片审核状态：" label-width="150px">
                                                        <el-select v-model="props.row.leftRearPhotoStatus" placeholder="请选择" v-if="!isView && props.$index == 0">
                                                            <el-option
                                                            v-for="item in optionsCarStickerImg"
                                                            :key="item.id"
                                                            :label="item.name"
                                                            :value="item.code">
                                                            </el-option>
                                                        </el-select>
                                                        <el-input v-model="props.row.leftRearPhotoStatusName" auto-complete="off" v-else disabled></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="8" class="CheckPass">
                                                    <div class="uploadPicture">
                                                        <h3 class="uploadH3">右后方45°角的全车照片（车牌无遮挡）</h3>
                                                        <div class="uploadImgBox">
                                                            <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                                                <img :src='props.row.rightRearPhoto || defaultImg'  alt="" >
                                                            </el-tooltip>
                                                        </div>
                                                    </div>
                                                    <el-form-item prop="shipperCardFileNoPass" label="图片审核状态：" label-width="150px">
                                                        <el-select v-model="props.row.rightRearPhotoStatus" placeholder="请选择" v-if="!isView && props.$index == 0">
                                                            <el-option
                                                            v-for="item in optionsCarStickerImg"
                                                            :key="item.id"
                                                            :label="item.name"
                                                            :value="item.code">
                                                            </el-option>
                                                        </el-select>
                                                        <el-input v-model="props.row.rightRearPhotoStatusName" auto-complete="off" v-else disabled></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="8" class="CheckPass">
                                                    <div class="uploadPicture">
                                                        <h3 class="uploadH3">每月指定手势</h3>
                                                        <div class="uploadImgBox">
                                                            <el-tooltip class="item" effect="dark" content="双击图片查看原图" placement="top">
                                                                <img :src='props.row.gesturePhoto || defaultImg'  alt="" >
                                                            </el-tooltip>
                                                        </div>
                                                    </div>
                                                    <el-form-item prop="shipperCardFileNoPass" label="图片审核状态：" label-width="150px">
                                                        <el-select v-model="props.row.gesturePhotoStatus" placeholder="请选择" v-if="!isView && props.$index == 0">
                                                            <el-option
                                                            v-for="item in optionsCarStickerImg"
                                                            :key="item.id"
                                                            :label="item.name"
                                                            :value="item.code">
                                                            </el-option>
                                                        </el-select>
                                                        <el-input v-model="props.row.gesturePhotoStatusName" auto-complete="off" v-else disabled></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row> 
                                        </div>
                                        <div class="essentialInformation" v-if="props.row.logList && props.row.logList.length != 0">
                                            <el-row class="basicInfo" :span='24'>
                                                <!-- 第一行 -->
                                                <div  v-for="(item,idx) in props.row.logList" :key="idx">
                                                    <el-col :span="4">操作人：</el-col>
                                                    <el-col :span="4">{{item.operator}}</el-col>
                                                    <el-col :span="4">添加时间：</el-col>
                                                    <el-col :span="4">{{item.submitTime | parseTime}}</el-col>
                                                    <el-col :span="4">复审驳回原因：</el-col>
                                                    <el-col :span="4">{{item.remarks}}</el-col>
                                                </div>
                                            </el-row>
                                        </div>
                                    </el-form>
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="期数"
                            prop="periods">
                                <template slot-scope="scope">
                                    {{ scope.row.periods+'/'+scope.row.totalPeriods}}
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="审核单号"
                            prop="monthTrialSerial">
                            </el-table-column>
                            <el-table-column
                            label="月审提交时间"
                            prop="submitTime">
                                <template slot-scope="scope">
                                    {{ scope.row.submitTime | parseTime }}
                                </template>
                            </el-table-column>
                            <el-table-column
                            label="月审结果"
                            prop="statusName">
                            </el-table-column>
                            <el-table-column
                                prop="operator"
                                label="审核操作人"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="operTime"
                                label="审核操作时间">
                                <template slot-scope="scope">
                                    {{ scope.row.operTime | parseTime }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="repeatOperator"
                                label="复审操作人"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="repeatOperTime"
                                label="复审操作时间">
                                <template slot-scope="scope">
                                    {{ scope.row.repeatOperTime | parseTime }}
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="dialog-footer" v-if="!isView">
                        <el-button type="primary" plain  icon="el-icon-success" @click="submitForm3('ruleForm')">确 定</el-button>
                        <el-button type="primary" plain icon="el-icon-error" @click="close">取 消</el-button>
                    </div> 
                </el-tab-pane>
            </el-tabs>
        </el-dialog>

        <remarkerInfo :dialogVisible.sync="dialogVisible" :orderSerial='detailsObj.carStickerOrderSerial' @close = "applyInfoInitRemake"/>
    </div>
</template>

<script>

import { objectMerge2 } from '@/utils/'
import { carStickerApplyDetails,carStickerRemakeList,carStickerCheck,firstTrialDetails,firstTrialList,firstTrialCheck,monthTrialList,monthTrialCheck,monthTrialDetails } from '@/api/marketing/carSticker'
import { CarStickerStatusType,CarStickerImgType,CompensateMoneyType } from '@/api/common.js'
import businessGroup from '@/components/selectTree/businessGroup'  
import { aflcBusinessGroupUserList } from '@/api/company/businessGroup'
import remarkerInfo from './remakInfo'
export default {
    name: 'carStickerDetails',
    props: {
        dialogFormVisible:{
            type:Boolean,
            required:true
        },
        formtitle:{
            type:String,
            required:false,
            default:'审批'
        },
        showType:{
            type:String,
        },
        isView:{
            type:Boolean,
            required:false
        },
        detailsObj:{
            type:Object,
        },
        tabName:{
            type:String,
            default:'applyInfo'
        },
        isReject:{
            type:Boolean,
            required:false
        },
    },
    components:{
        businessGroup,
        remarkerInfo
    },
    data() {
        return {
            carStickerDetailsName:'applyInfo',
            // dataKeys:'',
            dialogVisible:false,
            expands:[],
            expands2:[],
            defaultImg:'/static/test.jpg',//默认第一张图片的url
            // remake:[{
            //     userName:'ljy',
            //     createTime:'ljy',
            //     remark:'ljy',
            // }],
            applyInfoDetails:{
                driverName:'',//车主姓名
                driverMobile:'',//车主手机号
                carNumber:'',//车牌号码
                carBrand:'',//品牌型号
                carType:'',//车辆类型
                carTypeName:'',//车辆类型
                carSpec:'',//车辆规格
                carFile:'',//车辆45度照片
                reportPicture:'',//上报图片
                carStickerOrderSerial:'',//车贴订单号
                productAreaCodeName:'',//产品所属区域
                productName:'',//产品名称
                operType:'',//申请/上报类型
                operTypeName:'',//申请/上报类型
                productType:'',//车贴类型
                productTypeName:'',//车贴类型
                productDuration:'',//车贴时效(月)
                submitTime:'',//申请时间
                applyMoney:'',//申请金额
                subsidyMoney:'',//每月补贴费用
                status:'',//申请结果
                statusName:'',//申请结果名称
                businessGroupId:'',//车贴跟进分组id
                businessGroupName:'',//车贴跟进分组
                followUpId:'',//车贴跟进人ID
                followUpName:'',//车贴跟进人名字
                followUpMobile:'',//车贴跟进人号码
            },
            firstTrialDetailsObj:{
                applyMoney:'',//申请金额
                paySerial:'',//缴费流水号
                payTime:'',//付款时间
                realPayMoney:'',//实际支付费用
                payChannel:'',//支付渠道
                payChannelName:'',//支付渠道名称
            },
            optionsCarStickerStatus:[],//车贴申请
            optionseFollowUp:[],
            listSystemObj:{
                "currentPage": 1,
                "pageSize": 100000,
                "vo": {
                    groupCode:'',
                }
            },
            carStickerRemake:{
                "currentPage": 1,
                "pageSize": 100000,
                "vo": {
                    carStickerOrderSerial:'',
                }
            },
            firstTrialListObj:{
                "currentPage": 1,
                "pageSize": 100000,
                "vo": {
                    carStickerOrderSerial:'',
                    forDetails:'1'
                }
            },
            monthTrialListObj:{
                "currentPage": 1,
                "pageSize": 100000,
                "vo": {
                    carStickerOrderSerial:'',
                }
            },
            firstTrialHistoryList:[],
            monthTrialHistoryList:[],
            carStickerRemakeData:[],
            optionsCarStickerImg:[],
            optionsfirstTrialStatus:[{
                name:'待审核',
                code:"AF0880601"
            },{
                name:'初审通过',
                code:"AF0880602"
            },{
                name:'初审驳回',
                code:"AF0880603"
            },{
                name:'初审不通过',
                code:"AF0880604"
            }],
            optionsMonthTrialStatus:[{
                name:'待月审审核',
                code:"AF0880701"
            },{
                name:'月审驳回',
                code:"AF0880702"
            },{
                name:'月审不通过',
                code:"AF0880703"
            },{
                name:'已通过',//实际是待月审复审
                code:"AF0880704"
            }],
            optionsCompensateMoney:[],
        };
    },
    watch:{
        dialogFormVisible:{
            handler(newVal,oldVal){
                if(newVal){
                    this.init()
                }
            },
            deep:true
        }
    },
    mounted(){
        this.initDic();
    },
    // created() {
    //     this.carStickerDetailsName = sessionStorage.getItem('carStickerDetailsName') || 'applyInfo';
    // },
    // beforeUpdate () {
    //     sessionStorage.setItem('carStickerDetailsName', this.carStickerDetailsName);
    // },
    // beforeDestroy () {
    //     sessionStorage.setItem('carStickerDetailsName', this.carStickerDetailsName);
    // },
    methods: {
        rowClick(row, event, column){
            // this.selected = row;
            // console.log('rowClick',row)
        },
        changeExpand(i,j){
            console.log('')
            // this.getMonthDetaisl(i[id],0)
        },
        changeExpandMonth(i,j){
            // console.log('i,j',i.id,this.monthTrialHistoryList.length,i.periods)
            var index = this.monthTrialHistoryList.findIndex(function (x) {
                return x.id == i.id
            })
            this.getMonthDetaisl(i.id,index)
        },
        handlerClick(){
            this.dialogVisible = true;
        },
        getfollowUp(val){
            this.optionseFollowUp = [];
            if(!this.applyInfoDetails.businessGroupId){
                return  this.$message({
                    type: 'warning',
                    message: '请先选择车贴跟进分组!'
                })
            }else{
                aflcBusinessGroupUserList(this.listSystemObj).then(res => {
                    this.optionseFollowUp = res.data.list;
                    if(this.optionseFollowUp.length == 0 && this.applyInfoDetails.businessGroupId){
                        this.applyInfoDetails.followUpId = '';
                        this.applyInfoDetails.followUpName = '';
                        this.applyInfoDetails.followUpMobile = '';
                    }
                }).catch(err => {
                    this.applyInfoDetails.followUpId = '';
                    this.applyInfoDetails.followUpName = '';
                    this.applyInfoDetails.followUpMobile = '';
                })
            }
        },
        getfollowUpName(val){
            this.optionseFollowUp.forEach(el => {
                if(el.id == this.applyInfoDetails.followUpId){
                    this.applyInfoDetails.followUpName = el.name;
                    this.applyInfoDetails.followUpMobile = el.mobile;
                }
            })
        },
        getVal(val){
            this.applyInfoDetails.businessGroupId = val.id;
            this.applyInfoDetails.businessGroupName = val.groupName;
            this.listSystemObj.vo.groupCode = val.groupCode;
        },
        initDic(){
            Promise.all([CarStickerStatusType(),CarStickerImgType(),CompensateMoneyType()]).then(resArr => {
                this.optionsCarStickerStatus = resArr[0].data;
                this.optionsCarStickerImg = resArr[1].data;
                this.optionsCompensateMoney = resArr[2].data;
            })
            if(this.isReject){
                // this.optionsMonthTrialStatus.push({
                //     name:'复审驳回',
                //     code:"AF0880706"
                // })
                this.optionsMonthTrialStatus = [{
                    name:'复审驳回',
                    code:"AF0880706"
                },{
                    name:'月审驳回',
                    code:"AF0880702"
                },{
                    name:'月审不通过',
                    code:"AF0880703"
                },{
                    name:'已通过',
                    code:"AF0880704"
                }]
                // this.optionsMonthTrialStatus = Array.from(new Set(this.optionsMonthTrialStatus));
            }
        },
        init() {
            this.carStickerDetailsName =  this.tabName;
            switch(this.showType){
                case 'details':
                    this.applyInfoInit();
                    break;
                case 'applyInfo':
                    this.applyInfoInit();
                    break;
                case 'firstTrial':
                    this.firstTrialInfo();
                    break;
                case 'monthTrial':
                    this.monthTrialInfo();
                    break;
            }
        },
        firstTrialInfo(){
            firstTrialDetails(this.detailsObj.id).then(res => {
                if(res.data){
                    this.firstTrialDetailsObj = res.data;
                }else{
                    this.firstTrialDetailsObj = {
                        applyMoney:'',//申请金额
                        paySerial:'',//缴费流水号
                        payTime:'',//付款时间
                        realPayMoney:'',//实际支付费用
                        payChannel:'',//支付渠道
                        payChannelName:'',//支付渠道名称
                    }
                }
            })
            this.firstTrialListObj.vo.carStickerOrderSerial = this.detailsObj.carStickerOrderSerial;
            firstTrialList(this.firstTrialListObj).then(res => {
                this.firstTrialHistoryList = res.data.list;
                this.expands.push(this.firstTrialHistoryList[0].id);
            })
        },
        monthTrialInfo(){
            this.monthTrialListObj.vo.carStickerOrderSerial = this.detailsObj.carStickerOrderSerial;
            monthTrialList(this.monthTrialListObj).then(res => {
                this.monthTrialHistoryList = res.data.list;
                if(this.monthTrialHistoryList.length != 0){
                    this.expands2.push(this.monthTrialHistoryList[0].id);
                    this.getMonthDetaisl(this.monthTrialHistoryList[0].id,0)
                }
            })
        },
        getMonthDetaisl(id,i){
            monthTrialDetails(id).then(res => {
                this.monthTrialDetailsObj = res.data;
                this.monthTrialHistoryList[i].logList = res.data.logList;
            })
        },
        
        applyInfoInit(){
            carStickerApplyDetails(this.detailsObj.carStickerOrderSerial).then(res => {
                this.applyInfoDetails = res.data;
            });

           this.applyInfoInitRemake();
        },
        applyInfoInitRemake(){
            this.carStickerRemake.vo.carStickerOrderSerial = this.detailsObj.carStickerOrderSerial;
            carStickerRemakeList(this.carStickerRemake).then(res => {
                this.carStickerRemakeData = res.data.list;
            })
        },
        handleClick(tab, event) {
            // this.dataKeys = Math.random();
            this.carStickerDetailsName = tab.name;
            switch(tab.name){
                case 'applyInfo':
                    this.applyInfoInit();
                    break;
                case 'firstTrial':
                    this.firstTrialInfo();
                    break;
                case 'monthTrial':
                    this.monthTrialInfo();
                    break;
            }
        },
        close(){
            this.$emit('update:dialogFormVisible',false);
            this.expands = [];
            this.expands2 = []
        },
        mGetDate(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var d = new Date(year, month, 0);
            return d.getDate();
        },
        submitForm(){
            // console.log('this.applyInfoDetails',this.applyInfoDetails)
            // this.btnShow1 = true;
            if(!this.applyInfoDetails.status || !this.applyInfoDetails.businessGroupId || !this.applyInfoDetails.followUpId){
                this.$message({
                    type: 'warning',
                    message: '您未选择的车贴跟进分组或者车贴跟进人!'
                })
            }else{
                this.$set(this.applyInfoDetails, 'applyId', this.applyInfoDetails.id)
                carStickerCheck(this.applyInfoDetails).then(res => {
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    })
                    this.close();
                    this.$emit('renovate');
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                    })
                    // this.btnShow1 = false;
                })
            }
        },
        submitForm2(){
            let checkObj = {
                firstTrialID:this.firstTrialHistoryList[0].id,
                leftRearPhotoStatus:this.firstTrialHistoryList[0].leftRearPhotoStatus,
                rightRearPhotoStatus:this.firstTrialHistoryList[0].rightRearPhotoStatus,
                status:this.firstTrialHistoryList[0].status,
            }
            firstTrialCheck(checkObj).then(res => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                })
                this.close();
                this.$emit('renovateF');
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                })
                // this.btnShow1 = false;
            })
        },
        submitForm3(){
            let checkObj = {
                monthTrialId:this.monthTrialHistoryList[0].id,
                leftRearPhotoStatus:this.monthTrialHistoryList[0].leftRearPhotoStatus,
                rightRearPhotoStatus:this.monthTrialHistoryList[0].rightRearPhotoStatus,
                status:this.monthTrialHistoryList[0].status,
                actualSubsidyMoney:((this.monthTrialHistoryList[0].subsidyMoney / this.mGetDate())* this.monthTrialHistoryList[0].validDays).toFixed(2),
                // actualSubsidyMoney:22222,
                validDays:this.monthTrialHistoryList[0].validDays,
                gesturePhotoStatus:this.monthTrialHistoryList[0].gesturePhotoStatus,
            }
            monthTrialCheck(checkObj).then(res => {
                this.$message({
                    type: 'success',
                    message: '操作成功!'
                })
                this.close();
                this.$emit('renovateM');
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: '操作失败，原因：' + (err.errorInfo ? err.errorInfo : err.text)
                })
                // this.btnShow1 = false;
            })
        }
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
    .carStickerDetails{
        .carNewinfoH2{
            color:#f4f4f5;
            background:#909399;
            padding:10px 0px;
            text-indent: 20px;
            margin:10px 0px;
            position: relative;
            .el-button{
                position: absolute;
                right: 10px;
                bottom:8px;
            }
        }    
        .el-tabs__content{
            overflow: auto;
            padding: 0 10px;
            .dialog-footer{
                margin:20px 0;
            }
        }
        .el-dialog .el-dialog__body {
            padding:10px 0px;
        }
        .essentialInformation{
            padding:10px 0;
            .basicInfo{
                border-top: 1px solid #e6e6e6;
                border-left: 1px solid #e6e6e6;
                .el-col{
                    font-size: 14px;
                    line-height: 45px;
                    height: 45px;
                    padding: 0px 10px;
                    border-right: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    &:nth-child(odd){
                        background: #fafafa;
                        text-align: right;
                    }
                    &:nth-child(even){
                        text-align: left;
                    }
                }
                .selectClass{
                    padding: 0px 2px;
                    .el-select{
                        width: 100%;
                    }
                }
            }
            .el-table{
                .el-form-item{
                    margin-bottom: 0px;
                    // .el-form-item__content .
                }
                .CheckPass .el-form-item {
                    border: 1px solid #eee;
                    border-top: 0 none;
                    padding: 5px 10px 5px 0;
                }
                .colInfo{
                    .el-col{
                        font-size: 14px;
                        line-height: 45px;
                        height: 45px;
                        padding: 0px 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        border: 1px solid #e6e6e6;
                        padding: 0px 10px;
                        &:nth-child(odd){
                            background: #fafafa;
                            text-align: right;
                        }
                        &:nth-child(even){
                            text-align: left;
                            border-left: 0 none;
                            // padding: 0px 2px;
                        }
                    }
                }
            }
        }
        .essentialInformation_remake{
            // padding: 20px 0 20px 20px;
            border-bottom: 1px solid #ccc;
            .el-col {
                font-size: 14px;
                line-height: 30px;
                height: 30px;
                // padding: 12px 10px;
                &:nth-child(odd){
                    background: #fafafa;
                    text-align: right;
                }
                &:nth-child(even){
                    text-align: left;
                }
            }
        }
        .uploadPicture{
            width: 100%;
            border:1px solid #eee;
            margin:0px auto;
            .uploadH3{
                line-height: 40px;
                text-align: center;
                border-bottom: 1px solid #eee;
                background: #eee;
                position: relative;
            }
            .uploadImgBox{
                width:100%;
                height: 240px;
                line-height:15px;
                text-align:center;
                img{
                    width: 100%;
                    height: 100%;
                }
                .picURL{
                    width: 385px;
                    height: 215px;
                    cursor: pointer;
                }
            }
        }
        .essentialInformationNull{
            font-size: 14px;
            font-weight: bold;
            margin: 20px;
            padding-left: 40%;
            img{
                vertical-align: middle;
            }
            span{
                margin-left: 10px;
                vertical-align: middle;
            }
        }
    }
</style>

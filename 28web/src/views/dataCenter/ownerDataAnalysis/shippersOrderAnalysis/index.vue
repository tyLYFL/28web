<template>
    <div class="tabsWrap">
        <el-tabs type="card" @tab-click="handleClick" v-model="assessType">
            <!-- 全部 -->
            <el-tab-pane
                :label="item.label"
                :name="item.name"
                v-for="item in tabList"
                :key="item.name"
            >
                <shipper-content :assessType="assessType" v-if="assessType == item.name"></shipper-content>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import shipperContent from './shipperContent'
export default {
    data() {
        return {
            // tab列表
            tabList:[
                {
                    name: 'sameCity',
                    label: '同城'
                },
                // {
                //     name: 'intercity',
                //     label: '城际'
                // },
                // {
                //     name: 'breakbulk',
                //     label: '零担'
                // },
            ],
            assessType:'sameCity', //所选类型
        }
    },
    methods: {
        handleClick() {
            console.log('a')
        }
    },
    components: {
        shipperContent
    }
}
</script>

<template>
  <div class="member tabsWrap">
    <el-tabs v-model="operaName" type="card" @tab-click="handleClick" >
        <!-- 抽拥 -->
            <el-tab-pane label="抽拥" name="smoke" v-if="$_has_permission('MARKETING_OPERATION_COMMISSION')">
                <smoke :isvisible="operaName === 'smoke'"></smoke>
            </el-tab-pane>

        <!-- 优惠券 -->
            <el-tab-pane label="优惠券" name="coupon" v-if="$_has_permission('MARKETING_OPERATION_COUPON')">
                <coupon :isvisible="operaName === 'coupon'"></coupon>
            </el-tab-pane>

        <!-- 优惠金 -->
            <el-tab-pane label="优惠金" name="gold" v-if="$_has_permission('MARKETING_OPERATION_PREFERENTIAL')">
                <gold :isvisible="operaName === 'gold'"></gold>
            </el-tab-pane>
            
        <!-- 奖励金 -->
            <el-tab-pane label="奖励金" name="bounty" v-if="$_has_permission('MARKETING_OPERATION_DRIVER_REWARD')">
                <bounty :isvisible="operaName === 'bounty'"></bounty>
            </el-tab-pane>

        <!-- 达量奖励 -->
            <el-tab-pane label="达量奖励" name="amount" v-if="$_has_permission('MARKETING_OPERATION_ORDER_NUM_REWARD')">
                <amount :isvisible="operaName === 'amount'"></amount>
            </el-tab-pane>

        <!-- 货物保障 -->
            <el-tab-pane label="货物保障" name="CargoProtection" v-if="$_has_permission('MARKETING_OPERATION_GOODS_INSURE')">
                <CargoProtection :isvisible="operaName === 'CargoProtection'"></CargoProtection>
            </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script type="text/javascript">
import '@/styles/dialog.scss'
import '@/styles/tab.scss'
import smoke from './smoke.vue'
import coupon from './coupon.vue'
import gold from './gold.vue'
import bounty from './bounty.vue'
import amount from './amount.vue'
import CargoProtection from './CargoProtection.vue'
export default {
  data() {
    return {
      operaName: 'smoke'
    }
  },
  name: 'operating',
  components: {
    smoke,
    coupon,
    gold,
    bounty,
    amount,
    CargoProtection
  },
  props: {
    isvisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    operaName(newVal, oldVal) {
      if (newVal) {
        this.operaName = newVal
      } else {
        this.operaName = oldVal
      }
    }
  },
  created() {
    this.operaName = sessionStorage.getItem('operaName') || 'smoke'
  },

  beforeUpdate() {
    sessionStorage.setItem('operaName', this.operaName)
  },

  beforeDestroy() {
    sessionStorage.setItem('operaName', 'smoke')
  },
  methods: {
    handleClick(tab, event) {
      this.operaName = tab.name
    }
  }
}
</script>

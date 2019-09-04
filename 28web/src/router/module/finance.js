import Layout from '@/views/layout/Layout'
const _import = require('../_import_' + process.env.NODE_ENV)

export default {
    path: '/finance',
    component: Layout,
    redirect: '/finance/transactionRecharge',
    name: '财务管理',
    icon: 'caiwu',
    meta: {
        title: '财务管理', code: 'FINANCE'
    },
  children: [
        { path: '/finance/transactionRecharge', 
            icon: 'czmx', 
            hidden: false, 
            name: '充值明细', 
            component: _import('finance/transactionRecharge/index'), 
            meta: { title: '充值明细', noCache: true , code: 'FINANCE_RECHARGE_DETAIL'}},
        { path: '/finance/transactionDetail', 
            icon: 'fxtj', 
            hidden: false,
            name: '交易明细', 
            component: _import('finance/transactionDetail/index'), 
            meta: { title: '交易明细', noCache: true , code: 'FINANCE_TRADE_DETAIL'}},
        { path: '/finance/banktransaction', 
            icon: 'khsb', 
            hidden: false, 
            name: '资金账户管理', 
            component: _import('finance/banktransaction/index'), 
            meta: { title: '资金账户管理', stitle: '账户', noCache: true , code: '',keepAlive: true}},
        { path: '/finance/banktransaction/detail', 
            icon: 'khsb', 
            hidden: true, 
            name: '资金账户明细', 
            component: _import('finance/banktransaction/detail'), 
            meta: { title: '资金账户明细', stitle: '账户', noCache: true , code: ''}},
        { 
            
            path: '/finance/transactionCash', 
            icon: 'txgl', 
            hidden: false, 
            name: '提现管理', 
            component: _import('finance/transactionCash/index'), 
            meta: { title: '提现管理', noCache: true , code: 'FINANCE_WITHDRAW_MANAGE'},
            children:[
                {
                    path: '/finance/transactionCash/cashSet', 
                    hidden: false, 
                    name: '提现配置', 
                    component: _import('finance/transactionCash/cashSet/index'), 
                    meta: { title: '提现配置', stitle: '配置',noCache: true , code: ''},
                },
                {
                    path: '/finance/transactionCash/CarCash', 
                    hidden: false, 
                    name: '车主提现', 
                    component: _import('finance/transactionCash/CarCash/index'), 
                    meta: { title: '车主提现', stitle: '提现',noCache: true , code: '',keepAlive: true},
                },
                {
                    path: '/finance/transactionCash/CashPrice/Priceindex', 
                    hidden: false, 
                    name: '财务区代提现', 
                    component: _import('finance/transactionCash/CashPrice/Priceindex'), 
                    meta: { title: '区代提现', stitle: '区代',noCache: true , code: '',keepAlive: true},
                },
                {
                    path: '/finance/transactionCash/CashPrice/SpecialLineIndex', 
                    hidden: false, 
                    name: '财务专线承运商提现', 
                    component: _import('finance/transactionCash/CashPrice/SpecialLineIndex'), 
                    meta: { title: '专线承运商提现', stitle: '专线',noCache: true , code: '',keepAlive: true},
                },
            ]
        },

        {          
            path: '/finance/transactionChinaDoor', 
            icon: 'pingtaiZH', 
            name: '平台账户概况',
            hidden: true, 
            component: _import('finance/transactionChinaDoor/chinaDoor'), 
            meta: { role: ['admin'], title: '平台账户概况', stitle:'平台', noCache: true , code: 'FINANCE_PLATFORM_SURVEY'},
            children:[
               
            ]
          }, 

          {          
            path: '/finance/transactionCar', 
            icon: 'chezhuZH', 
            name: '车主账户概况',
            hidden: false, 
            component: _import('finance/transactionCar/transactionCarWallet/index'), 
            meta: { role: ['admin'], title: '车主账户概况', stitle:'车主', noCache: true , code: 'FINANCE_DRIVER_SURVEY',keepAlive: true},
            children:[
               
            ]
          }, 
          {          
            path: '/finance/transactionShipper', 
            icon: 'huozhuZH', 
            name: '货主账户概况',
            hidden: false, 
            component: _import('finance/transactionShipper/transactionShipperWallet/index'), 
            meta: { role: ['admin'], title: '货主账户概况', stitle:'货主', noCache: true , code: 'FINANCE_SHIPPER_SURVEY',keepAlive: true},
            children:[
               
            ]
          }, 
          {          
            path: '/finance/transactionCarrier', 
            icon: 'hhrgl', 
            name: '专线承运商账户概况',
            hidden: false, 
            component: _import('finance/transactionCarrier/index'), 
            meta: { role: ['admin'], title: '专线承运商账户概况', stitle:'专线', noCache: true , code: '',keepAlive: true},
            children:[
               
            ]
          }, 
          {          
            path: '/finance/transactionCarrier/detail', 
            icon: 'yygl', 
            name: '专线承运商账户详情',
            hidden: true, 
            component: _import('finance/transactionCarrier/detail'), 
            meta: { role: ['admin'], title: '专线承运商账户详情', stitle:'专线', noCache: true , code: ''},
            children:[
               
            ]
          }, 
          {          
            path: '/finance/transactionPrice', 
            icon: 'hzyx', 
            name: '区代账户概况',
            hidden: false, 
            component: _import('finance/transactionPrice/index'), 
            meta: { role: ['admin'], title: '区代账户概况', stitle:'区代', noCache: true , code: '',keepAlive: true},
            children:[
               
          ]
          }, 
          {          
            path: '/finance/transactionPrice/detail', 
            icon: 'hzyx', 
            name: '区代账户账户详情',
            hidden: true, 
            component: _import('finance/transactionPrice/detail'), 
            meta: { role: ['admin'], title: '区代账户账户详情', stitle:'区代', noCache: true , code: '',},
            children:[
               
          ]
          },
          {
            path: '/finance/transactionCar/transactionCarWallet/Carwallet', 
            name: '车主账户详情',  
            hidden: true,
            component: _import('finance/transactionCar/transactionCarWallet/Carwallet'), 
            meta: { role: ['admin'], title: '车主账户详情',stitle: '详情',  noCache: false }
        },
        {
            path: '/finance/transactionShipper/transactionShipperWallet/shipperwallet', 
            name: '货主账户详情',  
            hidden: true,
            component: _import('finance/transactionShipper/transactionShipperWallet/shipperwallet'), 
            meta: { role: ['admin'], title: '货主账户详情',stitle: '详情',  noCache: false }
        },
        {
            path: '/finance/anfaCash', 
            name: '安发账户概况',  
            icon: 'afzhgk', 
            hidden: false,
            component: _import('finance/anfaCash/index'), 
            meta: { role: ['admin'], title: '安发账户概况',stitle: '账户',  noCache: false , code :'FINANCE_PLATFORM_SURVEY'}
        },
        {
            path: '/finance/insure', 
            name: '投保记录',  
            icon: 'sjzd', 
            hidden: false,
            component: _import('finance/insure/index'), 
            meta: { role: ['PAInsurance'], title: '投保记录',stitle: '投保',  noCache: false , code :'FINANCE_GOODS_INSURE'}
        },
        {
            path: '/finance/bailManage', 
            name: '保证金管理',  
            icon: 'ghtd', 
            hidden: false,
            component: _import('finance/bailManage/index'), 
            meta: { role: ['admin'], title: '保证金管理',stitle: '司机',  noCache: false , code :'FINANCE_DESPOSIT_MANAGE'}
        },
        {
            path: '/finance/bankCard', 
            name: '银行卡管理',  
            icon: 'tcdd', 
            hidden: false,
            component: _import('finance/bankCard/index'), 
            meta: { role: ['admin'], title: '银行卡管理',stitle: '银行卡管理',  noCache: false , code :'FINANCE_BANKCARD_MANAGE'}
        },
        {
            path: '/finance/bankCard/bandCardDetails', 
            name: '银行卡详情',  
            hidden: true,
            component: _import('finance/bankCard/bandCardDetails'), 
            meta: { role: ['admin'], title: '银行卡详情',stitle: '银行卡',  noCache: false }
        },
  ]
}

import fetch from '@/utils/fetch'
const baseurl = 'aflc-uc'
const baseurl_two = 'aflc-order'
// 订单日趋势表
export function orderStatistics(data) {
  return fetch({
    url: '/' + baseurl_two + '/order/aflcOrder/v1/orderStatistics',
    method: 'post',
    data
  })
}

// 订单响应时效明细
export function orderResponseAging(page, pagesize, data) {
  return fetch({
    url: '/' + baseurl_two + '/order/aflcOrder/v1/orderResponseAging',
    method: 'post',
    data: {
      'currentPage': page,
      'pageSize': pagesize,
      'vo': data
    }
  })
}

// 订单响应时效明细Excle
export function orderResponseAgingExcel(page, pagesize, data) {
  return fetch({
    url: '/' + baseurl_two + '/order/aflcOrder/v1/orderResponseAgingExcel',
    responseType: 'blob',
    method: 'post',
    data: {
      'currentPage': page,
      'pageSize': pagesize,
      'vo': data
    }
  })
}

// 货主日趋势表
export function dateTrendTableShipper(data) {
    return fetch({
      url: '/' + baseurl + '/usercenter/aflcShipper/v1/dateTrendTable',
    method: 'post',
    data
  })
}

// 车主日趋势表
export function dateTrendTableDriver(data) {
  return fetch({
    url: '/' + baseurl + '/usercenter/aflcDriver/v1/dateTrendTable',
  method: 'post',
  data
})
}
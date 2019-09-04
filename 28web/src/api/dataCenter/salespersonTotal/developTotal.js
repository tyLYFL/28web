import fetch from '@/utils/fetch'

const baseurl = 'aflc-uc'
// const baseurl = 'aflcusercenterservice-xmy'

// 获取业务员发展报表
export function data_post_findBusinessDevelopCaseList(data) {
  return fetch.post('/' + baseurl + '/usercenter/userData/v1/findBusinessDevelopCaseList', data)
}

// 导出业务员发展报表
export function data_post_exportBusinessDevelopCaseExcel(data) {
  return fetch({
    url: '/' + baseurl + '/usercenter/userData/v1/exportBusinessDevelopCaseExcel',
    responseType: 'blob',
    method: 'post',
    data: data
  })
}

// 获取业务员提成报表
export function data_post_findSalesmanNamePercentageList(data) {
  return fetch.post('/' + baseurl + '/usercenter/userData/v1/findSalesmanNamePercentageList', data)
}

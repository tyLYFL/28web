import fetch from '@/utils/fetch'
const baseurl = 'aflc-uc'
// 获取资金账户列表
export function data_aflcFundAccount(page, pagesize, data) {
  return fetch({
    url: '/' + baseurl + '/usercenter/aflcFundAccount/v1/list',
    method: 'post',
    data: {
      'currentPage': page,
      'pageSize': pagesize,
      'vo': data
    }
  })
}

// 资金账户获取Id
export function aflcFundAccountId(id) {
  return fetch({
    url: '/' + baseurl + '/usercenter/aflcFundAccount/v1/' + id,
    method: 'get'

  })
}

//  增加资金账户
export function aflcFundAccountAdd(data) {
    return fetch.post('/' + baseurl + '/usercenter/aflcFundAccount/v1/add', data)
}

//  修改资金账户
export function aflcFundAccountUpdate(data) {
  return fetch.put('/' + baseurl + '/usercenter/aflcFundAccount/v1/update', data)
}

//  资金账户启用禁用
export function openOrForbidden(data) {
  return fetch.post('/' + baseurl + '/usercenter/aflcFundAccount/v1/openOrForbidden', data)
}

// 获取资金账户明细列表
export function data_aflcFundAccountDetail(page, pagesize, data) {
    return fetch({
      url: '/' + baseurl + '/usercenter/aflcFundAccountDetail/v1/list',
      method: 'post',
      data: {
        'currentPage': page,
        'pageSize': pagesize,
        'vo': data
      }
    })
}

// 获取资金账户明细列表Excel
export function aflcFundAccountDetailExcel(page, pagesize, data) {
    return fetch({
      url: '/' + baseurl + '/usercenter/aflcFundAccountDetail/v1/listExcel',
      responseType: 'blob',
      method: 'post',
      data: {
        'currentPage': page,
        'pageSize': pagesize,
        'vo': data
      }
    })
  }
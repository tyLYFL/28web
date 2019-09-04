import fetch from '@/utils/fetch'

const baseurl = "aflc-sm"
// const baseurl = "aflcsmservice-wtc"
//获取货主奖励列表
export function data_get_shipperOwnerFrom_list(page,pagesize,data) {
    return fetch({
      url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/list',
      method: 'post',
      data:{
        "currentPage": page,
        "pageSize": pagesize,
        "vo": data
      }
    })
  }   

//删除货主奖励列表
export function data_Del_shipperOwnerFrom(id) {
    
    return fetch({
          url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/delete/'+id,
          method: 'delete',
        })
      }
//启用禁用货主奖励列表
export function data_Able_shipperOwnerFrom(ids) {
     return fetch({
              url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/enableOrDisable',
              method: 'post',
              data:ids
            })
          }
    
//  修改货主奖励列表
export function data_get_shipperOwnerFrom_update(data) {
      return fetch.put('/' + baseurl + '/sm/aflcShipperPreferential/v1/updateNew', data)
    }      



 //id货主订单金额奖励
 export function data_get_shipperOwnerFrom1_Id(id) {
  return fetch({
    url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/query/'+id,
    method: 'get',
  })
}

 //reward_id获取货主所有订单金额奖励明细
 export function data_get_shipperOwnerFrom2_Id(id) {
  return fetch({
    url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/' + id,
    method: 'get',
  })
}

 //获取货主奖励上限
 export function data_get_areaCode_rewardMax(areaCode) {
  return fetch({
    url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/address/'+ areaCode,
    method: 'get',
  })
}

//货主奖励列表新增2
export function data_get_shipperOwnerFrom_createNew(data) {
  return fetch.post('/' + baseurl + '/sm/aflcShipperPreferential/v1/addNew', data)
}

 //id货主订单金额奖励
export function data_get_shipperPreferDetail_Id(id) {
  return fetch({
    url: '/'+baseurl+'/sm/aflcShipperPreferential/v1/shipperPreferDetail/' + id,
    method: 'get',
  })
}
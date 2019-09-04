import fetch from '@/utils/fetch'

const baseurl = 'aflc-uc'
// const baseurl = "aflcorderservice"

// 货主概况统计
export function DCShipperCount(data) {
  return fetch({
    url: '/' + baseurl + '/usercenter/shipperSurvey/v1/findShipperSurvey',
    method: 'post',
    data: data
  })
}

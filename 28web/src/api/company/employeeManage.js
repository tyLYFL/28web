import fetch from '@/utils/fetch'
const baseUrl = 'aflc-common'
// const baseUrl = 'aflccommonservice-lyw'

/**
 * 获取指定网点的所有下级节点
 * @param {*} orgid 网点ID
 */
export function getGroupName(orgid) {
  return fetch.get('/'+baseUrl+'/system/org/v1/getChildInfo/' + orgid).then(res => {
    return res.data || []
  })
}
/**
 * 过滤树中的某个节点及其子节点数据
 * @param {*} data 数组结构的树
 */
/* function getOrgChild(data, id) {
  // 1.遍历数据的第一层
  const res = data.filter(el => {
    if (el.id === id) {
      return true
    }
  })
  // 2.找到则不再遍历子节点
  if (res.length) {
    // 正常情况下，id值唯一
    return res
  } else {
    // 3.找不到数据则寻找遍历子节点
    data.map(el => {
      if (el.children && el.children.length) {
        const find = getOrgChild(el.children, id)
        if (find.length) {
          res.push(find[0])
        }
      }
    })
    // 4.找到数据则返回
    if (res.length) {
      return res
    } else {
      // 5.否则返回空数组
      return []
    }
  }
} */
/**
 * 获取所有网点的信息，树形结构
 * 过滤掉无效的网点
 */
const LocalAllOrgInfo = {}
export function getAllOrgInfo(orgId, isRefresh) {
  return fetch.get('/'+baseUrl+'/system/org/v1/tree/' + orgId).then(res => {
    const data = res.data || []
    LocalAllOrgInfo[orgId] = data
    return data
  })

  // 如果是强制刷新或者无本地缓存则请求服务器
  /* if (isRefresh || (!LocalAllOrgInfo[orgId])) {
    return fetch.get('/'+baseUrl+'/system/org/v1/tree/' + orgId).then(res => {
      const data = res.data || []
      LocalAllOrgInfo[orgId] = data
      return data
    })
  } else {
    return new Promise(resolve => {
      resolve(LocalAllOrgInfo[orgId])
    })
  }*/

  /* return fetch.get('/'+baseUrl+'/system/org/v1/tree').then(res => {
    let data = res.data
    if (orgid) {
      data = getOrgChild(data, orgid)
    }
    return data || []
  }) */
}
/** 返回全部的数据 */
export function postAllOrgInfo(orgId, isRefresh) {
  return fetch.post('/'+baseUrl+'/system/org/v1/tree/' + orgId).then(res => {
    const data = res.data || []
    LocalAllOrgInfo[orgId] = data
    return data
  })
}
/**
 * 获取指定网点的部门信息
 * @param {*} orgid 网点id
 */
export function getDepartmentInfo(orgId) {
  return fetch.get('/'+baseUrl+'/system/dict/v1/selectDictInfo', {
    params: {
      dictType: 'department_type',
      orgId
    }
  }).then(res => {
    return res.data || []
  })
}
/**
 * 获取指定网点的权限信息
 * @param {*} orgid 网点id
 * @param {*} pagesize 获取权限列表的长度
 */
export function getAuthInfo(orgid, pageSize = 50, currentPage = 1) {
  return fetch.post('/'+baseUrl+'/system/role/v1/findAllInfo', {
    currentPage,
    pageSize,
    vo: {
      orgid,
      rolesName: ''
    }
  }).then(res => {
    return res.data || { total: 0, list: [] }
  })
}

/**
 * 获取全部用户
 * @param {*} name 姓名
 * @param {*} orgid 组织ID
 */
// export function getAllUser(orgid, name, mobilephone, pageSize = 100, currentPage = 1) {
export function getAllUser(orgid, name, mobilephone, pageSize, currentPage) {

  let params = orgid
  if (typeof orgid !== 'object') {
    params = { pageSize, currentPage, vo: {
      name, orgid, mobilephone
    }
    }
  }
  return fetch.post('/'+baseUrl+'/system/user/v1/findAllInfo', params).then(res => {
    return res.data || { total: 0, list: [] }
  })
}

/**
 * 获取当前网点的全部用户
 * @param {*} name 姓名
 * @param {*} orgid 组织ID
 */
export function getAllOrgUser(orgid, name, mobilephone, pageSize = 100, currentPage = 1) {
  let params = orgid
  if (typeof orgid !== 'object') {
    params = { pageSize, currentPage, vo: {
      name, orgid, mobilephone
    }
    }
  }
  return fetch.post('/'+baseUrl+'/system/user/v1/findAllInfoByOrgId', params).then(res => {
    return res.data || { total: 0, list: [] }
  })
}

/**
 * 获取指定组织的信息
 * @param {*} orgid 组织id
 */
export function getOrgInfo(orgid) {
  return Promise.all([getGroupName(orgid), getDepartmentInfo(orgid), getAuthInfo(orgid)])
}
/**
 * 新建员工
 * @param {*} data 要传输的数据
 */
export function postEmployeer(data) {
  return fetch.post('/'+baseUrl+'/system/user/v1/', data)
}
/**
 * 修改员工
 * @param {*} data 要传输的数据
 */
export function putEmployeer(data) {
  return fetch.put('/'+baseUrl+'/system/user/v1/', data)
}
/**
 * 删除员工
 * @param {*} data 要传输的数据
 */
export function deleteEmployeer(id) {
  return fetch.delete('/'+baseUrl+'/system/user/v1/' + id)
}
/**
 * 修改员工的权限信息
 * @param {*} data 员工权限数据
 */
export function putEmployeerAuth(data) {
  return fetch.put('/'+baseUrl+'/system/user/v1/usersAuth', data)
}

/**
 * 强制修改账号密码
 * @param {*} data 密码和账号
 */
export function resetPlatformAdminPassword(data) {
    return fetch.put('/aflc-common/common/aflcCommonUser/v1/resetPlatformAdminPassword', data)
}

/**
 * 设置员工离职
 * @param {*} id 员工离职
 */
export function userDimissionConfig(id) {
  return fetch.delete('/'+baseUrl+'/system/user/v1/'+id+'/userDimission')
}

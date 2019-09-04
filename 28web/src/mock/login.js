import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    company: '广州安发物流',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    otherinfo: {
      personal: {
        name: '张三丰',
        mobile: '13428809315',
        username: 'baguaquan'
      },
      company: {
        name: '共产党集团',
        branch: '广州市中心',
        department: '财务部',
        position: '出纳'
      }
    }
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

/* var 真实接口 = {
  "status": 200,
  "data": [
      {
          "id": 36,
          "username": "fangjian",
          "password": null,
          "orgId": 4,
          "orgName": "广州白云",
          "departmentId": 4,
          "departmentName": null,
          "position": "5",
          "mobilephone": "13825160872",
          "createTime": 1524652461000,
          "updateTime": 1524652463000,
          "delFlag": "0",
          "rolesId": "2",
          "rolesIdList": [
              2
          ],
          "rolesName": "财务",
          "rolesNameList": [
              "财务"
          ],
          "sexFlag": "0",
          "loginAccount": "fangj"
      }
  ],
  "text": "success",
  "errorInfo": null
} */

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    return {"status":200,"data":{"id":2,"username":"fangjian","password":null,"type":"tms","createTime":1525889025000,"updateTime":1526464928000,"delFlag":"0","userId":2,"orgid":1,"sexFlag":"0","departmentId":21,"name":"方总监","position":"技术经理","mobilephone":"13825160872","orgName":"山东卓鑫","departmentName":"调度部","rolesId":"3","rolesIdList":[3],"rolesName":"调度","rolesNameList":["调度"],"companyName":"山东卓鑫","companyId":1},"text":"请求成功","errorInfo":null}
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      const user = {
        code: 20000,
        data: userMap[token]
      }
      /* return {
        code: 50001,
        data: 'cuo wu'
      } */
      return user
    } else {
      return false
    }
  },
  logout: () => {
    return {
      code: 20000
    }
  }
}

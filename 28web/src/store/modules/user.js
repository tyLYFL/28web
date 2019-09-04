import Vue from 'vue'
import { login, logout, getInfo } from '@/api/login'
import { getAllSetting } from '@/api/company/systemSetup'
import { getToken, setToken, removeToken, setUsername, setOrgId, getOrgId, getUsername, setUserInfo, removeUserInfo, removeUsername, removeOrgId } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    username: '',
    company: '',
    avatar: '',
    roles: [],
    otherinfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_COMPANY: (state, company) => {
      state.company = company
    },
    SET_OTHERINFO: (state, otherinfo) => {
      state.otherinfo = otherinfo
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password, userInfo.accNum).then(response => {
          const data = response
          setToken(data.access_token)
          setUsername(username)
          setOrgId(userInfo.accNum)
          commit('SET_TOKEN', data.access_token)
          commit('SET_USERNAME', username)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端设置token信息
    FeLogin({ commit }, token) {
      return new Promise((resolve, reject) => {
        console.log('feLogin:', token)
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          // console.log('response',data,sexFlag)
          // data.rolesIdList = data.rolesId.split(',')
          commit('SET_ROLES', data.rolesIdList)
          commit('SET_NAME', data.username)
          commit('SET_USERNAME', data.username)
          setUsername(data.username)
          commit('SET_COMPANY', data.orgName)
          setOrgId(data.orgid)
          commit('SET_AVATAR', require(data.sexFlag === '1' ? '../../assets/gril.png' : '../../assets/boy.png' ))
          data.roleTree = JSON.parse(data.jsonTree) || null

         // 如果有访问系统设置的权限，则先获取下系统设置信息，有利于后面的操作
          // if (Vue.prototype.$_has_permission('SETTING')) {
            // getAllSetting({
            //     orgid: data.orgid,
            //     type: '',
            //     module: 'order'
            //   }).then(res => {
            //     data.systemSetup = res
                commit('SET_OTHERINFO', data)
                setUserInfo(data)
                resolve({ data })
            //   }).catch(error => {
            //     data.systemSetup = {}
            //     commit('SET_OTHERINFO', data)
            //     setUserInfo(data)
            //     resolve({ data })
                // reject(error)
            //   })
            // } else {
            //   data.systemSetup = {}
            //   commit('SET_OTHERINFO', data)
            //   setUserInfo(data)
            //   resolve({ data })
            // }
          }).catch(error => {
            reject(error)
          })
        /* Promise.all([getInfo(),getAllSetting({})]).then(arr => {
          let response = arr[0]
          let systemSetup = arr[1]
          const data = response.data
          data.rolesIdList = data.rolesId.split(',')
          commit('SET_ROLES', data.rolesIdList)
          commit('SET_NAME', data.username)
          commit('SET_USERNAME', data.username)
          setUsername(data.username)
          commit('SET_COMPANY', data.orgName)
          setOrgId(data.orgid)
          commit('SET_AVATAR', require('../../assets/role.png'))
          commit('SET_OTHERINFO', data)
          setUserInfo(data)
          resolve({ data })
        }).catch(error => {
          reject(error)
        }) */
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        removeUserInfo()
        removeOrgId()
        removeUsername()
        resolve()
      })
    }
  }
}

export default user

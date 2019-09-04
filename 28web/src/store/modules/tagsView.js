const tagsView = {
    state: {
      visitedViews: [],
      cachedViews: []
    },
    mutations: {
      ADD_VISITED_VIEWS: (state, view) => {
        // 判断是否已经添加过
        // 判断是否需要新开一个tab，通过参数tab设置
        if (view.query.tab) {
          if (state.visitedViews.some(v => v.fullPath === view.fullPath)) return
        } else {
          if (state.visitedViews.some(v => v.path === view.path)) return
        }
        // console.log('add view:', view.query.tab, view.name)
        // 针对tab子页面
        if (view.meta.istab && state.visitedViews.some(v => v.title === view.meta.ptitle)) {
          // 如果已存在相同的父级，则更新其链接，不新增tab
          state.visitedViews.forEach(ele => {
            if (ele.title === view.meta.ptitle) {
              ele.path = view.path
              ele.fullPath = view.fullPath
            }
          })
        } else {
          state.visitedViews.push({
            name: view.query.tab || view.name,
            path: view.path,
            fullPath: view.fullPath,
            tab: view.query.tab || '',
            lock: false,
            title: view.query.tab || view.meta.ptitle || view.meta.title || '未命名',
            istab: view.meta.istab
          })
        }
  
        if (view.meta.keepAlive) {
            state.cachedViews = state.cachedViews.filter(el=>el!==view.name)
          state.cachedViews.push(view.name)
        }
      },
      DEL_VISITED_VIEWS: (state, view) => {
        for (const [i, v] of state.visitedViews.entries()) {
          if (v.fullPath === view.fullPath) {
            state.visitedViews.splice(i, 1)
            break
          }
        }
        for (const i of state.cachedViews) {
          if (i === view.name) {
            const index = state.cachedViews.indexOf(i)
            state.cachedViews.splice(index, 1)
            break
          }
        }
      },
      DEL_OTHERS_VIEWS: (state, view) => {
        for (const [i, v] of state.visitedViews.entries()) {
          if (v.fullPath === view.fullPath) {
            state.visitedViews = state.visitedViews.slice(i, i + 1)
            break
          }
        }
        for (const i of state.cachedViews) {
          if (i === view.name) {
            const index = state.cachedViews.indexOf(i)
            state.cachedViews = state.cachedViews.slice(index, i + 1)
            break
          }
        }
      },
      DEL_ALL_VIEWS: (state) => {
        state.visitedViews = []
        state.cachedViews = []
      }
    },
    actions: {
      addVisitedViews({ commit }, view) {
        commit('ADD_VISITED_VIEWS', view)
      },
      delVisitedViews({ commit, state }, view) {
        return new Promise((resolve) => {
          commit('DEL_VISITED_VIEWS', view)
          resolve([...state.visitedViews])
        })
      },
      delOthersViews({ commit, state }, view) {
        return new Promise((resolve) => {
          commit('DEL_OTHERS_VIEWS', view)
          resolve([...state.visitedViews])
        })
      },
      delAllViews({ commit, state }) {
        return new Promise((resolve) => {
          commit('DEL_ALL_VIEWS')
          resolve([...state.visitedViews])
        })
      }
    }
  }
  
  export default tagsView
  
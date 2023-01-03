import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    role: '',
    customerName: '',
    customerId: '',
    businessName: '',
    businessId: '',
    shopId: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_CUSTOMERNAME: (state, customerName) => {
    state.customerName = customerName
  },
  SET_CUSTOMERID: (state, customerId) => {
    state.customerId = customerId
  },
  SET_BUSINESSNAME: (state, businessName) => {
    state.businessName = businessName
  },
  SET_BUSINESSID: (state, businessId) => {
    state.businessId = businessId
  },
  SET_SHOPID: (state, shopId) => {
    state.shopId = shopId
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login(username.trim(), password ).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        if (state.role === 'business') {
          const { name, id } = data
          commit('SET_BUSINESSNAME', name)
          commit('SET_BUSINESSID', id)
        } else if (state.role === 'customer') {
          const { name, id } = data
          commit('SET_CUSTOMERNAME', name)
          commit('SET_CUSTOMERID', id)
        } else {
          return reject('No role login')
        }
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import request from '@/utils/request'

export function login(customerName, password) {
  return request({
    url: '/customer/login',
    method: 'post',
    data: {
      customerName: customerName,
      password: password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

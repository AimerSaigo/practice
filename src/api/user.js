import request from '@/utils/request'
import qs from 'qs'

export function login(customerName, password) {
  return request({
    url: 'https://service-b7we5cq4-1311067810.gz.apigw.tencentcs.com/release/customer/login',
    method: 'post',
    data: qs.stringify({
      customerName: customerName,
      password: password
    })
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

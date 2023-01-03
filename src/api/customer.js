import request from '@/utils/request'

export default {
  register(data) {
    return request({
      url: '/customer/register',
      method: 'post',
      data
    })
  },

  login(data) {
    return request({
      url: '/customer/login',
      method: 'post',
      data
    })
  },

  getShops() {
    return request({
      url: '/shop/getShops',
      method: 'post'
    })
  },

  getGoods(shopId) {
    return request({
      url: '/shop/getGoods',
      method: 'post',
      data: shopId
    })
  },

  placeOrder(data) {
    return request({
      url: '/order/placeOrder',
      method: 'put',
      data
    })
  },

  getOrder(customerId) {
    return request({
      url: '/order/getCustomerOrder',
      method: 'post',
      data: customerId
    })
  },

  getLineItem(orderId) {
    return request({
      url: '/order/getLineItem',
      method: 'post',
      data: orderId
    })
  },

  payOrder(orderId) {
    return request({
      url: '/order/payOrder',
      method: 'put',
      data: orderId
    })
  },

  deleteOrder(orderId) {
    return request({
      url: '/order/deleteOrder',
      method: 'put',
      data: orderId
    })
  },

  logout() {
    return request({
      url: '/vue-admin-template/user/logout',
      method: 'post'
    })
  }
}

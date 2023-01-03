import request from '@/utils/request'

export default {
  register(data) {
    return request({
      url: '/business/register',
      method: 'post',
      data
    })
  },

  login(data) {
    return request({
      url: '/business/login',
      method: 'post',
      data
    })
  },

  getShops(businessId) {
    return request({
      url: '/business/getShops',
      method: 'post',
      data: businessId
    })
  },

  addShop(data) {
    return request({
      url: '/shop/addShop',
      method: 'post',
      data
    })
  },

  getGoods(shopId) {
    return request({
      url: '/business/getGoods',
      method: 'post',
      data: shopId
    })
  },

  addGoods(data) {
    return request({
      url: '/goods/addGoods',
      method: 'post',
      data
    })
  },

  putGoods(data) {
    return request({
      url: '/goods/putGoods',
      method: 'post',
      data
    })
  },

  getOrder(shopId) {
    return request({
      url: '/order/getShopOrder',
      method: 'post',
      data: shopId
    })
  },

  confirmOrder(orderId) {
    return request({
      url: '/order/confirmOrder',
      method: 'put',
      data: orderId
    })
  },

  cancelOrder(orderId) {
    return request({
      url: '/order/cancelOrder',
      method: 'put',
      data: orderId
    })
  },

  getInfo(token) {
    return request({
      url: '/vue-admin-template/user/info',
      method: 'get',
      params: { token }
    })
  },

  logout() {
    return request({
      url: '/vue-admin-template/user/logout',
      method: 'post'
    })
  }
}

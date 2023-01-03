<template>

</template>

<script>
import customerApi from '@/api/customer'

export default {
  name: 'ShopDetails',
  data() {
    return {
      goodsId: '',
      name: '',
      price: '',
      status: '',
      shopId: '',
      goods: [],
      quality: '',
      customerId: '',
      orderId: ''
    }
  },
  created() {
    this.getallGoods()
  },
  methods: {
    getallGoods() {
      customerApi.getGoods(this.shopId).then(res => {
        this.info = res.data
      })
    },
    pickGoods() {
      customerApi.placeOrder(this.goods[this.goodsId])
    }
  }
}
</script>

<style scoped>

</style>

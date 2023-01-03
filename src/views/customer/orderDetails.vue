<template>

</template>

<script>
import customerApi from '@/api/customer'

export default {
  name: 'OrderDetails',
  data() {
    return {
      orderId: this.$store.state.orderId,
      shopId: '',
      customerId: this.$store.state.customerId,
      totPrice: '',
      status: '',
      isDeleted: '',
      goodsId: '',
      quality: '',
      goods: []
    }
  },
  created() {
    this.getOrderDetails()
  },
  methods: {
    getOrderDetails() {
      customerApi.getOrder(this.$store.state.customerId).then(res => {
        this.goods = res.data
        for (const id of this.goods) {
          if (id === this.orderId) {
            this.totPrice = id.totPrice
            this.status = id.status
            this.isDeleted = id.isDeleted
          }
        }
      })
      customerApi.getLineItem(this.orderId).then(res => {
        this.goods = res.data
      })
    },
    handlePayClick() {
      customerApi.payOrder(this.orderId).then(res => {
        if (res.statusText === '支付订单成功') {
          this.status = '已支付'
        }
      })
      this.getOrderDetails()
    },
    handleDeleteClick() {
      customerApi.deleteOrder(this.orderId)
    }
  }
}
</script>

<style scoped>

</style>

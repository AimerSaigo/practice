<template>

</template>

<script>
import businessApi from '@/api/business'

export default {
  name: 'Orders',
  data() {
    return {
      shopId: '',
      orderId: '',
      customerId: '',
      totPrice: '',
      status: '',
      isDeleted: '',
      orders: []
    }
  },
  created() {
    this.getallOrders()
  },
  methods: {
    getallOrders() {
      businessApi.getOrder(this.$store.state.shopId).then(res => {
        this.orders = res.data
      })
    },
    handleConfirmClick() {
      businessApi.confirmOrder(this.orderId)
      this.getallOrders()
    },
    handleCancelClick() {
      businessApi.cancelOrder(this.orderId)
      this.getallOrders()
    }
  }
}
</script>

<style scoped>

</style>

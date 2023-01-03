<template>
  <div>orders</div>
</template>

<script>
import customerApi from '@/api/customer'

export default {
  name: 'Orders',
  data() {
    return {
      orderId: '',
      shopId: '',
      customerId: '',
      totPrice: '',
      status: '',
      deleted: '',
      orders: []
    }
  },
  created() {
    this.getallOrders()
  },
  methods: {
    getallOrders() {
      customerApi.getOrder(this.$store.state.customerId).then(res => {
        this.orders = res.data
      })
    },
    handleClick(orderId) {
      this.$router.push('/customer/orders/${orderId}')
      this.$store.state.orderId = orderId
    }
  }
}
</script>

<style scoped>

</style>

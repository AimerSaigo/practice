<template>
  <div class="customer-order">
    <el-card v-for="order in orders" :key="order" @click="handleClick(order.id)">
      {{ order.id}}
      {{ order.shopId }}
      {{ order.totPrice }}
    </el-card>
  </div>
</template>

<script>
import customerApi from '@/api/customer'
import axios from 'axios'

export default {
  name: 'Orders',
  data() {
    return {
      orderId: '',
      shopId: '',
      customerId: this.$store.getters.customerId,
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
      axios.post('/order/getCustomerOrder',this.customerId).then(res => {
        this.orders = res.data
      })
    },
    handleClick(orderId) {
      this.$store.commit('SET_ORDERID', orderId)
      this.$router.push('/customer/orderDetails')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="business-orders">
    <el-card v-for="order in orders" :key="order">
      {{ order.id }}
      {{ order.totPrice}}
      {{ order.customerId }}
      {{ order.status }}
      <el-button type="primary" @click="handleConfirmClick(order.id)"></el-button>
      <el-button type="danger" @click="handleCancelClick(order.id)"></el-button>
    </el-card>
  </div>
</template>

<script>
import businessApi from '@/api/business'
import axios from 'axios'

export default {
  name: 'Orders',
  data() {
    return {
      shopId: this.$store.getters.shopId,
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
      axios.get('/order/getShopOrder', this.shopId).then(res => {
        this.orders = res.data
      })
    },
    handleConfirmClick(orderId) {
      axios.put('/order/confirmOrder', orderId)
      this.getallOrders()
    },
    handleCancelClick(orderId) {
      axios.put('/order/cancelOrder', orderId)
      this.getallOrders()
    }
  }
}
</script>

<style scoped>

</style>

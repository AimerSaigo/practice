<template>
  <div class="customer-orderDetails">
    <el-card>
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <div v-for="good in goods" :key="good" class="text item">
        {{ good.goods.name }}
        {{ good.quality }}
        {{ good.linePrice }}
      </div>
    </el-card>
  </div>
</template>

<script>
import customerApi from '@/api/customer'
import axios from 'axios'

export default {
  name: 'OrderDetails',
  data() {
    return {
      orderId: this.$store.getters.orderId,
      shopId: '',
      customerId: this.$store.getters.customerId,
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
      axios.post('/order/getLineItem', this.orderId).then(res => {
        this.goods = res.data
      })
    },
    handlePayClick() {
      axios.put('/order/payOrder', this.orderId)
      this.getOrderDetails()
    },
    handleDeleteClick() {
      axios.put('/order/deleteOrder', this.orderId)
      this.getOrderDetails()
    }
  }
}
</script>

<style scoped>

</style>

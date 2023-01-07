<template>
  <div class="customer-shopDetails">
    <el-card v-for="good in goods" :key="good">
      {{ good.name }}
      {{ good.price }}
      {{ good.status}}
      <el-button type="primary" @click="handlePick(good)">
        +1
      </el-button>
    </el-card>
  </div>
</template>

<script>
import customerApi from '@/api/customer'
import axios from 'axios'

export default {
  name: 'ShopDetails',
  data() {
    return {
      goodsId: '',
      name: '',
      price: '',
      status: '',
      shopId: this.$store.getters.shopId,
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
    // getallGoods() {
    //   customerApi.getGoods(this.$store.state.shopId).then(res => {
    //     this.goods = res.data
    //   })
    // },
    getallGoods() {
      console.log(Number(this.shopId))
      axios.post('/shop/getGoods', Number(this.shopId)).then(res => {
        this.goods = res.data
        console.log(this.goods)
        console.log(res.data)
      })
    },
    handlePick(good) {
      axios.put('/order/placeOrder',{
        customer.id: this.$store.getters.customerId,
        goods.id: good.id,
        quality: 1,
        shop.id: this.$store.getters.shopId
      })
    }
  }
}
</script>

<style scoped>

</style>

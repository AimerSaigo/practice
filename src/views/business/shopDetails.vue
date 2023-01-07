<template>

</template>

<script>
import businessApi from '@/api/business'
import axios from 'axios'

export default {
  name: 'ShopDetails',
  data() {
    return {
      businessId: this.$store.getters.businessId,
      shopId: '',
      goodId: '',
      name: '',
      price: '',
      status: '',
      goods: []
    }
  },
  created() {
    this.getallGoods()
  },
  method: {
    getallGoods() {
      console.log(Number(this.shopId))
      axios.post('/shop/getGoods', Number(this.shopId)).then(res => {
        this.goods = res.data
        console.log(this.goods)
        console.log(res.data)
      })
    },
    handleCreateClick() {
      axios.post('/goods/addGoods', this.businessId, this.name, this.price)
      this.getallGoods()
    },
    handlePutClick(goodId) {
      axios.post('/goods/putGoods', goodId, this.shopId)
      this.getallGoods()
    }
  }
}
</script>

<style scoped>

</style>

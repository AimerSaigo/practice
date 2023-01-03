<template>

</template>

<script>
import businessApi from '@/api/business'

export default {
  name: 'ShopDetails',
  data() {
    return {
      businessId: '',
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
      businessApi.getGoods(this.$store.state.shopId).then(res => {
        this.goods = res.data
      })
    },
    handleCreateClick() {
      businessApi.addGoods(this.businessId, this.name, this.price)
      this.getallGoods()
    },
    handlePutClick() {
      businessApi.putGoods(this.goodId, this.shopId)
      this.getallGoods()
    }
  }
}
</script>

<style scoped>

</style>

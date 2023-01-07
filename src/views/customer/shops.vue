<template>
  <div class="customer-shops" style="padding-top: 20px">
    <el-card v-for="shop in shops" :key="shop" style="margin-bottom: 10px">
      {{ shop.name }}
      {{ shop.location }}
      <el-button type="primary" @click="handleClick(shop.id)">进店</el-button>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Shops',
  data() {
    return {
      id: '',
      name: '',
      location: '',
      businessId: '',
      shops: []
    }
  },
  created() {
    this.getallShops()
  },
  methods: {
    getallShops() {
      axios.post('/shop/getShops').then(res => {
        this.shops = res.data
        console.log(this.shops)
      })
    },
    handleClick(shopId) {
      this.$store.commit('user/SET_SHOPID', shopId)
      this.$router.push('/customer/shopDetails')
    }
  }
}
</script>

<style scoped>

</style>

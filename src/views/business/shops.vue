<template>
  <div class="business-shops">
    <el-card v-for="shop in shops" :key="shop" @click="handleDetailClick(shop.id)" >
      {{ shop.name }}
      {{ shop.location }}
    </el-card>
  </div>
</template>

<script>
import businessApi from '@/api/business'
import axios from 'axios'

export default {
  name: 'Shops',
  data() {
    return {
      businessId: this.$store.getters.businessId,
      shopId: '',
      name: '',
      location: '',
      shops: [],
      dialogFormVisible: false,
      form: {
        name: '',
        location: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
  },
  methods: {
    getallShops() {
      axios.post('/business/getShop', this.businessId).then(res => {
        this.shops = res.data
      })
    },
    handleDetailClick(shopId) {
      this.$store.commit('user/SET_SHOPID', shopId)
      this.$router.push('/business/shopDetails')
    },
    handleCreateClick() {
      axios.post('/shop/addShop', {
        businessId: this.businessId,
        location: this.location,
        name: this,name
      })
      this.dialogFormVisible = false
      this.getallShops()
    }
  }
}
</script>

<style scoped>

</style>

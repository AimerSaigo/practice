<template>

</template>

<script>
import businessApi from '@/api/business'

export default {
  name: 'Shops',
  data() {
    return {
      businessId: '',
      shopId: '',
      name: '',
      location: '',
      shops: []
    }
  },
  created() {
  },
  methods: {
    getallShops() {
      businessApi.getShops(this.$store.state.businessId).then(res => {
        this.shops = res.data
      })
    },
    handleDetailClick(id) {
      this.$router.push('/shops/${id}')
    },
    handleCreateClick() {
      businessApi.addShop(this.businessId, this.location, this.name)
      this.getallShops()
    }
  }
}
</script>

<style scoped>

</style>

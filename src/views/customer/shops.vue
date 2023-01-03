<template>

</template>

<script>
import customerApi from '@/api/customer'

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
      customerApi.getShops().then(res => {
        this.shops = res.data
      })
    },
    handleClick(id) {
      this.$router.push('/shops/${id}')
    }
  }
}
</script>

<style scoped>

</style>

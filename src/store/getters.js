const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  role: state => state.user.role,
  customerName: state => state.user.customerName,
  customerId: state => state.user.customerId,
  businessName: state => state.user.businessName,
  businessId: state => state.user.businessId,
  shopId: state => state.user.shopId,
  permission_routers: state => state.permission.routes,
  addRouters: state => state.permission.addRouters
}
export default getters

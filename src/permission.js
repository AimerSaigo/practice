import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in

  // if (to.path === '/login') {
  //   // if is logged in, redirect to the home page
  //   next({ path: '/' })
  //   NProgress.done()
  // } else {
  //   const hasRoles = store.getters.role && store.getters.role.length > 0// 这里指的是src/store/getters.js的roles
  //   console.log(hasRoles)
  //   // 判断是否已经有roles了
  //   if (hasRoles) {
  //     next()
  //   } else {
  //     try {
  //       // get user info
  //       // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
  //       // 获取roles
  //       const { roles } = store.state.role// 第一步
  //       // generate accessible routes map base on roles
  //       // 获取通过权限验证的路由
  //       const accessRoutes = await store.dispatch('permission/generateRoutes', roles)// 第二步
  //       // 更新加载路由
  //       router.options.routes = store.getters.permission_routes// 第三步
  //       // dynamically add accessible routes
  //       router.addRoutes(accessRoutes)
  //       console.log(store)
  //       // hack method to ensure that addRoutes is complete
  //       // set the replace: true, so the navigation will not leave a history record
  //       next({ ...to, replace: true })
  //     } catch (error) {
  //       // remove token and go to login page to re-login
  //       await store.dispatch('user/resetToken')
  //       Message.error(error || 'Has Error')
  //       next(`/login?redirect=${to.path}`)
  //       NProgress.done()
  //     }
  //   }
  const hasRoles = store.getters.role.length > 0
  if (hasRoles === false) {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  } else {
    if (store.getters.permission_routers.length !== 0) {
      next()
    } else {
      const role = store.getters.role
      const accessRoutes = await store.dispatch('permission/generateRoutes', role)
      // eslint-disable-next-line require-atomic-updates
      console.log(accessRoutes)
      router.options.routes = store.getters.permission_routers
      router.addRoutes(accessRoutes)
      next({ ...to, replace: true })
      NProgress.done()
    }
  }

  // if (whiteList.indexOf(to.path) !== -1) {
  //   // in the free login whitelist, go directly
  //   next()
  // } else {
  //   // other pages that do not have permission to access are redirected to the login page.
  //   next(`/login?redirect=${to.path}`)
  //   NProgress.done()
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})



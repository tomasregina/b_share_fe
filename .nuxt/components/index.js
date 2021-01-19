export { default as ItemDetail } from '../../components/ItemDetail.vue'
export { default as ItemRow } from '../../components/ItemRow.vue'
export { default as ItemsList } from '../../components/ItemsList.vue'
export { default as Login } from '../../components/Login.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavBar } from '../../components/NavBar.vue'

export const LazyItemDetail = import('../../components/ItemDetail.vue' /* webpackChunkName: "components/ItemDetail" */).then(c => c.default || c)
export const LazyItemRow = import('../../components/ItemRow.vue' /* webpackChunkName: "components/ItemRow" */).then(c => c.default || c)
export const LazyItemsList = import('../../components/ItemsList.vue' /* webpackChunkName: "components/ItemsList" */).then(c => c.default || c)
export const LazyLogin = import('../../components/Login.vue' /* webpackChunkName: "components/Login" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar" */).then(c => c.default || c)

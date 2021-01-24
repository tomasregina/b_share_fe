import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7530724c = () => interopDefault(import('../pages/add-items.vue' /* webpackChunkName: "pages/add-items" */))
const _6eb51bee = () => interopDefault(import('../pages/items/index.vue' /* webpackChunkName: "pages/items/index" */))
const _eed7c70a = () => interopDefault(import('../pages/register-user.vue' /* webpackChunkName: "pages/register-user" */))
const _445c650a = () => interopDefault(import('../pages/sign-in.vue' /* webpackChunkName: "pages/sign-in" */))
const _b15cf366 = () => interopDefault(import('../pages/items/item/_itemId/index.vue' /* webpackChunkName: "pages/items/item/_itemId/index" */))
const _50098173 = () => interopDefault(import('../pages/items/page/_pageNumber/index.vue' /* webpackChunkName: "pages/items/page/_pageNumber/index" */))
const _252bf018 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add-items",
    component: _7530724c,
    name: "add-items"
  }, {
    path: "/items",
    component: _6eb51bee,
    name: "items"
  }, {
    path: "/register-user",
    component: _eed7c70a,
    name: "register-user"
  }, {
    path: "/sign-in",
    component: _445c650a,
    name: "sign-in"
  }, {
    path: "/items/item/:itemId",
    component: _b15cf366,
    name: "items-item-itemId"
  }, {
    path: "/items/page/:pageNumber",
    component: _50098173,
    name: "items-page-pageNumber"
  }, {
    path: "/",
    component: _252bf018,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

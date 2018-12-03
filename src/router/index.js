import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/icon',
      name: 'icon',
      component: resolve => require(['views/icons'], resolve),
      meta: {
        index: 1
      }
    },
    {
      path: '/',
      name: 'index',
      component: resolve => require(['views/home/index'], resolve),
      meta: {
        index: 1
      }
    },
    {
      path: '/me',
      name: 'me',
      component: resolve => require(['views/me/index'], resolve),
      meta: {
        index: 1
      }
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: resolve => require(['views/tracking/index'], resolve),
      meta: {
        index: 1
      }
    },
    {
      path: '/discover',
      name: 'discover',
      component: resolve => require(['views/discover/index'], resolve),
      meta: {
        index: 1
      }
    },
    {
      path: '/address/select',
      name: 'addressSelect',
      component: resolve => require(['views/address/select/index'], resolve),
      meta: {
        index: 2
      }
    },
    {
      path: '/rest/search',
      name: 'restSearch',
      component: resolve => require(['views/rest/search'], resolve),
      meta: {
        index: 2
      }
    },


  ]
})

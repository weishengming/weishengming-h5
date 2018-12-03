import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Xui from 'healen-x-ui' // 组件库
import 'healen-x-ui/packages/x-css/lib/index.css' //样式
Vue.use(Xui) // 使用

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

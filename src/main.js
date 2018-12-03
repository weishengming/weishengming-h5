import Vue from 'vue'
import VueAMap from 'vue-amap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCookies from 'vue-cookies'
import i18n from '../../weishengming-h5/common/i18n'
import App from './App.vue'
import router from './router'
import store from '../../weishengming-h5/common/vuex'
import apis from '../../weishengming-h5/common/apis'
import request from './request'
import {getLocalJSON,getLocalStr,setLocalJSON,setLocalStr} from '../../weishengming-h5/common/utils/local'
import {setLang} from '../../weishengming-h5/common/utils/lang'
import {getScrollTop,isScrollBottom,jumpById} from '../../weishengming-h5/common/utils/vwindow'
import Xui from 'healen-x-ui' // 组件库
import 'healen-x-ui/packages/x-css/lib/index.css' //样式
Vue.use(Xui) // 使用
Vue.use(VueAMap)
Vue.use(VueAwesomeSwiper)
Vue.use(VueCookies)

/***
 * vue扩展属性方法
 */
Vue.prototype.$api = apis // 获取api列表
Vue.prototype.$req = request // ajax请求公用函数
Vue.prototype.$getLocalJson = getLocalJSON // 获取localStorage 的JSON对象
Vue.prototype.$getLocal = getLocalStr // 获取非json对象的缓存
Vue.prototype.$setLocalJson = setLocalJSON // 设置json为缓存
Vue.prototype.$setLocal = setLocalStr // 设置字符串为缓存
Vue.prototype.$setLang = setLang // 设置语言
Vue.prototype.$isWechat = () => { return /wechat/.test(navigator.userAgent.toLowerCase())} // 是否是微信
Vue.prototype.$getScrollTop = getScrollTop
Vue.prototype.$isScrollBottom = isScrollBottom
Vue.prototype.$jumpById = jumpById


Vue.config.productionTip = false

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 申请的高德key
    key: apis.GDKEY,
    // 插件集合
    plugin: [
        'AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Geolocation',
        'AMap.CitySearch',
        'AMap.DistrictSearch'
    ]
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')


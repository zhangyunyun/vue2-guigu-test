/*
* 入口js
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/common.css'
import './assets/css/reset.css'
// import './assets/js/rem'

// import './styles/reset.scss';
// import './styles/normalize.scss';
// import './styles/common.scss';
// import './assets/iconfont/iconfont.css';
// import './assets/font-awesome/css/font-awesome.css';

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 引入整个 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Antd, { version } from 'ant-design-vue'
console.log('ant-design-vue version:', version)
import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'
Vue.use(Antd)

// 导入icon-font
import './assets/iconfont/iconfont.js'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error:require('./assets/images/logo-red.png'),
  loading:require('./assets/images/loding.gif'),
  attempt: 1
})

Vue.config.productionTip = false

/*eslint-disable no-new*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

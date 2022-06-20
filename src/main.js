import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import store from './store';
import '@/styles/element-variables.scss'
import '@/styles/index.scss' // global css

import './icons' // icon
import './permission';

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://sheshouzuo.mengotech.com/admin';
Vue.prototype.$ajax = axios;

const RouterConfig = {
  routes: router
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.prototype.$axios = axios;
import 'lib-flexible';
import "../public/font/iconfont.css";
import 'amfe-flexible';
import VueLazyload from 'vue-lazyload';
const Bus = new Vue();
Vue.prototype.$bus = Bus;
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'img/load.jpg',
  loading: 'img/load.jpg',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
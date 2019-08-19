import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Default from "./layouts/Default.vue";

Vue.component("default-layout", Default);
Vue.config.productionTip = false

require('@/assets/css/bootstrap.css')
require('@/assets/css/css_slider.css')
require('@/assets/css/font-awesome.min.css')
require('@/assets/css/single.css')
require('@/assets/css/style.css')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

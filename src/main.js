import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Default from "./layouts/Default.vue";
import axios from "axios";
import  store  from "@/util/store.js";


Vue.component("default-layout", Default);
Vue.config.productionTip = false
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://admin.tabbysurprises.com"
    : "http://localhost:8000/api/";
require('@/assets/css/bootstrap.css')
require('@/assets/css/css_slider.css')
require('@/assets/css/font-awesome.min.css')
require('@/assets/css/single.css')
require('@/assets/css/style.css')

async function initApp(){
  await axios
  .get(BASE_URL + "token")
  .then(res => store.setToken(res.data.token));
  store.state.axios = axios.create({
    baseURL : BASE_URL,
    timeout:1000,
    headers: {'apiToken':store.state.token}
  });
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}
initApp();
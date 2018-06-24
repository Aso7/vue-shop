import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import "./assets/font/iconfont.css"
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import http from "@/utils/request.js"
import Toast from "j-toast"
Vue.use(Toast,{
  name:'Toast',
  timeout:2000
})
Vue.use(VueAwesomeSwiper)
Vue.use(http)
Vue.config.productionTip = false

//lazyload
import Lazyload from "vue-lazyload"
Vue.use(Lazyload,{
  loading:"../static/images/loading.gif"
})

//Vuex
import Store from "./store/store"

//import Vuelidate from "veulidate"
//Vue.use(Vuelidate)
new Vue({
  el: '#app',
  router,
  store:Store,
  render: h => h(App)
})

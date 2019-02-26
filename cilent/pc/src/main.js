// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import vueSwiper  from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Axios from 'axios';
Axios.defaults.baseURL="http://localhost:8899";
Vue.prototype.$http=Axios

//全局函数的使用
import untils from '../src/utils/base'
Vue.prototype.$untils=untils;

//全局过滤器统一处理加载
import filters from '../src/utils/filters';
Object.keys(filters).forEach(k => {
  Vue.filter(k, filters[k])
});

//获取dom元素
Vue.prototype.$ = document.querySelectorAll.bind(document);

Vue.config.productionTip = false
Vue.use(iView);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

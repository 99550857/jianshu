import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrapvue from 'bootstrap-vue'


Vue.use(jquery);
Vue.use(bootstrapvue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

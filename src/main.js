import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrapvue from 'bootstrap-vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import library from '@fortawesome/fontawesome'
import FontAwesomeIcon  from '@fortawesome/vue-fontawesome'
import ffs  from '@fortawesome/fontawesome-free-solid'
import light from '@fortawesome/fontawesome-free-brands'


library.library.add(ffs);
library.library.add(light)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(jquery);
Vue.use(bootstrapvue);
// library.add(faCoffee);
// Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

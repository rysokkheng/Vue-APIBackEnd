import Vue from 'vue'
import Vuex from "vuex"
import App from './App'
import router from './router'
import { store } from "./store/index.js"
import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/main.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/simple-sidebar.css';
import './assets/vendor/jquery/jquery.min.js';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { BootstrapVue, IconsPlugin ,VBTooltipPlugin,FormPlugin,FormGroupPlugin,FormDatepickerPlugin ,FormCheckboxPlugin ,FormSelectPlugin   } from 'bootstrap-vue'
import Vuetify from 'vuetify';

Vue.use(FormSelectPlugin);
Vue.use(VBTooltipPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormPlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Vuex);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
})

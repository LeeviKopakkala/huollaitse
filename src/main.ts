import { BootstrapVue } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret, faSearch, faArrowRight, faCar, faTools, faCalendar, faCalendarAlt, faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueScrollTo from 'vue-scrollto';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/css/global.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.use(VueAxios, axios);
library.add(faUserSecret);
library.add(faSearch);
library.add(faArrowRight);
library.add(faCar);
library.add(faTools);
library.add(faCalendar);
library.add(faCalendarAlt);
library.add(faToolbox);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init({
      once: true,
    });
  },
  render: (h) => h(App),
}).$mount('#app');

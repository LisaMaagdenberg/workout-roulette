import Vue from 'vue';
import router from './vue-routes.es6';
require('../styles/bootstrap.min.css');
require('../styles/style.scss');

new Vue({
  router,
}).$mount('#app');

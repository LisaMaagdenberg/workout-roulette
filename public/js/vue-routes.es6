import Home from './../vue-components/Home.vue';
import ErrorPage from './../vue-components/Error.vue';
// import Admin from './../vue-components/Admin.vue';
// import Shop from './../vue-components/Shop.vue';
// import About from './../vue-components/About.vue';
// import Blog from './../vue-components/Blog.vue';
// import Patterns from './../vue-components/Patterns.vue';
// import Books from './../vue-components/Books.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const NotFound = { template: '<p>Page not found</p>' };

const routes = [
  { path: '/', component: Home || NotFound },
  { path: '/error', component: ErrorPage || NotFound },
  // { path: '/admin', component: Admin || NotFound },
  // { path: '/blog', component: Blog || NotFound },
  // { path: '/about', component: About || NotFound },
  // { path: '/shop', component: Shop || NotFound },
  // { path: '/freepatterns', component: Patterns || NotFound },
  // { path: '/books', component: Books || NotFound }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

export default router;

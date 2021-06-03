import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './views/Home';
import About from './views/About';
import Gallery from './views/Gallery';
import Calender from './views/Calender';
import Scout from './views/Scout';
import Test from './views/Test';
import NotFound from './views/NotFound';

import './scss/main.scss';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/gallery', component: Gallery },
    { path: '/calender', component: Calender },
    { path: '/scout', component: Scout },
    { path: '/Test', component: Test },
    { path: '*', component: NotFound }
  ],
  mode: 'hash'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

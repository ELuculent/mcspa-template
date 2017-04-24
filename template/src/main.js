// Import Vue Library
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Import Components
import Home from './components/Home.vue'
import About from './components/About.vue'
import Server from './components/Server.vue'

// Import Other Vue Stuff
import BootstrapVue from '../node_modules/bootstrap-vue'
import Carousel3d from '../node_modules/vue-carousel-3d'

// Tell Vue to use Stuff
Vue.use(Carousel3d)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

// Define Routes
const routes = [

    { path: '/', component: Home },
    {path: '/about', component: About},
    {path: '/server', component: Server}
]

// Make a router constant
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

// Start Vue instance
new Vue({
  // Define Selector to root
  el: '#app',
  //Pass Template to root
  template: '<App/>',
  // Tell the root component to access componets
  components: { App },
  //Pass router
  router
}).$mount('#app')

require('../css/css.css')

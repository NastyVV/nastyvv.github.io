import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dopmat from '../views/Dopmaterial.vue'
import Practic from '../views/Practic.vue'
import Tests from '../views/Tests.vue'
import Teoriya from '../views/Teoriya.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/library',
    name: 'Dopmat',
    component: Dopmat
  },
  {
    path: '/practice',
    name: 'Practic',
    component: Practic
  },
  {
    path: '/tests"',
    name: 'Tests',
    component: Tests
  },
  {
    path: '/theory',
    name: 'Teoriya',
    component: Teoriya
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dopmat from '../views/Dopmaterial.vue'
import Practic from '../views/Practic.vue'
import Testik from '../views/Testik.vue'
import Teoriya from '../views/Teoriya.vue'
import Struktura from '../views/Struktura.vue'
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
    path: '/testik',
    name: 'Testik',
    component: Testik
  },
  {
    path: '/theory',
    name: 'Teoriya',
    component: Teoriya
  },
  {
    path: '/struktura',
    name: 'Strukura',
    component: Struktura
  },
]

const router = new VueRouter({
  routes
})

export default router

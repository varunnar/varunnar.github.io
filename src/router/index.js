import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projectView',
    component: () => import( '../views/projectView.vue')
  },
  {
    path: '/resume',
    name: 'resumeView',
    component: () => import('../views/resumeView.vue')
  },
  {
    path: '/storyglow',
    name: 'individual-project/storyglow',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/munchmaps',
    name: 'individual-project/munchmaps',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/fractal',
    name: 'individual-project/fractal',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/H3',
    name: 'individual-project/H3',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/alpaca',
    name: 'individual-project/alpaca',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/heartbeatChecker',
    name: 'individual-project/heartbeatChecker',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/seagate',
    name: 'individual-project/seagate',
    component: () => import( '../views/individualProject.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

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
    path: '/aboutMe',
    name: 'aboutMeView',
    component: () => import('../views/AboutView.vue')
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
    path: '/D3',
    name: 'individual-project/D3',
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
    path: '/projectTightrope',
    name: 'individual-project/projectTightrope',
    component: () => import( '../views/projectTightRope.vue'),
  },

  {
    path: '/studentDataVisualization',
    name: 'individual-project/DataViz',
    component: () => import( '../views/globem.vue'),
  },
  {
    path: '/seagate',
    name: 'individual-project/seagate',
    component: () => import( '../views/individualProject.vue'),
    //component: () => import( '../views/seagate.vue'),
  },
  {
    path: '/mhcid',
    name: 'individual-project/mhcid',
    component: () => import( '../views/individualProject.vue'),
  },
  {
    path: '/yourAWizardSarah',
    name: 'missLady',
    component: () => import( '../views/missLady.vue'),
  },
  {
    path: '/socialGrocer',
    name: 'individual-project/socialGrocer',
    component: () => import('../views/socialGrocer.vue')
  },
  {
    path: '/youtubeData',
    name: 'individual-project/youtubeData',
    component: () => import('../views/youtubeDataAnalysis.vue')
  },
  {
    path: '/blogs',
    name: 'blogView',
    component: () => import('../views/blogPostList.vue')
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: () => import('../views/blogTemplate.vue'),
    props: (route) => ({
      id: route.params.id,
      title: route.query.title,
      content: route.query.content || '[]'
    }),
  },
]

  /* eslint-disable */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return { top: 0 }
  }
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  // This will be called before any route change
  if (to.name && to.name.startsWith('individual-project')) {
    next();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'  // Use 'instant' instead of 'smooth'
    });
  } else {
    next();
  }
});

export default router

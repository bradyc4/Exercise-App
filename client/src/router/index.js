import { createRouter, createWebHistory } from 'vue-router'
import Session from '../servicesold/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';
import Friends from '../views/Friends.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue'),
    meta: { requiresLogin: true }
  },
  {
    path: '/feed',
    component: Feed,
    meta: { requiresLogin: true }
  },
  {
    path: '/friends',
    component: Friends,
    meta: { requiresLogin: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresLogin && !Session.user){
      next('/login');
  }else{
      next();
  }
} )

export default router

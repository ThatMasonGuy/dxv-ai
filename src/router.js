// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import { InProgress } from "@/components";
import Home from '@/pages/Home.vue';
import ComingSoon from '@/pages/ComingSoon.vue';

function isAuthenticated() {
  return true;
}

const comingSoon = true;

const routes = [
  {
    path: '/',
    alias: ['/', '/index', '', '/home', '/Home'],
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
      title: 'Home',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/about',
    alias: '/about-us',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: {
      requiresAuth: false,
      title: 'About',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/contact',
    alias: '/contact-us',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      requiresAuth: false,
      title: 'Contact',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/websites',
    alias: '/websites',
    name: 'Websites',
    component: () => import('@/pages/Websites.vue'),
    meta: {
      requiresAuth: false,
      title: 'Websites',
      requiresOverlay: true,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/login',
    alias: '/signin',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      requiresAuth: false,
      title: 'Login',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/signup',
    alias: ['/create-account', '/sign-up'],
    name: 'Sign Up',
    component: () => import('@/pages/SignUp.vue'),
    meta: {
      requiresAuth: false,
      title: 'Sign Up',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/protected',
    alias: '/protected',
    name: 'Protected',
    component: () => import('@/pages/Protected.vue'),
    meta: {
      requiresAuth: true,
      title: 'Protected',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/portfolio',
    alias: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/pages/Portfolio.vue'),
    meta: {
      requiresAuth: false,
      title: 'Portfolio',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/demo/lcc-powerapps',
    name: 'Logan City Council PowerApps',
    component: () => import('@/pages/demos/Demo_LCC_PowerApps.vue'),
    meta: {
      requiresAuth: false,
      title: 'Logan City Council PowerApps',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },
  {
    path: '/demo/lms-powerapps',
    name: 'Lifestyle Mentor Services PowerApps',
    component: () => import('@/pages/demos/Demo_LMS_PowerApps.vue'),
    meta: {
      requiresAuth: false,
      title: 'Lifestyle Mentor Services PowerApps',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },
  {
    path: '/demo/lms-webapp',
    name: 'Lifestyle Mentor Services Webapp',
    component: () => import('@/pages/demos/Demo_LMS_Webapp.vue'),
    meta: {
      requiresAuth: false,
      title: 'Lifestyle Mentor Services Webapp',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: true,
    },
  },
  {
    path: '/settings',
    alias: '/settings',
    name: 'Settings',
    component: () => import('@/pages/Settings.vue'),
    meta: {
      requiresAuth: false,
      title: 'Settings',
      requiresOverlay: true,
      requiresAuthOverlay: true,
      inProgress: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/pages/system/Page404.vue'),
    meta: {
      requiresAuth: false,
      title: '404',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/coming-soon',
    name: 'ComingSoon',
    component: ComingSoon,
    meta: {
      requiresAuth: false,
      title: 'Coming Soon',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
  {
    path: '/in-progress',
    name: 'InProgress',
    component: InProgress,
    meta: {
      requiresAuth: false,
      title: 'In Progress',
      requiresOverlay: false,
      requiresAuthOverlay: false,
      inProgress: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (comingSoon) {
    if (to.name !== 'ComingSoon') {
      next({ name: 'ComingSoon' });
    } else {
      next();
    }
  } else {
    if (to.meta.inProgress) {
      if (to.name !== 'InProgress') {
        next({ name: 'InProgress' });
      } else {
        next();
      }
    } else if (to.meta.requiresAuth && !isAuthenticated()) {
      next({ name: 'Login' });
    } else {
      next();
    }
  }
});

export default router;

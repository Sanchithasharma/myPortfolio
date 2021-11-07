import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: () => import('../views/Hello.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },

  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },

  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },

  {
    path: '/miscellaneous',
    name: 'Miscellaneous',
    component: () => import('../views/Miscellaneous.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Master',
      component: () => import('../pages/layout/Master.vue'),
      redirect: '/dashboard',
      children:[
        {
          name:'dashboard',
          path:'/dashboard',
          component: () =>  import('../pages/Dashboard.vue')
        },
        {
          name:'user',
          path:'/user',
          component: () =>  import('../pages/User.vue')
        },
        {
          name:'customer',
          path:'/customer',
          component: () =>  import('../pages/Customer.vue')
        },
        {
          name:'contact',
          path:'/contact',
          component: () =>  import('../pages/Contact.vue')
        },
               {
          name:'product',
          path:'/product',
          component: () =>  import('../pages/Product.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    
  ]
})

export default router

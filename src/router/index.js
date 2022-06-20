import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout';
import testRouter from '@/router/modules/test';

console.log(testRouter);

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    redirect: '',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }, {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ],

  },
  testRouter
]

console.log(constantRoutes);

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constantRoutes
})


export default router

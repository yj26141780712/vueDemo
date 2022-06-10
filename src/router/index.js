import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import modal from '../page/modal/index.vue';
import table from '../page/table/index.vue';
import modalTable from '../page/modal-table';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      { path: '/home/modal', name: 'pageModal', component: modal },
      { path: '/home/table', name: 'pageTable', component: table },
      { path: '/home/modal-table', name: 'modalTable', component: modalTable }
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.matched.length === 0) {  //如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
});

export default router

import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/login/Login'
import Dashboard from '../views/dashboard/Dashboard'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },

  

  // page that requires authentication to view
  // path: '/admin',
  // name: 'admin',
  // component: Admin,
  // meta:{
  //   requiresAuth:true
  // }

  // redirect incase user types navigates to a wrong path route
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

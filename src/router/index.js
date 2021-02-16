import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/login/Login'
import Dashboard from '../views/dashboard/Dashboard'
import SearchRecord from '../components/SearchResult'
import ConfirmRecords from '../components/ConfirmRecords'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      guest: true
  }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
  },
    children: [
      {
        path: 'searchRecord',
        component: SearchRecord
      },
      {
        // B will be rendered in the second <router-view>
        // when /your-sidebar-url/b is matched
        path: '/confirmRecord',
        component: ConfirmRecords
      }
    ]
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

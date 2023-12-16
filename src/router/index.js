import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import log from "../views/logview.vue";
import adduser from "../views/adduserview.vue";
import stent from "../views/stock_ent";
import loghistory from "../views/loghis.vue";
import stock_view from "../views/stock_view";
import bill from "../views/bill_entry";
import sales from "../views/sales_report";
// import dashboard from "../views/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/log",
  //   name: "log",
  //   component: log,
  // },
 
  {
    path: "/s_view",
    name: "log",
    component: stock_view,
  },
  {
    path: "/add",
    name: "adduser",
    component: adduser,
  },
  {
    path: "/stent",
    name: "stent",
    component: stent,
  },
  {
    path: "/loghis",
    name: "loghistory",
    component: loghistory,
  },
  {
    path: "/bill",
    name: "bill",
    component: bill,
  },
  {
    path: "/sales",
    name: "sales",
    component: sales,
  },
  // {
  //   path: "/dashboard",
  //   name: "dash",
  //   component: dashboard,
  // },

  {
       path: "/",
       name: "dashboard",
       component: () =>
         import( '../views/dashboard.vue'),
     },
 

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ventas from "../views/Ventas.vue";
import Total from "../views/Total.vue";
import NotFound from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/busqueda",
    name: "Busqueda",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Busqueda.vue"),
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: Ventas,
  },
  {
    path: "/total",
    name: "Total",
    component: Total,
  },
  {
    path: "/*",
    name: "Error-404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/Layout-system-with-vue-and-vue-router/"
    : "/";

export default new Router({
  mode: "history",
  base,

  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "default-layout" },
      component: require("@/pages/Home.vue").default // load sync home
    },
    {
      path: "/packages",
      name: "packages",
      meta: { layout: "default-layout" },
      component: require("@/pages/Packages.vue").default // load sync home
    },
    {
      path: "/order/:id",
      name: "packages",
      meta: { layout: "default-layout" },
      component: require("@/pages/Order.vue").default // load sync home
    }
  ]
});
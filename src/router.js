import Vue from "vue";
import Router from "vue-router";

import Dashboard from "./components/Dashboard";
import Vehicle from "./components/Vehicle";
import Documents from "./components/Documents";
import Login from "./components/Login";
import Profile from "./components/Profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/vehicle",
      name: "Vehicle",
      component: Vehicle,
    },
    {
      path: "/documents",
      name: "Documents",
      component: Documents,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/*",
      redirect: "/login",
    },
  ],
});

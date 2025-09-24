import { createRouter, createWebHashHistory } from "vue-router";

import TheHome from "../pages/TheHome.vue";
import TheAbout from "../pages/TheAbout.vue";
import TheProject from "../pages/TheProject.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/about", component: TheAbout },
  { path: "/projects/:name", component: TheProject },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

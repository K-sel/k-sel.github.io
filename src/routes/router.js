import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../pages/TheHome.vue";
import ProjectPage from "../pages/Base-ProjectPage.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/project/:name", component: ProjectPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

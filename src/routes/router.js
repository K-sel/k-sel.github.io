import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../pages/TheHome.vue";
import BooksAPI from "../pages/projects/BooksAPI.vue";
import Lightshelf from "../pages/projects/Lightshelf.vue";
import Bookshelf from "../pages/projects/Bookshelf.vue";
import TheAbout from "../pages/TheAbout.vue";
import CS50 from "../pages/projects/CS50.vue";
import TheProject from "../pages/TheProject.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/about", component: TheAbout },
  { path: "/projects/:name", component: TheProject },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

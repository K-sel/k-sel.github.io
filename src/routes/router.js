import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../pages/TheHome.vue";
import BooksAPI from "../pages/projects/BooksAPI.vue";
import Lightshelf from "../pages/projects/Lightshelf.vue";
import Bookshelf from "../pages/projects/Bookshelf.vue";
import TheAbout from "../pages/TheAbout.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/about", component: TheAbout },
  { path: "/project/books-api", component: BooksAPI },
  { path: "/project/lightshelf", component: Lightshelf },
  { path: "/project/bookshelf", component: Bookshelf },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routes/router";



const now = new Date();
const hours = now.getHours();
if (hours <= 6 || hours >= 22) {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}
const app = createApp(App);
app.use(router);
app.mount("#app");

import { createRouter, createWebHistory } from "vue-router";
import components from "./components-list";

const routes = [];
components.forEach(c => {
  routes.push({
    path: c.path,
    name: c.name,
    component: () => c.component
  })
})

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;

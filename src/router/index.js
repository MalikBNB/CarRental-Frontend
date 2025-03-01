import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import VehiclesView from "@/views/VehiclesView.vue";
import VehicleView from "@/views/VehicleView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/vehicles/:category",
      name: "vehicles",
      component: VehiclesView,
    },
    {
      path: "/vehicle/:id",
      name: "vehicle",
      component: VehicleView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;

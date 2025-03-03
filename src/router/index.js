import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoriesView from "@/views/Category/CategoriesView.vue";
import AddCategoryView from "@/views/Category/AddCategoryView.vue";
import EditCategoryView from "@/views/Category/EditCategoryView.vue";
import VehiclesView from "@/views/Vehicle/VehiclesView.vue";
import VehicleView from "@/views/Vehicle/VehicleView.vue";
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
      path: "/categories/edit/:id",
      name: "edit-category",
      component: EditCategoryView,
    },
    {
      path: "/categories/add",
      name: "add-category",
      component: AddCategoryView,
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

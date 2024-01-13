import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
import PemesananView from "../views/Pemesanan.vue";
import EditView from "../views/Edit.vue";
import FilterView from "../views/Filter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "init",
      component: localStorage.token != undefined ? HomeView : LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { requiresAuth: true },
    },
    {
      path: "/pemesanan",
      name: "pemesanan",
      component: PemesananView,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
    },
    {
        path: "/filter",
        name: "filter",
        component: FilterView,
      },
  ],
});

export default router;

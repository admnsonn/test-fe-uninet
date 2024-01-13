import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
import PemesananView from "../views/Pemesanan.vue";

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
      meta: { requiresAuth: true }, // Add this meta field if authentication is required
    },
    {
      path: "/pemesanan",
      name: "pemesanan",
      component: PemesananView,
    },
  ],
});

export default router;

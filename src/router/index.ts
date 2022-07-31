import { createRouter, createWebHistory } from "vue-router";

import AuthView from "@/views/AuthView.vue";
import HomeView from "../views/HomeView.vue";
import LobbyView from "../views/lobby/LobbyView.vue";
import JoinView from "../views/lobby/JoinView.vue";
import GameView from "../views/GameView.vue";
import ScoreView from "../views/ScoreView.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
      meta: { requiresAuth: true },
    },
    {
      path: "/score",
      name: "score",
      component: ScoreView,
      meta: { requiresAuth: true },
    },
    {
      path: "/lobby",
      name: "lobby",
      component: JoinView,
      meta: { requiresAuth: true },
    },
    {
      path: "/lobby/home",
      name: "lobby home",
      component: LobbyView,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
      meta: { requiresNotAuth: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const currentUser = await userStore.getCurrentUser();

  if (to.meta.requiresAuth && !currentUser) {
    next({
      name: "auth",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;

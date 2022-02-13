import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/1' },
    { path: '/:id', props: true, component: MainPage },
  ]
})

export default router
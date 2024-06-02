import { createRouter, createWebHistory } from 'vue-router'
import AcceuilView from "@/views/AcceuilView.vue";
import ServiceClientView from "@/views/ServiceClientView.vue";
import FicheSabreView from "@/views/FicheSabreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AcceuilView
    },
    {
      path: '/service-client',
      name: 'service-client',
     component:ServiceClientView
    },
    {
      path: '/sabre/:id',//paramêtre id
      name: 'sabre',
      component: FicheSabreView,
      props: true // passe les parmétre dans props
    }
  ]
})

export default router

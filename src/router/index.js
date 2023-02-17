import { createRouter, createWebHistory } from 'vue-router'
import Market from '@/pages/market/Market'
import About from '@/pages/about/About'
const routes = [
    {
        path: "/",
        name : "Market",
        component: Market
    },
    {
        path: "/about",
        name : "About",
        component: About
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router
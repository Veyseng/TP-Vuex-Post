import { createRouter, createWebHistory } from 'vue-router'
import post from '../views/post'
const routes = [
  {
    path: '/',
    name: 'Post',
    component: post
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

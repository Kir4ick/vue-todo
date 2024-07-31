import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TaskView from "@/views/NoteView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/note/:name',
    name: 'task',
    component: TaskView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

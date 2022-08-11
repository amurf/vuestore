import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './views/Home.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/test', name: 'test', component: () => import('./views/Test.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

app.use(router)

app.mount('#app')

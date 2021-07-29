import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router' // not work
// import { createWebHashHistory, createRouter } from 'vue-router' // works

import App from './App.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(), // not work
  // history: createWebHashHistory(), // works
  routes,
})

createApp(App).use(router).mount('#app')

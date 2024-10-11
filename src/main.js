import { createApp } from 'vue'
import { createPinia } from 'pinia';

import i18n from './i18n'

import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/pages/Home.vue'
import Portfoliocard from '@/components/Portfoliocard.vue'
import About from '@/pages/About.vue'
import Blogapi from '@/components/Blogapi.vue'
import Contact from '@/pages/Contact.vue'
import Singlepagecard from '@/components/Singlepagecard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfoliocard },
  { path: '/about', component: About },
  { path: '/blog', component: Blogapi },
  { path: '/contact', component: Contact },
  { path: '/singlepage', component: Singlepagecard },]



const router = createRouter({
  history: createWebHistory(),
  routes
})
const pinia = createPinia();



const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(pinia);
app.mount('#app')
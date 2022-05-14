import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from '@/App'
import router from '@/router'
import setupInterceptor from './helpers/axios-interceptors'

setupInterceptor()

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import setupInterceptor from './helpers/axios-interceptors'

setupInterceptor()

createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/main.css'

import router from './components/router/router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')   
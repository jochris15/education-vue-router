import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import router from './router'

const app = createApp(App)

// global registration
app.use(router)
app.component('NavBar', NavBar)
app.mount('#app')


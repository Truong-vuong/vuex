import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../dist/output.css'

createApp(App).use(store).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
import NiceElements from './lib.js';

const app = createApp(App)
app.use(NiceElements);
app.mount('#app')

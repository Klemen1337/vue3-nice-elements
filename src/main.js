import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
import router from "./router.js";
import gettext from "./language";
import NiceElements from './lib.js';

const app = createApp(App)
app.use(router);
app.use(gettext)
app.use(NiceElements, {router, gettext})
app.mount('#app')

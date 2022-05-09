import {createApp} from 'vue/dist/vue.esm-bundler'
import App from './App.vue'

import store from './store'
import router from "@/router";

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

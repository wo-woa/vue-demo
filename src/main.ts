import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import globalVariable from '@/global/global_variable.js'

// Vue.prototype.GLOBAL = globalVariable
createApp(App).use(store).use(router).mount('#app')

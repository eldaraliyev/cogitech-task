import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router.js';
import TheHeader from "./components/layout/TheHeader.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue"
import BasePagination from "./components/ui/BasePagination.vue";


const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-pagination', BasePagination)
app.component('the-header', TheHeader)
app.use(store)
app.use(router)
app.mount('#app')
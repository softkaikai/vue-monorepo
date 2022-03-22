import { createApp } from 'vue'
import App from './App.vue'
import MarketUiPlugin from './index

const app = createApp(App)
app.use(MarketUiPlugin)
app.mount('#app')

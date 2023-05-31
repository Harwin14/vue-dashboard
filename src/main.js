// import './assets/main.css'
import './assets/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config';
import "primevue/resources/themes/tailwind-light/theme.css"
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Tooltip from 'primevue/tooltip';
import Menu from 'primevue/menu';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
const app = createApp(App)

app.component("InputText",InputText)
app.component("Avatar",Avatar)
app.component("Menu",Menu)

app.directive('tooltip', Tooltip);


app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')

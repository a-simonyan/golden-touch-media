import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { SetupCalendar, DatePicker } from 'v-calendar';
import 'vueperslides/dist/vueperslides.css'
import 'v-calendar/dist/style.css';
import mitt from 'mitt';
import axios from 'axios'
import VueAxios from 'vue-axios'
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store).use(router).use(VueAxios, axios).use(SetupCalendar, {}).component('vDatePicker', DatePicker).mount('#app')

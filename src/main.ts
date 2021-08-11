import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import '@/styles/global.css'
import 'ant-design-vue/es/message/style/css'
// @ts-ignore
import router from "@/router/index.ts"
import {createPinia} from "pinia";


createApp(App)
    .use(Antd)
    .use(router)
    .use(createPinia())
    .mount('#app')


// app.use(router)
// app.use(Antd)
//
// app.config.globalProperties.$axios = axios

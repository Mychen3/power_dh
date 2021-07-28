import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import '@/styles/global.css'
// @ts-ignore
import router from "@/router/index.ts"



createApp(App)
    .use(Antd)
    .use(router)
    .mount('#app')

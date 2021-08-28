import { createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import '@/styles/global.css'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/Modal/style/css'
// @ts-ignore
import router from "@/router/index.ts"
import {createPinia} from "pinia";
import 'default-passive-events'
import moment from 'moment';
import 'moment/dist/locale/zh-cn'



createApp(App)
    .use(Antd)
    .use(router)
    .use(createPinia())
    .mount('#app')



// app.use(router)
// app.use(Antd)
//
// app.config.globalProperties.$axios = axios

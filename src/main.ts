import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/index"
import {createPinia} from "pinia";
// import 'default-passive-events'
import 'moment/dist/locale/zh-cn'
import Antd from 'ant-design-vue';
import '@/styles/global.css'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/Modal/style/css'


// @ts-ignore
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// @ts-ignore
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// @ts-ignore
import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
    Prism
});

VMdPreview.use(vuepressTheme, {
    Prism
});

createApp(App)
    .use(Antd)
    .use(router)
    .use(createPinia())
    .use(VMdPreview)
    .use(VueMarkdownEditor)
    .mount('#app')

// app.use(router)
// app.use(Antd)
//
// app.config.globalProperties.$axios = axios

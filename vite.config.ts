import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import ViteComponents, {AntDesignVueResolver} from 'vite-plugin-components';
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
import Components from 'unplugin-vue-components/vite'
import {resolve} from 'path'
// @ts-ignore
// import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        ViteComponents({
            customComponentResolvers: [AntDesignVueResolver()],
            globalComponentsDeclaration: true,
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),

        // 按需加载样式
        // styleImport({
        //         libs: [{
        //             libraryName: 'ant-design-vue',
        //             esModule: true,
        //             resolveStyle: (name: any) => {
        //                 return `ant-design-vue/es/${name}/style/css`;
        //             },
        //         }]
        //     })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'view': resolve(__dirname, 'src/views'),
            'hk': resolve(__dirname, 'src/hooks'),
            'ut': resolve(__dirname, 'src/utils'),
            'ass': resolve(__dirname, 'src/assets'),
            'comp': resolve(__dirname, 'src/components'),
            'api': resolve(__dirname, 'src/api')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/global.scss";'
            },
        }
    },
})



import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import ViteComponents, {AntDesignVueResolver} from 'vite-plugin-components';
import {resolve} from 'path'

// @ts-ignore
import styleImport from 'vite-plugin-style-import';


// https://vitejs.dev/config/
export default defineConfig({

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'view': resolve(__dirname, 'src/views'),
            'hk': resolve(__dirname, 'src/hooks'),
            'ut': resolve(__dirname, 'src/utils'),
            'ass': resolve(__dirname, 'src/assets'),
            'comp': resolve(__dirname, 'src/components')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/global.scss";'
            }
        }
    },
    plugins: [vue(),
        ViteComponents({
            customComponentResolvers: [AntDesignVueResolver()],
            globalComponentsDeclaration: true,
        })
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
})



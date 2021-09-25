const home: string | Object = () => import ("view/home/home.vue")


interface metaType {
    title?: string,
}

interface router extends metaType {
    path: string,
    name?: string,
    redirect?: string,
    meta?: metaType,
    component?: string | Object,
    children?: object[]
    security?: boolean,
    one_level?: boolean,
    icon?:string
}


/*  security: 是否登入后才显示
*   one_level: 是否为一级目录
*
* @ 务必加title，不加导航栏不做渲染
* */
const routes: router[] = [
    {
        path: '/',
        redirect: '/homepage',
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: home,
        redirect: 'homemenu',
        one_level: true,
        meta: {
            title: '首页'
        },
        children: [
            {
                meta: {
                    title: '首页'
                },
                path: '/homeMenu',
                name: 'homeMenu',
                icon:'icon-zhuye1',
                component: () => import ("view/homemenu/homeMenu.vue")
            },
        ]
    },
    {
        path: '/article',
        name: 'article',
        component: home,
        children: [
            {
                path: 'articleDetails',
                name: 'articleDetails',
                component: () => import ("comp/ArticleDetails.vue")
            }
        ]
    },
    {
        path: '/work',
        name: 'work',
        component: home,
        one_level: true,
        meta: {
            title: '工作台'
        },
        children: [
            {
                meta: {
                    title: '工作台'
                },
                security: true,
                path: 'workbench',
                name: 'workbench',
                icon:'icon-gongzuotai',
                component: () => import ("view/workbench/workbench.vue")
            }
        ]
    },
    {
        path: '/webdevelop',
        name: 'webdevelop',
        component: home,
        meta: {
            title: '前端'
        },
        icon:'icon-qianduan',
        children: [
            {
                path: 'documentStudy',
                name: 'documentStudy',
                meta:{
                    title:'文档学习'
                },
                component: () => import ("view/webdevelop/documentStudy/documentStudy.vue")
            },
            {
                path: 'jsframe',
                name: 'jsframe',
                meta:{
                    title:'JS框架'
                },
                component: () => import ("view/webdevelop/jsframe/jsframe.vue")
            },
            {
                path: 'jsplugin',
                name: 'jsplugin',
                meta:{
                    title:'JS优秀库'
                },
                component: () => import ("view/webdevelop/jsplugin/jsplugin.vue")
            },
            {
                path: 'csstool',
                name: 'csstool',
                meta:{
                    title:'CSS相关'
                },
                component: () => import ("view/webdevelop/csstool/cssTool.vue")
            }
        ]
    },
    {
        path: '/articleText',
        name: 'articleText',
        component: home,
        meta: {
            title: '记录知识'
        },
        icon:'icon-zhishijiushicaifu',
        children: [
            {
                path: 'JavaScript',
                name: 'JavaScript',
                meta:{
                    title:'JavaScript'
                },
                component: () => import ("view/article/javascript/javascript.vue")
            },

        ]
    }
]

export default routes


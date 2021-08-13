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
                component: () => import ("view/homeMenu/homeMenu.vue")
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
                path: '/workbench',
                name: 'workbench',
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
        children: [
            {
                path: '/documentStudy',
                name: 'documentStudy',
                meta:{
                    title:'文档学习'
                },
                component: () => import ("view/webdevelop/documentStudy/documentStudy.vue")
            },
            {
                path: '/jsframe',
                name: 'jsframe',
                meta:{
                    title:'js框架'
                },
                component: () => import ("view/webdevelop/jsframe/jsframe.vue")
            },
            {
                path: '/jsplugin',
                name: 'jsplugin',
                meta:{
                    title:'js框架'
                },
                component: () => import ("view/webdevelop/jsplugin/jsplugin.vue")
            }
        ]
    }
]

export default routes


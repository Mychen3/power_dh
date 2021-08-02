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
        meta: {
            title: '首页'
        },
        children: [
            {
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
        security: true,
        one_level: true,
        meta: {
            title: '工作台'
        },
        children: [
            {
                path: 'workbench',
                name: 'workbench',
                component: () => import ("view/workbench/workbench.vue")
            }
        ]
    }
]

export default routes


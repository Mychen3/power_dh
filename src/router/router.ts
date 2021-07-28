const home: String | Object = () => import ("view/home/home.vue")

const routes:Object[] = [
    {
        path: '/',
        redirect: '/homepage'
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: home,
        redirect: 'homemenu',
        children: [
            {
                path: '/homeMenu',
                name: 'homeMenu',
                component: () => import ("view/homeMenu/homeMenu.vue")
            }
         ]
       },
    {
        path: '/boos',
        name: 'boos',
        component: home,
        children: [
            // {
            //     path: 'test',
            //     name: 'test',
            //     component: () => import ("view/test/test.vue")
            // }
        ]
    }
]

export default routes


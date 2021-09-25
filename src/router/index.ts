import {
    createRouter,
    createWebHashHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouterOptions,
    createWebHistory
} from "vue-router";
import routers from './router'
import useStore from "@/store";
import {nextTick} from 'vue'
import {message} from 'ant-design-vue'

// const router = createRouter(<RouterOptions>{
//     history: createWebHashHistory(),
//     routes: routers,
// })
const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes: routers,
})

// 路由前面置守卫
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const store = useStore()
    nextTick((): void => {
        const user = JSON.parse(<string>window.sessionStorage.getItem('user'))
        const token = window.sessionStorage.getItem('token')
        if (user && token) {
            store.token = token
            store.user = user
        }
    }).then(() => {
        if (to.name != 'workbench') {
            next()
        } else {
            if ((store.user as unknown as string) != '' && store.token != '') {
                next()
            } else {
                message.warning('当前暂无登录，登录后重试！', 1000)
                setTimeout(() => {
                    location.reload()
                }, 1000)
                next({
                    name: 'homeMenu'
                })
            }
        }
    }).catch(err => {
        console.log(err)
        window.sessionStorage.clear()
    })
})


export default router

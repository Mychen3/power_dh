import {
    createRouter,
    createWebHashHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouterOptions
} from "vue-router";
import routers from './router'
import useStore from "@/store";
import {nextTick} from 'vue'

const router = createRouter(<RouterOptions>{
    history: createWebHashHistory(),
    routes: routers,
})


// 路由前面置守卫
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const store = useStore()
    nextTick(():void=>{
        const user = JSON.parse(<string>window.sessionStorage.getItem('user'))
        const token = window.sessionStorage.getItem('token')
        if (user && token) {
            store.token = token
            store.user = user
        }
    }).then(res=>{
        next()
    }).catch(err=>{
        console.log(err)
    })
})


export default router

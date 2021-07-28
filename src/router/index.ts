import {createRouter, createWebHashHistory,RouterOptions} from "vue-router";
import routers from './router'


 const router = createRouter(<RouterOptions>{
    history: createWebHashHistory(),
    routes: routers,
})

export default router

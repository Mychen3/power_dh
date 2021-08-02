import routes from "@/router/router";

const setRouter = () => {
    for (let item of routes) {
        // 先判断是不是要渲染给侧边栏的
        if (item?.meta?.title) {
            // 在判断需要登录
             if (item.security){
              // 判断有没有登陆


             }else {

             }
        }

    }
}


export {

}

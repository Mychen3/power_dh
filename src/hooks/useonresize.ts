import throttle from "hk/usethrottle";
/*
@name: 监听页面大小回调函数
@return: void
*/
const onresize_change = (): boolean => {
   const changeWidth = document.documentElement.clientWidth
    return changeWidth < 992;
}

// 节流回调函数监听页面大小

    window.onresize = throttle(onresize_change, 500)


export default onresize_change


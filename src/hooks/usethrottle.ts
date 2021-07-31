/*
* @throttle: 节流
* @param: fn 需要节流的函数
* @param: delay 需要延迟的时间
* */

function throttle(fn: Function, delay: number = 1000): Function | any {

    let timer: null | object
    return function () {
        /* @ts-ignore */
        let context = this;
        /* @ts-ignore */
        let args: any[] = arguments
        // 判断如果这个定时器还在的话就直接return
        if (timer) {
            return
        }
        timer = setTimeout(function () {
            fn.apply(context, args)
            timer = null
        }, delay)
    }
}

export default throttle;
/*
* @throttle: 防抖
* @param: fn 需要防抖的函数
* @param: delay 需要延迟的时间
* */

export default function debounce (fun:Function,delay:number) {
    let timer:any = null;
    /* @ts-ignore */
    let context = this;
    return function () {
        const args = arguments;
        // 事件触发，如果之前有等待的事件，则清空计时，重新进行事件等待执行
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fun.apply(context, args);
        }, delay);
    }
}


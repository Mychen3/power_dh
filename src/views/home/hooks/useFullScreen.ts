import {message} from 'ant-design-vue'
import screenfull from 'screenfull'
import {ref} from 'vue'

// 全屏图片切换
const FullScreenImg = ref<boolean>(true)

/*
* @name: 全屏
* @param:
* @return:boolean|undefined
* */

const handleFullScreen = (): boolean | void => {
    if (!screenfull.isEnabled) {
        message.info('该浏览器不支持全屏!');
        return false;
    }

    FullScreenImg.value = !FullScreenImg.value
    screenfull.toggle();
}

export {
    handleFullScreen,
    FullScreenImg
}

import { ref } from 'vue'
import { signin1, signin2, signin3 } from 'ass/pictureData'

const loginBgc = ref<String>(`url(${signin1}) no-repeat center /10vw 9vw`)
/*
* @name: 熊猫聚焦时
* @param: 
* @return:void
* */
const focusPanda = (): void => {
    loginBgc.value = `url(${signin2}) no-repeat center /10vw 9vw`
}

/*
* @name: 熊猫退出聚焦时
* @param: 
* @return:void
* */
const blurPanda = (): void => {
    loginBgc.value = `url(${signin1}) no-repeat center /10vw 9vw`
}

/*
* @name: 熊猫聚焦进入密码栏
* @param: 
* @return:void
* */
const pwdFocusPanda = (): void => {
    loginBgc.value = `url(${signin3}) no-repeat center /10vw 9vw`
}





export {
    loginBgc,
    focusPanda,
    blurPanda,
    pwdFocusPanda
}
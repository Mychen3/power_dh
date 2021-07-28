import {collapsed, siderPosition, showMask} from './headerData'

/*
* @name: 侧边栏展开回调
* @type: ''
* */
const collapsedOpen = (): void => {
    collapsed.value = !collapsed.value
    // 判断遮罩层显示
    if (siderPosition.value == 'fixed') {
        showMask.value = true
    }
}

/*
* @name: 侧边栏关闭回调
* @type: ''
* */
const collapsedClose = (): void => {
    collapsed.value = true

    if (siderPosition.value == 'fixed') {
        showMask.value = false
    }
}


/*
* @name: 点击遮罩层关闭
* @type: ''
* */
const maskClose = (): void => {
    showMask.value = false
    collapsedClose()
}


export {
    collapsedOpen,
    collapsedClose,
    maskClose

}

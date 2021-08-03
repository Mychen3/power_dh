import {ref} from 'vue'

//展开收起状态
const collapsed = ref<boolean>(false)

//触发响应式布局断点时的回调的值
const brokenData = ref<boolean>(false)

//侧边栏收缩宽度
const shrinkWidth = ref<number>(48)

// 侧边栏定位设置遮盖层
const siderPosition = ref<string>('relative')

// 遮罩层显示隐藏
const showMask = ref<boolean>(false)


export {

    collapsed,
    brokenData,
    shrinkWidth,
    siderPosition,
    showMask,
}

import { ref } from 'vue'
import { message } from 'ant-design-vue'

const scrollRef = ref<HTMLElement>()




/*
@name: 监听下拉触底加载数据
@return: void
*/
const scrollLoadDown = (): void => {

    console.log(typeof scrollRef.value?.scrollHeight);

    // 滚动条完整部分高度
    let scrollHeight = ref<string>(scrollRef.value?.scrollHeight + '' as string)
    // 正在显示的高度
    let clientHeight = ref<string>(scrollRef.value?.clientHeight + '' as string)
    // 已经滚动了多少
    let scrollTop = ref<string>(scrollRef.value?.scrollTop + '' as string)

    if (parseInt(clientHeight.value) + parseInt(scrollTop.value) == parseInt(scrollHeight.value)) {


    }



}

export {
    scrollRef,
    scrollLoadDown

}
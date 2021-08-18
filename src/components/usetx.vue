<template>
  <icon-font  :style="{ fontSize: props.Size }" type="icon-touxiang" />
</template>

<script setup lang="ts">
import { createFromIconfontCN } from '@ant-design/icons-vue';

const props = defineProps({
     Size:String
})


// 在 iconfont.cn 上生成
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2740553_d3ko8owwgxs.js',
});


</script>

<style scoped lang="scss">

</style>

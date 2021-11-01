<template>
  <div class="BoxShadowView-content">
    <div :style="view"></div>
  </div>
</template>

<script setup lang="ts">
import {reactive, watch} from 'vue'


const {boxShadowStyle} = defineProps({
  boxShadowStyle: {
    type: Array,
    default: () => {
      return []
    }
  },
})
const view = reactive<any>({
  "box-shadow": '13px 3px 3px 3px #000000'
})

const setBoxShadowStyle = (): string => {
  let boxShadowStyleValue: string[] = boxShadowStyle?.map((item: any): string => `${item.offsetX}px ${item.offsetY}px ${item.blur}px ${item.spread}px ${item.color} ${item.position}`)
  return boxShadowStyleValue.join(',')
}

watch(boxShadowStyle, () => {
  view['box-shadow']=setBoxShadowStyle()
})


</script>

<style scoped lang="scss">

.BoxShadowView-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  & > div:nth-child(1) {
    border: 2px solid #f66;
    width: 35%;
    height: 200px;
    margin: 10%;
  }
}

@media screen and (max-width: 991.98px) {

  .BoxShadowView-content {

    & > div:nth-child(1) {
      border: 2px solid #f66;
      width: 50%;
      height: 160px;
      margin: 5%;
    }
  }
}


</style>

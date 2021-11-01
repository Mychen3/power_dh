<template>
  <div>
    <v-md-preview :text="code"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import type {ShadowOptions} from './BoxShadow.d'
import {ref, watch,onMounted} from 'vue'

const {boxShadowStyle} = defineProps({
  boxShadowStyle: {
    type: Array,
    default: () => {
      return []
    }
  },
})

watch(boxShadowStyle, () => {
  setBoxShadowString()
})


const code = ref<string>("``` css\n" +
    "box-shadow:\n```")

const setBoxShadowString = (): void => {
  let boxShadowArray: (string | number[])[] = []
  boxShadowStyle.forEach((item:any): void => {
    boxShadowArray.push(`${item.offsetX}px ${item.offsetY}px ${item.blur}px ${item.spread}px ${item.color} ${item.position}\n`)
  })
  code.value = "``` css\n" +
      "box-shadow:" + boxShadowArray.join(',') + "\n```"
}

onMounted(()=>{
  setBoxShadowString()
})

</script>

<style scoped lang="scss">

</style>

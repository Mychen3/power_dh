<template>
  <div class="BoxShadow-content">
    <util-box>
      <template #Options>
        <box-shadow-options v-for="(item,index) in boxShadow.shadowOptionsList" :boxShadow="item" @addShadow="addShadow" :key="index"></box-shadow-options>
      </template>
      <template #Preview>
        <box-shadow-view :boxShadowStyle="boxShadow.shadowOptionsList"></box-shadow-view>
      </template>
      <template #code>
        <box-shadow-code :boxShadowStyle="boxShadow.shadowOptionsList"></box-shadow-code>
      </template>
    </util-box>
  </div>
</template>
<script setup lang="ts">
import BoxShadowOptions from "view/toolUtil/boxshadow/components/BoxShadowOptions.vue";
import BoxShadowView from "view/toolUtil/boxshadow/components/BoxShadowView.vue";
import BoxShadowCode from "view/toolUtil/boxshadow/components/BoxShadowCode.vue";
import type {boxShadow as boxShadowType} from './components/BoxShadow.d'
import {reactive} from 'vue'

const boxShadow = reactive<boxShadowType>({
  shadowOptionsList: [{
    color: '#000000',
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    spread: 0,
    position: ''
  }],
})

const addShadow = () => {
  boxShadow.shadowOptionsList.push({
    color: '#000000',
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    spread: 0,
    position: ''
  })
}


</script>

<style scoped lang="scss">
.BoxShadow-content {
  @include boxsize;
}


</style>

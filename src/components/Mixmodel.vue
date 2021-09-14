<template>
  <transition name="visible">
    <div v-if="props.visible"  class="mixModel-box">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {collapsed} from 'view/home/hooks/headerData'
import {computed} from 'vue'

const props = defineProps({
  visible:Boolean
})

const emits = defineEmits(['update:visible'])

emits('update:visible',props.visible)


const model_width = computed(()=>{
   return !collapsed.value ? `calc( 100% - 200px)` : `calc( 100% - 48px)`
})


</script>

<style scoped lang="scss">

.mixModel-box {
  width: v-bind(model_width);
  height: calc(100% - 48px);
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 15px;
  z-index: 100;
  background: rgb(255,255,255);
  transition: width ease 0.2s;
  transform: translate3d(0, 0, 0);
}

.visible-enter-active,
.visible-leave-active {
  transition: opacity 0.5s ease;

}
.visible-enter-from,
.visible-leave-to {
  opacity: 0;

}
</style>

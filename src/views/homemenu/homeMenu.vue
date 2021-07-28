<template>
  <div>
    <a-button @click="goRouter">
      跳转
    </a-button>
  </div>
</template>

<script setup lang="ts">
import {Button} from 'ant-design-vue';
import {useRouter} from 'vue-router'

const router = useRouter()
const goRouter = () => {
  router.push({
    name: 'test'
  })
}
</script>

<style scoped lang="scss">

</style>

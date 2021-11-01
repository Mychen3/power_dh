<template>
  <a-config-provider :locale="locale">
  <router-view></router-view>
  </a-config-provider>
</template>

<script lang="ts" setup>
import IconFont  from '@/hooks/usemenuicon'
const iconfont  = IconFont

import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/locale/zh_CN';



document.title='往的博客-分享技术记录生活'
</script>

<style scoped lang="scss">

</style>

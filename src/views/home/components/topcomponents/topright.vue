<template>
  <div class="topright-content">
    <div @click="handleFullScreen">
      <FullscreenOutlined v-show="FullScreenImg"/>
      <FullscreenExitOutlined v-show="!FullScreenImg" />
    </div>
  </div>
</template>

<script setup>
import {FullscreenOutlined,FullscreenExitOutlined} from '@ant-design/icons-vue';
import {handleFullScreen,FullScreenImg} from '../../hooks/useFullScreen'



</script>

<style scoped lang="scss">
.topright-content {
  @include flexCenter;
  cursor: pointer;

  & > div {
    width: 40px;
    text-align: center;
    transition: background-color, transform 0.25s linear;
  }

  & > div:hover {
    background-color: rgb(246, 246, 246);
    transform: scale(1.2, 1.2);
  }
}
</style>

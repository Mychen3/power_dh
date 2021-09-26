<template>
  <div class="infoMsg-content">
    <a-affix class="infoMsg-affix" :offset-top="200">
      <a-space direction="vertical" :size="20" align="center">
        <a-avatar @click="onGoto" :size="40" style="cursor: pointer">
          <template #icon>
            <GithubOutlined/>
          </template>
        </a-avatar>
        <a-tooltip placement="left">
          <template #title>
            <span>QQ:97491530</span>
          </template>
          <a-avatar :size="40">
            <template #icon>
              <QqOutlined/>
            </template>
          </a-avatar>
        </a-tooltip>
        <a-tooltip placement="left">
          <template #title>
            <span>wechat:czl97491530</span>
          </template>
        <a-avatar :size="40">
          <template #icon>
            <WechatOutlined/>
          </template>
        </a-avatar>
        </a-tooltip>
      </a-space>


    </a-affix>
  </div>
</template>

<script setup lang="ts">
import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons-vue';

const onGoto = (): void => {
   window.open('https://github.com/Mychen3')

}

</script>

<style scoped lang="scss">
.infoMsg-content {
  @include boxsize;
  position: relative;

}

.infoMsg-affix {
  position: absolute;
  left: 15vw;

}
</style>

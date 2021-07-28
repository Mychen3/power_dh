<template>
  <div class="content-main">
    <a-layout>
      <a-layout-sider
          v-model:collapsed="collapsed"
          breakpoint="lg"
          :collapsible="true"
          :collapsedWidth="shrinkWidth"
          :trigger="null"
          @breakpoint="onBreakpoint">
        <div class="logo">
        <img :src="login" alt="logo" >
          <span v-show="!collapsed"> 前端导航</span>
        </div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <user-outlined/>
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined/>
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined/>
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <div>
          <a-layout-header>
            <div>
              <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsedOpen"/>
              <menu-fold-outlined v-else class="trigger" @click="collapsedClose"/>
            </div>
          </a-layout-header>
          <a-layout-content>
            <div @click="maskClose" :class="{'content-mask':showMask}"></div>
            <div>
              123
            </div>
          </a-layout-content>
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import {Layout, Menu} from "ant-design-vue";
import {UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons-vue';
import {collapsed, brokenData, shrinkWidth, siderPosition, showMask} from './hooks/headerData'
import {collapsedOpen, collapsedClose, maskClose} from './hooks/useMenuMethods'
import {login} from 'ass/pictureData'
import {watch} from 'vue'


// 触发响应式布局断点时的回调
const onBreakpoint = (broken: boolean): void => {
  brokenData.value = broken
}


watch(brokenData, (newV: boolean): void => {
  if (newV) {
    shrinkWidth.value = 0
    siderPosition.value = 'fixed'

  } else {
    shrinkWidth.value = 48
    siderPosition.value = 'relative'
    showMask.value = false

  }
})


</script>

<style scoped lang="scss">
@import "style/home";

.ant-layout-sider {
  height: 100%;
  position: v-bind(siderPosition);
  z-index: 1;
}


</style>

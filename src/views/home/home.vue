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
          <img :src="login" alt="logo">
          <span v-show="!collapsed">{{MENU_NAME}}</span>
        </div>

        <a-menu @click="funs"  theme="dark" mode="inline" >
          <template v-for="(item,index) in showone_level" :key="item.name">
            <template  v-if="!item.children">
          <a-menu-item :key="item.name" >
            <template #icon>
              <PieChartOutlined />
            </template>
            <span>{{item.meta.title}}</span>
          </a-menu-item>
            </template>
          <a-sub-menu :key="item.name" v-if="item.children" >
            <template #icon>
              <PieChartOutlined />
            </template>
            <template #title >{{item.meta.title}}</template>
            <a-menu-item :key="items.name"  v-for="(items,index) in item.children">{{items.meta.title}}</a-menu-item>
          </a-sub-menu>

          </template>
        </a-menu>

      </a-layout-sider>
      <a-layout>
        <div>
          <a-layout-header>
            <div>
              <div class="top-left">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsedOpen"/>
                <menu-fold-outlined v-else class="trigger" @click="collapsedClose"/>
                <Bread></Bread>
              </div>
              <div class="top-right">
              <Topright></Topright>
              </div>
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
// import {Layout, Menu} from "ant-design-vue";
import {UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined,PieChartOutlined,} from '@ant-design/icons-vue';
import {collapsed, brokenData, shrinkWidth, siderPosition, showMask} from './hooks/headerData'
import {collapsedOpen, collapsedClose, maskClose} from './hooks/useMenuMethods'
import Bread from './components/topcomponents/bread.vue'
import Topright from './components/topcomponents/topright.vue'
import {login} from 'ass/pictureData'
import {MENU_NAME} from '@/config/nameConfig'
import showone_level from '@/router/hooks/useRouter'
import {watch} from 'vue'




const funs=(item:string,key:any,keyPath:string)=>{
  console.log(key)
  console.log(item)

}

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
  z-index: 2;
}



</style>

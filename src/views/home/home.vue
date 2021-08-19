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
          <span v-show="!collapsed">{{ MENU_NAME }}</span>
        </div>
        <a-menu @click="goRouter" theme="dark" mode="inline">
          <template v-for="(item,index) in showone_level" :key="item.name">
            <template v-if="!item.children">
              <a-menu-item :key="item.name">
                <template #icon>
                  <icon-font :style="{ fontSize: '18px' }" :type="item.icon"/>
                </template>
                <span>{{ item.meta.title }}</span>
              </a-menu-item>
            </template>
            <a-sub-menu :key="item.name" v-if="item.children">
              <template #icon>
                <icon-font :style="{ fontSize: '18px' }" :type="item.icon"/>
              </template>
              <template #title>{{ item.meta.title }}</template>
              <a-menu-item :key="items.name" v-for="(items,index) in item.children">{{ items.meta.title }}</a-menu-item>
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
            <router-view v-slot="{ Component }">
              <transition name="leftgo">
                <keep-alive>
                  <component class="componentSty" :is="Component"/>
                </keep-alive>
              </transition>
            </router-view>
          </a-layout-content>
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
// import {Layout, Menu} from "ant-design-vue";
import {UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined,} from '@ant-design/icons-vue';
import {collapsed, brokenData, shrinkWidth, siderPosition, showMask} from './hooks/headerData'
import {collapsedOpen, collapsedClose, maskClose} from './hooks/useMenuMethods'
import Bread from './components/topcomponents/bread.vue'
import Topright from './components/topcomponents/topright.vue'
import {login} from 'ass/pictureData'
import {MENU_NAME} from '@/config/nameConfig'
import showone_level from '@/router/hooks/useRouter'
import IconFont from '@/hooks/usemenuicon'
import {watch} from 'vue'
import {useRouter} from 'vue-router'


const router = useRouter()
// 路由跳转
const goRouter = (item: { key: string }, key: any, keyPath: string) => {
  router.push({
    name: item.key
  })
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


.componentSty {
  @include boxsize;
  overflow-y: auto;
}

.componentSty::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.componentSty::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: rgb(191,191,191);
  background-image: -webkit-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent
  );
}

.componentSty::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}



.leftgo-enter-from,
.leftgo-enter-active {
  animation: leftgo 1s ease 0s 1 normal forwards;
}

@keyframes leftgo {
  0% {
    opacity: 0;
    transform: translateX(-70px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.ant-layout-sider {
  height: 100%;
  position: v-bind(siderPosition);
  z-index: 2;
}


</style>

<template>
  <div class="topright-content">
    <div @click="handleFullScreen">
      <FullscreenOutlined style="font-size: 17px" v-show="FullScreenImg"/>
      <FullscreenExitOutlined style="font-size: 17px" v-show="!FullScreenImg"/>
    </div>
    <div>
      <a-popover trigger="click">
        <template #content>
          <div class="popover-content" ref="scrollRef">
            <a-divider
            >代办事件
              <CoffeeOutlined style="color: rgb(70, 167, 218)"/>
            </a-divider>
            <a-card class="popover-card">
              <span>123123123123123123123123123123123112312323</span>
            </a-card>
            <a-card class="popover-card">
              <span>123123123123123123123123123123123112312323</span>
            </a-card>
            <a-card class="popover-card">
              <span>123123123123123123123123123123123112312323</span>
            </a-card>
            <a-card class="popover-card">
              <span>123123123123123123123123123123123112312323</span>
            </a-card>
            <a-card class="popover-card">
              <span>123123123123123123123123123123123112312323</span>
            </a-card>
            <a-card class="popover-card">
              <span>123123123123123123123123123123123112312323</span>
            </a-card>
          </div>
        </template>
        <div class="popover-badge">
          <a-badge dot>
            <BellOutlined style="font-size: 17px"/>
          </a-badge>
        </div>
      </a-popover>
    </div>
    <div>
      <a-popover>
        <template #content>
          <div class="topright-login">
            <div @click="showDrawer = true">
              <SmileOutlined/>
              <span>登录账号</span>
            </div>
            <div>
              <SkinOutlined/>
              <span>注册账号</span>
            </div>
          </div>
        </template>
        <a-avatar size="small">
          <template #icon>
            <UserOutlined/>
          </template>
        </a-avatar>
      </a-popover>
    </div>
    <a-drawer
        :width="drawerWidth"
        placement="right"
        :closable="false"
        :bodyStyle="drawer_sty.sty"
        v-model:visible="showDrawer">
      <login></login>
    </a-drawer>

  </div>
</template>

<script setup lang="ts">
import {Space, Badge, Popover, Avatar, Divider, Card, Drawer} from "ant-design-vue";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
  UserOutlined,
  CoffeeOutlined,
  SmileOutlined,
  SkinOutlined,
} from "@ant-design/icons-vue";
import {handleFullScreen, FullScreenImg} from "../../hooks/useFullScreen";
import {scrollRef, scrollLoadDown} from "../../hooks/usescroll";
import throttle from 'hk/usethrottle'
import login from './login.vue'
import {watch, ref, reactive} from "vue";
import type {drawerSty} from '../../hooks/login'

const showDrawer = ref<boolean>(false)
const drawerWidth =ref<number>(450)

const drawer_sty = reactive({
  sty: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%'
  } as drawerSty
})

// 监听代办事件DOM,DOM打开就有元素 避免querySelector拿不到元素
watch(
    () => scrollRef,
    (newV: HTMLElement | object): void => {
      document.querySelector(".popover-content")?.addEventListener("scroll", throttle(scrollLoadDown, 1000));
    },
    {deep: true}
);
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

.popover-badge {
  width: 100%;
  height: 100%;
}

.popover-content {
  height: 500px;
  width: 200px;
  overflow-y: auto;
  position: relative;
}

.popover-card {
  height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
}

.popover-content::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.popover-content::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: skyblue;
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

.popover-content::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.topright-login {
  display: flex;
  flex-direction: column;
  width: 120px;
  font-size: 16px;


  & > div {
    text-align: center;
    line-height: 35px;
    height: 35px;
    width: 100%;
    position: relative;
  }

  & > div:hover {
    background-color: rgb(246, 246, 246);
    cursor: pointer;
  }

  & > div > span {
    margin-left: 10px;
  }
}

@media screen and (max-width: 991.98px) {

}


</style>

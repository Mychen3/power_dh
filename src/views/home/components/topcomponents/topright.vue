<template>
  <div class="topright-content">
    <div @click="handleFullScreen">
      <FullscreenOutlined style="font-size: 17px" v-show="FullScreenImg"/>
      <FullscreenExitOutlined style="font-size: 17px" v-show="!FullScreenImg"/>
    </div>
    <div>
      <a-popover trigger="click">
        <template #content>
          <div class="popover-content">
            <a-divider>代办事件
              <CoffeeOutlined style="color:rgb(70,167,218)"/>
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
      <a-avatar size="small">
        <template #icon>
          <UserOutlined/>
        </template>
      </a-avatar>
    </div>

  </div>
</template>

<script setup>
import {Space, Badge, Popover, Avatar, Divider, Card} from 'ant-design-vue'
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
  UserOutlined,
  CoffeeOutlined
} from '@ant-design/icons-vue';
import {handleFullScreen, FullScreenImg} from '../../hooks/useFullScreen'


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
  word-break: break-all

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

@media screen and (max-width: 991.98px) {


}

</style>

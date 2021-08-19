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

    <!--未登录状态-->
    <div v-if="login_once()">
      <a-dropdown>
        <UserOutlined style="font-size: 17px"/>
        <template #overlay>
          <a-menu style="width: 120px;text-align: center; top: 13px">
            <a-menu-item>
              <div @click="onShowLogin">
                <SmileOutlined/>
                <span style="margin-left: 10px">登录账号</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <a-drawer
        :width="drawerWidth"
        placement="right"
        :closable="false"
        :bodyStyle="drawer_sty.sty"
        v-model:visible="showDrawer">
      <Login @closeLogin="closeLogin"></Login>
    </a-drawer>
    <!--登录状态-->
    <div v-if="!login_once()">
      <Usetx Size="20px"></Usetx>
    </div>
    <div v-if="!login_once()" style="width: 80px">
      <a-dropdown>
        <span class="usename">{{ useName }}</span>
        <template #overlay>
          <a-menu style="width: 120px;text-align: center; top: 13px">
            <a-menu-item>
              <div>
                <WindowsOutlined style="font-size: 16px;color: #0099ff"/>
                <span style="margin-left: 10px">工作主页</span>
              </div>
            </a-menu-item>
            <a-menu-item>
              <div @click="signOut">
                <SendOutlined style="font-size: 16px;color: #0099ff"/>
                <span style="margin-left: 10px">退出用户</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
  <a-alert
      v-if="showTip()"
      style="position: fixed;right: 0;top: 50px"
      message="喝杯咖啡，静下心来工作吧！"
      description="Where there's a will, ·there's a way, kind of beautiful"
      type="success"
      :closable="true"
      show-icon/>
</template>

<script setup lang="ts">
// import {Space, Badge, Popover, Avatar, Divider, Card, Drawer} from "ant-design-vue";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
  UserOutlined,
  CoffeeOutlined,
  SmileOutlined,
  SkinOutlined,
  WindowsOutlined,
  SendOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons-vue";
import {handleFullScreen, FullScreenImg,} from "../../hooks/useFullScreen";
import {scrollRef, scrollLoadDown} from "../../hooks/usescroll";
import throttle from 'hk/usethrottle'
import Login from './webLogin.vue'
import {watch, ref, reactive, onMounted, createVNode, nextTick} from "vue";
import type {drawerSty} from '../../hooks/login'
import useSignout from '../../hooks/useSignout'
import useStore from '@/store/index'
import {Modal} from 'ant-design-vue';


// pinia状态管理
const Store = useStore()
// 控制抽屉显示隐藏
const showDrawer = ref<boolean>(false)
// 抽屉宽度
const drawerWidth = ref<number>(450)
// 页面宽度
const changewidth = ref<number>(0)
// 用户名字
const useName = ref<string>('')



/*
* @name: 控制提示款是否是第一次显示
* @param:
* @return:boolean
* */
const showTip = (): boolean => {
  if (window.sessionStorage.getItem('loginTip') == '0') {
    window.sessionStorage.setItem('loginTip', '1')
    return true
  } else {
    return false
  }
}



/*
* @name: 登录完关闭抽屉
* @param:
* @return:void
* */
const closeLogin = (): void => {
  showDrawer.value = false
}

/*
* @name: 控制登录以后头像和用户信息
* @param:
* @return: boolean
* */
const login_once = (): boolean => {
  if (Store.token != '' && Store.user != {}) {
    useName.value = Store.user.nickname
    return false
  } else {
    return true
  }
}

/*
* @name: 退出用户
* @param:
* @return: void
* */
const signOut = () => {
  Modal.confirm({
    title: '你真的舍得离开我们吗?',
    icon: createVNode(ExclamationCircleOutlined),
    content: createVNode('div', {style: 'color:red;'}, 'Where there s a will,there s a way, kind of beautiful'),
    onOk() {
      useSignout()
    },
    onCancel() {
    },
  });
}

const drawer_sty = reactive({
  sty: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%'
  } as drawerSty
})


/*
@name: 监听页面大小回调函数
@return: void
*/
const onresize_change = (): void => {
  changewidth.value = document.documentElement.clientWidth
  if (changewidth.value < 992) {
    showDrawer.value = false
  }
}


/*
@name: 点击登录识别是是小屏登录还是大屏
@return: void
*/
const onShowLogin = (): void => {
  if (changewidth.value > 992) {
    showDrawer.value = true
  }
}

// 节流回调函数监听页面大小
nextTick(() => {
  window.onresize = throttle(onresize_change, 1000)
})

// 监听代办事件DOM,DOM打开就有元素 避免querySelector拿不到元素
watch(
    () => scrollRef,
    (newV: HTMLElement | object): void => {
      document.querySelector(".popover-content")?.addEventListener("scroll", throttle(scrollLoadDown, 1000));
    },
    {deep: true}
);

onMounted(() => {
  changewidth.value = document.documentElement.clientWidth


})

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
    transform: scale(1.1, 1.1);
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
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.popover-content::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: rgb(191, 191, 191);
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

.usename {
  font-size: 16px;
  color: rgba(0, 0, 0, .85);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}


</style>

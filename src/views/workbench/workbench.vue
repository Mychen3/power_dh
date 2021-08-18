<template>

  <div class="workbench-content">
    <div class="workbench-top">
      <div>
        <usetx Size="70px"></usetx>
        <div>
          <div class="workbench-top-tip">
            <div>您好，{{ store.user?.nickname }}，开始您一天愉快的工作吧！</div>
            <div style="font-size: 14px">Where there's a will, ·there's a way, kind of beautiful</div>
          </div>
        </div>
      </div>
      <div class="workbench-top-sj">
        <div>当前待办事件</div>
        <div>2/10</div>
      </div>
    </div>
    <div class="workbench-box">
   <Workbench-main></Workbench-main>
    </div>
  </div>

</template>

<script lang="ts" setup>
import useStore from '@/store/index'
import WorkbenchMain from './components/workbenchMain.vue'
import dayjs from "dayjs";
import {ref} from 'vue'
const store = useStore()


</script>

<style scoped lang="scss">
 @import "style/workbench";

.workbench-content {
  @include boxsize;
  overflow-y: auto;
}

.workbench-content::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.workbench-content::-webkit-scrollbar-thumb {
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

.workbench-content::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.workbench-top {
  height: 110px;
  background-color: white;
  border-top: 1px solid #e4e4e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  & > div {
    display: flex;
  }
}

.workbench-top-tip {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 18px;
}

.workbench-top-sj {
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    font-size: 14px;
  }

  & > div:nth-child(2) {
    font-size: 21px;
  }
}

@media screen and (max-width: 991.98px) {
  .workbench-top {
    padding: 0 8px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
       &>div:nth-child(1){
         display: flex;
         flex-direction: column;
       }
  }
  .workbench-top-tip {
    font-size: 13px;
    margin-top: 10px;
  }
  .workbench-top-sj {
    display: flex;
    flex-direction: column;
    margin-left: 70%;
    margin-top: 10px;

    & > div:nth-child(1) {
      font-size: 12px;
    }

    & > div:nth-child(2) {
      font-size: 18px;
    }
  }


}
</style>

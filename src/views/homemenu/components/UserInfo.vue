<template>
  <div class="userInfo-content">
    <div>
      <a-space direction="vertical" :size="16" align="center">
        <a-avatar :size="64" src="https://test-chen-66.oss-cn-hangzhou.aliyuncs.com/power/public/avatar.jpg"></a-avatar>
        <span>往</span>
        <span style="color:#86909c ">有志者事竟成，多么美好的事情</span>
        <a-row>
          <a-col :span="8">
            <a-tag color="#f50">
              热爱编码
            </a-tag>
          </a-col>
          <a-col :span="8">
            <a-tag color="#2db7f5">
              游戏玩家
            </a-tag>
          </a-col>
          <a-col :span="8">
            <a-tag color="#87d068">
              努力奋斗
            </a-tag>
          </a-col>
        </a-row>
        <span style="font-size: 18px">
          Tech Stack
        </span>
        <div style="width: 170px">
          <a-progress :stroke-color="{ '0%': '#FCCF31', '100%': '#F55555', }" :format="() => 'JavaScript'" :percent="85"
                      size="small"/>
          <a-progress :stroke-color="{ '0%': '#108ee9', '100%': '#87d068', }" :percent="90" size="small"
                      :format="() => 'CSS'"/>
          <a-progress :stroke-color="{ '0%': '#72EDF2', '100%': '#5151E5', }" :percent="95" size="small"
                      :format="() => 'HTML5'"/>
          <a-progress :stroke-color="{ '0%': '#FFA8A8', '100%': '#FCFF00', }" :percent="95" size="small"
                      :format="() => 'Vue'"/>
        </div>
      </a-space>
    </div>
    <div>
      <span @click="onGoto" style="cursor: pointer">湘ICP备19022890号</span>
      <span>系统由 Vue3 + TypeScript + Node</span>
      <span>Koa2 + Ant Design Vue 驱动</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const onGoto = () => {
    window.open('https://beian.miit.gov.cn/')
}

</script>

<style scoped lang="scss">

.userInfo-content {
  @include boxsize;
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    margin: 0 40px;
    padding: 15px;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    display: flex;
    justify-content: center;

  }

  & > div:nth-child(2) {
    margin: 10px 40px;
    padding: 15px;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #86909c
  }

}
</style>

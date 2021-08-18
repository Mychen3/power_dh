<template>
  <div class="work-content">
    <!-- 左边 -->
    <div class="work-right">
      <a-row>
        <a-col v-for="itme in 8" :xs="24" :lg="6">
          <box-card></box-card>
        </a-col>
      </a-row>
      <workbench-list></workbench-list>
    </div>
    <!-- 右边-->
    <div class="work-left">
      <a-card title="快捷工具台">
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-zhuye1"/>
          <div>首页</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-daibanshixiang"/>
          <div>待办</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-tianjia"/>
          <div>添加导航</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-dengdai"/>
          <div>暂无工具</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-dengdai"/>
          <div>暂无工具</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-dengdai"/>
          <div>暂无工具</div>
        </a-card-grid>
      </a-card>
       <div class="work-img">
         <a-image  :preview="false" class="work-imgs" :src="dataImg"/>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFont from 'hk/usemenuicon'
import WorkbenchList from './workbenchList.vue'
import {dataImg} from 'ass/pictureData'
const icon = IconFont




</script>
<style scoped lang="scss">
@import "../style/workbench";
@import "../style/glFlex.css";


</style>

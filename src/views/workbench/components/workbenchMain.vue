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
        <a-card-grid class="card-tool" @click="onShowNav">
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
        <a-image :preview="false" class="work-imgs" :src="dataImg"/>
      </div>
      <div>
        <a-card title="任务完成潜力" style="width: 100%">
          <work-echarts></work-echarts>
        </a-card>
      </div>
      <div>
      </div>
    </div>
  </div>
  <a-drawer :destroyOnClose="true" closable title="添加导航" placement="right" width="650" :closable="false" v-model:visible="addShowNav">
    <Work-DrawerForm></Work-DrawerForm>
  </a-drawer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import IconFont from 'hk/usemenuicon'
import {message} from 'ant-design-vue'
import WorkDrawerForm from './workDrawerForm.vue'
import WorkbenchList from './workbenchList.vue'
import WorkEcharts from '../components/workEcharts.vue'
import {dataImg} from 'ass/pictureData'
import useStore from '@/store/index'

const icon = IconFont
const store = useStore()

// 控制抽屉打开关闭
const addShowNav = ref<boolean>(false)

const onShowNav = (): void => {
  if (store.clientWidth as number > 992) {
    addShowNav.value = true
  } else {
    message.warning('请在电脑上添加导航')
  }
}


</script>
<style scoped lang="scss">
@import "../style/workbench";
@import "../style/glFlex.css";


</style>

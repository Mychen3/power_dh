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
          <icon-font :style="{ fontSize: '20px' }" type="icon-zhuye1" />
          <div>首页</div>
        </a-card-grid>
        <a-popover title="添加待办" trigger="click" v-model:visible="taskShow">
          <template #content>
            <a-spin :spinning="showLoad">
              <a-form ref="taskFormRef" :model="taskForm_data" :rules="taskRules">
                <a-form-item :autoLink="false" label="待办名称" name="task_title">
                  <a-input v-model:value="taskForm_data.task_title" />
                </a-form-item>
                <a-form-item :autoLink="false" label="完成内容" name="task_content">
                  <a-textarea
                    v-model:value="taskForm_data.task_content"
                    placeholder="输入完成任务"
                    :auto-size="{ minRows: 2, maxRows: 5 }"
                  />
                </a-form-item>
                <a-form-item label="日期安排" name="task_startDate" required>
                  <a-date-picker
                    placeholder="请选择开始日期"
                    style="width: 100%"
                    v-model:value="taskForm_data.task_startDate"
                    :allowClear="true"
                    :showToday="false"
                  />
                </a-form-item>
                <a-form-item style="text-align: center">
                  <a-space>
                    <a-button type="primary" @click="add_Task">添加</a-button>
                    <a-button type="primary" @click="taskReset">重置</a-button>
                  </a-space>
                </a-form-item>
              </a-form>
            </a-spin>
          </template>
          <a-card-grid class="card-tool" @click="taskShow = true">
            <icon-font :style="{ fontSize: '20px' }" type="icon-daibanshixiang" />
            <div>待办</div>
          </a-card-grid>
        </a-popover>
        <a-card-grid class="card-tool" @click="onShowNav">
          <icon-font :style="{ fontSize: '20px' }" type="icon-tianjia" />
          <div>添加导航</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-dengdai" />
          <div>暂无工具</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-dengdai" />
          <div>暂无工具</div>
        </a-card-grid>
        <a-card-grid class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-dengdai" />
          <div>暂无工具</div>
        </a-card-grid>
      </a-card>
      <div class="work-img">
        <a-image :preview="false" class="work-imgs" :src="dataImg" />
      </div>
      <div>
        <a-card title="任务完成潜力" style="width: 100%">
          <work-echarts></work-echarts>
        </a-card>
      </div>
      <div></div>
    </div>
  </div>
  <a-drawer
    :destroyOnClose="true"
    closable
    title="添加导航"
    placement="right"
    width="650"
    :closable="false"
    v-model:visible="addShowNav"
  >
    <WorkDrawerForm></WorkDrawerForm>
  </a-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconFont from 'hk/usemenuicon'
import { message } from 'ant-design-vue'
import WorkDrawerForm from './workDrawerForm.vue'
import WorkbenchList from './workbenchList.vue'
import WorkEcharts from '../components/workEcharts.vue'
import { dataImg } from 'ass/pictureData'
import useStore from '@/store/index'
import { taskRules, taskForm_data, showLoad } from '../hooks/useFormData'
import addTask from "../hooks/useAddtask";
import { validateType } from '../hooks/formdata'

const icon = IconFont
const store = useStore()

// 控制抽屉打开关闭
const addShowNav = ref<boolean>(false)
// 控制待办事件抽屉开关
const taskShow = ref<boolean>(false)

const taskFormRef = ref<validateType>()

// 添加待办事件
const add_Task = (): void => {
  addTask(taskFormRef.value as validateType)
}


// 重置
const taskReset = (): void => {
  Object.keys(taskForm_data).forEach(key => {
    // @ts-ignore
    taskForm_data[key] = "";
  })
  taskForm_data.task_state = 0
}

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

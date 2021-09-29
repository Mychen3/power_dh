<template>
  <div class="work-content">
    <!-- 左边 -->
    <div class="work-right">
      <a-row>
        <a-col v-for="item in randomCard.data" :xs="24" :lg="6" :key="item.card_id">
          <box-card :card_id="item.card_id" :card_love="item.card_love" :title="item.card_title"
                    :content="item.card_content" :cardImg="item.card_imgurl" :card_github="item.card_gitHub"
                    :card_home="item.card_home"></box-card>
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
        <a-popover title="添加待办" trigger="click" v-model:visible="taskShow">
          <template #content>
            <a-spin :spinning="showLoad">
              <a-form ref="taskFormRef" :model="taskForm_data" :rules="taskRules">
                <a-form-item :autoLink="false" label="待办名称" name="task_title">
                  <a-input v-model:value="taskForm_data.task_title"/>
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
            <icon-font :style="{ fontSize: '20px' }" type="icon-daibanshixiang"/>
            <div>待办</div>
          </a-card-grid>
        </a-popover>
        <a-card-grid class="card-tool" @click="onShowNav">
          <icon-font :style="{ fontSize: '20px' }" type="icon-tianjia"/>
          <div>添加导航</div>
        </a-card-grid>
        <a-card-grid @click="showTaskList=true" class="card-tool">
          <icon-font :style="{ fontSize: '20px' }" type="icon-liebiao"/>
          <div>任务列表</div>
        </a-card-grid>
        <a-card-grid class="card-tool" @click="showArticle=true" >
          <icon-font :style="{ fontSize: '20px' }" type="icon-bianxie"/>
          <div>发布文章</div>
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
      <div></div>
    </div>
    <!-- 任务列表-->
    <teleport to="#app">
      <mixmodel v-model:visible="showTaskList">
        <TaskList @close="close"></TaskList>
      </mixmodel>
      <mixmodel v-model:visible="showArticle">
        <Article @close="showArticle=false"></Article>
      </mixmodel>
    </teleport>
  </div>
  <a-drawer
      :destroyOnClose="true"
      title="添加导航"
      placement="right"
      width="650"
      :closable="false"
      v-model:visible="addShowNav">
    <WorkDrawerForm></WorkDrawerForm>
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
import {taskRules, taskForm_data, showLoad} from '../hooks/useFormData'
import addTask from "../hooks/useAddtask";
import type {validateType} from '../hooks/formdata'
import {randomCard, getRandomCard} from '@/hooks/useGetRandomCard'
import TaskList from './Tasklist.vue'
import  Article from './Article.vue'
import {onBeforeRouteLeave} from 'vue-router'

// 控制任务表格显示隐藏
const showTaskList = ref<boolean>(false)
// 控制文章发布显示隐藏
const showArticle = ref<boolean>(false)

// 关闭任务列表页
const close = () => {
  showTaskList.value = false
}

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


// 控制是否在大屏显示
const onShowNav = (): void => {
  if (store.clientWidth as number > 992) {
    addShowNav.value = true
  } else {
    message.warning('请在电脑上添加导航')
  }
}

// 离开该路由
onBeforeRouteLeave((to, from) => {
  showTaskList.value = false
  showArticle.value =false
})


getRandomCard(8)


</script>
<style scoped lang="scss">
@import "../style/workbench";
@import "../style/glFlex.css";


</style>

<template>
  <div class="workList">
    <a-list item-layout="horizontal" :data-source="list_data.DayList">
      <template #header>
        <div style="font-size: 16px;display: flex;justify-content: space-between"><span>今日待完成任务</span> <span
            style="padding-right: 20px">日期：{{ dayDate }}</span></div>
      </template>
      <template #renderItem="{ item }">
          <a-list-item >
            <template #actions>
              <a-tag :color="item.task_state == 0 ? 'warning':'success'">{{item.task_state == 0? '等待世间美好':'已完成'}}</a-tag>
              <a-button size="small" type="primary" :disabled="item.task_state == 1" @click="successTask(item.task_id)" >完成任务</a-button>
            </template>
            <a-list-item-meta
                :description="item.task_content">
              <template #title>
                {{ item.task_title }}
              </template>
              <template #avatar>
                <a-avatar :src="taskImg"/>
              </template>
            </a-list-item-meta>
          </a-list-item>
      </template>
    </a-list>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {taskImg} from 'ass/pictureData'
import {successTask_req} from 'api/task/task'
import dayjs from "dayjs";
import {message} from 'ant-design-vue'
import { getDayList, list_data} from '../hooks/useGetDayList'
const dayDate = ref(dayjs(new Date()).format("YYYY-MM-DD"))


/*
* @name:完成任务
* @param: task_id:任务的id
* @param: task_state: 任务的状态
* @return: promise
* */
const successTask = async (task_id:number) => {
  const req_data = await successTask_req({
    task_id
  })
  if (req_data.data.statusCode == 200) {
    message.success('学海无涯苦作舟')
      await getDayList()
  }
}

onMounted(() => {
  getDayList()
})


</script>

<style scoped lang="scss">


.workList {
  background-color: #ffffff;
  margin-top: 10px;
  padding-left: 20px;
}

</style>

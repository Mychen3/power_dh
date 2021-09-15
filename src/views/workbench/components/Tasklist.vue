<template>
  <div class="taskList-box">
    <div>
      <a-space style="margin-bottom: 5px">
        <a-date-picker placeholder="查询日期" @change="onPickrChange"/>
        <a-select :allowClear="true" @change="onSelectChange" style="width: 150px">
          <a-select-option value="0">未完成</a-select-option>
          <a-select-option value="1">已完成</a-select-option>
        </a-select>
      </a-space>
      <div>
        <RollbackOutlined @click="()=>{emits('close')}" style="font-size: 20px; margin-right: 10px"/>
      </div>
    </div>
    <a-table :loading="showLoading" :scroll="{y:tableHeight+'px'}" :pagination="false" :columns="listData.columns"
             rowKey="task_id"
             :data-source="listData.data">
      <template #task_state="{text}">
        <a-tag :color="text == 0 ? 'warning':'success'">{{ text == 0 ? '等待世间美好' : '已完成' }}</a-tag>
      </template>
      <template #setTable="{record}">
        <a-space>
          <a-button type="primary" @click="onDelTask(record.task_id)">删除</a-button>
        </a-space>
      </template>
    </a-table>
    <div style="margin-top: 10px;display: flex;justify-content: end">
      <a-pagination @change="onChange" v-model:current="query_Param.current" :total="total" showLessItems
                    v-model:pageSize="query_Param.pageSize" :showTotal="() => `共 ${total} 条 `"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, createVNode} from 'vue'
import {ExclamationCircleOutlined} from '@ant-design/icons-vue';
import type {listDataType, queryParam, columnsType} from '../hooks/taskList'
import {queryTask_req, delTask_req} from 'api/task/task'
import {RollbackOutlined} from '@ant-design/icons-vue'
import dayjs from "dayjs";
import {message, Modal} from 'ant-design-vue';


const listData = reactive({
  columns: [{
    title: '待办名称',
    align: 'center',
    dataIndex: 'task_title',
    key: 'task_title'
  },
    {
      title: '待办内容',
      dataIndex: 'task_content',
      align: 'center',
      key: 'task_content'
    },
    {
      title: '待办当前状态',
      dataIndex: 'task_state',
      align: 'center',
      slots: {customRender: 'task_state'},
      key: 'task_state'
    },
    {
      title: '待办开始时间',
      dataIndex: 'task_startDate',
      align: 'center',
      key: 'task_startDate'
    },
    {
      title: '待办完成时间',
      dataIndex: 'task_endDate',
      align: 'center',
      key: 'task_endDate'
    },
    {
      title: '操作',
      align: 'center',
      key: 'setTable',
      slots: {customRender: 'setTable'}
    }],
  data: [{}]
}) as listDataType

// 表格高度
const tableHeight = ref<number>(window.innerHeight - 210)
// 总数
const total = ref<number>()
// loding
const showLoading = ref<boolean>(false)

const query_Param = reactive<queryParam>({
  task_start_date: null,
  task_state: null,
  pageSize: 15,
  current: 1
})

const emits = defineEmits(['close'])


const getData = async (): Promise<void> => {
  showLoading.value = true
  listData.data.length = 0;
  let data_req = await queryTask_req(query_Param).finally(() => showLoading.value = false)
  if (data_req.data.statusCode == 200) {
    total.value = data_req.data.count
    data_req.data.data.forEach((item: columnsType) => {
      item.task_startDate = dayjs(item.task_startDate).format('YYYY/MM/DD')
      item.task_endDate = dayjs(item.task_endDate).format('YYYY/MM/DD') == 'Invalid Date' ? '未完成待办' : dayjs(item.task_endDate).format('YYYY/MM/DD')
      listData.data.push(item)
    })
  }
}


const onPickrChange = (date: string, dateString: string): void => {
  query_Param.task_start_date = dateString
  query_Param.current = 1
  getData()
}

const onSelectChange = (value: number): void => {
  query_Param.task_state = value
  query_Param.current = 1
  getData()

}
const onChange = (page: number) => {
  query_Param.current = page
  getData()
}


const onDelTask = (id: number): void => {
  Modal.confirm({
    title: '确定要删除吗??',
    icon: createVNode(ExclamationCircleOutlined),
    content: '删除操作不可逆转!',
    okText: '想好了',
    okType: 'danger',
    cancelText: '算了',
    async onOk() {
      const data_req = await delTask_req({task_id: id})
      if (data_req.data.statusCode == 200) {
        message.success(data_req.data.msg)
        query_Param.current = 1
        await getData()
      }
    },
  });


}

getData()

</script>

<style scoped lang="scss">

::v-deep(.ant-table table) {


}

.taskList-box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

  }
}


</style>

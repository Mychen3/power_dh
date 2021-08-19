<template>
<div class="workList">
  <a-list  item-layout="horizontal" :data-source="data">
    <template #header>
      <div style="font-size: 16px">今日待完成任务</div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar :src="taskImg" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>

</div>
</template>

<script setup lang="ts">
import {taskImg} from 'ass/pictureData'

interface DataItem {
  title: string;
}

const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
</script>

<style scoped lang="scss">

.workList{
  background-color: #ffffff;
  margin-top: 10px;
  padding-left: 20px;
}

</style>

<template>
  <div class="box-article">
    <div>
      <a-space size="middle">
        <div>
          <CalendarOutlined/>
          <span style="margin-left: 10px">{{ formatDate(props.article_startDate) }}</span>
        </div>
        <div>
          <FolderOpenOutlined/>
          <span style="margin-left: 2px">
          {{ formatType(props.article_type) }}
          </span>
        </div>
      </a-space>
    </div>
    <div>
      <span>{{ props.article_title }}</span>
    </div>
    <div>
      <span>{{ formatContent(props.article_content) }}</span>
    </div>
    <div>
      <span><RightSquareTwoTone style="margin-right: 8px"/>详细文章...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CalendarOutlined, FolderOpenOutlined, RightSquareTwoTone} from '@ant-design/icons-vue';
import dayjs from "dayjs";
import {ArticleType} from 'hk/labels'

const props = defineProps({
  article_id: Number,
  article_title: String,
  article_content: String,
  article_startDate: String,
  article_type: Number,
})

const formatType = (type: number|undefined): string => {
  let val: string = '';
  ArticleType.forEach((item: { name: string, val: number }) => {
    if (item.val == type) {
      val = item.name
    }
  })
  return val
}


const formatDate = (dateValue: string|undefined): string => {
  return dayjs(dateValue).format('YYYY-MM-DD')
}

const formatContent = (strValue: string | null |any): string => {
  if (strValue !== null && strValue !== '') {
    const reg = /[\u4e00-\u9fa5]/g;
    return (strValue.match(reg) as Array<string>)?.join('') ;
  }
  return '';
}


</script>

<style scoped lang="scss">
.box-article {
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #e5e6eb;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 20px;

  &:hover {
    background-color: rgb(250, 250, 250);
  }

  & > div:nth-child(1) {
    color: #86909c;
    margin-top: 5px;
  }

  & > div:nth-child(2) {
    color: #1d2129;
    font-size: 18px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
  }

  & > div:nth-child(3) {
    color: #86909c;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
  }

  & > div:nth-child(4) {
    display: flex;
    justify-content: end;
    margin-top: 15px;
    color: rgb(24, 144, 255);
  }
}


</style>

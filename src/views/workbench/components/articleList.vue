<template>
  <div class="taskList-box">
    <div>
      <a-space style="margin-bottom: 5px">
        <span>文章名字：</span>
        <a-input-search v-model:value="query_Param.article_title" @search="getQueryArticleList" placeholder="输入要查询的名字"
                        enter-button/>
        <span>文章类型：</span>
        <a-select :allowClear="true" @change="onSelectChange" style="width: 150px">
          <a-select-option :value="article.val" v-for="article in ArticleType" :key="article.val">{{ article.name }}
          </a-select-option>
        </a-select>
      </a-space>
      <div>
        <RollbackOutlined @click="()=>{emits('close')}" style="font-size: 20px; margin-right: 10px"/>
      </div>
    </div>
    <a-table :loading="showLoading" :scroll="{y:tableHeight+'px'}" :pagination="false" :columns="listData.columns"
             rowKey="article_id" :dataSource="listData.tableData">
      <template #bodyCell="{ column, text, record }">
        <div v-if="['article_id','article_title'].includes(column.key)">{{ text }}</div>
        <div v-else-if="column.key === 'updatedAt'">{{ formatDate(record.updatedAt) }}</div>
        <div v-else-if="column.key === 'article_startDate'">{{ formatDate(record.article_startDate) }}</div>
        <div v-else-if="column.key === 'article_type'">
          <a-tag color="pink">{{ formatArticleType(record.article_type) }}</a-tag>
        </div>
        <div v-else-if="column.key === 'setTable'">
          <a-button type="primary" @click="onUpdateArticle(record.article_id)">编辑</a-button>
        </div>
      </template>
    </a-table>
    <div style="margin-top: 10px;display: flex;justify-content: end">
      <a-pagination @change="onChangePage" v-model:current="query_Param.current" :total="total" showLessItems
                    v-model:pageSize="query_Param.pageSize" :showTotal="() => `共 ${total} 条 `"/>
    </div>
    <teleport to="#app">
      <mixmodel v-model:visible="showUpdateArticle" :indexZ="102">
        <article-update :article_id="updateArticleId" @close="showUpdateArticle = false"></article-update>
      </mixmodel>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import type {articleList, queryParam, articleLisType} from '../hooks/articleList'
import {getArticleDetail, getArticleList,} from '../hooks/articleList'
import {RollbackOutlined} from '@ant-design/icons-vue'
import dayjs from "dayjs";
import {ArticleType} from '@/hooks/labels'
import ArticleUpdate from "view/workbench/components/ArticleUpdate.vue";


const showUpdateArticle = ref<boolean>(false)
const listData = reactive<articleList>({
  columns: [{
    title: '文章id',
    align: 'center',
    dataIndex: 'article_id',
    key: 'article_id'
  },
    {
      title: '文章标题',
      dataIndex: 'article_title',
      align: 'center',
      key: 'article_title'
    },
    {
      title: '文章创建时间',
      dataIndex: 'article_startDate',
      align: 'center',
      key: 'article_startDate'
    },
    {
      title: '文章类型',
      dataIndex: 'article_type',
      align: 'center',
      key: 'article_type'
    },
    {
      title: '文章上次修改时间',
      dataIndex: 'updatedAt',
      align: 'center',
      key: 'updatedAt'
    },
    {
      title: '操作',
      align: 'center',
      key: 'setTable',
    }],
  tableData: []
})

const updateArticleId = ref<number>(0)

// 表格高度
const tableHeight = ref<number>(window.innerHeight - 210)
// 总数
const total = ref<number>(0)
// loding
const showLoading = ref<boolean>(false)

const query_Param = reactive<queryParam>({
  article_title: undefined,
  article_type: undefined,
  current: 1,
  pageSize: 15
})

const emits = defineEmits(['close'])

const formatDate: (dateTarget: string) => string = (dateTarget: string): string => {
  return dayjs(dateTarget).format('YYYY-MM-DD HH:mm:ss')
}

const formatArticleType: (typeTarget: number) => string | undefined = (typeTarget: number): string | undefined => {
  return ArticleType.find((article: { val: number, name: string }) => article.val == typeTarget)?.name
}

const onChangePage = (page: number, pageSize: number): void => {
  query_Param.current = page
}

const getQueryArticleList = async (): Promise<void> => {
  showLoading.value = true
  listData.tableData.length = 0
  let articleListData = await getArticleList(query_Param)
  if (articleListData) {
    total.value = articleListData.count
    articleListData.data.forEach((article: articleLisType) => {
      listData.tableData.push(article)
    })
    showLoading.value = false
  }
}

const onSelectChange = (val: number): void => {
  query_Param.article_type = val
  getQueryArticleList()
}

const onUpdateArticle = (article_id: number): void => {
  showUpdateArticle.value = true
  updateArticleId.value =article_id
}

getQueryArticleList()

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

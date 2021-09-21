<template>
  <div  class="article-details">
    <a-row class="content-row">
      <a-col :xs="0" :lg="5">Col</a-col>
      <a-col :xs="24" :lg="14">
        <div class="article-details-top">
          <FireOutlined style="margin-right: 5px"/>
          {{ detailsText.title }}
        </div>
        <loding v-if="loading.lodingShow" :title="loading.lodingtext"></loding>
        <v-md-preview  ref="previewRef" :text="detailsText.text"></v-md-preview>
      </a-col>
      <a-col :xs="0" :lg="5"> <CatalogueArticle  :articleDetailsDom="articleDetailsDom"  :previewRef="previewRef"></CatalogueArticle> </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent  } from "vue";
export default defineComponent({
  name: "articleDetails",
});
</script>

<script setup lang="ts">

import {ArticleId_req} from 'api/article/article'
import {reactive, onMounted, ref,defineComponent} from 'vue'
import {useRoute} from 'vue-router'
import {FireOutlined} from '@ant-design/icons-vue';
const route = useRoute()

interface detailsText {
  text: string,
  title: string,
}
interface loadingType {
  lodingtext: string,
  lodingShow: boolean
}
const previewRef =ref<HTMLElement|any>()

const articleDetailsDom = ref<HTMLElement|any>()

const loading = reactive<loadingType>({
  lodingtext: '正在加载中,请稍等！',
  lodingShow: false
})

const detailsText = reactive<detailsText>({
  text: '',
  title: ''
})

const getDetailsData = async (): Promise<void> => {
  loading.lodingShow = true
  const dataReq = await ArticleId_req({article_id: route.query.article_id})
  if (dataReq.data.statusCode == 200) {
    loading.lodingShow = false
    detailsText.text = dataReq.data.data.article_content;
    detailsText.title = dataReq.data.data.article_title
  }
}

onMounted(() => {
  getDetailsData()
  articleDetailsDom.value=document.querySelector(".article-details")
})

</script>






<style scoped lang="scss">
.article-details {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.article-details-top {
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  padding-top: 10px;
}

.content-row {

  margin-top: 10px;
}

</style>

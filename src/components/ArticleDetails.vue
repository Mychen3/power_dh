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
        <footer class="article-footer">
           <span>推荐阅读</span>
          <a-divider>推荐文章</a-divider>
          <a-row  :gutter="[16,16]" style="padding: 10px 20px 30px 20px">
            <a-col  :xs="24" :lg="8" v-for="item in articleCardData.data" :key="item.article_id">
          <article-card :cardData="item"></article-card>
            </a-col>
          </a-row>
        </footer>
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

import {ArticleId_req,queryRandom_req} from 'api/article/article'
import {reactive, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {FireOutlined} from '@ant-design/icons-vue';
import {public_articleDetails} from 'hk/publicValue'
const route = useRoute()


interface detailsText {
  text: string,
  title: string,
}
interface loadingType {
  lodingtext: string,
  lodingShow: boolean
}

interface articleCardData {
  data: {[key:string]:string}[],
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

const articleCardData = reactive<articleCardData>({
  data: [],
})


const getDetailsData = async (): Promise<void> => {
  loading.lodingShow = true
  const dataReq = await ArticleId_req({article_id: route.query.article_id})
  if (dataReq.data.statusCode == 200) {
    loading.lodingShow = false
    detailsText.text = dataReq.data.data.article_content;
    detailsText.title = dataReq.data.data.article_title
    public_articleDetails.articleType = dataReq.data.data.article_type
    public_articleDetails.articleTitle = dataReq.data.data.article_title
  }
  // 文章卡片请求的函数
  const articleCard = await queryRandom_req()
  if (articleCard.data.statusCode == 200){
    articleCard.data.data.forEach((item:{})=>{
      articleCardData.data.push(item)
    })
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
.article-footer{
  background-color: #ffffff;
  padding-top: 100px;
     &>span:nth-child(1){
       padding-left: 10px;
       color: #2c3e50;
       font-size: 15px;
     }
}

</style>

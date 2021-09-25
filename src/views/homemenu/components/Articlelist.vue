<template>
  <div class="articleList-content">
    <box-article @click="toDetails(item.article_id)" v-for="item in ArticleList.list" :article_id="item.article_id"
                 :article_startDate="item.article_startDate" :article_title="item.article_title"
                 :article_content="item.article_content" :article_type="item.article_type"
                 :key="item.article_id"></box-article>
  </div>
</template>

<script setup lang="ts">
import {getArticleList, ArticleList} from '../hooks/useGetArticleList'
import {useRouter} from "vue-router";
const router = useRouter()

const toDetails = (article_id:number|string) => {
  router.push({
      name:'articleDetails',
      query:{
        article_id
      }
  })
}

getArticleList()
</script>

<style scoped lang="scss">
.articleList-content {
  width: 100%;
  padding: 15px 15px;
  background-color: #fff;

}

</style>

<template>
  <div class="articleBox">
    <a-skeleton active v-for="index in 6" :key="index" :loading="articleType.SkeletonLoading"/>
    <box-article @click="toDetails(item.article_id)" v-for="item in articleType.list" :article_id="item.article_id"
                 :article_startDate="item.article_startDate" :article_title="item.article_title"
                 :article_content="item.article_content" :article_type="item.article_type"
                 :key="item.article_id"></box-article>
  </div>
</template>

<script setup lang="ts">

import {reactive, watch} from 'vue'
import {useRouter, useRoute} from "vue-router";
import getArticleTypeList from '../hooks/useGetList'

const router = useRouter()
const Route = useRoute()

interface ArticleLis {
  list: { [key: string]: number | string }[],
  SkeletonLoading: boolean,
}

const articleType = reactive<ArticleLis>({
  list: [],
  SkeletonLoading: true
})
const props = defineProps({
  typeId: Number
})

watch(() => Route.name, () => {
  articleType.SkeletonLoading = true
  setTimeout(()=>{
    getArticleTypeData((props.typeId))
    articleType.list.length = 0
  },0)
})

const getArticleTypeData = async <T>(typeId: T): Promise<void> => {
  let param: T | number = props.typeId || typeId

  const TypeData: any = await getArticleTypeList(param as number)
  TypeData.data.forEach((item: { [key: string]: number | string }) => {
    articleType.list.push(item)
  })
   articleType.SkeletonLoading = articleType.list.length <= 0;
}

getArticleTypeData(props.typeId)

const toDetails = (article_id: number | string) => {
  router.push({
    name: 'articleDetails',
    query: {
      article_id
    }
  })
}
</script>

<style scoped lang="scss">
.articleBox {
  width: 100%;
  padding: 15px 15px;
  background-color: #fff;
  border-radius: 5px;
}

</style>

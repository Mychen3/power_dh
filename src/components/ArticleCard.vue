<template>
  <a-card hoverable @click="onArticleDetails(props.cardData.article_id)">
    <a-card-meta :title="articleCardData.name" :description="articleCardData.title">
      <template #avatar>
        <icon-font :type="articleCardData.icon" style="font-size: 23px"/>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import IconFont from 'hk/usemenuicon'
import {ArticleType} from 'hk/labels'
import {reactive} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const iconFont = IconFont;

const props = defineProps({
  cardData: null
})

const articleCardData = reactive({
  name: '',
  title: '',
  icon: '',
}) as { name: string, title: string, icon: string }

/**
 * 通过id路由跳转详细页
 * @param article_id{number} 该卡片的id
 * @return {Boolean} false
 */
const onArticleDetails = (article_id: number) => {

  router.push({
    name: 'articleDetails',
    query: {
      article_id
    }
  })

  setTimeout(() => {
    location.reload()
  }, 0)


}
const setCard = () => {
  ArticleType.forEach((item: { name: string, val: number, icon: string }) => {
    if (item.val == props.cardData.article_type) {
      articleCardData.name = item.name
      articleCardData.title = props.cardData.article_title
      articleCardData.icon = item.icon
    }
  })
}


setCard()


</script>

<style scoped lang="scss">
::v-deep(.ant-card-meta-description) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}

</style>

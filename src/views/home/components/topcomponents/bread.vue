<template>
  <div class="bread-content">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item v-if="breadcrumbName.oneTitle !== '首页'">{{ breadcrumbName.oneTitle }}</a-breadcrumb-item>
      <a-breadcrumb-item v-if="breadcrumbName.articleTitle !=='首页'">{{ breadcrumbName.articleTitle }}
      </a-breadcrumb-item>
      <a-breadcrumb-item v-if="public_articleDetails.articleTitle">{{
          public_articleDetails.articleTitle
        }}
      </a-breadcrumb-item>
      <!--   <a-breadcrumb-item ></a-breadcrumb-item>-->
    </a-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import {reactive, watch} from 'vue'
import {useRoute} from 'vue-router'
import {ArticleType} from 'hk/labels'
import {public_articleDetails} from 'hk/publicValue'


const router = useRoute()

const breadcrumbName = reactive({
  oneTitle: '',
  twoTitle: '',
  threeTitle: '',
  fourTitle: '',
  articleTitle: ''
})

const firstLoad = () => {
  router.matched.forEach((item: any, index) => {
    if (!index) {
      breadcrumbName.oneTitle = item.meta.title
    } else {
      breadcrumbName.articleTitle = item.meta.title
    }
    if (item.name == "articleDetails") {
      breadcrumbName.oneTitle = '知识记录'

      ArticleType.forEach((names) => {
        setTimeout(() => {
          if (names.val == public_articleDetails.articleType) {
            breadcrumbName.articleTitle = names.name
          }
        }, 200)
      })
    } else {
      public_articleDetails.articleTitle = undefined
    }
  })
}

watch(() => router.matched,() => {
  firstLoad()
})

firstLoad()

</script>
<style scoped lang="scss">
.bread-content {
  margin-left: 10px;
  font-weight: 600;
}

@media screen and (max-width: 991.98px) {
  .bread-content {
    display: none;
  }
}

</style>

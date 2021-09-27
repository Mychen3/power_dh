<template>
  <div class="articleType-content">
    <a-row class="content-row">
      <a-col :xs="0" :lg="5"></a-col>
      <a-col :xs="24" :lg="14"> <ArticleTypeBox :typeId="props.typeId"></ArticleTypeBox> </a-col>
      <a-col :xs="0" :lg="5"></a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import ArticleTypeBox  from './components/ArticleTypeBox.vue'

const props = defineProps({
  typeId:Number
})


</script>

<style scoped lang="scss">
.articleType-content {
    @include boxsize;
}
.content-row{
  margin-top: 10px;
  box-sizing: border-box;
}
</style>

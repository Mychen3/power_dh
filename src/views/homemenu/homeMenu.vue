<template>
  <div class="homeMenu-content">
    <div>
      <a-row class="content-row">
        <a-col :xs="0" :lg="5">Col</a-col>
        <a-col :xs="24" :lg="14"> <article-list></article-list></a-col>
        <a-col :xs="0" :lg="5">Col</a-col>
      </a-row>
      </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ArticleList from './components/Articlelist.vue'
const text = ref()

</script>

<style scoped lang="scss">

.homeMenu-content {
  box-sizing: border-box;
     &>div:nth-child(1){
       width: inherit;
       height: inherit;
     }
  }

.content-row{
  margin-top: 10px;

}
</style>

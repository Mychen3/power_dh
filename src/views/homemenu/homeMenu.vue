<template>
  <div class="homeMenu-content">
    <div>
      <a-row class="content-row">
        <a-col :xs="0" :lg="5"><InfoMsg></InfoMsg></a-col>
        <a-col :xs="24" :lg="14"><article-list></article-list></a-col>
        <a-col :xs="0" :lg="5"><user-info></user-info></a-col>
      </a-row>
      </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ArticleList from './components/Articlelist.vue'
import UserInfo from './components/UserInfo.vue'
import InfoMsg from './components/InfoMsg.vue'
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
  box-sizing: border-box;
}
</style>

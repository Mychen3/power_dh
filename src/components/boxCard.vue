<template>
  <a-card hoverable class="card-box">
    <a-card-meta :title="props.title"
                 :description="props.content">
      <template #avatar>
        <a-avatar :src="props.cardImg"/>
      </template>
    </a-card-meta>
    <template class="ant-card-actions" #actions>
      <div class="love-icon"><LikeOutlined style="margin-right: 5px; font-size: 18px"/> <span style="  font-size: 16px">{{props.card_love}}</span> </div>
      <GithubOutlined @click="()=>{win.open(props.card_github)}"/>
      <ReadOutlined @click="()=>{win.open(props.card_home)}"/>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import {LikeOutlined  , GithubOutlined, ReadOutlined} from '@ant-design/icons-vue';
import  throttle from 'hk/usethrottle'
import {defineProps} from "vue";
const win = window

const props = defineProps({
  card_id:String,
  title: String,
  content: String,
  cardImg: String,
  card_github:String,
  card_home:String,
  card_type:String,
  card_love:String,
})

/*
* @throttle: 点赞函数
* @param:
* @param:
* */
const onGiveLike =():void=>{


}





</script>

<style scoped lang="scss">


.love-icon:hover {
  color: red !important;

}
</style>

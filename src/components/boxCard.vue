<template>
  <a-card hoverable class="card-box" :bodyStyle="{ height:'120px','font-size':'15px'}">
    <a-card-meta :title="props.title">
      <template #avatar>
        <a-avatar :src="props.cardImg"/>
      </template>
      <template #description>
        <a-typography-paragraph  :ellipsis="{ rows: 2}" :content="props.content"></a-typography-paragraph>
      </template>
    </a-card-meta>
    <template class="ant-card-actions" #actions>
      <div class="love-icon" @click="onGiveLike">
        <LikeOutlined style="margin-right: 5px; font-size: 18px"/>
        <span style="  font-size: 16px">{{ love_quantity }}</span></div>
      <GithubOutlined @click="()=>{win.open(props.card_github)}"/>
      <ReadOutlined @click="()=>{win.open(props.card_home)}"/>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import {LikeOutlined, GithubOutlined, ReadOutlined} from '@ant-design/icons-vue';
import {givelike_req} from 'api/card/cardAPi'
import {ref} from "vue";
let win = ref(window)

const props = defineProps({
  card_id: [String, Number],
  title: String,
  content: {
    type:String,
    default:()=>{
      return '请稍等'
    }
  },

  cardImg: String,
  card_github: String,
  card_home: String,
  card_type: String,
  card_love: String,
})

const love_quantity = ref<number>(parseInt((props.card_love as string)))

let timer: any = null




/*
* @throttle: 点赞函数
* @param:
* @param:
* */
const onGiveLike = (): void => {
  love_quantity.value += 1
  const param = {
    card_love: love_quantity.value,
    card_id: props.card_id
  }
  // 防抖
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    givelike_req(param)
    timer = null
  }, 1000)
}


</script>

<style scoped lang="scss">


.love-icon:hover {
  color: red !important;

}
</style>

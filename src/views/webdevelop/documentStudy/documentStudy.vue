<template>
<div class="documentStud-content">
  <a-row>
    <a-col v-for="item in card_data.data" :xs="24"  :lg="6" ><box-card :card_id="item.card_id" :card_love="item.card_love" :title="item.card_title" :content="item.card_content" :cardImg="item.card_imgurl" :card_github="item.card_gitHub" :card_home="item.card_home"></box-card></a-col>
  </a-row>
</div>
</template>
<script setup lang="ts">
import getCard from 'hk/useGetcard'
import {onMounted,reactive} from 'vue'
import cardData from './card'


// 列表数据
const card_data = reactive<cardData>({
   data:[]
})

onMounted(async ()=>{
  const {data}= await getCard(1)
     data.forEach(item=>{
       card_data.data.push(item)
     })
})

</script>

<style scoped lang="scss">
.documentStud-content{
  @include boxsize;
  padding: 15px;
}
</style>

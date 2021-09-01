<template>
  <div class="documentStud-content">
    <div v-if="setloding.showLoding" style="display: flex;height: 100%;align-items: center">
      <loding :title="setloding.lodingtext"></loding>
    </div>
    <a-row>
      <a-col v-for="item in card_data.data" :xs="24" :lg="6" :key="item.card_id">
        <box-card :card_id="item.card_id" :card_love="item.card_love" :title="item.card_title"
                  :content="item.card_content" :cardImg="item.card_imgurl" :card_github="item.card_gitHub"
                  :card_home="item.card_home"></box-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import getCard from 'hk/useGetcard'
import {onMounted, reactive} from 'vue'
import type { cardData,Card } from '../documentStudy/card'
import type loding from 'comp/loading'




// 列表数据
const card_data = reactive<cardData>({
  data:[]
})
const setloding = reactive<loding>({
  showLoding: true,
  lodingtext: '正在全力加载冲冲冲！'
})


onMounted(async () => {

  const {data}:any|undefined = await getCard(2)
  if (data) {
    data.forEach((item:Card)=> {
      card_data.data.push(item)
    })
    setloding.showLoding = false
  } else {
    setloding.lodingtext = '服务器开小差了！稍后重试!'
  }


})

</script>

<style scoped lang="scss">
.documentStud-content {
  @include boxsize;
  padding: 15px;
}
</style>

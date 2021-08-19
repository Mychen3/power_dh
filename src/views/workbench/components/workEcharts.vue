<template>
  <div class="echarts-box">
  <div id="myEcharts" class="work-echarts-content">
  </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref,nextTick} from 'vue'
import {option, echarts} from '../hooks/useworkEcharts'

const chartDom = ref<HTMLElement | null>()


nextTick(()=>{
  chartDom.value = document.getElementById('myEcharts')
  const myChart = echarts.init(chartDom.value)
  option && myChart.setOption(option)
})


</script>
<style scoped lang="scss">

.work-echarts-content {
  background-color: #ffffff;
  width: 340px;
  height:100%;
}
.echarts-box{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
}

@media screen and (max-width: 991.98px) {
  .work-echarts-content {
    background-color: #ffffff;
    width: 280px;
    height:100%;
  }
  .echarts-box{
    height: 340px;
  }

}
</style>

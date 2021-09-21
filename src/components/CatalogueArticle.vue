<template>
  <div class="CatalogueArticle-box">
    <div class="catalogueArticle-anchor">
      <div>目录导航</div>
      <div class="anchor-content">
        <div @click="toAnchor(item.dataLine)" :class="[item.showColor? 'showClass':'']" :key="item.dataLine" v-for="item in anchorData.data">{{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {nextTick, reactive} from "vue";
import throttle from 'hk/usethrottle'




interface anchorData{
  data:{title:string,offsetTop:number,dataLine:number,showColor:boolean}[] | {[key:string]:number|string|boolean}[]
}
const props = defineProps({
  previewRef: {
    type: null
  },
  articleDetailsDom: {
    type: null
  }
})

const anchorData = reactive<anchorData>({
  data: []
})

const scrollPosition = () => {
  let previewDom = props.previewRef.$el.querySelectorAll("h1,h2,h3,h4,h5,h6")
  let arrForm = Array.from(previewDom)

  arrForm.forEach((item: any, index:number) => {
    anchorData.data[index] = {
      title: item.innerHTML,
      offsetTop: item.offsetTop,
      dataLine: previewDom[index].getAttribute('data-v-md-line'),
      showColor: false
    }
    item.id = `id${previewDom[index].getAttribute('data-v-md-line')}`
  })
}

const watchHeight = ():void => {
  props.articleDetailsDom.addEventListener("scroll", throttle(watchCallback, 500), {passive: true});
}


const watchCallback = ():void => {
  anchorData.data.forEach((item: any, index: number) => {
    if (props.articleDetailsDom.scrollTop >= (item.offsetTop - 80)) {
      item.showColor = true
      if (index > 0) {
        let i = index - 1 ? index - 1 : 0
        anchorData.data[i].showColor = false
      }
    } else {
      item.showColor = false
    }
  })
}


const toAnchor = (dataLine:number):void => {
  document.querySelector(`#id${dataLine}`)?.scrollIntoView({
    // 定义动画效果
    behavior: "smooth",
    // 定义垂直方向对齐
    block: "start",
    // 定义水平方向对齐
    inline: "start"
  });
}

const calculationShow = () => {
  setTimeout(() => {
    scrollPosition()
    watchHeight()
  }, 300)
}


nextTick(() => {
  calculationShow()

})


</script>

<style scoped lang="scss">

.showClass {

  color: #1e80ff;
}


.CatalogueArticle-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 50px;
  position: relative;
  //& > div:nth-child(1) {
  //  text-align: center;
  //  color: #1e80ff;
  //  padding-bottom: 10px;
  //
  //}
}

.catalogueArticle-anchor {
  position: fixed;


  & > div:nth-child(1) {
    color: #1e80ff;
    padding-bottom: 10px;
  }


}

.anchor-content {
  box-sizing: border-box;

  & > div {
    position: relative;
    font-size: 15px;
    padding: 3px 0 3px 30px;
    font-weight: 600;
    width: 250px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      background-color: rgb(235, 237, 239);
    }

    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: 10px;
      left: 0;
      background-color: #ff9900;
    }

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      height: 20px;
      left: 4px;
      top: 5px;
      background-color: #00adb5;
    }


  }
}

</style>

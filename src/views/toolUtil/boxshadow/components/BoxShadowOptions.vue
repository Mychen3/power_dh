<template>
  <div>
    <a-collapse class="collapse-box" v-model:activeKey="collapseActiveKey" accordion>
      <a-collapse-panel key="1" header="配置">
        <a-space style="width: 100%" direction="vertical">
          <a-row>
            <a-col :xs="24" :lg="24">
              <a-typography-title :level="5">阴影显示在外部(默认) or 阴影显示在内部</a-typography-title>
            </a-col>
            <a-col :xs="24" :lg="24">
              <a-select ref="select" style="width: 100%" v-model:value="props.boxShadow.position" >
                <a-select-option value="">外部</a-select-option>
                <a-select-option value="inset">内部</a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <a-typography-title :level="5">颜色</a-typography-title>
          <a-input v-model:value="props.boxShadow.color">
            <template #prefix>
              <el-color-picker v-model="props.boxShadow.color" style="margin-right: 10px"/>
            </template>
          </a-input>
          <a-typography-title :level="5">OffsetX：水平偏移 正值向右负值向左(默认0)</a-typography-title>
          <a-row>
            <a-col :xs="15" :lg="19">
              <a-slider v-model:value="props.boxShadow.offsetX" :min="1" :max="20"/>
            </a-col>
            <a-col :xs="2" :lg="2">
              <a-input-number v-model:value="props.boxShadow.offsetX" :min="1" :max="20" style="margin-left: 16px"/>
            </a-col>
          </a-row>
          <a-typography-title :level="5">OffsetY：垂直偏移，正值向下负值向上(默认0)</a-typography-title>
          <a-row>
            <a-col :xs="15" :lg="19">
              <a-slider v-model:value="props.boxShadow.offsetY" :min="1" :max="20"/>
            </a-col>
            <a-col :xs="2" :lg="2">
              <a-input-number v-model:value="props.boxShadow.offsetY" :min="1" :max="20" style="margin-left: 16px"/>
            </a-col>
          </a-row>
          <a-typography-title :level="5">Blur：模糊半径，阴影的清晰程度</a-typography-title>
          <a-row>
            <a-col :xs="15" :lg="19">
              <a-slider v-model:value="props.boxShadow.blur" :min="1" :max="20"/>
            </a-col>
            <a-col :xs="2" :lg="2">
              <a-input-number v-model:value="props.boxShadow.blur" :min="1" :max="20" style="margin-left: 16px"/>
            </a-col>
          </a-row>
          <a-typography-title :level="5">Spread：扩展距离，阴影的实体尺寸</a-typography-title>
          <a-row>
            <a-col :xs="15" :lg="19">
              <a-slider v-model:value="props.boxShadow.spread" :min="1" :max="20"/>
            </a-col>
            <a-col :xs="2" :lg="2">
              <a-input-number v-model:value="props.boxShadow.spread" :min="1" :max="20" style="margin-left: 16px"/>
            </a-col>
          </a-row>
          <a-row>
            <a-col :xs="24" :lg="24">
              <a-button type="primary" style="width: 100%;margin-top: 5px" size="large" @click="addShadow">Add shadow
              </a-button>
            </a-col>
          </a-row>
        </a-space>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  boxShadow: {
    type: Object,
    required: true,
  }
})
const emits = defineEmits(['addShadow'])

const collapseActiveKey = ref<string[] | string>([])

const addShadow = ():void => {
  emits('addShadow')
}


</script>

<style scoped lang="scss">
.collapse-box {
  width: 600px;
  box-sizing: border-box;
}

@media screen and (max-width: 991.98px) {
  .collapse-box {
    width: 100vw;
  }
}

</style>

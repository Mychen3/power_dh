<template>
  <div class="Article-content">
    <div class="Article-top"><input v-model="editorData.editorTitle" placeholder="请输入标题....">
      <a-popover placement="bottomRight">
        <template #content>
          <div style="width: 500px">
            <a-row :gutter="[6,6]">
              <a-col :span="6" v-for="item in ArticleType" @click="onTag(item.val)">
                <div :class="[showTag == item.val ? 'onClickTag':'tag-content']">
                  <span>{{ item.name }}</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </template>
        <a-button type="primary" style="width: 5%">分类</a-button>
      </a-popover>
      <a-button type="primary" style="width: 5%;margin-left: 5px" @click="Close">关闭</a-button>
    </div>
    <div>
      <v-md-editor v-model="editorData.editorText" @save="onEditorSave" :height="editorHeight"></v-md-editor>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import {ArticleType} from 'hk/labels'
import addArticle from '../hooks/useAddArticle'

interface editorData {
  editorText: string,
  editorTitle: string
  editorType: number | undefined | string
}

const emits = defineEmits(['close'])

const editorHeight = ref<number | string>(window.innerHeight - 135 + 'px')

const editorData = reactive<editorData>({
  editorText: '',
  editorTitle: '',
  editorType: undefined
})
const showTag = ref<number>(0)
const onTag = (val: number): void => {
  showTag.value = val
  editorData.editorType = val
}
const Close = () => {
  emits('close')
}

const onEditorSave = (): void => {
  addArticle(editorData)
}


</script>

<style scoped lang="scss">
.Article-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.Article-top {
  height: 60px;
  width: inherit;
  display: flex;

  & > input {
    width: 90%;
    background: none;
    outline: none;
    border: none;
    height: 60px;
    font-size: 30px;

    &:focus {
      border: none;
    }
  }

}

.tag-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(244, 245, 245);
  width: 100px;
  height: 35px;
  cursor: pointer;
  color: #86909c;

  &:hover {
    background: rgb(229, 230, 235);
  }
}

.onClickTag {
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8f3ff;
  cursor: pointer;
  color: #1d7dfa;

  &:hover {
    background: #e8f3ff;
  }
}
</style>

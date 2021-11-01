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
      <v-md-editor ref='editorRef' v-model="editorData.editorText" @save="onEditorSave"
                   :height="editorHeight"></v-md-editor>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import {ArticleType} from 'hk/labels'
import {getArticleDetail, updateArticleDetail} from '../hooks/articleList'
import type {editorData as editorType} from '../hooks/articleList'
import {message} from 'ant-design-vue'

const {article_id} = defineProps({
  article_id: Number
})

const emits = defineEmits(['close'])

const editorHeight = ref<number | string>(window.innerHeight - 135 + 'px')

const editorRef = ref()

const editorData = reactive<editorType>({
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
  editorRef.value.enableSyncScroll = false
  emits('close')
}

const updateArticle = async (): Promise<void> => {
  let articleDetail = await getArticleDetail(article_id)
  if (articleDetail) {
    editorData.editorTitle = articleDetail.article_title
    editorData.editorText = articleDetail.article_content
    editorData.editorType = articleDetail.article_type
    showTag.value = articleDetail.article_type
  }
}

const onEditorSave = async (): Promise<void> => {
  editorData.article_id = article_id
  let updateResult = await updateArticleDetail(editorData)
  if (updateResult) {
    message.success('修改成功')
    Close()
  } else {
    message.error('修改失败')
  }
}
updateArticle()

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

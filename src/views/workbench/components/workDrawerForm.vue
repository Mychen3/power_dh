<template>
  <div>
    <a-form ref="addCardRef" :rules="rules" :model="form_data">
      <a-row :gutter="[10,16]" justify="center">
        <a-col :span="12">
          <a-form-item  label="卡片名字" name="title">
            <a-input v-model:value="form_data.title" size="large" placeholder="请输入卡片名称"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item  label="图片地址" name="imgurl">
            <a-input  v-model:value="form_data.imgurl" size="large" placeholder="请输入图片地址"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item  label="卡片主页" name="home">
            <a-input  v-model:value="form_data.home" size="large" placeholder="请输入卡片主页"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="github地址" name="git_hub">
            <a-input size="large" v-model:value="form_data.git_hub" placeholder="请输入github地址"/>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item  label="卡片内容" name="content">
            <a-textarea  v-model:value="form_data.content"  placeholder="请输入卡片简要描述内容" :auto-size="true"/>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="卡片模块：" name="cardType">
            <a-select v-model:value="form_data.cardType"  size="large"  allowClear>
              <a-select-option value="1" name="cardType">文档学习</a-select-option>
              <a-select-option value="2"  name="cardType">js框架</a-select-option>
              <a-select-option value="3" name="cardType" >js插件</a-select-option>
              <a-select-option value="4" name="cardType">CSS</a-select-option>
              <a-select-option value="5" name="cardType">UI框架</a-select-option>
              <a-select-option value="6" name="cardType">前端工具</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <div style="display: flex;justify-content: center">
            <a-button size="large" type="primary" @click="addCard(addCardRef)">
              <template #icon>
                <LikeOutlined/>
              </template>
                添加卡片
            </a-button>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import {LikeOutlined} from '@ant-design/icons-vue'
import {rules,form_data} from '../hooks/useFormData'
import  addCard from '../hooks/useAddcard'
import {ref} from 'vue'
const addCardRef = ref<HTMLElement>()


</script>

<style scoped lang="scss">

</style>

<template>
  <a-card hoverable class="card-box" >
    <a-card-meta title="Card title" description="This is the description 1111111111111111111111 11111111111111111333333333331232435346534634523412341234122412">
      <template #avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
    </a-card-meta>
    <template class="ant-card-actions" #actions>
      <HeartFilled class="love-icon" />
      <GithubOutlined />
      <ReadOutlined />
    </template>
  </a-card>
</template>

<script setup lang="ts">
import { HeartFilled, GithubOutlined,ReadOutlined } from '@ant-design/icons-vue';

</script>

<style scoped lang="scss">



.love-icon:hover{
  color: red!important;
}
</style>

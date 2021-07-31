<template>
  <div class="bread-content">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href="">General</a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-breadcrumb-item>
        <a-breadcrumb-item><span style="color: #999999;font-weight: normal">详情页</span></a-breadcrumb-item>
      </a-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import {Breadcrumb} from 'ant-design-vue'

</script>
<style scoped lang="scss">

.bread-content {
 margin-left: 10px;
  font-weight: 600;
}
@media screen and (max-width: 991.98px) {
  .bread-content {
     display: none;
  }

}


</style>

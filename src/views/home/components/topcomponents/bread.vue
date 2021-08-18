<template>
  <div class="bread-content">
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item><span>{{ routertitle }}</span></a-breadcrumb-item>
      <a-breadcrumb-item><span style="color: #999999;font-weight: normal">{{ router.meta.title }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import {ref, watch, reactive} from 'vue'
import {useRoute} from 'vue-router'
import showone_level from '@/router/hooks/useRouter'

const router = useRoute()
const routerName = ref('')
const routertitle = ref<string | unknown>('')


watch(router, (newV: any, oidV: object): void => {
  routerName.value = newV.name
  setBreadcrumb()
})


const setBreadcrumb = () => {
  showone_level.forEach((item: { children: any[]; meta: { title: string } }) => {
    if (item.children) {
      item.children.forEach(items => {
        if (items.name == routerName.value) {
          routertitle.value = item.meta.title
        }
      })
    } else {
      routertitle.value = router.meta.title
    }
  })
}

setBreadcrumb()

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

<template>
  <div>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const text = ref()
</script>

<style scoped lang="scss">

</style>

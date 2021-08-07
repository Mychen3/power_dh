<template>
  <div class="login-content">
    <div class="login-box">
      <h1>L O G I N</h1>
      <a-space direction="vertical">
        <a-form >
          <a-form-item>
           <logInput  placeholder="email" v-model="inputValue"></logInput>
          </a-form-item>
          <a-form-item >
            <logInput placeholder="password" v-model="inputValue"  ></logInput>
          </a-form-item>
          <a-form-item style="text-align: center">
          <a-button  type="primary"  style="width: 200px">GO</a-button>
          </a-form-item>
        </a-form>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import {signin1, signin2, signin3} from 'ass/pictureData'
import {Space,Form,Input,Button} from 'ant-design-vue'
import {ref} from  'vue'
import logInput from 'comp/logInput.vue'

const loginBgc = ref<String>(`url(${signin1}) no-repeat center /190px 150px`)
const inputValue = ref<String>('')

</script>

<style scoped lang="scss">

.login-content {
  @include boxsize;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
  color: #fff;
  animation: move 10s infinite;
}

.login-box {
  width: 85%;
  height: 40%;
  background-color: white;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;

  &:before {
    position: absolute;
    width: 200px;
    height: 200px;
    content: '';
    top: -130px;
    left: 100px;
    background: v-bind(loginBgc)

  }
}

@keyframes move {
  0%,
  100% {
    background-position-x: left;
  }
  50% {
    background-position-x: right;
  }
}

</style>

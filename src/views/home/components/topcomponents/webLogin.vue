<template>
  <div class="login-content">
    <div class="login-box">
      <h1 >L O G I N</h1>
      <a-space direction="vertical">
        <a-form >
          <a-form-item>
           <logInput  placeholder="email" @blur="blurPanda" @focus="focusPanda" v-model="inputValue"></logInput>
          </a-form-item>
          <a-form-item >
            <logInput placeholder="password" @focus="pwdFocusPanda" @blur="blurPanda" v-model="inputValue"></logInput>
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

import {Space,Form,Input,Button} from 'ant-design-vue'
import {ref} from  'vue'
import logInput from 'comp/logInput.vue'
import {loginBgc,focusPanda,blurPanda,pwdFocusPanda} from '../../hooks/usePandaChange'


  
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
  height: 50%;
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
    width: 10vw;
    height: 10vw;
    content: '';
    top: -7vw;
    left: 27%;
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

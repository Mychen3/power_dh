<template>
  <div class="login-content">
    <div class="anmimate-box" >
    <transition name="loginTransition">
    <div class="login-box" v-if="showLogin">
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
          <a-form-item style="text-align: right">
           <span>没有账号吗?</span><span class="go-register" @click="showLogin = false" > 前往注册</span>
          </a-form-item>
        </a-form>
      </a-space>
    </div>
    </transition>
    <transition name="loginTransition">
       <div class="register" v-if="!showLogin">
          <h1>Register with</h1>
         <a-space direction="vertical">
           <a-form style="width: 280px" >
             <a-form-item >
               <a-input size="large"  placeholder="请输入您的名字" />
             </a-form-item>
             <a-form-item>
               <a-input size="large"  placeholder="请输入您的的邮箱" />
             </a-form-item>
             <a-form-item>
               <a-input size="large"  placeholder="请输入您的的手机号码" />
             </a-form-item>
             <a-form-item >
               <div style="display: flex">
                 <a-input size="large" style="width: 150px"  placeholder="短信验证码" />
                 <a-button  type="primary"  style="height: 40px;width: 110px;margin-left: 20px">发送验证码</a-button>
               </div>
             </a-form-item>
             <a-form-item>
               <a-input size="large"  placeholder="请输入您的密码" />
             </a-form-item>
             <a-form-item>
               <a-input size="large"  placeholder="请再次验证您的密码" />
             </a-form-item>
             <a-form-item>
               <a-button  type="primary" size="large"  style="width: 100%">注册</a-button>
             </a-form-item>
             <a-form-item>
               <a-button    size="large"  style="width: 100%" @click="showLogin = true" >返回</a-button>
             </a-form-item>
           </a-form>
         </a-space>
       </div>

    </transition>
    </div>
    </div>

</template>

<script setup lang="ts">

import {Space,Form,Input,Button} from 'ant-design-vue'
import {ref} from  'vue'
import logInput from 'comp/logInput.vue'
import {loginBgc,focusPanda,blurPanda,pwdFocusPanda} from '../../hooks/usePandaChange'

const inputValue = ref<String>('')
const showLogin = ref<boolean>(true)

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

.anmimate-box{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0,0,0);
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
  transform: translate3d(0,0,0);

  &:before {
    position: absolute;
    width: 200px;
    height: 200px;
    content: '';
    top: -130px;
    left: 25%;
    background: v-bind(loginBgc)

  }
}
.register{
  width: 85%;
  height: 60%;
  background-color: white;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
 transform: translate3d(0,0,0);
}

@media screen and (min-width: 1200px) {

}

.loginTransition-enter-active{
  animation: login 1s ease 0s 1 normal forwards;

}

@keyframes login {
  0% {
    opacity: 0;
    transform: translateX(250px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
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
.go-register{
  color: rgb(73,197,182);
  cursor:pointer;
}

</style>

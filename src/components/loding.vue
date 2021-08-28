<template>
  <div class="load-container">
    <div class="boxLoading">
      <div class="load-text">{{props.title}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: () => {
      return '正在全力加载冲冲冲！'
    }
  }
})

</script>

<style scoped lang="scss">
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;

  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    &:before {
      content: "";
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }

    &:after {
      content: "";
      width: 50px;
      height: 50px;
      background: #00adb5;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

.load-text {
  position: absolute;
  width: 200px;
  font-weight: bolder;
  color: #00adb5;
  top: 75px;
  left: -45px;
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>

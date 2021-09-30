<template>
  <div class="Glassmorphism-content">
    <div class="Glassmorphism-box">
      <div class="Glassmorphism-shadow">
        <img class="Glassmorphism-img" src="https://test-chen-66.oss-cn-hangzhou.aliyuncs.com/power/public/preview.jpg"
             alt="图片加载">
      </div>
    </div>
    <div class="Glassmorphism-box">
      <a-row>
        <a-col :xs="24" :lg="12">
          <div class="Glass-set">

          </div>
        </a-col>
        <a-col :xs="24" :lg="12">
          <div class="Glass-set">

          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.Glassmorphism-content {
  @include boxsize;
}

.Glassmorphism-img {
  width: 900px;
  height: 500px;
  filter: blur(0px);
}

.Glassmorphism-box {
  display: flex;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
}

.Glassmorphism-shadow {
  box-shadow: -1px 4px 18px 0px #000;
}

.Glass-set {
  background-color: #ffffff;
  border-radius: 8px;
  height: 300px;
  width: 440px;
  margin: 0 10px;
}

@media screen and (max-width: 991.98px) {
  .Glassmorphism-box {
    border-radius: 8px;
  }

  .Glassmorphism-img {
    padding: 0 15px;
    width: 100vw;
    height: 230px;
    border-radius: 8px;
  }
  .Glassmorphism-shadow {
    box-shadow: none;
  }
  .Glass-set {
    margin-top: 10px;
  }
}
</style>

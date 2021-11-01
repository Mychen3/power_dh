<template>
  <div class="UtilBox-content">
    <div class="UtilBox-title">
      <a-typography-title>CSS 盒子阴影生成器</a-typography-title>
      <a-space style="margin-top: 5px">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-chrome" width="40"
             height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="9"/>
          <circle cx="12" cy="12" r="3"/>
          <line x1="12" y1="9" x2="20.4" y2="9"/>
          <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)"/>
          <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-edge" width="40"
             height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773"/>
          <path
              d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79"/>
          <path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688"/>
          <path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-firefox" width="40"
             height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4.028 7.82a9 9 0 1 0 12.823 -3.4c-1.636 -1.02 -3.064 -1.02 -4.851 -1.02h-1.647"/>
          <path
              d="M4.914 9.485c-1.756 -1.569 -.805 -5.38 .109 -6.17c.086 .896 .585 1.208 1.111 1.685c.88 -.275 1.313 -.282 1.867 0c.82 -.91 1.694 -2.354 2.628 -2.093c-1.082 1.741 -.07 3.733 1.371 4.173c-.17 .975 -1.484 1.913 -2.76 2.686c-1.296 .938 -.722 1.85 0 2.234c.949 .506 3.611 -.995 4.545 .354c-1.698 .102 -1.536 3.107 -3.983 2.727c2.523 .957 4.345 .462 5.458 -.34c1.965 -1.52 2.879 -3.542 2.879 -5.557c-.014 -1.398 .194 -2.695 -1.26 -4.75"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-opera" width="40"
             height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="9"/>
          <ellipse cx="12" cy="12" rx="3" ry="5"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-safari" width="40"
             height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <polyline points="8 16 10 10 16 8 14 14 8 16"/>
          <circle cx="12" cy="12" r="9"/>
        </svg>
      </a-space>
    </div>
    <div>
      <a-row style="margin-top: 20px">
        <a-col :xs="24" :lg="12">
          <div class="UtilBox-OptionsBox">
            <div>
              <a-typography-title class="UtilBox-Options-title" :level="3">Options</a-typography-title>
              <div class="UtilBox-Options">
                <slot name="Options"></slot>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :lg="12">
          <div class="UtilBox-viewCode">
            <a-typography-title class="UtilBox-Options-title" :level="3">Preview</a-typography-title>
            <div>
              <slot name="Preview"></slot>
            </div>
            <a-typography-title class="UtilBox-Options-title" :level="3">Code</a-typography-title>
            <div>
              <slot name="code"></slot>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.UtilBox-content {
  @include boxsize;
}

.UtilBox-viewCode {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 200px;

  & > div:nth-child(2) {
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
  }

}

.UtilBox-title {
  background-color: #ffffff;
  height: 150px;
  border-top: 1px solid rgb(230, 230, 230);
  display: flex;
  padding: 30px 50px;
  flex-direction: column;

  & > h1 {
    font-size: 28px;
    color: rgb(30, 41, 59);
  }
}

.UtilBox-OptionsBox {
  margin-right: 50px;
  display: flex;
  justify-content: end;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
  }
}

.UtilBox-Options {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
}

@media screen and (max-width: 991.98px) {

  .UtilBox-Options{
    padding: 0

  }
  .UtilBox-viewCode {
    padding: 0;
  }

  .UtilBox-OptionsBox {
    margin-right: 0;
    justify-content: flex-start;
    margin-bottom: 30px;
  }
  .UtilBox-Options-title {
    font-size: 15px;
  }


}
</style>

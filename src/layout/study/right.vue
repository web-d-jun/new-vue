<template>
  <div :class="['right__container', { expand: $store.state.rightDrawer }]">
    <div class="right__contents">
      <div class="introduction__container">
        <div class="introduction introduction--text1">동짓달 기나긴 밤을 한 허리를 베어내어</div>
        <div class="introduction introduction--text2">춘풍 이불 아래 서리서리 넣었다가</div>
        <div class="introduction introduction--text3">님 오신 날 밤이어든 굽이굽이 펴리라</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'right',
});
</script>
<style lang="scss" scoped>
.right__container {
  display: flex;
  flex-direction: column;
  width: 0%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  &.expand {
    opacity: 1;
    width: 100%;
  }
  .right__contents {
    width: 100%;
    border: 1px solid;
    height: 800px;
    background: $darkBackground;
    .introduction__container {
      display: flex;
      flex-direction: row-reverse;
      margin-right: 13vh;
      margin-top: 12vh;
      .introduction {
        position: relative;
        color: $defaultColor;
        width: 1px;
        word-break: break-word;
        margin-left: 5vh;
        line-height: 30px;
        &::after {
          position: absolute;
          content: ' ';
          border: 1px solid red;
          position: absolute;
          bottom: 0%;
          left: 0;
          height: 100%;
          width: 23px;
          background-color: #1e1f21;
        }
        &--text1 {
        }
        &--text2 {
        }
        &--text3 {
        }
      }
    }
  }
}
</style>
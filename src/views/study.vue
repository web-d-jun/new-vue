<template>
  <div class="study__container">
    <div class="box__container"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'study',
};
</script>
<style lang="scss">
.study__container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: inset 5rem 10rem 15rem 0 #000, inset -5rem -10rem 15rem 0 #000;
  .box__container {
    background-size: 100% 100%;
    left: -25%;
    top: -25%;
    position: absolute;
    width: 150%;
    height: 150%;
    background-image: url('../assets/img/study/study_group.png');
    background-repeat: no-repeat;
    transform: rotate(-10deg);
    background-position: center;
    z-index: -9999;
  }
}
</style>

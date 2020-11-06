<template>
  <div class="study__container">
    <div class="box__container"></div>
    <div class="title">THIS IS STUDY</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'study',
};
</script>
<style lang="scss">
.study__container {
  @include user-select(none);
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
  .title {
    font-size: 2.5rem;
    position: absolute;
    bottom: 35%;
    right: 5%;
    text-shadow: -2rem 0 9px $defaultColor, 0px 6rem 5px $defaultColor, 4.6rem 2.3rem 3px $defaultColor, 0 -4rem 3px $defaultColor;
    color: transparent;
    transition: all 0.2s ease-out;
  }
}
@media screen and (min-width: 1000px) {
  .title {
    font-size: 4rem !important;
  }
}
</style>

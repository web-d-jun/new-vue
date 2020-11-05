<template>
  <div class="study__container">
    <div class="box__container">
      <div class="box">
        <img :src="require('~img/study/img1.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img2.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img3.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img4.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img5.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img6.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img7.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img8.jpg')" alt="" />
      </div>
      <div class="box">
        <img :src="require('~img/study/img9.jpg')" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'study',
};
</script>
<style lang="scss">
.study__container {
  width: 100%;
  height: 100%;
  .box__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    .box {
      width: calc(33.3333% - 15px);
      height: 50%;
      padding: 5px;
      background-color: rgb(24, 24, 24);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

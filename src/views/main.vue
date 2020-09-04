<template>
  <div class="main__container">
    <div class="main__contents">
      <div class="title__container">
        <div class="title__contents">IAM</div>
        <div class="sub-title__content"><small>Idea Accomplished Men</small></div>
      </div>
      <div class="scroll__container">
        <div class="scroll__contents">
          <div class="text">scroll down</div>
          <div class="icon"><i class="fas fa-chevron-down"></i></div>
        </div>
      </div>
    </div>
    <div class="aos-all">
      <div class="aos-item" data-aos="zoom-out-down">1</div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "Main"
};
</script>
<style lang="scss" scoped>
.main__container {
  width: 100%;
  height: 100%;
  .main__contents {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    .title__container {
      position: absolute;
      top: 40%;
      left: 0;
      text-align: center;
      width: 100%;
      transform: translate(0, -50%);
      .title__contents {
        font-size: 50px;
        letter-spacing: 70px;
      }
      .sub-title__content {
        letter-spacing: 20px;
        padding-top: 20px;
      }
    }

    .scroll__container {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 80px;
      .scroll__contents {
        .text {
          margin-bottom: 15px;
        }
        .icon {
          
        }
      }
    }
  }
  .aos-item {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-top: 75px;
    background: #000;
    text-align: center;
    color: #fff;
    font-size: 3em;
  }
}
</style>
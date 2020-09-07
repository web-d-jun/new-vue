<template>
  <div class="main__container">
    <div class="main__contents">
      <div class="title__container">
        <div class="title__contents">
          <div class="inner__text">IAM</div>
        </div>
        <div class="sub-title__content">
          <small>Idea Accomplished Men</small>
        </div>
      </div>
      <div class="scroll__container">
        <div class="scroll__contents">
          <div class="text">scroll down</div>
          <div class="icon" @click="handleScrollDown">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
    <div id="targetAosContainer" class="scroll__target" />
    <div class="aos__container">
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down">
          <img :src="require('../assets/img/main/first_app.png')" alt="" />
          <div class="image__title">first-app</div>
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down">1</div>
      </div>
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down">1</div>
      </div>
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down">1</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "Main",

  setup() {
    const handleScrollDown = () => {
      location.href = "#targetAosContainer";
    };
    return {
      handleScrollDown,
    };
  },
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
      animation-name: zoomIn;
      animation-duration: 1.5s;
      .title__contents {
        font-size: 50px;
        letter-spacing: 70px;
        .inner__text {
          text-indent: 1.2em;
        }
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
      bottom: 60px;
      .scroll__contents {
        .text {
          margin-bottom: 15px;
        }
        .icon {
          animation-name: moving;
          animation-iteration-count: infinite;
          animation-duration: 2s;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .scroll__target {
    width: 100%;
    height: 200px;
  }
  .aos__container {
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;

    .wrap {
      width: 100%;
      height: 700px;
      .aos-item {
        &.aos-item--custom {
          position: relative;
          width: 400px;
          height: 200px;
          background: #000;
          text-align: center;
          color: #fff;
          font-size: 3em;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
        img {
          width: 100%;
          height: 100%;
        }
        .image__title {
          color: rgb(44, 44, 44);
          font-size: 28px;
        }
      }
      &:nth-child(odd) {
        .aos-item {
          left: 25%;
        }
      }
      &:nth-child(even) {
        .aos-item {
          right: -50%;
        }
      }
    }
  }
}

@keyframes moving {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.2);
    opacity: 0.2;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 875px) {
  .aos__container {
    .wrap {
      width: 100% !important;
    }
    .aos-item {
      width: 100% !important;
    }
    .sub-title__content {
      letter-spacing: 10px;
    }
  }
}
</style>

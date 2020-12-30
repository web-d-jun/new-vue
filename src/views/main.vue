<template>
  <div class="main__container">
    <div class="header__contents">
      <div class="button__container">
        <JButton :title="'IAM PICK'" />
      </div>
    </div>
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
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down" @click="router.push('/login/')">
          <img :src="require('../assets/img/main/first_app.png')" alt />
          <div class="image__title">
            <small>Business</small>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down" @click="router.push('/study/')">
          <img :src="require('../assets/img/main/study.jpg')" alt />
          <div class="image__title">
            <small>study</small>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down">
          <small>셋</small>
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item aos-item--custom" data-aos="zoom-out-down">
          <small>넷</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, ref } from 'vue';
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import JButton from '@/components/button/JButton.vue';

export default {
  name: 'Main',
  components: {
    JButton,
  },
  setup() {
    const router = inject('routerSymbol', [{}]);
    const handleScrollDown = () => {
      location.href = '#targetAosContainer';
    };

    return {
      handleScrollDown,
      router,
    };
  },
};
</script>
<style lang="scss" scoped>
.main__container {
  position: relative;
  width: 100%;
  height: 100%;
  .header__contents {
    position: absolute;
    display: flex;
    flex: 1;
    padding: 0 8px;
    height: 10%;
    justify-content: flex-end;
    align-items: center;
    right: 0;
    z-index: 1;
    .button__container {
      width: 100px;
      height: 50%;
      @include cursor(pointer);
    }
  }
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
        font-size: 65px;
        letter-spacing: 70px;
        .inner__text {
          text-indent: 1.2em;
        }
      }
      .sub-title__content {
        letter-spacing: 20px;
        padding-top: 20px;
        font-size: 25px;
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
          outline: 0;
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
    // display: flex;
    // flex-wrap: wrap;

    .wrap {
      width: 100%;
      height: 400px;
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
          animation-name: Shake;
          animation-duration: 2s;
          animation-iteration-count: 1;
          transform: rotate(0deg);
        }
        img {
          width: 100%;
          height: 100%;
        }
        .image__title {
          background-color: transparent;
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

@keyframes Shake {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.1);
    opacity: 0.1;
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
    padding: 0 20px;
    .wrap {
      display: flex;
      width: 100% !important;
      &:nth-child(odd) {
        justify-content: flex-start;
        .aos-item {
          left: 0% !important;
        }
      }
      &:nth-child(even) {
        justify-content: flex-end;
        .aos-item {
          right: 0 !important;
        }
      }
    }
    .sub-title__content {
      letter-spacing: 10px;
    }
  }
}
</style>

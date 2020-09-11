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
        <div class="aos-item" data-aos="fade-up-right" @click="goPage('firstApp')">
          <img :src="require('../assets/img/main/first_app.png')" alt="img" />
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item" data-aos="fade-up-left" @click="goPage('firstApp')">
          <img :src="require('../assets/img/main/first_app.png')" alt="img" />
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item" data-aos="fade-up-right" @click="goPage('firstApp')">
          <img :src="require('../assets/img/main/first_app.png')" alt="img" />
        </div>
      </div>
      <div class="wrap">
        <div class="aos-item" data-aos="fade-up-left" @click="goPage('firstApp')">
          <img :src="require('../assets/img/main/first_app.png')" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, inject } from "vue";

export default {
  name: "Main",

  setup() {
    const router = inject("routerSymbol", [{}]);
    const handleScrollDown = () => {
      location.href = "#targetAosContainer";
    };
    const goPage = () => {
      router.push('/login/')
    };
    return {
      handleScrollDown,
      goPage
    };
  }
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
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    flex-wrap: wrap;

    .wrap {
      width: 50%;
      height: 700px;
      // border: 1px solid red;;
      .aos-item {
        width: 400px;
        height: 200px;
        margin: 0 auto;
        text-align: center;
        color: #000;
        font-size: 3em;
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
          background-repeat: none;
          object-fit: contain;
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

@media screen and (max-width: 875px) {
  .aos__container {
    .wrap {
      width: 100% !important;
    }
    .aos-item {
      width: 100% !important;
      height: 100px !important;
    }
    .sub-title__content {
      letter-spacing: 10px;
    }
  }
}
</style>
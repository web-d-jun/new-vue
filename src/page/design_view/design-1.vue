<template>
  <div class="container">
    <div class="main__contents">
      <img :src="require('@/assets/img/design/background2.jpg')" alt="" class="background-image" />
      <div class="header">
        <div class="logo"></div>
        <div class="navigation__contents">
          <div class="navigation navigation"><button type="button" :class="['button button--default cursor-pointer', { active: pageMode === 'home' }]" @click="goPage('home')">Home</button></div>
          <div class="navigation navigation"><button type="button" :class="['button button--default cursor-pointer', { active: pageMode === 'about' }]" @click="goPage('about')">About</button></div>
          <div class="navigation navigation">
            <button type="button" :class="['button button--default cursor-pointer', { active: pageMode === 'service' }]" @click="goPage('service')">Service</button>
          </div>
          <div class="navigation navigation">
            <button type="button" :class="['button button--default cursor-pointer', { active: pageMode === 'contact' }]" @click="goPage('contact')">Contact</button>
          </div>
          <div class="navigation navigation">
            <button type="button" class="button button--point">문의하기</button>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="section">멋진 비즈니스 웹 사이트 만들기</div>
        <div class="section"><button type="button" class="button button--start cursor-pointer">Get Started</button></div>
      </div>
    </div>
    <div class="sub__contents">
      <div class="header">
        무엇을 도와 드릴까요?
        <div class="sub-heading">아래의 내용 중 선택해주세요.</div>
      </div>
      <div class="body">
        <div class="contents__container">
          <div class="contents__box__wrap">
            <div class="box">
              <div class="icon"><i class="fas fa-pen-nib"></i></div>
              <div class="title">Design</div>
              <div class="contents">We will create the best design screen</div>
            </div>
          </div>
          <div class="contents__box__wrap">
            <div class="box">
              <div class="icon"><i class="fas fa-code"></i></div>
              <div class="title">Development</div>
              <div class="contents">We will create the best design screen</div>
            </div>
          </div>
          <div class="contents__box__wrap">
            <div class="box">
              <div class="icon"><i class="fas fa-hand-holding-usd"></i></div>
              <div class="title">Marketing</div>
              <div class="contents">We will create the best design screen</div>
            </div>
          </div>
          <div class="contents__box__wrap">
            <div class="box">
              <div class="icon"><i class="fas fa-icons"></i></div>
              <div class="title">Social media</div>
              <div class="contents">We will create the best design screen</div>
            </div>
          </div>
          <div class="contents__box__wrap">
            <div class="box">
              <div class="icon"><i class="fab fa-connectdevelop"></i></div>
              <div class="title">e-Commerce</div>
              <div class="contents">We will create the best design screen</div>
            </div>
          </div>
          <div class="contents__box__wrap">
            <div class="box">
              <div class="icon"><i class="fas fa-pen-nib"></i></div>
              <div class="title">Design</div>
              <div class="contents">We will create the best design screen</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject } from 'vue';
export default {
  name: 'Design-1',
  setup() {
    const router = inject('routerSymbol', [{}]);
    interface PageModeRef {
      value: string;
    }
    const pageMode: PageModeRef = ref('home');

    const goPage: (name: string) => void = (name: string) => {
      return router.push(name);
    };
    return { pageMode, goPage };
  },
};
</script>
<style lang="scss" scpoed>
$main-contents-height: 500px;
$main-contents-header: 80px;
.container {
  user-select: none;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px 20px;
  .main__contents {
    width: 100%;
    height: $main-contents-height;
    border: 1px solid;
    position: relative;
    .background-image {
      width: 100%;
      height: $main-contents-height;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      z-index: -1;
      background: transparent;
      object-fit: cover;
    }

    .header {
      height: $main-contents-header;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 80px;
      z-index: 1;
      .navigation__contents {
        display: flex;

        .navigation {
          width: 100px;

          .button {
            font-size: 20px;
            color: rgba($defaultColor, 0.5);
            border: 0;
            outline: 0;
            background: transparent;
            &.active {
              color: $defaultColor;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: calc(100% - #{$main-contents-header});
      padding-left: 5%;
      .section {
        font-size: 30px;
        color: #fff;
        height: 150px;
        .button {
          &--start {
            width: 160px;
            height: 50px;
            background-color: transparent;
            color: $defaultColor;
            font-size: 17px;
            border: 1px solid rebeccapurple;
            outline: 0;
            border-radius: 10px;
          }
        }
      }
    }
  }
  .sub__contents {
    width: 100%;
    background-color: rgb(242, 245, 250);
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 150px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      .sub-heading {
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        color: gray;
      }
    }
    .body {
      .contents__container {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        .contents__box__wrap {
          width: 30%;
          height: 350px;
          padding: 8px;
          box-sizing: border-box;
          .box {
            width: 100%;
            height: 100%;
            background: #fff;
            padding: 30px;
            box-sizing: border-box;
            &:hover {
              transform: scale(1.02);
              cursor: pointer;
            }
            .icon {
              color: rebeccapurple;
              font-size: 50px;
              height: 100px;
              line-height: 100px;
            }
            .title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .contents {
              color: gray;
            }
          }
        }
      }
    }
  }
}
</style>

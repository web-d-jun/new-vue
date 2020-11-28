<template>
  <div :class="['right__container', { expand: $store.state.rightDrawer }]">
    <div class="right__contents">
      <div class="list__container">
        <div class="list__contents flex flex-wrap">
          <div class="contents">
            <div class="title">1. vue3</div>

            <ul class="list">
              <li @click="$router.push('vue3/suspense')">1.test</li>
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
            </ul>
          </div>
          <div class="contents">
            <div class="title">2. Typescript</div>

            <ul class="list">
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
            </ul>
          </div>
          <div class="contents">
            <div class="title">3. CSS</div>
            <ul class="list">
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
              <li>1.test</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="introduction__container">
        <div class="introduction introduction--text1">동짓달 기나긴 밤을 한 허리를 베어내어</div>
        <div class="introduction introduction--text2">춘풍 이불 아래 서리서리 넣었다가</div>
        <div class="introduction introduction--text3">님 오신 날 밤이어든 굽이굽이 펴리라</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from '@/common/ts/function';
export default defineComponent({
  name: 'right',
  setup() {
    const router = useRouter();

    // router.push('/pass')

    const goPage = (url: string) => {
      console.log(url);
    };
    return {
      goPage,
    };
  },
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
    .introduction {
      &--text1 {
        &::after {
          animation: textWrite 3s steps(16) 1s 1 normal both;
        }
      }
      &--text2 {
        &::after {
          animation: textWrite 3s steps(14) 4s 1 normal both;
        }
      }
      &--text3 {
        &::after {
          animation: textWrite 3s steps(15) 7s 1 normal both;
        }
      }
    }
  }
  .right__contents {
    width: 100%;
    border: 1px solid;
    height: 800px;
    background: $darkBackground;
    .list__container {
      width: 80%;
      height: 100%;
      padding-left: 30px;
      padding-top: 10px;
      .list__contents {
        animation: listShow 2s;
        animation-delay: 2s;

        .contents {
          min-width: 150px;
          .title {
            font-size: 20px;
            font-weight: bold;
            color: $defaultColor;
          }
          .list {
            list-style: none;
            color: $defaultColor;
          }
        }
      }
    }
    .introduction__container {
      position: fixed;
      display: flex;
      flex-direction: row-reverse;
      right: 7vh;
      top: 15vh;
      .introduction {
        position: relative;
        color: $defaultColor;
        width: 1px;
        word-break: break-word;
        margin-left: 5vh;
        line-height: 28px;
        &::after {
          position: absolute;
          content: ' ';
          position: absolute;
          bottom: 0%;
          left: 0;
          height: 100%;
          width: 23px;
          background-color: #1e1f21;
        }
      }
    }
  }
}
@keyframes textWrite {
  0% {
    height: 100%;
  }
  25% {
    height: 75%;
  }
  50% {
    height: 50%;
  }
  75% {
    height: 25%;
  }
  100% {
    height: 0%;
  }
}

@keyframes listShow {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
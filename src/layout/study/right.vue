<template>
  <div :class="['right__container', { expand: $store.state.rightDrawer }]">
    <div id="rightContents" class="right__contents" >
      <div id="listContainer" class="list__container" data-scrollbar>
        <div class="list__contents flex flex-wrap">
          <div class="contents" v-for="(item, index) in dataArray" :key="index">
            <div class="title">{{ index + 1 }}.{{ item }}</div>
            <ul class="list">
              <li @click="$router.push('vue3/suspense')">1.test</li>
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
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
Scrollbar.use(OverscrollPlugin);
export default defineComponent({
  name: 'right',
  setup() {
    const router = useRouter();
    const dataArray: Array<string> = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    // router.push('/pass')

    const goPage = (url: string) => {
      console.log(url);
    };
    onMounted(() => {
      Scrollbar.init(document.querySelector('#listContainer') as HTMLDivElement);
    });
    return {
      goPage,
      dataArray,
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
  transition: all 0.4s ease-in-out;
  opacity: 0;
  &.expand {
    opacity: 1;
    width: 100%;
    .introduction {
      color: $defaultColor !important;
      transition: color 1s ease-in-out;
      transition-delay: 2s;
      &--text1 {
        &::after {
          animation: textWrite 3s steps(16) 3s 1 normal both;
          background-color: #1e1f21 !important;
          transition: background-color 0.2s ease-in-out;
          transition-delay: 2s;
        }
      }
      &--text2 {
        &::after {
          animation: textWrite 3s steps(14) 7s 1 normal both;
          background-color: #1e1f21 !important;
          transition: background-color 0.2s ease-in-out;
          transition-delay: 2s;
        }
      }
      &--text3 {
        &::after {
          animation: textWrite 3s steps(15) 10s 1 normal both;
          background-color: #1e1f21 !important;
          transition: background-color 0.2s ease-in-out;
          transition-delay: 2s;
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
      max-height: 600px;
      overflow-y: auto;
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
            padding-inline-start: 20px;
          }
        }
      }
    }
    .introduction__container {
      position: fixed;
      display: flex;
      flex-direction: row-reverse;
      right: 6vh;
      top: 15vh;
      .introduction {
        position: relative;
        color: transparent;
        width: 1px;
        word-break: break-word;
        margin-left: 3vh;
        line-height: 22px;
        color: transparent;
        &::after {
          position: absolute;
          content: ' ';
          position: absolute;
          bottom: 0%;
          left: 0;
          height: 100%;
          width: 23px;
          background-color: transparent;
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
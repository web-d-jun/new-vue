<template>
  <div id="container" class="container">
    <div class="scroll-horizon__wrap" :style="{ left: scroll.value + 'px' }">
      <div id="intero__container">1111</div>
      <div id="contents__wrap">
        <div class="contents" v-for="i in 6" :key="i">
          <div>111</div>
        </div>
      </div>
    </div>
  </div>
  <div id="maskContainer" class="mask__wrap">
    <div class="mask"></div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted, onBeforeUnmount } from 'vue';
export default {
  name: 'Design-1',
  setup() {
    const scroll = reactive({
      value: '0',
    });

    const scrollBarEvent = () => {
      const addEvent = () => {
        const scrollBarElement = document.querySelector('#maskContainer') as HTMLDivElement;
        scrollBarElement.addEventListener('scroll', (e: Event) => {
          const target = e.target as HTMLElement;
          scroll.value = `-${target.scrollTop}`;
        });
      };
      const removeEvent = () => {
        const scrollBarElement = document.querySelector('#maskContainer') as HTMLDivElement;
        scrollBarElement.removeEventListener('scroll', () => {
          console.log('end');
        });
      };
      return {
        addEvent,
        removeEvent,
      };
    };
    const { addEvent, removeEvent } = scrollBarEvent();
    onMounted(addEvent);
    onBeforeUnmount(removeEvent);

    return {
      scroll,
    };
  },
};
</script>
<style lang="scss" scpoed>
$main-contents-height: 500px;
$main-contents-header: 80px;
#container {
  user-select: none;
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 62.5%;
  .scroll-horizon__wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    white-space: nowrap;
    #intero__container {
      height: 100%;
      background: red;
      width: calc(60% - 22em);
      display: inline-block;
    }
    #contents__wrap {
      width: calc(100% + 22em);
      height: 100%;
      display: inline-block;
      background: blue;
      .contents {
        display: inline-block;
        width: 20%;
        height: 100%;
      }
    }
  }
}
.mask__wrap {
  width: 100%;
  height: calc(100vh - 40px);
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  .mask {
    height: 4000px;
  }
}
</style>

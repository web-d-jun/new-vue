<template>
  <div class="container-header">
    header
    <div class="menu-links">
      <div class="links">About</div>
      <div class="links">Works</div>
      <div class="links">Contact</div>
    </div>
  </div>
  <section>
    <div class="scroll-horizon__wrap" :style="{ left: scroll.value + 'px' }">
      <div id="intero__container">left</div>
      <div id="contents__wrap">
        <div class="contents" v-for="i in 6" :key="i">
          <div>right</div>
        </div>
      </div>
    </div>
  </section>
  <div id="maskContainer" class="mask"></div>
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
        // const scrollBarElement = document.querySelector('#maskContainer') as HTMLDivElement;
        document.addEventListener('scroll', (e: Event) => {
          scroll.value = `-${window.scrollY}`;
        });
      };
      const removeEvent = () => {
        // const scrollBarElement = document.querySelector('#maskContainer') as HTMLDivElement;
        document.removeEventListener('scroll', () => {
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
.container-header {
  position: fixed;
  left: 0;
  width: 100%;
  padding: 60px 60px 15px;
  box-sizing: border-box;
  .menu-links {
    float: right;
    .links {
      display: inline-block;
      width: 100px;
      font-size: 1.4rem;
    }
  }
}
.scroll-horizon__wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 190px;
  white-space: nowrap;
  #intero__container {
    height: 100%;
    width: calc(60% - 22rem);
    display: inline-block;
  }
  #contents__wrap {
    width: calc(100% + 22rem);
    height: 100%;
    display: inline-block;
    .contents {
      display: inline-block;
      width: 20%;
      height: 100%;
    }
  }
}
.mask {
  height: 4000px;
}
</style>

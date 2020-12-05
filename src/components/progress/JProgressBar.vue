<template>
  <div class="progress-bar__container" :style="{ width: $store.state.progressBarPercent }"></div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'JProgressBar',
  setup() {
    // const set = reactive({
    //   width: '0%',
    // });
    // if (document.readyState === 'loading') {
    //   set.width = '5%';
    //   console.log('bar 1')
    // }
    // if (document.readyState === 'interactive') {
    //   set.width = '30%';
    //   console.log('bar 2')
    // }

    // document.addEventListener('readystatechange', () => {
    //   if (document.readyState === 'complete') {
    //     set.width = '100%';
    //     console.log('bar 3')
    //   }
    // });

    return {
      //   set,
    };
  },
});
</script>
<style lang="scss" scoped>
.progress-bar__container {
  width: 0%;
  height: 5px;
  background-color: #43435e;
  transition: width 0.3s ease-in-out;
  position: absolute;
  z-index: 2;
}
</style>
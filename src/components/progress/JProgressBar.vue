<template>
  <div class="progress-bar__container" :style="{ width: $store.state.progressBarPercent }"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, nextTick } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'JProgressBar',
  setup() {
    const store = useStore();
    console.log(store.state.progressBarPercent, 'store.state.progressBarPercent');
    onMounted(() => {
      console.log('onmounted')
      nextTick(() => {
        console.log("nextTick")
      })
    });
    

    return {};
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
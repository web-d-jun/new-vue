<template>
  <div :class="['progress-bar__container', { show: $store.state.showProgressBar }]" :style="{ width: $store.state.progressBarPercent }"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'JProgressBar',
  setup() {
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
  opacity: 0;
  &.show {
    opacity: 1;
  }
}
</style>
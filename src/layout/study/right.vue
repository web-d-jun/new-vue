<template>
  <div :class="['right__container', { expand: $store.state.rightDrawer }]">
    <div class="right__contents">
      111111111111
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'right',
});
</script>
<style lang="scss" scoped>
.right__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  &.expand {
    opacity: 1;
  }
  .right__contents {
    width: 100%;
    border: 1px solid;
    height: 800px;
    background: $darkBackground;
    
  }
}
</style>
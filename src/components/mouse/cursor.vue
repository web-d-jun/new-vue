<template>
  <div class="cursor" :style="{ left: mouse.x, top: mouse.y }"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue';
export default defineComponent({
  name: 'cursor',
  setup() {
    interface Mouse {
      x: string;
      y: string;
    }
    const mouse: Mouse = reactive({
      x: '',
      y: '',
    });
    const handleMousePositionUpdate = (e: MouseEvent) => {
      mouse.x = `${e.clientX - 15}px`;
      mouse.y = `${e.clientY - 15}px`;
    };

    onMounted(() => {
      document.addEventListener('mousemove', handleMousePositionUpdate);
    });
    onUnmounted(() => {
      document.removeEventListener('mousemove', handleMousePositionUpdate);
    });
    return { mouse };
  },
});
</script>
<style lang="scss" scoped>
.cursor {
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  width: 35px;
  height: 35px;
  border: 1px solid $defaultColor;
  border-radius: 50%;
  cursor: none;
  pointer-events: none;
}
</style>
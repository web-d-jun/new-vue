<template>
  <button type="button" id="button" class="button" @click="addApp()">{{ title }}</button>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from 'vue';
export default defineComponent({
  name: 'JButton',
  props: {
    title: {
      default: '버튼',
      type: String,
    },
  },
  setup() {
    const deferredPrompt = ref();

    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt.value = e;
    });
    const handleAddApp = () => {
      const addApp = () => {
        deferredPrompt.value.prompt();
      };
      return {
        addApp,
      };
    };

    onBeforeUnmount(() => {
      window.addEventListener('beforeinstallprompt', () => {
        deferredPrompt.value = null;
      });
    });
    const { addApp } = handleAddApp();
    return {
      addApp,
    };
  },
});
</script>
<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100%;
  @include button-background();
  color: $defaultColor;
  outline: 0;
  border: 1px solid transparent;
  border-radius: $borderRadius;
  font-size: 1.1rem;
  &:active {
    opacity: 0.7;
  }
}
</style>
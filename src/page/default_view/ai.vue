<template>
  <div>ai</div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import useProgressBar from '@/composables/useProgressBar.ts';
export default {
  name: 'Ai',
  setup() {
    const { setProgressBar } = useProgressBar();
    onMounted(setProgressBar);
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>
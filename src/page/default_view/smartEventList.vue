<template>
  <div>smartEventList</div>
</template>

<script lang="ts">
import useProgressBar from '@/composables/useProgressBar.ts';
import { onMounted } from 'vue';
export default {
  name: 'smartEventList',
  setup() {
    const { setProgressBar } = useProgressBar();
    onMounted(() => {
      setProgressBar();
    });
  },
};
</script>
<style lang="scss" scopd>
</style>
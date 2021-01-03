<template>
  <JTitle title="smartEventList" />
  <div>smartEventList</div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
/**
 * @type composables
 */
import useProgressBar from '@/composables/useProgressBar.ts';
/**
 * @type components
 */
import JTitle from '@/components/title/JTitle.vue';
export default {
  name: 'smartEventList',
  components: {
    JTitle,
  },
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
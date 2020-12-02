<template>
  <div>ai</div>
</template>
<script lang="ts">
import { onMounted, inject } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Ai',
  setup() {
    const _m: any = inject('MutationTypes');
    const store = useStore();

    onMounted(() => {
      store.commit(_m.MutationTypes.CHANGE_PROGRESS_BAR_PERCENT, '100%');
    });
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>
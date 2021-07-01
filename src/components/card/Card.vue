<template>
  <div class="card__container neumorphism-flat">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Card',
  setup() {
    return;
  },
});
</script>
<style lang="scss" scoped>
.card__container {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>

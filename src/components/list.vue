<template>
  <div id="listContainer">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ListContainer"
});
</script>
<style lang="scss" scoped>
#listContainer {
  width: 100%;
  height: 100%;
}
</style>

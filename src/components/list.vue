<template>
  <div id="listContainer" data-scrollbar>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
Scrollbar.use(OverscrollPlugin);

export default defineComponent({
  name: "ListContainer",
  setup() {
    onMounted(() => {
      Scrollbar.init(document.querySelector('#listContainer') as HTMLDivElement);
    });
  }
});
</script>
<style lang="scss" scoped>
#listContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>

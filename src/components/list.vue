<template>
  <div id="listContainer" data-scrollbar>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "../store/mutation-types";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
Scrollbar.use(OverscrollPlugin);

export default defineComponent({
  name: "ListContainer",
  setup() {
    const store = useStore();
    onMounted(() => {
      const scrollbar = Scrollbar.init(
        document.querySelector<any>("#listContainer")
      );
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

<template>
  <div id="listContainer" @scroll.passive="handleScroll">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "../store/mutation-types";
import Scrollbar from "smooth-scrollbar";
export default defineComponent({
  name: "ListContainer",
  setup() {
    const store = useStore();
    onMounted(() => {
      Scrollbar.init(document.querySelector<any>("#listContainer"));
    });

    const useHandleScroll = () => {
      const handleScroll = (event: any) => {
        if (event.target.scrollTop > 0) {
          store.commit(MutationTypes.SHOW_HEADER_SHADOW, true);
        } else {
          store.commit(MutationTypes.SHOW_HEADER_SHADOW, false);
        }
      };
      return { handleScroll };
    };

    const { handleScroll } = useHandleScroll();
    return { handleScroll };
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

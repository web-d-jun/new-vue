<template>
  <div id="defaultView">
    <Header />
    <div class="body-content">
      <Left />
      <div id="routerView" class="routerView__container" data-scrollbar>
        <router-view />
      </div>
    </div>
    <div class="right-container">
      <Right />
    </div>
  </div>
</template>
<script lang="ts">
import Header from "@/layout/default/header.vue";
import Left from "@/layout/default/left.vue";
import Right from "@/layout/default/right.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "../store/mutation-types";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
Scrollbar.use(OverscrollPlugin);

export default {
  name: "Default",
  components: {
    Header,
    Left,
    Right
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      const scrollbar = Scrollbar.init(
        document.querySelector<any>("#routerView")
      );
      scrollbar.addListener(status => {
        if (status.offset.y > 0) {
          store.commit(MutationTypes.SHOW_HEADER_SHADOW, true);
        } else {
          store.commit(MutationTypes.SHOW_HEADER_SHADOW, false);
        }
      });
    });
  }
};
</script>
<style lang="scss" scoped>
#defaultView {
  width: 100%;
  height: 100%;
  background-color: #272525;

  .body-content {
    display: flex;
    flex: 1;
    height: calc(100% - 54px);
  }
  .routerView__container {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .right-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: calc(100% - #{$headerHeight});
    right: 0;
    bottom: 0;
  }
}
</style>

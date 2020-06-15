<template>
  <div id="defaultView">
    <Header />
    <div class="body-content">
      <Left />
      <div class="routerView__container" @scroll.passive="handleScroll">
        <router-view />
      </div>
    </div>

    <!-- <Right /> -->
  </div>
</template>
<script lang="ts">
import Header from "@/layout/default/header.vue";
import Left from "@/layout/default/left.vue";
import { useStore } from "vuex";
import { MutationTypes } from "../store/mutation-types";
export default {
  name: "Default",
  components: {
    Header,
    Left
  },
  setup() {
    const store = useStore();

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
};
</script>
<style lang="scss" scoped>
#defaultView {
  width: 100%;
  height: 100%;
  background-image: url("../assets/default/background2.jpg");
  background-repeat: no-repeat;
  background-size: cover;

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
}
</style>

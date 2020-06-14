<template>
  <div id="header">
    <div class="menu-button__container">
      <i class="fas fa-bars" @click="showLeftDrawer"></i>
    </div>
    <div class="title__container">Vue3</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "../../store/mutation-types";

export default defineComponent({
  name: "Header",
  setup() {
    const store = useStore();

    const useHandleLeftDrawer = () => {
      const showLeftDrawer = () => {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, !store.state.leftDrawer);
      };
      return { showLeftDrawer };
    };

    const { showLeftDrawer } = useHandleLeftDrawer();
    return {
      showLeftDrawer
    };
  }
});
</script>
<style lang="scss" scoped>
#header {
  display: flex;
  height: 48px;
  border: 1px solid transparent;
  align-items: center;
  background-color: rgba(36, 41, 44, 0.8);
  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  .menu-button__container {
    flex: none;
    width: 50px;
    text-align: center;
    font-size: 24px;
  }
  .title__container {
    flex: 1;
  }
}
</style>

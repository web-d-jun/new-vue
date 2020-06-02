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

        console.log(store.state.leftDrawer)
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
  border: 1px solid;
  align-items: center;
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

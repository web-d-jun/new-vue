<template>
  <div id="header" :class="{ showBoxShdow: $store.state.showBoxShdow }">
    <div class="menu-button__container">
      <i class="fas fa-bars" @click="showLeftDrawer"></i>
    </div>
    <div class="title__container" @click="handleRouter">Vue3</div>
  </div>
</template>
<script lang="ts">
import { defineComponent,inject } from "vue";
import { useStore } from "vuex";
import { MutationTypes } from "../../store/mutation-types";

export default defineComponent({
  name: "Header",
  setup() {
    const store = useStore();
    const router = inject("routerSymbol", [{}]);

    const useHandleLeftDrawer = () => {
      const showLeftDrawer = () => {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, !store.state.leftDrawer);
      };
      return { showLeftDrawer };
    };

    const handleRouter = () => {
      router.push("/default/dashboard")
    }

    const { showLeftDrawer } = useHandleLeftDrawer();
    return {
      showLeftDrawer,
      handleRouter
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
  background: linear-gradient(45deg, #d5007d, #e53935);
  color: #fff;

  &.showBoxShdow {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .menu-button__container {
    flex: none;
    width: 50px;
    text-align: center;
    font-size: 24px;
  }
  .title__container {
    width: 50px;
    text-align: center;
    &:hover {
      cursor: pointer;
      text-shadow: 2px 0 5px #d5007d;
      -webkit-text-fill-color: #fff;
    }
  }
}
</style>

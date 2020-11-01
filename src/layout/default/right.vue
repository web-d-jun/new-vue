<template>
  <div id="rightContainer" :class="{ expand: $store.state.rightDrawer }">
    <div
      class="right-container__tab"
      @click="showRightDrawer"
      @mousedown="handleDrag"
    >
      menu
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "rightContainer",
  setup() {
    const store = useStore();
    const _m: any = inject("MutationTypes", {});

    const useHandleRightDrawer = () => {
      const showRightDrawer = () => {
        store.commit(
          _m.MutationTypes.CHANGE_RIGHT_DRAWER,
          !store.state.rightDrawer
        );
      };
      const handleDrag = (downEvent: object) => {
        console.log(downEvent, this);
        const handleMouseMove = (moveEvent: object) => {
          console.log(moveEvent);
        };
        document.addEventListener("mousemove", handleMouseMove);

        const handleMouseUp = () => {
          console.log("up");
          document.removeEventListener("mousemove", handleMouseMove);
        };
        document.addEventListener("mouseup", handleMouseUp);
      };
      return { showRightDrawer, handleDrag };
    };
    const { showRightDrawer, handleDrag } = useHandleRightDrawer();
    return {
      showRightDrawer,
      handleDrag
    };
  }
});
</script>
<style lang="scss" scoped>
#rightContainer {
  position: relative;
  width: 0px;
  height: 100%;
  border: 1px solid red;
  transition: all 1s ease-in-out;
  &.expand {
    width: 300px;
  }
  .right-container__tab {
    position: absolute;
    writing-mode: vertical-rl;
    left: -20px;
    top: 30%;
    width: 20px;
    height: 130px;
    border: 0.4px solid #fff;
    border-left: 0;
    transform: translate(0, -30%) rotate(180deg);
    border-radius: 0 6px 6px 0;
    text-align: center;
    line-height: 20px;
    letter-spacing: 10px;
    color: $defaultColor;
    outline: 0;
    animation: flicker 1.5s infinite alternate;
    @include cursor(pointer);
    @include user-select(none);
  }
}
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: -2px -2px 1rem #fff, 2px 2px 1rem rgb(158, 157, 157),
      0 0 2px #272525, 0 0 4px #272525, 0 0 6px #272525, 0 0 8px #272525,
      0 0 10px #272525;

    box-shadow: 0 0 2px 1px #fff, inset 0 0 2px 1px #fff;
  }
  20%,
  24%,
  55% {
    box-shadow: none;
    text-shadow: none;
  }
}
</style>
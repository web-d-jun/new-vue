<template>
  <div id="rightContainer">
    <div class="right-container__tab" @click="showRightDrawer">menu</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore} from "vuex";
export default defineComponent({
  name: "rightContainer",
  setup() {
    
    const store = useStore();
    const useHandleRightDrawer = () => {
      const showRightDrawer = () => {
        // store.commit(MutationTypes.CHANGE_LEFT_DRAWER, !store.state.leftDrawer);
      };
      return { showRightDrawer };
    };
    const { showRightDrawer } = useHandleRightDrawer();
    return {
      showRightDrawer
    };
  }
});
</script>
<style lang="scss" scoped>
#rightContainer {
  position: relative;
  width: 300px;
  height: 100%;
  border: 1px solid red;
  .right-container__tab {
    position: absolute;
    writing-mode: vertical-rl;
    left: -35px;
    top: 30%;
    width: 35px;
    height: 130px;
    border: 0.4px solid #fff;
    border-left: 0;
    transform: translate(0, -30%) rotate(180deg);
    border-radius: 0 6px 6px 0;
    text-align: center;
    line-height: 35px;
    letter-spacing: 10px;
    color: $defaultColor;
    outline: 0;
    background: #37375a;
    animation: flicker 1.5s infinite alternate;
    @include cursor(pointer);
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

    box-shadow: 0 0 2px 1px #fff, inset 0 0 2px 1px #fff, 0 0 4px 5px#37375a,
      inset 0 0 4px 5px #37375a, 0 0 6px 6px #37375a, inset 0 0 6px 6px #37375a;
  }
  20%,
  24%,
  55% {
    box-shadow: none;
    text-shadow: none;
  }
}
</style>
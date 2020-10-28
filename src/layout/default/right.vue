<template>
  <div id="rightContainer">right</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "rightContainer"
});
</script>
<style lang="scss" scoped>
#rightContainer {
  position: relative;
  width: 300px;
  height: 100%;
  border: 1px solid red;
  &::before {
    content: "menu";
    position: absolute;
    writing-mode: vertical-rl;
    left: -35px;
    top: 50%;
    width: 35px;
    height: 130px;
    border: 1px solid transparent;
    transform: translate(0, -50%) rotate(180deg);
    border-radius: 0 6px 6px 0;
    text-align: center;
    line-height: 35px;
    letter-spacing: 10px;
    color: $defaultColor;
    background: rgb(60, 80, 250);
  }
}
</style>
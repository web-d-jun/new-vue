<template>
  <div id="leftContainer">left</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/menu.ts";
export default defineComponent({
  name: "leftContainer",
  setup() {
    console.log(Menu)
  }
});
</script>
<style lang="scss" scoped>
#leftContainer {
  width: 250px;
  border: 1px solid;
  flex: none;
}
</style>
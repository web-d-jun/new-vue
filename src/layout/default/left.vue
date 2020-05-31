<template>
  <div id="leftContainer">
    <!-- <div v-for="item in menuList" :key="item.name">{{item.name}}</div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, readonly, onMounted } from "vue";
import Menu from "@/menu.ts";
export default defineComponent({
  name: "leftContainer",
  setup() {
    const menuList = readonly<object>(Menu);
    onMounted(() => {
      console.log("?");
    });

    return {
      menuList
    };
  }
});
</script>
<style lang="scss" scoped>
@import "@/common.scss";
#leftContainer {
  width: 250px;
  height: 100%;
  border: 1px solid;
  flex: none;
  display: flex;
  flex-direction: column;
  transition: width 500ms ease-out;
}
@media all and (max-width: 1024px) {
  #leftContainer {
    width: 0;
  }
}
</style>
<template>
  <div id="leftContainer">
    <div v-for="item in menuList" :key="item.name">{{item.name}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, readonly, onMounted } from "vue";
import Menu from "@/menu.ts";
export default defineComponent({
  name: "leftContainer",
  setup() {
    const menuList = readonly<object>(Menu);
    console.log(Menu);
    onMounted(() => {
      console.log('?')
    });

    return {
      menuList
    };
  }
});
</script>
<style lang="scss" scoped>
#leftContainer {
  width: 250px;
  border: 1px solid;
  flex: none;
}
@media all and (max-width: 1024px) {
}
</style>
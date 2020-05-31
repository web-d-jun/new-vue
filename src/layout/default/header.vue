<template>
  <div id="header">
    <div class="menu-button__container">
      <i class="fas fa-bars"></i>
    </div>
    <div class="title__container">Vue3</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
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

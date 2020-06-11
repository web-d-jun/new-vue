<template>
  <div id="defaultView">
    <Header />
    <div class="body-content">
      <Left />
      <div class="routerView__container">
        <router-view />
      </div>
    </div>

    <!-- <Right /> -->
  </div>
</template>
<script lang="ts">
import Header from "@/layout/default/header.vue";
import Left from "@/layout/default/left.vue";
export default {
  name: "Default",
  components: {
    Header,
    Left
  }
};
</script>
<style lang="scss" scoped>
#defaultView {
  width: 100%;
  height: 100%;
  .body-content {
    display: flex;
    flex: 1;
    height: calc(100% - 54px);
  }
  .routerView__container {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>

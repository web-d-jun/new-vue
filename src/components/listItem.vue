<template>
  <div id="listItem">
    <!-- <div class="animation" v-if="rippleShowState.value"></div> -->
    <slot />
  </div>
</template>
<script>
export default {
  name: "ListItem",
  setup() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#listItem {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  height: 50px;
  color: rgb(199, 199, 199);
  background-position: center;
  transition: all 0.8s;

  .animation {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #bdc3c7;
  }
  &:hover {
    cursor: pointer;
    background-color: #43435e;
    background: #272525;
  }
}
</style>

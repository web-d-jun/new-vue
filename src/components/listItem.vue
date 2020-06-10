<template>
  <div id="listItem" class="material-ripple" @click="handleRippleShow">
    <!-- <div class="animation" v-if="rippleShowState.value"></div> -->
    <slot />
  </div>
</template>
<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "ListItem",
  setup() {
    const handleRippleShow = () => {
      console.log('?')
    };

    return {
      handleRippleShow
    };
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
  }
}
</style>

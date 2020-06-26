<template>
  <div class="input-container">
    <input class="input" />
    <span class="focus-input"></span>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "InputContainer",
  props: {
    label: String,
  },
  setup(props) {
    console.log(props);
    const propsObj = reactive({
      label: props.label,
    });
    return {
      propsObj,
    };
  },
});
</script>
<style lang="scss" scoped>
.input-container {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  .input {
    width: 100%;
    height: 50px;
    background: transparent;
    font-size: 14px;
    color: #555555;
    line-height: 1.2;
    border: none;
    outline: none;
    padding: 0 2px;
    &:focus + .focus-input::before {
      width: 100%;
    }
  }
  .focus-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.4s;
      -moz-transition: all 0.4s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      background: linear-gradient(45deg, #d5007d, #e53935);
    }
  }
}
</style>

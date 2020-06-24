<template>
  <div class="InputContainer">
    <div class="label">{{propsObj.label}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "InputContainer",
  props: {
    label: String
  },
  setup(props) {
    console.log(props);
    const propsObj = reactive({
      label: props.label
    });
    return {
      propsObj
    };
  }
});
</script>
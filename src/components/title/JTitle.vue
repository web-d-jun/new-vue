<template>
  <div class="title__container">{{ propsObj.title }}</div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'JTitle',
  props: {
    title: {
      type: String,
      default: '-',
    },
  },
  setup(props) {
    const propsObj = reactive({
      title: props.title,
    });
    return {
      propsObj,
    };
  },
});
</script>
<style lang="scss" scoped>
.title__container {
  width: 100%;
  height: 40px;
//   border-bottom: 1px solid #a9a;
  background-color: #2d2d2d;
  color: $fontColor;
  line-height: 40px;
  padding-left: 8px;
  font-weight: bold;
  font-size: 20px;
}
</style>
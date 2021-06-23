<template>
  <JTitle title="스마트전단지 상세" />
  <div class="container">상세</div>
</template>
<script lang="ts">
import { myNamespace } from 'globa-types';
/**
 * @type components
 */

export default {
  setup() {
    const Foo: myNamespace.Foo = 'foo';
    console.log(Foo)
    return {};
  },
};
</script>
<style lang="scss" scopd>
@import './scss/smartEventDetail.scss';
</style>
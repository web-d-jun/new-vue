<template>
  <JTitle title="스마트전단지 상세" />
  <div class="container">
    <div class="box__wrap">
      <div class="box title neumorphism-pressed">
        <input type="text" class="inner__input default-input" placeholder="행사제목" />
      </div>
    </div>
    <div class="box__wrap">
      <div class="box calendar neumorphism-pressed flex align-center">
        <i class="far fa-calendar-alt"></i>
        <div class="date-range flex">
          <input type="text" class="inner__input default-input" placeholder="0000-00-00" /> <span>~</span> <input type="text" class="inner__input default-input" placeholder="0000-00-00" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { myNamespace } from 'globa-types';
/**
 * @type components
 */

export default {
  components: {},
  setup() {
    const Foo: myNamespace.Foo = 'foo';
    console.log(Foo);
    return {};
  },
};
</script>
<style lang="scss" scopd>
@import './scss/smartEventDetail.scss';
</style>
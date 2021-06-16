<template>
  <div class="carousel__container">
    <button type="button" class="button button--prev default-button np-button np-button-flat active" v-if="!props.show" @click="prev"><i class="fas fa-angle-left"></i></button>
    <button type="button" class="button button--next default-button np-button np-button-flat active" v-if="!props.show" @click="next"><i class="fas fa-angle-right"></i></button>
    <slot :sliderValue="slider.value"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Carousel',
  props: {
    show: Boolean,
    sliderInitValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const slider = reactive({
      value: 0,
    });
    const prev = (): void => {
      if (slider.value === 0) {
        return;
      }
      slider.value += props.sliderInitValue;
    };
    const next = (): void => {
      slider.value -= props.sliderInitValue;
      // console.log(slider.value);
    };

    return {
      props,
      prev,
      next,
      slider,
    };
  },
});
</script>
<style lang="scss" scoped>
.carousel__container {
  position: relative;
  width: 100%;
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: $grayButtonFonttColor;
    font-size: 2.5rem;
    @include cursor(pointer);
    &--prev {
      left: -70px;
    }
    &--next {
      right: -70px;
    }
  }
}
</style>
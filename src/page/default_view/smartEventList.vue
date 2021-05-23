<template>
  <JTitle title="스마트전단지" />
  <div class="container">
    <div class="option__container">
      <button type="button" class="button add default-button neumorphism neumorphism-convex active">등록</button>
      <!-- <button type="button" class="button remove default-button"><i class="fas fa-minus"></i> 삭제</button> -->
    </div>
    <Carousel :show="$store.state.isMobile" :sliderInitValue="640">
      <template #default="propsObj">
        <div class="smart-view-list__container">
          <div :class="['smart-view-list-container__wrap', { mobile: $store.state.isMobile }]" :style="{ left: `${propsObj.sliderValue}px` }">
            <div class="smart-view-box neumorphism neumorphism-flat" v-for="i in 5" :key="i"></div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from 'vue';
import axios, { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
/**
 * @type composables
 */
import useProgressBar from '@/composables/useProgressBar';
/**
 * @type components
 */
import JTitle from '@/components/title/JTitle.vue';
import Carousel from '@/components/carousel/default.vue';
// import JLines from '@/components/JLines.vue';

export default {
  name: 'smartEventList',
  components: {
    JTitle,
    Carousel,
  },
  setup() {
    const { setProgressBar } = useProgressBar();
    const data = reactive({
      list: [],
    });

    axios.get('/mock/smart-event-list.json').then((res: AxiosResponse) => {
      // console.log(res.data);
      data.list = res.data;
    });
    onMounted(() => {
      setProgressBar();
    });
    return {
      data,
      dayjs,
    };
  },
};
</script>
<style lang="scss" scopd>
@import './scss/smartEventList.scss';
</style>
<template>
  <JTitle title="smartEventList" />
  <div class="container">
    <div class="wrap" v-for="(item, index) in data.list" :key="index">
      <div class="contents">
        <div class="header">{{ dayjs().format('YYYYMMDDHHmmss') }} - {{ item.title }}</div>
        <JLines />
      </div>
    </div>
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
import JLines from '@/components/JLines.vue';

export default {
  name: 'smartEventList',
  components: {
    JTitle,
    JLines,
  },
  setup() {
    const { setProgressBar } = useProgressBar();
    const data = reactive({
      list: [],
    });

    axios.get('/mock/smart-event-list.json').then((res: AxiosResponse) => {
      console.log(res.data);
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
.container {
  width: 100%;
  height: 100%;
  padding: 10px;
  max-width: 900px;
  margin: 0 auto;
  .wrap {
    width: 100%;
    padding: 10px 0;
    .contents {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      .header {
        width: 100%;
        height: 30px;
        text-align: center;
        color: $defaultColor;
        line-height: 30px;
      }
    }
  }
}
</style>
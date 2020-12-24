<template>
  <div id="dashboardContainer">
    <canvas id="myChart"></canvas>
    <div class="data-container__wrap" v-for="(item, index) in dashBoardDataState.value" :key="index">
      <div class="data-container front">
        <div class="data-contents">
          <div class="data__header">{{ item.title }}</div>
          <div class="data__body">{{ item.data }}</div>
          <div class="data__footer"></div>
        </div>
      </div>
      <div class="data-container back">
        <div class="data-contents">
          <div class="data__header">back</div>
          <div class="data__body">{{ index }}</div>
          <div class="data__footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dashBoardData from '@/api/dashboard';
import { reactive, onMounted } from 'vue';
import useProgressBar from '@/composables/useProgressBar.ts';
import Chart from 'chart.js';

export default {
  name: 'Dashboard',

  setup() {
    const dashBoardDataState = reactive({
      value: dashBoardData,
    });

    // if (document.readyState === 'loading') {
    //   console.log('1')
    // }
    // if (document.readyState === 'interactive') {
    //   console.log('2')
    // }

    // document.addEventListener('readystatechange', () => {
    //   if (document.readyState === 'complete') {
    //     console.log('3')
    //   }
    // });
    const { setProgressBar } = useProgressBar();
    onMounted(() => {
      setProgressBar();
      const ctx = { value: document.getElementById('myChart') };
      new Chart(ctx.value, {
        type: 'bar',
        data: [12, 19, 3, 5, 2, 3],
      });
    });

    return {
      dashBoardDataState,
    };
  },
};
</script>
<style lang="scss" scoped>
#dashboardContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 900px;
  margin: auto;

  .data-container__wrap {
    position: relative;
    width: 430px;
    height: 200px;
    margin: 10px;
    transition: all 300ms ease-in;

    &:hover {
      .front {
        transform: rotateY(-180deg);
      }
      .back {
        transform: rotateY(0deg) !important;
      }
    }
    .data-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      border: 1px solid transparent;
      border-radius: 10px;
      backface-visibility: hidden;
      transition: all 1.2s;
      &.back {
        transform: rotateY(180deg);
        // backface-visibility: hidden;
      }
      &::before {
        position: absolute;
        content: ' ';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border: 1px solid;
        background: rgb(22, 22, 22);
        opacity: 0.4;
        z-index: -1;
        border: 1px solid transparent;
        border-radius: 10px;
      }
      .data-contents {
        padding: 10px;
        width: 100%;
        color: #fff;

        .data__header {
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
        }
        .data__body {
          width: 100%;
          height: 80px;
          line-height: 80px;
          text-align: center;
          font-size: 40px;
        }
        .data__footer {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 875px) {
  #dashboardContainer {
    width: auto;
    margin: 0;
    min-width: 200px;
    .data-container__wrap {
      width: 100%;
    }
  }
}
</style>

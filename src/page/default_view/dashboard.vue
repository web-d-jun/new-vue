<template>
  <div id="dashboardContainer">
    <div class="data-container__wrap" v-for="(item,index) in dashBoardDataState.value" :key="index">
      <div class="data-container">
        <div class="data__header">{{item.title}}</div>
        <div class="data__body">{{item.data}}</div>
        <div class="data__footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import dashBoardData from "@/api/dashboard";
import { reactive } from "vue";
export default {
  name: "Dashboard",
  setup() {
    const dashBoardDataState = reactive({
      value: dashBoardData
    });
    return {
      dashBoardDataState
    };
  }
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
    width: 430px;
    height: 200px;
    padding: 10px;
    transition: all 300ms ease-in;
    .data-container {
      border: 1px solid black;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .data__header {
        width: 100%;
      }
      .data__body {
        width: 100%;
      }
      .data__footer {
        width: 100%;
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

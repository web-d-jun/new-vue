<template>
  <div id="dashboardContainer">
    <div class="data-container__wrap" v-for="(item,index) in dashBoardDataState.value" :key="index">
      <div class="data-container">
         <v-alert type="success">
      I'm a success alert.
    </v-alert>
    <v-badge
          color="pink"
          dot
        >
          Item One
        </v-badge>
        <div class="data-contents">
          <div class="data__header">{{item.title}}</div>
          <div class="data__body">{{item.data}}</div>
          <div class="data__footer"></div>
        </div>
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
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      border: 1px solid transparent;
      border-radius: 10px;
      &::before {
        position: absolute;
        content: " ";
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

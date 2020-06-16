<template>
  <div id="dashboardContainer">
    <div class="data-container__wrap" v-for="i in 8" :key="i">
      <div class="data-container">{{ i }}</div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Dashboard"
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

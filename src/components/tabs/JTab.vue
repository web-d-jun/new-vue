<template>
  <div id="jTabsContainer">
    <div class="tab__title">Select Mode</div>
    <div class="tab__container">
      <div v-for="(tab, index) in tabs" :key="index" :class="['j-tab__contents__wrap']">
        <div :class="['j-tab__contents neumorphism-flat cursor-pointer', { selected: selectedTab.value === tab.key }]" @click="selectedTab.value = handleClickTab(tab.key)">
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div class="body__container">
      <div class="body__contents neumorphism-flat">
        <slot :tab="selectedTab.value"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';
interface Tabs {
  key: string;
  name: string;
}
export default defineComponent({
  props: {
    tabs: {
      type: Array as PropType<Array<Tabs>>,
      default: [],
      required: true,
    },
  },
  name: 'JTab',

  setup(props) {
    const selectedTab = reactive({
      value: props.tabs[0].key,
    });
    const handleClickTab: (tab: string) => string = (tab: string): string => {
      return tab;
    };
    return {
      selectedTab,
      handleClickTab,
    };
  },
});
</script>
<style lang="scss" scoped>
#jTabsContainer {
  width: 100%;
  height: 100%;
  .tab__title {
    font-size: 2rem;
    color: $pointColor;
    height: 40px;
    line-height: 40px;
  }
  .tab__container {
    height: 50px;
    .j-tab__contents__wrap {
      padding-right: 15px;
      display: inline-block;
    }
    .j-tab__contents {
      width: auto;
      height: 100%;
      min-width: 110px;
      text-align: center;
      line-height: 50px;
      border-radius: 1rem;
      color: $defaultColor;
      font-size: 1.5rem;
      margin-right: 2px;
      &.selected {
        color: $pointColor;
      }
    }
  }
  .body__container {
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    position: relative;
    .body__contents {
      padding: 1rem;
      border-radius: 10px;
    }
  }
}
</style>
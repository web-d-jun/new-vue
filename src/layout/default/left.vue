<template>
  <transition name="fade">
    <div id="leftContainer" v-if="$store.state.leftDrawer">
      <!-- <div v-for="item in menuList" :key="item.name">{{item.name}}</div> -->
      <br />
      <br />
      <br />
      <br />
      <br />
      {{$store.state.leftDrawer}}
    </div>
  </transition>
</template>
<script lang="ts">
import {
  defineComponent,
  readonly,
  onMounted,
  watchEffect,
  reactive
} from "vue";
import Menu from "@/menu.ts";
import { useStore } from "vuex";
import { MutationTypes } from "../../store/mutation-types";

export default defineComponent({
  name: "leftContainer",
  setup() {
    const menuList = readonly<object>(Menu);
    const store = useStore();

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, false);
      } else if (window.innerWidth > 1024) {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, true);
      }
    });

    return {
      menuList
    };
  }
});
</script>
<style lang="scss" scoped>
@import "@/common.scss";
#leftContainer {
  width: 250px;
  height: 100%;
  border: 1px solid;
  flex: none;
  display: flex;
  flex-direction: column;
  background-color: rgb(50,50,72);
}
</style>

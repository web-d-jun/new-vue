<template>
  <transition name="slide-fade">
    <div id="leftContainer" v-if="$store.state.leftDrawer">
      <List>
        <div v-for="item in menuList" :key="item.name">{{item.name}}</div>
      </List>
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
import List from "@/components/list.vue";

export default defineComponent({
  name: "leftContainer",
  components: {
    List
  },
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
  background-color: rgb(50, 50, 72);
}
.slide-fade-enter-active {
  transition: all 300ms ease;
}
.slide-fade-leave-active {
  transition: all 800ms cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>

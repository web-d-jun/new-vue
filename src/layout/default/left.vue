<template>
  <transition name="slide-fade">
    <div id="leftContainer" v-if="$store.state.leftDrawer">
      <List>
        <List-item
          v-for="item in menuList"
          :key="item.name"
          @click.exact="handleRouterGo(item.path)"
        > 
          <div class="wrap">
            <List-item-action>
              <i class="material-icons">{{ item.icon }}</i>
            </List-item-action>
            <List-item-title>{{ item.name }}</List-item-title>
          </div>
          <Line v-if="item.line" />
        </List-item>
      </List>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, readonly } from "vue";
import Menu from "@/menu.ts";
import { useStore } from "vuex";
import { MutationTypes } from "../../store/mutation-types";
import List from "@/components/list.vue";
import ListItem from "@/components/listItem.vue";
import ListItemAction from "@/components/list_item_action.vue";
import ListItemTitle from "@/components/list_item_title.vue";
import Line from "@/components/line.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "leftContainer",
  components: {
    List,
    ListItem,
    ListItemAction,
    ListItemTitle,
    Line
  },
  setup() {
    const menuList = readonly<object>(Menu);
    const store = useStore();
    const router = useRouter();

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, false);
      } else if (window.innerWidth > 1024) {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, true);
      }
    });

    const useHandleRouterGo = () => {
      const handleRouterGo = (path: string) => {
        router.push(path);
      };
      return { handleRouterGo };
    };
    const { handleRouterGo } = useHandleRouterGo();
    return {
      menuList,
      handleRouterGo
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
  background-color: rgba(36, 41, 44, 0.3);
  border: 1px solid transparent;

  .wrap {
    margin-left: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .material-icons {
      font-size: 24px;
    }
  }
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

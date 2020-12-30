<template>
  <div class="bottom__container">
    <div class="button__contents" v-for="item in buttons" :key="item.id" @click="handleGoPage(item)">
      <button type="button" class="button">
        <div class="icon" v-html="item.icon" />
        <div class="name">{{ item.name }}</div>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useStore } from 'vuex';
import { MutationTypes } from '../../store/mutation-types';

export default defineComponent({
  name: 'Bottom',
  setup() {
    const store = useStore();
    const router = inject('routerSymbol', [{}]);
    const buttons: object[] = [
      {
        id: 1,
        name: 'menu',
        icon: '<i class="fas fa-align-left"></i>',
      },
      {
        id: 2,
        name: 'event',
        icon: '<i class="fas fa-list"></i>',
      },
      {
        id: 3,
        name: 'IAM',
        icon: '<i class="fas fa-home"></i>',
      },
      {
        id: 4,
        name: 'dashboard',
        icon: '<i class="fas fa-chart-line"></i>',
      },
      {
        id: 4,
        name: 'profile',
        icon: '<i class="fas fa-user"></i>',
      },
    ];
    // const MutationTypes = inject("MutationTypes",  );

    const useHandleLeftDrawer = () => {
      const showLeftDrawer = () => {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, !store.state.leftDrawer);
      };
      return { showLeftDrawer };
    };

    const handleRouter = () => {
      router.push('/default/dashboard');
    };

    const handleButtonGroup = (type: string) => {
      router.push(type);
    };
    const handleGoPage = (obj: object) => {
      console.log(obj);
    };
    const { showLeftDrawer } = useHandleLeftDrawer();
    return {
      showLeftDrawer,
      handleRouter,
      handleButtonGroup,
      buttons,
      handleGoPage,
    };
  },
});
</script>
<style lang="scss" scoped>
.bottom__container {
  display: flex;
  width: 100%;
  height: 56px;
  background-color: $defaultColor;
  border-top: 2px solid #a9a;
  box-shadow: 0 0 1rem #43435e;
  .button__contents {
    flex: 1;
    .button {
      width: 100%;
      height: 100%;
      outline: 0;
      border: 0;
      .icon {
        font-size: 20px;
        color: $blackFontColor;
      }
      .name {
        font-size: 12px;
        color: $blackFontColor;
      }
    }
  }
}
</style>

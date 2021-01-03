<template>
  <div class="bottom__container">
    <div :class="['button__contents', { selected: item.selected }]" v-for="item in buttons.items" :key="item.id">
      <button type="button" class="button" @click="[handleButtonOperation(item.name)]">
        <div class="icon" v-html="item.icon" />
        <div class="name">{{ item.name }}</div>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';
import { useStore } from 'vuex';
import { MutationTypes } from '../../store/mutation-types';

interface Buttons {
  id: number;
  name: string;
  icon: string;
  selected: boolean;
}
export default defineComponent({
  name: 'Bottom',
  setup() {
    const store = useStore();
    const router = inject('routerSymbol', [{}]);
    store.commit(MutationTypes.CHANGE_LEFT_DRAWER, false);
    const buttons = reactive({
      items: [
        {
          id: 1,
          name: 'menu',
          icon: '<i class="fas fa-align-left"></i>',
          selected: false,
        },
        {
          id: 2,
          name: 'event',
          icon: '<i class="fas fa-list"></i>',
          selected: false,
        },
        {
          id: 3,
          name: 'IAM',
          icon: '<i class="fas fa-home"></i>',
          selected: false,
        },
        {
          id: 4,
          name: 'dashboard',
          icon: '<i class="fas fa-chart-line"></i>',
          selected: false,
        },
        {
          id: 4,
          name: 'profile',
          icon: '<i class="fas fa-user"></i>',
          selected: false,
        },
      ],
    });

    // const MutationTypes = inject("MutationTypes",  );

    const handleButtonOperation = (name: string) => {
      if (store.state.leftDrawer) {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, false);
      }
      switch (name) {
        case 'menu':
          store.commit(MutationTypes.CHANGE_LEFT_DRAWER, !store.state.leftDrawer);
          break;
        case 'event':
          router.push('/default/smartview-event-list/');
          break;
        case 'IAM':
          router.push('/main/');
          break;
        case 'dashboard':
          router.push('/default/dashboard/');
          break;
        case 'profile':
          alert('준비중');
          break;
        default:
          console.log('why??');
      }
    };

    return {
      buttons,
      handleButtonOperation,
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
    &.selected {
      .icon,
      .name {
        color: $signColor2;
        transition: color 0.3s ease-in-out;
      }
    }
  }
}
</style>

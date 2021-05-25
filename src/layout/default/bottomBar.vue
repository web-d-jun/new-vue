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
import { defineComponent, inject, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { MutationTypes } from '../../store/mutation-types';

export default defineComponent({
  name: 'Bottom',
  setup() {
    const store = useStore();
    const router = inject('routerSymbol', [{}]);
    const rootDocument = document.getElementById('app') as HTMLDivElement;

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
      if (store.state.leftDrawer && name !== 'menu') {
        store.commit(MutationTypes.CHANGE_LEFT_DRAWER, false);
      }
      switch (name) {
        case 'menu':
          store.commit(MutationTypes.CHANGE_LEFT_DRAWER, !store.state.leftDrawer);
          break;
        case 'event':
          router.push('/default/smart-event-list/');
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
    onMounted(() => {
      /**
       * @buttonRippleEvent
       */
      const buttonsElement = rootDocument.getElementsByClassName('button');
      Array.prototype.forEach.call(buttonsElement, (e) => {
        e.addEventListener('click', (event: MouseEvent) => {
          const circle = document.createElement('div');
          circle.classList.add('ripple');
          const d = Math.max(e.clientWidth, e.clientHeight);
          circle.style.width = circle.style.height = d + 'px';
          circle.style.left = event.clientX - e.offsetLeft - d / 2 + 'px';
          circle.style.top = event.clientY - e.offsetTop - d / 2 + 'px';

          setTimeout(() => {
            e.removeChild(circle);
          }, 2000);
          e.appendChild(circle);
        });
      });
    });

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
  background-color: #fff;
  border-top: 2px solid #a9a;
  box-shadow: 0 0 1rem #43435e;
  .button__contents {
    flex: 1;

    .button {
      width: 100%;
      height: 100%;
      outline: 0;
      border: 0;
      position: relative;
      overflow: hidden;
      background-color: #232629;
      .icon {
        font-size: 20px;
        color: $grayButtonFonttColor;
      }
      .name {
        font-size: 12px;
        color: $grayButtonFonttColor;
      }
      ::v-deep .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        transform: scale(0);
        animation: ripple 0.4s linear;
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

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>

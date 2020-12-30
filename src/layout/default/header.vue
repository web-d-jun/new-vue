<template>
  <div class="header" :class="{ showBoxShdow: $store.state.showBoxShdow }">
    <div class="header__icon__container" v-if="$store.state.isMobile">
      <img :src="require('@/assets/img/logo.png')" alt="" />
    </div>
    <div class="menu-button__container" v-if="!$store.state.isMobile">
      <i class="fas fa-bars" @click="showLeftDrawer"></i>
    </div>
    <div class="option-butons__container" v-if="!$store.state.isMobile">
      <JButton :title="'I-PICK'" />
      <div class="button button--main shadow" @click="handleButtonGroup('/main/')"><i class="fas fa-home"></i> <sub>IAM</sub></div>
      <div class="button button--logout shadow" @click="handleButtonGroup('/login/')"><i class="fas fa-sign-out-alt"></i> <sub>Logout</sub></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useStore } from 'vuex';
import { MutationTypes } from '../../store/mutation-types';
import JButton from '@/components/button/JButton.vue';

export default defineComponent({
  name: 'Header',
  components: {
    JButton,
  },
  setup() {
    const store = useStore();
    const router = inject('routerSymbol', [{}]);
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
    const { showLeftDrawer } = useHandleLeftDrawer();
    return {
      showLeftDrawer,
      handleRouter,
      handleButtonGroup,
    };
  },
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  height: $headerHeight;
  border: 1px solid transparent;
  align-items: center;
  background: linear-gradient(45deg, #d5007d, #e53935);

  &.showBoxShdow {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .header__icon__container {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .menu-button__container {
    flex: none;
    width: 50px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
  .title__container {
    width: 50px;
    text-align: center;
    color: #fff;
    &:hover {
      cursor: pointer;
      text-shadow: 2px 0 5px #d5007d;
      -webkit-text-fill-color: #fff;
    }
  }
  .option-butons__container {
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px;
    .button {
      width: 100px;
      height: 35px;
      font-size: 20px;
      text-align: center;
      line-height: 35px;
      margin: 0 5px;
      background-color: rgba(255, 255, 255, 0.1);
      &--logout {
        color: #fff;
      }
      &--main {
        color: #fff;
      }
      &.circle {
        border-radius: 50%;
      }
      &:hover {
        cursor: pointer;
        &.shadow {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
      }
    }
  }
}
</style>

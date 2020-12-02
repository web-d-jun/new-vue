<template>
  <div class="study__container">
    <div class="menu__contents">
      <Right />
    </div>
    <div class="menu__container">
      <div class="menu-title" @click="showRightDrawer">MENU</div>
    </div>
    <div class="box__container"></div>
    <div class="title">THIS IS STUDY</div>
  </div>
  <!-- <Cursor v-if="!$store.state.isMobile" /> -->
</template>

<script lang="ts">
import { inject } from 'vue';
import { useStore } from 'vuex';
import Right from '@/layout/study/right.vue';
// import Cursor from '@/components/mouse/cursor.vue';

export default {
  name: 'study',
  components: {
    // Cursor,
    Right,
  },
  setup() {
    const http: any = inject('http');
    http.get('/mock/test.json').then((res: object) => {
      console.log(res);
    });
    const store = useStore();
    const _m: any = inject('MutationTypes');
    const useHandleRightDrawer = () => {
      const showRightDrawer = () => {
        store.commit(_m.MutationTypes.CHANGE_RIGHT_DRAWER, !store.state.rightDrawer);
      };
      return { showRightDrawer };
    };

    const { showRightDrawer } = useHandleRightDrawer();
    return {
      showRightDrawer,
    };
  },
};
</script>
<style lang="scss" scoped>
.study__container {
  @include user-select(none);
  overflow: hidden;
  // cursor: none;
  .menu__contents {
    position: fixed;
    right: -30px;
    top: 45px;
    width: 100%;
  }
  .menu__container {
    position: fixed;
    right: 30px;
    top: 10%;
    .menu-title {
      width: 100%;
      color: $defaultColor;
      text-align: right;
      font-size: 20px;
      &:hover {
        color: $signColor2;
      }
      &::before {
        content: ' ';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: -20px;
        top: 5px;
      }
    }
  }
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: inset 5rem 10rem 15rem 0 #000, inset -5rem -10rem 15rem 0 #000;
  .box__container {
    background-size: 100% 100%;
    left: -25%;
    top: -25%;
    position: absolute;
    width: 150%;
    height: 150%;
    background-image: url('../assets/img/study/study_group.png');
    background-repeat: no-repeat;
    transform: rotate(-10deg);
    background-position: center;
    z-index: -9999;
  }
  .title {
    font-size: 2.5rem;
    position: absolute;
    bottom: 35%;
    right: 5%;
    text-shadow: -2rem 0 9px $defaultColor, 0px 6rem 5px $defaultColor, 4.6rem 2.3rem 3px $defaultColor, 0 -4rem 3px $defaultColor;
    color: transparent;
    transition: all 0.2s ease-out;
    z-index: -1;
  }
}
@media screen and (min-width: 1000px) {
  .title {
    font-size: 4rem !important;
  }
}
</style>

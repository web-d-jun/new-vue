<template>
  <div class="design__container">
    <div :class="['header', { expand: headerExpand }]" @mouseover.prevent="headerExpand = true" @mouseleave="headerExpand = false">
      <div :class="['scrollbar', { expand: headerExpand }]">
        <div class="image__container">
          <div class="image__contents" @click="handleRouter('design-1/')">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
        </div>
      </div>

      <div class="header-arrow-button__contents cursor-pointer" @click.prevent="headerExpand = !headerExpand" v-if="$store.state.isMobile">
        <i class="material-icons" v-if="!headerExpand">keyboard_arrow_down</i>
        <i class="material-icons" v-else>keyboard_arrow_up</i>
      </div>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { inject, ref } from 'vue';
export default {
  name: 'Design',
  setup() {
    const router = inject('routerSymbol', [{}]);
    const headerExpand = ref(false);

    const handleRouter: (name: string) => void = (routerName: string) => {
      return router.push(routerName);
    };
    return {
      headerExpand,
      handleRouter,
    };
  },
};
</script>
<style lang="scss" scoped>
$keepHeight: 40px;
.design__container {
  width: 100%;
  font-size: 15px;
  .header {
    position: fixed;
    width: 100%;
    height: $keepHeight;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    @include signature-background();
    &.expand {
      height: 200px;
    }
    .scrollbar {
      width: calc(100% - 70px);
      height: 40px;
      overflow-x: auto;
      overflow-y: hidden;
      transition: all 0.3s ease-in-out;
      &.expand {
        height: 220px;
      }
      .image__container {
        display: flex;
        align-items: center;
        width: calc(100% - 50px);
        height: 100%;

        .image__contents {
          height: 100%;
          display: inline-flex;
          align-items: center;
          .image {
            width: 110px;
            height: 25px;
            transition: all 0.3s ease-in-out;
            object-fit: contain;
            &.expand {
              width: 250px;
              height: 150px;
            }
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .header-arrow-button__contents {
      position: absolute;
      bottom: 5px;
      right: 20px;
      .material-icons {
        color: $defaultColor;
        font-size: 1.6rem;
      }
    }
  }
  .body {
    padding-top: $keepHeight;
    border: 1px solid blue;
  }
}
</style>
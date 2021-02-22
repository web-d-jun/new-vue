<template>
  <div class="design__container">
    <div :class="['header', { expand: headerExpand }]" @mouseover="headerExpand = true" @mouseleave="headerExpand = false">
      <div :class="['scrollbar', { expand: headerExpand }]">
        <div class="image__container">
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
          <div class="image__contents">
            <img :src="require('../assets/img/main/design.jpg')" alt="" :class="['image cursor-pointer', { expand: headerExpand }]" />
          </div>
        </div>
      </div>

      <div class="header-arrow-button__contents cursor-pointer" @click="headerExpand = !headerExpand">
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
    // router.push('design-1/');
    return {
      headerExpand,
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
      height: 60px;
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
          width: 100%;
          line-height: 1%;
          .image {
            width: 250px;
            height: 25px;
            transition: all 0.3s ease-in-out;
            object-fit: contain;
            &.expand {
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
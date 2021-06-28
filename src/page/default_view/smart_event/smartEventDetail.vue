<template>
  <Suspense>
    <template #default>
      <div class="suspense-container">
        <JTitle title="스마트전단지 상세" />
        <div class="container">
          <div class="box__wrap">
            <div class="box title neumorphism-pressed">
              <input type="text" class="inner__input default-input" placeholder="행사제목" />
            </div>
          </div>
          <div class="box__wrap">
            <div class="box calendar neumorphism-pressed flex align-center">
              <i class="far fa-calendar-alt"></i>
              <div class="date-range flex">
                <input type="text" class="inner__input default-input" placeholder="0000-00-00" /> <span>~</span> <input type="text" class="inner__input default-input" placeholder="0000-00-00" />
              </div>
            </div>
          </div>
          <div class="box__wrap">
            <j-tab :tabs="tabs">
              <template #default="slotProps">
                <div class="tab__container">
                  <div class="button-group flex">
                    <div class="button__wrap">
                      <button type="button" class="cursor-pointer default-button np-button-flat np-button active button button--add">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="button__wrap">
                      <button type="button" class="cursor-pointer default-button np-button-flat np-button active button button--delete">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div class="tab__contents" label="top" v-show="slotProps.tab === 'top'">top image</div>
                  <div class="tab__contents" label="middel" v-show="slotProps.tab === 'middle'">middle image</div>
                  <div class="tab__contents" label="bottom" v-show="slotProps.tab === 'bottom'">bottom image</div>
                </div>
              </template>
            </j-tab>
          </div>
        </div>
      </div>
    </template>
    <template #fallback> loading </template>
  </Suspense>
</template>
<script lang="ts">
import { myNamespace } from 'globa-types';
/**
 * @type components
 */
import JTab from '@/components/tabs/JTab.vue';
export default {
  components: {
    JTab,
  },
  setup() {
    const Foo: myNamespace.Foo = 'foo';
    console.log(Foo);
    const tabs = [
      {
        key: 'top',
        name: '위 이미지',
      },
      {
        key: 'middle',
        name: '중간 이미지',
      },
      {
        key: 'bottom',
        name: '아래 이미지',
      },
    ];
    return { tabs };
  },
};
</script>
<style lang="scss" scopd>
@import './scss/smartEventDetail.scss';
</style>
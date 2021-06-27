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
                <div class="tab__contents" label="top" v-show="slotProps.tab === 'top'">top</div>
                <div class="tab__contents" label="middel" v-show="slotProps.tab === 'middle'">middle</div>
                <div class="tab__contents" label="bottom" v-show="slotProps.tab === 'bottom'">bottom</div>
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
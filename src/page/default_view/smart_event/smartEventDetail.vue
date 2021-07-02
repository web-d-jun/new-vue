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
          <div class="np-linear"></div>
          <div class="box__wrap">
            <j-tab :tabs="tabs">
              <template #title>
                <div class="tab__title">Select Mode</div>
              </template>
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
          <div class="np-linear"></div>
          <div class="box__wrap flex flex-wrap">
            <div class="card__contents" v-for="i in 24" :key="i">
              <Card>
                <template #body>
                  <div class="product-image__wrap">
                    <div class="product-image__contents">
                      <img src="https://d2nic58uh63efu.cloudfront.net/product/8801500193672.png?w=400&f=webp&q=70" class="image" alt="" />
                    </div>
                  </div>
                  <div class="product-info__contents flex">
                    <div class="product-info-value"><input type="text" class="default-input neumorphism-pressed product-info-input" placeholder="상품명 입력" /></div>
                  </div>
                  <div class="product-info__contents flex">
                    <div class="product-info-value flex">
                      <input type="text" class="default-input neumorphism-pressed product-info-input price" placeholder="정상가 입력" />
                      <div class="price-tail">원</div>
                    </div>
                  </div>
                  <div class="product-info__contents flex">
                    <div class="product-info-value flex">
                      <input type="text" class="default-input neumorphism-pressed product-info-input price" placeholder="할인가 입력" />
                      <div class="price-tail">원</div>
                    </div>
                  </div>
                </template>
              </Card>
            </div>
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
import Card from '@/components/card/Card.vue';
export default {
  components: {
    JTab,
    Card,
  },
  setup() {
    const Foo: myNamespace.Foo = 'foo';
    console.log(Foo);
    const tabs = [
      {
        key: 'top',
        name: '이미지1',
      },
      {
        key: 'middle',
        name: '이미지2',
      },
      {
        key: 'bottom',
        name: '이미지3',
      },
    ];
    return { tabs };
  },
};
</script>
<style lang="scss" scopd>
@import './scss/smartEventDetail.scss';
</style>